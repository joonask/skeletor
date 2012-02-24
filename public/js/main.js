
  requirejs.config({
    paths: {
      jquery: 'ext/jquery',
      underscore: 'ext/underscore-1.3.1.min'
    }
  });

  require(['jquery', 'underscore', 'ext/backbone-0.9.1.amd.min'], function($, _, Backbone) {
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
