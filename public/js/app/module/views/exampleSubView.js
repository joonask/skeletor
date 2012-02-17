
  define(["text!app/module/templates/exampleOtherTemplate.html"], function(Template) {
    return Backbone.View.extend({
      initialize: function() {
        this.template = _.template(Template);
        return this.render();
      },
      render: function() {
        return $(this.el).html(this.template);
      }
    });
  });
