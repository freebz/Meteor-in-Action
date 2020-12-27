// 리스팅 5.2 change 이벤트를 사용하여 로컬 스테이징 컬렉션에 새 집 정보를 추가하기

Template.selectHouse.events({
  'change #selectHouse': function (evt) {
    var selectedId = evt.currentTarget.value;
    var newId = LocalHouse.upsert(
      selectedId,
      HousesCollection.findOne(selectedId) || newHouse
    ).insertedId;
    if (!newId) newId = selectedId;
    Session.set('selectedHouseId', newId);
  }
});
