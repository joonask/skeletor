
  define(['app/module/views/exampleView', 'app/module/views/exampleOtherView'], function(ExampleView, OtherExampleView) {
    return Backbone.Router.extend({
      routes: {
        "": "index",
        "other": "other"
      },
      initialize: function() {
        return console.log("An example router initialized");
      },
      index: function() {
        return new ExampleView();
      },
      other: function() {
        console.log("other route");
        return new OtherExampleView();
      }
    });
  });
