
  define(["app/module/views/skeletorView", "text!app/module/templates/exampleTemplate.html", "app/module/models/exampleModel"], function(SkeletorView, Template, ExampleModel) {
    return SkeletorView.extend({
      el: "#example-view",
      template: _.template(Template),
      initialize: function() {
        console.log("init example view");
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
