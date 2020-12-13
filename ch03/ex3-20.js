// 리스팅 3.20 브라우저의 디폴트 행동 차단하기

Template.layout.events({
  'click a': function(event, template) {
    event.preventDefault();
    console.log('Please do not leave yet');
  }
});
