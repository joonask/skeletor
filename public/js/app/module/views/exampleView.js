
  define(["text!app/module/templates/exampleTemplate.html", "app/module/models/exampleModel"], function(Template, ExampleModel) {
    return Backbone.View.extend({
      el: "#example-view",
      initialize: function() {
        console.log("init example view");
        this.template = _.template(Template);
        this.model = new ExampleModel({
          name: "Test name"
        });
        return this.render();
      },
      render: function() {
        return this.$el.html(this.template(this.model.toJSON()));
      }
    });
  });
