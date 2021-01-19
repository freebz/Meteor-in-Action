// 리스팅 9.9 tinytest를 사용하여 Notification.setError 테스트

Tinytest.add('Msg - Error - setError', function (test) {
  var msgText = 'An error message';
  Notification.setError(msgText);
  test.equal(Session.get('notify').text, msgText);
  test.equal(Session.get('notify').type, 'error');
});
