// 리스팅 3.19 하나의 이벤트 맵에서 이벤트 전파 차단하기

Template.green.events({
  'click button': function(event, template) {
    event.stopImmediatePropagation();
    $('body').css('background-color', 'green');
  }
});
