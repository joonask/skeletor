require [
  'domReady'
  'app/module/router'
], (domReady, Router) ->
  domReady ->
    console.log "Main app"
    router = new Router()

    if Backbone.history?
      Backbone.history.start(push_state: true)
    @

