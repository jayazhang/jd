'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jsonp = app.jsonp();
  router.get('/', controller.home.index);
  router.get('/jsonp/getKey', jsonp, controller.jsonp.getKey);
  router.get('/jd/gettokenv2', jsonp, controller.jsonp.getKey);
  router.get('/jd/stat', jsonp, controller.jsonp.getKey);
};
