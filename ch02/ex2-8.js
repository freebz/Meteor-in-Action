// 리스팅 2.8 productList 템플릿을 위한 products 헬퍼 설정하기

Template.productList.helpers({
  products: function () {
    return Products.find({
      place: 'supermarket'
    });
  }
});
