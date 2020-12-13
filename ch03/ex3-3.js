// 리스팅 3.3 name이라고 부르는 헬퍼를 위한 자바스크립트 코드

if (Meteor.isClient) {
  Template.expressions.helpers ({
    name: function () {
      return "<strong>Michael</strong>";
    }
  });
}
