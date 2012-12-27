define [
  "app/module/views/skeletorView"
  "app/module/views/subView"
  "text!app/module/templates/multiView.html"
], (SkeletorView, SubView, Template) ->
  SkeletorView.extend
    views:
      one: null
      two: null
    el: "#multi-view"
    template: _.template(Template)

    initialize: ->
      @views['one'] = new SubView(name: "First sub view")
      @views['two'] = new SubView(name: "Second sub view")
      @render()

    assign : (view, selector) ->
      view.setElement(@$(selector)).render()

    render: ->
      @$el.html(@template)
      @assign(@views.one, '#sub-view-one')
      @assign(@views.two, '#sub-view-two')
