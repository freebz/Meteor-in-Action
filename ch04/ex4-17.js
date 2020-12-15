// 리스팅 4.17 새 집을 추가하기 위한 이벤트 맵

Template.houseForm.events({
  'click button#saveHouse': function (evt) {
    evt.preventDefault();
    var houseName = $('input[id=house-name]').val();
    var plantColor = $('input[id=plant-color]').val();
    var plantInstructions = $('input[id=plant-instructions]').val();
    Session.set('selectedHouseId', HousesCollection.insert({
      name: houseName,
      plants: [{
	color: plantColor,
	instructions: plantInstructions
      }]
    }));
    // empty the form
    $('input').val('');
  }
});
