// 리스팅 8.21 단순 서버-사이드 라우트

Router.route('/api/profiles/name/:_id', function () {
  var request = this.request;
  var response = this.response;

  response.end(ProfilesCollection.findOne({
    _id: this.params._id
  }).name);
}, {
  where: 'server'
})
