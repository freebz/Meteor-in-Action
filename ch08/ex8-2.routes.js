// 리스팅 8.2 루트들에 대한 설정

// routes.js
Router.route('/', function () {
    this.render('home');
});

Router.route('/about', function () {
    this.render('about');
});
