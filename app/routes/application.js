import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  actions: {
    next(p) {
      this.controller.set('event', 'toLeft');
      p++;
      this.transitionTo(`/?p=${p}`);
    },
    back(p) {
      this.controller.set('event', 'toRight');
      p--;
      p = p > 0 ? p : 0;
      this.transitionTo(`/?p=${p}`);
    }
  }
});
