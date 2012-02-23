define [
  "text!app/module/templates/exampleTemplate.html"
  "app/module/models/exampleModel"
], (Template, ExampleModel) ->
  Backbone.View.extend
    el: "#example-view"

    initialize: ->
      console.log "init example view"
      @template = _.template(Template)
      @model = new ExampleModel({name: "Test name"})
      @render()

    render: ->
      @$el.html(@template(@model.toJSON()))
