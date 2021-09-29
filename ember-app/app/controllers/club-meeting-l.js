import Controller from '@ember/controller';
import Builder from 'ember-flexberry-data/query/builder';
import { inject as service } from '@ember/service';


export default Controller.extend({

  appState: service(),

  async _loadMeetingDates() {
    this.get('appState').loading();
    let model = this.get('model');
    let store = this.get('store');
    let meetingsList = []
    let reportsList = []
    // Initial meetings list with all Ids
    model.get('content').forEach((meeting) => {
      meetingsList.push({id: meeting.id, reports: []}) 
    })
       
    let builder = new Builder (store, 'i-i-s-club-report')
      .selectByProjection('ReportE')

    await store.query('i-i-s-club-report', builder.build())
      .then((reports) => {

      reports.forEach((report) => {
        let clubMeeting = report.get('clubMeeting')
        let clubMeetingId = clubMeeting.get('id')
        let speaker = report.get('speaker')
        let lastName = speaker.get('lastName')
        let firstName = speaker.get('firstName')
        let book = report.get('book')
        let title = book.get('title')
        let review = report.get('review')
        let bookScore = report.get('bookScore')
        let uRLPresentation = report.get('uRLPresentation')
        let uRLVideo = report.get('uRLVideo')
        let tempReportDate = report.get('reportDate')
        // Changing date format output to shorter version
        let reportDateStr = tempReportDate.toString()
        let reportDateFormatted = reportDateStr.split(' ').splice(1, 3).join(' ')          
        let reportObj = {
          clubMeetingId,
          reportDateFormatted,
          lastName,
          firstName,
          title,
          review,
          bookScore,
          uRLPresentation,
          uRLVideo,
        }
        let reportObjCopied = Object.assign({}, reportObj)
        reportsList.push(reportObjCopied)              
      })      
      // Adding reports to matching meetings
      for (let i = 0; i < meetingsList.length; i++) {
        let trickyMeetingsList = reportsList.filter((reportobj) => {
          return reportobj.clubMeetingId === meetingsList[i].id
        })

        let tempTrickyMeetingsList = [...trickyMeetingsList]
        // Adding formatted date to Meeting.date property
        meetingsList[i].reports = tempTrickyMeetingsList
        if (meetingsList[i].reports[0] && !meetingsList[i].date) {
          meetingsList[i].date = meetingsList[i].reports[0].reportDateFormatted
        }        
      }
      model.set('meetingsList', meetingsList)
      this.get('appState').success();
      
    })    
  },  
});
