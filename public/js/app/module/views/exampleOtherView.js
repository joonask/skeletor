
  define(["app/module/views/skeletorView", "text!app/module/templates/exampleOtherTemplate.html"], function(SkeletorView, Template) {
    return SkeletorView.extend({
      template: _.template(Template),
      el: "#other-view",
      initialize: function() {
        console.log('init other view');
        return SkeletorView.prototype.initialize.call(this);
      }
    });
  });
