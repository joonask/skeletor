requirejs.config({
  paths:
    jquery: 'ext/jquery'
    underscore: 'ext/underscore-1.3.1.min'
})

require [
  'jquery',
  'underscore',
  'ext/backbone-0.9.1.amd.min'
], ($, _, Backbone) ->
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
