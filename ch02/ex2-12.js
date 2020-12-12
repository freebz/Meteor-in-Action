// 리스팅 2.12 productList를 드롭 가능한 타겟으로 선언하기

Template.productList.onRendered(function() {
  var templateInstance = this;

  templateInstance.$('#supermarket').droppable({
    drop: function(evt, ui) {
      var query = { _id: ui.draggable.data('id') };
      var changes = { $set: { place: 'supermarket' } };
      Products.update(query, changes);
    }
  });
});
