import EditFormController from 'ember-flexberry/controllers/edit-form';
import Builder from 'ember-flexberry-data/query/builder';
import { inject as service } from '@ember/service';



export default EditFormController.extend({
  parentRoute: 'i-i-s-club-book-l',

  appState: service(),

  async _loadData() {
    this.get('appState').loading();
    let model = this.get('model')
    let title = model.get('title')
    let bookReports = []
    
    let store = this.get('store');

    let builder = new Builder (store, 'i-i-s-club-report')
      .selectByProjection('ReportE')

    await store.query('i-i-s-club-report', builder.build())
      .then((reports) => {
        reports.forEach((report) => {
          let book = report.get('book')
          let superTitle = book.get('title')
          if ( title === superTitle ) {
            let reportEv = report.get('uRLVideo')
            bookReports.push(reportEv)
          }                      
        })
        model.set('bookReports', bookReports)
        this.get('appState').success()
      })
  }  
});
