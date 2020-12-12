// 리스트 2.13 productListItem을 드래그할 수 있는 아이템으로 선언하기

Template.productListItem.onRendered(function() {
  var templateInstance = this;

  templateInstance.$('.draggable').draggable({
    cursor: 'move',
    helper: 'clone'
  });
});
