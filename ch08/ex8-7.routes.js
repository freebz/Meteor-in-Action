// 리스팅 8.7 Iron.Router를 가지고 데이터 맥락 설정하기

// routes.js
Router.route('/', function() {
  this.render('home', {
    data: function() {
      return {profiles: ProfilesCollection.find()};
    }
  });
});

Router.route('/about', function() {
  this.render('about');
});

Router.route('/profiles/:_id', function() {
  profile = ProfilesCollection.findOne({_id: this.params._id});
  this.layout('profileLayout');
  this.render('profileDetailLeft', {
    to: 'left',
    data: function() {
      return profile;
    }
  });
  this.render('profileDetail', {
    data: function() {
      return profile;
    }
  });
});
