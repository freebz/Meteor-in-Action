// 리스팅 7.9 사용자에게 허락된 데이터 보내기

Meteor.publish('workouts', function (options) {
  check(options, {
    limit: Number,
    sorting: Number
  });
  var qry = {
    userId: this.userId
  };
  var qryOptions = {
    limit: options.limit,
    sort: {
      workoutAt: options.sorting
    }
  }
  return WorkoutsCollection.find(qry, qryOptions);
});
