(function(Marionette) {
    Marionette.ListLayout = Marionette.Layout.extend({

        template: _.template("<div class='content-region'></div>"),

        regions: {
            Content: '.content-region',
        },

        collectionEvents: {
            'add': 'onCollectionChange',
            'remove': 'onCollectionChange',
            'reset': 'onCollectionChange',
        },

        emptyView: Backbone.Marionette.ItemView,

        listView: Backbone.Marionette.ItemView,

        onRender: function() {
            this.showInnerView();
        },

        onCollectionChange: function() {
            this.showInnerView();
        },

        getEmptyView: function() {
            return Backbone.Marionette.getOption(this, 'emptyView');
        },

        getListView: function() {
            return Backbone.Marionette.getOption(this, 'listView');
        },

        showInnerView: function() {
            var viewClass = _.isEmpty(this.collection.models) ? this.getEmptyView() : this.getListView();
            var options = _.extend(this.options, {
                model: this.model,
                collection: this.collection
            });

            this.Content.show(new viewClass(options));
        },
    });
})(Marionette);
