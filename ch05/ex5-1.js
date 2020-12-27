// 리스팅 5.1 로컬 컬렉션 설정하기

LocalHouse = new Mongo.Collection(null);
var newHouse = {
  name: '',
  plants: [],
  lastsave: 'never',
  status: 'unsaved'
};
Session.setDefault('selectedHouseId', '');
