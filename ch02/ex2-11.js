// 리스팅 2.11 fridge를 드롭 가능한 타깃으로 선언하고, 제품의 위치를 업데이트하기

Template.fridge.onRendered(function () {
  var templateInstance = this

  templateInstance.$('#fridge').droppable({
    drop: function(evt, ui) {
      var query = { _id: ui.draggable.data('id') };
      var changes = { $set: { place: 'fridge' } };
      Products.update(query, changes);
    }
  });
});
