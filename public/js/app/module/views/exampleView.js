
  define(["text!app/module/templates/exampleTemplate.html", "app/module/models/exampleModel"], function(Template, ExampleModel) {
    return Backbone.View.extend({
      el: "#content",
      initialize: function() {
        this.template = _.template(Template);
        this.model = new ExampleModel({
          name: "Test name"
        });
        return this.render();
      },
      render: function() {
        return $(this.el).html(this.template(this.model.toJSON()));
      }
    });
  });
