// 리스팅 5.9 LocalHouse 컬렉션에 업데이트를 수행하는 래퍼 함수

updateLocalHouse = function (id, modifier) {
  LocalHouse.update (
    {
      '_id': id
    },
    modifier
  );
};
