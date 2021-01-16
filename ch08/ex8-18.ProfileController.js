// 리스팅 8.18 RouteController에 훅을 추가하기

// ProfileController.js
ProfileController = RouteController.extend({
  layoutTemplate: 'profileLayout',
  template: 'profileDetail',
  yieldTemplate: {
    'profileDetailLeft': {to: 'left'}
  },
  onRun: function(){
    ProfileCollection.update({
      _id: this.params._id
    }, {
      $inc: {
	views: 1
      }
    });
    this.next();
  },
  ...
});
