// 리스팅 4.14 마지막 방문일을 추가하기 위해 확장한 이벤트 맵

Template.plantDetails.events({
  'click button.water': function(evt) {
    var plantId = $(evt.currentTarget).attr("data-id");
    Session.set(plantId, true);
    var lastvisit = new Date();
    HousesCollection.update({
      _id: Session.get("selectedHouseId")
    }, {
      $set: {
	lastvisit: lastvisit
      }
    });
  }
});
