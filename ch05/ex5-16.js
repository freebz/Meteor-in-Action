// 리스팅 5.16 업데이트 수정 지시자에 status 추가하기

Template.houseForm.events({
  'click button#save-house': function (evt) {
    //...
    var modifier = {$set: {'lastsave': new Date(), 'status': 'saved'}};
  },
  'click button.addPlant': function (evt) {
    //...
    var modifier = {$push: {'plants': newPlant}, $set: {'status': 'unsaved'}};
  },
  'keyup input#house-name': function (evt) {
    //...
    var modifier = {$set: {'name': evt.target.value, 'status': 'unsaved'}};
  }
});

Template.plantFieldset.events({
  'click button.removePlant': function (evt) {
    //...
    var modifier = {$set: {'plants': plants, 'status': 'unsaved'}};
  },
  'keyup input.color, keyup.instructions': function (evt) {
    //...
    modifier['$set'].status = 'unsaved';
  }
});
