// 리스팅 8.20 재사용 가능한 Iron.Router 플러그인 만들기

// membersOnly.js
Iron.Router.plugins.membersOnly = function (router, options) {
  router.onBeforeAction (function () {
    if (!Meteor.userId()) {
      this.render(this.lookupOption('membersOnlyTpl'));
    } else {
      this.next();
    }
  }, options);
};

// config.js
Router.plugin('membersOnly', {
  membersOnlyTpl: 'memberonly',
  only: ['profile.details']
});
