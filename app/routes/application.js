import Route from '@ember/routing/route';
import {getOwner} from '@ember/application';

export default Route.extend({
  actions: {
    next(p) {
      p++;
      this.transitionTo(`page${p}`);
    },
    back(p) {
      p--;
      p = p > 0 ? p : 0;
      this.transitionTo(`page${p}`);
    }
  }
});
