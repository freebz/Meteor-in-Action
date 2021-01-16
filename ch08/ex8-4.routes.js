// 리스팅 8.4 route 함수 안에서 레이아웃 설정하기

Router.route('/profiles/manuel', function () {
  this.layout('profileLayout');
  this.render('profileDetail');
});
