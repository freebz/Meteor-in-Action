// 리스팅 6.8 server/server.js에서 픽스처와 같이 페이스북 OAuth 설정값 삽입하기

if (ServiceConfiguration.configurations.find({
  service: 'facebook'
}).count() === 0) {
  ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: 'OAuth-credentials-from-facebook',
    secret: 'OAuth-credentials-from-facebook',
    loginStyle: 'popup'
  });
}
