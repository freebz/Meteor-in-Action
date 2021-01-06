// 리스팅 7.11 클라이언트에서 메서드 호출하기

Template.addWorkout.events({
  'submit form': function (evt, tpl) {
    evt.preventDefault();

    var distance = parseInt(tpl.$('input[name="distance"]').val());

    Meteor.call('CreateWorkout', {
      distance: distance
    }, function (error, result) {
      if (error) return alert('Error: ' + error.error);
    } );
  }
});
