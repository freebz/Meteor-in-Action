// 리스팅 6.4 새로운 사용자에 대한 프로필 정보 추가

// server.js
Accounts.onCreateUser(function (options, user) {
  if (options.profile) {
    user.profile = options.profile;
  }
  else {
    user.profile = {};
  }
  user.profile.rank = 'White belt';
  return user;
});
