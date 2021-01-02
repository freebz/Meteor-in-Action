// 리스팅 6.10 페이스북 정보를 유저 프로필로 옮기기

Accounts.onCreateUser(function (options, user) {
  if (user.services.facebook) {
    user.profile.first_name = user.services.facebook.first_name;
    user.profile.last_name = user.services.facebook.last_name;
    user.profile.gender = user.services.facebook.gender;
  }
  return user;
});
