// 리스팅 6.11 Messages 컬렉션에 대하여 allow 설정하기

// collections.js
MessagesCollection = new Mongo.Collection('messages');
MessagesCollection.allow({
  insert: function (userId, doc) {
    return userId;
  },
  update: function (userId, doc) {
    return true;
  },
  remove: function (userId, doc) {
    return doc.recipient === userId;
  }
});
