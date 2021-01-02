// 리스팅 6.12 로그인한 사용자가 새로운 메시지 삽입을 허용하게 하기

MessagesCollection.allow({
  insert: function (userId, doc) {
    return userId;
  }
});
