Iron.Router.plugins.membersOnly = function (router, options) {
  router.onBeforeAction (function () {
    if (!Meteor.userId()) {
      this.render(this.lookupOption('membersOnlyTpl'));
    } else {
      this.next();
    }
  }, options);
};
