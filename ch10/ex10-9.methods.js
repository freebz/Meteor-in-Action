// 리스트 10.9 메서드의 콜백에 바인딩되는 Meteor.userId()의 사용

Meteor.methods({
  'bindEnvironment': function () {
    console.log('Method.bindEnvironment: ', Meteor.userId());
    setTimeoutFor3sCb(2, Meteor.bindEnvironment(function () {
      console.log('Method.bindEnvironment (3s delay): ', Meteor.userId());
    }));
  }
});
