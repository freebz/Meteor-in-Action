// 리스팅 9.6 notifications 패키지를 위한 템플릿 헬퍼와 이벤트

Template.notificationArea.helpers([
  'notification': function () {
    return Session.get('notify');
  }
});

Template.notificationArea.events({
  'click button': function () {
    Session.set('notify', '');
  }
});
