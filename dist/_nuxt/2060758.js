(window.webpackJsonp=window.webpackJsonp||[]).push([[17,10,12],{251:function(t,r,e){var content=e(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(38).default)("637f02e6",content,!0,{sourceMap:!1})},252:function(t,r,e){"use strict";e.r(r);var n=e(253),l=e.n(n),o={name:"VueScrollProgressBar",props:{height:{type:String,default:".5rem"},zIndex:{type:String,default:"50"},backgroundColor:{type:String,default:"linear-gradient(to right, #543bcc, #5da5d4)"},containerColor:{type:String,default:"transparent"},barClass:{type:Object,default:function(){}},containerClass:{type:Object,default:function(){return{"progress-bar-container--container":!0}}}},data:function(){return{width:0}},mounted:function(){var t=!1;try{var r={get passive(){return t={passive:!0},!1}};window.addEventListener("test",null,r),window.removeEventListener("test",null,r)}catch(t){}window.addEventListener("scroll",l()(this.handleScroll,15),t),window.dispatchEvent(new Event("scroll"))},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.width=window.scrollY/t*100;var r=Math.ceil(this.width);0===r&&this.$emit("begin"),100===r&&this.$emit("complete")}}},c=(e(254),e(9)),component=Object(c.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:t.containerClass,style:{background:t.containerColor,zIndex:t.zIndex}},[e("div",{class:t.barClass,style:{width:t.width+"%",height:t.height,background:t.backgroundColor}})])}),[],!1,null,"1b9a5cd7",null);r.default=component.exports},253:function(t,r,e){(function(r){var e="Expected a function",n=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,f="object"==typeof r&&r&&r.Object===Object&&r,m="object"==typeof self&&self&&self.Object===Object&&self,v=f||m||Function("return this")(),h=Object.prototype.toString,x=Math.max,y=Math.min,_=function(){return v.Date.now()};function j(t,r,n){var l,o,c,d,f,m,v=0,h=!1,j=!1,w=!0;if("function"!=typeof t)throw new TypeError(e);function P(time){var r=l,e=o;return l=o=void 0,v=time,d=t.apply(e,r)}function S(time){return v=time,f=setTimeout(T,r),h?P(time):d}function E(time){var t=time-m;return void 0===m||t>=r||t<0||j&&time-v>=c}function T(){var time=_();if(E(time))return O(time);f=setTimeout(T,function(time){var t=r-(time-m);return j?y(t,c-(time-v)):t}(time))}function O(time){return f=void 0,w&&l?P(time):(l=o=void 0,d)}function $(){var time=_(),t=E(time);if(l=arguments,o=this,m=time,t){if(void 0===f)return S(m);if(j)return f=setTimeout(T,r),P(m)}return void 0===f&&(f=setTimeout(T,r)),d}return r=C(r)||0,k(n)&&(h=!!n.leading,c=(j="maxWait"in n)?x(C(n.maxWait)||0,r):c,w="trailing"in n?!!n.trailing:w),$.cancel=function(){void 0!==f&&clearTimeout(f),v=0,l=m=o=f=void 0},$.flush=function(){return void 0===f?d:O(_())},$}function k(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function C(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==h.call(t)}(t))return NaN;if(k(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=k(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var e=o.test(t);return e||c.test(t)?d(t.slice(2),e?2:8):l.test(t)?NaN:+t}t.exports=function(t,r,n){var l=!0,o=!0;if("function"!=typeof t)throw new TypeError(e);return k(n)&&(l="leading"in n?!!n.leading:l,o="trailing"in n?!!n.trailing:o),j(t,r,{leading:l,maxWait:r,trailing:o})}}).call(this,e(40))},254:function(t,r,e){"use strict";e(251)},255:function(t,r,e){var n=e(37)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.progress-bar-container--container[data-v-1b9a5cd7]{\n  position:fixed;\n  width:100%;\n  top:0;\n  left:0\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},290:function(t,r,e){"use strict";e.r(r);var n={data:function(){return{relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:[{id:1,title:"Web Application",img:e(10)},{id:2,title:"Application Testing",img:e(10)},{id:3,title:"SEO",img:e(10)},{id:4,title:"SMM",img:e(10)}]}}}},l=e(9),component=Object(l.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"\n    mt-10\n    pt-10\n    sm:pt-14 sm:mt-20\n    border-t-2 border-primary-light\n    dark:border-secondary-dark\n  "},[e("p",{staticClass:"\n      font-general-regular\n      text-primary-dark\n      dark:text-primary-light\n      text-3xl\n      font-bold\n      mb-10\n      sm:mb-14\n      text-left\n    "},[t._v("\n    "+t._s(t.relatedProject.relatedProjectsHeading)+"\n  ")]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-4 gap-10"},t._l(t.relatedProject.relatedProjects,(function(t){return e("div",{key:t.id},[e("img",{staticClass:"rounded-xl cursor-pointer",attrs:{src:t.img,alt:t.title}})])})),0)])}),[],!1,null,null,null);r.default=component.exports},301:function(t,r,e){"use strict";e.r(r);e(21),e(39);var n=e(32),l=e.n(n),o=e(290),c=e(252),d={scrollToTop:!0,data:function(){return{path:"/projects"}},created:function(){var t,r,e;null!==(t=this.$nuxt)&&void 0!==t&&null!==(r=t.context)&&void 0!==r&&null!==(e=r.from)&&void 0!==e&&e.path&&(this.path=this.$nuxt.context.from.path)},computed:{project:function(){return this.$store.getters.getProjectById(this.$route.params.id)}},mounted:function(){l.a.replace()},updated:function(){l.a.replace()},components:{ProjectRelatedProjects:o.default,ScrollProgress:c.default}},f=e(9),component=Object(f.a)(d,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("ScrollProgress"),t._v(" "),e("div",{staticClass:"container mx-auto"},[t.project?e("div",[e("div",[e("p",{staticClass:"\r\n            font-general-medium\r\n            text-left text-3xl\r\n            sm:text-4xl\r\n            font-bold\r\n            text-primary-dark\r\n            dark:text-primary-light\r\n            mt-14\r\n            sm:mt-20\r\n            mb-7\r\n          "},[t._v("\r\n          "+t._s(t.project.title)+"\r\n        ")]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"flex items-center mr-10"},[e("i",{staticClass:"w-4 h-4 text-ternary-dark dark:text-ternary-light",attrs:{"data-feather":"clock"}}),t._v(" "),e("span",{staticClass:"\r\n                font-general-medium\r\n                ml-2\r\n                leading-none\r\n                text-primary-dark\r\n                dark:text-primary-light\r\n              "},[t._v(t._s(t.project.publishDate))])]),t._v(" "),e("div",{staticClass:"flex items-center"},[e("i",{staticClass:"w-4 h-4 text-ternary-dark dark:text-ternary-light",attrs:{"data-feather":"tag"}}),t._v(" "),e("span",{staticClass:"\r\n                font-general-medium\r\n                ml-2\r\n                leading-none\r\n                text-primary-dark\r\n                dark:text-primary-light\r\n              "},[t._v(t._s(t.project.tag))])])])]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},t._l(t.project.projectImages,(function(t){return e("div",{key:t.id,staticClass:"mb-10 sm:mb-0"},[e("img",{staticClass:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",attrs:{src:t.img}})])})),0),t._v(" "),e("div",{staticClass:"block sm:flex gap-0 sm:gap-10 mt-14"},[e("div",{staticClass:"w-full sm:w-1/3 text-left"},[e("div",{staticClass:"mb-7"},[e("p",{staticClass:"\r\n                font-general-medium\r\n                text-2xl text-secondary-dark\r\n                dark:text-secondary-light\r\n                mb-2\r\n              "},[t._v("\r\n              "+t._s(t.project.clientTitle)+"\r\n            ")]),t._v(" "),e("ul",{staticClass:"leading-loose"},t._l(t.project.companyInfos,(function(r){return e("li",{key:r.id,staticClass:"\r\n                  font-general-regular\r\n                  text-ternary-dark\r\n                  dark:text-ternary-light\r\n                "},[e("span",[t._v(t._s(r.title)+": ")]),t._v(" "),e("a",{class:"Website"==r.title||"Phone"==r.title?"hover:underline cursor-pointer":"",attrs:{href:"#","aria-label":"Project website and phone"}},[t._v(t._s(r.details))])])})),0)]),t._v(" "),e("div",{staticClass:"mb-7"},[e("p",{staticClass:"\r\n                font-general-medium\r\n                text-2xl text-ternary-dark\r\n                dark:text-ternary-light\r\n                mb-2\r\n              "},[t._v("\r\n              "+t._s(t.project.objectivesTitle)+"\r\n            ")]),t._v(" "),e("p",{staticClass:"\r\n                font-general-regular\r\n                text-primary-dark\r\n                dark:text-ternary-light\r\n              "},[t._v("\r\n              "+t._s(t.project.objectivesDetails)+"\r\n            ")])]),t._v(" "),e("div",{staticClass:"mb-7"},[e("p",{staticClass:"\r\n                font-general-medium\r\n                text-2xl text-ternary-dark\r\n                dark:text-ternary-light\r\n                mb-2\r\n              "},[t._v("\r\n              "+t._s(t.project.techTitle)+"\r\n            ")]),t._v(" "),e("p",{staticClass:"\r\n                font-general-regular\r\n                text-primary-dark\r\n                dark:text-ternary-light\r\n              "},[t._v("\r\n              "+t._s(t.project.technologies.join(", "))+"\r\n            ")])]),t._v(" "),e("div",[e("p",{staticClass:"\r\n                font-general-medium\r\n                text-2xl text-ternary-dark\r\n                dark:text-ternary-light\r\n                mb-2\r\n              "},[t._v("\r\n              "+t._s(t.project.socialTitle)+"\r\n            ")]),t._v(" "),e("div",{staticClass:"flex items-center gap-3 mt-5"},t._l(t.project.socialSharings,(function(t){return e("a",{key:t.id,staticClass:"\r\n                  bg-ternary-light\r\n                  dark:bg-ternary-dark\r\n                  text-gray-400\r\n                  hover:text-primary-dark\r\n                  dark:hover:text-primary-light\r\n                  p-2\r\n                  rounded-lg\r\n                  shadow-sm\r\n                  duration-500\r\n                ",attrs:{href:t.url,target:"__blank","aria-label":"Share Project"}},[e("i",{staticClass:"w-4 lg:w-5 h-4 lg:h-5",attrs:{"data-feather":t.icon}})])})),0)])]),t._v(" "),e("div",{staticClass:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},[e("p",{staticClass:"\r\n              font-general-medium\r\n              text-primary-dark\r\n              dark:text-primary-light\r\n              text-2xl\r\n              font-bold\r\n              mb-7\r\n            "},[t._v("\r\n            "+t._s(t.project.detailsTitle)+"\r\n          ")]),t._v(" "),t._l(t.project.projectDetails,(function(r){return e("p",{key:r.id,staticClass:"\r\n              font-general-regular\r\n              mb-5\r\n              text-lg text-ternary-dark\r\n              dark:text-ternary-light\r\n            "},[t._v("\r\n            "+t._s(r.details)+"\r\n          ")])}))],2)]),t._v(" "),e("ProjectRelatedProjects"),t._v(" "),e("NuxtLink",{attrs:{to:t.path}},[e("p",{staticClass:"pt-10 text-right font-bold dark:text-white"},[t._v(".. cd")])])],1):e("div",{staticClass:"font-general-medium container mx-auto text-center"},[e("h1",[t._v("No projects yet")])])])],1)}),[],!1,null,"06753981",null);r.default=component.exports;installComponents(component,{ScrollProgress:e(252).default})}}]);