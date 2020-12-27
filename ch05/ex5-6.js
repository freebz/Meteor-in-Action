// 리스팅 5.6 객체의 배열에서 인덱스 특성을 추가위해 Underscore.js 사용하기

Template.registerHelper('withIndex', function(list) {
  var withIndex = _.map(list, function (v, i) {
    if (v === null) return ;
    v.index = i;
    return v;
  });
  return withIndex;
});
