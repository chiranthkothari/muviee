(function(e){function t(t){for(var o,a,u=t[0],s=t[1],c=t[2],p=0,d=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("260b"),r=(n("e71f"),o["a"].initializeApp({apiKey:"AIzaSyB2WiECV3z574s3cmEIGh6adol8mSyz1wI",authDomain:"movies-ea0a0.firebaseapp.com",databaseURL:"https://movies-ea0a0.firebaseio.com",projectId:"movies-ea0a0",storageBucket:"movies-ea0a0.appspot.com",messagingSenderId:"971467144985",appId:"1:971467144985:web:9de789f04f52d6960b4f88"}).firestore()),i=(r.collection("movies"),n("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newMovie,expression:"newMovie"}],attrs:{type:"text",name:"name"},domProps:{value:e.newMovie},on:{input:function(t){t.target.composing||(e.newMovie=t.target.value)}}}),n("button",{on:{click:e.addMovie}},[e._v("Add movie")]),n("hr"),n("ul",e._l(e.MoviesList,(function(t){return n("li",{key:t.id},[e._v(e._s(t.title))])})),0)])},u=[],s={data:function(){return{newMovie:"",MoviesList:[]}},methods:{addMovie:function(){r.collection("movies").add({id:(new Date).toISOString(),title:this.newMovie}),this.newMovie=""}},firestore:{MoviesList:r.collection("movies").orderBy("id","desc")}},c=s,l=n("2877"),p=Object(l["a"])(c,a,u,!1,null,null,null),d=p.exports,f=n("0ff2");i["a"].config.productionTip=!1,i["a"].use(f["a"]),new i["a"]({render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.087ad520.js.map