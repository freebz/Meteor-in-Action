// 리스팅 7.5 이벤트를 통해 limit 값을 10 만큼 증가시키기

Template.workoutList.events({
  'click button.show-more': function (evt, tpl) {
    var newLimit = Session.get('limit') + 10;
    Session.set('limit', newLimit);
  }
});
