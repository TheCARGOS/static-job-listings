(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,s=1;s<o.length;s++){var l=o[s];0!==a[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={app:0},r=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"10a9":function(t){t.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},"48a1":function(t,e,o){"use strict";o("7cf6")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"header"}),o("div",{staticClass:"container"},[t.filtered.length>0?o("div",{staticClass:"job-filters",staticStyle:{display:"flex","flex-wrap":"wrap"}},[o("div",{staticStyle:{display:"flex"}},t._l(t.filtered,(function(e){return o("job-filter",{key:e.id,attrs:{filter:e},on:{click:function(o){return t.removeFilter(e)}}})})),1),o("div",[o("button",{staticClass:"job-filters__clear",on:{click:function(e){return t.clearFilters()}}},[t._v("clear")])])]):t._e(),t.filtered.length>0?o("div",{staticClass:"job-list",class:{"job-list--margin":t.filtered.length>0}},t._l(t.jobs,(function(e){return o("div",{key:e.id},[t.isFiltered(t.getTags(e),t.filters)?o("job-card",{attrs:{logo:e.logo,company:e.company,isNew:e.new,isFeatured:e.featured,position:e.position,postedAt:e.postedAt,location:e.location,contact:e.contact,tags:t.getTags(e)}}):t._e()],1)})),0):o("div",{staticClass:"job-list"},t._l(t.jobs,(function(e){return o("div",{key:e.id},[o("job-card",{attrs:{logo:e.logo,company:e.company,position:e.position,isNew:e.new,isFeatured:e.featured,postedAt:e.postedAt,contract:e.contract,location:e.location,tags:t.getTags(e)}})],1)})),0)])])},r=[],i=(o("99af"),o("a623"),o("7db0"),o("caad"),o("c975"),o("a434"),o("2532"),o("2909")),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card",class:{"card--featured":t.isFeatured}},[o("div",{staticClass:"card__content"},[o("img",{staticClass:"card__img",attrs:{src:t.logo,alt:"company image"}}),o("div",{staticClass:"card__column"},[o("div",{staticClass:"card__row"},[o("h2",{staticClass:"card__row__company",domProps:{textContent:t._s(t.company)}}),t.isNew?o("div",{staticClass:"card__row__chip",staticStyle:{background:"#62aeac"}},[o("span",[t._v("NEW!")])]):t._e(),t.isFeatured?o("div",{staticClass:"card__row__chip"},[o("span",[t._v("FEATURED")])]):t._e()]),o("div",[o("h1",{staticClass:"card__title",domProps:{textContent:t._s(t.position)}}),o("span",{staticClass:"card__span",domProps:{textContent:t._s(t.postedAt)}}),o("span",{staticClass:"card__span",domProps:{textContent:t._s(t.contract)}}),o("span",{staticClass:"card__span",domProps:{textContent:t._s(t.location)}})])])]),o("hr"),o("div",{staticClass:"card__filters"},t._l(t.tags,(function(e,n){return o("a",{key:n,staticClass:"card__filters__filter",attrs:{href:"#!"},domProps:{textContent:t._s(e)},on:{click:function(o){return t.addFilter(e)}}})})),0)])},l=[],c=new n["a"],u={name:"JobCard",props:{company:String,logo:String,isNew:Boolean,isFeatured:Boolean,position:String,postedAt:String,contract:String,location:String,tags:Array,tools:Array},methods:{addFilter:function(t){c.$emit("addFilter",t)}}},d=u,p=(o("48a1"),o("2877")),f=Object(p["a"])(d,s,l,!1,null,null,null),g=f.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"job-filter"},[o("span",{staticClass:"filter",domProps:{textContent:t._s(t.filter)}}),o("button",{staticClass:"job-filter__btn",on:{click:function(e){return t.removeFilter(t.filter)}}},[t._v("x")])])},m=[],_={props:{filter:String},methods:{removeFilter:function(t){c.$emit("removeFilter",t)}}},y=_,b=(o("aa68"),Object(p["a"])(y,v,m,!1,null,null,null)),h=b.exports,w=o("10a9"),F={name:"App",components:{JobCard:g,JobFilter:h},data:function(){return{jobs:w,filters:[]}},computed:{filtered:function(){return this.filters}},methods:{clearFilters:function(){this.filters=[]},getTags:function(t){var e=[t.role,t.level].concat(Object(i["a"])(t.languages),Object(i["a"])(t.tools));return e},filterJobs:function(t,e){e.every((function(e){return t.includes(e)}))},isFiltered:function(t,e){return e.every((function(e){return t.includes(e)}))}},mounted:function(){var t=this;c.$on("addFilter",(function(e){var o=[];o=t.filters.find((function(t){return t==e})),!o&&t.filters.push(e)})),c.$on("removeFilter",(function(e){var o=t.filters.indexOf(e);o&&t.filters.splice(o,1),0==o&&t.filters.splice(0,1)}))}},S=F,C=(o("5c0b"),Object(p["a"])(S,a,r,!1,null,null,null)),j=C.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},"7cf6":function(t,e,o){},"9c0c":function(t,e,o){},aa68:function(t,e,o){"use strict";o("e63a")},e63a:function(t,e,o){}});
//# sourceMappingURL=app.ff2f6c6f.js.map