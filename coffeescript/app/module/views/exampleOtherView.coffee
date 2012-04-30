define [
  "app/module/views/skeletorView"
  "text!app/module/templates/exampleOtherTemplate.html"
], (SkeletorView, Template) ->
  SkeletorView.extend
    template: _.template(Template)
    el: "#other-view"

    initialize: ->
      console.log 'init other view'

      # either call 'super' initialize, or provide the same functionality
      # yourself.
      SkeletorView.prototype.initialize.call(@)