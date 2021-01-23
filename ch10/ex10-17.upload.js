// 리스팅 10.17 unblock 함수는 다른 함수들이 계속 실행되게 만든다.

if (Meteor.isClient) {
  Template.upload.events({
    'change #file-upload': function (event, template) {
      var file = event.target.files[0];
      var name = event.target.files[0].name;

      var reader = new FileReader();
      reader.onload = function (file) {
	var result = reader.result;
	Meteor.call('saveFile', name, result);
      }
      reader.readAsDataURL(file);
    }
  });
}
