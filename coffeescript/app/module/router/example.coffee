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
      # avoid recreating whole views if possible.
      if !@exampleView?
        @exampleView = new ExampleView()
      @exampleView.show()

    other: ->
      if !@otherExampleView?
        @otherExampleView = new OtherExampleView()
      @otherExampleView.show()

    handlebars: ->
      if !@handlebarsView?
        require ['app/module/views/handlebarsView'], (HandlebarsView) ->
          @handlebarsView = new HandlebarsView()
          @handlebarsView.show()
      else
        @handlebarsView.show()