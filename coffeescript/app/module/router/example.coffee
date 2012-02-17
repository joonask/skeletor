define ['app/module/views/exampleView'],
(ExampleView) ->
  Backbone.Router.extend
    routes:
      "": "index",

    initialize: ->
      console.log "An example router initialized"
      new ExampleView()
