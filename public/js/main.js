
  requirejs.config({
    paths: {
      backbone: 'ext/backbone-0.9.1.amd.min',
      jquery: 'ext/jquery-1.7.2.min',
      underscore: 'ext/underscore-1.3.1.min'
    }
  });

  require(['backbone', 'jquery', 'underscore'], function(Backbone, $, _) {
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
