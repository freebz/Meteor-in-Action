// 리스팅 10.16 단 하나의 파일만 발행하고 구독할 수 있게 하는 코드

if (Meteor.isServer) {
  Meteor.publish('files', function (file) {
    console.log("publish", file);
    return FilesCollection.find({
      name: file
    });
  });
}

if (Meteor.isClient) {
  Tracker.autorun(function (computation) {
    Meteor.subscribe('files', Session.get('file'));
  });
}
