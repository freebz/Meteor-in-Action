// 리스팅 11.9 mobile-config.js에서 URL 접근 규칙 선언

App.accessRule('https://*.googleapis.com/*');
App.accessRule('https://*.google.com/*');
App.accessRule('https://*.gstatic.com/*');

App.accessRule('https://pds.twimg.com/*');
App.accessRule('http://graph.facebook.com/*');
App.accessRule('https://graph.facebook.com/*');
