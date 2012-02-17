define ['app/module/views/exampleView', 'app/module/views/exampleOtherView'],
(ExampleView, OtherExampleView) ->
  Backbone.Router.extend
    routes:
      "": "index",
      "other": "other"

    initialize: ->
      console.log "An example router initialized"

    index: ->
      new ExampleView()

    other: ->
      console.log "other route"
      new OtherExampleView()

