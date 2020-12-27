// 리스팅 5.11 새로운 화초를 추가하기 위한 이벤트 맵

Template.houseForm.events({
  'click button.addPlant': function (evt) {
    evt.preventDefault();
    var newPlant = {color: '', instructions: ''};
    var modifier = {$push: {'plants': newPlant}};
    updateLocalHouse(Session.get('selectedHouseId'), modifier);
  },
  // ...
});
