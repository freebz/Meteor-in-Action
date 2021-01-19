// 리스팅 9.2 미티어 메서드에서 gravatar npm 모듈 사용

Meteor.methods({
  getGravatar: function(email) {
    var gravatar = Meteor.npmRequire('gravatar');
    var url = gravatar.url(email);
    return url;
  }
});
