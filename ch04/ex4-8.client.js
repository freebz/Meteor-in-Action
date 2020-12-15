// 리스팅 4.8 Tracker.autorun()을 사용하여 Session 변수의 값을 콘솔에 출력하기

Tracker.autorun(function(){
  console.log("The selectedHouse ID is: " +
    Session.get("selectedHouseId")
  );
});
