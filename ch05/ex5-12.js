// 리스팅 5.12 스테이징 도큐먼트에 있는 것을 타입스탬프와 함께 데이터베이스에 저장

Template.houseForm.events({
    //...
    'click button#save-house': function (evt) {
	evt.preventDefault();
	var id = Session.get('selectedHouseId');
	var modifier = {$set: {'lastsave': new Date()}};
	updateLocalHouse(id, modifier);
	// persist house document in remote db
	HousesCollection.upsert(
	    {_id: id},
	    LocalHouse.findOne(id)
	);
    }
});
