define ['app/module/views/exampleView', 'app/module/views/exampleOtherView'],
(ExampleView, OtherExampleView) ->
  Backbone.Router.extend
    routes:
      "": "index",
      "other": "other"

    initialize: ->
      console.log "An example router initialized"

    index: ->
      console.log "default route"
      $("#content .page").hide()

      # avoid recreating whole views if possible.
      if !@exampleView?
        @exampleView = new ExampleView()
      
      @exampleView.$el.show()

    other: ->
      console.log "other route"
      $("#content .page").hide()

      if !@otherExampleView?
        @otherExampleView = new OtherExampleView()
      
      @otherExampleView.$el.show()