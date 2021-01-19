// 리스팅 9.4 notifications 패키지에 대한 단위 테스트

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('meteorinaction:notifications');
  api.addFiles('notifications-tests.js', 'client');
});
