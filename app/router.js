import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('appliaction');
  for(var i=0; i< 10; i++) {
    this.route(`page${i}`);
  }
});

export default Router;
