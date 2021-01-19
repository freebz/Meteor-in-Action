// 리스팅 9.8 notifications 패키지를 사용하여 알림 메시징 기능 추가

Template.gravatar.events({
  'click button': function (evt, tpl) {
    //...
    Meteor.call('getGravatar', email, function(err, res) {
      //...
      Session.set('gravatarUrl', res);
      Notifications.setSuccess('I found a gravatar image!');
    });
});
