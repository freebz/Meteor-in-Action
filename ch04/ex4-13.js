// 리스팅 4.13 Done 버튼을 사용 불능으로 만드는 템플릿 헬퍼

Template.plantDetails.helpers({
  isWatered: function() {
    var plantId = Session.get("selectedHouseId") + '-' + this.color;
    return Session.get(plantId) ? 'disabled': '';
  }
});
