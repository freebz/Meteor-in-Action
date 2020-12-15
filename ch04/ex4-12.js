// 리스팅 4.12 화초에 물을 주기 위한 이벤트 맵

Template.plantDetails.events({
  'click button.water': function(evt) {
    var plantId = $(evt.currentTarget).attr('data-id');
    Session.set(plantId, true);
  }
});
