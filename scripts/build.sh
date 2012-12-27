# purpose is to build shared libraries to one main-build file
node ../public/js/ext/r.js -o name=main baseUrl=../public/js out=../public/js/main-built.js mainConfigFile=../public/js/main.js

# main-build file should be always loaded before loading app/module
node ../public/js/ext/r.js -o name=main-app baseUrl=../public/js out=../public/js/main-app-built.js mainConfigFile=../public/js/main-app.js
