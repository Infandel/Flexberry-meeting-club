import EditFormController from 'ember-flexberry/controllers/edit-form';
import { set } from '@ember/object';

export default EditFormController.extend({
  parentRoute: 'i-i-s-club-club-meeting-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-club-report+book':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'title',
            required: true,
            relationName: 'book',
            projection: 'BookL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-club-report+speaker':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'surnameWInitials',
            required: true,
            relationName: 'speaker',
            projection: 'SpeakerL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },

  actions: {
    configurateReportRow(rowConfig) {
      let readonlyColumns = ['reportDate'];
      set(rowConfig, 'readonlyColumns', readonlyColumns);
    },
  }
});
