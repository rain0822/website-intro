import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  actions: {
    next(page) {
      page++;
      this.transitionTo(`/?page=${page}`);
    },
    back(page) {
      page--;
      page = page > 1 ? page : 1;
      this.transitionTo(`/?page=${page}`);
    }
  }
});
