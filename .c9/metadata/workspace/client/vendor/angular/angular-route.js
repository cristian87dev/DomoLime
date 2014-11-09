{"filter":false,"title":"angular-route.js","tooltip":"/client/vendor/angular/angular-route.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":2}},"text":"/*"},{"action":"insertText","range":{"start":{"row":0,"column":2},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":14,"column":0}},"lines":[" AngularJS v1.3.2"," (c) 2010-2014 Google, Inc. http://angularjs.org"," License: MIT","*/","(function(p,d,B){'use strict';function u(q,h,f){return{restrict:\"ECA\",terminal:!0,priority:400,transclude:\"element\",link:function(a,c,b,g,x){function y(){k&&(f.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=f.leave(m),k.then(function(){k=null}),m=null)}function w(){var b=q.current&&q.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),g=q.current;m=x(b,function(b){f.enter(b,null,m||c).then(function(){!d.isDefined(s)||s&&!a.$eval(s)||h()});y()});l=g.scope=b;l.$emit(\"$viewContentLoaded\");","l.$eval(v)}else y()}var l,m,k,s=b.autoscroll,v=b.onload||\"\";a.$on(\"$routeChangeSuccess\",w);w()}}}function z(d,h,f){return{restrict:\"ECA\",priority:-400,link:function(a,c){var b=f.current,g=b.locals;c.html(g.$template);var x=d(c.contents());b.controller&&(g.$scope=a,g=h(b.controller,g),b.controllerAs&&(a[b.controllerAs]=g),c.data(\"$ngControllerController\",g),c.children().data(\"$ngControllerController\",g));x(a)}}}p=d.module(\"ngRoute\",[\"ng\"]).provider(\"$route\",function(){function q(a,c){return d.extend(new (d.extend(function(){},","{prototype:a})),c)}function h(a,d){var b=d.caseInsensitiveMatch,g={originalPath:a,regexp:a},f=g.keys=[];a=a.replace(/([().])/g,\"\\\\$1\").replace(/(\\/)?:(\\w+)([\\?\\*])?/g,function(a,d,b,c){a=\"?\"===c?c:null;c=\"*\"===c?c:null;f.push({name:b,optional:!!a});d=d||\"\";return\"\"+(a?\"\":d)+\"(?:\"+(a?d:\"\")+(c&&\"(.+?)\"||\"([^/]+)\")+(a||\"\")+\")\"+(a||\"\")}).replace(/([\\/$\\*])/g,\"\\\\$1\");g.regexp=new RegExp(\"^\"+a+\"$\",b?\"i\":\"\");return g}var f={};this.when=function(a,c){var b=d.copy(c);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=","!0);f[a]=d.extend(b,a&&h(a,b));if(a){var g=\"/\"==a[a.length-1]?a.substr(0,a.length-1):a+\"/\";f[g]=d.extend({redirectTo:a},h(g,b))}return this};this.otherwise=function(a){\"string\"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=[\"$rootScope\",\"$location\",\"$routeParams\",\"$q\",\"$injector\",\"$templateRequest\",\"$sce\",function(a,c,b,g,h,p,w){function l(b){var e=r.current;(u=(n=k())&&e&&n.$$route===e.$$route&&d.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!v)||!e&&!n||a.$broadcast(\"$routeChangeStart\",","n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var t=r.current,e=n;if(u)t.params=e.params,d.copy(t.params,b),a.$broadcast(\"$routeUpdate\",t);else if(e||t)v=!1,(r.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?c.path(s(e.redirectTo,e.params)).search(e.params).replace():c.url(e.redirectTo(e.pathParams,c.path(),c.search())).replace()),g.when(e).then(function(){if(e){var a=d.extend({},e.resolve),b,c;d.forEach(a,function(e,b){a[b]=d.isString(e)?h.get(e):h.invoke(e,null,null,b)});d.isDefined(b=","e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(c=e.templateUrl)&&(d.isFunction(c)&&(c=c(e.params)),c=w.getTrustedResourceUrl(c),d.isDefined(c)&&(e.loadedTemplateUrl=c,b=p(c)));d.isDefined(b)&&(a.$template=b);return g.all(a)}}).then(function(c){e==r.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast(\"$routeChangeSuccess\",e,t))},function(b){e==r.current&&a.$broadcast(\"$routeChangeError\",e,t,b)})}function k(){var a,e;d.forEach(f,function(b,g){var f;if(f=!e){var h=c.path();f=b.keys;var l=","{};if(b.regexp)if(h=b.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=f[k-1],p=h[k];n&&p&&(l[n.name]=p)}f=l}else f=null;else f=null;f=a=f}f&&(e=q(b,{params:d.extend({},c.search(),a),pathParams:a}),e.$$route=b)});return e||f[null]&&q(f[null],{params:{},pathParams:{}})}function s(a,b){var c=[];d.forEach((a||\"\").split(\":\"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\\w+)(.*)/),g=f[1];c.push(b[g]);c.push(f[2]||\"\");delete b[g]}});return c.join(\"\")}var v=!1,n,u,r={routes:f,reload:function(){v=","!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route){var b={},f=this;d.forEach(Object.keys(a),function(c){f.current.pathParams[c]||(b[c]=a[c])});a=d.extend({},this.current.params,a);c.path(s(this.current.$$route.originalPath,a));c.search(d.extend({},c.search(),b))}else throw A(\"norout\");}};a.$on(\"$locationChangeStart\",l);a.$on(\"$locationChangeSuccess\",m);return r}]});var A=d.$$minErr(\"ngRoute\");p.provider(\"$routeParams\",function(){this.$get=function(){return{}}});","p.directive(\"ngView\",u);p.directive(\"ngView\",z);u.$inject=[\"$route\",\"$anchorScroll\",\"$animate\"];z.$inject=[\"$compile\",\"$controller\",\"$route\"]})(window,window.angular);"]},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":45}},"text":"//# sourceMappingURL=angular-route.min.js.map"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":42},"end":{"row":13,"column":43}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":43},"end":{"row":13,"column":44}},"text":"s"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":42},"end":{"row":13,"column":42},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415497946482,"hash":"e56266d839385a47714d97fa45b54a03ff80cdb1"}