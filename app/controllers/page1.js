import Ember from 'ember';
import Controller from '@ember/controller';
const { inject: { service }, computed} = Ember;

export default Controller.extend({
  screen: service(),
  ytHeight: computed('screen.width', function() {
    let width = this.get('screen.width');
    if (width > 992) return width / 4;
    return width / 2;
  }),
});
