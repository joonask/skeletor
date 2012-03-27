define [
  'app/module/views/exampleView'
  'app/module/views/exampleOtherView'
], (ExampleView, OtherExampleView) ->
  Backbone.Router.extend
    routes:
      "": "index",
      "other": "other"
      "handlebars": "handlebars"

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

    handlebars: ->
      console.log "handlebars route"
      if !@handlebarsView?
        require ['app/module/views/handlebarsView'], (HandlebarsView) ->
          @handlebarsView = new HandlebarsView()
          $("#content .page").hide()
          @handlebarsView.$el.show()
      else
        $("#content .page").hide()
        @handlebarsView.$el.show()