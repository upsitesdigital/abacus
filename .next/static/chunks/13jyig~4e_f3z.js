(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,20955,(e,t,n)=>{var r={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}var l=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?l=r.concat(l):u=-1,l.length&&f())}function f(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||c||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}},a=!0;try{r[e](n,n.exports,i),a=!1}finally{a&&delete o[e]}return n.exports}i.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=i(229)},50461,(e,t,n)=>{"use strict";var r,o;t.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(20955)},41705,(e,t,n)=>{"use strict";n._=function(e){return e&&e.__esModule?e:{default:e}}},77325,(e,t,n)=>{"use strict";var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,x={};function y(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||m}function _(){}function b(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=y.prototype;var v=b.prototype=new _;v.constructor=b,g(v,y.prototype),v.isPureReactComponent=!0;var w=Array.isArray,j=Object.prototype.hasOwnProperty,C={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,o)&&!E.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:r,type:e,key:a,ref:s,props:i,_owner:C.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function M(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function I(e,t,n){if(null==e)return e;var i=[],a=0;return!function e(t,n,i,a,s){var l,c,u,d=typeof t;("undefined"===d||"boolean"===d)&&(t=null);var f=!1;if(null===t)f=!0;else switch(d){case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case r:case o:f=!0}}if(f)return s=s(f=t),t=""===a?"."+M(f,0):a,w(s)?(i="",null!=t&&(i=t.replace(O,"$&/")+"/"),e(s,n,i,"",function(e){return e})):null!=s&&(k(s)&&(l=s,c=i+(!s.key||f&&f.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+t,s={$$typeof:r,type:l.type,key:c,ref:l.ref,props:l.props,_owner:l._owner}),n.push(s)),1;if(f=0,a=""===a?".":a+":",w(t))for(var p=0;p<t.length;p++){var m=a+M(d=t[p],p);f+=e(d,n,i,m,s)}else if("function"==typeof(m=null===(u=t)||"object"!=typeof u?null:"function"==typeof(u=h&&u[h]||u["@@iterator"])?u:null))for(t=m.call(t),p=0;!(d=t.next()).done;)m=a+M(d=d.value,p++),f+=e(d,n,i,m,s);else if("object"===d)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return f}(e,i,"","",function(e){return t.call(n,e,a++)}),i}function S(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},T={transition:null};function L(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:I,forEach:function(e,t,n){I(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return I(e,function(){t++}),t},toArray:function(e){return I(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=y,n.Fragment=i,n.Profiler=s,n.PureComponent=b,n.StrictMode=a,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:T,ReactCurrentOwner:C},n.act=L,n.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)j.call(t,c)&&!E.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:r,type:e.type,key:i,ref:a,props:o,_owner:s}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},n.createElement=P,n.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=k,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:S}},n.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},n.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},n.unstable_act=L,n.useCallback=function(e,t){return N.current.useCallback(e,t)},n.useContext=function(e){return N.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return N.current.useDeferredValue(e)},n.useEffect=function(e,t){return N.current.useEffect(e,t)},n.useId=function(){return N.current.useId()},n.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},n.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},n.useMemo=function(e,t){return N.current.useMemo(e,t)},n.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},n.useRef=function(e){return N.current.useRef(e)},n.useState=function(e){return N.current.useState(e)},n.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},n.useTransition=function(){return N.current.useTransition()},n.version="18.3.1"},91788,(e,t,n)=>{"use strict";t.exports=e.r(77325)},1884,(e,t,n)=>{"use strict";var r=e.r(91788),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:s.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},91398,(e,t,n)=>{"use strict";t.exports=e.r(1884)},13584,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"HeadManagerContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext({})},94470,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},52456,(e,t,n)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}n._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(o,a,s):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}},94941,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return s}});let r=e.r(91788),o="u"<typeof window,i=o?()=>{}:r.useLayoutEffect,a=o?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:n}=e;function s(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return o&&(t?.mountedInstances?.add(e.children),s()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},80963,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return m},defaultHead:function(){return d}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(41705),a=e.r(52456),s=e.r(91398),l=a._(e.r(91788)),c=i._(e.r(94941)),u=e.r(13584);function d(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(94470);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,n,r,o;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,n=new Set,r=new Set,o={},e=>{let i=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?i=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?i=!1:n.add(e.type);break;case"meta":for(let t=0,n=p.length;t<n;t++){let n=p[t];if(e.props.hasOwnProperty(n))if("charSet"===n)r.has(n)?i=!1:r.add(n);else{let t=e.props[n],r=o[n]||new Set;("name"!==n||!a)&&r.has(t)?i=!1:(r.add(t),o[n]=r)}}}return i})).reverse().map((e,t)=>{let n=e.key||t;return l.default.cloneElement(e,{key:n})})}let m=function({children:e}){let t=(0,l.useContext)(u.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return b},NormalizeError:function(){return y},PageNotFoundError:function(){return _},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&f(n))return r;if(!r)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let m="u">typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class y extends Error{}class _ extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class b extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},71914,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useIntersection",{enumerable:!0,get:function(){return l}});let r=e.r(91788),o=e.r(99604),i="function"==typeof IntersectionObserver,a=new Map,s=[];function l({rootRef:e,rootMargin:t,disabled:n}){let c=n||!i,[u,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(c||u)return;let n=f.current;if(n&&n.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},s.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=s.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&s.splice(e,1)}}}(n,e=>e&&d(e),{root:e?.current,rootMargin:t})}else if(!u){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,t,e,u,f.current]),[p,u,(0,r.useCallback)(()=>{d(!1)},[])]}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},54471,(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getDomainLocale",{enumerable:!0,get:function(){return r}}),e.r(70090),("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},63230,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(91788);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=i(e,r)),t&&(o.current=i(t,r))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},48735,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},39149,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return C},useLinkStatus:function(){return j}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(52456),a=e.r(91398),s=i._(e.r(91788)),l=e.r(60472),c=e.r(71112),u=e.r(28169),d=e.r(89129),f=e.r(14862),p=e.r(25479),h=e.r(71914),m=e.r(54471),g=e.r(44113),x=e.r(63230);e.r(48735);let y=new Set;function _(e,t,n,r){if(!("u"<typeof window)&&(0,c.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}e.prefetch(t,n,r).catch(e=>{})}}function b(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let v=s.default.forwardRef(function(e,t){let n,r,{href:o,as:i,children:u,prefetch:y=null,passHref:v,replace:w,shallow:j,scroll:C,locale:E,onClick:P,onNavigate:k,onMouseEnter:O,onTouchStart:M,legacyBehavior:I=!1,transitionTypes:S,...N}=e;n=u,I&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let T=s.default.useContext(p.RouterContext),L=!1!==y,{href:R,as:H}=s.default.useMemo(()=>{if(!T){let e=b(o);return{href:e,as:i?b(i):e}}let[e,t]=(0,l.resolveHref)(T,o,!0);return{href:e,as:i?(0,l.resolveHref)(T,i):t||e}},[T,o,i]),z=s.default.useRef(R),$=s.default.useRef(H);I&&(r=s.default.Children.only(n));let A=I?r&&"object"==typeof r&&r.ref:t,[U,F,D]=(0,h.useIntersection)({rootMargin:"200px"}),B=s.default.useCallback(e=>{($.current!==H||z.current!==R)&&(D(),$.current=H,z.current=R),U(e)},[H,R,D,U]),W=(0,x.useMergedRef)(B,A);s.default.useEffect(()=>{!T||F&&L&&_(T,R,H,{locale:E})},[H,R,F,E,L,T?.locale,T]);let V={ref:W,onClick(e){I||"function"!=typeof P||P(e),I&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),!T||e.defaultPrevented||function(e,t,n,r,o,i,a,s,l){let u,{nodeName:d}=e.currentTarget;if(!("A"===d.toUpperCase()&&((u=e.currentTarget.getAttribute("target"))&&"_self"!==u||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,c.isLocalURL)(n)){o&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let e=a??!0;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})})()}}(e,T,R,H,w,j,C,E,k)},onMouseEnter(e){I||"function"!=typeof O||O(e),I&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),T&&_(T,R,H,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){I||"function"!=typeof M||M(e),I&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),T&&_(T,R,H,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if((0,d.isAbsoluteUrl)(H))V.href=H;else if(!I||v||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:T?.locale;V.href=T?.isLocaleDomain&&(0,m.getDomainLocale)(H,e,T?.locales,T?.domainLocales)||(0,g.addBasePath)((0,f.addLocale)(H,e,T?.defaultLocale))}return I?s.default.cloneElement(r,V):(0,a.jsx)("a",{...N,...V,children:n})}),w=(0,s.createContext)({pending:!1}),j=()=>(0,s.useContext)(w),C=v;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},41158,(e,t,n)=>{t.exports=e.r(39149)},14237,e=>{"use strict";var t=e.i(91398),n=e.i(41158),r=e.i(60814),o=e.i(34523);let i=r.default.div.withConfig({displayName:"Hero__LeftBar",componentId:"sc-d49a806f-0"})`
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
`,a=r.default.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-d49a806f-1"})`
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
`,s=r.default.div.withConfig({displayName:"Hero__CircleAnimationRight",componentId:"sc-d49a806f-2"})`
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
`,l=r.default.div.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-d49a806f-3"})`
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
`,c=r.default.ul.withConfig({displayName:"Hero__Links",componentId:"sc-d49a806f-4"})`
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
`,u=r.default.li.withConfig({displayName:"Hero__LinksItem",componentId:"sc-d49a806f-5"})`
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
`,d=r.default.div.withConfig({displayName:"Hero__IllustrationContainer",componentId:"sc-d49a806f-6"})`
  width: 622px;
  height: 622px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,f=r.default.div.withConfig({displayName:"Hero__IllustrationBg",componentId:"sc-d49a806f-7"})`
  width: 622px;
  height: 622px;
  border-radius: 100%;
  background-image: url('/arranha-ceus-de-aco-eletrico-business-metal-sky 1.webp');
  background-size: cover;
`,p=r.default.img.withConfig({displayName:"Hero__IllustrationWordImage",componentId:"sc-d49a806f-8"})`
  width: 140.91px;
  height: 140.91px;
`,h=r.default.div.withConfig({displayName:"Hero__IllustrationBigCircle",componentId:"sc-d49a806f-9"})`
  width: 623px;
  height: 623px;
  border-radius: 100%;
  background-image: url('/big-circle-border.png');

  /* @media (max-width: 750px) {
    width: 244px;
    height: 244px;
  } */
`,m=r.default.div.withConfig({displayName:"Hero__IllustrationSmallCircle",componentId:"sc-d49a806f-10"})`
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
`,g=r.default.div.withConfig({displayName:"Hero__IllustrationCircleAnimated",componentId:"sc-d49a806f-11"})`
  position: absolute;
  width: 622px;
  height: 622px;
  border-radius: 100%;
  transform: rotate(-80deg);
`,x=r.default.div.withConfig({displayName:"Hero__IllustrationCuttedCircle",componentId:"sc-d49a806f-12"})`
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
`,y=r.default.div.withConfig({displayName:"Hero__IllustrationLine",componentId:"sc-d49a806f-13"})`
  width: 2px;
  height: 1500px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  transform: translateY(-450px) rotate(41deg);
  position: absolute;
  top: 0;
  z-index: 2;
  opacity: 0.3;
`,_=r.default.p.withConfig({displayName:"Hero__IllustrationText",componentId:"sc-d49a806f-14"})`
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
`,b=r.default.div.withConfig({displayName:"Hero__HeroDefaultContainer",componentId:"sc-d49a806f-15"})`
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
`;e.s(["HeroDefaultContainer",0,b,"LeftBar",0,i,"default",0,()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)(i,{}),(0,t.jsxs)("div",{className:"hero-text-container",children:[(0,t.jsxs)(l,{"data-aos":"fade-down",children:[(0,t.jsx)("img",{src:"/arrow-up-right-3.svg"}),(0,t.jsx)("h1",{children:"Multi-Family Office focused on providing transparent, comprehensive and objective advice for High-Net-Worth Families test"})," "]}),(0,t.jsxs)(c,{children:[(0,t.jsx)(u,{children:(0,t.jsx)(n.default,{href:o.MENU_ITEMS[1].route,children:"Portfolio Management"})}),(0,t.jsx)(u,{children:(0,t.jsx)(n.default,{href:o.MENU_ITEMS[o.MENU_ITEMS.length-1].route,children:"Contact Us"})})]}),(0,t.jsxs)("div",{className:"IllustrationText-mobile","data-aos":"fade-up",children:["Proudly serving families throughout"," ",(0,t.jsx)("span",{children:" North and South America and Europe"})]})]}),(0,t.jsx)("img",{className:"hero-mobile-bg",src:"/hero-home-mobile.png",alt:""})]}),(0,t.jsx)(b,{children:(0,t.jsxs)(s,{"data-aos":"zoom-in",children:[(0,t.jsxs)(d,{children:[(0,t.jsx)(h,{children:(0,t.jsx)(f,{})}),(0,t.jsxs)(m,{children:[(0,t.jsx)("img",{className:"up-icon",src:"/up.svg",alt:""}),(0,t.jsx)(p,{src:"/North_America.png"})]}),(0,t.jsx)(y,{}),(0,t.jsx)(x,{children:(0,t.jsx)("div",{className:"outer-cirlce"})}),(0,t.jsx)(g,{})]}),(0,t.jsxs)(_,{"data-aos":"fade-up",children:["Proudly serving families throughout"," ",(0,t.jsx)("span",{children:" North and South America and Europe"})]})]})})]})])},31148,e=>{"use strict";var t=e.i(91788);e.s(["useMediaQuery",0,()=>{let[e,n]=(0,t.useState)({width:0,height:0}),r=()=>{n({width:window.innerWidth,height:window.innerHeight})};return(0,t.useEffect)(()=>(r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]),e}])},36679,51013,7331,71367,9208,e=>{"use strict";var t,n,r,o,i,a,s,l,c=e.i(60814),u=e.i(34523);let d=c.styled.div.withConfig({displayName:"styles__PortfolioCardContainer",componentId:"sc-493069aa-0"})`
  border-right: 1px solid #c5c5c5;
  padding: 40px;
  padding-bottom: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 365px;

  @media (max-width: 1170px) {
    min-width: 100%;
    width: 100%;
  }

  &:first-child {
    border-right: 1px solid #c5c5c5;
    border-left: 1px solid #c5c5c5;
  }

  @media (max-width: 850px) {
    &:last-child {
      border-top: 1px solid #c5c5c5;
      border-left: 1px solid #c5c5c5;
    }

    &:nth-child(2) {
      border-bottom: 1px solid #c5c5c5;
    }
  }

  @media (max-width: 650px) {
    border: none;
    padding: 32px 0;

    &:first-child {
      border: none;
    }

    &:last-child {
      border: none;
    }

    &:nth-child(2) {
      border: none;
    }
  }
`,f=c.styled.header.withConfig({displayName:"styles__PortfolioCardHeader",componentId:"sc-493069aa-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 650px) {
    margin-bottom: 35px;
  }
`,p=c.styled.h3.withConfig({displayName:"styles__PortfolioCardTitle",componentId:"sc-493069aa-2"})`
  font-weight: 500;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 650px) {
    font-size: 18px;
  }
`,h=c.styled.div.withConfig({displayName:"styles__PortfolioCardIcon",componentId:"sc-493069aa-3"})``,m=c.styled.p.withConfig({displayName:"styles__PortfolioCardText",componentId:"sc-493069aa-4"})`
  font-size: 16px;
  font-weight: 300;
  line-height: 21px;

  @media (max-width: 650px) {
    font-size: 16px;
  }

  a {
    text-decoration: underline;
    color: ${u.COLORS.text};
    font-weight: 500;
    transition: 0.5s;

    &:hover {
      opacity: 0.5;
    }
  }
`;e.s(["PortfolioCardContainer",0,d,"PortfolioCardHeader",0,f,"PortfolioCardIcon",0,h,"PortfolioCardText",0,m,"PortfolioCardTitle",0,p],36679);var g=e.i(91788);function x(){return(x=Object.assign.bind()).apply(null,arguments)}function y(){return(y=Object.assign.bind()).apply(null,arguments)}function _(){return(_=Object.assign.bind()).apply(null,arguments)}function b(){return(b=Object.assign.bind()).apply(null,arguments)}e.s(["default",0,function(e){return g.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:50,height:50,fill:"none"},e),t||(t=g.createElement("g",{stroke:"#46785C",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.083,clipPath:"url(#customization_svg__a)"},g.createElement("path",{d:"M8.333 20.833a4.167 4.167 0 1 0 8.334 0 4.167 4.167 0 0 0-8.334 0M12.5 8.333v8.334M12.5 25v16.667M20.833 33.333a4.167 4.167 0 1 0 8.334 0 4.167 4.167 0 0 0-8.334 0M25 8.333v20.834M25 37.5v4.167M33.333 14.583a4.167 4.167 0 1 0 8.334 0 4.167 4.167 0 0 0-8.334 0M37.5 8.333v2.084M37.5 18.75v22.917",className:"customization_svg__path"}))),n||(n=g.createElement("defs",null,g.createElement("clipPath",{id:"customization_svg__a"},g.createElement("path",{fill:"#fff",d:"M0 0h50v50H0z"})))))}],51013),e.s(["default",0,function(e){return g.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:51,height:50,fill:"none"},e),r||(r=g.createElement("g",{stroke:"#46785C",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.083,clipPath:"url(#transparency_svg__a)"},g.createElement("path",{d:"M43.833 27.083A4.17 4.17 0 0 0 40.083 25h-4.166a4.167 4.167 0 1 0 0 8.333h4.166a4.167 4.167 0 1 1 0 8.334h-4.166a4.17 4.17 0 0 1-3.75-2.084M38 22.917V43.75M6.75 10.417a4.167 4.167 0 1 0 8.333 0 4.167 4.167 0 0 0-8.333 0M31.75 10.417a4.167 4.167 0 1 0 8.333 0 4.167 4.167 0 0 0-8.333 0M15.083 10.417H31.75",className:"transparency_svg__path"}),g.createElement("path",{d:"M15.083 10.417v16.666a6.25 6.25 0 0 0 6.25 6.25h2.084",className:"transparency_svg__path"}))),o||(o=g.createElement("defs",null,g.createElement("clipPath",{id:"transparency_svg__a"},g.createElement("path",{fill:"#fff",d:"M.5 0h50v50H.5z"})))))}],7331),e.s(["default",0,function(e){return g.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:50,height:50,fill:"none"},e),i||(i=g.createElement("g",{stroke:"#46785C",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,clipPath:"url(#risk-management_svg__a)"},g.createElement("path",{d:"M25 18.75v27.083M39.583 35.77l-12.458 9.345a3.54 3.54 0 0 1-4.25 0L10.417 35.77a5.2 5.2 0 0 1-2.084-4.167V8.334a2.083 2.083 0 0 1 2.084-2.084h29.166a2.083 2.083 0 0 1 2.084 2.083v23.271a5.2 5.2 0 0 1-2.084 4.167",className:"risk-management_svg__path"}),g.createElement("path",{d:"m8.958 6.875 13.865 10.804a3.54 3.54 0 0 0 4.354 0L41.042 6.875",className:"risk-management_svg__path"}))),a||(a=g.createElement("defs",null,g.createElement("clipPath",{id:"risk-management_svg__a"},g.createElement("path",{fill:"#fff",d:"M0 0h50v50H0z"})))))}],71367),e.s(["default",0,function(e){return g.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:50,height:50,fill:"none"},e),s||(s=g.createElement("g",{stroke:"#46785C",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.083,clipPath:"url(#cost_svg__a)"},g.createElement("path",{d:"M22.917 12.5c0 1.658 1.097 3.247 3.05 4.42 1.954 1.171 4.604 1.83 7.366 1.83 2.763 0 5.413-.659 7.366-1.83 1.954-1.173 3.051-2.762 3.051-4.42s-1.097-3.247-3.051-4.42c-1.953-1.172-4.603-1.83-7.366-1.83s-5.412.658-7.365 1.83-3.051 2.762-3.051 4.42",className:"cost_svg__path"}),g.createElement("path",{d:"M22.917 12.5v8.333c0 3.452 4.664 6.25 10.416 6.25s10.417-2.798 10.417-6.25V12.5",className:"cost_svg__path"}),g.createElement("path",{d:"M22.917 20.833v8.334c0 3.452 4.664 6.25 10.416 6.25s10.417-2.798 10.417-6.25v-8.334",className:"cost_svg__path"}),g.createElement("path",{d:"M22.917 29.167V37.5c0 3.452 4.664 6.25 10.416 6.25S43.75 40.952 43.75 37.5v-8.333M14.583 18.75H9.375a3.125 3.125 0 1 0 0 6.25h2.083a3.125 3.125 0 1 1 0 6.25H6.25M10.417 31.25v2.083m0-16.666v2.083",className:"cost_svg__path"}))),l||(l=g.createElement("defs",null,g.createElement("clipPath",{id:"cost_svg__a"},g.createElement("path",{fill:"#fff",d:"M0 0h50v50H0z"})))))}],9208)},76699,e=>{e.v({className:"inter_34fc90a6-module__TeLniq__className"})},30907,e=>{e.v({main:"Home-module__Ho9lYW__main"})},87856,e=>{"use strict";var t=e.i(91398),n=e.i(58678),r=e.i(76699);let o={className:r.default.className,style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"}};null!=r.default.variable&&(o.variable=r.default.variable);var i=e.i(30907),a=e.i(14237),s=e.i(91788),l=e.i(36679);let c=({icon:e,text:n,title:r})=>(0,t.jsxs)(l.PortfolioCardContainer,{"data-aos":"fade-up",className:"item-card",children:[(0,t.jsxs)(l.PortfolioCardHeader,{children:[(0,t.jsx)(l.PortfolioCardTitle,{children:r}),(0,t.jsx)(l.PortfolioCardIcon,{children:e})]}),(0,t.jsx)(l.PortfolioCardText,{dangerouslySetInnerHTML:{__html:n}})]});var u=e.i(41158),d=e.i(60814),f=e.i(34523);let p=d.styled.section.withConfig({displayName:"styles__PortfolioManagementContainer",componentId:"sc-34432876-0"})`
  padding-top: 128px;

  @media (max-width: 750px) {
    padding-top: 83px;
  }

  .link-mobile {
    display: none;
    @media (max-width: 750px) {
      display: block;
      margin-left: 24px;
      margin-top: 45px;
    }
  }
`,h=d.styled.div.withConfig({displayName:"styles__PortfolioManagementHeader",componentId:"sc-34432876-1"})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${f.HORIZONTAL_SPACE}
  margin-bottom: 32px;
`,m=d.styled.h3.withConfig({displayName:"styles__PortfolioManagementTitle",componentId:"sc-34432876-2"})`
  font-size: 32px;
  color: #000;
  font-weight: 400;

  @media (max-width: 750px) {
    font-size: 24px;
  }
`,g=(0,d.styled)(u.default).withConfig({displayName:"styles__PortfolioManagementLink",componentId:"sc-34432876-3"})`
  font-size: 16px;
  text-decoration: underline;
  color: #46785c;
  font-weight: 400;
  transition: 0.5s;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }

  a {
    transition: 0.5s;

    &:hover {
      opacity: 0.5;
      transform: scale(1.05);
    }
  }

  @media (max-width: 750px) {
    display: none;
    font-size: 20px;
  }
`,x=d.styled.p.withConfig({displayName:"styles__PortfolioManagementText",componentId:"sc-34432876-4"})`
  font-size: 20px;
  width: 100%;
  text-align: justify;
  ${f.HORIZONTAL_SPACE}
  font-weight: 300;
  line-height: 36px;

  @media (max-width: 750px) {
    font-size: 18px;
    line-height: 32.4px;
    text-align: left;
  }
`,y=d.styled.div.withConfig({displayName:"styles__PortfolioManagementSliderContainer",componentId:"sc-34432876-5"})`
  width: 100%;
  margin-top: 81px;
  border-top: 1px solid #c5c5c5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${f.HORIZONTAL_SPACE};

  @media (max-width: 750px) {
    margin-top: 71px;
  }

  @media (max-width: 650px) {
    border: none;
  }
`,_=d.styled.div.withConfig({displayName:"styles__PortfolioManagementSliderItemList",componentId:"sc-34432876-6"})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 393px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    height: auto;

    & .item-card:last-child {
      border: none;
      border-right: 1px solid #c5c5c5;
      width: 100%;
    }

    & .item-card:nth-child(3) {
      border: 1px solid #c5c5c5;
    }
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 87px;

    & .item-card:last-child {
      border: none;
      border-top: 1px solid #c5c5c5;
    }

    & .item-card:nth-child(3) {
      border: none;
      border-top: 1px solid #c5c5c5;
    }

    & .item-card {
      border-top: 1px solid #c5c5c5;
    }
  }
