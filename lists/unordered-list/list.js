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
      tagName: 'li',
      template: '#template-color-item',
  });

  var ListView = Marionette.CollectionView.extend({
      className: 'list-view',
      tagName: 'ul',
      itemView: ItemView
  });

  var ListLayout = Marionette.ListLayout.extend({
      el: '.list',
      listView: ListView,
  });

  var list = new ListLayout({
      collection: collection
  });

  list.render();

})();
