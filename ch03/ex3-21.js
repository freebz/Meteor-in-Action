// 리스팅 3.21 input 요소에 detepicker를 만들기 위해 제이쿼리 플러그인 초기화

Template.formTemplate.onRendered(function(){
  var templateInstance = this;

  templateInstance.$('.dateinput').datepicker({
    // additional options
  });
});
