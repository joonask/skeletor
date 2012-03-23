requirejs.config({
  paths:
    backbone: 'ext/backbone-0.9.1.amd.min'
    jquery: 'ext/jquery-1.7.2.min'
    underscore: 'ext/underscore-1.3.1.min'
})

require [
  'backbone'
  'jquery'
  'underscore'
], (Backbone, $, _) ->
  window._ = _
  window.Backbone = Backbone

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
