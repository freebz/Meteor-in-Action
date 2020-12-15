// 리스팅 4.7 집을 선택하기 위한 자바스크립트 코드

Template.selectHouse.helpers({
    houseNameId: function(){
	return HousesCollection.find({}, {});
    },
    isSelected: function() {
	return Session.equals('selectedHouseId', this._id) ? 'selected' : '';
    }
});
Template.selectHouse.events({
    'change #selectHouse': function(evt) {
	Session.set('selectedHouseId', evt.currentTarget.value);
    }
});
