define [
  "text!app/module/templates/subView.html"
], (Template) ->
  Backbone.View.extend
    template: _.template(Template)

    render: ->
      @$el.html(@template(name: @options.name))