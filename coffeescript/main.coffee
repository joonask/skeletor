requirejs.config({
  paths:
    jquery: 'ext/jquery'
    underscore: 'ext/underscore'
})

require [
  'jquery',
  'underscore',
  'ext/backbone-optamd3'
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
