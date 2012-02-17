
  define(['app/module/models/exampleModel'], function(ExampleModel) {
    return Backbone.Collection.extend({
      model: ExampleModel,
      initialize: function() {
        return this;
      }
    });
  });
