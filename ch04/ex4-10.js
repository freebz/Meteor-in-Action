// 리스팅 4.10 아이디를 바탕으로 데이터베이스 중 하나의 도큐먼트를 템플릿으로 반환하기

Template.showHouse.helpers({
    house: function() {
	return HousesCollection.findOne({
	    _id: Session.get("selectedHouseId")
	});
    }
});
