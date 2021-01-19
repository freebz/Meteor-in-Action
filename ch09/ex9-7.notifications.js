// 리스팅 9.7 Notification 글로벌을 통해 패키지 기능 노출하기

Notification = {
  setError: function (text) {
    Session.set('notify', {
      type: 'error',
      text: text,
      buttonText: 'Oh, no.'
    });
  },
  setWarning: function (text) {
    Session.set('notify', {
      type: 'warning',
      text: text,
      buttonText: 'Good to know...'
    });
  },
  setSuccess: function (text) {
    Session.set('notify', {
      type: 'success',
      text: text,
      buttonText: 'Cool!'
    });
  },
  clear: function () {
    Session.set('notify', '');
  }
};
