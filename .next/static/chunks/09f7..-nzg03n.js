(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,20955,(e,t,n)=>{var r={229:function(e){var t,n,r,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}var s=[],u=!1,c=-1;function f(){u&&r&&(u=!1,r.length?s=r.concat(s):c=-1,s.length&&d())}function d(){if(!u){var e=l(f);u=!0;for(var t=s.length;t;){for(r=s,s=[];++c<t;)r&&r[c].run();c=-1,t=s.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||u||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}},i=!0;try{r[e](n,n.exports,a),i=!1}finally{i&&delete o[e]}return n.exports}a.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=a(229)},50461,(e,t,n)=>{"use strict";var r,o;t.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(20955)},41705,(e,t,n)=>{"use strict";n._=function(e){return e&&e.__esModule?e:{default:e}}},77325,(e,t,n)=>{"use strict";var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function b(){}function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var _=w.prototype=new b;_.constructor=w,x(_,g.prototype),_.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,C={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,o)&&!O.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:r,type:e,key:i,ref:l,props:a,_owner:C.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function k(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function N(e,t,n){if(null==e)return e;var a=[],i=0;return!function e(t,n,a,i,l){var s,u,c,f=typeof t;("undefined"===f||"boolean"===f)&&(t=null);var d=!1;if(null===t)d=!0;else switch(f){case"string":case"number":d=!0;break;case"object":switch(t.$$typeof){case r:case o:d=!0}}if(d)return l=l(d=t),t=""===i?"."+k(d,0):i,v(l)?(a="",null!=t&&(a=t.replace(P,"$&/")+"/"),e(l,n,a,"",function(e){return e})):null!=l&&(E(l)&&(s=l,u=a+(!l.key||d&&d.key===l.key?"":(""+l.key).replace(P,"$&/")+"/")+t,l={$$typeof:r,type:s.type,key:u,ref:s.ref,props:s.props,_owner:s._owner}),n.push(l)),1;if(d=0,i=""===i?".":i+":",v(t))for(var p=0;p<t.length;p++){var m=i+k(f=t[p],p);d+=e(f,n,a,m,l)}else if("function"==typeof(m=null===(c=t)||"object"!=typeof c?null:"function"==typeof(c=h&&c[h]||c["@@iterator"])?c:null))for(t=m.call(t),p=0;!(f=t.next()).done;)m=i+k(f=f.value,p++),d+=e(f,n,a,m,l);else if("object"===f)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return d}(e,a,"","",function(e){return t.call(n,e,i++)}),a}function T(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},R={transition:null};function M(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=g,n.Fragment=a,n.Profiler=l,n.PureComponent=w,n.StrictMode=i,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:R,ReactCurrentOwner:C},n.act=M,n.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=x({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=C.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)j.call(t,u)&&!O.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:l}},n.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},n.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},n.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},n.unstable_act=M,n.useCallback=function(e,t){return I.current.useCallback(e,t)},n.useContext=function(e){return I.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return I.current.useDeferredValue(e)},n.useEffect=function(e,t){return I.current.useEffect(e,t)},n.useId=function(){return I.current.useId()},n.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},n.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},n.useMemo=function(e,t){return I.current.useMemo(e,t)},n.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},n.useRef=function(e){return I.current.useRef(e)},n.useState=function(e){return I.current.useState(e)},n.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},n.useTransition=function(){return I.current.useTransition()},n.version="18.3.1"},91788,(e,t,n)=>{"use strict";t.exports=e.r(77325)},1884,(e,t,n)=>{"use strict";var r=e.r(91788),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:c,props:a,_owner:l.current}}n.Fragment=a,n.jsx=u,n.jsxs=u},91398,(e,t,n)=>{"use strict";t.exports=e.r(1884)},13584,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"HeadManagerContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext({})},94470,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},52456,(e,t,n)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}n._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}},94941,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});let r=e.r(91788),o="u"<typeof window,a=o?()=>{}:r.useLayoutEffect,i=o?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return o&&(t?.mountedInstances?.add(e.children),l()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},80963,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return m},defaultHead:function(){return f}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=e.r(41705),i=e.r(52456),l=e.r(91398),s=i._(e.r(91788)),u=a._(e.r(94941)),c=e.r(13584);function f(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(94470);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,n,r,o;return e.reduce(d,[]).reverse().concat(f().reverse()).filter((t=new Set,n=new Set,r=new Set,o={},e=>{let a=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?a=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?a=!1:n.add(e.type);break;case"meta":for(let t=0,n=p.length;t<n;t++){let n=p[t];if(e.props.hasOwnProperty(n))if("charSet"===n)r.has(n)?a=!1:r.add(n);else{let t=e.props[n],r=o[n]||new Set;("name"!==n||!i)&&r.has(t)?a=!1:(r.add(t),o[n]=r)}}}return a})).reverse().map((e,t)=>{let n=e.key||t;return s.default.cloneElement(e,{key:n})})}let m=function({children:e}){let t=(0,s.useContext)(c.HeadManagerContext);return(0,l.jsx)(u.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return w},NormalizeError:function(){return g},PageNotFoundError:function(){return b},SP:function(){return m},ST:function(){return x},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return f},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return d},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return v}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function u(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&d(n))return r;if(!r)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let m="u">typeof performance,x=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class g extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},71914,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useIntersection",{enumerable:!0,get:function(){return s}});let r=e.r(91788),o=e.r(99604),a="function"==typeof IntersectionObserver,i=new Map,l=[];function s({rootRef:e,rootMargin:t,disabled:n}){let u=n||!a,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(a){if(u||c)return;let n=d.current;if(n&&n.tagName)return function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(n,e=>e&&f(e),{root:e?.current,rootMargin:t})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,t,e,c,d.current]),[p,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},54471,(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getDomainLocale",{enumerable:!0,get:function(){return r}}),e.r(70090),("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},63230,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(91788);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=a(e,r)),t&&(o.current=a(t,r))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},48735,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},39149,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return C},useLinkStatus:function(){return j}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=e.r(52456),i=e.r(91398),l=a._(e.r(91788)),s=e.r(60472),u=e.r(71112),c=e.r(28169),f=e.r(89129),d=e.r(14862),p=e.r(25479),h=e.r(71914),m=e.r(54471),x=e.r(44113),y=e.r(63230);e.r(48735);let g=new Set;function b(e,t,n,r){if(!("u"<typeof window)&&(0,u.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(g.has(o))return;g.add(o)}e.prefetch(t,n,r).catch(e=>{})}}function w(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let _=l.default.forwardRef(function(e,t){let n,r,{href:o,as:a,children:c,prefetch:g=null,passHref:_,replace:v,shallow:j,scroll:C,locale:O,onClick:S,onNavigate:E,onMouseEnter:P,onTouchStart:k,legacyBehavior:N=!1,transitionTypes:T,...I}=e;n=c,N&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let R=l.default.useContext(p.RouterContext),M=!1!==g,{href:$,as:L}=l.default.useMemo(()=>{if(!R){let e=w(o);return{href:e,as:a?w(a):e}}let[e,t]=(0,s.resolveHref)(R,o,!0);return{href:e,as:a?(0,s.resolveHref)(R,a):t||e}},[R,o,a]),z=l.default.useRef($),F=l.default.useRef(L);N&&(r=l.default.Children.only(n));let A=N?r&&"object"==typeof r&&r.ref:t,[U,D,B]=(0,h.useIntersection)({rootMargin:"200px"}),H=l.default.useCallback(e=>{(F.current!==L||z.current!==$)&&(B(),F.current=L,z.current=$),U(e)},[L,$,B,U]),q=(0,y.useMergedRef)(H,A);l.default.useEffect(()=>{!R||D&&M&&b(R,$,L,{locale:O})},[L,$,D,O,M,R?.locale,R]);let V={ref:q,onClick(e){N||"function"!=typeof S||S(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),!R||e.defaultPrevented||function(e,t,n,r,o,a,i,l,s){let c,{nodeName:f}=e.currentTarget;if(!("A"===f.toUpperCase()&&((c=e.currentTarget.getAttribute("target"))&&"_self"!==c||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,u.isLocalURL)(n)){o&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let e=i??!0;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})})()}}(e,R,$,L,v,j,C,O,E)},onMouseEnter(e){N||"function"!=typeof P||P(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&b(R,$,L,{locale:O,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){N||"function"!=typeof k||k(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&b(R,$,L,{locale:O,priority:!0,bypassPrefetchedCheck:!0})}};if((0,f.isAbsoluteUrl)(L))V.href=L;else if(!N||_||"a"===r.type&&!("href"in r.props)){let e=void 0!==O?O:R?.locale;V.href=R?.isLocaleDomain&&(0,m.getDomainLocale)(L,e,R?.locales,R?.domainLocales)||(0,x.addBasePath)((0,d.addLocale)(L,e,R?.defaultLocale))}return N?l.default.cloneElement(r,V):(0,i.jsx)("a",{...I,...V,children:n})}),v=(0,l.createContext)({pending:!1}),j=()=>(0,l.useContext)(v),C=_;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},41158,(e,t,n)=>{t.exports=e.r(39149)},15259,e=>{"use strict";var t=e.i(91398),n=e.i(58678),r=e.i(41158),o=e.i(91788),a=e.i(60814),i=e.i(34523);let l=a.default.div.withConfig({displayName:"Contact__HeroContactContainer",componentId:"sc-cd4043c3-0"})`
  width: 100%;
  background-color: ${i.COLORS.navbarHero};
  ${i.HORIZONTAL_SPACE}
  height: 560px;
  display: flex;
  position: relative;
  overflow: hidden;
  padding-top: 63px;
  justify-content: space-between;

  @media (max-width: 750px) {
    padding-top: 58px;
    height: 405px;
  }

  .HeroContact-text-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    z-index: 2;
  }

  .animation-circle-right {
    position: absolute;
    top: 0;
    right: -17%;
  }
`,s=a.default.p.withConfig({displayName:"Contact__HeroContactTitle",componentId:"sc-cd4043c3-1"})`
  width: 787px;
  color: ${i.COLORS.white};
  font-weight: 400;
  font-size: 56px;
  margin-top: 72px;

  @media (max-width: 1750px) {
    max-width: 800px;
    font-size: 50px;
  }

  @media (max-width: 1600px) {
    max-width: 700px;
    font-size: 45px;
  }

  @media (max-width: 1500px) {
    max-width: 550px;
    font-size: 40px;
  }

  @media (max-width: 750px) {
    font-size: 28px;
    margin-top: 24px;
  }
`,u=a.default.h1.withConfig({displayName:"Contact__SubTitle",componentId:"sc-cd4043c3-2"})`
  font-size: 16px;
  font-weight: 400;
  color: #9fc899;
`,c=a.default.div.withConfig({displayName:"Contact__IllustrationContainer",componentId:"sc-cd4043c3-3"})`
  width: 622px;
  height: 622px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: -10%;

  @media (max-width: 1050px) {
    margin-right: -20px;
  }
`,f=a.default.div.withConfig({displayName:"Contact__IllustrationBg",componentId:"sc-cd4043c3-4"})`
  width: 622px;
  height: 690px;
  border-radius: 100%;
  background-image: url('/contact-hero.svg');
  background-size: cover;

  @media (max-width: 1050px) {
    width: 272px;
    height: 356px;
    position: absolute;
    right: 0;
  
  }
`,d=a.default.div.withConfig({displayName:"Contact__IllustrationBigCircle",componentId:"sc-cd4043c3-5"})`
  width: 622px;
  height: 622px;
  border-radius: 100%;

  @media (max-width: 1050px) {
    width: 272px;
    height: 356px;
  }
`,p=a.default.div.withConfig({displayName:"Contact__ContactLine",componentId:"sc-cd4043c3-6"})`
  top: 0%;
  width: 1px;
  height: 675px;
  position: absolute;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  opacity: 0.2;
  left: 200px;
  z-index: 2;

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

  @media (max-width: 1150px) {
    display: none;
  }
`,h=a.default.p.withConfig({displayName:"Contact__Text",componentId:"sc-cd4043c3-7"})`
  font-size: 20px;
  font-weight: 300;
  color: #fff;
  margin-top: 26px;
  max-width: 650px;
  line-height: 36px;

  @media (max-width: 690px) {
    font-size: 14px;
    margin-top: 24px;
    max-width: 202px;
    line-height: 25.2px;
  }
`,m=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p,{}),(0,t.jsxs)(l,{children:[(0,t.jsxs)("div",{className:"HeroContact-text-container",children:[(0,t.jsx)(u,{className:"subTitle","data-aos":"fade-up",children:"Contact"}),(0,t.jsx)(s,{"data-aos":"fade-up",children:"Contact us"}),(0,t.jsx)(h,{"data-aos":"fade-up",children:"To learn more about us, please reach out below"})]}),(0,t.jsx)(c,{"data-aos":"zoom-in",children:(0,t.jsx)(d,{children:(0,t.jsx)(f,{})})})]})]}),x=a.default.div.withConfig({displayName:"contact-us__Container",componentId:"sc-779c0f14-0"})`
  width: 100%;
  ${i.HORIZONTAL_SPACE};
  display: flex;
  padding-top: 125px;
  padding-bottom: 200px;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 750px) {
    padding-top: 75px;
  }
`,y=a.default.h3.withConfig({displayName:"contact-us__Title",componentId:"sc-779c0f14-1"})`
  max-width: 548px;
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 71px;

  .dash {
    width: 56px;
    height: 1px;
    background-color: #46785c;
    margin-bottom: 51px;
  }

  @media (max-width: 750px) {
    font-size: 22px;
    .dash {
      display: none;
    }
  }

  @media (max-width: 600px) {
    max-width: 329px;
    text-align: left;
    margin-bottom: 33px;
  }
`,g=a.default.div.withConfig({displayName:"contact-us__FormContainer",componentId:"sc-779c0f14-2"})`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
  }

  .message-text {
    height: 200px;
  }
`,b=a.default.div.withConfig({displayName:"contact-us__FormField",componentId:"sc-779c0f14-3"})`
  position: relative;
  width: 543px;
  height: 75px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    height: 60px;
  }

  input {
    width: 100%;
    height: 100%;
    font-size: 22px;
    border: 1px solid #777777;
    color: #1a4f31;
    font-size: 22px;
    font-weight: 500;
    padding: 9px 19px;
    outline: none;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  label {
    position: absolute;
    top: 22px;
    left: 10px;
    font-weight: 300;
    font-size: 18px;
    color: #777777;
    padding: 0 5px;
    transition: 0.3s;
    pointer-events: none;
    background-color: #fff;
    outline: none;

    @media (max-width: 600px) {
      font-size: 16px;
      top: 20px;
    }
  }

  input:focus {
    border-color: #5e8f51;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: -12px;
    left: 10px;
    font-size: 12px;
    color: #000;
    padding: 4px 10px 4px 10px;
  }

  textarea {
    width: 100%;
    height: 203px;
    padding: 9px 19px;
    font-size: 22px;
    color: #1a4f31;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  textarea + label {
    top: 10px;
  }

  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    top: -12px;
    font-size: 12px;
    padding: 4px 10px 4px 10px;
  }
`,w=a.default.button.withConfig({displayName:"contact-us__Button",componentId:"sc-779c0f14-4"})`
  width: 288px;
  height: 58px;
  background-color: #1a4f31;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  cursor: pointer;
  margin-top: 12px;
  transition: 0.5s;

  &:hover {
    background-color: #c9c9c9;
    transform: scale(1.01);
    color: #000;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`,_=a.default.div.withConfig({displayName:"contact-us__ContactInfoContainer",componentId:"sc-779c0f14-5"})`
  align-self: flex-end;
  justify-self: flex-end;
  margin-left: 200px;
  width: 350px;
  margin-bottom: 60px;

  @media (max-width: 1060px) {
    margin-left: 50px;
  }

  @media (max-width: 950px) {
    margin-bottom: 0;
    justify-self: flex-start;
    align-self: flex-start;
    margin-top: 83px;
    margin-left: 0;
    width: 100%;
  }

  .networks {
    display: flex;
    flex-direction: row;
    gap: 14px;
    margin-bottom: 54px;

    .icon {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background-color: #46785c;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5s;

      &:hover {
        background-color: #3a5144;
        opacity: 0.7;
      }
    }

    a {
      cursor: pointer;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }

  p {
    font-size: 18px;
    font-weight: 300;
    color: #000000;
    margin-bottom: 16px;
  }
`,v={email:"",firstName:"",lastName:"",message:"",phone:""};e.s(["default",0,function(){let[e,a]=(0,o.useState)(v),[i,l]=(0,o.useState)(""),[s,u]=(0,o.useState)(!1),c=async()=>{let t,n=(t={},e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email is required",e.firstName?e.firstName.length<2&&(t.firstName="First name must be at least 2 characters"):t.firstName="First name is required",e.lastName?e.lastName.length<2&&(t.lastName="Last name must be at least 2 characters"):t.lastName="Last name is required",e.message?e.message.length<10&&(t.message="Message must be at least 10 characters"):t.message="Message is required",e.phone||(t.phone="Phone number is required"),t);if(Object.keys(n).length>0)l(Object.values(n)[0]);else{u(!0);let t=await fetch("/api/email",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),n=await t.json();u(!1),200===n.code&&(alert("Email Sent successfully"),a(v))}},f=t=>{let n=t.target;l(""),a({...e,[n.name]:n.value})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:"Contact Us | Abacus"}),(0,t.jsx)("meta",{property:"og:description",content:"Get in touch with Abacus Capital Advisors for personalized financial services and expert wealth management. Reach out to our team today."}),(0,t.jsx)("meta",{name:"keywords",content:"Contact Us"})]}),(0,t.jsx)(m,{}),(0,t.jsxs)(x,{children:[(0,t.jsxs)(g,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)("div",{className:"dash"}),"Fill out the form below and we will contact you shortly"]}),(0,t.jsxs)(b,{children:[(0,t.jsx)("input",{value:e.firstName,id:"first-name",placeholder:" ",name:"firstName",onChange:f}),(0,t.jsx)("label",{htmlFor:"first-name",children:"First name"})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)("input",{id:"last-name",value:e.lastName,placeholder:" ",name:"lastName",onChange:f}),(0,t.jsx)("label",{htmlFor:"lastName",children:"Last name"})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)("input",{id:"email",value:e.email,onChange:f,placeholder:" ",name:"email"}),(0,t.jsx)("label",{htmlFor:"email",children:"Email"})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)("input",{id:"phone",value:e.phone,onChange:f,placeholder:" ",name:"phone"}),(0,t.jsx)("label",{htmlFor:"phone",children:"Telephone"})]}),(0,t.jsxs)(b,{className:"message-text",children:[(0,t.jsx)("textarea",{value:e.message,onChange:f,id:"message",placeholder:" ",name:"message"}),(0,t.jsx)("label",{className:"message",htmlFor:"message",children:"Message"})]}),!!i&&(0,t.jsx)("p",{style:{color:"red"},children:i}),(0,t.jsx)(w,{onClick:c,children:s?"Sending...":"Send"})]}),(0,t.jsxs)(_,{children:[(0,t.jsxs)("div",{className:"networks",children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)(r.default,{href:"https://www.linkedin.com/company/abacus-capital-advisors/",children:(0,t.jsx)("img",{src:"/linkdin-1.svg",alt:""})})}),(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)(r.default,{href:"https://wa.me/13056761808",children:(0,t.jsx)("img",{src:"/whatsap.svg",alt:""})})})]}),(0,t.jsx)("p",{children:(0,t.jsxs)("a",{href:"https://maps.app.goo.gl/xvnfqhDtgDnnWfm48",target:"_blank",children:["8181 West Broward Blvd, Suite 258 ",(0,t.jsx)("br",{}),"Plantation, Florida 33324"]})}),(0,t.jsxs)("p",{children:["Office:"," ",(0,t.jsx)("a",{target:"_blank",href:"tel:(954) 361-4210",children:"(954) 361-4210"})]}),(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"mailto:info@abacus-adv.com",target:"_blank",children:"info@abacus-adv.com"})})]})]})," "]})}],15259)},91027,(e,t,n)=>{let r="/contact-us";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(15259)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);