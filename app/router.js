import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('normal');
  this.route('template-only');
  this.route('template-only-with-let');
});

export default Router;
