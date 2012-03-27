
  define(['app/module/views/exampleView', 'app/module/views/exampleOtherView'], function(ExampleView, OtherExampleView) {
    return Backbone.Router.extend({
      routes: {
        "": "index",
        "other": "other",
        "handlebars": "handlebars"
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
      },
      handlebars: function() {
        console.log("handlebars route");
        if (!(this.handlebarsView != null)) {
          return require(['app/module/views/handlebarsView'], function(HandlebarsView) {
            this.handlebarsView = new HandlebarsView();
            $("#content .page").hide();
            return this.handlebarsView.$el.show();
          });
        } else {
          $("#content .page").hide();
          return this.handlebarsView.$el.show();
        }
      }
    });
  });
