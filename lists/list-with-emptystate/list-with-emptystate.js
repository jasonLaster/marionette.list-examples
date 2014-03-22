(function() {

  // Here's the list of objects that we will be displaying
  var colorList = [
    { colorName: 'black', hex: '#000' },
    { colorName: 'white', hex: '#fff' },
    { colorName: 'blue',  hex: '#419ad8' },
    { colorName: 'gold',  hex: '#d6ba65'}
  ];

  var collection = new Backbone.Collection();

  var ItemView = Marionette.ItemView.extend({
      className: 'item-view',
      tagName: 'tr',
      template: '#template-color-item',
  });

  var EmptyView = Marionette.ItemView.extend({
      className: 'empty-view',
      template: '#template-empty-state',
  });

  var TableView = Marionette.CompositeView.extend({
      template: '#template-table',
      className: 'table-view',
      tagName: 'table',

      itemViewContainer: 'tbody',
      itemView: ItemView,

  });

  var ListLayout = Marionette.ListLayout.extend({
      el: '.list',
      template: '#template-list-layout',

      listView: TableView,
      emptyView: EmptyView,

      ui: {
          add: "#add",
          clear: "#clear"
      },

      events: {
         "click @ui.add": "onClickAdd",
         "click @ui.clear": "onClickClear"
      },

      onClickClear: function() {
        this.collection.reset();
      },

      onClickAdd: function() {
        this.collection.reset(colorList);
      }
  });

  var list = new ListLayout({
      collection: collection
  });

  list.render();

})();
