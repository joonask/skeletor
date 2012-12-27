define [
  "app/module/views/skeletorView"
  "text!app/module/templates/exampleTemplate.html"
  "app/module/models/exampleModel"
], (SkeletorView, Template, ExampleModel) ->
  SkeletorView.extend
    el: "#example-view"
    template: _.template(Template)

    initialize: ->
      console.log "init example view"
      @model = new ExampleModel(name: "Test name")
      @render()

    render: ->
      @$el.html(@template(@model.toJSON()))