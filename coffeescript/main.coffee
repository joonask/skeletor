require.config(
  waitSeconds: 15
  paths:
    backbone: 'ext/backbone-min'
    bootstrap: 'ext/bootstrap-2.0.2.amd'
    jquery: 'ext/jquery-1.8.3.min'
    underscore: 'ext/underscore-min'
    domReady:'domReady'
    text: 'text'

  shim:
    'backbone':
      deps: ['underscore', 'jquery']
      exports: 'Backbone'

    'underscore':
      exports: '_'
)

define ['backbone', 'underscore', 'jquery'], ->
  console.log "Init base configs"
