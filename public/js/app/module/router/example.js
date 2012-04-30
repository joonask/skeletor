
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
        if (!(this.exampleView != null)) this.exampleView = new ExampleView();
        return this.exampleView.show();
      },
      other: function() {
        if (!(this.otherExampleView != null)) {
          this.otherExampleView = new OtherExampleView();
        }
        return this.otherExampleView.show();
      },
      handlebars: function() {
        if (!(this.handlebarsView != null)) {
          return require(['app/module/views/handlebarsView'], function(HandlebarsView) {
            this.handlebarsView = new HandlebarsView();
            return this.handlebarsView.show();
          });
        } else {
          return this.handlebarsView.show();
        }
      }
    });
  });
