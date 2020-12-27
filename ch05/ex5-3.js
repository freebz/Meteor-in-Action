// 리스팅 5.3 편집할 객체를 반환하는 글로벌 헬퍼

Template.registerHelper('selectedHouse', function () {
  return LocalHouse.findOne(Session.get('selectedHouseId'));
});
