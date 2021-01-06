// 리스팅 7.3 발행에 파리미터 추가하기

Meteor.publish('workouts', function(options) {
  check(options,
    {
      limit: Number
    }
  );

  var qry = {};
  var qryOptions = {
    limit: options.limit,
    sort: {workoutAt: 1}
  };
  return WorkoutsCollection.find(qry, qryOptions);
});
