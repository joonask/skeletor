
  requirejs.config({
    paths: {
      jquery: 'ext/jquery',
      underscore: 'ext/underscore'
    }
  });

  require(['jquery', 'underscore', 'ext/backbone-optamd3'], function($, _, Backbone) {
    window._ = _;
    window.Backbone = Backbone;
    return require(['app/module/router/example', 'domReady'], function(ExampleRouter, domReady) {
      return domReady(function() {
        var router;
        router = new ExampleRouter();
        if (Backbone.history != null) Backbone.history.start();
        return this;
      });
    });
  });
