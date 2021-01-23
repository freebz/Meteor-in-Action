// 리스팅 10.6 순차적으로 메서드 실행하기

block = function(value, cb) {
  Meteor.setTimeout(function(){
    cb(null, true);
  }, 3000);
}

Meteor.methods({
  'sequential': function (value) {
    console.log('Method.sequential', value);
    Meteor.wrapAsync(block)(value);
    console.log('Method.sequential returns', value);
    return true;
  }
});
