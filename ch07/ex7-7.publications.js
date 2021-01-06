// 리스팅 7.7 컬렉션에서 변화를 관찰하기

WorkoutsCollection
  .find(query)
  .observeChanges({
    added: function (id, fields) {
      // 매칭되는 쿼리에 새로운 도큐먼트가 추가되었을 때 할일
    },
    changed: function(id, fields) {
      // 어떤 도큐먼트가 바뀌었을 때 할 일
    },
    removed: function (id) {
      // 쿼리에 해당하는 도큐먼트가 하나 삭제되었을 때 할 일
    }
  });
