
  define(["text!app/module/templates/exampleOtherTemplate.html"], function(Template) {
    return Backbone.View.extend({
      el: "#other-view",
      initialize: function() {
        console.log("init other view");
        this.template = _.template(Template);
        return this.render();
      },
      render: function() {
        return this.$el.html(this.template);
      }
    });
  });
