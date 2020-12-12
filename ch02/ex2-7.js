// 리스팅 2.7 fidge 템플릿에 products 헬퍼 설정하기

Template.fridge.helpers({
  products: function () {
    return Products.find({
      place: 'fridge'
    });
  }
});
