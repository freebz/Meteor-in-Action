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
  }
});
