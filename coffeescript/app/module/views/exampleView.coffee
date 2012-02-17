define [
  "text!app/module/templates/exampleTemplate.html"
  "app/module/models/exampleModel"
], (Template, ExampleModel) ->
  Backbone.View.extend
    el: "#content"

    events:
      "click button": "otherView"

    initialize: ->
      @template = _.template(Template)
      @model = new ExampleModel({name: "Test name"})
      @render()

    otherView: ->
      @

    render: ->
      $(@el).html(@template(@model.toJSON()))
