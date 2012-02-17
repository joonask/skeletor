
  define(['app/module/views/exampleView'], function(ExampleView) {
    return Backbone.Router.extend({
      routes: {
        "": "index"
      },
      initialize: function() {
        console.log("An example router initialized");
        return new ExampleView();
      }
    });
  });
