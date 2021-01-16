// 리스팅 8.16 Iron.Router 컨트롤러 사용하기

// routes.js
Router.route('/', { controller: 'HomeController'});

// HomeController.js
HomeController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('profiles');
  },
  template: 'home',
  data: function () {
    return {
      profiles: ProfilesCollection.find({}, {
	limit: 10
      })
    };
  }
});
