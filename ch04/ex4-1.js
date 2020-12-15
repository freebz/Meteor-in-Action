// 리스팅 4.1 템플릿 헬퍼를 사용하여 반응성 맥락 설정하기

Template.friendsHouse.helpers({
    waterTheFlowers: function() {
	var day = Session.get("today");
	if (day === "Monday") {
	    return "Watering the flowers";
	}
    }
});
