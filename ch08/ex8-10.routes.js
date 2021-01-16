// 리스팅 8.10 라우트에 기반한 구독

Router.route('/', {
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
