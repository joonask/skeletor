/*
 RequireJS domReady 0.27.1 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/

/*
 RequireJS text 1.0.2 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/

define("domReady",[],function(){function e(e){for(var t=0,n;n=e[t];t++)n(o)}function t(){var t=u,n=a;s&&(t.length&&(u=[],e(t)),f.resourcesDone&&n.length&&(a=[],e(n)))}function n(){s||(s=!0,c&&clearInterval(c),t())}function r(e){return s?e(o):u.push(e),r}var i=typeof window!="undefined"&&window.document,s=!i,o=i?document:null,u=[],a=[],f=requirejs||require||{},l=f.resourcesReady,c;return"resourcesReady"in f&&(f.resourcesReady=function(e){l&&l(e),e&&t()}),i&&(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):window.attachEvent&&(window.attachEvent("onload",n),self===self.top&&(c=setInterval(function(){try{document.body&&(document.documentElement.doScroll("left"),n())}catch(e){}},30))),document.readyState==="complete"&&n()),r.withResources=function(e){return s&&f.resourcesDone?e(o):a.push(e),r},r.version="0.27.1",r.load=function(e,t,n,i){i.isBuild?n(null):r(n)},r}),function(){define("app/module/views/skeletorView",[],function(){return Backbone.View.extend({initialize:function(){return this.render()},render:function(){return this.$el.html(this.template)},show:function(){return console.log("show "+this.$el.attr("id")),$("#content .page").hide(),this.$el.show(),$("#navigation").children().removeClass("active").each(function(){var e;e=$(this).find("a").attr("href");if(e==="#"+Backbone.history.fragment)return $(this).addClass("active")})}})})}.call(this),function(){var e=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],t=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,n=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,r=typeof location!="undefined"&&location.href,i=r&&location.protocol&&location.protocol.replace(/\:/,""),s=r&&location.hostname,o=r&&(location.port||void 0),u=[];define("text",[],function(){var a,f,l;return typeof window!="undefined"&&window.navigator&&window.document?f=function(e,t){var n=a.createXhr();n.open("GET",e,!0),n.onreadystatechange=function(){n.readyState===4&&t(n.responseText)},n.send(null)}:typeof process!="undefined"&&process.versions&&process.versions.node?(l=require.nodeRequire("fs"),f=function(e,t){t(l.readFileSync(e,"utf8"))}):typeof Packages!="undefined"&&(f=function(e,t){var n=new java.io.File(e),r=java.lang.System.getProperty("line.separator"),n=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(n),"utf-8")),i,s,o="";try{i=new java.lang.StringBuffer,(s=n.readLine())&&s.length()&&s.charAt(0)===65279&&(s=s.substring(1));for(i.append(s);(s=n.readLine())!==null;)i.append(r),i.append(s);o=String(i.toString())}finally{n.close()}t(o)}),a={version:"1.0.2",strip:function(e){if(e){var e=e.replace(t,""),r=e.match(n);r&&(e=r[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")},createXhr:function(){var t,n,r;if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;for(n=0;n<3;n++){r=e[n];try{t=new ActiveXObject(r)}catch(i){}if(t){e=[r];break}}if(!t)throw Error("createXhr(): XMLHttpRequest not available");return t},get:f,parseName:function(e){var t=!1,n=e.indexOf("."),r=e.substring(0,n),e=e.substring(n+1,e.length),n=e.indexOf("!");return n!==-1&&(t=e.substring(n+1,e.length),t=t==="strip",e=e.substring(0,n)),{moduleName:r,ext:e,strip:t}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,n,r){var i=a.xdRegExp.exec(e),s;return i?(e=i[2],i=i[3],i=i.split(":"),s=i[1],i=i[0],(!e||e===t)&&(!i||i===n)&&(!s&&!i||s===r)):!0},finishLoad:function(e,t,n,r,i){n=t?a.strip(n):n,i.isBuild&&(u[e]=n),r(n)},load:function(e,t,n,u){if(u.isBuild&&!u.inlineText)n();else{var f=a.parseName(e),l=f.moduleName+"."+f.ext,c=t.toUrl(l),h=u&&u.text&&u.text.useXhr||a.useXhr;!r||h(c,i,s,o)?a.get(c,function(t){a.finishLoad(e,f.strip,t,n,u)}):t([l],function(e){a.finishLoad(f.moduleName+"."+f.ext,f.strip,e,n,u)})}},write:function(e,t,n){if(t in u){var r=a.jsEscape(u[t]);n.asModule(e+"!"+t,"define(function () { return '"+r+"';});\n")}},writeFile:function(e,t,n,r,i){var t=a.parseName(t),s=t.moduleName+"."+t.ext,o=n.toUrl(t.moduleName+"."+t.ext)+".js";a.load(s,n,function(){var t=function(e){return r(o,e)};t.asModule=function(e,t){return r.asModule(e,o,t)},a.write(e,s,t,i)},i)}}})}(),define("text!app/module/templates/exampleTemplate.html",[],function(){return'<div class="row">\n    <div class="span12">\n        <h1>Example view</h1>\n        <div class="row">\n            <div class="span4">\n                <h2>First column</h2>\n                <div>Name: <%= name %> </div>\n            </div>\n            <div class="span4">\n                <h2>Other column</h2>\n                <a href="#other">to other route/view</a>\n            </div>\n            <div class="span4">\n                <h2>Third column</h2>\n                <a href="#handlebars">Check out the handlebars page</a>\n            </div>\n        </div>\n    </div>\n</div>'}),function(){define("app/module/models/exampleModel",[],function(){return Backbone.Model.extend({defaults:{name:""}})})}.call(this),function(){define("app/module/views/exampleView",["app/module/views/skeletorView","text!app/module/templates/exampleTemplate.html","app/module/models/exampleModel"],function(e,t,n){return e.extend({el:"#example-view",template:_.template(t),initialize:function(){return console.log("init example view"),this.model=new n({name:"Test name"}),this.render()},render:function(){return this.$el.html(this.template(this.model.toJSON()))}})})}.call(this),define("text!app/module/templates/exampleOtherTemplate.html",[],function(){return'<h1>Other view</h1>\nOther route to other view, javascript madness<br>\nrequested by TT. <a href="#">Let\'s go back</a>'}),function(){define("app/module/views/exampleOtherView",["app/module/views/skeletorView","text!app/module/templates/exampleOtherTemplate.html"],function(e,t){return e.extend({template:_.template(t),el:"#other-view",initialize:function(){return console.log("init other view"),e.prototype.initialize.call(this)}})})}.call(this),define("text!app/module/templates/subView.html",[],function(){return"<h2><%- name %></h2>\n<p>Lorem ipsum dolor sit amet........</p>"}),function(){define("app/module/views/subView",["text!app/module/templates/subView.html"],function(e){return Backbone.View.extend({template:_.template(e),render:function(){return this.$el.html(this.template({name:this.options.name}))}})})}.call(this),define("text!app/module/templates/multiView.html",[],function(){return'<h1>Two views inside one view</h1>\n<p>renders sub views inside elements #subViewOne and #subViewTwo</p>\n<p>See <a href="http://ianstormtaylor.com/rendering-views-in-backbonejs-isnt-always-simple/">Rendering Views in Backbone.js Isn\'t Always Simple</a></p>\n\n<div id="sub-view-one"></div>\n<div id="sub-view-two"></div>'}),function(){define("app/module/views/multiView",["app/module/views/skeletorView","app/module/views/subView","text!app/module/templates/multiView.html"],function(e,t,n){return e.extend({views:{one:null,two:null},el:"#multi-view",template:_.template(n),initialize:function(){return this.views.one=new t({name:"First sub view"}),this.views.two=new t({name:"Second sub view"}),this.render()},assign:function(e,t){return e.setElement(this.$(t)).render()},render:function(){return this.$el.html(this.template),this.assign(this.views.one,"#sub-view-one"),this.assign(this.views.two,"#sub-view-two")}})})}.call(this),function(){define("app/module/router",["app/module/views/exampleView","app/module/views/exampleOtherView","app/module/views/multiView"],function(e,t,n){return Backbone.Router.extend({views:{},routes:{"":"index",other:"other",multi:"multi"},initialize:function(){return console.log("An example router initialized")},index:function(){return this.views["exampleView"]==null&&(this.views.exampleView=new e),this.views.exampleView.show()},other:function(){return this.views["otherExampleView"]==null&&(this.views.otherExampleView=new t),this.views.otherExampleView.show()},multi:function(){return this.views["multiView"]==null&&(this.views.multiView=new n),this.views.multiView.show()}})})}.call(this),function(){require(["domReady","app/module/router"],function(e,t){return e(function(){var e;return console.log("Main app"),e=new t,Backbone.history!=null&&Backbone.history.start({push_state:!0}),this})})}.call(this),define("main-app",function(){});