define [
  "text!app/module/templates/exampleOtherTemplate.html"
], (Template) ->
  Backbone.View.extend
    el: "#content"
    initialize: ->
      @template = _.template(Template)
      @render()

    render: ->
      $(@el).html(@template)
