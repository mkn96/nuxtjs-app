(window.webpackJsonp=window.webpackJsonp||[]).push([[16,12,13],{251:function(n,t,e){var content=e(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(38).default)("637f02e6",content,!0,{sourceMap:!1})},252:function(n,t,e){"use strict";e.r(t);var r=e(253),o=e.n(r),l={name:"VueScrollProgressBar",props:{height:{type:String,default:".5rem"},zIndex:{type:String,default:"50"},backgroundColor:{type:String,default:"linear-gradient(to right, #543bcc, #5da5d4)"},containerColor:{type:String,default:"transparent"},barClass:{type:Object,default:function(){}},containerClass:{type:Object,default:function(){return{"progress-bar-container--container":!0}}}},data:function(){return{width:0}},mounted:function(){var n=!1;try{var t={get passive(){return n={passive:!0},!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(n){}window.addEventListener("scroll",o()(this.handleScroll,15),n),window.dispatchEvent(new Event("scroll"))},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var n=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.width=window.scrollY/n*100;var t=Math.ceil(this.width);0===t&&this.$emit("begin"),100===t&&this.$emit("complete")}}},c=(e(254),e(9)),component=Object(c.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{class:n.containerClass,style:{background:n.containerColor,zIndex:n.zIndex}},[e("div",{class:n.barClass,style:{width:n.width+"%",height:n.height,background:n.backgroundColor}})])}),[],!1,null,"1b9a5cd7",null);t.default=component.exports},253:function(n,t,e){(function(t){var e="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,m=f||v||Function("return this")(),h=Object.prototype.toString,x=Math.max,w=Math.min,y=function(){return m.Date.now()};function k(n,t,r){var o,l,c,d,f,v,m=0,h=!1,k=!1,j=!0;if("function"!=typeof n)throw new TypeError(e);function E(time){var t=o,e=l;return o=l=void 0,m=time,d=n.apply(e,t)}function S(time){return m=time,f=setTimeout(M,t),h?E(time):d}function O(time){var n=time-v;return void 0===v||n>=t||n<0||k&&time-m>=c}function M(){var time=y();if(O(time))return $(time);f=setTimeout(M,function(time){var n=t-(time-v);return k?w(n,c-(time-m)):n}(time))}function $(time){return f=void 0,j&&o?E(time):(o=l=void 0,d)}function z(){var time=y(),n=O(time);if(o=arguments,l=this,v=time,n){if(void 0===f)return S(v);if(k)return f=setTimeout(M,t),E(v)}return void 0===f&&(f=setTimeout(M,t)),d}return t=C(t)||0,_(r)&&(h=!!r.leading,c=(k="maxWait"in r)?x(C(r.maxWait)||0,t):c,j="trailing"in r?!!r.trailing:j),z.cancel=function(){void 0!==f&&clearTimeout(f),m=0,o=v=l=f=void 0},z.flush=function(){return void 0===f?d:$(y())},z}function _(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function C(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==h.call(n)}(n))return NaN;if(_(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=_(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var e=l.test(n);return e||c.test(n)?d(n.slice(2),e?2:8):o.test(n)?NaN:+n}n.exports=function(n,t,r){var o=!0,l=!0;if("function"!=typeof n)throw new TypeError(e);return _(r)&&(o="leading"in r?!!r.leading:o,l="trailing"in r?!!r.trailing:l),k(n,t,{leading:o,maxWait:t,trailing:l})}}).call(this,e(40))},254:function(n,t,e){"use strict";e(251)},255:function(n,t,e){var r=e(37)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.progress-bar-container--container[data-v-1b9a5cd7]{\n  position:fixed;\n  width:100%;\n  top:0;\n  left:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},257:function(n,t,e){var content=e(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(38).default)("1d04c8c6",content,!0,{sourceMap:!1})},276:function(n,t,e){n.exports=e.p+"img/developer-dark.aa2700b.svg"},277:function(n,t,e){n.exports=e.p+"img/developer.2f08460.svg"},278:function(n,t,e){"use strict";e(257)},279:function(n,t,e){var r=e(37)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\nh2[data-v-095d74ee]{\n  background:radial-gradient(circle,#483d8b 0,#20b2aa 100%);\n  background-clip:text;\n  -webkit-background-clip:text;\n  color:transparent;\n  -webkit-animation:animatedGradient-data-v-095d74ee 1.5s ease infinite;\n          animation:animatedGradient-data-v-095d74ee 1.5s ease infinite;\n  -webkit-animation-direction:alternate;\n          animation-direction:alternate\n}\n@-webkit-keyframes animatedGradient-data-v-095d74ee{\n0%{\n    background-size:100%\n}\nto{\n    background-size:250%\n}\n}\n@keyframes animatedGradient-data-v-095d74ee{\n0%{\n    background-size:100%\n}\nto{\n    background-size:250%\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},283:function(n,t,e){var content=e(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(38).default)("2e7fe04c",content,!0,{sourceMap:!1})},291:function(n,t,e){"use strict";e.r(t);e(21),e(39);var r=e(32),o=e.n(r),l={data:function(){return{}},mounted:function(){o.a.replace()},updated:function(){o.a.replace()}},c=(e(278),e(9)),component=Object(c.a)(l,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("section",{staticClass:"\n    flex flex-col\n    sm:justify-between\n    items-center\n    sm:flex-row\n    mt-12\n    sm:mt-10\n  "},[n._m(0),n._v(" "),r("div",{staticClass:"w-full md:w-2/3 text-right float-right"},["dark"==this.$colorMode.value?r("img",{attrs:{src:e(276),alt:"Developer Dark"}}):r("img",{attrs:{src:e(277),alt:"Developer Light"}})])])}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"typewriter w-full md:w-1/3 text-left"},[e("h2",{staticClass:"\n        font-general-semibold\n        text-3xl\n        md:text-3xl\n        xl:text-4xl\n        text-center\n        sm:text-left\n        text-ternary-dark\n        uppercase\n      "},[n._v("\n      Hi, i'm Mykhail\n    ")]),n._v(" "),e("p",{staticClass:"\n        font-general-medium\n        mt-2\n        text-lg\n        sm:text-xl\n        xl:text-2xl\n        text-center\n        sm:text-left\n        leading-none\n        text-gray-400\n      "},[n._v("\n    A Web Developer\n    ")]),n._v(" "),e("div",{staticClass:"flex justify-center sm:block"},[e("a",{staticClass:"\n          flex\n          justify-center\n          items-center\n          w-36\n          sm:w-48\n          mt-12\n          mb-6\n          sm:mb-0\n          text-lg\n          border border-indigo-200\n          dark:border-ternary-dark\n          py-2.5\n          sm:py-3\n          shadow-lg\n          rounded-lg\n          bg-indigo-500\n          focus:ring-1 focus:ring-indigo-900\n          hover:bg-green-500\n          text-gray-50\n          hover:text-white\n          duration-500\n        ",attrs:{href:"/assets/files/cv_miken.pdf",download:"","aria-label":"Download CV"}},[e("i",{staticClass:"ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100",attrs:{"data-feather":"arrow-down-circle"}}),n._v(" "),e("span",{staticClass:"text-sm sm:text-lg font-general-medium duration-100"},[n._v("Download CV")])])])])}],!1,null,"095d74ee",null);t.default=component.exports},292:function(n,t,e){"use strict";e(283)},293:function(n,t,e){var r=e(37)((function(i){return i[1]}));r.push([n.i,'/*purgecss start ignore*/\n.hover[data-v-001f3142]{\n  position:relative;\n  width:100px;\n  height:100px;\n  display:flex;\n  border:0;\n  outline:0;\n  overflow:hidden;\n  border-radius:50%;\n  background-color:#000;\n  margin:100px;\n  z-index:1;\n  transition:transform .2s\n}\n.hover[data-v-001f3142]:hover{\n  transform:scale(1.2)\n}\n.hover[data-v-001f3142]:before{\n  position:absolute;\n  content:"";\n  top:-5px;\n  left:-5px;\n  right:-5px;\n  bottom:-5px;\n  z-index:-1;\n  background-color:#777;\n  transition:transform .3s;\n  -webkit-backface-visibility:hidden;\n          backface-visibility:hidden\n}\n.hover.right[data-v-001f3142]:before{\n  transform:translateX(-100%)\n}\n.hover.left[data-v-001f3142]:before{\n  transform:translateX(100%)\n}\n.hover span[data-v-001f3142]{\n  margin:auto;\n  color:#fff\n}\n\n/*purgecss end ignore*/',""]),r.locals={},n.exports=r},302:function(n,t,e){"use strict";e.r(t);var r=e(291),o=e(132),l=e(252),c={scrollToTop:!0,components:{AppBanner:r.default,Button:o.default,ScrollProgress:l.default}},d=(e(292),e(9)),component=Object(d.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("ScrollProgress"),n._v(" "),e("div",{staticClass:"container mx-auto"},[e("AppBanner")],1)],1)}),[],!1,null,"001f3142",null);t.default=component.exports;installComponents(component,{ScrollProgress:e(252).default})}}]);