// 리스팅 5.13 plant 프로퍼티를 수정하기 위한 이벤트 맵

Template.plantFieldset.events({
  'keyup input.color, keyup input.instructions': function(evt) {
    evt.preventDefault();
    var index = evt.target.getAttribute("data-index");
    var field = evt.target.getAttribute("class");
    var plantProperty = 'plants.' + index + '.' + field;
    var modifier = {$set: {}};
    modifier['$set'][plantProperty] = evt.target.value;
    updateLocalHouse(Session.get('selectedHouseId'), modifier);
  }
});
