// 리스팅 8.9 옵션들만을 사용하여 라우트 행동을 정의

Router.route('/', {
  template: 'home',
  data: function () {
    return {
      profiles: ProfilesCollection.findOne({}, {limit: 10})
    };
  }
});
