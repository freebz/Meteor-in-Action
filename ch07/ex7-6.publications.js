// 리스팅 7.6 발행 안에서 수행되는 집계(Aggregation)

Meteor.publish('distanceByMonth', function () {
  var subscription = this;

  var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;

  var pipeline = [
    {
      $group: {
	_id: { $month: '$workoutAt'},
	distance: { $sum: '$distance'}
      }
    }
  ];

  db.collection('workouts').aggregate(
    pipeline,
    Meteor.bindEnvironment(
      function(err, result) {
	console.log('result', result);
	_.each(result, function(r) {
	  subscription.added('distanceByMonth', r._id, {distance: r.distance});
	})
      }
    )
  )

  subscription.ready();
});
