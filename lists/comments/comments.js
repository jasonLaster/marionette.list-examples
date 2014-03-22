(function() {

  var data = {
    name: "level 1",
    nodes: [
      {
        name: "level 2",
        nodes: [
          {
            name: "level 3"
          }
        ]
      }
    ]
  };




  // Here's the list of objects that we will be displaying
  var colorList = [
    { colorName: 'black', hex: '#000' },
    { colorName: 'white', hex: '#fff' },
    { colorName: 'blue',  hex: '#419ad8' },
    { colorName: 'gold',  hex: '#d6ba65'}
  ];


  var Node = Backbone.Model.extend({
    initialize: function(){
      var nodes = this.get("nodes");
      if (nodes){
        this.nodes = new NodeCollection(nodes);
        this.unset("nodes");
      }
    }
  });


  var NodeCollection = Backbone.Collection.extend({
    model: Node
  });

  var TreeView = Backbone.Marionette.CompositeView.extend({
    tagName: "ul",
    template: "#recursive-composite-template",

    initialize: function(){
      this.collection = this.model.nodes;
    }
  });

  var node = new Node(data);
  var treeView = new TreeView({
    el: '.comments',
    model: node
  });

  treeView.render();

})();
