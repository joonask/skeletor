#
echo "Compile coffescript -> javascript"
coffee -co ../public/js ../coffeescript

# purpose is to build shared libraries to one main-build file
echo "Build main file from common shared libraries"
node ../public/js/ext/r.js -o name=main baseUrl=../public/js out=../public/js/main-built.js mainConfigFile=../public/js/main.js

# main-build file should be always loaded before loading app/module
echo "Build application files to one main-app-built.js"
node ../public/js/ext/r.js -o name=main-app baseUrl=../public/js out=../public/js/main-app-built.js mainConfigFile=../public/js/main-app.js
