// 리스팅 7.4 파라미터를 가진 발행에 대한 구독

Session.setDefault('limit', 10);

// Subscriptions
Tracker.autorun(function (computation) {
  Meteor.subscribe('workouts', {
    limit: Session.get('limit')
  });
});
