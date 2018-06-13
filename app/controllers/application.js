import Ember from 'ember';
import Controller from '@ember/controller';
const { inject: { service }, computed, observer } = Ember;

export default Controller.extend({
  queryParams: ['page'],
  page: 1,
  pageMax: 2,
  pageTemplate: computed('page', function() {
    return 'page' + this.get('page');
  }),
  screen: service(),
  ytHeight: computed('screen.width', function() {
    let width = this.get('screen.width');
    if (width > 992) return width / 4;
    return width / 2;
  }),
});
