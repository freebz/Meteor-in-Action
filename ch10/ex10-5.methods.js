// 리스팅 10.5 wrapAsync를 사용하여 함수 호출하기

setTimeoutFor3sCb = function (value, cb) {
  var result = value;
  Meteor.setTimeout(function () {
    console.log('Result after timeout', result);
    cb(null, result + 3)
  }, 3000);
}

Meteor.methods({
  'wrapAsyncMethod': function () {
    console.log('Method.wrapAsyncMethod');

    var returnValue = 0;
    returnValue = Meteor.wrapAsync(setTimeoutFor3sCb)(returnValue);
    console.log('resultComputation', returnValue);

    return returnValue;
  }
});
