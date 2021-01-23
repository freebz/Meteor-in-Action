// 리스팅 10.14 API를 호출하는 템플릿 핼퍼

Template.telize.helpers({
  location: function () {
    return Session.get('location');
  }
});

Template.telize.events({
  'click button': function (evt, tpl) {
    var ip = tpl.find('input#ipv4').value;
    Meteor.call('geoJsonForIp', ip, function (err, res) {
      if (err) {
	Session.set('location', {error: err});
      } else {
	Session.set('location', res);
	return res;
      }
    });
  }
});
