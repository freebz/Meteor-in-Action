// 리스팅 10.18 컬렉션에 파일을 저장하는 saveFile 메서드

if (Meteor.isServer) {
  Meteor.methods({
    'saveFile': function (name, beffer) {
      FilesCollection.insert({
	name: name,
	base64: buffer
      })
    )
  });
}
