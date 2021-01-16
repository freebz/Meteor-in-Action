// 리스팅 8.15 외부 라이브러리 로딩을 위해 대기

// routes.js
Router.route('/profiles/:_id', {
  // ...
  waitOn: function () {
    return [
      Meteor.subscribe('profile', this.params._id),
      IRLibLoader.load("/jquery.fittext.js")
    ];
  },
  // ...
})
