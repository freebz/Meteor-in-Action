// 리스팅 6.13 필드를 추가하거나 빠진 것이 없도록 하는 deny 규칙

MessagesCollection.deny({
  insert: function (userId, doc) {
    var fieldsInDoc = _.keys(doc);
    var validFields = ['sender', 'recipient', 'timestamp', 'message', '_id'];
    if (_.difference(fieldsInDoc, validFields).length > 0) {
      console.log('additional fields found');
      return true;
    } else {
      console.log('all fields good');
      return false;
    }
  }
});
