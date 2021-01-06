// 리스팅 7.8 집계 데이터를 업데이트하기 위해 observeChanges를 사용

Meteor.publish('distanceByMonth', function () {
  var subscription = this;
  var initiated = false;
  var distance = {};

  // 집계를 위한 코드가 들어 가는 자리

  var workoutHandle = WorkoutsCollection
    .find()
    .observeChanges({
      added: function (id, fields) {
	if (!initiated) return;
	idByMonth = new Date(fields.workoutAt).getMonth() + 1;
	
	distance[idByMonth] += fields.distance;
	subscription.changed('distanceByMonth',
          idByMonth, {
	    distance: distance[idByMonth]
	  }
        )
      }
    });
  subscription.ready();
});
