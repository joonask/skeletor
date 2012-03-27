
  define(["handlebars", "text!app/module/templates/handlebarsTemplate.html", "app/module/models/exampleModel"], function(Handlebars, Template, ExampleModel) {
    return Backbone.View.extend({
      el: "#handlebars-view",
      initialize: function() {
        console.log("init handlebars view");
        this.template = Handlebars.compile(Template);
        this.model = new ExampleModel({
          name: "Test name"
        });
        return this.render();
      },
      render: function() {
        var context;
        context = this.model.toJSON();
        context.people = [
          {
            name: 'John'
          }, {
            name: 'Kalervo'
          }, {
            name: 'Mike D'
          }
        ];
        return this.$el.html(this.template(context));
      }
    });
  });
