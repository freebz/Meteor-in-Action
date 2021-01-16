// 리스팅 8.19 특정 라우트에 로그인할 것을 요구하기

// profileController.js
ProfileController = RouteController.extend({
  //...
  onBeforeAction: function () {
    if (Meteor.userId()) {
      this.render('membersOnly');
    } else {
      this.next();
    }
  }
  //...
});
