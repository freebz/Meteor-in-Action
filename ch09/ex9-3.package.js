// 리스팅 9.3 notifications 패키지를 정의

Packages.onUse(function(api){
  api.versionsFrom('1.1.0.2');
  api.use([
    'templating',
    'ui'
  ], 'client');
  api.export('Notifications', 'client');
  api.addFiles([
    'notifications.html',
    'notifications.js',
    'notifications.css'
  ], 'client');
});
