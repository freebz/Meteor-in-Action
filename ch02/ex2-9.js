// 리스팅 2.9 서버가 시작할 때 데이터베이스에서 사용한 데이터셋 설정하기

if (Meteor.isServer) {
  Meteor.startup(function () {

    Products.remove({});

    // fill the database with some products
    Products.insert({
      name: 'Milk',
      img: '/milk.png',
      place: 'fridge'
    });

    Products.insert({
      name: 'Bread',
      img: '/bread.png',
      place: 'supermarket'
    });
  });
}
