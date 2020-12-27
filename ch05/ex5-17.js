// 리스팅 5.17 Session 변수에서 알림 메시지를 디스플레이하는 헬퍼

Template.notificationArea.helpers({
  notification: function () {
    return Session.get('notification');
  }
});
