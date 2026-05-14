(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,20955,(e,t,r)=>{var n={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}var s=[],l=!1,c=-1;function d(){l&&n&&(l=!1,n.length?s=n.concat(s):c=-1,s.length&&f())}function f(){if(!l){var e=u(d);l=!0;for(var t=s.length;t;){for(n=s,s=[];++c<t;)n&&n[c].run();c=-1,t=s.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new p(e,t)),1!==s.length||l||u(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}},a=!0;try{n[e](r,r.exports,i),a=!1}finally{a&&delete o[e]}return r.exports}i.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=i(229)},50461,(e,t,r)=>{"use strict";var n,o;t.exports=(null==(n=e.g.process)?void 0:n.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(20955)},41705,(e,t,r)=>{"use strict";r._=function(e){return e&&e.__esModule?e:{default:e}}},77325,(e,t,r)=>{"use strict";var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function b(){}function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var _=w.prototype=new b;_.constructor=w,x(_,y.prototype),_.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,C={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,r){var o,i={},a=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,o)&&!O.hasOwnProperty(o)&&(i[o]=t[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:n,type:e,key:a,ref:u,props:i,_owner:C.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function E(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function P(e,t,r){if(null==e)return e;var i=[],a=0;return!function e(t,r,i,a,u){var s,l,c,d=typeof t;("undefined"===d||"boolean"===d)&&(t=null);var f=!1;if(null===t)f=!0;else switch(d){case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case n:case o:f=!0}}if(f)return u=u(f=t),t=""===a?"."+E(f,0):a,v(u)?(i="",null!=t&&(i=t.replace(S,"$&/")+"/"),e(u,r,i,"",function(e){return e})):null!=u&&(k(u)&&(s=u,l=i+(!u.key||f&&f.key===u.key?"":(""+u.key).replace(S,"$&/")+"/")+t,u={$$typeof:n,type:s.type,key:l,ref:s.ref,props:s.props,_owner:s._owner}),r.push(u)),1;if(f=0,a=""===a?".":a+":",v(t))for(var p=0;p<t.length;p++){var m=a+E(d=t[p],p);f+=e(d,r,i,m,u)}else if("function"==typeof(m=null===(c=t)||"object"!=typeof c?null:"function"==typeof(c=h&&c[h]||c["@@iterator"])?c:null))for(t=m.call(t),p=0;!(d=t.next()).done;)m=a+E(d=d.value,p++),f+=e(d,r,i,m,u);else if("object"===d)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return f}(e,i,"","",function(e){return t.call(r,e,a++)}),i}function N(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},T={transition:null};function M(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:P,forEach:function(e,t,r){P(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=y,r.Fragment=i,r.Profiler=u,r.PureComponent=w,r.StrictMode=a,r.Suspense=d,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:T,ReactCurrentOwner:C},r.act=M,r.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=x({},e.props),i=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)j.call(t,l)&&!O.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:u}},r.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=I,r.createFactory=function(e){var t=I.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=k,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:N}},r.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},r.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},r.unstable_act=M,r.useCallback=function(e,t){return R.current.useCallback(e,t)},r.useContext=function(e){return R.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return R.current.useDeferredValue(e)},r.useEffect=function(e,t){return R.current.useEffect(e,t)},r.useId=function(){return R.current.useId()},r.useImperativeHandle=function(e,t,r){return R.current.useImperativeHandle(e,t,r)},r.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return R.current.useMemo(e,t)},r.useReducer=function(e,t,r){return R.current.useReducer(e,t,r)},r.useRef=function(e){return R.current.useRef(e)},r.useState=function(e){return R.current.useState(e)},r.useSyncExternalStore=function(e,t,r){return R.current.useSyncExternalStore(e,t,r)},r.useTransition=function(){return R.current.useTransition()},r.version="18.3.1"},91788,(e,t,r)=>{"use strict";t.exports=e.r(77325)},1884,(e,t,r)=>{"use strict";var n=e.r(91788),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,c=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:u.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},91398,(e,t,r)=>{"use strict";t.exports=e.r(1884)},13584,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"HeadManagerContext",{enumerable:!0,get:function(){return n}});let n=e.r(41705)._(e.r(91788)).default.createContext({})},94470,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},52456,(e,t,r)=>{"use strict";function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}r._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}},94941,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return u}});let n=e.r(91788),o="u"<typeof window,i=o?()=>{}:n.useLayoutEffect,a=o?()=>{}:n.useEffect;function u(e){let{headManager:t,reduceComponentsToState:r}=e;function u(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return o&&(t?.mountedInstances?.add(e.children),u()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=u),()=>{t&&(t._pendingUpdate=u)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},80963,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return m},defaultHead:function(){return d}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(41705),a=e.r(52456),u=e.r(91398),s=a._(e.r(91788)),l=i._(e.r(94941)),c=e.r(13584);function d(){return[(0,u.jsx)("meta",{charSet:"utf-8"},"charset"),(0,u.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(94470);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,r,n,o;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,r=new Set,n=new Set,o={},e=>{let i=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?i=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?i=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?i=!1:n.add(r);else{let t=e.props[r],n=o[r]||new Set;("name"!==r||!a)&&n.has(t)?i=!1:(n.add(t),o[r]=n)}}}return i})).reverse().map((e,t)=>{let r=e.key||t;return s.default.cloneElement(e,{key:r})})}let m=function({children:e}){let t=(0,s.useContext)(c.HeadManagerContext);return(0,u.jsx)(l.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},89129,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return w},NormalizeError:function(){return y},PageNotFoundError:function(){return b},SP:function(){return m},ST:function(){return x},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return d},getLocationOrigin:function(){return l},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return v}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let u=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>u.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=l();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let m="u">typeof performance,x=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class y extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},71914,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useIntersection",{enumerable:!0,get:function(){return s}});let n=e.r(91788),o=e.r(99604),i="function"==typeof IntersectionObserver,a=new Map,u=[];function s({rootRef:e,rootMargin:t,disabled:r}){let l=r||!i,[c,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(l||c)return;let r=f.current;if(r&&r.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(r,e=>e&&d(e),{root:e?.current,rootMargin:t})}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[l,t,e,c,f.current]),[p,c,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},54471,(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getDomainLocale",{enumerable:!0,get:function(){return n}}),e.r(70090),("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},63230,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(91788);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},48735,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},39149,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return C},useLinkStatus:function(){return j}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(52456),a=e.r(91398),u=i._(e.r(91788)),s=e.r(60472),l=e.r(71112),c=e.r(28169),d=e.r(89129),f=e.r(14862),p=e.r(25479),h=e.r(71914),m=e.r(54471),x=e.r(44113),g=e.r(63230);e.r(48735);let y=new Set;function b(e,t,r,n){if(!("u"<typeof window)&&(0,l.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}e.prefetch(t,r,n).catch(e=>{})}}function w(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let _=u.default.forwardRef(function(e,t){let r,n,{href:o,as:i,children:c,prefetch:y=null,passHref:_,replace:v,shallow:j,scroll:C,locale:O,onClick:I,onNavigate:k,onMouseEnter:S,onTouchStart:E,legacyBehavior:P=!1,transitionTypes:N,...R}=e;r=c,P&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let T=u.default.useContext(p.RouterContext),M=!1!==y,{href:L,as:A}=u.default.useMemo(()=>{if(!T){let e=w(o);return{href:e,as:i?w(i):e}}let[e,t]=(0,s.resolveHref)(T,o,!0);return{href:e,as:i?(0,s.resolveHref)(T,i):t||e}},[T,o,i]),$=u.default.useRef(L),z=u.default.useRef(A);P&&(n=u.default.Children.only(r));let H=P?n&&"object"==typeof n&&n.ref:t,[U,D,B]=(0,h.useIntersection)({rootMargin:"200px"}),F=u.default.useCallback(e=>{(z.current!==A||$.current!==L)&&(B(),z.current=A,$.current=L),U(e)},[A,L,B,U]),W=(0,g.useMergedRef)(F,H);u.default.useEffect(()=>{!T||D&&M&&b(T,L,A,{locale:O})},[A,L,D,O,M,T?.locale,T]);let V={ref:W,onClick(e){P||"function"!=typeof I||I(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),!T||e.defaultPrevented||function(e,t,r,n,o,i,a,u,s){let c,{nodeName:d}=e.currentTarget;if(!("A"===d.toUpperCase()&&((c=e.currentTarget.getAttribute("target"))&&"_self"!==c||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,l.isLocalURL)(r)){o&&(e.preventDefault(),location.replace(r));return}e.preventDefault(),(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let e=a??!0;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:u,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})})()}}(e,T,L,A,v,j,C,O,k)},onMouseEnter(e){P||"function"!=typeof S||S(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),T&&b(T,L,A,{locale:O,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){P||"function"!=typeof E||E(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),T&&b(T,L,A,{locale:O,priority:!0,bypassPrefetchedCheck:!0})}};if((0,d.isAbsoluteUrl)(A))V.href=A;else if(!P||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:T?.locale;V.href=T?.isLocaleDomain&&(0,m.getDomainLocale)(A,e,T?.locales,T?.domainLocales)||(0,x.addBasePath)((0,f.addLocale)(A,e,T?.defaultLocale))}return P?u.default.cloneElement(n,V):(0,a.jsx)("a",{...R,...V,children:r})}),v=(0,u.createContext)({pending:!1}),j=()=>(0,u.useContext)(v),C=_;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},41158,(e,t,r)=>{t.exports=e.r(39149)},14237,e=>{"use strict";var t=e.i(91398),r=e.i(41158),n=e.i(60814),o=e.i(34523);let i=n.default.div.withConfig({displayName:"Hero__LeftBar",componentId:"sc-d49a806f-0"})`
  top: 0;
  width: 1px;
  height: 105%;
  position: absolute;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  opacity: 0.2;
  left: 234px;

  @media (max-width: 1800px) {
    left: 150px;
  }

  @media (max-width: 1600px) {
    left: 100px;
  }

  @media (max-width: 1400px) {
    left: 70px;
  }

  @media (max-width: 1300px) {
    left: 50px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`,a=n.default.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-d49a806f-1"})`
  width: 100%;
  background-color: ${o.COLORS.navbarHero};
  ${o.HORIZONTAL_SPACE}
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 99px;
  padding-bottom: 189px;

  .hero-mobile-bg {
    position: absolute;
    right: 0;
    top: 346px;
    display: none;

    @media (max-width: 750px) {
      display: block;
    }
  }

  .hero-text-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 4;

    .IllustrationText-mobile {
      display: none;
    }

    @media (max-width: 750px) {
      height: auto;

      .IllustrationText-mobile {
        max-width: 171px;
        font-size: 17px;
        font-weight: 400;
        color: #fff;
        margin-top: 69px;
        display: block;

        span {
          color: #1a4f31;
          background-color: #fff;
        }
      }
    }
  }

  @media (max-width: 750px) {
    padding-top: 58px;
    padding-bottom: 104px;
  }
`,u=n.default.div.withConfig({displayName:"Hero__CircleAnimationRight",componentId:"sc-d49a806f-2"})`
  position: absolute;
  right: -15%;

  @media (max-width: 1050px) {
    transform: scale(0.7);
    right: -20%;
  }

  @media (max-width: 900px) {
    transform: scale(0.7);
    right: -23%;
  }
`,s=n.default.div.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-d49a806f-3"})`
  h1 {
    width: 830px;
    color: ${o.COLORS.white};
    font-weight: 400;
    font-size: 56px;
    line-height: 76.5px;
  }

  img {
    margin-bottom: 58px;

    @media (max-width: 750px) {
      margin-bottom: 24px;
    }
  }

  @media (max-width: 1750px) {
    h1 {
      max-width: 800px;
      font-size: 50px;
      line-height: 70px;
    }
  }

  @media (max-width: 1600px) {
    h1 {
      max-width: 700px;
      font-size: 45px;
      line-height: 60px;
    }
  }

  @media (max-width: 1500px) {
    h1 {
      max-width: 550px;
      font-size: 40px;
      line-height: 50px;
    }
  }

  @media (max-width: 750px) {
    h1 {
      width: 100%;
      max-width: 340px;
      font-size: 32px;
      line-height: 43.71px;
    }
  }
`,l=n.default.ul.withConfig({displayName:"Hero__Links",componentId:"sc-d49a806f-4"})`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 64px;
  margin-top: 272px;

  @media (max-height: 9200px) {
    margin-top: 100px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
    margin-top: 56px;
  }
`,c=n.default.li.withConfig({displayName:"Hero__LinksItem",componentId:"sc-d49a806f-5"})`
  transition: 0.5s;

  a {
    color: #9fc899;
    font-weight: 300;
    font-size: 24px;
    text-decoration: underline;
    transition: 0.5s;
  }

  &:hover {
    transform: scale(1.05);
  }

  a:hover {
    color: #fff;
  }

  @media (max-width: 1600px) {
    a {
      max-width: 700px;
      font-size: 20;
    }
  }
`,d=n.default.div.withConfig({displayName:"Hero__IllustrationContainer",componentId:"sc-d49a806f-6"})`
  width: 622px;
  height: 622px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,f=n.default.div.withConfig({displayName:"Hero__IllustrationBg",componentId:"sc-d49a806f-7"})`
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-image: url('/arranha-ceus-de-aco-eletrico-business-metal-sky 1.webp');
  background-size: cover;
`,p=n.default.img.withConfig({displayName:"Hero__IllustrationWordImage",componentId:"sc-d49a806f-8"})`
  width: 140.91px;
  height: 140.91px;
`,h=n.default.div.withConfig({displayName:"Hero__IllustrationBigCircle",componentId:"sc-d49a806f-9"})`
  width: 623px;
  height: 623px;
  border-radius: 100%;
  background-image: url('/big-circle-border.png');

  /* @media (max-width: 750px) {
    width: 244px;
    height: 244px;
  } */
`,m=n.default.div.withConfig({displayName:"Hero__IllustrationSmallCircle",componentId:"sc-d49a806f-10"})`
  width: 346px;
  height: 346px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  transform: translateY(90px) translateX(-90px);
  z-index: 5;
  background-image: url('/border-radius.png');

  .up-icon {
    position: absolute;
    left: -3%;
    top: 0;
    margin: 25%;
  }
`,x=n.default.div.withConfig({displayName:"Hero__IllustrationCircleAnimated",componentId:"sc-d49a806f-11"})`
  position: absolute;
  width: 622px;
  height: 622px;
  border-radius: 100%;
  transform: rotate(-80deg);
`,g=n.default.div.withConfig({displayName:"Hero__IllustrationCuttedCircle",componentId:"sc-d49a806f-12"})`
  position: absolute;
  top: 0;
  right: 0;
  height: 622px;
  width: 622px;
  border-radius: 311px;
  background-color: #46785c;
  background: radial-gradient(
    53.45% 53.45% at 50% 0%,
    rgba(255, 255, 255, 0) 0%,
    ${o.COLORS.navbarHero} 160%
  );

  .outer-cirlce {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background-color: ${o.COLORS.navbarHero};
    border-radius: 0 0 311px 311px;
    transform: rotate(-50deg) translate(120px, 55px);
  }
`,y=n.default.div.withConfig({displayName:"Hero__IllustrationLine",componentId:"sc-d49a806f-13"})`
  width: 2px;
  height: 1500px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: translateY(-450px) rotate(41deg);
  position: absolute;
  top: 0;
  z-index: 2;
  opacity: 0.3;
`,b=n.default.p.withConfig({displayName:"Hero__IllustrationText",componentId:"sc-d49a806f-14"})`
  max-width: 184px;
  font-size: 13px;
  font-weight: 400;
  padding: 0 30px;
  color: #fff;
  position: absolute;
  z-index: 9;
  margin-top: 50px;

  span {
    color: #1a4f31;
    background-color: #fff;
  }

  @media (max-width: 750px) {
    display: none;
  }
`,w=n.default.div.withConfig({displayName:"Hero__HeroDefaultContainer",componentId:"sc-d49a806f-15"})`
  width: 680px;
  height: 90%;
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  z-index: 0;
  top: 113px;

  @media (max-width: 750px) {
    display: none;
  }
`;e.s(["HeroDefaultContainer",0,w,"LeftBar",0,i,"default",0,()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)(i,{}),(0,t.jsxs)("div",{className:"hero-text-container",children:[(0,t.jsxs)(s,{"data-aos":"fade-down",children:[(0,t.jsx)("img",{src:"/arrow-up-right-3.svg"}),(0,t.jsx)("h1",{children:"Multi-Family Office focused on providing transparent, comprehensive and objective advice for High-Net-Worth Families test"})," "]}),(0,t.jsxs)(l,{children:[(0,t.jsx)(c,{children:(0,t.jsx)(r.default,{href:o.MENU_ITEMS[1].route,children:"Portfolio Management"})}),(0,t.jsx)(c,{children:(0,t.jsx)(r.default,{href:o.MENU_ITEMS[o.MENU_ITEMS.length-1].route,children:"Contact Us"})})]}),(0,t.jsxs)("div",{className:"IllustrationText-mobile","data-aos":"fade-up",children:["Proudly serving families throughout"," ",(0,t.jsx)("span",{children:" North and South America and Europe"})]})]}),(0,t.jsx)("img",{className:"hero-mobile-bg",src:"/hero-home-mobile.png",alt:""})]}),(0,t.jsx)(w,{children:(0,t.jsxs)(u,{"data-aos":"zoom-in",children:[(0,t.jsxs)(d,{children:[(0,t.jsx)(h,{children:(0,t.jsx)(f,{})}),(0,t.jsxs)(m,{children:[(0,t.jsx)("img",{className:"up-icon",src:"/up.svg",alt:""}),(0,t.jsx)(p,{src:"/North_America.png"})]}),(0,t.jsx)(y,{}),(0,t.jsx)(g,{children:(0,t.jsx)("div",{className:"outer-cirlce"})}),(0,t.jsx)(x,{})]}),(0,t.jsxs)(b,{"data-aos":"fade-up",children:["Proudly serving families throughout"," ",(0,t.jsx)("span",{children:" North and South America and Europe"})]})]})})]})])},31148,e=>{"use strict";var t=e.i(91788);e.s(["useMediaQuery",0,()=>{let[e,r]=(0,t.useState)({width:0,height:0}),n=()=>{r({width:window.innerWidth,height:window.innerHeight})};return(0,t.useEffect)(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e}])},39748,e=>{"use strict";var t=e.i(91398),r=e.i(41158),n=e.i(60814),o=e.i(34523),i=e.i(14237),a=e.i(31148);let u=n.default.div.withConfig({displayName:"About__HeroAboutContainer",componentId:"sc-1869d15a-0"})`
  width: 100%;
  background-color: ${o.COLORS.navbarHero};
  ${o.HORIZONTAL_SPACE}
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 63px;
  padding-bottom: 153px;
  overflow: hidden;
  z-index: 2;

  @media (max-width: 1000px) {
    padding-bottom: 200px;
  }

  @media (max-width: 850px) {
    padding-bottom: 350px;
    padding-top: 58px;
  }

  .hero-mobile-bg {
    position: absolute;
    right: 0;
    top: 419px;
    display: none;

    @media (max-width: 750px) {
      display: block;
    }
  }

  .HeroAbout-text-container {
    height: 100%;
    display: flex;
    flex-direction: column;

    .text {
      font-size: 20px;
      font-weight: 200;
      color: #fff;
      margin-top: 24px;
      width: 710px;
    }
  }

  .animation-circle-right {
    position: absolute;
    top: 0;
    right: -5%;
  }
`,s=n.default.p.withConfig({displayName:"About__HeroAboutTitle",componentId:"sc-1869d15a-1"})`
  width: 950px;
  color: ${o.COLORS.white};
  font-weight: 300;
  font-size: 46px;
  line-height: 62.84px;

  @media (max-width: 1750px) {
    max-width: 850px;
    font-size: 40;
    line-height: 55.84px;
  }

  @media (max-width: 1600px) {
    max-width: 700px;
    font-size: 35px;
  }

  @media (max-width: 1500px) {
    font-size: 30px;
    max-width: 600px;
    line-height: 43px;
  }

  @media (max-width: 1000px) {
    max-width: 290px;
    width: 100%;
    font-size: 24px;
    line-height: 30px;
  }
`,l=n.default.h1.withConfig({displayName:"About__SubTitle",componentId:"sc-1869d15a-2"})`
  font-size: 16px;
  font-weight: 400;
  color: #9fc899;
  margin-bottom: 18px;
`,c=n.default.p.withConfig({displayName:"About__Text",componentId:"sc-1869d15a-3"})`
  font-size: 20px;
  font-weight: 300;
  color: #fff;
  margin-top: 24px;
  max-width: 790px;
  line-height: 36px;

  @media (max-width: 1500px) {
    max-width: 600px;
  }

  @media (max-width: 1180px) {
    font-size: 16px;
    line-height: 20px;
    max-width: 400px;
  }

  @media (max-width: 850px) {
    font-size: 14px;
    max-width: 323px;
    width: 100%;
  }
`,d=n.default.div.withConfig({displayName:"About__Links",componentId:"sc-1869d15a-4"})`
  display: flex;
  flex-direction: row;
  margin-top: 67px;
  list-style: none;
  gap: 20px;

  @media (max-width: 850px) {
    margin-top: 56px;
  }
`,f=n.default.p.withConfig({displayName:"About__LinksItem",componentId:"sc-1869d15a-5"})`
  transition: 0.5s;

  a {
    color: ${o.COLORS.text};
    font-weight: 400;
    font-size: 24px;
    text-decoration: underline;
    transition: 0.5s;
    width: 250px;
  }

  &:hover {
    transform: scale(1.05);
  }

  a:hover {
    color: #fff;
  }
`,p=n.default.div.withConfig({displayName:"About__IllustrationContainer",componentId:"sc-1869d15a-6"})`
  width: 622px;
  height: 622px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 20px;
    height: 20px;
    left: -200px;
    bottom: 0;
    transform: rotate(180deg);
    margin-bottom: 60px;
  }
`,h=n.default.div.withConfig({displayName:"About__IllustrationBg",componentId:"sc-1869d15a-7"})`
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-image: url('/florida.webp');
  background-size: cover;
  background-position-y: -50px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  .innerCircleBig {
    width: 346.75px;
    height: 346.75px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
    background-image: url('/border-radius.png');
  }

  .innerSmallCircle {
    width: 184px;
    height: 184px;
    border: 2px solid #46785c;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a4f31;
  }
`,m=n.default.div.withConfig({displayName:"About__IllustrationBigCircle",componentId:"sc-1869d15a-8"})`
  width: 622px;
  height: 622px;
  border-radius: 100%;
`,x=n.default.div.withConfig({displayName:"About__IllustrationCircleAnimated",componentId:"sc-1869d15a-9"})`
  position: absolute;
  width: 622px;
  height: 622px;
  border-radius: 100%;
  transform: rotate(-80deg);
  background-image: url('/big-circle-border.png');
`,g=n.default.div.withConfig({displayName:"About__IllustrationCuttedCircle",componentId:"sc-1869d15a-10"})`
  position: absolute;
  top: 0;
  right: 0;
  height: 622px;
  width: 622px;
  border-radius: 311px;
  background-color: transparent;
  background: radial-gradient(
    70% 60% at 0% 0%,
    rgba(0, 0, 0, 0) 100%,
    ${o.COLORS.navbarHero} 150%
  );

  .outer-cirlce {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background-color: ${o.COLORS.navbarHero};
    border-radius: 0 0 311px 311px;
    transform: rotate(-50deg) translate(120px, 55px);
  }
`,y=n.default.div.withConfig({displayName:"About__IllustrationLine",componentId:"sc-1869d15a-11"})`
  width: 2px;
  height: 1000px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: translateY(-200px) rotate(40deg);
  position: absolute;
  top: 0;
  z-index: 2;
  opacity: 0.3;
`,b=n.default.div.withConfig({displayName:"About__CircleAnimationRight",componentId:"sc-1869d15a-12"})`
  position: absolute;
  right: -15%;

  @media (max-width: 1080px) {
    transform: scale(0.7);
    right: -20%;
  }

  @media (max-width: 900px) {
    transform: scale(0.7);
    right: -23%;
  }
`;e.s(["IllustrationContainer",0,p,"Links",0,d,"LinksItem",0,f,"default",0,()=>{let{width:e}=(0,a.useMediaQuery)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u,{children:[(0,t.jsx)(i.LeftBar,{}),(0,t.jsxs)("div",{className:"HeroAbout-text-container",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(l,{"data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom",children:"About us"}),(0,t.jsx)(s,{"data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom",children:"Abacus was established in 2020 with a mission to expand access to transparent and thoughtfully constructed investment management solutions. Our approach emphasizes disciplined portfolio design, cost awareness, and alignment with client goals."}),(0,t.jsx)(c,{"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",children:"Mauro Ferman, in his 23 years of investment experience, including working with $100M families, founded the firm with a desire to provide clients with transparent fee structures and personalized investment guidance. Drawing on his prior experience in larger financial institutions, he sought to build a firm centered on fiduciary principles and client alignment."})]}),(0,t.jsx)(d,{"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",children:(0,t.jsx)(f,{children:(0,t.jsx)(r.default,{href:"/contact-us",children:"Contact Us"})})})]}),(0,t.jsx)("img",{"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",className:"hero-mobile-bg",src:"/hero-about-bg.png",alt:""})]}),(0,t.jsx)(i.HeroDefaultContainer,{children:(0,t.jsx)(b,{"data-aos":"zoom-in",className:"animation-circle-right",children:(0,t.jsxs)(p,{children:[(0,t.jsx)("div",{style:{width:"20px",height:"20px",position:"absolute",left:"-90px",bottom:0,transform:"rotate(180deg)",marginBottom:"60px"},children:(0,t.jsx)("img",{src:"/up.svg",alt:""})}),(0,t.jsx)(y,{}),(0,t.jsx)(m,{children:(0,t.jsx)(h,{children:(0,t.jsx)("div",{className:"innerCircleBig",children:(0,t.jsx)("div",{className:"innerSmallCircle",children:(0,t.jsx)("img",{src:"/abacus-empty.svg",alt:""})})})})}),(0,t.jsx)(g,{children:(0,t.jsx)("div",{className:"outer-cirlce"})}),(0,t.jsx)(x,{})]})})})]})}])}]);