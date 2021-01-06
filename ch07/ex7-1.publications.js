// 리스팅 7.1 간단한 서버 쪽 발행

Meteor.publish('workouts', function() {
  return WorkoutsCollection.find({});
});
