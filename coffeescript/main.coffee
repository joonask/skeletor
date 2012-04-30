requirejs.config({
  paths:
    backbone: 'ext/backbone-0.9.1.amd.min'
    bootstrap: 'ext/bootstrap-2.0.2.amd'
    handlebars: 'ext/handlebars-1.0.0.beta.6'
    jquery: 'ext/jquery-1.7.2.min'
    underscore: 'ext/underscore-1.3.1.min'
})

require [
  'backbone'
  'jquery'
  'underscore'
  #'handlebars' #enable handlebars if you plan to use it.
], (Backbone, $, _) -> #, Handlebars) ->
  window._ = _
  window.Backbone = Backbone
  #window.Handlebars = Handlebars

  require [
    'app/module/router/example'
    'domReady'
  ], (ExampleRouter, domReady) ->
    domReady(->
      router = new ExampleRouter()

      if Backbone.history?
        Backbone.history.start()
      @
    )
