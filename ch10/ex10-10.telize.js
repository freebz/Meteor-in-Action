// 리스팅 10.10 동기식 메서드를 사용하여 외부 API 조회하기

Meteor.methods({
  'geoJsonForIp': function (ip) {
    console.log('Method.geoJsonForIp for', ip);
    var apiUrl = 'http://www.telize.com/geoip/' + ip;
    var response = HTTP.get(apiUrl).data;
    return response;
  }
});
