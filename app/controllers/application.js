import Ember from 'ember';
import Controller from '@ember/controller';
const {computed} = Ember;

export default Controller.extend({
  pageMax: 9,
  appController: Ember.inject.controller('application'),
  currentRouteName: Ember.computed.reads('appController.currentRouteName'),
  p: computed('currentRouteName', function() {
    return this.get('currentRouteName').substring(4);
  })
});
