
  define([], function() {
    return Backbone.View.extend({
      initialize: function() {
        return this.render();
      },
      render: function() {
        return this.$el.html(this.template);
      },
      show: function() {
        console.log('show ' + this.$el.attr('id'));
        $("#content .page").hide();
        this.$el.show();
        return $("#navigation").children().removeClass('active').each(function() {
          var href;
          href = $(this).find('a').attr('href');
          if (href === '#' + Backbone.history.fragment) {
            return $(this).addClass('active');
          }
        });
      }
    });
  });
