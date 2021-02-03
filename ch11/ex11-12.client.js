// 리스팅 11.11 코르도바 dialogs 플러그인을 추가하여 이벤트를 바꾼다.

Template.select.events({
  'change #platform': function (evt) {
    var selectedPaltform = evt.currentTarget.value;
    if (Meteor.isCordova){
      navigator.notification.alert(
	'You picked ' + selectedPaltform,
	null,
	'Your choice',
	'I know'
      );

      navigator.notification.alert(
	'You selected',
	selectedPaltform
      );
    } else {
      console.log('selected ' + selectedPaltform)
    }
  }
});
