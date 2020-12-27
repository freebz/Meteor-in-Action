// 리스팅 5.14 화초 제거하기

Template.plantFieldset.events({
  'click button.removePlant': function (evt) {
    evt.preventDefault();
    var index = evt.target.getAttribute('data-index');
    var plants = Template.parentData(1).plants;
    plants.splice(index, 1);
    var modifier = {$set: {'plants': plants}};

    updateLocalHouse(Session.get('selectedHouseId'), modifier);
  },
  //...
});
