// 리스팅 11.4 debugger를 사용하여 중단점 설정하기

if (Meteor.isServer) {
  Meteor.startup(function () {
    var status = 'initialized';
    debugger;
    if (status === 'initialized') {
      status = 'done'
    }
    console.log('status is noe' + status);
  });
}