`,b=d.styled.div.withConfig({displayName:"styles__PortfolioManagementSliderControlContainer",componentId:"sc-34432876-7"})`
  width: 65%;
  height: 50px;
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  display: none;

  @media (max-width: 1600px) {
    width: 96%;
  }
`,v=d.styled.button.withConfig({displayName:"styles__PortfolioManagementSliderButton",componentId:"sc-34432876-8"})`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;var w=e.i(11829),j=e.i(31148),C=e.i(51013),E=e.i(7331),P=e.i(71367),k=e.i(9208);let O=[{icon:(0,t.jsx)(C.default,{}),title:"Customization",text:"Our portfolios are highly customizable to meet our client’s long-term investment objectives. <a href='/portfolio-management'>More</a>"},{icon:(0,t.jsx)(E.default,{}),title:"Transparency",text:"Our individual security selection allows our clients to follow with the uttermost transparency. <a href='/portfolio-management'>More</a>"},{icon:(0,t.jsx)(k.default,{}),title:"Cost",text:"Eliminate expensive management fees from funds and ETFs, utting charges by traditional banks. <a href='/portfolio-management'>More</a>"},{icon:(0,t.jsx)(P.default,{}),title:"Risk Management",text:"Our security approach improves risk management by adapting the portfolio to market conditions..  <a href='/portfolio-management'>More</a>"}],M=()=>{let[e,n]=(0,s.useState)(0),[r,o]=(0,s.useState)("next"),{width:i}=(0,j.useMediaQuery)();return(0,t.jsxs)(p,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{"data-aos":"fade-up",children:"Portfolio Management"}),(0,t.jsx)(g,{href:f.MENU_ITEMS[1].route,children:"Portfolio Management"})]}),(0,t.jsx)(x,{"data-aos":"fade-up",children:"Abacus Capital Advisors is a research-driven firm that builds and monitors investment portfolios for entrepreneurs and high net worth families. With our emphasis on research and individual security selection instead of utilizing funds and ETFs. We believe our investment philosophy offers clients a disciplined and customized alternative to more standardized portfolio models:"}),(0,t.jsx)(g,{className:"link-mobile","data-aos":"fade-up",href:f.MENU_ITEMS[1].route,children:"Portfolio Management"}),(0,t.jsxs)(y,{children:[(0,t.jsx)(w.motion.div,{style:{width:"100%"},initial:"next"===r?{opacity:0,x:"100%"}:{opacity:0,x:"-100%"},animate:{opacity:1,x:0},exit:"next"===r?{opacity:0,x:"-100%"}:{opacity:0,x:"100%"},transition:{type:"spring",stiffness:300,damping:30,duration:.5},children:(0,t.jsx)(_,{children:O.map(e=>(0,t.jsx)(c,{icon:e.icon,text:e.text,title:e.title},e.title))})},e),(0,t.jsxs)(b,{children:[(0,t.jsx)(v,{onClick:()=>{n(e-1),o("prev")},children:(0,t.jsx)("img",{src:"/arrow-up-right.svg",alt:""})}),(0,t.jsx)(v,{onClick:()=>{n(e+1),o("next")},children:(0,t.jsx)("img",{src:"/arrow-up-left.svg",alt:""})})]})]})]})};e.s(["default",0,function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:"Capital Advisors | Abacus"}),(0,t.jsx)("meta",{property:"og:description",content:"Abacus Capital Advisors provides comprehensive wealth management, investment strategies, and personalized financial planning services."}),(0,t.jsx)("meta",{name:"keywords",content:"capital advisors"})]}),(0,t.jsxs)("main",{className:`${i.default.main} ${o.className}`,children:[(0,t.jsx)(a.default,{}),(0,t.jsx)(M,{})]})]})}],87856)},55075,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(87856)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);