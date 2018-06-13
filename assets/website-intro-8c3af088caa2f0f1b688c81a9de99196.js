"use strict"
define("website-intro/app",["exports","website-intro/resolver","ember-load-initializers","website-intro/config/environment"],function(e,t,n,i){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,n.default)(r,i.default.modulePrefix),e.default=r}),define("website-intro/components/-lf-get-outlet-state",["exports","liquid-fire/components/-lf-get-outlet-state"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/components/ember-youtube",["exports","ember-youtube/components/ember-youtube"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("website-intro/components/illiquid-model",["exports","liquid-fire/components/illiquid-model"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/components/liquid-bind",["exports","liquid-fire/components/liquid-bind"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/components/liquid-child",["exports","liquid-fire/components/liquid-child"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/components/liquid-container",["exports","liquid-fire/components/liquid-container"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/components/liquid-if",["exports","liquid-fire/components/liquid-if"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/components/liquid-measured",["exports","liquid-fire/components/liquid-measured"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"measure",{enumerable:!0,get:function(){return t.measure}})}),define("website-intro/components/liquid-outlet",["exports","liquid-fire/components/liquid-outlet"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/components/liquid-spacer",["exports","liquid-fire/components/liquid-spacer"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/components/liquid-sync",["exports","liquid-fire/components/liquid-sync"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/components/liquid-unless",["exports","liquid-fire/components/liquid-unless"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/components/liquid-versions",["exports","liquid-fire/components/liquid-versions"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.inject.service,n=Ember.computed
Ember.observer
e.default=Ember.Controller.extend({queryParams:["p"],p:0,pageMax:6,pageTemplate:n("p",function(){return"page"+this.get("p")}),screen:t(),ytHeight:n("screen.width",function(){var e=this.get("screen.width")
return e>992?e/4:e/2})})}),define("website-intro/helpers/and",["exports","ember-truth-helpers/helpers/and"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return t.and}})}),define("website-intro/helpers/app-version",["exports","website-intro/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function i(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.default.APP.version,l=i.versionOnly||i.hideSha,a=i.shaOnly||i.hideVersion,o=null
return l&&(i.showExtended&&(o=r.match(n.versionExtendedRegExp)),o||(o=r.match(n.versionRegExp))),a&&(o=r.match(n.shaRegExp)),o?o[0]:r}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=i,e.default=Ember.Helper.helper(i)}),define("website-intro/helpers/cancel-all",["exports","ember-concurrency/helpers/cancel-all"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"cancelAll",{enumerable:!0,get:function(){return t.cancelAll}})}),define("website-intro/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return t.equal}})}),define("website-intro/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return t.gt}})}),define("website-intro/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return t.gte}})}),define("website-intro/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return t.isArray}})}),define("website-intro/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})}),define("website-intro/helpers/lf-lock-model",["exports","liquid-fire/helpers/lf-lock-model"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfLockModel",{enumerable:!0,get:function(){return t.lfLockModel}})}),define("website-intro/helpers/lf-or",["exports","liquid-fire/helpers/lf-or"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfOr",{enumerable:!0,get:function(){return t.lfOr}})}),define("website-intro/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return t.lt}})}),define("website-intro/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return t.lte}})}),define("website-intro/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"notEq",{enumerable:!0,get:function(){return t.notEq}})}),define("website-intro/helpers/not",["exports","ember-truth-helpers/helpers/not"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return t.not}})}),define("website-intro/helpers/or",["exports","ember-truth-helpers/helpers/or"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return t.or}})})
define("website-intro/helpers/perform",["exports","ember-concurrency/helpers/perform"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"perform",{enumerable:!0,get:function(){return t.perform}})}),define("website-intro/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("website-intro/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("website-intro/helpers/task",["exports","ember-concurrency/helpers/task"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"task",{enumerable:!0,get:function(){return t.task}})}),define("website-intro/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return t.xor}})}),define("website-intro/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","website-intro/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var i=void 0,r=void 0
n.default.APP&&(i=n.default.APP.name,r=n.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(i,r)}}),define("website-intro/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("website-intro/initializers/ember-concurrency",["exports","ember-concurrency/initializers/ember-concurrency"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("website-intro/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("website-intro/initializers/export-application-global",["exports","website-intro/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var i,r=t.default.exportApplicationGlobal
i="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),n[i]||(n[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("website-intro/initializers/liquid-fire",["exports","liquid-fire/ember-internals","liquid-fire/velocity-ext"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),(0,t.initialize)(),e.default={name:"liquid-fire",initialize:function(){}}}),define("website-intro/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("website-intro/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("website-intro/router",["exports","website-intro/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("appliaction"),this.route("page1"),this.route("page2")}),e.default=n}),define("website-intro/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({queryParams:{page:{refreshModel:!0}},actions:{next:function(e){e++,this.transitionTo("/?p="+e)},back:function(e){e=--e>0?e:0,this.transitionTo("/?p="+e)}}})}),define("website-intro/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/services/liquid-fire-transitions",["exports","liquid-fire/transition-map"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("website-intro/services/screen",["exports","ember-screen"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({isSmallAndUp:(0,t.breakpoint)("(min-width: 34em)"),isMediumAndUp:(0,t.breakpoint)("(min-width: 48em)"),isLargeAndUp:(0,t.breakpoint)("(min-width: 62em)"),isExtraLargeAndUp:(0,t.breakpoint)("(min-width: 75em)"),isExtraSmallAndDown:(0,t.breakpoint)("(max-width: 33.9999em)"),isSmallAndDown:(0,t.breakpoint)("(max-width: 47.9999em)"),isMediumAndDown:(0,t.breakpoint)("(max-width: 61.9999em)"),isLargeAndDown:(0,t.breakpoint)("(max-width: 74.9999em)")})}),define("website-intro/templates/-page0",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"n7HEejLy",block:'{"symbols":[],"statements":[[6,"div"],[10,"style","padding: 1em;"],[8],[0,"\\n  "],[6,"div"],[10,"class","center"],[8],[0,"\\n    "],[6,"img"],[10,"width","250"],[10,"src","icon-96d3ea06f7f1d2a94aaba02675043c36.png"],[8],[9],[0,"\\n    "],[6,"h3"],[8],[0,"中華中學資訊研習"],[9],[0,"\\n    "],[6,"h5"],[8],[0,"近期網站與大數據的發展及相關技術"],[9],[0,"\\n    "],[6,"br"],[8],[9],[6,"br"],[8],[9],[0,"\\n    "],[6,"h5"],[8],[0,"主講人：黃忠海"],[9],[0,"\\n  "],[9],[0,"\\n\\n  "],[6,"div"],[10,"class","fixed-action-btn direction-top"],[10,"style","bottom: 25px; left: 25px;"],[8],[0,"\\n    v0.0.0\\n  "],[9],[0,"\\n"],[9],[0,"\\n"],[1,[20,"outlet"],false]],"hasEval":false}',meta:{moduleName:"website-intro/templates/-page0.hbs"}})}),define("website-intro/templates/-page1",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"y7PegNxg",block:'{"symbols":[],"statements":[[1,[26,"ember-youtube",null,[["ytid","width","height"],["Q8TXgCzxEnw","100%",[22,["ytHeight"]]]]],false],[0,"\\n"],[6,"div"],[10,"style","padding: 1em;"],[8],[0,"\\n  "],[6,"h3"],[8],[0,"Material Design"],[9],[0,"\\n  "],[6,"div"],[8],[0,"\\n    相關連結\\n    "],[6,"div"],[10,"class","info-area"],[8],[0,"\\n      "],[6,"a"],[10,"href","https://material.io"],[8],[0,"Google Material Design"],[9],[0,"\\n      "],[6,"a"],[10,"href","https://wcc723.gitbooks.io/google_design_translate/content"],[8],[0,"Google Material Design 正體中文版"],[9],[0,"\\n      "],[6,"a"],[10,"href","https://materializecss.com/"],[8],[0,"Materialize"],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"],[1,[20,"outlet"],false]],"hasEval":false}',meta:{moduleName:"website-intro/templates/-page1.hbs"}})}),define("website-intro/templates/-page2",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"3WTeoaWh",block:'{"symbols":[],"statements":[[6,"div"],[10,"style","padding: 1em;"],[8],[0,"\\n  "],[6,"h3"],[8],[0,"Content Placeholder"],[9],[0,"\\n  "],[6,"div"],[10,"class","row"],[8],[0,"\\n    "],[6,"div"],[10,"class","card"],[8],[0,"\\n      "],[6,"div"],[10,"class","card-image"],[8],[0,"\\n        "],[6,"img"],[10,"class","materialboxed1"],[10,"width","650"],[10,"src","images/cp1-659c854dbd593ce2c074133fd30ae76f.png"],[8],[9],[0,"\\n      "],[9],[0,"\\n      "],[6,"div"],[10,"class","card-content"],[8],[0,"\\n        "],[6,"h5"],[8],[0,"Sample 1"],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[6,"div"],[10,"class","card"],[8],[0,"\\n      "],[6,"div"],[10,"class","card-image"],[8],[0,"\\n        "],[6,"img"],[10,"class","materialboxed1"],[10,"width","650"],[10,"src","images/cp2-322c5694def8dc85dc7bf5b712997fc8.png"],[8],[9],[0,"\\n      "],[9],[0,"\\n      "],[6,"div"],[10,"class","card-content"],[8],[0,"\\n        "],[6,"h5"],[8],[0,"Sample 2"],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[6,"div"],[10,"class","card"],[8],[0,"\\n      "],[6,"div"],[10,"class","card-image"],[8],[0,"\\n        "],[6,"img"],[10,"class","materialboxed1"],[10,"width","650"],[10,"src","images/cp4-2de8a5a1303b1beb8f8714922737863f.png"],[8],[9],[0,"\\n      "],[9],[0,"\\n      "],[6,"div"],[10,"class","card-content"],[8],[0,"\\n        "],[6,"h5"],[8],[0,"Sample 3"],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n  "],[6,"h3"],[8],[0,"Preloader"],[9],[0,"\\n  "],[6,"div"],[10,"class","row"],[8],[0,"\\n    "],[6,"div"],[10,"class","card"],[8],[0,"\\n      "],[6,"div"],[10,"class","card-content"],[8],[0,"\\n        "],[6,"h4"],[8],[0,"Linear"],[9],[0,"\\n        "],[6,"div"],[10,"class","progress"],[8],[0,"\\n          "],[6,"div"],[10,"class","indeterminate"],[8],[9],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n  "],[6,"div"],[10,"class","row"],[8],[0,"\\n    "],[6,"div"],[10,"class","card"],[8],[0,"\\n      "],[6,"div"],[10,"class","card-content"],[8],[0,"\\n        "],[6,"h4"],[8],[0,"Circular"],[9],[0,"\\n\\n        "],[6,"div"],[10,"class","preloader-wrapper big active"],[8],[0,"\\n          "],[6,"div"],[10,"class","spinner-layer spinner-blue-only"],[8],[0,"\\n            "],[6,"div"],[10,"class","circle-clipper left"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[6,"div"],[10,"class","gap-patch"],[8],[0,"\\n            "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n          "],[9],[6,"div"],[10,"class","circle-clipper right"],[8],[0,"\\n            "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n          "],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n\\n        "],[6,"div"],[10,"class","preloader-wrapper active"],[8],[0,"\\n          "],[6,"div"],[10,"class","spinner-layer spinner-red-only"],[8],[0,"\\n            "],[6,"div"],[10,"class","circle-clipper left"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[0,"\\n            "],[6,"div"],[10,"class","gap-patch"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[0,"\\n            "],[6,"div"],[10,"class","circle-clipper right"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n\\n        "],[6,"div"],[10,"class","preloader-wrapper small active"],[8],[0,"\\n          "],[6,"div"],[10,"class","spinner-layer spinner-green-only"],[8],[0,"\\n            "],[6,"div"],[10,"class","circle-clipper left"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[6,"div"],[10,"class","gap-patch"],[8],[0,"\\n            "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n          "],[9],[0,"\\n            "],[6,"div"],[10,"class","circle-clipper right"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n        "],[6,"div"],[10,"class","row"],[8],[0,"\\n          "],[6,"div"],[10,"class","preloader-wrapper big active"],[8],[0,"\\n            "],[6,"div"],[10,"class","spinner-layer spinner-blue"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle-clipper left"],[8],[0,"\\n                "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n              "],[9],[6,"div"],[10,"class","gap-patch"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[6,"div"],[10,"class","circle-clipper right"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[0,"\\n            "],[9],[0,"\\n\\n            "],[6,"div"],[10,"class","spinner-layer spinner-red"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle-clipper left"],[8],[0,"\\n                "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n              "],[9],[6,"div"],[10,"class","gap-patch"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[6,"div"],[10,"class","circle-clipper right"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[0,"\\n            "],[9],[0,"\\n\\n            "],[6,"div"],[10,"class","spinner-layer spinner-yellow"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle-clipper left"],[8],[0,"\\n                "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n              "],[9],[6,"div"],[10,"class","gap-patch"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[6,"div"],[10,"class","circle-clipper right"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[0,"\\n            "],[9],[0,"\\n\\n            "],[6,"div"],[10,"class","spinner-layer spinner-green"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle-clipper left"],[8],[0,"\\n                "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n              "],[9],[6,"div"],[10,"class","gap-patch"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[6,"div"],[10,"class","circle-clipper right"],[8],[0,"\\n              "],[6,"div"],[10,"class","circle"],[8],[9],[0,"\\n            "],[9],[0,"\\n            "],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"],[1,[20,"outlet"],false]],"hasEval":false}',meta:{moduleName:"website-intro/templates/-page2.hbs"}})}),define("website-intro/templates/-page3",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"fhq+f2a2",block:'{"symbols":[],"statements":[[6,"div"],[10,"style","padding: 1em;"],[8],[0,"\\n  "],[6,"h3"],[8],[0,"RWD (Responsive Web Design)"],[9],[0,"\\n  "],[6,"div"],[10,"class","card"],[8],[0,"\\n    "],[6,"div"],[10,"class","card-image"],[8],[0,"\\n      "],[6,"img"],[10,"class","materialboxed1"],[10,"width","650"],[10,"src","images/img_responsive_page-782f4ef5f4fc1a9db9ac95194c77c171.jpg"],[8],[9],[0,"\\n    "],[9],[0,"\\n    "],[6,"div"],[10,"class","card-content"],[8],[0,"\\n      "],[6,"h5"],[8],[0,"Sample"],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n  "],[6,"div"],[8],[0,"\\n    相關連結\\n    "],[6,"div"],[10,"class","info-area"],[8],[0,"\\n      "],[6,"a"],[10,"href","https://material.io"],[10,"target",""],[8],[0,"Google Material Design"],[9],[0,"\\n      "],[6,"a"],[10,"href","https://wcc723.gitbooks.io/google_design_translate/content"],[8],[0,"Google Material Design 正體中文版"],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"],[1,[20,"outlet"],false]],"hasEval":false}',meta:{moduleName:"website-intro/templates/-page3.hbs"}})}),define("website-intro/templates/-page4",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"MlKprWJ7",block:'{"symbols":[],"statements":[[6,"div"],[10,"style","padding: 1em;"],[8],[0,"\\n  "],[6,"h3"],[8],[0,"PWA (Progressive Web Apps)"],[9],[0,"\\n  "],[6,"iframe"],[10,"src","https://developers.google.com/web/progressive-web-apps/"],[8],[9],[0,"\\n  "],[6,"div"],[8],[0,"\\n    相關連結\\n    "],[6,"div"],[10,"class","info-area"],[8],[0,"\\n      "],[6,"a"],[10,"href","https://developers.google.com/web/progressive-web-apps/"],[10,"target",""],[8],[0,"Progressive Web Apps"],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"],[1,[20,"outlet"],false]],"hasEval":false}',meta:{moduleName:"website-intro/templates/-page4.hbs"}})}),define("website-intro/templates/-page5",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"33EgVIbs",block:'{"symbols":[],"statements":[[6,"div"],[10,"style","padding: 1em;"],[8],[0,"\\n  "],[6,"h3"],[8],[0,"Gooogle Search"],[9],[0,"\\n  "],[6,"div"],[10,"class","row"],[8],[0,"\\n    "],[6,"div"],[10,"class","card"],[8],[0,"\\n      "],[6,"div"],[10,"class","card-image"],[8],[0,"\\n        "],[6,"img"],[10,"class","materialboxed1"],[10,"width","650"],[10,"src","images/google_search-812e32182b5184ca61ab6a9acc1c3379.png"],[8],[9],[0,"\\n      "],[9],[0,"\\n      "],[6,"div"],[10,"class","card-content"],[8],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n\\n  "],[6,"h3"],[8],[0,"Elasticsearch"],[9],[0,"\\n  "],[6,"div"],[10,"class","row"],[8],[0,"\\n    相關連結\\n    "],[6,"div"],[10,"class","info-area"],[8],[0,"\\n      "],[6,"a"],[10,"href","https://www.elastic.co/products/elasticsearch"],[8],[0,"Elasticsearch"],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"],[1,[20,"outlet"],false]],"hasEval":false}',meta:{moduleName:"website-intro/templates/-page5.hbs"}})}),define("website-intro/templates/-page6",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"o1m+HRiW",block:'{"symbols":[],"statements":[[6,"div"],[10,"style","padding: 1em;"],[8],[0,"\\n  "],[6,"h3"],[8],[0,"Google Analytics"],[9],[0,"\\n  "],[6,"div"],[10,"class","row"],[8],[0,"\\n    相關連結\\n    "],[6,"div"],[10,"class","info-area"],[8],[0,"\\n      "],[6,"a"],[10,"href","https://zh.wikipedia.org/wiki/Google%E5%88%86%E6%9E%90"],[8],[0,"wiki"],[9],[0,"\\n      "],[6,"a"],[10,"href","https://www.google.com.tw/intl/zh-TW/analytics/"],[8],[0,"Google Analytics"],[9],[0,"\\n      "],[6,"a"],[10,"href","https://transbiz.com.tw/google-analytics-%E6%95%99%E5%AD%B8-ga-%E5%88%86%E6%9E%90%E6%8C%87%E6%A8%99//"],[8],[0,"教學-ga-分析指標"],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"],[1,[20,"outlet"],false]],"hasEval":false}',meta:{moduleName:"website-intro/templates/-page6.hbs"}})}),define("website-intro/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"wT2bWDHx",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","fixed-action-btn direction-top active"],[10,"style","top: 0px; right: 0px; padding-top: 0px;"],[8],[0,"\\n  "],[6,"div"],[10,"class","page center"],[8],[0,"\\n    "],[1,[20,"p"],false],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n\\n"],[6,"main"],[8],[0,"\\n  "],[6,"div"],[10,"class","row"],[8],[0,"\\n    "],[6,"div"],[10,"class","col s12 l6 offset-l3"],[10,"style","padding: 0px;"],[8],[0,"\\n      "],[14,[22,["pageTemplate"]],[]],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n  "],[1,[20,"outlet"],false],[0,"\\n"],[9],[0,"\\n\\n"],[4,"if",[[26,"gt",[[22,["p"]],0],null]],null,{"statements":[[0,"  "],[6,"div"],[10,"class","fixed-action-btn direction-top"],[10,"style","bottom: 25px; left: 25px;"],[8],[0,"\\n    "],[6,"a"],[10,"id","menu"],[10,"class","btn btn-floating btn-large light-blue waves-effect waves-light waves-circle"],[3,"action",[[21,0,[]],"back",[22,["p"]]]],[8],[0,"\\n      "],[6,"i"],[10,"class","material-icons"],[8],[0,"chevron_left"],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]},null],[4,"if",[[26,"lt",[[22,["p"]],[22,["pageMax"]]],null]],null,{"statements":[[0,"  "],[6,"div"],[10,"class","fixed-action-btn direction-top active"],[10,"style","bottom: 25px; right: 25px;"],[8],[0,"\\n    "],[6,"a"],[10,"id","menu"],[10,"class","btn btn-floating btn-large light-blue waves-effect waves-light waves-circle"],[3,"action",[[21,0,[]],"next",[22,["p"]]]],[8],[0,"\\n      "],[6,"i"],[10,"class","material-icons"],[8],[0,"chevron_right"],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]},null]],"hasEval":true}',meta:{moduleName:"website-intro/templates/application.hbs"}})}),define("website-intro/templates/components/ember-youtube",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"jrrzb5ld",block:'{"symbols":["&default"],"statements":[[6,"div"],[10,"class","EmberYoutube-player"],[8],[9],[0,"\\n\\n"],[4,"if",[[22,["showExtras"]]],null,{"statements":[[0,"\\t"],[6,"div"],[10,"class","EmberYoutube-extras"],[8],[0,"\\n"],[4,"if",[[22,["showControls"]]],null,{"statements":[[0,"\\t\\t\\t"],[6,"menu"],[10,"class","EmberYoutube-controls"],[8],[0,"\\n\\t\\t\\t\\t"],[6,"button"],[3,"action",[[21,0,[]],"togglePlay"]],[8],[4,"if",[[22,["isPlaying"]]],null,{"statements":[[0,"Pause"]],"parameters":[]},{"statements":[[0,"Play"]],"parameters":[]}],[9],[0,"\\n\\t\\t\\t\\t"],[6,"button"],[3,"action",[[21,0,[]],"toggleVolume"]],[8],[4,"if",[[22,["isMuted"]]],null,{"statements":[[0,"Unmute"]],"parameters":[]},{"statements":[[0,"Mute"]],"parameters":[]}],[9],[0,"\\n\\t\\t\\t"],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[22,["showProgress"]]],null,{"statements":[[0,"\\t\\t\\t"],[6,"p"],[10,"class","EmberYoutube-progress"],[8],[0,"\\n\\t\\t\\t\\t"],[6,"progress"],[11,"value",[20,"currentTime"],null],[11,"max",[20,"duration"],null],[8],[9],[0,"\\n\\t\\t\\t"],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[22,["showDebug"]]],null,{"statements":[[0,"\\t\\t\\t"],[6,"p"],[10,"class","EmberYoutube-debug"],[8],[0,"\\n\\t\\t\\t\\t"],[6,"code"],[8],[0,"\\n\\t\\t\\t\\t\\tytid: "],[1,[20,"ytid"],false],[6,"br"],[8],[9],[0,"\\n\\t\\t\\t\\t\\tplayerState: "],[1,[20,"playerState"],false],[6,"br"],[8],[9],[0,"\\n\\t\\t\\t\\t\\tisMuted: "],[1,[20,"isMuted"],false],[6,"br"],[8],[9],[0,"\\n\\t\\t\\t\\t\\tisPlaying: "],[1,[20,"isPlaying"],false],[6,"br"],[8],[9],[0,"\\n\\t\\t\\t\\t\\tcurrentTime: "],[1,[20,"currentTime"],false],[6,"br"],[8],[9],[0,"\\n\\t\\t\\t\\t\\tduration: "],[1,[20,"duration"],false],[6,"br"],[8],[9],[0,"\\n\\t\\t\\t\\t\\tvolume: "],[1,[20,"volume"],false],[6,"br"],[8],[9],[0,"\\n\\t\\t\\t\\t"],[9],[0,"\\n\\t\\t\\t"],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\t"],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,1]],null,{"statements":[[0,"\\t"],[6,"div"],[10,"class","EmberYoutube-yield"],[8],[0,"\\n\\t\\t"],[13,1],[0,"\\n\\t"],[9],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"website-intro/templates/components/ember-youtube.hbs"}})}),define("website-intro/transitions/cross-fade",["exports","liquid-fire/transitions/cross-fade"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/transitions/default",["exports","liquid-fire/transitions/default"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/transitions/explode",["exports","liquid-fire/transitions/explode"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})
define("website-intro/transitions/fade",["exports","liquid-fire/transitions/fade"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/transitions/flex-grow",["exports","liquid-fire/transitions/flex-grow"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/transitions/fly-to",["exports","liquid-fire/transitions/fly-to"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/transitions/move-over",["exports","liquid-fire/transitions/move-over"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/transitions/scale",["exports","liquid-fire/transitions/scale"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/transitions/scroll-then",["exports","liquid-fire/transitions/scroll-then"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/transitions/to-down",["exports","liquid-fire/transitions/to-down"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/transitions/to-left",["exports","liquid-fire/transitions/to-left"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/transitions/to-right",["exports","liquid-fire/transitions/to-right"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/transitions/to-up",["exports","liquid-fire/transitions/to-up"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/transitions/wait",["exports","liquid-fire/transitions/wait"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("website-intro/config/environment",[],function(){try{var e="website-intro/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("website-intro/app").default.create({name:"website-intro",version:"0.0.0+c172613c"})
