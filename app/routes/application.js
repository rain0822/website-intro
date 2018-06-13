import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  actions: {
    next(p) {
      p++;
      this.transitionTo(`/?p=${p}`);
    },
    back(p) {
      p--;
      p = p > 1 ? p : 1;
      this.transitionTo(`/?p=${p}`);
    }
  }
});
