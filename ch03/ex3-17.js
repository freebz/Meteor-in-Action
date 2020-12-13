// 리스팅 3.17 layout 템플릿을 위한 이벤트 맵

if (Meteor.isClient) {
  Template.layout.events({
    'click button': function(event, template) {
      $('body').css('background-color', 'red');
    },
    'mouseenter #redButton': function (event, template) {
      // start fancy animation
    }
  });
}
