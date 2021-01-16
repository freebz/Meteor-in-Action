// 리스팅 8.17 컨트롤러를 사용하여 라우트 선언하기

Router.route('/', {controller: 'HomeController'});
Router.route('/about', 'about');
Router.route('/profiles/:_id', {controller: 'ProfileController'});
