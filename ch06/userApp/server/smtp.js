Meteor.startup(function () {
  smtp = {
    username: 'yourmail@gmail.com',
    password: 'mySecurePassword',
    server: 'smtp.gmail.com',
    port: 587
  };
  process.env.MAIL_URL = 'smtp://' +
    encodeURIComponent(smtp.username) + ':' +
    encodeURIComponent(smtp.password) + '@' +
    encodeURIComponent(smtp.server) + ':' +
    smtp.port;
});
