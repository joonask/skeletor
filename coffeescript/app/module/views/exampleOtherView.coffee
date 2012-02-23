define [
  "text!app/module/templates/exampleOtherTemplate.html"
], (Template) ->
  Backbone.View.extend
    el: "#other-view"

    initialize: ->
      console.log "init other view"
      @template = _.template(Template)
      @render()

    render: ->
      @$el.html(@template)
