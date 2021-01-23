// 리스팅 10.7 unblock 함수는 다른 함수들이 계속 실행되게 만든다.

Meteor.methods({
  unblock: function(value) {
    console.log('Method.unblock', value);

    this.unblock();

    Meteor.wrapAsync(block)(value);
    console.log('Method.unblock returns', value);
    return value;
  }
});
