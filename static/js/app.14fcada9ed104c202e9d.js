webpackJsonp([2,0],{0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(75),a=i(r),s=n(71),o=i(s);n(68),new a.default({el:"#app",render:function(t){return t(o.default)}})},30:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n=Math.floor((0,c.default)(t))+1;return n>=e?""+t:Array(e-n).fill(0).join("")+t}function a(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.length;e=Math.min(t.length,e);for(var n=[].concat((0,u.default)(t)),i=n.length,r=0;r<e;r++){var s=Math.floor(Math.random()*(i-r))+r;a(n,r,s)}return n}Object.defineProperty(e,"__esModule",{value:!0});var o=n(36),u=i(o),l=n(34),c=i(l);e.pad=r,e.swap=a,e.shuffle=s},31:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(18),a=i(r),s=n(35),o=i(s),u=n(30),l=n(72),c=i(l),d={candidates:[],winners:[],total:null,round:null,rolling:!1,isSetup:!1,editing:!1};e.default={name:"lucky",components:{file:c.default},data:function(){return(0,o.default)({},d)},computed:{remaining:{get:function(){return this.isSetup?this.candidates.length:"∞"}}},methods:{edit:function(t){this.editing=t},click:function(t){var e=t.target;this.$refs.welcome.contains(e)||(this.editing=!1)},setup:function(){return this.$refs.total.validationMessage?void alert(this.$refs.total.validationMessage):(this.candidates=Array(this.total).fill(!0).map(function(t,e){return(0,u.pad)(e+1,3)}),void(this.isSetup=!0))},upload:function(t){var e=this,n=t.target,i=n.files[0];if(i){var r=new FileReader;r.onload=function(t){var n=t.target;e.candidates=n.result.split("\n").map(function(t){return t.trim()}).filter(function(t){return t}),e.total=e.candidates.length,e.isSetup=!0,e.$refs.round.focus()},r.readAsText(i)}},roll:function(){var t=this;if(this.$refs.round.validationMessage)return void alert(this.$refs.round.validationMessage);var e=this.round;this.rolling?(this.candidates.splice(0,e),clearTimeout(this.rolling),this.rolling=!1,this.checkRemaining()):(this.rolling=setInterval(function(){t.shuffle(e)},1e3/15),this.$nextTick(function(){t.$refs.begin.focus()}))},shuffle:function(t){var e=(0,u.shuffle)(this.candidates,t);this.winners=e.slice(0,t),this.candidates=e},reset:function(){clearTimeout(this.rolling),this.$refs.upload.clear(),(0,a.default)(this,d)},checkRemaining:function(){var t="";this.candidates.length<this.round&&(t="剩余人数不足"+this.round+"人。"),this.$refs.round.setCustomValidity(t)}},watch:{isSetup:function(t,e){var n=this;t!==e&&this.$nextTick(function(){t?n.$refs.round.focus():n.$refs.total.focus()})}},mounted:function(){var t=this;window.onbeforeunload=function(){if(t.isSetup)return"目前抽奖尚未结束，是否要离开？"}}}},32:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"file",props:{name:String,disabled:Boolean,accept:String,multiple:Boolean,required:Boolean},methods:{input:function(t){this.$emit("input",t)},change:function(t){this.$emit("change",t)},choose:function(){this.$refs.file.click()},clear:function(){this.$refs.file.value=""}}}},68:function(t,e){},69:function(t,e){},70:function(t,e){},71:function(t,e,n){var i,r;n(70),i=n(31);var a=n(74);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,t.exports=i},72:function(t,e,n){var i,r;n(69),i=n(32);var a=n(73);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,t.exports=i},73:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"file"},[n("button",{attrs:{type:"button"},on:{click:t.choose}},[t._t("default",[t._v("选择文件")])],2),t._v(" "),n("input",{ref:"file",attrs:{type:"file",name:t.name,disabled:t.disabled,accept:t.accept,multiple:t.multiple,required:t.required},on:{input:t.input,change:t.change}})])},staticRenderFns:[]}},74:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"},on:{click:t.click}},[n("div",{attrs:{id:"display"}},[t.winners.length?t._l(t.winners,function(e){return n("span",{staticClass:"name"},[t._v(t._s(e.split("|")[0])+" "),e.split("|")[1]?n("span",{staticClass:"desc"},[t._v("("+t._s(e.split("|")[1])+")")]):t._e()])}):n("h1",{ref:"welcome",staticClass:"welcome",attrs:{contenteditable:t.editing},on:{dblclick:function(e){t.edit(!0)},keydown:function(e){t._k(e.keyCode,"enter",13)||t.edit(!1)}}},[t._v("Who's feeling lucky?")])],2),t._v(" "),n("div",{class:{started:t.isSetup},attrs:{id:"control"}},[n("form",{attrs:{id:"setup"},on:{submit:function(e){e.preventDefault(),t.setup(e)}}},[n("label",[n("file",{ref:"upload",attrs:{disabled:t.isSetup},on:{change:t.upload}},[t._v("选择文件")])],1),t._v(" "),n("span",{staticClass:"separator"},[t._v("- or -")]),t._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.total,expression:"total"}],ref:"total",attrs:{type:"number",required:"",min:"1",max:"999",number:"",disabled:t.isSetup,placeholder:"一共有几人？"},domProps:{value:t._s(t.total)},on:{input:function(e){e.target.composing||(t.total=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("button",{attrs:{disabled:t.isSetup}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"roll"},on:{reset:t.reset,submit:function(e){e.preventDefault(),t.roll(e)}}},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.round,expression:"round"}],ref:"round",attrs:{type:"number",number:"",required:"",disabled:!this.isSetup||this.rolling,required:"",min:"1",max:t.remaining||50,placeholder:"本轮抽几人？"},domProps:{value:t._s(t.round)},on:{input:[function(e){e.target.composing||(t.round=t._n(e.target.value))},t.checkRemaining],blur:function(e){t.$forceUpdate()}}})]),t._v(" / "),n("span",{staticClass:"remaining"},[t._v(t._s(t.remaining))]),t._v(" "),n("button",{ref:"begin",attrs:{disabled:!t.isSetup,name:"begin"}},[t._v(t._s(t.rolling?"停止":"开始"))]),t._v(" "),n("button",{attrs:{type:"reset",disabled:!t.isSetup}},[t._v("重置")])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=app.14fcada9ed104c202e9d.js.map