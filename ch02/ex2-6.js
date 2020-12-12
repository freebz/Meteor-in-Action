// 리스팅 2.6 클라이언트와 서버에서 products라는 컬렉션을 선언함

Products = new Mongo.Collection('products');
if (Meteor.isClient) {
    //...
}
if (Meteor.isServer) {
    //...
}
