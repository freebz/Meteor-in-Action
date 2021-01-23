// 리스팅 10.12 비동기식 API 호출을 만들기 위한 수정된 메서드

Meteor.methods({
  'geoJsonForIp': function (ip) {
    this.unblock();
    var apiUrl = 'http://telize.com/geoip/' + ip;
    var response = Meteor.wrapAsync(apiCall)(apiUrl);
    return response;
  }
});
