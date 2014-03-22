(function() {

  // Here's the list of objects that we will be displaying
  var colorList = [
    { colorName: 'black', hex: '#000' },
    { colorName: 'white', hex: '#fff' },
    { colorName: 'blue',  hex: '#419ad8' },
    { colorName: 'gold',  hex: '#d6ba65'}
  ];

  var collection = new Backbone.Collection(colorList);

  var ItemView = Marionette.ItemView.extend({
      className: 'item-view',
      tagName: 'tr',
      template: '#template-color-item',
  });

  var TableView = Marionette.CompositeView.extend({
      template: '#template-table',
      className: 'table-view',
      tagName: 'table',

      itemViewContainer: 'tbody',
      itemView: ItemView
  });


  var table = new TableView({
      el: '.list',
      collection: collection
  });

  table.render();

})();
