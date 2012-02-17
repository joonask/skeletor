define [
  "text!app/module/templates/exampleTemplate.html"
  "app/module/models/exampleModel"
], (Template, ExampleModel) ->
  Backbone.View.extend
    el: "#content"

    initialize: ->
      @template = _.template(Template)
      @model = new ExampleModel({name: "Test name"})
      @render()

    render: ->
      $(@el).html(@template(@model.toJSON()))
