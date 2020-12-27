// 리스팅 5.18 autorun 안에 알림 설정

Template.houseForm.onCreated(function () {
  this.autorun(function() {
    if (HousesCollection.findOne(Session.get('selectedHouseId')) &&
	LocalHouse.findOne(Session.get('selectedHouseId')).lastsave <
	HousesCollection.findOne(Session.get('selectedHouseId')).lastsave) {
      Session.set('notification', {
	type: 'warning',
	text: "This document has been changed inside database!"
      });
    } else if (LocalHouse.findOne(Session.get('selectedHouseId')) &&
        LocalHouse.findOne(Session.get('selectedHouseId')).status === 'unsaved') {
      Session.set('notification', {
	type: 'reminder',
	text: 'Remember to save your change'
      });
    } else {
      Session.set('notification', '');
    }
  });
});
