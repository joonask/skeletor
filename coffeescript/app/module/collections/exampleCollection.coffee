define ['app/module/models/exampleModel'], (ExampleModel) ->
  Backbone.Collection.extend
    model: ExampleModel
    initialize: ->
      @