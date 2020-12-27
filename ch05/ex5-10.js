// 리스팅 5.10 가구의 이름을 업데이트하는 이벤트 맵

Template.houseForm.events({
  'keyup input#house-name': function(evt) {
    evt.preventDefault();
    var modifier = {$set: {'name': evt.currentTarget.value}};
    updateLocalHouse(Session.get('selectedHouseId'), modifier);
  }
  // ...
});
