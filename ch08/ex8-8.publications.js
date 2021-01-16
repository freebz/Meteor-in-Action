// 리스팅 8.8 1초 지연을 가진 프로필 컬렉션 발행

// publicatons.js
Meteor.publish('profiles', function () {
  profiles = Meteor.wrapAsync(function (cb) {
    Meteor.setTimeout(function () {
      cb(null, ProfilesCollection.find({}, {
	limit: 10
      }));
    }, 1000);
  })();

  return profiles;
});
