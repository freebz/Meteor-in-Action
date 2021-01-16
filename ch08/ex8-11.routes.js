// 리스팅 8.11 개별 프로필 구독을 대기

Router.route('/profiles/:_id', {
  layoutTemplate: 'profileLayout',
  waitOn: function() {
    return Meteor.subscription('profile', this.params._id);
  },
  template: 'profileDetail',
  yieldTemplates: {
    'profileDetailLeft': {
      to: 'left'
    }
  },
  data: function () {
    return ProfilesCollection.findOne({
      _id: this.params._id
    });
  }
});
