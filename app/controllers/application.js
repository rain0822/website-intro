import Ember from 'ember';
import Controller from '@ember/controller';
const { inject: { service }, computed, observer } = Ember;

export default Controller.extend({
  queryParams: ['p'],
  p: 0,
  pageMax: 6,
  pageTemplate: computed('p', function() {
    return 'page' + this.get('p');
  }),
  screen: service(),
  ytHeight: computed('screen.width', function() {
    let width = this.get('screen.width');
    if (width > 992) return width / 4;
    return width / 2;
  }),
});
