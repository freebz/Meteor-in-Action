// 리스팅 6.14 메시지를 받은 사람만 제외하고, 다른 유저들에게는 메시지 삭제를 거부하도록 하기

MessagesCollection.deny({
  remove: function (userId, doc) {
    return doc.recipient !== userId;
  }
});
