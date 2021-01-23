// 리스팅 10.2 시뮬레이션 지연을 가진 논블록킹 메서드

setTimeoutFor3s = function (value) {
  var result = value;
  setTimeout(function() {
    result += 3;
    console.log('Result after timeout', result);
  }, 3000);
}

Meteor.methods({
  'nonBlockingMethod': function () {
    console.log('Method.nonBlockingMethod');

    var returnValue = 0;
    returnValue = setTimeoutFor3s(returnValue);
    console.log('resultComputation', returnValue);

    return returnValue;
  }
});
