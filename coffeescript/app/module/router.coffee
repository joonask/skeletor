define [
  'app/module/views/exampleView'
  'app/module/views/exampleOtherView'
  'app/module/views/multiView'
], (ExampleView, OtherExampleView, MultiView) ->
  Backbone.Router.extend
    views: {}
    routes:
      "": "index",
      "other": "other"
      "multi": "multi"
      #"handlebars": "handlebars"

    initialize: ->
      console.log "An example router initialized"

    index: ->
      # avoid recreating whole views if possible.
      if !@views['exampleView']?
        @views['exampleView'] = new ExampleView()
      @views['exampleView'].show()

    other: ->
      if !@views['otherExampleView']?
        @views['otherExampleView'] = new OtherExampleView()
      @views['otherExampleView'].show()

    multi: ->
      if !@views['multiView']?
        @views['multiView'] = new MultiView()
      @views['multiView'].show()

    # Handlebars didn't work easily, see https://github.com/SlexAxton/require-handlebars-plugin/
    ###
    handlebars: ->
      if !@views['handlebarsView']?
        @views['handlebarsView'] = new HandlebarsView()
        @views['handlebarsView'].show()
      else
        @views['handlebarsView'].show()

    ###
