// 리스팅 6.6 사용자 생성하자마자 검증 이메일 보내기

Accounts.onCreateUser(function (options, user) {
  // ...
  user.profile.rank = 'White belt';
  if (options.email) {
    Meteor.setTimeout(function() {
      Accounts.sendVerificationEmail(user._id);
    }, 2*1000);
  }
  return user;
});
