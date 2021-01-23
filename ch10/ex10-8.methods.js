// 리스팅 10.8 어떤 메서드의 콜백 안에서 Meteor.userId() 사용

Meteor.methods({
  'unboundEnvironment': function () {
    console.log('Method.unboundEnvironment: ', Meteor.userId());

    setTimeoutFor3sCb(2, function () {
      console.log('3s later: ', Meteor.userId());
    });
  }
});
