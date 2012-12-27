
define(["app/module/views/skeletorView", "app/module/views/subView", "text!app/module/templates/manyViews.html"], function(SkeletorView, SubView, Template) {
  return SkeletorView.extend({
    views: {
      one: null,
      two: null
    },
    el: "#many-views",
    template: _.template(Template),
    initialize: function() {
      this.views['one'] = SubView({
        name: "First sub view"
      });
      this.views['two'] = SubView({
        name: "Second sub view"
      });
      return this.render();
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.assign(this.views.one, '#sub-view-one');
      return this.assign(this.views.two, '#sub-view-two');
    }
  });
});
