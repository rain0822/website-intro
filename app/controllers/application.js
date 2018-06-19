import Ember from 'ember';
import Controller from '@ember/controller';
const { inject: { service }, computed} = Ember;

export default Controller.extend({
  pageMax: 9,
  appController: Ember.inject.controller('application'),
  currentRouteName: Ember.computed.reads('appController.currentRouteName'),
  screen: service(),
  ytHeight: computed('screen.width', function() {
    let width = this.get('screen.width');
    if (width > 992) return width / 4;
    return width / 2;
  }),
  p: computed('currentRouteName', function() {
    return this.get('currentRouteName').substring(4);
  })
});
