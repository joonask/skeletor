define [
  "ext/handlebars-1.0.0.beta.6"
  "app/module/views/skeletorView"
  "text!app/module/templates/handlebarsTemplate.html"
  "app/module/models/exampleModel"
], (Handlebars, SkeletorView, Template, ExampleModel) ->
  SkeletorView.extend
    el: "#handlebars-view"

    initialize: ->
      console.log "init handlebars view"
      @template = Handlebars.compile(Template)
      @model = new ExampleModel({name: "Test name"})
      @render()

    render: ->
      context = @model.toJSON()
      context.people = [
        {name: 'John'}
        {name: 'Kalervo'}
        {name: 'Mike D'}
      ]
      @$el.html(@template(context))