
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
        console.log("default route");
        $("#content .page").hide();
        if (!(this.exampleView != null)) this.exampleView = new ExampleView();
        return this.exampleView.$el.show();
      },
      other: function() {
        console.log("other route");
        $("#content .page").hide();
        if (!(this.otherExampleView != null)) {
          this.otherExampleView = new OtherExampleView();
        }
        return this.otherExampleView.$el.show();
      }
    });
  });
