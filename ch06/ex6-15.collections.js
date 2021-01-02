// 리스팅 6.15 사용자가 계정을 삭제할 수 있게 하기

Meteor.users.allow({
  remove: function (userId, doc) {
    return doc._id === userId;
  }
});
