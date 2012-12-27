Skeletor
========

Skeletor is a [Backbone.js](http://documentcloud.github.com/backbone/) template for a single-page app that uses [CoffeeScript](http://coffeescript.org/) and [Require.js](http://requirejs.org/).


How to get started
==================
I assume you are using Linux, OSX or any compatitible operating system.
If you are using Windows, you can stop reading now.

Get the source
  $ git clone https://github.com/joonask/skeletor.git

Setup web server root to point public/

Start compilers
  $ cd scripts
  Coffeescript compiler:
  $ ./jitter.sh
  Sass compiler:
  $ .sass-watcher.sh

Now you are ready to learn CoffeeScript.
Point your web browser to http://<you-decide-the-host>/dev.html

Now start making changes to CoffeeScript/SASS files and you should see something happening in compiler.


Building an app with r.js optimizer
===================================
To build application to one javascript file.
By default scripts/build.sh should work. It contains an example command to build require.js project.

$ cd scripts
$ ./build.sh

Now you can try if it worked by opening http://<you-decide-the-host>/index.html

See, index.html loads the built file and dev.html is for developing.

