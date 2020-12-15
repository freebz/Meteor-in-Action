// 리스팅 4.9 드롭다운 리스트로 반환되는 필드들을 제한하기

Template.selectHouse.helpers({
    houseNameId: function() {
	return HousesCollection.find({}, {fields: {name: 1, _id: 1}});
    },
    // isSelected definition
});
