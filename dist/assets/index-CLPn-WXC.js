(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Kf={exports:{}},Oo={};var bg;function vS(){if(bg)return Oo;bg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var Tg;function xS(){return Tg||(Tg=1,Kf.exports=vS()),Kf.exports}var j=xS(),Qf={exports:{}},Fo={},Jf={exports:{}},$f={};var Ag;function SS(){return Ag||(Ag=1,(function(o){function e(U,z){var ot=U.length;U.push(z);t:for(;0<ot;){var gt=ot-1>>>1,Mt=U[gt];if(0<l(Mt,z))U[gt]=z,U[ot]=Mt,ot=gt;else break t}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var z=U[0],ot=U.pop();if(ot!==z){U[0]=ot;t:for(var gt=0,Mt=U.length,N=Mt>>>1;gt<N;){var Q=2*(gt+1)-1,xt=U[Q],At=Q+1,Dt=U[At];if(0>l(xt,ot))At<Mt&&0>l(Dt,xt)?(U[gt]=Dt,U[At]=ot,gt=At):(U[gt]=xt,U[Q]=ot,gt=Q);else if(At<Mt&&0>l(Dt,ot))U[gt]=Dt,U[At]=ot,gt=At;else break t}}return z}function l(U,z){var ot=U.sortIndex-z.sortIndex;return ot!==0?ot:U.id-z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,v=null,_=3,M=!1,T=!1,D=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function O(U){for(var z=i(p);z!==null;){if(z.callback===null)r(p);else if(z.startTime<=U)r(p),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(p)}}function V(U){if(D=!1,O(U),!T)if(i(m)!==null)T=!0,F||(F=!0,J());else{var z=i(p);z!==null&&q(V,z.startTime-U)}}var F=!1,I=-1,b=5,P=-1;function K(){return y?!0:!(o.unstable_now()-P<b)}function H(){if(y=!1,F){var U=o.unstable_now();P=U;var z=!0;try{t:{T=!1,D&&(D=!1,w(I),I=-1),M=!0;var ot=_;try{e:{for(O(U),v=i(m);v!==null&&!(v.expirationTime>U&&K());){var gt=v.callback;if(typeof gt=="function"){v.callback=null,_=v.priorityLevel;var Mt=gt(v.expirationTime<=U);if(U=o.unstable_now(),typeof Mt=="function"){v.callback=Mt,O(U),z=!0;break e}v===i(m)&&r(m),O(U)}else r(m);v=i(m)}if(v!==null)z=!0;else{var N=i(p);N!==null&&q(V,N.startTime-U),z=!1}}break t}finally{v=null,_=ot,M=!1}z=void 0}}finally{z?J():F=!1}}}var J;if(typeof L=="function")J=function(){L(H)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,pt=ft.port2;ft.port1.onmessage=H,J=function(){pt.postMessage(null)}}else J=function(){S(H,0)};function q(U,z){I=S(function(){U(o.unstable_now())},z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(U){switch(_){case 1:case 2:case 3:var z=3;break;default:z=_}var ot=_;_=z;try{return U()}finally{_=ot}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(U,z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ot=_;_=U;try{return z()}finally{_=ot}},o.unstable_scheduleCallback=function(U,z,ot){var gt=o.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?gt+ot:gt):ot=gt,U){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=ot+Mt,U={id:x++,callback:z,priorityLevel:U,startTime:ot,expirationTime:Mt,sortIndex:-1},ot>gt?(U.sortIndex=ot,e(p,U),i(m)===null&&U===i(p)&&(D?(w(I),I=-1):D=!0,q(V,ot-gt))):(U.sortIndex=Mt,e(m,U),T||M||(T=!0,F||(F=!0,J()))),U},o.unstable_shouldYield=K,o.unstable_wrapCallback=function(U){var z=_;return function(){var ot=_;_=z;try{return U.apply(this,arguments)}finally{_=ot}}}})($f)),$f}var Rg;function yS(){return Rg||(Rg=1,Jf.exports=SS()),Jf.exports}var td={exports:{}},ae={};var Cg;function MS(){if(Cg)return ae;Cg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,y={};function S(N,Q,xt){this.props=N,this.context=Q,this.refs=y,this.updater=xt||T}S.prototype.isReactComponent={},S.prototype.setState=function(N,Q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Q,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function w(){}w.prototype=S.prototype;function L(N,Q,xt){this.props=N,this.context=Q,this.refs=y,this.updater=xt||T}var O=L.prototype=new w;O.constructor=L,D(O,S.prototype),O.isPureReactComponent=!0;var V=Array.isArray;function F(){}var I={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function P(N,Q,xt){var At=xt.ref;return{$$typeof:o,type:N,key:Q,ref:At!==void 0?At:null,props:xt}}function K(N,Q){return P(N.type,Q,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function J(N){var Q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return Q[xt]})}var ft=/\/+/g;function pt(N,Q){return typeof N=="object"&&N!==null&&N.key!=null?J(""+N.key):Q.toString(36)}function q(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function(Q){N.status==="pending"&&(N.status="fulfilled",N.value=Q)},function(Q){N.status==="pending"&&(N.status="rejected",N.reason=Q)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function U(N,Q,xt,At,Dt){var st=typeof N;(st==="undefined"||st==="boolean")&&(N=null);var St=!1;if(N===null)St=!0;else switch(st){case"bigint":case"string":case"number":St=!0;break;case"object":switch(N.$$typeof){case o:case e:St=!0;break;case x:return St=N._init,U(St(N._payload),Q,xt,At,Dt)}}if(St)return Dt=Dt(N),St=At===""?"."+pt(N,0):At,V(Dt)?(xt="",St!=null&&(xt=St.replace(ft,"$&/")+"/"),U(Dt,Q,xt,"",function($t){return $t})):Dt!=null&&(H(Dt)&&(Dt=K(Dt,xt+(Dt.key==null||N&&N.key===Dt.key?"":(""+Dt.key).replace(ft,"$&/")+"/")+St)),Q.push(Dt)),1;St=0;var bt=At===""?".":At+":";if(V(N))for(var Ht=0;Ht<N.length;Ht++)At=N[Ht],st=bt+pt(At,Ht),St+=U(At,Q,xt,st,Dt);else if(Ht=M(N),typeof Ht=="function")for(N=Ht.call(N),Ht=0;!(At=N.next()).done;)At=At.value,st=bt+pt(At,Ht++),St+=U(At,Q,xt,st,Dt);else if(st==="object"){if(typeof N.then=="function")return U(q(N),Q,xt,At,Dt);throw Q=String(N),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return St}function z(N,Q,xt){if(N==null)return N;var At=[],Dt=0;return U(N,At,"","",function(st){return Q.call(xt,st,Dt++)}),At}function ot(N){if(N._status===-1){var Q=N._result;Q=Q(),Q.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=Q)}if(N._status===1)return N._result.default;throw N._result}var gt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Mt={map:z,forEach:function(N,Q,xt){z(N,function(){Q.apply(this,arguments)},xt)},count:function(N){var Q=0;return z(N,function(){Q++}),Q},toArray:function(N){return z(N,function(Q){return Q})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ae.Activity=v,ae.Children=Mt,ae.Component=S,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=L,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ae.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},ae.cache=function(N){return function(){return N.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(N,Q,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var At=D({},N.props),Dt=N.key;if(Q!=null)for(st in Q.key!==void 0&&(Dt=""+Q.key),Q)!b.call(Q,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&Q.ref===void 0||(At[st]=Q[st]);var st=arguments.length-2;if(st===1)At.children=xt;else if(1<st){for(var St=Array(st),bt=0;bt<st;bt++)St[bt]=arguments[bt+2];At.children=St}return P(N.type,Dt,At)},ae.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ae.createElement=function(N,Q,xt){var At,Dt={},st=null;if(Q!=null)for(At in Q.key!==void 0&&(st=""+Q.key),Q)b.call(Q,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Dt[At]=Q[At]);var St=arguments.length-2;if(St===1)Dt.children=xt;else if(1<St){for(var bt=Array(St),Ht=0;Ht<St;Ht++)bt[Ht]=arguments[Ht+2];Dt.children=bt}if(N&&N.defaultProps)for(At in St=N.defaultProps,St)Dt[At]===void 0&&(Dt[At]=St[At]);return P(N,st,Dt)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(N){return{$$typeof:h,render:N}},ae.isValidElement=H,ae.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:ot}},ae.memo=function(N,Q){return{$$typeof:p,type:N,compare:Q===void 0?null:Q}},ae.startTransition=function(N){var Q=I.T,xt={};I.T=xt;try{var At=N(),Dt=I.S;Dt!==null&&Dt(xt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(F,gt)}catch(st){gt(st)}finally{Q!==null&&xt.types!==null&&(Q.types=xt.types),I.T=Q}},ae.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ae.use=function(N){return I.H.use(N)},ae.useActionState=function(N,Q,xt){return I.H.useActionState(N,Q,xt)},ae.useCallback=function(N,Q){return I.H.useCallback(N,Q)},ae.useContext=function(N){return I.H.useContext(N)},ae.useDebugValue=function(){},ae.useDeferredValue=function(N,Q){return I.H.useDeferredValue(N,Q)},ae.useEffect=function(N,Q){return I.H.useEffect(N,Q)},ae.useEffectEvent=function(N){return I.H.useEffectEvent(N)},ae.useId=function(){return I.H.useId()},ae.useImperativeHandle=function(N,Q,xt){return I.H.useImperativeHandle(N,Q,xt)},ae.useInsertionEffect=function(N,Q){return I.H.useInsertionEffect(N,Q)},ae.useLayoutEffect=function(N,Q){return I.H.useLayoutEffect(N,Q)},ae.useMemo=function(N,Q){return I.H.useMemo(N,Q)},ae.useOptimistic=function(N,Q){return I.H.useOptimistic(N,Q)},ae.useReducer=function(N,Q,xt){return I.H.useReducer(N,Q,xt)},ae.useRef=function(N){return I.H.useRef(N)},ae.useState=function(N){return I.H.useState(N)},ae.useSyncExternalStore=function(N,Q,xt){return I.H.useSyncExternalStore(N,Q,xt)},ae.useTransition=function(){return I.H.useTransition()},ae.version="19.2.7",ae}var wg;function Rh(){return wg||(wg=1,td.exports=MS()),td.exports}var ed={exports:{}},Ln={};var Dg;function ES(){if(Dg)return Ln;Dg=1;var o=Rh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,x)},Ln.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:M}):x==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.2.7",Ln}var Ug;function bS(){if(Ug)return ed.exports;Ug=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ed.exports=ES(),ed.exports}var Lg;function TS(){if(Lg)return Fo;Lg=1;var o=yS(),e=Rh(),i=bS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,R=c.child;R;){if(R===a){g=!0,a=c,s=f;break}if(R===s){g=!0,s=c,a=f;break}R=R.sibling}if(!g){for(R=f.child;R;){if(R===a){g=!0,a=f,s=c;break}if(R===s){g=!0,s=f,a=c;break}R=R.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),L=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ft?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case V:return"Suspense";case F:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case L:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var q=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},gt=[],Mt=-1;function N(t){return{current:t}}function Q(t){0>Mt||(t.current=gt[Mt],gt[Mt]=null,Mt--)}function xt(t,n){Mt++,gt[Mt]=t.current,t.current=n}var At=N(null),Dt=N(null),st=N(null),St=N(null);function bt(t,n){switch(xt(st,n),xt(Dt,t),xt(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Y0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Y0(n),t=j0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(At),xt(At,t)}function Ht(){Q(At),Q(Dt),Q(st)}function $t(t){t.memoizedState!==null&&xt(St,t);var n=At.current,a=j0(n,t.type);n!==a&&(xt(Dt,t),xt(At,a))}function Qt(t){Dt.current===t&&(Q(At),Q(Dt)),St.current===t&&(Q(St),Do._currentValue=ot)}var ke,fe;function _e(t){if(ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ke=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ke+t+fe}var De=!1;function le(t,n){if(!t||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var rt=lt}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(lt){rt=lt}t.call(vt.prototype)}}else{try{throw Error()}catch(lt){rt=lt}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&rt&&typeof lt.stack=="string")return[lt.stack,rt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],R=f[1];if(g&&R){var B=g.split(`
`),tt=R.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===tt.length)for(s=B.length-1,c=tt.length-1;1<=s&&0<=c&&B[s]!==tt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==tt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==tt[c]){var dt=`
`+B[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=c);break}}}finally{De=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_e(a):""}function an(t,n){switch(t.tag){case 26:case 27:case 5:return _e(t.type);case 16:return _e("Lazy");case 13:return t.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return _e("Activity");default:return""}}function qe(t){try{var n="",a=null;do n+=an(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var En=Object.prototype.hasOwnProperty,X=o.unstable_scheduleCallback,$e=o.unstable_cancelCallback,de=o.unstable_shouldYield,ze=o.unstable_requestPaint,Rt=o.unstable_now,Ze=o.unstable_getCurrentPriorityLevel,C=o.unstable_ImmediatePriority,E=o.unstable_UserBlockingPriority,Z=o.unstable_NormalPriority,_t=o.unstable_LowPriority,Et=o.unstable_IdlePriority,Ct=o.log,Nt=o.unstable_setDisableYieldValue,ct=null,ut=null;function Ot(t){if(typeof Ct=="function"&&Nt(t),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(ct,t)}catch{}}var Ft=Math.clz32?Math.clz32:ne,Ut=Math.log,wt=Math.LN2;function ne(t){return t>>>=0,t===0?32:31-(Ut(t)/wt|0)|0}var ie=256,he=262144,G=4194304;function Tt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ht(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var R=s&134217727;return R!==0?(s=R&~f,s!==0?c=Tt(s):(g&=R,g!==0?c=Tt(g):a||(a=R&~t,a!==0&&(c=Tt(a))))):(R=s&~f,R!==0?c=Tt(R):g!==0?c=Tt(g):a||(a=s&~t,a!==0&&(c=Tt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Bt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(){var t=G;return G<<=1,(G&62914560)===0&&(G=4194304),t}function qt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function te(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tn(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,B=t.expirationTimes,tt=t.hiddenUpdates;for(a=g&~a;0<a;){var dt=31-Ft(a),vt=1<<dt;R[dt]=0,B[dt]=-1;var rt=tt[dt];if(rt!==null)for(tt[dt]=null,dt=0;dt<rt.length;dt++){var lt=rt[dt];lt!==null&&(lt.lane&=-536870913)}a&=~vt}s!==0&&Re(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Re(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ft(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function oi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ft(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Yn(t,n){var a=n&-n;return a=(a&42)!==0?1:or(a),(a&(t.suspendedLanes|n))!==0?0:a}function or(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Gs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Vs(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:_g(t.type))}function ks(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var Dn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Dn,bn="__reactProps$"+Dn,Yi="__reactContainer$"+Dn,Ea="__reactEvents$"+Dn,Qo="__reactListeners$"+Dn,Ir="__reactHandles$"+Dn,Xs="__reactResources$"+Dn,ba="__reactMarker$"+Dn;function Ws(t){delete t[rn],delete t[bn],delete t[Ea],delete t[Qo],delete t[Ir]}function Ta(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Yi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=eg(t);t!==null;){if(a=t[rn])return a;t=eg(t)}return n}t=a,a=t.parentNode}return null}function Aa(t){if(t=t[rn]||t[Yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function lr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ra(t){var n=t[Xs];return n||(n=t[Xs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(t){t[ba]=!0}var Jo=new Set,A={};function W(t,n){at(t,n),at(t+"Capture",n)}function at(t,n){for(A[t]=n,t=0;t<n.length;t++)Jo.add(n[t])}var et=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},zt={};function Vt(t){return En.call(zt,t)?!0:En.call(nt,t)?!1:et.test(t)?zt[t]=!0:(nt[t]=!0,!1)}function Pt(t,n,a){if(Vt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function kt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Zt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function se(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jt(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function be(t){if(!t._valueTracker){var n=se(t)?"checked":"value";t._valueTracker=jt(t,n,""+t[n])}}function Ke(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=se(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Xe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ue=/[\n"\\]/g;function Le(t){return t.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gt(t,n,a,s,c,f,g,R){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Zt(n)):t.value!==""+Zt(n)&&(t.value=""+Zt(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?pe(t,g,Zt(n)):a!=null?pe(t,g,Zt(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Zt(R):t.removeAttribute("name")}function Un(t,n,a,s,c,f,g,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){be(t);return}a=a!=null?""+Zt(a):"",n=n!=null?""+Zt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=R?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),be(t)}function pe(t,n,a){n==="number"&&Xe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function gn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Zt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function jn(t,n,a){if(n!=null&&(n=""+Zt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Zt(a):""}function xi(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(q(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Zt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),be(t)}function Zn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ne=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qe(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Ne.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Si(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Qe(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Qe(t,f,n[f])}function we(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cr(t){return Ca.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var qc=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hr=null,Gr=null;function qh(t){var n=Aa(t);if(n&&(t=n.stateNode)){var a=t[bn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Gt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Le(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[bn]||null;if(!c)throw Error(r(90));Gt(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ke(s)}break t;case"textarea":jn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&gn(t,!!a.multiple,n,!1)}}}var jc=!1;function Yh(t,n,a){if(jc)return t(n,a);jc=!0;try{var s=t(n);return s}finally{if(jc=!1,(Hr!==null||Gr!==null)&&(Il(),Hr&&(n=Hr,t=Gr,Gr=Hr=null,qh(n),t)))for(n=0;n<t.length;n++)qh(t[n])}}function qs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[bn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(Zi)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Zc=!1}var wa=null,Kc=null,$o=null;function jh(){if($o)return $o;var t,n=Kc,a=n.length,s,c="value"in wa?wa.value:wa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return $o=c.slice(t,1<s?1-s:void 0)}function tl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function Zh(){return!1}function In(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:Zh,this.isPropagationStopped=Zh,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=In(ur),js=v({},ur,{view:0,detail:0}),gv=In(js),Qc,Jc,Zs,il=v({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(Qc=t.screenX-Zs.screenX,Jc=t.screenY-Zs.screenY):Jc=Qc=0,Zs=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Jc}}),Kh=In(il),_v=v({},il,{dataTransfer:0}),vv=In(_v),xv=v({},js,{relatedTarget:0}),$c=In(xv),Sv=v({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=In(Sv),Mv=v({},ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ev=In(Mv),bv=v({},ur,{data:0}),Qh=In(bv),Tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Rv[t])?!!n[t]:!1}function tu(){return Cv}var wv=v({},js,{key:function(t){if(t.key){var n=Tv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Av[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dv=In(wv),Uv=v({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=In(Uv),Lv=v({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Nv=In(Lv),Ov=v({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=In(Ov),Pv=v({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=In(Pv),Bv=v({},ur,{newState:0,oldState:0}),Iv=In(Bv),Hv=[9,13,27,32],eu=Zi&&"CompositionEvent"in window,Ks=null;Zi&&"documentMode"in document&&(Ks=document.documentMode);var Gv=Zi&&"TextEvent"in window&&!Ks,$h=Zi&&(!eu||Ks&&8<Ks&&11>=Ks),tp=" ",ep=!1;function np(t,n){switch(t){case"keyup":return Hv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function Vv(t,n){switch(t){case"compositionend":return ip(n);case"keypress":return n.which!==32?null:(ep=!0,tp);case"textInput":return t=n.data,t===tp&&ep?null:t;default:return null}}function kv(t,n){if(Vr)return t==="compositionend"||!eu&&np(t,n)?(t=jh(),$o=Kc=wa=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $h&&n.locale!=="ko"?null:n.data;default:return null}}var Xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Xv[t.type]:n==="textarea"}function rp(t,n,a,s){Hr?Gr?Gr.push(s):Gr=[s]:Hr=s,n=ql(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Qs=null,Js=null;function Wv(t){G0(t,0)}function al(t){var n=lr(t);if(Ke(n))return t}function sp(t,n){if(t==="change")return n}var op=!1;if(Zi){var nu;if(Zi){var iu="oninput"in document;if(!iu){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),iu=typeof lp.oninput=="function"}nu=iu}else nu=!1;op=nu&&(!document.documentMode||9<document.documentMode)}function cp(){Qs&&(Qs.detachEvent("onpropertychange",up),Js=Qs=null)}function up(t){if(t.propertyName==="value"&&al(Js)){var n=[];rp(n,Js,t,Yc(t)),Yh(Wv,n)}}function qv(t,n,a){t==="focusin"?(cp(),Qs=n,Js=a,Qs.attachEvent("onpropertychange",up)):t==="focusout"&&cp()}function Yv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(Js)}function jv(t,n){if(t==="click")return al(n)}function Zv(t,n){if(t==="input"||t==="change")return al(n)}function Kv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kn=typeof Object.is=="function"?Object.is:Kv;function $s(t,n){if(Kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!En.call(n,c)||!Kn(t[c],n[c]))return!1}return!0}function fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dp(t,n){var a=fp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=fp(a)}}function hp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?hp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function pp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Xe(t.document)}return n}function au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Qv=Zi&&"documentMode"in document&&11>=document.documentMode,kr=null,ru=null,to=null,su=!1;function mp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||kr==null||kr!==Xe(s)||(s=kr,"selectionStart"in s&&au(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),to&&$s(to,s)||(to=s,s=ql(ru,"onSelect"),0<s.length&&(n=new nl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=kr)))}function fr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Xr={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},ou={},gp={};Zi&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function dr(t){if(ou[t])return ou[t];if(!Xr[t])return t;var n=Xr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in gp)return ou[t]=n[a];return t}var _p=dr("animationend"),vp=dr("animationiteration"),xp=dr("animationstart"),Jv=dr("transitionrun"),$v=dr("transitionstart"),tx=dr("transitioncancel"),Sp=dr("transitionend"),yp=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function yi(t,n){yp.set(t,n),W(n,[t])}var rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},li=[],Wr=0,cu=0;function sl(){for(var t=Wr,n=cu=Wr=0;n<t;){var a=li[n];li[n++]=null;var s=li[n];li[n++]=null;var c=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&Mp(a,c,f)}}function ol(t,n,a,s){li[Wr++]=t,li[Wr++]=n,li[Wr++]=a,li[Wr++]=s,cu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function uu(t,n,a,s){return ol(t,n,a,s),ll(t)}function hr(t,n){return ol(t,null,null,n),ll(t)}function Mp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Ft(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function ll(t){if(50<Eo)throw Eo=0,Sf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var qr={};function ex(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,a,s){return new ex(t,n,a,s)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=Qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ep(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cl(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")fu(t)&&(g=1);else if(typeof t=="string")g=sS(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case P:return t=Qn(31,a,n,c),t.elementType=P,t.lanes=f,t;case D:return pr(a.children,c,f,n);case y:g=8,c|=24;break;case S:return t=Qn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case V:return t=Qn(13,a,n,c),t.elementType=V,t.lanes=f,t;case F:return t=Qn(19,a,n,c),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:g=10;break t;case w:g=9;break t;case O:g=11;break t;case I:g=14;break t;case b:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Qn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function pr(t,n,a,s){return t=Qn(7,t,s,n),t.lanes=a,t}function du(t,n,a){return t=Qn(6,t,null,n),t.lanes=a,t}function bp(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function hu(t,n,a){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Tp=new WeakMap;function ci(t,n){if(typeof t=="object"&&t!==null){var a=Tp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:qe(n)},Tp.set(t,n),n)}return{value:t,source:n,stack:qe(n)}}var Yr=[],jr=0,ul=null,eo=0,ui=[],fi=0,Da=null,Ni=1,Oi="";function Qi(t,n){Yr[jr++]=eo,Yr[jr++]=ul,ul=t,eo=n}function Ap(t,n,a){ui[fi++]=Ni,ui[fi++]=Oi,ui[fi++]=Da,Da=t;var s=Ni;t=Oi;var c=32-Ft(s)-1;s&=~(1<<c),a+=1;var f=32-Ft(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Ni=1<<32-Ft(n)+c|a<<c|s,Oi=f+t}else Ni=1<<f|a<<c|s,Oi=t}function pu(t){t.return!==null&&(Qi(t,1),Ap(t,1,0))}function mu(t){for(;t===ul;)ul=Yr[--jr],Yr[jr]=null,eo=Yr[--jr],Yr[jr]=null;for(;t===Da;)Da=ui[--fi],ui[fi]=null,Oi=ui[--fi],ui[fi]=null,Ni=ui[--fi],ui[fi]=null}function Rp(t,n){ui[fi++]=Ni,ui[fi++]=Oi,ui[fi++]=Da,Ni=n.id,Oi=n.overflow,Da=t}var Tn=null,Ye=null,Se=!1,Ua=null,di=!1,gu=Error(r(519));function La(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(ci(n,t)),gu}function Cp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[bn]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)ge(To[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Un(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),xi(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||W0(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||La(t,!0)}function wp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Tn=Tn.return}}function Zr(t){if(t!==Tn)return!1;if(!Se)return wp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ff(t.type,t.memoizedProps)),a=!a),a&&Ye&&La(t),wp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ye=tg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ye=tg(t)}else n===27?(n=Ye,qa(t.type)?(t=Hf,Hf=null,Ye=t):Ye=n):Ye=Tn?pi(t.stateNode.nextSibling):null;return!0}function mr(){Ye=Tn=null,Se=!1}function _u(){var t=Ua;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),Ua=null),t}function no(t){Ua===null?Ua=[t]:Ua.push(t)}var vu=N(null),gr=null,Ji=null;function Na(t,n,a){xt(vu,n._currentValue),n._currentValue=a}function $i(t){t._currentValue=vu.current,Q(vu)}function xu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Su(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),xu(f.return,a,t),s||(g=null);break t}f=R.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),xu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Kr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var R=c.type;Kn(c.pendingProps.value,g.value)||(t!==null?t.push(R):t=[R])}}else if(c===St.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}c=c.return}t!==null&&Su(n,t,a,s),n.flags|=262144}function fl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function _r(t){gr=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Dp(gr,t)}function dl(t,n){return gr===null&&_r(t),Dp(t,n)}function Dp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(t===null)throw Error(r(308));Ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ji=Ji.next=n;return a}var nx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ix=o.unstable_scheduleCallback,ax=o.unstable_NormalPriority,fn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new nx,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&ix(ax,function(){t.controller.abort()})}var ao=null,Mu=0,Qr=0,Jr=null;function rx(t,n){if(ao===null){var a=ao=[];Mu=0,Qr=Af(),Jr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Mu++,n.then(Up,Up),n}function Up(){if(--Mu===0&&ao!==null){Jr!==null&&(Jr.status="fulfilled");var t=ao;ao=null,Qr=0,Jr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function sx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Lp=U.S;U.S=function(t,n){m0=Rt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&rx(t,n),Lp!==null&&Lp(t,n)};var vr=N(null);function Eu(){var t=vr.current;return t!==null?t:We.pooledCache}function hl(t,n){n===null?xt(vr,vr.current):xt(vr,n.pool)}function Np(){var t=Eu();return t===null?null:{parent:fn._currentValue,pool:t}}var $r=Error(r(460)),bu=Error(r(474)),pl=Error(r(542)),ml={then:function(){}};function Op(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Fp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zp(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zp(t),t}throw Sr=n,$r}}function xr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Sr=a,$r):a}}var Sr=null;function Pp(){if(Sr===null)throw Error(r(459));var t=Sr;return Sr=null,t}function zp(t){if(t===$r||t===pl)throw Error(r(483))}var ts=null,ro=0;function gl(t){var n=ro;return ro+=1,ts===null&&(ts=[]),Fp(ts,t,n)}function so(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function _l(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Bp(t){function n(Y,k){if(t){var $=Y.deletions;$===null?(Y.deletions=[k],Y.flags|=16):$.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function s(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function c(Y,k){return Y=Ki(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<k?(Y.flags|=67108866,k):$):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,k,$,mt){return k===null||k.tag!==6?(k=du($,Y.mode,mt),k.return=Y,k):(k=c(k,$),k.return=Y,k)}function B(Y,k,$,mt){var Kt=$.type;return Kt===D?dt(Y,k,$.props.children,mt,$.key):k!==null&&(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&xr(Kt)===k.type)?(k=c(k,$.props),so(k,$),k.return=Y,k):(k=cl($.type,$.key,$.props,null,Y.mode,mt),so(k,$),k.return=Y,k)}function tt(Y,k,$,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=hu($,Y.mode,mt),k.return=Y,k):(k=c(k,$.children||[]),k.return=Y,k)}function dt(Y,k,$,mt,Kt){return k===null||k.tag!==7?(k=pr($,Y.mode,mt,Kt),k.return=Y,k):(k=c(k,$),k.return=Y,k)}function vt(Y,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=du(""+k,Y.mode,$),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return $=cl(k.type,k.key,k.props,null,Y.mode,$),so($,k),$.return=Y,$;case T:return k=hu(k,Y.mode,$),k.return=Y,k;case b:return k=xr(k),vt(Y,k,$)}if(q(k)||J(k))return k=pr(k,Y.mode,$,null),k.return=Y,k;if(typeof k.then=="function")return vt(Y,gl(k),$);if(k.$$typeof===L)return vt(Y,dl(Y,k),$);_l(Y,k)}return null}function rt(Y,k,$,mt){var Kt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Kt!==null?null:R(Y,k,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===Kt?B(Y,k,$,mt):null;case T:return $.key===Kt?tt(Y,k,$,mt):null;case b:return $=xr($),rt(Y,k,$,mt)}if(q($)||J($))return Kt!==null?null:dt(Y,k,$,mt,null);if(typeof $.then=="function")return rt(Y,k,gl($),mt);if($.$$typeof===L)return rt(Y,k,dl(Y,$),mt);_l(Y,$)}return null}function lt(Y,k,$,mt,Kt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Y=Y.get($)||null,R(k,Y,""+mt,Kt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return Y=Y.get(mt.key===null?$:mt.key)||null,B(k,Y,mt,Kt);case T:return Y=Y.get(mt.key===null?$:mt.key)||null,tt(k,Y,mt,Kt);case b:return mt=xr(mt),lt(Y,k,$,mt,Kt)}if(q(mt)||J(mt))return Y=Y.get($)||null,dt(k,Y,mt,Kt,null);if(typeof mt.then=="function")return lt(Y,k,$,gl(mt),Kt);if(mt.$$typeof===L)return lt(Y,k,$,dl(k,mt),Kt);_l(k,mt)}return null}function Wt(Y,k,$,mt){for(var Kt=null,Te=null,Yt=k,ce=k=0,xe=null;Yt!==null&&ce<$.length;ce++){Yt.index>ce?(xe=Yt,Yt=null):xe=Yt.sibling;var Ae=rt(Y,Yt,$[ce],mt);if(Ae===null){Yt===null&&(Yt=xe);break}t&&Yt&&Ae.alternate===null&&n(Y,Yt),k=f(Ae,k,ce),Te===null?Kt=Ae:Te.sibling=Ae,Te=Ae,Yt=xe}if(ce===$.length)return a(Y,Yt),Se&&Qi(Y,ce),Kt;if(Yt===null){for(;ce<$.length;ce++)Yt=vt(Y,$[ce],mt),Yt!==null&&(k=f(Yt,k,ce),Te===null?Kt=Yt:Te.sibling=Yt,Te=Yt);return Se&&Qi(Y,ce),Kt}for(Yt=s(Yt);ce<$.length;ce++)xe=lt(Yt,Y,ce,$[ce],mt),xe!==null&&(t&&xe.alternate!==null&&Yt.delete(xe.key===null?ce:xe.key),k=f(xe,k,ce),Te===null?Kt=xe:Te.sibling=xe,Te=xe);return t&&Yt.forEach(function(Qa){return n(Y,Qa)}),Se&&Qi(Y,ce),Kt}function Jt(Y,k,$,mt){if($==null)throw Error(r(151));for(var Kt=null,Te=null,Yt=k,ce=k=0,xe=null,Ae=$.next();Yt!==null&&!Ae.done;ce++,Ae=$.next()){Yt.index>ce?(xe=Yt,Yt=null):xe=Yt.sibling;var Qa=rt(Y,Yt,Ae.value,mt);if(Qa===null){Yt===null&&(Yt=xe);break}t&&Yt&&Qa.alternate===null&&n(Y,Yt),k=f(Qa,k,ce),Te===null?Kt=Qa:Te.sibling=Qa,Te=Qa,Yt=xe}if(Ae.done)return a(Y,Yt),Se&&Qi(Y,ce),Kt;if(Yt===null){for(;!Ae.done;ce++,Ae=$.next())Ae=vt(Y,Ae.value,mt),Ae!==null&&(k=f(Ae,k,ce),Te===null?Kt=Ae:Te.sibling=Ae,Te=Ae);return Se&&Qi(Y,ce),Kt}for(Yt=s(Yt);!Ae.done;ce++,Ae=$.next())Ae=lt(Yt,Y,ce,Ae.value,mt),Ae!==null&&(t&&Ae.alternate!==null&&Yt.delete(Ae.key===null?ce:Ae.key),k=f(Ae,k,ce),Te===null?Kt=Ae:Te.sibling=Ae,Te=Ae);return t&&Yt.forEach(function(_S){return n(Y,_S)}),Se&&Qi(Y,ce),Kt}function He(Y,k,$,mt){if(typeof $=="object"&&$!==null&&$.type===D&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var Kt=$.key;k!==null;){if(k.key===Kt){if(Kt=$.type,Kt===D){if(k.tag===7){a(Y,k.sibling),mt=c(k,$.props.children),mt.return=Y,Y=mt;break t}}else if(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&xr(Kt)===k.type){a(Y,k.sibling),mt=c(k,$.props),so(mt,$),mt.return=Y,Y=mt;break t}a(Y,k);break}else n(Y,k);k=k.sibling}$.type===D?(mt=pr($.props.children,Y.mode,mt,$.key),mt.return=Y,Y=mt):(mt=cl($.type,$.key,$.props,null,Y.mode,mt),so(mt,$),mt.return=Y,Y=mt)}return g(Y);case T:t:{for(Kt=$.key;k!==null;){if(k.key===Kt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(Y,k.sibling),mt=c(k,$.children||[]),mt.return=Y,Y=mt;break t}else{a(Y,k);break}else n(Y,k);k=k.sibling}mt=hu($,Y.mode,mt),mt.return=Y,Y=mt}return g(Y);case b:return $=xr($),He(Y,k,$,mt)}if(q($))return Wt(Y,k,$,mt);if(J($)){if(Kt=J($),typeof Kt!="function")throw Error(r(150));return $=Kt.call($),Jt(Y,k,$,mt)}if(typeof $.then=="function")return He(Y,k,gl($),mt);if($.$$typeof===L)return He(Y,k,dl(Y,$),mt);_l(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(Y,k.sibling),mt=c(k,$),mt.return=Y,Y=mt):(a(Y,k),mt=du($,Y.mode,mt),mt.return=Y,Y=mt),g(Y)):a(Y,k)}return function(Y,k,$,mt){try{ro=0;var Kt=He(Y,k,$,mt);return ts=null,Kt}catch(Yt){if(Yt===$r||Yt===pl)throw Yt;var Te=Qn(29,Yt,null,Y.mode);return Te.lanes=mt,Te.return=Y,Te}}}var yr=Bp(!0),Ip=Bp(!1),Oa=!1;function Tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ce&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ll(t),Mp(t,null,a),n}return ol(t,s,n,a),ll(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,oi(t,a)}}function Ru(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Cu=!1;function lo(){if(Cu){var t=Jr;if(t!==null)throw t}}function co(t,n,a,s){Cu=!1;var c=t.updateQueue;Oa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var B=R,tt=B.next;B.next=null,g===null?f=tt:g.next=tt,g=B;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==g&&(R===null?dt.firstBaseUpdate=tt:R.next=tt,dt.lastBaseUpdate=B))}if(f!==null){var vt=c.baseState;g=0,dt=tt=B=null,R=f;do{var rt=R.lane&-536870913,lt=rt!==R.lane;if(lt?(ve&rt)===rt:(s&rt)===rt){rt!==0&&rt===Qr&&(Cu=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=t,Jt=R;rt=n;var He=a;switch(Jt.tag){case 1:if(Wt=Jt.payload,typeof Wt=="function"){vt=Wt.call(He,vt,rt);break t}vt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=Jt.payload,rt=typeof Wt=="function"?Wt.call(He,vt,rt):Wt,rt==null)break t;vt=v({},vt,rt);break t;case 2:Oa=!0}}rt=R.callback,rt!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[rt]:lt.push(rt))}else lt={lane:rt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(tt=dt=lt,B=vt):dt=dt.next=lt,g|=rt;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);dt===null&&(B=vt),c.baseState=B,c.firstBaseUpdate=tt,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),Ga|=g,t.lanes=g,t.memoizedState=vt}}function Hp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Gp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Hp(a[t],n)}var es=N(null),vl=N(0);function Vp(t,n){t=la,xt(vl,t),xt(es,n),la=t|n.baseLanes}function wu(){xt(vl,la),xt(es,es.current)}function Du(){la=vl.current,Q(es),Q(vl)}var Jn=N(null),hi=null;function za(t){var n=t.alternate;xt(sn,sn.current&1),xt(Jn,t),hi===null&&(n===null||es.current!==null||n.memoizedState!==null)&&(hi=t)}function Uu(t){xt(sn,sn.current),xt(Jn,t),hi===null&&(hi=t)}function kp(t){t.tag===22?(xt(sn,sn.current),xt(Jn,t),hi===null&&(hi=t)):Ba()}function Ba(){xt(sn,sn.current),xt(Jn,Jn.current)}function $n(t){Q(Jn),hi===t&&(hi=null),Q(sn)}var sn=N(0);function xl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bf(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,oe=null,Be=null,dn=null,Sl=!1,ns=!1,Mr=!1,yl=0,uo=0,is=null,ox=0;function en(){throw Error(r(321))}function Lu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Kn(t[a],n[a]))return!1;return!0}function Nu(t,n,a,s,c,f){return ta=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=t===null||t.memoizedState===null?Am:ju,Mr=!1,f=a(s,c),Mr=!1,ns&&(f=Wp(n,a,s,c)),Xp(t),f}function Xp(t){U.H=po;var n=Be!==null&&Be.next!==null;if(ta=0,dn=Be=oe=null,Sl=!1,uo=0,is=null,n)throw Error(r(300));t===null||hn||(t=t.dependencies,t!==null&&fl(t)&&(hn=!0))}function Wp(t,n,a,s){oe=t;var c=0;do{if(ns&&(is=null),uo=0,ns=!1,25<=c)throw Error(r(301));if(c+=1,dn=Be=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=Rm,f=n(a,s)}while(ns);return f}function lx(){var t=U.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(oe.flags|=1024),n}function Ou(){var t=yl!==0;return yl=0,t}function Fu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Pu(t){if(Sl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Sl=!1}ta=0,dn=Be=oe=null,ns=!1,uo=yl=0,is=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?oe.memoizedState=dn=t:dn=dn.next=t,dn}function on(){if(Be===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var n=dn===null?oe.memoizedState:dn.next;if(n!==null)dn=n,Be=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},dn===null?oe.memoizedState=dn=t:dn=dn.next=t}return dn}function Ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,is===null&&(is=[]),t=Fp(is,t,n),n=oe,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Am:ju),t}function El(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===L)return An(t)}throw Error(r(438,String(t)))}function zu(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ml(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=K;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function bl(t){var n=on();return Bu(n,Be,t)}function Bu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var R=g=null,B=null,tt=n,dt=!1;do{var vt=tt.lane&-536870913;if(vt!==tt.lane?(ve&vt)===vt:(ta&vt)===vt){var rt=tt.revertLane;if(rt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),vt===Qr&&(dt=!0);else if((ta&rt)===rt){tt=tt.next,rt===Qr&&(dt=!0);continue}else vt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(R=B=vt,g=f):B=B.next=vt,oe.lanes|=rt,Ga|=rt;vt=tt.action,Mr&&a(f,vt),f=tt.hasEagerState?tt.eagerState:a(f,vt)}else rt={lane:vt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(R=B=rt,g=f):B=B.next=rt,oe.lanes|=vt,Ga|=vt;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?g=f:B.next=R,!Kn(f,t.memoizedState)&&(hn=!0,dt&&(a=Jr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Iu(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Kn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function qp(t,n,a){var s=oe,c=on(),f=Se;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Kn((Be||c).memoizedState,a);if(g&&(c.memoizedState=a,hn=!0),c=c.queue,Vu(Zp.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||dn!==null&&dn.memoizedState.tag&1){if(s.flags|=2048,as(9,{destroy:void 0},jp.bind(null,s,c,a,n),null),We===null)throw Error(r(349));f||(ta&127)!==0||Yp(s,n,a)}return a}function Yp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Ml(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function jp(t,n,a,s){n.value=a,n.getSnapshot=s,Kp(n)&&Qp(t)}function Zp(t,n,a){return a(function(){Kp(n)&&Qp(t)})}function Kp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Kn(t,a)}catch{return!0}}function Qp(t){var n=hr(t,2);n!==null&&Xn(n,t,2)}function Hu(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),Mr){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function Jp(t,n,a,s){return t.baseState=a,Bu(t,Be,typeof s=="function"?s:ea)}function cx(t,n,a,s,c){if(Rl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};U.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,$p(n,f)):(f.next=a.next,n.pending=a.next=f)}}function $p(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=U.T,g={};U.T=g;try{var R=a(c,s),B=U.S;B!==null&&B(g,R),tm(t,n,R)}catch(tt){Gu(t,n,tt)}finally{f!==null&&g.types!==null&&(f.types=g.types),U.T=f}}else try{f=a(c,s),tm(t,n,f)}catch(tt){Gu(t,n,tt)}}function tm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){em(t,n,s)},function(s){return Gu(t,n,s)}):em(t,n,a)}function em(t,n,a){n.status="fulfilled",n.value=a,nm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,$p(t,a)))}function Gu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,nm(n),n=n.next;while(n!==s)}t.action=null}function nm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function im(t,n){return n}function am(t,n){if(Se){var a=We.formState;if(a!==null){t:{var s=oe;if(Se){if(Ye){e:{for(var c=Ye,f=di;c.nodeType!==8;){if(!f){c=null;break e}if(c=pi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=pi(c.nextSibling),s=c.data==="F!";break t}}La(s)}s=!1}s&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:im,lastRenderedState:n},a.queue=s,a=Em.bind(null,oe,s),s.dispatch=a,s=Hu(!1),f=Yu.bind(null,oe,!1,s.queue),s=zn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=cx.bind(null,oe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function rm(t){var n=on();return sm(n,Be,t)}function sm(t,n,a){if(n=Bu(t,n,im)[0],t=bl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=fo(n)}catch(g){throw g===$r?pl:g}else s=n;n=on();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,as(9,{destroy:void 0},ux.bind(null,c,a),null)),[s,f,t]}function ux(t,n){t.action=n}function om(t){var n=on(),a=Be;if(a!==null)return sm(n,a,t);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function as(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Ml(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function lm(){return on().memoizedState}function Tl(t,n,a,s){var c=zn();oe.flags|=t,c.memoizedState=as(1|n,{destroy:void 0},a,s===void 0?null:s)}function Al(t,n,a,s){var c=on();s=s===void 0?null:s;var f=c.memoizedState.inst;Be!==null&&s!==null&&Lu(s,Be.memoizedState.deps)?c.memoizedState=as(n,f,a,s):(oe.flags|=t,c.memoizedState=as(1|n,f,a,s))}function cm(t,n){Tl(8390656,8,t,n)}function Vu(t,n){Al(2048,8,t,n)}function fx(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Ml(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function um(t){var n=on().memoizedState;return fx({ref:n,nextImpl:t}),function(){if((Ce&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function fm(t,n){return Al(4,2,t,n)}function dm(t,n){return Al(4,4,t,n)}function hm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function pm(t,n,a){a=a!=null?a.concat([t]):null,Al(4,4,hm.bind(null,n,t),a)}function ku(){}function mm(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Lu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function gm(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Lu(n,s[1]))return s[0];if(s=t(),Mr){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[s,n],s}function Xu(t,n,a){return a===void 0||(ta&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=_0(),oe.lanes|=t,Ga|=t,a)}function _m(t,n,a,s){return Kn(a,n)?a:es.current!==null?(t=Xu(t,a,s),Kn(t,n)||(hn=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(ve&261930)===0?(hn=!0,t.memoizedState=a):(t=_0(),oe.lanes|=t,Ga|=t,n)}function vm(t,n,a,s,c){var f=z.p;z.p=f!==0&&8>f?f:8;var g=U.T,R={};U.T=R,Yu(t,!1,n,a);try{var B=c(),tt=U.S;if(tt!==null&&tt(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=sx(B,s);ho(t,n,dt,ni(t))}else ho(t,n,s,ni(t))}catch(vt){ho(t,n,{then:function(){},status:"rejected",reason:vt},ni())}finally{z.p=f,g!==null&&R.types!==null&&(g.types=R.types),U.T=g}}function dx(){}function Wu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=xm(t).queue;vm(t,c,n,ot,a===null?dx:function(){return Sm(t),a(s)})}function xm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Sm(t){var n=xm(t);n.next===null&&(n=t.alternate.memoizedState),ho(t,n.next.queue,{},ni())}function qu(){return An(Do)}function ym(){return on().memoizedState}function Mm(){return on().memoizedState}function hx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();t=Fa(a);var s=Pa(n,t,a);s!==null&&(Xn(s,n,a),oo(s,n,a)),n={cache:yu()},t.payload=n;return}n=n.return}}function px(t,n,a){var s=ni();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(t)?bm(n,a):(a=uu(t,n,a,s),a!==null&&(Xn(a,t,s),Tm(a,n,s)))}function Em(t,n,a){var s=ni();ho(t,n,a,s)}function ho(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(t))bm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,R=f(g,a);if(c.hasEagerState=!0,c.eagerState=R,Kn(R,g))return ol(t,n,c,0),We===null&&sl(),!1}catch{}if(a=uu(t,n,c,s),a!==null)return Xn(a,t,s),Tm(a,n,s),!0}return!1}function Yu(t,n,a,s){if(s={lane:2,revertLane:Af(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Rl(t)){if(n)throw Error(r(479))}else n=uu(t,a,s,2),n!==null&&Xn(n,t,2)}function Rl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function bm(t,n){ns=Sl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Tm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,oi(t,a)}}var po={readContext:An,use:El,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};po.useEffectEvent=en;var Am={readContext:An,use:El,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:cm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Tl(4194308,4,hm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Tl(4194308,4,t,n)},useInsertionEffect:function(t,n){Tl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var s=t();if(Mr){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=zn();if(a!==void 0){var c=a(n);if(Mr){Ot(!0);try{a(n)}finally{Ot(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=px.bind(null,oe,t),[s.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=Hu(t);var n=t.queue,a=Em.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(t,n){var a=zn();return Xu(a,t,n)},useTransition:function(){var t=Hu(!1);return t=vm.bind(null,oe,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=oe,c=zn();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(ve&127)!==0||Yp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,cm(Zp.bind(null,s,f,t),[t]),s.flags|=2048,as(9,{destroy:void 0},jp.bind(null,s,f,a,n),null),a},useId:function(){var t=zn(),n=We.identifierPrefix;if(Se){var a=Oi,s=Ni;a=(s&~(1<<32-Ft(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ox++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qu,useFormState:am,useActionState:am,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:zu,useCacheRefresh:function(){return zn().memoizedState=hx.bind(null,oe)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((Ce&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ju={readContext:An,use:El,useCallback:mm,useContext:An,useEffect:Vu,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:dm,useMemo:gm,useReducer:bl,useRef:lm,useState:function(){return bl(ea)},useDebugValue:ku,useDeferredValue:function(t,n){var a=on();return _m(a,Be.memoizedState,t,n)},useTransition:function(){var t=bl(ea)[0],n=on().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:qp,useId:ym,useHostTransitionStatus:qu,useFormState:rm,useActionState:rm,useOptimistic:function(t,n){var a=on();return Jp(a,Be,t,n)},useMemoCache:zu,useCacheRefresh:Mm};ju.useEffectEvent=um;var Rm={readContext:An,use:El,useCallback:mm,useContext:An,useEffect:Vu,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:dm,useMemo:gm,useReducer:Iu,useRef:lm,useState:function(){return Iu(ea)},useDebugValue:ku,useDeferredValue:function(t,n){var a=on();return Be===null?Xu(a,t,n):_m(a,Be.memoizedState,t,n)},useTransition:function(){var t=Iu(ea)[0],n=on().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:qp,useId:ym,useHostTransitionStatus:qu,useFormState:om,useActionState:om,useOptimistic:function(t,n){var a=on();return Be!==null?Jp(a,Be,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:zu,useCacheRefresh:Mm};Rm.useEffectEvent=um;function Zu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ni(),c=Fa(s);c.payload=n,a!=null&&(c.callback=a),n=Pa(t,c,s),n!==null&&(Xn(n,t,s),oo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ni(),c=Fa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Pa(t,c,s),n!==null&&(Xn(n,t,s),oo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ni(),s=Fa(a);s.tag=2,n!=null&&(s.callback=n),n=Pa(t,s,a),n!==null&&(Xn(n,t,a),oo(n,t,a))}};function Cm(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!$s(a,s)||!$s(c,f):!0}function wm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Ku.enqueueReplaceState(n,n.state,null)}function Er(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Dm(t){rl(t)}function Um(t){console.error(t)}function Lm(t){rl(t)}function Cl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Nm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Qu(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(t,n)},a}function Om(t){return t=Fa(t),t.tag=3,t}function Fm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Nm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Nm(n,a,s),typeof c!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function mx(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Kr(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Hl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Ef(t,s,c)),!1;case 22:return a.flags|=65536,s===ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Ef(t,s,c)),!1}throw Error(r(435,a.tag))}return Ef(t,s,c),Hl(),!1}if(Se)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==gu&&(t=Error(r(422),{cause:s}),no(ci(t,a)))):(s!==gu&&(n=Error(r(423),{cause:s}),no(ci(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ci(s,a),c=Qu(t.stateNode,s,c),Ru(t,c),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:s});if(f=ci(f,a),Mo===null?Mo=[f]:Mo.push(f),nn!==4&&(nn=2),n===null)return!0;s=ci(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Qu(a.stateNode,s,t),Ru(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Om(c),Fm(c,t,a,s),Ru(a,c),!1}a=a.return}while(a!==null);return!1}var Ju=Error(r(461)),hn=!1;function Rn(t,n,a,s){n.child=t===null?Ip(n,null,a,s):yr(n,t.child,a,s)}function Pm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var R in s)R!=="ref"&&(g[R]=s[R])}else g=s;return _r(n),s=Nu(t,n,a,g,f,c),R=Ou(),t!==null&&!hn?(Fu(t,n,c),na(t,n,c)):(Se&&R&&pu(n),n.flags|=1,Rn(t,n,s,c),n.child)}function zm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bm(t,n,f,s,c)):(t=cl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!of(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(g,s)&&t.ref===n.ref)return na(t,n,c)}return n.flags|=1,t=Ki(f,s),t.ref=n.ref,t.return=n,n.child=t}function Bm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if($s(f,s)&&t.ref===n.ref)if(hn=!1,n.pendingProps=s=f,of(t,c))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,na(t,n,c)}return $u(t,n,a,s,c)}function Im(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Hm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&hl(n,f!==null?f.cachePool:null),f!==null?Vp(n,f):wu(),kp(n);else return s=n.lanes=536870912,Hm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(hl(n,f.cachePool),Vp(n,f),Ba(),n.memoizedState=null):(t!==null&&hl(n,null),wu(),Ba());return Rn(t,n,c,a),n.child}function mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Hm(t,n,a,s,c){var f=Eu();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&hl(n,null),wu(),kp(n),t!==null&&Kr(t,n,s,!0),n.childLanes=c,null}function wl(t,n){return n=Ul({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Gm(t,n,a){return yr(n,t.child,null,a),t=wl(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function gx(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(s.mode==="hidden")return t=wl(n,s),n.lanes=536870912,mo(null,t);if(Uu(n),(t=Ye)?(t=$0(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=bp(t),a.return=n,n.child=a,Tn=n,Ye=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return wl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Uu(n),c)if(n.flags&256)n.flags&=-257,n=Gm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(hn||Kr(t,n,a,!1),c=(a&t.childLanes)!==0,hn||c){if(s=We,s!==null&&(g=Yn(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,hr(t,g),Xn(s,t,g),Ju;Hl(),n=Gm(t,n,a)}else t=f.treeContext,Ye=pi(g.nextSibling),Tn=n,Se=!0,Ua=null,di=!1,t!==null&&Rp(n,t),n=wl(n,s),n.flags|=4096;return n}return t=Ki(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function $u(t,n,a,s,c){return _r(n),a=Nu(t,n,a,s,void 0,c),s=Ou(),t!==null&&!hn?(Fu(t,n,c),na(t,n,c)):(Se&&s&&pu(n),n.flags|=1,Rn(t,n,a,c),n.child)}function Vm(t,n,a,s,c,f){return _r(n),n.updateQueue=null,a=Wp(n,s,a,c),Xp(t),s=Ou(),t!==null&&!hn?(Fu(t,n,f),na(t,n,f)):(Se&&s&&pu(n),n.flags|=1,Rn(t,n,a,f),n.child)}function km(t,n,a,s,c){if(_r(n),n.stateNode===null){var f=qr,g=a.contextType;typeof g=="object"&&g!==null&&(f=An(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Tu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?An(g):qr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Zu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Ku.enqueueReplaceState(f,f.state,null),co(n,s,f,c),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,B=Er(a,R);f.props=B;var tt=f.context,dt=a.contextType;g=qr,typeof dt=="object"&&dt!==null&&(g=An(dt));var vt=a.getDerivedStateFromProps;dt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||tt!==g)&&wm(n,f,s,g),Oa=!1;var rt=n.memoizedState;f.state=rt,co(n,s,f,c),lo(),tt=n.memoizedState,R||rt!==tt||Oa?(typeof vt=="function"&&(Zu(n,a,vt,s),tt=n.memoizedState),(B=Oa||Cm(n,a,B,s,rt,tt,g))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=tt),f.props=s,f.state=tt,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Au(t,n),g=n.memoizedProps,dt=Er(a,g),f.props=dt,vt=n.pendingProps,rt=f.context,tt=a.contextType,B=qr,typeof tt=="object"&&tt!==null&&(B=An(tt)),R=a.getDerivedStateFromProps,(tt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==vt||rt!==B)&&wm(n,f,s,B),Oa=!1,rt=n.memoizedState,f.state=rt,co(n,s,f,c),lo();var lt=n.memoizedState;g!==vt||rt!==lt||Oa||t!==null&&t.dependencies!==null&&fl(t.dependencies)?(typeof R=="function"&&(Zu(n,a,R,s),lt=n.memoizedState),(dt=Oa||Cm(n,a,dt,s,rt,lt,B)||t!==null&&t.dependencies!==null&&fl(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&rt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&rt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=B,s=dt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&rt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&rt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Dl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=yr(n,t.child,null,c),n.child=yr(n,null,a,c)):Rn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=na(t,n,c),t}function Xm(t,n,a,s){return mr(),n.flags|=256,Rn(t,n,a,s),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(t){return{baseLanes:t,cachePool:Np()}}function nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function Wm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?za(n):Ba(),(t=Ye)?(t=$0(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=bp(t),a.return=n,n.child=a,Tn=n,Ye=null)):t=null,t===null)throw La(n);return If(t)?n.lanes=32:n.lanes=536870912,null}var R=s.children;return s=s.fallback,c?(Ba(),c=n.mode,R=Ul({mode:"hidden",children:R},c),s=pr(s,c,a,null),R.return=n,s.return=n,R.sibling=s,n.child=R,s=n.child,s.memoizedState=ef(a),s.childLanes=nf(t,g,a),n.memoizedState=tf,mo(null,s)):(za(n),af(n,R))}var B=t.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(f)n.flags&256?(za(n),n.flags&=-257,n=rf(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),R=s.fallback,c=n.mode,s=Ul({mode:"visible",children:s.children},c),R=pr(R,c,a,null),R.flags|=2,s.return=n,R.return=n,s.sibling=R,n.child=s,yr(n,t.child,null,a),s=n.child,s.memoizedState=ef(a),s.childLanes=nf(t,g,a),n.memoizedState=tf,n=mo(null,s));else if(za(n),If(R)){if(g=R.nextSibling&&R.nextSibling.dataset,g)var tt=g.dgst;g=tt,s=Error(r(419)),s.stack="",s.digest=g,no({value:s,source:null,stack:null}),n=rf(t,n,a)}else if(hn||Kr(t,n,a,!1),g=(a&t.childLanes)!==0,hn||g){if(g=We,g!==null&&(s=Yn(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,hr(t,s),Xn(g,t,s),Ju;Bf(R)||Hl(),n=rf(t,n,a)}else Bf(R)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Ye=pi(R.nextSibling),Tn=n,Se=!0,Ua=null,di=!1,t!==null&&Rp(n,t),n=af(n,s.children),n.flags|=4096);return n}return c?(Ba(),R=s.fallback,c=n.mode,B=t.child,tt=B.sibling,s=Ki(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,tt!==null?R=Ki(tt,R):(R=pr(R,c,a,null),R.flags|=2),R.return=n,s.return=n,s.sibling=R,n.child=s,mo(null,s),s=n.child,R=t.child.memoizedState,R===null?R=ef(a):(c=R.cachePool,c!==null?(B=fn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Np(),R={baseLanes:R.baseLanes|a,cachePool:c}),s.memoizedState=R,s.childLanes=nf(t,g,a),n.memoizedState=tf,mo(t.child,s)):(za(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function af(t,n){return n=Ul({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ul(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function rf(t,n,a){return yr(n,t.child,null,a),t=af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function qm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),xu(t.return,n,a)}function sf(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Ym(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=sn.current,R=(g&2)!==0;if(R?(g=g&1|2,n.flags|=128):g&=1,xt(sn,g),Rn(t,n,s,a),s=Se?eo:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qm(t,a,n);else if(t.tag===19)qm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&xl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),sf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&xl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}sf(n,!0,a,null,f,s);break;case"together":sf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function na(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Kr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&fl(t)))}function _x(t,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),Na(n,fn,t.memoizedState.cache),mr();break;case 27:case 5:$t(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Wm(t,n,a):(za(n),t=na(t,n,a),t!==null?t.sibling:null);za(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Kr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Ym(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xt(sn,sn.current),s)break;return null;case 22:return n.lanes=0,Im(t,n,a,n.pendingProps);case 24:Na(n,fn,t.memoizedState.cache)}return na(t,n,a)}function jm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!of(t,a)&&(n.flags&128)===0)return hn=!1,_x(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,Se&&(n.flags&1048576)!==0&&Ap(n,eo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=xr(n.elementType),n.type=t,typeof t=="function")fu(t)?(s=Er(t,s),n.tag=1,n=km(null,n,t,s,a)):(n.tag=0,n=$u(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===O){n.tag=11,n=Pm(null,n,t,s,a);break t}else if(c===I){n.tag=14,n=zm(null,n,t,s,a);break t}}throw n=pt(t)||t,Error(r(306,n,""))}}return n;case 0:return $u(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Er(s,n.pendingProps),km(t,n,s,c,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Au(t,n),co(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Na(n,fn,s),s!==f.cache&&Su(n,[fn],a,!0),lo(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Xm(t,n,s,a);break t}else if(s!==c){c=ci(Error(r(424)),n),no(c),n=Xm(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ye=pi(t.firstChild),Tn=n,Se=!0,Ua=null,di=!0,a=Ip(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(mr(),s===c){n=na(t,n,a);break t}Rn(t,n,s,a)}n=n.child}return n;case 26:return Dl(t,n),t===null?(a=rg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,s=Yl(st.current).createElement(a),s[rn]=n,s[bn]=t,Cn(s,a,t),un(s),n.stateNode=s):n.memoizedState=rg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return $t(n),t===null&&Se&&(s=n.stateNode=ng(n.type,n.pendingProps,st.current),Tn=n,di=!0,c=Ye,qa(n.type)?(Hf=c,Ye=pi(s.firstChild)):Ye=c),Rn(t,n,n.pendingProps.children,a),Dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=s=Ye)&&(s=Yx(s,n.type,n.pendingProps,di),s!==null?(n.stateNode=s,Tn=n,Ye=pi(s.firstChild),di=!1,c=!0):c=!1),c||La(n)),$t(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Ff(c,f)?s=null:g!==null&&Ff(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Nu(t,n,lx,null,null,a),Do._currentValue=c),Dl(t,n),Rn(t,n,s,a),n.child;case 6:return t===null&&Se&&((t=a=Ye)&&(a=jx(a,n.pendingProps,di),a!==null?(n.stateNode=a,Tn=n,Ye=null,t=!0):t=!1),t||La(n)),null;case 13:return Wm(t,n,a);case 4:return bt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=yr(n,null,s,a):Rn(t,n,s,a),n.child;case 11:return Pm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Na(n,n.type,s.value),Rn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,_r(n),c=An(c),s=s(c),n.flags|=1,Rn(t,n,s,a),n.child;case 14:return zm(t,n,n.type,n.pendingProps,a);case 15:return Bm(t,n,n.type,n.pendingProps,a);case 19:return Ym(t,n,a);case 31:return gx(t,n,a);case 22:return Im(t,n,a,n.pendingProps);case 24:return _r(n),s=An(fn),t===null?(c=Eu(),c===null&&(c=We,f=yu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Tu(n),Na(n,fn,c)):((t.lanes&a)!==0&&(Au(t,n),co(n,null,null,a),lo()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Na(n,fn,s)):(s=f.cache,Na(n,fn,s),s!==c.cache&&Su(n,[fn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ia(t){t.flags|=4}function lf(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(y0())t.flags|=8192;else throw Sr=ml,bu}else t.flags&=-16777217}function Zm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ug(n))if(y0())t.flags|=8192;else throw Sr=ml,bu}function Ll(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?yt():536870912,t.lanes|=n,ls|=n)}function go(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function vx(t,n,a){var s=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),$i(fn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zr(n)?ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_u())),je(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ia(n),f!==null?(je(n),Zm(n,f)):(je(n),lf(n,c,null,s,a))):f?f!==t.memoizedState?(ia(n),je(n),Zm(n,f)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ia(n),je(n),lf(n,c,t,s,a)),null;case 27:if(Qt(n),a=st.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ia(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}t=At.current,Zr(n)?Cp(n):(t=ng(c,s,a),n.stateNode=t,ia(n))}return je(n),null;case 5:if(Qt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ia(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}if(f=At.current,Zr(n))Cp(n);else{var g=Yl(st.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[rn]=n,f[bn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Cn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ia(n)}}return je(n),lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ia(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=st.current,Zr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||W0(t.nodeValue,a)),t||La(n,!0)}else t=Yl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Zr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(r(558))}return je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Zr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),je(n),null);case 4:return Ht(),t===null&&Df(n.stateNode.containerInfo),je(n),null;case 10:return $i(n.type),je(n),null;case 19:if(Q(sn),s=n.memoizedState,s===null)return je(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)go(s,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=xl(t),f!==null){for(n.flags|=128,go(s,!1),t=f.updateQueue,n.updateQueue=t,Ll(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ep(a,t),a=a.sibling;return xt(sn,sn.current&1|2),Se&&Qi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&Rt()>zl&&(n.flags|=128,c=!0,go(s,!1),n.lanes=4194304)}else{if(!c)if(t=xl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ll(n,t),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Se)return je(n),null}else 2*Rt()-s.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,c=!0,go(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Rt(),t.sibling=null,a=sn.current,xt(sn,c?a&1|2:a&1),Se&&Qi(n,s.treeForkCount),t):(je(n),null);case 22:case 23:return $n(n),Du(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Q(vr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(fn),je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function xx(t,n){switch(mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $i(fn),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(r(340));mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(sn),null;case 4:return Ht(),null;case 10:return $i(n.type),null;case 22:case 23:return $n(n),Du(),t!==null&&Q(vr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $i(fn),null;case 25:return null;default:return null}}function Km(t,n){switch(mu(n),n.tag){case 3:$i(fn),Ht();break;case 26:case 27:case 5:Qt(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:Q(sn);break;case 10:$i(n.type);break;case 22:case 23:$n(n),Du(),t!==null&&Q(vr);break;case 24:$i(fn)}}function _o(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(R){Fe(n,n.return,R)}}function Ia(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,R=g.destroy;if(R!==void 0){g.destroy=void 0,c=n;var B=a,tt=R;try{tt()}catch(dt){Fe(c,B,dt)}}}s=s.next}while(s!==f)}}catch(dt){Fe(n,n.return,dt)}}function Qm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Gp(n,a)}catch(s){Fe(t,t.return,s)}}}function Jm(t,n,a){a.props=Er(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Fe(t,n,s)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Fe(t,n,c)}}function Fi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Fe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(t,n,c)}else a.current=null}function $m(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Fe(t,t.return,c)}}function cf(t,n,a){try{var s=t.stateNode;Gx(s,t.type,a,n),s[bn]=n}catch(c){Fe(t,t.return,c)}}function t0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function uf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||t0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(s!==4&&(s===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,a),t=t.sibling;t!==null;)ff(t,n,a),t=t.sibling}function Nl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Nl(t,n,a),t=t.sibling;t!==null;)Nl(t,n,a),t=t.sibling}function e0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,s,a),n[rn]=t,n[bn]=a}catch(f){Fe(t,t.return,f)}}var aa=!1,pn=!1,df=!1,n0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Sx(t,n){if(t=t.containerInfo,Nf=tc,t=pp(t),au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,R=-1,B=-1,tt=0,dt=0,vt=t,rt=null;e:for(;;){for(var lt;vt!==a||c!==0&&vt.nodeType!==3||(R=g+c),vt!==f||s!==0&&vt.nodeType!==3||(B=g+s),vt.nodeType===3&&(g+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)rt=vt,vt=lt;for(;;){if(vt===t)break e;if(rt===a&&++tt===c&&(R=g),rt===f&&++dt===s&&(B=g),(lt=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=lt}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:t,selectionRange:a},tc=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Wt=Er(a.type,c);t=s.getSnapshotBeforeUpdate(Wt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){Fe(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)zf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function i0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),s&4&&_o(5,a);break;case 1:if(sa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Fe(a,a.return,g)}else{var c=Er(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Fe(a,a.return,g)}}s&64&&Qm(a),s&512&&vo(a,a.return);break;case 3:if(sa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Gp(t,n)}catch(g){Fe(a,a.return,g)}}break;case 27:n===null&&s&4&&e0(a);case 26:case 5:sa(t,a),n===null&&s&4&&$m(a),s&512&&vo(a,a.return);break;case 12:sa(t,a);break;case 31:sa(t,a),s&4&&s0(t,a);break;case 13:sa(t,a),s&4&&o0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=wx.bind(null,a),Zx(t,a))));break;case 22:if(s=a.memoizedState!==null||aa,!s){n=n!==null&&n.memoizedState!==null||pn,c=aa;var f=pn;aa=s,(pn=n)&&!f?oa(t,a,(a.subtreeFlags&8772)!==0):sa(t,a),aa=c,pn=f}break;case 30:break;default:sa(t,a)}}function a0(t){var n=t.alternate;n!==null&&(t.alternate=null,a0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ws(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Hn=!1;function ra(t,n,a){for(a=a.child;a!==null;)r0(t,n,a),a=a.sibling}function r0(t,n,a){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:pn||Fi(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Fi(a,n);var s=Je,c=Hn;qa(a.type)&&(Je=a.stateNode,Hn=!1),ra(t,n,a),Ro(a.stateNode),Je=s,Hn=c;break;case 5:pn||Fi(a,n);case 6:if(s=Je,c=Hn,Je=null,ra(t,n,a),Je=s,Hn=c,Je!==null)if(Hn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Je!==null&&(Hn?(t=Je,Q0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),gs(t)):Q0(Je,a.stateNode));break;case 4:s=Je,c=Hn,Je=a.stateNode.containerInfo,Hn=!0,ra(t,n,a),Je=s,Hn=c;break;case 0:case 11:case 14:case 15:Ia(2,a,n),pn||Ia(4,a,n),ra(t,n,a);break;case 1:pn||(Fi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Jm(a,n,s)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:pn=(s=pn)||a.memoizedState!==null,ra(t,n,a),pn=s;break;default:ra(t,n,a)}}function s0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gs(t)}catch(a){Fe(n,n.return,a)}}}function o0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gs(t)}catch(a){Fe(n,n.return,a)}}function yx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new n0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new n0),n;default:throw Error(r(435,t.tag))}}function Ol(t,n){var a=yx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Dx.bind(null,t,s);s.then(c,c)}})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,R=g;t:for(;R!==null;){switch(R.tag){case 27:if(qa(R.type)){Je=R.stateNode,Hn=!1;break t}break;case 5:Je=R.stateNode,Hn=!1;break t;case 3:case 4:Je=R.stateNode.containerInfo,Hn=!0;break t}R=R.return}if(Je===null)throw Error(r(160));r0(f,g,c),Je=null,Hn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)l0(n,t),n=n.sibling}var Mi=null;function l0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),s&4&&(Ia(3,t,t.return),_o(3,t),Ia(5,t,t.return));break;case 1:Gn(n,t),Vn(t),s&512&&(pn||a===null||Fi(a,a.return)),s&64&&aa&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=Mi;if(Gn(n,t),Vn(t),s&512&&(pn||a===null||Fi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ba]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Cn(f,s,a),f[rn]=t,un(f),s=f;break t;case"link":var g=lg("link","href",c).get(s+(a.href||""));if(g){for(var R=0;R<g.length;R++)if(f=g[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(R,1);break e}}f=c.createElement(s),Cn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=lg("meta","content",c).get(s+(a.content||""))){for(R=0;R<g.length;R++)if(f=g[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(R,1);break e}}f=c.createElement(s),Cn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,un(f),s=f}t.stateNode=s}else cg(c,t.type,t.stateNode);else t.stateNode=og(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?cg(c,t.type,t.stateNode):og(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&cf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),s&512&&(pn||a===null||Fi(a,a.return)),a!==null&&s&4&&cf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),s&512&&(pn||a===null||Fi(a,a.return)),t.flags&32){c=t.stateNode;try{Zn(c,"")}catch(Wt){Fe(t,t.return,Wt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,cf(t,c,a!==null?a.memoizedProps:c)),s&1024&&(df=!0);break;case 6:if(Gn(n,t),Vn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Wt){Fe(t,t.return,Wt)}}break;case 3:if(Kl=null,c=Mi,Mi=jl(n.containerInfo),Gn(n,t),Mi=c,Vn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{gs(n.containerInfo)}catch(Wt){Fe(t,t.return,Wt)}df&&(df=!1,c0(t));break;case 4:s=Mi,Mi=jl(t.stateNode.containerInfo),Gn(n,t),Vn(t),Mi=s;break;case 12:Gn(n,t),Vn(t);break;case 31:Gn(n,t),Vn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ol(t,s)));break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=Rt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ol(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,tt=aa,dt=pn;if(aa=tt||c,pn=dt||B,Gn(n,t),pn=dt,aa=tt,Vn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||aa||pn||br(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{R=B.stateNode;var vt=B.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Wt){Fe(B,B.return,Wt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Wt){Fe(B,B.return,Wt)}}}else if(n.tag===18){if(a===null){B=n;try{var lt=B.stateNode;c?J0(lt,!0):J0(B.stateNode,!1)}catch(Wt){Fe(B,B.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ol(t,a))));break;case 19:Gn(n,t),Vn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ol(t,s)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(t0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(t);Nl(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Zn(g,""),a.flags&=-33);var R=uf(t);Nl(t,R,g);break;case 3:case 4:var B=a.stateNode.containerInfo,tt=uf(t);ff(t,tt,B);break;default:throw Error(r(161))}}catch(dt){Fe(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function c0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;c0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)i0(t,n.alternate,n),n=n.sibling}function br(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),br(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Jm(n,n.return,a),br(n);break;case 27:Ro(n.stateNode);case 26:case 5:Fi(n,n.return),br(n);break;case 22:n.memoizedState===null&&br(n);break;case 30:br(n);break;default:br(n)}t=t.sibling}}function oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:oa(c,f,a),_o(4,f);break;case 1:if(oa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Fe(s,s.return,tt)}if(s=f,c=s.updateQueue,c!==null){var R=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Hp(B[c],R)}catch(tt){Fe(s,s.return,tt)}}a&&g&64&&Qm(f),vo(f,f.return);break;case 27:e0(f);case 26:case 5:oa(c,f,a),a&&s===null&&g&4&&$m(f),vo(f,f.return);break;case 12:oa(c,f,a);break;case 31:oa(c,f,a),a&&g&4&&s0(c,f);break;case 13:oa(c,f,a),a&&g&4&&o0(c,f);break;case 22:f.memoizedState===null&&oa(c,f,a),vo(f,f.return);break;case 30:break;default:oa(c,f,a)}n=n.sibling}}function hf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function Ei(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)u0(t,n,a,s),n=n.sibling}function u0(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,s),c&2048&&_o(9,n);break;case 1:Ei(t,n,a,s);break;case 3:Ei(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(c&2048){Ei(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,R=f.onPostCommit;typeof R=="function"&&R(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Fe(n,n.return,B)}}else Ei(t,n,a,s);break;case 31:Ei(t,n,a,s);break;case 13:Ei(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,s):xo(t,n):f._visibility&2?Ei(t,n,a,s):(f._visibility|=2,rs(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&hf(g,n);break;case 24:Ei(t,n,a,s),c&2048&&pf(n.alternate,n);break;default:Ei(t,n,a,s)}}function rs(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,R=a,B=s,tt=g.flags;switch(g.tag){case 0:case 11:case 15:rs(f,g,R,B,c),_o(8,g);break;case 23:break;case 22:var dt=g.stateNode;g.memoizedState!==null?dt._visibility&2?rs(f,g,R,B,c):xo(f,g):(dt._visibility|=2,rs(f,g,R,B,c)),c&&tt&2048&&hf(g.alternate,g);break;case 24:rs(f,g,R,B,c),c&&tt&2048&&pf(g.alternate,g);break;default:rs(f,g,R,B,c)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:xo(a,s),c&2048&&hf(s.alternate,s);break;case 24:xo(a,s),c&2048&&pf(s.alternate,s);break;default:xo(a,s)}n=n.sibling}}var So=8192;function ss(t,n,a){if(t.subtreeFlags&So)for(t=t.child;t!==null;)f0(t,n,a),t=t.sibling}function f0(t,n,a){switch(t.tag){case 26:ss(t,n,a),t.flags&So&&t.memoizedState!==null&&oS(a,Mi,t.memoizedState,t.memoizedProps);break;case 5:ss(t,n,a);break;case 3:case 4:var s=Mi;Mi=jl(t.stateNode.containerInfo),ss(t,n,a),Mi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=So,So=16777216,ss(t,n,a),So=s):ss(t,n,a));break;default:ss(t,n,a)}}function d0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,p0(s,t)}d0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)h0(t),t=t.sibling}function h0(t){switch(t.tag){case 0:case 11:case 15:yo(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:yo(t);break;case 12:yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fl(t)):yo(t);break;default:yo(t)}}function Fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,p0(s,t)}d0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}t=t.sibling}}function p0(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:io(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else t:for(a=t;yn!==null;){s=yn;var c=s.sibling,f=s.return;if(a0(s),s===a){yn=null;break t}if(c!==null){c.return=f,yn=c;break t}yn=f}}}var Mx={getCacheForType:function(t){var n=An(fn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(fn).controller.signal}},Ex=typeof WeakMap=="function"?WeakMap:Map,Ce=0,We=null,me=null,ve=0,Oe=0,ti=null,Ha=!1,os=!1,mf=!1,la=0,nn=0,Ga=0,Tr=0,gf=0,ei=0,ls=0,Mo=null,kn=null,_f=!1,Pl=0,m0=0,zl=1/0,Bl=null,Va=null,_n=0,ka=null,cs=null,ca=0,vf=0,xf=null,g0=null,Eo=0,Sf=null;function ni(){return(Ce&2)!==0&&ve!==0?ve&-ve:U.T!==null?Af():Vs()}function _0(){if(ei===0)if((ve&536870912)===0||Se){var t=he;he<<=1,(he&3932160)===0&&(he=262144),ei=t}else ei=536870912;return t=Jn.current,t!==null&&(t.flags|=32),ei}function Xn(t,n,a){(t===We&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(us(t,0),Xa(t,ve,ei,!1)),te(t,a),((Ce&2)===0||t!==We)&&(t===We&&((Ce&2)===0&&(Tr|=a),nn===4&&Xa(t,ve,ei,!1)),Pi(t))}function v0(t,n,a){if((Ce&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Bt(t,n),c=s?Ax(t,n):Mf(t,n,!0),f=s;do{if(c===0){os&&!s&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!bx(a)){c=Mf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var R=t;c=Mo;var B=R.current.memoizedState.isDehydrated;if(B&&(us(R,g).flags|=256),g=Mf(R,g,!1),g!==2){if(mf&&!B){R.errorRecoveryDisabledLanes|=f,Tr|=f,c=4;break t}f=kn,kn=c,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){us(t,0),Xa(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Xa(s,n,ei,!Ha);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Pl+300-Rt(),10<c)){if(Xa(s,n,ei,!Ha),ht(s,0,!0)!==0)break t;ca=n,s.timeoutHandle=Z0(x0.bind(null,s,a,kn,Bl,_f,n,ei,Tr,ls,Ha,f,"Throttled",-0,0),c);break t}x0(s,a,kn,Bl,_f,n,ei,Tr,ls,Ha,f,null,-0,0)}}break}while(!0);Pi(t)}function x0(t,n,a,s,c,f,g,R,B,tt,dt,vt,rt,lt){if(t.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},f0(n,f,vt);var Wt=(f&62914560)===f?Pl-Rt():(f&4194048)===f?m0-Rt():0;if(Wt=lS(vt,Wt),Wt!==null){ca=f,t.cancelPendingCommit=Wt(R0.bind(null,t,n,f,a,s,c,g,R,B,dt,vt,null,rt,lt)),Xa(t,f,g,!tt);return}}R0(t,n,f,a,s,c,g,R,B)}function bx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,s){n&=~gf,n&=~Tr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Ft(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Re(t,a,n)}function Il(){return(Ce&6)===0?(bo(0),!1):!0}function yf(){if(me!==null){if(Oe===0)var t=me.return;else t=me,Ji=gr=null,Pu(t),ts=null,ro=0,t=me;for(;t!==null;)Km(t.alternate,t),t=t.return;me=null}}function us(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Xx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ca=0,yf(),We=t,me=a=Ki(t.current,null),ve=n,Oe=0,ti=null,Ha=!1,os=Bt(t,n),mf=!1,ls=ei=gf=Tr=Ga=nn=0,kn=Mo=null,_f=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Ft(s),f=1<<c;n|=t[c],s&=~f}return la=n,sl(),a}function S0(t,n){oe=null,U.H=po,n===$r||n===pl?(n=Pp(),Oe=3):n===bu?(n=Pp(),Oe=4):Oe=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,me===null&&(nn=1,Cl(t,ci(n,t.current)))}function y0(){var t=Jn.current;return t===null?!0:(ve&4194048)===ve?hi===null:(ve&62914560)===ve||(ve&536870912)!==0?t===hi:!1}function M0(){var t=U.H;return U.H=po,t===null?po:t}function E0(){var t=U.A;return U.A=Mx,t}function Hl(){nn=4,Ha||(ve&4194048)!==ve&&Jn.current!==null||(os=!0),(Ga&134217727)===0&&(Tr&134217727)===0||We===null||Xa(We,ve,ei,!1)}function Mf(t,n,a){var s=Ce;Ce|=2;var c=M0(),f=E0();(We!==t||ve!==n)&&(Bl=null,us(t,n)),n=!1;var g=nn;t:do try{if(Oe!==0&&me!==null){var R=me,B=ti;switch(Oe){case 8:yf(),g=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var tt=Oe;if(Oe=0,ti=null,fs(t,R,B,tt),a&&os){g=0;break t}break;default:tt=Oe,Oe=0,ti=null,fs(t,R,B,tt)}}Tx(),g=nn;break}catch(dt){S0(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Ji=gr=null,Ce=s,U.H=c,U.A=f,me===null&&(We=null,ve=0,sl()),g}function Tx(){for(;me!==null;)b0(me)}function Ax(t,n){var a=Ce;Ce|=2;var s=M0(),c=E0();We!==t||ve!==n?(Bl=null,zl=Rt()+500,us(t,n)):os=Bt(t,n);t:do try{if(Oe!==0&&me!==null){n=me;var f=ti;e:switch(Oe){case 1:Oe=0,ti=null,fs(t,n,f,1);break;case 2:case 9:if(Op(f)){Oe=0,ti=null,T0(n);break}n=function(){Oe!==2&&Oe!==9||We!==t||(Oe=7),Pi(t)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Op(f)?(Oe=0,ti=null,T0(n)):(Oe=0,ti=null,fs(t,n,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var R=me;if(g?ug(g):R.stateNode.complete){Oe=0,ti=null;var B=R.sibling;if(B!==null)me=B;else{var tt=R.return;tt!==null?(me=tt,Gl(tt)):me=null}break e}}Oe=0,ti=null,fs(t,n,f,5);break;case 6:Oe=0,ti=null,fs(t,n,f,6);break;case 8:yf(),nn=6;break t;default:throw Error(r(462))}}Rx();break}catch(dt){S0(t,dt)}while(!0);return Ji=gr=null,U.H=s,U.A=c,Ce=a,me!==null?0:(We=null,ve=0,sl(),nn)}function Rx(){for(;me!==null&&!de();)b0(me)}function b0(t){var n=jm(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?Gl(t):me=n}function T0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Vm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Vm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Pu(n);default:Km(a,n),n=me=Ep(n,la),n=jm(a,n,la)}t.memoizedProps=t.pendingProps,n===null?Gl(t):me=n}function fs(t,n,a,s){Ji=gr=null,Pu(n),ts=null,ro=0;var c=n.return;try{if(mx(t,c,n,a,ve)){nn=1,Cl(t,ci(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;nn=1,Cl(t,ci(a,t.current)),me=null;return}n.flags&32768?(Se||s===1?t=!0:os||(ve&536870912)!==0?t=!1:(Ha=t=!0,(s===2||s===9||s===3||s===6)&&(s=Jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),A0(n,t)):Gl(n)}function Gl(t){var n=t;do{if((n.flags&32768)!==0){A0(n,Ha);return}t=n.return;var a=vx(n.alternate,n,la);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);nn===0&&(nn=5)}function A0(t,n){do{var a=xx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);nn=6,me=null}function R0(t,n,a,s,c,f,g,R,B){t.cancelPendingCommit=null;do Vl();while(_n!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=cu,tn(t,a,f,g,R,B),t===We&&(me=We=null,ve=0),cs=n,ka=t,ca=a,vf=f,xf=c,g0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ux(Z,function(){return L0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=U.T,U.T=null,c=z.p,z.p=2,g=Ce,Ce|=4;try{Sx(t,n,a)}finally{Ce=g,z.p=c,U.T=s}}_n=1,C0(),w0(),D0()}}function C0(){if(_n===1){_n=0;var t=ka,n=cs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var s=z.p;z.p=2;var c=Ce;Ce|=4;try{l0(n,t);var f=Of,g=pp(t.containerInfo),R=f.focusedElem,B=f.selectionRange;if(g!==R&&R&&R.ownerDocument&&hp(R.ownerDocument.documentElement,R)){if(B!==null&&au(R)){var tt=B.start,dt=B.end;if(dt===void 0&&(dt=tt),"selectionStart"in R)R.selectionStart=tt,R.selectionEnd=Math.min(dt,R.value.length);else{var vt=R.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var lt=rt.getSelection(),Wt=R.textContent.length,Jt=Math.min(B.start,Wt),He=B.end===void 0?Jt:Math.min(B.end,Wt);!lt.extend&&Jt>He&&(g=He,He=Jt,Jt=g);var Y=dp(R,Jt),k=dp(R,He);if(Y&&k&&(lt.rangeCount!==1||lt.anchorNode!==Y.node||lt.anchorOffset!==Y.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var $=vt.createRange();$.setStart(Y.node,Y.offset),lt.removeAllRanges(),Jt>He?(lt.addRange($),lt.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),lt.addRange($))}}}}for(vt=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var mt=vt[R];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}tc=!!Nf,Of=Nf=null}finally{Ce=c,z.p=s,U.T=a}}t.current=n,_n=2}}function w0(){if(_n===2){_n=0;var t=ka,n=cs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var s=z.p;z.p=2;var c=Ce;Ce|=4;try{i0(t,n.alternate,n)}finally{Ce=c,z.p=s,U.T=a}}_n=3}}function D0(){if(_n===4||_n===3){_n=0,ze();var t=ka,n=cs,a=ca,s=g0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,cs=ka=null,U0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Va=null),Gs(a),n=n.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=U.T,c=z.p,z.p=2,U.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var R=s[g];f(R.value,{componentStack:R.stack})}}finally{U.T=n,z.p=c}}(ca&3)!==0&&Vl(),Pi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Sf?Eo++:(Eo=0,Sf=t):Eo=0,bo(0)}}function U0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function Vl(){return C0(),w0(),D0(),L0()}function L0(){if(_n!==5)return!1;var t=ka,n=vf;vf=0;var a=Gs(ca),s=U.T,c=z.p;try{z.p=32>a?32:a,U.T=null,a=xf,xf=null;var f=ka,g=ca;if(_n=0,cs=ka=null,ca=0,(Ce&6)!==0)throw Error(r(331));var R=Ce;if(Ce|=4,h0(f.current),u0(f,f.current,g,a),Ce=R,bo(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{z.p=c,U.T=s,U0(t,n)}}function N0(t,n,a){n=ci(a,n),n=Qu(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(te(t,2),Pi(t))}function Fe(t,n,a){if(t.tag===3)N0(t,t,a);else for(;n!==null;){if(n.tag===3){N0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Va===null||!Va.has(s))){t=ci(a,t),a=Om(2),s=Pa(n,a,2),s!==null&&(Fm(a,s,n,t),te(s,2),Pi(s));break}}n=n.return}}function Ef(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Ex;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(mf=!0,c.add(a),t=Cx.bind(null,t,n,a),n.then(t,t))}function Cx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(ve&a)===a&&(nn===4||nn===3&&(ve&62914560)===ve&&300>Rt()-Pl?(Ce&2)===0&&us(t,0):gf|=a,ls===ve&&(ls=0)),Pi(t)}function O0(t,n){n===0&&(n=yt()),t=hr(t,n),t!==null&&(te(t,n),Pi(t))}function wx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),O0(t,a)}function Dx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),O0(t,a)}function Ux(t,n){return X(t,n)}var kl=null,ds=null,bf=!1,Xl=!1,Tf=!1,Wa=0;function Pi(t){t!==ds&&t.next===null&&(ds===null?kl=ds=t:ds=ds.next=t),Xl=!0,bf||(bf=!0,Nx())}function bo(t,n){if(!Tf&&Xl){Tf=!0;do for(var a=!1,s=kl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,R=s.pingedLanes;f=(1<<31-Ft(42|t)+1)-1,f&=c&~(g&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,B0(s,f))}else f=ve,f=ht(s,s===We?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Bt(s,f)||(a=!0,B0(s,f));s=s.next}while(a);Tf=!1}}function Lx(){F0()}function F0(){Xl=bf=!1;var t=0;Wa!==0&&kx()&&(t=Wa);for(var n=Rt(),a=null,s=kl;s!==null;){var c=s.next,f=P0(s,n);f===0?(s.next=null,a===null?kl=c:a.next=c,c===null&&(ds=a)):(a=s,(t!==0||(f&3)!==0)&&(Xl=!0)),s=c}_n!==0&&_n!==5||bo(t),Wa!==0&&(Wa=0)}function P0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Ft(f),R=1<<g,B=c[g];B===-1?((R&a)===0||(R&s)!==0)&&(c[g]=Lt(R,n)):B<=n&&(t.expiredLanes|=R),f&=~R}if(n=We,a=ve,a=ht(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&$e(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Bt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&$e(s),Gs(a)){case 2:case 8:a=E;break;case 32:a=Z;break;case 268435456:a=Et;break;default:a=Z}return s=z0.bind(null,t),a=X(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&$e(s),t.callbackPriority=2,t.callbackNode=null,2}function z0(t,n){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Vl()&&t.callbackNode!==a)return null;var s=ve;return s=ht(t,t===We?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(v0(t,s,n),P0(t,Rt()),t.callbackNode!=null&&t.callbackNode===a?z0.bind(null,t):null)}function B0(t,n){if(Vl())return null;v0(t,n,!0)}function Nx(){Wx(function(){(Ce&6)!==0?X(C,Lx):F0()})}function Af(){if(Wa===0){var t=Qr;t===0&&(t=ie,ie<<=1,(ie&261888)===0&&(ie=256)),Wa=t}return Wa}function I0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:cr(""+t)}function H0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ox(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=I0((c[bn]||null).action),g=s.submitter;g&&(n=(n=g[bn]||null)?I0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var R=new nl("action","action",null,s,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Wa!==0){var B=g?H0(c,g):new FormData(c);Wu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=g?H0(c,g):new FormData(c),Wu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Rf=0;Rf<lu.length;Rf++){var Cf=lu[Rf],Fx=Cf.toLowerCase(),Px=Cf[0].toUpperCase()+Cf.slice(1);yi(Fx,"on"+Px)}yi(_p,"onAnimationEnd"),yi(vp,"onAnimationIteration"),yi(xp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Jv,"onTransitionRun"),yi($v,"onTransitionStart"),yi(tx,"onTransitionCancel"),yi(Sp,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function G0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var R=s[g],B=R.instance,tt=R.currentTarget;if(R=R.listener,B!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=tt;try{f(c)}catch(dt){rl(dt)}c.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(R=s[g],B=R.instance,tt=R.currentTarget,R=R.listener,B!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=tt;try{f(c)}catch(dt){rl(dt)}c.currentTarget=null,f=B}}}}function ge(t,n){var a=n[Ea];a===void 0&&(a=n[Ea]=new Set);var s=t+"__bubble";a.has(s)||(V0(n,t,2,!1),a.add(s))}function wf(t,n,a){var s=0;n&&(s|=4),V0(a,t,s,n)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function Df(t){if(!t[Wl]){t[Wl]=!0,Jo.forEach(function(a){a!=="selectionchange"&&(zx.has(a)||wf(a,!1,t),wf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Wl]||(n[Wl]=!0,wf("selectionchange",!1,n))}}function V0(t,n,a,s){switch(_g(n)){case 2:var c=fS;break;case 8:c=dS;break;default:c=Wf}a=c.bind(null,n,a,t),c=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Uf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var R=s.stateNode.containerInfo;if(R===c)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;R!==null;){if(g=Ta(R),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}R=R.parentNode}}s=s.return}Yh(function(){var tt=f,dt=Yc(a),vt=[];t:{var rt=yp.get(t);if(rt!==void 0){var lt=nl,Wt=t;switch(t){case"keypress":if(tl(a)===0)break t;case"keydown":case"keyup":lt=Dv;break;case"focusin":Wt="focus",lt=$c;break;case"focusout":Wt="blur",lt=$c;break;case"beforeblur":case"afterblur":lt=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Nv;break;case _p:case vp:case xp:lt=yv;break;case Sp:lt=Fv;break;case"scroll":case"scrollend":lt=gv;break;case"wheel":lt=zv;break;case"copy":case"cut":case"paste":lt=Ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Jh;break;case"toggle":case"beforetoggle":lt=Iv}var Jt=(n&4)!==0,He=!Jt&&(t==="scroll"||t==="scrollend"),Y=Jt?rt!==null?rt+"Capture":null:rt;Jt=[];for(var k=tt,$;k!==null;){var mt=k;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||Y===null||(mt=qs(k,Y),mt!=null&&Jt.push(Ao(k,mt,$))),He)break;k=k.return}0<Jt.length&&(rt=new lt(rt,Wt,null,a,dt),vt.push({event:rt,listeners:Jt}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",rt&&a!==qc&&(Wt=a.relatedTarget||a.fromElement)&&(Ta(Wt)||Wt[Yi]))break t;if((lt||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,lt?(Wt=a.relatedTarget||a.toElement,lt=tt,Wt=Wt?Ta(Wt):null,Wt!==null&&(He=u(Wt),Jt=Wt.tag,Wt!==He||Jt!==5&&Jt!==27&&Jt!==6)&&(Wt=null)):(lt=null,Wt=tt),lt!==Wt)){if(Jt=Kh,mt="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=Jh,mt="onPointerLeave",Y="onPointerEnter",k="pointer"),He=lt==null?rt:lr(lt),$=Wt==null?rt:lr(Wt),rt=new Jt(mt,k+"leave",lt,a,dt),rt.target=He,rt.relatedTarget=$,mt=null,Ta(dt)===tt&&(Jt=new Jt(Y,k+"enter",Wt,a,dt),Jt.target=$,Jt.relatedTarget=He,mt=Jt),He=mt,lt&&Wt)e:{for(Jt=Bx,Y=lt,k=Wt,$=0,mt=Y;mt;mt=Jt(mt))$++;mt=0;for(var Kt=k;Kt;Kt=Jt(Kt))mt++;for(;0<$-mt;)Y=Jt(Y),$--;for(;0<mt-$;)k=Jt(k),mt--;for(;$--;){if(Y===k||k!==null&&Y===k.alternate){Jt=Y;break e}Y=Jt(Y),k=Jt(k)}Jt=null}else Jt=null;lt!==null&&k0(vt,rt,lt,Jt,!1),Wt!==null&&He!==null&&k0(vt,He,Wt,Jt,!0)}}t:{if(rt=tt?lr(tt):window,lt=rt.nodeName&&rt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&rt.type==="file")var Te=sp;else if(ap(rt))if(op)Te=Zv;else{Te=Yv;var Yt=qv}else lt=rt.nodeName,!lt||lt.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?tt&&we(tt.elementType)&&(Te=sp):Te=jv;if(Te&&(Te=Te(t,tt))){rp(vt,Te,a,dt);break t}Yt&&Yt(t,rt,tt),t==="focusout"&&tt&&rt.type==="number"&&tt.memoizedProps.value!=null&&pe(rt,"number",rt.value)}switch(Yt=tt?lr(tt):window,t){case"focusin":(ap(Yt)||Yt.contentEditable==="true")&&(kr=Yt,ru=tt,to=null);break;case"focusout":to=ru=kr=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,mp(vt,a,dt);break;case"selectionchange":if(Qv)break;case"keydown":case"keyup":mp(vt,a,dt)}var ce;if(eu)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Vr?np(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&($h&&a.locale!=="ko"&&(Vr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Vr&&(ce=jh()):(wa=dt,Kc="value"in wa?wa.value:wa.textContent,Vr=!0)),Yt=ql(tt,xe),0<Yt.length&&(xe=new Qh(xe,t,null,a,dt),vt.push({event:xe,listeners:Yt}),ce?xe.data=ce:(ce=ip(a),ce!==null&&(xe.data=ce)))),(ce=Gv?Vv(t,a):kv(t,a))&&(xe=ql(tt,"onBeforeInput"),0<xe.length&&(Yt=new Qh("onBeforeInput","beforeinput",null,a,dt),vt.push({event:Yt,listeners:xe}),Yt.data=ce)),Ox(vt,t,tt,a,dt)}G0(vt,n)})}function Ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ql(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=qs(t,a),c!=null&&s.unshift(Ao(t,c,f)),c=qs(t,n),c!=null&&s.push(Ao(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Bx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function k0(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var R=a,B=R.alternate,tt=R.stateNode;if(R=R.tag,B!==null&&B===s)break;R!==5&&R!==26&&R!==27||tt===null||(B=tt,c?(tt=qs(a,f),tt!=null&&g.unshift(Ao(a,tt,B))):c||(tt=qs(a,f),tt!=null&&g.push(Ao(a,tt,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Ix=/\r\n?/g,Hx=/\u0000|\uFFFD/g;function X0(t){return(typeof t=="string"?t:""+t).replace(Ix,`
`).replace(Hx,"")}function W0(t,n){return n=X0(n),X0(t)===n}function Ie(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Zn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Zn(t,""+s);break;case"className":Xt(t,"class",s);break;case"tabIndex":Xt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(t,a,s);break;case"style":Si(t,s,f);break;case"data":if(n!=="object"){Xt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=cr(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=cr(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=ji);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=cr(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),Pt(t,"popover",s);break;case"xlinkActuate":kt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":kt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":kt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":kt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":kt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":kt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":kt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":kt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":kt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Pt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Li.get(a)||a,Pt(t,a,s))}}function Lf(t,n,a,s,c,f){switch(a){case"style":Si(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Zn(t,s):(typeof s=="number"||typeof s=="bigint")&&Zn(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Pt(t,a,s)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,f,g,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),s&&Ie(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var R=f=g=c=null,B=null,tt=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":c=dt;break;case"type":g=dt;break;case"checked":B=dt;break;case"defaultChecked":tt=dt;break;case"value":f=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ie(t,n,s,dt,a,null)}}Un(t,f,R,B,tt,g,c,!1);return;case"select":ge("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":g=R;break;case"multiple":s=R;default:Ie(t,n,c,R,a,null)}n=f,a=g,t.multiple=!!s,n!=null?gn(t,!!s,n,!1):a!=null&&gn(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(R=a[g],R!=null))switch(g){case"value":s=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Ie(t,n,g,R,a,null)}xi(t,s,c,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ie(t,n,B,s,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<To.length;s++)ge(To[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(s=a[tt],s!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,tt,s,a,null)}return;default:if(we(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&Lf(t,n,dt,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Ie(t,n,R,s,a,null))}function Gx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,R=null,B=null,tt=null,dt=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=vt;default:s.hasOwnProperty(lt)||Ie(t,n,lt,null,s,vt)}}for(var rt in s){var lt=s[rt];if(vt=a[rt],s.hasOwnProperty(rt)&&(lt!=null||vt!=null))switch(rt){case"type":f=lt;break;case"name":c=lt;break;case"checked":tt=lt;break;case"defaultChecked":dt=lt;break;case"value":g=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==vt&&Ie(t,n,rt,lt,s,vt)}}Gt(t,g,R,B,tt,dt,f,c);return;case"select":lt=g=R=rt=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":lt=B;default:s.hasOwnProperty(f)||Ie(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":rt=f;break;case"defaultValue":R=f;break;case"multiple":g=f;default:f!==B&&Ie(t,n,c,f,s,B)}n=R,a=g,s=lt,rt!=null?gn(t,!!a,rt,!1):!!s!=!!a&&(n!=null?gn(t,!!a,n,!0):gn(t,!!a,a?[]:"",!1));return;case"textarea":lt=rt=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ie(t,n,R,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":rt=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ie(t,n,g,c,s,f)}jn(t,rt,lt);return;case"option":for(var Wt in a)rt=a[Wt],a.hasOwnProperty(Wt)&&rt!=null&&!s.hasOwnProperty(Wt)&&(Wt==="selected"?t.selected=!1:Ie(t,n,Wt,null,s,rt));for(B in s)rt=s[B],lt=a[B],s.hasOwnProperty(B)&&rt!==lt&&(rt!=null||lt!=null)&&(B==="selected"?t.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":Ie(t,n,B,rt,s,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)rt=a[Jt],a.hasOwnProperty(Jt)&&rt!=null&&!s.hasOwnProperty(Jt)&&Ie(t,n,Jt,null,s,rt);for(tt in s)if(rt=s[tt],lt=a[tt],s.hasOwnProperty(tt)&&rt!==lt&&(rt!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:Ie(t,n,tt,rt,s,lt)}return;default:if(we(n)){for(var He in a)rt=a[He],a.hasOwnProperty(He)&&rt!==void 0&&!s.hasOwnProperty(He)&&Lf(t,n,He,void 0,s,rt);for(dt in s)rt=s[dt],lt=a[dt],!s.hasOwnProperty(dt)||rt===lt||rt===void 0&&lt===void 0||Lf(t,n,dt,rt,s,lt);return}}for(var Y in a)rt=a[Y],a.hasOwnProperty(Y)&&rt!=null&&!s.hasOwnProperty(Y)&&Ie(t,n,Y,null,s,rt);for(vt in s)rt=s[vt],lt=a[vt],!s.hasOwnProperty(vt)||rt===lt||rt==null&&lt==null||Ie(t,n,vt,rt,s,lt)}function q0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,R=c.duration;if(f&&R&&q0(g)){for(g=0,R=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],tt=B.startTime;if(tt>R)break;var dt=B.transferSize,vt=B.initiatorType;dt&&q0(vt)&&(B=B.responseEnd,g+=dt*(B<R?1:(R-tt)/(B-tt)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nf=null,Of=null;function Yl(t){return t.nodeType===9?t:t.ownerDocument}function Y0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ff(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function kx(){var t=window.event;return t&&t.type==="popstate"?t===Pf?!1:(Pf=t,!0):(Pf=null,!1)}var Z0=typeof setTimeout=="function"?setTimeout:void 0,Xx=typeof clearTimeout=="function"?clearTimeout:void 0,K0=typeof Promise=="function"?Promise:void 0,Wx=typeof queueMicrotask=="function"?queueMicrotask:typeof K0<"u"?function(t){return K0.resolve(null).then(t).catch(qx)}:Z0;function qx(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function Q0(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),gs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var g=f.nextSibling,R=f.nodeName;f[ba]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Ro(t.ownerDocument.body);a=c}while(a);gs(n)}function J0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function zf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),Ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Yx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function jx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pi(t.nextSibling),t===null))return null;return t}function $0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=pi(t.nextSibling),t===null))return null;return t}function Bf(t){return t.data==="$?"||t.data==="$~"}function If(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Zx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function pi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Hf=null;function tg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return pi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function eg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function ng(t,n,a){switch(n=Yl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ws(t)}var mi=new Map,ig=new Set;function jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=z.d;z.d={f:Kx,r:Qx,D:Jx,C:$x,L:tS,m:eS,X:iS,S:nS,M:aS};function Kx(){var t=ua.f(),n=Il();return t||n}function Qx(t){var n=Aa(t);n!==null&&n.tag===5&&n.type==="form"?Sm(n):ua.r(t)}var hs=typeof document>"u"?null:document;function ag(t,n,a){var s=hs;if(s&&typeof n=="string"&&n){var c=Le(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),ig.has(c)||(ig.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Cn(n,"link",t),un(n),s.head.appendChild(n)))}}function Jx(t){ua.D(t),ag("dns-prefetch",t,null)}function $x(t,n){ua.C(t,n),ag("preconnect",t,n)}function tS(t,n,a){ua.L(t,n,a);var s=hs;if(s&&t&&n){var c='link[rel="preload"][as="'+Le(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Le(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Le(a.imageSizes)+'"]')):c+='[href="'+Le(t)+'"]';var f=c;switch(n){case"style":f=ps(t);break;case"script":f=ms(t)}mi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),mi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(Co(f))||n==="script"&&s.querySelector(wo(f))||(n=s.createElement("link"),Cn(n,"link",t),un(n),s.head.appendChild(n)))}}function eS(t,n){ua.m(t,n);var a=hs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Le(s)+'"][href="'+Le(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ms(t)}if(!mi.has(f)&&(t=v({rel:"modulepreload",href:t},n),mi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}s=a.createElement("link"),Cn(s,"link",t),un(s),a.head.appendChild(s)}}}function nS(t,n,a){ua.S(t,n,a);var s=hs;if(s&&t){var c=Ra(s).hoistableStyles,f=ps(t);n=n||"default";var g=c.get(f);if(!g){var R={loading:0,preload:null};if(g=s.querySelector(Co(f)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=mi.get(f))&&Gf(t,a);var B=g=s.createElement("link");un(B),Cn(B,"link",t),B._p=new Promise(function(tt,dt){B.onload=tt,B.onerror=dt}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Zl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:R},c.set(f,g)}}}function iS(t,n){ua.X(t,n);var a=hs;if(a&&t){var s=Ra(a).hoistableScripts,c=ms(t),f=s.get(c);f||(f=a.querySelector(wo(c)),f||(t=v({src:t,async:!0},n),(n=mi.get(c))&&Vf(t,n),f=a.createElement("script"),un(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function aS(t,n){ua.M(t,n);var a=hs;if(a&&t){var s=Ra(a).hoistableScripts,c=ms(t),f=s.get(c);f||(f=a.querySelector(wo(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=mi.get(c))&&Vf(t,n),f=a.createElement("script"),un(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function rg(t,n,a,s){var c=(c=st.current)?jl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ps(a.href),a=Ra(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ps(a.href);var f=Ra(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(Co(t)))&&!f._p&&(g.instance=f,g.state.loading=5),mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(t,a),f||rS(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ms(a),a=Ra(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ps(t){return'href="'+Le(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function sg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function rS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Cn(n,"link",a),un(n),t.head.appendChild(n))}function ms(t){return'[src="'+Le(t)+'"]'}function wo(t){return"script[async]"+t}function og(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Le(a.href)+'"]');if(s)return n.instance=s,un(s),s;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),un(s),Cn(s,"style",c),Zl(s,a.precedence,t),n.instance=s;case"stylesheet":c=ps(a.href);var f=t.querySelector(Co(c));if(f)return n.state.loading|=4,n.instance=f,un(f),f;s=sg(a),(c=mi.get(c))&&Gf(s,c),f=(t.ownerDocument||t).createElement("link"),un(f);var g=f;return g._p=new Promise(function(R,B){g.onload=R,g.onerror=B}),Cn(f,"link",s),n.state.loading|=4,Zl(f,a.precedence,t),n.instance=f;case"script":return f=ms(a.src),(c=t.querySelector(wo(f)))?(n.instance=c,un(c),c):(s=a,(c=mi.get(f))&&(s=v({},a),Vf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),un(c),Cn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Zl(s,a.precedence,t));return n.instance}function Zl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var R=s[g];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Kl=null;function lg(t,n,a){if(Kl===null){var s=new Map,c=Kl=new Map;c.set(a,s)}else c=Kl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ba]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var R=s.get(g);R?R.push(f):s.set(g,[f])}}return s}function cg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function sS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ug(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function oS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ps(s.href),f=n.querySelector(Co(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ql.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,un(f);return}f=n.ownerDocument||n,s=sg(s),(c=mi.get(c))&&Gf(s,c),f=f.createElement("link"),un(f);var g=f;g._p=new Promise(function(R,B){g.onload=R,g.onerror=B}),Cn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ql.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var kf=0;function lS(t,n){return t.stylesheets&&t.count===0&&$l(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&kf===0&&(kf=62500*Vx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>kf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Jl=null;function $l(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Jl=new Map,n.forEach(cS,t),Jl=null,Ql.call(t))}function cS(t,n){if(!(n.state.loading&4)){var a=Jl.get(t);if(a)var s=a.get(null);else{a=new Map,Jl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Ql.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:L,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function uS(t,n,a,s,c,f,g,R,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.hiddenUpdates=qt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function fg(t,n,a,s,c,f,g,R,B,tt,dt,vt){return t=new uS(t,n,a,g,B,tt,dt,vt,R),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),t.current=f,f.stateNode=t,n=yu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Tu(f),t}function dg(t){return t?(t=qr,t):qr}function hg(t,n,a,s,c,f){c=dg(c),s.context===null?s.context=c:s.pendingContext=c,s=Fa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Pa(t,s,n),a!==null&&(Xn(a,t,n),oo(a,t,n))}function pg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Xf(t,n){pg(t,n),(t=t.alternate)&&pg(t,n)}function mg(t){if(t.tag===13||t.tag===31){var n=hr(t,67108864);n!==null&&Xn(n,t,67108864),Xf(t,67108864)}}function gg(t){if(t.tag===13||t.tag===31){var n=ni();n=or(n);var a=hr(t,n);a!==null&&Xn(a,t,n),Xf(t,n)}}var tc=!0;function fS(t,n,a,s){var c=U.T;U.T=null;var f=z.p;try{z.p=2,Wf(t,n,a,s)}finally{z.p=f,U.T=c}}function dS(t,n,a,s){var c=U.T;U.T=null;var f=z.p;try{z.p=8,Wf(t,n,a,s)}finally{z.p=f,U.T=c}}function Wf(t,n,a,s){if(tc){var c=qf(s);if(c===null)Uf(t,n,s,ec,a),vg(t,s);else if(pS(c,t,n,a,s))s.stopPropagation();else if(vg(t,s),n&4&&-1<hS.indexOf(t)){for(;c!==null;){var f=Aa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Tt(f.pendingLanes);if(g!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;g;){var B=1<<31-Ft(g);R.entanglements[1]|=B,g&=~B}Pi(f),(Ce&6)===0&&(zl=Rt()+500,bo(0))}}break;case 31:case 13:R=hr(f,2),R!==null&&Xn(R,f,2),Il(),Xf(f,2)}if(f=qf(s),f===null&&Uf(t,n,s,ec,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Uf(t,n,s,null,a)}}function qf(t){return t=Yc(t),Yf(t)}var ec=null;function Yf(t){if(ec=null,t=Ta(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ec=t,null}function _g(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ze()){case C:return 2;case E:return 8;case Z:case _t:return 32;case Et:return 268435456;default:return 32}default:return 32}}var jf=!1,Ya=null,ja=null,Za=null,Uo=new Map,Lo=new Map,Ka=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vg(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Aa(n),n!==null&&mg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function pS(t,n,a,s,c){switch(n){case"focusin":return Ya=No(Ya,t,n,a,s,c),!0;case"dragenter":return ja=No(ja,t,n,a,s,c),!0;case"mouseover":return Za=No(Za,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Uo.set(f,No(Uo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Lo.set(f,No(Lo.get(f)||null,t,n,a,s,c)),!0}return!1}function xg(t){var n=Ta(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,ks(t.priority,function(){gg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,ks(t.priority,function(){gg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);qc=s,a.target.dispatchEvent(s),qc=null}else return n=Aa(a),n!==null&&mg(n),t.blockedOn=a,!1;n.shift()}return!0}function Sg(t,n,a){nc(t)&&a.delete(n)}function mS(){jf=!1,Ya!==null&&nc(Ya)&&(Ya=null),ja!==null&&nc(ja)&&(ja=null),Za!==null&&nc(Za)&&(Za=null),Uo.forEach(Sg),Lo.forEach(Sg)}function ic(t,n){t.blockedOn===n&&(t.blockedOn=null,jf||(jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,mS)))}var ac=null;function yg(t){ac!==t&&(ac=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ac===t&&(ac=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Yf(s||a)===null)continue;break}var f=Aa(a);f!==null&&(t.splice(n,3),n-=3,Wu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function gs(t){function n(B){return ic(B,t)}Ya!==null&&ic(Ya,t),ja!==null&&ic(ja,t),Za!==null&&ic(Za,t),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Ka.length;a++){var s=Ka[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)xg(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[bn]||null;if(typeof f=="function")g||yg(a);else if(g){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[bn]||null)R=g.formAction;else if(Yf(c)!==null)continue}else R=g.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),yg(a)}}}function Mg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Zf(t){this._internalRoot=t}rc.prototype.render=Zf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ni();hg(a,s,t,n,null,null)},rc.prototype.unmount=Zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;hg(t.current,2,null,t,null,null),Il(),n[Yi]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Vs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&xg(t)}};var Eg=e.version;if(Eg!=="19.2.7")throw Error(r(527,Eg,"19.2.7"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var gS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{ct=sc.inject(gS),ut=sc}catch{}}return Fo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Dm,f=Um,g=Lm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=fg(t,1,!1,null,null,a,s,null,c,f,g,Mg),t[Yi]=n.current,Df(t),new Zf(n)},Fo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Dm,g=Um,R=Lm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=fg(t,1,!0,n,a??null,s,c,B,f,g,R,Mg),n.context=dg(null),a=n.current,s=ni(),s=or(s),c=Fa(s),c.callback=null,Pa(a,c,s),a=s,n.current.lanes=a,te(n,a),Pi(n),t[Yi]=n.current,Df(t),new rc(n)},Fo.version="19.2.7",Fo}var Ng;function AS(){if(Ng)return Qf.exports;Ng=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Qf.exports=TS(),Qf.exports}var RS=AS(),ln=Rh();const Ch="184",CS=0,Og=1,wS=2,Dc=1,DS=2,ko=3,sr=0,qn=1,Hi=2,_a=0,Ls=1,Fg=2,Pg=3,zg=4,US=5,Ur=100,LS=101,NS=102,OS=103,FS=104,PS=200,zS=201,BS=202,IS=203,Pd=204,zd=205,HS=206,GS=207,VS=208,kS=209,XS=210,WS=211,qS=212,YS=213,jS=214,Bd=0,Id=1,Hd=2,Os=3,Gd=4,Vd=5,kd=6,Xd=7,O_=0,ZS=1,KS=2,ki=0,F_=1,P_=2,z_=3,B_=4,I_=5,H_=6,G_=7,V_=300,Fr=301,Fs=302,nd=303,id=304,Vc=306,Wd=1e3,ga=1001,qd=1002,wn=1003,QS=1004,oc=1005,Fn=1006,ad=1007,Nr=1008,vi=1009,k_=1010,X_=1011,Wo=1012,wh=1013,qi=1014,Gi=1015,Sa=1016,Dh=1017,Uh=1018,qo=1020,W_=35902,q_=35899,Y_=1021,j_=1022,Ci=1023,ya=1026,Or=1027,Z_=1028,Lh=1029,Pr=1030,Nh=1031,Oh=1033,Uc=33776,Lc=33777,Nc=33778,Oc=33779,Yd=35840,jd=35841,Zd=35842,Kd=35843,Qd=36196,Jd=37492,$d=37496,th=37488,eh=37489,Pc=37490,nh=37491,ih=37808,ah=37809,rh=37810,sh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,_h=36492,vh=36494,xh=36495,Sh=36283,yh=36284,zc=36285,Mh=36286,JS=3200,Bg=0,$S=1,ar="",ri="srgb",Bc="srgb-linear",Ic="linear",Pe="srgb",_s=7680,Ig=519,ty=512,ey=513,ny=514,Fh=515,iy=516,ay=517,Ph=518,ry=519,Hg=35044,Gg="300 es",Vi=2e3,Hc=2001;function sy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Yo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function oy(){const o=Yo("canvas");return o.style.display="block",o}const Vg={};function kg(...o){const e="THREE."+o.shift();console.log(e,...o)}function K_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ee(...o){o=K_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ee(...o){o=K_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Eh(...o){const e=o.join(" ");e in Vg||(Vg[e]=!0,ee(...o))}function ly(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const cy={[Bd]:Id,[Hd]:kd,[Gd]:Xd,[Os]:Vd,[Id]:Bd,[kd]:Hd,[Xd]:Gd,[Vd]:Os};class Br{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,bh=180/Math.PI;function jo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function uy(o,e){return(o%e+e)%e}function sd(o,e,i){return(1-i)*o+i*e}function Po(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Wn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Gh=class Gh{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gh.prototype.isVector2=!0;let Ve=Gh;class Is{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],v=r[l+3],_=u[d+0],M=u[d+1],T=u[d+2],D=u[d+3];if(v!==D||m!==_||p!==M||x!==T){let y=m*_+p*M+x*T+v*D;y<0&&(_=-_,M=-M,T=-T,D=-D,y=-y);let S=1-h;if(y<.9995){const w=Math.acos(y),L=Math.sin(w);S=Math.sin(S*w)/L,h=Math.sin(h*w)/L,m=m*S+_*h,p=p*S+M*h,x=x*S+T*h,v=v*S+D*h}else{m=m*S+_*h,p=p*S+M*h,x=x*S+T*h,v=v*S+D*h;const w=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=w,p*=w,x*=w,v*=w}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],v=u[d],_=u[d+1],M=u[d+2],T=u[d+3];return e[i]=h*T+x*v+m*M-p*_,e[i+1]=m*T+x*_+p*v-h*M,e[i+2]=p*T+x*M+h*_-m*v,e[i+3]=x*T-h*v-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),v=h(u/2),_=m(r/2),M=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=_*x*v+p*M*T,this._y=p*M*v-_*x*T,this._z=p*x*T+_*M*v,this._w=p*x*v-_*M*T;break;case"YXZ":this._x=_*x*v+p*M*T,this._y=p*M*v-_*x*T,this._z=p*x*T-_*M*v,this._w=p*x*v+_*M*T;break;case"ZXY":this._x=_*x*v-p*M*T,this._y=p*M*v+_*x*T,this._z=p*x*T+_*M*v,this._w=p*x*v-_*M*T;break;case"ZYX":this._x=_*x*v-p*M*T,this._y=p*M*v+_*x*T,this._z=p*x*T-_*M*v,this._w=p*x*v+_*M*T;break;case"YZX":this._x=_*x*v+p*M*T,this._y=p*M*v+_*x*T,this._z=p*x*T-_*M*v,this._w=p*x*v-_*M*T;break;case"XZY":this._x=_*x*v-p*M*T,this._y=p*M*v-_*x*T,this._z=p*x*T+_*M*v,this._w=p*x*v+_*M*T;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],v=i[10],_=r+h+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(x-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>v){const M=2*Math.sqrt(1+r-h-v);this._w=(x-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-r-v);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+v-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-u*m,this._y=l*x+d*m+u*h-r*p,this._z=u*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vh=class Vh{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Xg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Xg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),x=2*(h*i-u*l),v=2*(u*r-d*i);return this.x=i+m*p+d*v-h*x,this.y=r+m*x+h*p-u*v,this.z=l+m*v+u*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vh.prototype.isVector3=!0;let it=Vh;const od=new it,Xg=new Is,kh=class kh{constructor(e,i,r,l,u,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],v=r[7],_=r[2],M=r[5],T=r[8],D=l[0],y=l[3],S=l[6],w=l[1],L=l[4],O=l[7],V=l[2],F=l[5],I=l[8];return u[0]=d*D+h*w+m*V,u[3]=d*y+h*L+m*F,u[6]=d*S+h*O+m*I,u[1]=p*D+x*w+v*V,u[4]=p*y+x*L+v*F,u[7]=p*S+x*O+v*I,u[2]=_*D+M*w+T*V,u[5]=_*y+M*L+T*F,u[8]=_*S+M*O+T*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*d*x-i*h*p-r*u*x+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],v=x*d-h*p,_=h*m-x*u,M=p*u-d*m,T=i*v+r*_+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return e[0]=v*D,e[1]=(l*p-x*r)*D,e[2]=(h*r-l*d)*D,e[3]=_*D,e[4]=(x*i-l*m)*D,e[5]=(l*u-h*i)*D,e[6]=M*D,e[7]=(r*m-p*i)*D,e[8]=(d*i-r*u)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(ld.makeScale(e,i)),this}rotate(e){return this.premultiply(ld.makeRotation(-e)),this}translate(e,i){return this.premultiply(ld.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};kh.prototype.isMatrix3=!0;let re=kh;const ld=new re,Wg=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qg=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fy(){const o={enabled:!0,workingColorSpace:Bc,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Pe&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Pe&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ar?Ic:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Eh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Eh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Bc]:{primaries:e,whitePoint:r,transfer:Ic,toXYZ:Wg,fromXYZ:qg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Pe,toXYZ:Wg,fromXYZ:qg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const ye=fy();function va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ns(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vs;class dy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{vs===void 0&&(vs=Yo("canvas")),vs.width=e.width,vs.height=e.height;const l=vs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yo("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=va(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(va(i[r]/255)*255):i[r]=va(i[r]);return{data:i,width:e.width,height:e.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hy=0;class zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(cd(l[d].image)):u.push(cd(l[d]))}else u=cd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function cd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?dy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let py=0;const ud=new it;class Pn extends Br{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=ga,l=ga,u=Fn,d=Nr,h=Ci,m=vi,p=Pn.DEFAULT_ANISOTROPY,x=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=jo(),this.name="",this.source=new zh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ee(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==V_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wd:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wd:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=V_;Pn.DEFAULT_ANISOTROPY=1;const Xh=class Xh{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],x=m[4],v=m[8],_=m[1],M=m[5],T=m[9],D=m[2],y=m[6],S=m[10];if(Math.abs(x-_)<.01&&Math.abs(v-D)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+D)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,O=(M+1)/2,V=(S+1)/2,F=(x+_)/4,I=(v+D)/4,b=(T+y)/4;return L>O&&L>V?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=F/r,u=I/r):O>V?O<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),r=F/l,u=b/l):V<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),r=I/u,l=b/u),this.set(r,l,u,i),this}let w=Math.sqrt((y-T)*(y-T)+(v-D)*(v-D)+(_-x)*(_-x));return Math.abs(w)<.001&&(w=1),this.x=(y-T)/w,this.y=(v-D)/w,this.z=(_-x)/w,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xh.prototype.isVector4=!0;let cn=Xh;class my extends Br{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new Pn(l),d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new zh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends my{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Q_ extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gy extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gc=class Gc{constructor(e,i,r,l,u,d,h,m,p,x,v,_,M,T,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,x,v,_,M,T,D,y)}set(e,i,r,l,u,d,h,m,p,x,v,_,M,T,D,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=u,S[5]=d,S[9]=h,S[13]=m,S[2]=p,S[6]=x,S[10]=v,S[14]=_,S[3]=M,S[7]=T,S[11]=D,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/xs.setFromMatrixColumn(e,0).length(),u=1/xs.setFromMatrixColumn(e,1).length(),d=1/xs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const _=d*x,M=d*v,T=h*x,D=h*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=_-D*p,i[9]=-h*m,i[2]=D-_*p,i[6]=T+M*p,i[10]=d*m}else if(e.order==="YXZ"){const _=m*x,M=m*v,T=p*x,D=p*v;i[0]=_+D*h,i[4]=T*h-M,i[8]=d*p,i[1]=d*v,i[5]=d*x,i[9]=-h,i[2]=M*h-T,i[6]=D+_*h,i[10]=d*m}else if(e.order==="ZXY"){const _=m*x,M=m*v,T=p*x,D=p*v;i[0]=_-D*h,i[4]=-d*v,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*x,i[9]=D-_*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const _=d*x,M=d*v,T=h*x,D=h*v;i[0]=m*x,i[4]=T*p-M,i[8]=_*p+D,i[1]=m*v,i[5]=D*p+_,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const _=d*m,M=d*p,T=h*m,D=h*p;i[0]=m*x,i[4]=D-_*v,i[8]=T*v+M,i[1]=v,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=M*v+T,i[10]=_-D*v}else if(e.order==="XZY"){const _=d*m,M=d*p,T=h*m,D=h*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=_*v+D,i[5]=d*x,i[9]=M*v-T,i[2]=T*v-M,i[6]=h*x,i[10]=D*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_y,e,vy)}lookAt(e,i,r){const l=this.elements;return ii.subVectors(e,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ja.crossVectors(r,ii),Ja.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ja.crossVectors(r,ii)),Ja.normalize(),lc.crossVectors(ii,Ja),l[0]=Ja.x,l[4]=lc.x,l[8]=ii.x,l[1]=Ja.y,l[5]=lc.y,l[9]=ii.y,l[2]=Ja.z,l[6]=lc.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],v=r[5],_=r[9],M=r[13],T=r[2],D=r[6],y=r[10],S=r[14],w=r[3],L=r[7],O=r[11],V=r[15],F=l[0],I=l[4],b=l[8],P=l[12],K=l[1],H=l[5],J=l[9],ft=l[13],pt=l[2],q=l[6],U=l[10],z=l[14],ot=l[3],gt=l[7],Mt=l[11],N=l[15];return u[0]=d*F+h*K+m*pt+p*ot,u[4]=d*I+h*H+m*q+p*gt,u[8]=d*b+h*J+m*U+p*Mt,u[12]=d*P+h*ft+m*z+p*N,u[1]=x*F+v*K+_*pt+M*ot,u[5]=x*I+v*H+_*q+M*gt,u[9]=x*b+v*J+_*U+M*Mt,u[13]=x*P+v*ft+_*z+M*N,u[2]=T*F+D*K+y*pt+S*ot,u[6]=T*I+D*H+y*q+S*gt,u[10]=T*b+D*J+y*U+S*Mt,u[14]=T*P+D*ft+y*z+S*N,u[3]=w*F+L*K+O*pt+V*ot,u[7]=w*I+L*H+O*q+V*gt,u[11]=w*b+L*J+O*U+V*Mt,u[15]=w*P+L*ft+O*z+V*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],v=e[6],_=e[10],M=e[14],T=e[3],D=e[7],y=e[11],S=e[15],w=m*M-p*_,L=h*M-p*v,O=h*_-m*v,V=d*M-p*x,F=d*_-m*x,I=d*v-h*x;return i*(D*w-y*L+S*O)-r*(T*w-y*V+S*F)+l*(T*L-D*V+S*I)-u*(T*O-D*F+y*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],v=e[9],_=e[10],M=e[11],T=e[12],D=e[13],y=e[14],S=e[15],w=i*h-r*d,L=i*m-l*d,O=i*p-u*d,V=r*m-l*h,F=r*p-u*h,I=l*p-u*m,b=x*D-v*T,P=x*y-_*T,K=x*S-M*T,H=v*y-_*D,J=v*S-M*D,ft=_*S-M*y,pt=w*ft-L*J+O*H+V*K-F*P+I*b;if(pt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/pt;return e[0]=(h*ft-m*J+p*H)*q,e[1]=(l*J-r*ft-u*H)*q,e[2]=(D*I-y*F+S*V)*q,e[3]=(_*F-v*I-M*V)*q,e[4]=(m*K-d*ft-p*P)*q,e[5]=(i*ft-l*K+u*P)*q,e[6]=(y*O-T*I-S*L)*q,e[7]=(x*I-_*O+M*L)*q,e[8]=(d*J-h*K+p*b)*q,e[9]=(r*K-i*J-u*b)*q,e[10]=(T*F-D*O+S*w)*q,e[11]=(v*O-x*F-M*w)*q,e[12]=(h*P-d*H-m*b)*q,e[13]=(i*H-r*P+l*b)*q,e[14]=(D*L-T*V-y*w)*q,e[15]=(x*V-v*L+_*w)*q,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,x=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,x=d+d,v=h+h,_=u*p,M=u*x,T=u*v,D=d*x,y=d*v,S=h*v,w=m*p,L=m*x,O=m*v,V=r.x,F=r.y,I=r.z;return l[0]=(1-(D+S))*V,l[1]=(M+O)*V,l[2]=(T-L)*V,l[3]=0,l[4]=(M-O)*F,l[5]=(1-(_+S))*F,l[6]=(y+w)*F,l[7]=0,l[8]=(T+L)*I,l[9]=(y-w)*I,l[10]=(1-(_+D))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return r.set(1,1,1),i.identity(),this;let d=xs.set(l[0],l[1],l[2]).length();const h=xs.set(l[4],l[5],l[6]).length(),m=xs.set(l[8],l[9],l[10]).length();u<0&&(d=-d),bi.copy(this);const p=1/d,x=1/h,v=1/m;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=x,bi.elements[5]*=x,bi.elements[6]*=x,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,i.setFromRotationMatrix(bi),r.x=d,r.y=h,r.z=m,this}makePerspective(e,i,r,l,u,d,h=Vi,m=!1){const p=this.elements,x=2*u/(i-e),v=2*u/(r-l),_=(i+e)/(i-e),M=(r+l)/(r-l);let T,D;if(m)T=u/(d-u),D=d*u/(d-u);else if(h===Vi)T=-(d+u)/(d-u),D=-2*d*u/(d-u);else if(h===Hc)T=-d/(d-u),D=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Vi,m=!1){const p=this.elements,x=2/(i-e),v=2/(r-l),_=-(i+e)/(i-e),M=-(r+l)/(r-l);let T,D;if(m)T=1/(d-u),D=d/(d-u);else if(h===Vi)T=-2/(d-u),D=-(d+u)/(d-u);else if(h===Hc)T=-1/(d-u),D=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Gc.prototype.isMatrix4=!0;let vn=Gc;const xs=new it,bi=new vn,_y=new it(0,0,0),vy=new it(1,1,1),Ja=new it,lc=new it,ii=new it,Yg=new vn,jg=new Is;class zr{constructor(e=0,i=0,r=0,l=zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],v=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return jg.setFromEuler(this),this.setFromQuaternion(jg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zr.DEFAULT_ORDER="XYZ";class J_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xy=0;const Zg=new it,Ss=new Is,fa=new vn,cc=new it,zo=new it,Sy=new it,yy=new Is,Kg=new it(1,0,0),Qg=new it(0,1,0),Jg=new it(0,0,1),$g={type:"added"},My={type:"removed"},ys={type:"childadded",child:null},fd={type:"childremoved",child:null};class si extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const e=new it,i=new zr,r=new Is,l=new it(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new vn},normalMatrix:{value:new re}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new J_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Kg,e)}rotateY(e){return this.rotateOnAxis(Qg,e)}rotateZ(e){return this.rotateOnAxis(Jg,e)}translateOnAxis(e,i){return Zg.copy(e).applyQuaternion(this.quaternion),this.position.add(Zg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Kg,e)}translateY(e){return this.translateOnAxis(Qg,e)}translateZ(e){return this.translateOnAxis(Jg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?cc.copy(e):cc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(zo,cc,this.up):fa.lookAt(cc,zo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Ss.setFromRotationMatrix(fa),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ee("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($g),ys.child=e,this.dispatchEvent(ys),ys.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(My),fd.child=e,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($g),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,Sy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,yy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),v=d(e.shapes),_=d(e.skeletons),M=d(e.animations),T=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}si.DEFAULT_UP=new it(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class uc extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ey={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const D of e.hand.values()){const y=i.getJointPose(D,r),S=this._getHandJoint(p,D);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=x.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&_>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ey)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new uc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const $_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},fc={h:0,s:0,l:0};function hd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ge{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ye.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=ye.workingColorSpace){return this.r=e,this.g=i,this.b=r,ye.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=ye.workingColorSpace){if(e=uy(e,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=hd(d,u,e+1/3),this.g=hd(d,u,e),this.b=hd(d,u,e-1/3)}return ye.colorSpaceToWorking(this,l),this}setStyle(e,i=ri){function r(u){u!==void 0&&parseFloat(u)<1&&ee("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ee("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const r=$_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return ye.workingToColorSpace(On.copy(this),e),Math.round(Me(On.r*255,0,255))*65536+Math.round(Me(On.g*255,0,255))*256+Math.round(Me(On.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ye.workingColorSpace){ye.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,u=On.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=x<=.5?v/(d+h):v/(2-d-h),d){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=ye.workingColorSpace){return ye.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=ri){ye.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL($a),this.setHSL($a.h+e,$a.s+i,$a.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL($a),e.getHSL(fc);const r=sd($a.h,fc.h,i),l=sd($a.s,fc.s,i),u=sd($a.l,fc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ge;Ge.NAMES=$_;class by extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zr,this.environmentIntensity=1,this.environmentRotation=new zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ti=new it,da=new it,pd=new it,ha=new it,Ms=new it,Es=new it,t_=new it,md=new it,gd=new it,_d=new it,vd=new cn,xd=new cn,Sd=new cn;class Ri{constructor(e=new it,i=new it,r=new it){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ti.subVectors(e,i),l.cross(Ti);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Ti.subVectors(l,i),da.subVectors(r,i),pd.subVectors(e,i);const d=Ti.dot(Ti),h=Ti.dot(da),m=Ti.dot(pd),p=da.dot(da),x=da.dot(pd),v=d*p-h*h;if(v===0)return u.set(0,0,0),null;const _=1/v,M=(p*m-h*x)*_,T=(d*x-h*m)*_;return u.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ha.x),m.addScaledVector(d,ha.y),m.addScaledVector(h,ha.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return vd.setScalar(0),xd.setScalar(0),Sd.setScalar(0),vd.fromBufferAttribute(e,i),xd.fromBufferAttribute(e,r),Sd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(vd,u.x),d.addScaledVector(xd,u.y),d.addScaledVector(Sd,u.z),d}static isFrontFacing(e,i,r,l){return Ti.subVectors(r,i),da.subVectors(e,i),Ti.cross(da).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ti.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ri.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ri.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;Ms.subVectors(l,r),Es.subVectors(u,r),md.subVectors(e,r);const m=Ms.dot(md),p=Es.dot(md);if(m<=0&&p<=0)return i.copy(r);gd.subVectors(e,l);const x=Ms.dot(gd),v=Es.dot(gd);if(x>=0&&v<=x)return i.copy(l);const _=m*v-x*p;if(_<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(Ms,d);_d.subVectors(e,u);const M=Ms.dot(_d),T=Es.dot(_d);if(T>=0&&M<=T)return i.copy(u);const D=M*p-m*T;if(D<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(Es,h);const y=x*T-M*v;if(y<=0&&v-x>=0&&M-T>=0)return t_.subVectors(u,l),h=(v-x)/(v-x+(M-T)),i.copy(l).addScaledVector(t_,h);const S=1/(y+D+_);return d=D*S,h=_*S,i.copy(r).addScaledVector(Ms,d).addScaledVector(Es,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Zo{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ai.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ai.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ai.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ai):Ai.fromBufferAttribute(u,d),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dc.copy(r.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),hc.subVectors(this.max,Bo),bs.subVectors(e.a,Bo),Ts.subVectors(e.b,Bo),As.subVectors(e.c,Bo),tr.subVectors(Ts,bs),er.subVectors(As,Ts),Ar.subVectors(bs,As);let i=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Ar.z,Ar.y,tr.z,0,-tr.x,er.z,0,-er.x,Ar.z,0,-Ar.x,-tr.y,tr.x,0,-er.y,er.x,0,-Ar.y,Ar.x,0];return!yd(i,bs,Ts,As,hc)||(i=[1,0,0,0,1,0,0,0,1],!yd(i,bs,Ts,As,hc))?!1:(pc.crossVectors(tr,er),i=[pc.x,pc.y,pc.z],yd(i,bs,Ts,As,hc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pa=[new it,new it,new it,new it,new it,new it,new it,new it],Ai=new it,dc=new Zo,bs=new it,Ts=new it,As=new it,tr=new it,er=new it,Ar=new it,Bo=new it,hc=new it,pc=new it,Rr=new it;function yd(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){Rr.fromArray(o,u);const h=l.x*Math.abs(Rr.x)+l.y*Math.abs(Rr.y)+l.z*Math.abs(Rr.z),m=e.dot(Rr),p=i.dot(Rr),x=r.dot(Rr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const mn=new it,mc=new Ve;let Ty=0;class Wi extends Br{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ty++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Hg,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(e),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Po(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array),u=Wn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class tv extends Wi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class ev extends Wi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class xa extends Wi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const Ay=new Zo,Io=new it,Md=new it;class Bh{constructor(e=new it,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Ay.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Io,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Md)),this.expandByPoint(Io.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ry=0;const gi=new vn,Ed=new si,Rs=new it,ai=new Zo,Ho=new Zo,Mn=new it;class Ma extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sy(e)?ev:tv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new re().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,i,r){return gi.makeTranslation(e,i,r),this.applyMatrix4(gi),this}scale(e,i,r){return gi.makeScale(e,i,r),this.applyMatrix4(gi),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new xa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ai.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ai.min,Ho.min),ai.expandByPoint(Mn),Mn.addVectors(ai.max,Ho.max),ai.expandByPoint(Mn)):(ai.expandByPoint(Ho.min),ai.expandByPoint(Ho.max))}ai.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Mn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Mn.fromBufferAttribute(h,p),m&&(Rs.fromBufferAttribute(e,p),Mn.add(Rs)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let b=0;b<r.count;b++)h[b]=new it,m[b]=new it;const p=new it,x=new it,v=new it,_=new Ve,M=new Ve,T=new Ve,D=new it,y=new it;function S(b,P,K){p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,P),v.fromBufferAttribute(r,K),_.fromBufferAttribute(u,b),M.fromBufferAttribute(u,P),T.fromBufferAttribute(u,K),x.sub(p),v.sub(p),M.sub(_),T.sub(_);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(D.copy(x).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(H),y.copy(v).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(H),h[b].add(D),h[P].add(D),h[K].add(D),m[b].add(y),m[P].add(y),m[K].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let b=0,P=w.length;b<P;++b){const K=w[b],H=K.start,J=K.count;for(let ft=H,pt=H+J;ft<pt;ft+=3)S(e.getX(ft+0),e.getX(ft+1),e.getX(ft+2))}const L=new it,O=new it,V=new it,F=new it;function I(b){V.fromBufferAttribute(l,b),F.copy(V);const P=h[b];L.copy(P),L.sub(V.multiplyScalar(V.dot(P))).normalize(),O.crossVectors(F,P);const H=O.dot(m[b])<0?-1:1;d.setXYZW(b,L.x,L.y,L.z,H)}for(let b=0,P=w.length;b<P;++b){const K=w[b],H=K.start,J=K.count;for(let ft=H,pt=H+J;ft<pt;ft+=3)I(e.getX(ft+0)),I(e.getX(ft+1)),I(e.getX(ft+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const l=new it,u=new it,d=new it,h=new it,m=new it,p=new it,x=new it,v=new it;if(e)for(let _=0,M=e.count;_<M;_+=3){const T=e.getX(_+0),D=e.getX(_+1),y=e.getX(_+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,D),d.fromBufferAttribute(i,y),x.subVectors(d,u),v.subVectors(l,u),x.cross(v),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,y),h.add(x),m.add(x),p.add(x),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),x.subVectors(d,u),v.subVectors(l,u),x.cross(v),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,v=h.normalized,_=new p.constructor(m.length*x);let M=0,T=0;for(let D=0,y=m.length;D<y;D++){h.isInterleavedBufferAttribute?M=m[D]*h.data.stride+h.offset:M=m[D]*x;for(let S=0;S<x;S++)_[T++]=p[M++]}return new Wi(_,x,v)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ma,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let x=0,v=p.length;x<v;x++){const _=p[x],M=e(_,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,_=p.length;v<_;v++){const M=p[v];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=e.morphAttributes;for(const p in u){const x=[],v=u[p];for(let _=0,M=v.length;_<M;_++)x.push(v[_].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Cy=0;class kc extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Ls,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=zd,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ee(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(r.blending=this.blending),this.side!==sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Pd&&(r.blendSrc=this.blendSrc),this.blendDst!==zd&&(r.blendDst=this.blendDst),this.blendEquation!==Ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ig&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ma=new it,bd=new it,gc=new it,nr=new it,Td=new it,_c=new it,Ad=new it;class wy{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){bd.copy(e).add(i).multiplyScalar(.5),gc.copy(i).sub(e).normalize(),nr.copy(this.origin).sub(bd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(gc),h=nr.dot(this.direction),m=-nr.dot(gc),p=nr.lengthSq(),x=Math.abs(1-d*d);let v,_,M,T;if(x>0)if(v=d*m-h,_=d*h-m,T=u*x,v>=0)if(_>=-T)if(_<=T){const D=1/x;v*=D,_*=D,M=v*(v+d*_+2*h)+_*(d*v+_+2*m)+p}else _=u,v=Math.max(0,-(d*_+h)),M=-v*v+_*(_+2*m)+p;else _=-u,v=Math.max(0,-(d*_+h)),M=-v*v+_*(_+2*m)+p;else _<=-T?(v=Math.max(0,-(-d*u+h)),_=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+_*(_+2*m)+p):_<=T?(v=0,_=Math.min(Math.max(-u,-m),u),M=_*(_+2*m)+p):(v=Math.max(0,-(d*u+h)),_=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+_*(_+2*m)+p);else _=d>0?-u:u,v=Math.max(0,-(d*_+h)),M=-v*v+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(bd).addScaledVector(gc,_),M}intersectSphere(e,i){ma.subVectors(e.center,this.origin);const r=ma.dot(this.direction),l=ma.dot(ma)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),x>=0?(u=(e.min.y-_.y)*x,d=(e.max.y-_.y)*x):(u=(e.max.y-_.y)*x,d=(e.min.y-_.y)*x),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ma)!==null}intersectTriangle(e,i,r,l,u){Td.subVectors(i,e),_c.subVectors(r,e),Ad.crossVectors(Td,_c);let d=this.direction.dot(Ad),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;nr.subVectors(this.origin,e);const m=h*this.direction.dot(_c.crossVectors(nr,_c));if(m<0)return null;const p=h*this.direction.dot(Td.cross(nr));if(p<0||m+p>d)return null;const x=-h*nr.dot(Ad);return x<0?null:this.at(x/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ih extends kc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.combine=O_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const e_=new vn,Cr=new wy,vc=new Bh,n_=new it,xc=new it,Sc=new it,yc=new it,Rd=new it,Mc=new it,i_=new it,Ec=new it;class wi extends si{constructor(e=new Ma,i=new Ih){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Mc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=h[m],v=u[m];x!==0&&(Rd.fromBufferAttribute(v,e),d?Mc.addScaledVector(Rd,x):Mc.addScaledVector(Rd.sub(i),x))}i.add(Mc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vc.copy(r.boundingSphere),vc.applyMatrix4(u),Cr.copy(e.ray).recast(e.near),!(vc.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(vc,n_)===null||Cr.origin.distanceToSquared(n_)>(e.far-e.near)**2))&&(e_.copy(u).invert(),Cr.copy(e.ray).applyMatrix4(e_),!(r.boundingBox!==null&&Cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Cr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,v=u.attributes.normal,_=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,D=_.length;T<D;T++){const y=_[T],S=d[y.materialIndex],w=Math.max(y.start,M.start),L=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let O=w,V=L;O<V;O+=3){const F=h.getX(O),I=h.getX(O+1),b=h.getX(O+2);l=bc(this,S,e,r,p,x,v,F,I,b),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),D=Math.min(h.count,M.start+M.count);for(let y=T,S=D;y<S;y+=3){const w=h.getX(y),L=h.getX(y+1),O=h.getX(y+2);l=bc(this,d,e,r,p,x,v,w,L,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,D=_.length;T<D;T++){const y=_[T],S=d[y.materialIndex],w=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let O=w,V=L;O<V;O+=3){const F=O,I=O+1,b=O+2;l=bc(this,S,e,r,p,x,v,F,I,b),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),D=Math.min(m.count,M.start+M.count);for(let y=T,S=D;y<S;y+=3){const w=y,L=y+1,O=y+2;l=bc(this,d,e,r,p,x,v,w,L,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Dy(o,e,i,r,l,u,d,h){let m;if(e.side===qn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===sr,h),m===null)return null;Ec.copy(h),Ec.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Ec);return p<i.near||p>i.far?null:{distance:p,point:Ec.clone(),object:o}}function bc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,xc),o.getVertexPosition(m,Sc),o.getVertexPosition(p,yc);const x=Dy(o,e,i,r,xc,Sc,yc,i_);if(x){const v=new it;Ri.getBarycoord(i_,xc,Sc,yc,v),l&&(x.uv=Ri.getInterpolatedAttribute(l,h,m,p,v,new Ve)),u&&(x.uv1=Ri.getInterpolatedAttribute(u,h,m,p,v,new Ve)),d&&(x.normal=Ri.getInterpolatedAttribute(d,h,m,p,v,new it),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new it,materialIndex:0};Ri.getNormal(xc,Sc,yc,_.normal),x.face=_,x.barycoord=v}return x}class Uy extends Pn{constructor(e=null,i=1,r=1,l,u,d,h,m,p=wn,x=wn,v,_){super(null,d,h,m,p,x,l,u,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cd=new it,Ly=new it,Ny=new re;class Dr{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Cd.subVectors(r,i).cross(Ly.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Cd),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Ny.getNormalMatrix(e),l=this.coplanarPoint(Cd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new Bh,Oy=new Ve(.5,.5),Tc=new it;class nv{constructor(e=new Dr,i=new Dr,r=new Dr,l=new Dr,u=new Dr,d=new Dr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Vi,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],x=u[4],v=u[5],_=u[6],M=u[7],T=u[8],D=u[9],y=u[10],S=u[11],w=u[12],L=u[13],O=u[14],V=u[15];if(l[0].setComponents(p-d,M-x,S-T,V-w).normalize(),l[1].setComponents(p+d,M+x,S+T,V+w).normalize(),l[2].setComponents(p+h,M+v,S+D,V+L).normalize(),l[3].setComponents(p-h,M-v,S-D,V-L).normalize(),r)l[4].setComponents(m,_,y,O).normalize(),l[5].setComponents(p-m,M-_,S-y,V-O).normalize();else if(l[4].setComponents(p-m,M-_,S-y,V-O).normalize(),i===Vi)l[5].setComponents(p+m,M+_,S+y,V+O).normalize();else if(i===Hc)l[5].setComponents(m,_,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);const i=Oy.distanceTo(e.center);return wr.radius=.7071067811865476+i,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tc.x=l.normal.x>0?e.max.x:e.min.x,Tc.y=l.normal.y>0?e.max.y:e.min.y,Tc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iv extends Pn{constructor(e=[],i=Fr,r,l,u,d,h,m,p,x){super(e,i,r,l,u,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ps extends Pn{constructor(e,i,r=qi,l,u,d,h=wn,m=wn,p,x=ya,v=1){if(x!==ya&&x!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,l,u,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Fy extends Ps{constructor(e,i=qi,r=Fr,l,u,d=wn,h=wn,m,p=ya){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,i,r,l,u,d,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class av extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ko extends Ma{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],x=[],v=[];let _=0,M=0;T("z","y","x",-1,-1,r,i,e,d,u,0),T("z","y","x",1,-1,r,i,-e,d,u,1),T("x","z","y",1,1,e,r,i,l,d,2),T("x","z","y",1,-1,e,r,-i,l,d,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new xa(p,3)),this.setAttribute("normal",new xa(x,3)),this.setAttribute("uv",new xa(v,2));function T(D,y,S,w,L,O,V,F,I,b,P){const K=O/I,H=V/b,J=O/2,ft=V/2,pt=F/2,q=I+1,U=b+1;let z=0,ot=0;const gt=new it;for(let Mt=0;Mt<U;Mt++){const N=Mt*H-ft;for(let Q=0;Q<q;Q++){const xt=Q*K-J;gt[D]=xt*w,gt[y]=N*L,gt[S]=pt,p.push(gt.x,gt.y,gt.z),gt[D]=0,gt[y]=0,gt[S]=F>0?1:-1,x.push(gt.x,gt.y,gt.z),v.push(Q/I),v.push(1-Mt/b),z+=1}}for(let Mt=0;Mt<b;Mt++)for(let N=0;N<I;N++){const Q=_+N+q*Mt,xt=_+N+q*(Mt+1),At=_+(N+1)+q*(Mt+1),Dt=_+(N+1)+q*Mt;m.push(Q,xt,Dt),m.push(xt,At,Dt),ot+=6}h.addGroup(M,ot,P),M+=ot,_+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zs extends Ma{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,v=e/h,_=i/m,M=[],T=[],D=[],y=[];for(let S=0;S<x;S++){const w=S*_-d;for(let L=0;L<p;L++){const O=L*v-u;T.push(O,-w,0),D.push(0,0,1),y.push(L/h),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<h;w++){const L=w+p*S,O=w+p*(S+1),V=w+1+p*(S+1),F=w+1+p*S;M.push(L,O,F),M.push(O,V,F)}this.setIndex(M),this.setAttribute("position",new xa(T,3)),this.setAttribute("normal",new xa(D,3)),this.setAttribute("uv",new xa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Bs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];if(a_(l))l.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(a_(l[0])){const u=[];for(let d=0,h=l.length;d<h;d++)u[d]=l[d].clone();e[i][r]=u}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Bn(o){const e={};for(let i=0;i<o.length;i++){const r=Bs(o[i]);for(const l in r)e[l]=r[l]}return e}function a_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function Py(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function rv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ye.workingColorSpace}const zy={clone:Bs,merge:Bn};var By=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends kc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=By,this.fragmentShader=Iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Hy extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gy extends kc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vy extends kc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wd={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(r_(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!r_(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function r_(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class ky{constructor(e,i,r){const l=this;let u=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(x){h++,u===!1&&l.onStart!==void 0&&l.onStart(x,d,h),u=!0},this.itemEnd=function(x){d++,l.onProgress!==void 0&&l.onProgress(x,d,h),d===h&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,v){return p.push(x,v),this},this.removeHandler=function(x){const v=p.indexOf(x);return v!==-1&&p.splice(v,2),this},this.getHandler=function(x){for(let v=0,_=p.length;v<_;v+=2){const M=p[v],T=p[v+1];if(M.global&&(M.lastIndex=0),M.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Xy=new ky;class Hh{constructor(e){this.manager=e!==void 0?e:Xy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,u){r.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Hh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cs=new WeakMap;class Wy extends Hh{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,d=wd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)u.manager.itemStart(e),setTimeout(function(){i&&i(d),u.manager.itemEnd(e)},0);else{let v=Cs.get(d);v===void 0&&(v=[],Cs.set(d,v)),v.push({onLoad:i,onError:l})}return d}const h=Yo("img");function m(){x(),i&&i(this);const v=Cs.get(this)||[];for(let _=0;_<v.length;_++){const M=v[_];M.onLoad&&M.onLoad(this)}Cs.delete(this),u.manager.itemEnd(e)}function p(v){x(),l&&l(v),wd.remove(`image:${e}`);const _=Cs.get(this)||[];for(let M=0;M<_.length;M++){const T=_[M];T.onError&&T.onError(v)}Cs.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function x(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),wd.add(`image:${e}`,h),u.manager.itemStart(e),h.src=e,h}}class qy extends Hh{constructor(e){super(e)}load(e,i,r,l){const u=new Pn,d=new Wy(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){u.image=h,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}const Ac=new it,Rc=new Is,zi=new it;class sv extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ac,Rc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Rc,zi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Ac,Rc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Rc,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ir=new it,s_=new Ve,o_=new Ve;class _i extends sv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=bh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bh*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,i){return this.getViewBounds(e,s_,o_),i.subVectors(o_,s_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(rd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class ov extends sv{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ws=-90,Ds=1;class Yy extends si{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(ws,Ds,e,i);l.layers=this.layers,this.add(l);const u=new _i(ws,Ds,e,i);u.layers=this.layers,this.add(u);const d=new _i(ws,Ds,e,i);d.layers=this.layers,this.add(d);const h=new _i(ws,Ds,e,i);h.layers=this.layers,this.add(h);const m=new _i(ws,Ds,e,i);m.layers=this.layers,this.add(m);const p=new _i(ws,Ds,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Hc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,x]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(v,_,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class jy extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Zy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ee("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Wh=class Wh{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=r,u[3]=l,this}};Wh.prototype.isMatrix2=!0;let l_=Wh;function c_(o,e,i,r){const l=Ky(r);switch(i){case Y_:return o*e;case Z_:return o*e/l.components*l.byteLength;case Lh:return o*e/l.components*l.byteLength;case Pr:return o*e*2/l.components*l.byteLength;case Nh:return o*e*2/l.components*l.byteLength;case j_:return o*e*3/l.components*l.byteLength;case Ci:return o*e*4/l.components*l.byteLength;case Oh:return o*e*4/l.components*l.byteLength;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jd:case Kd:return Math.max(o,16)*Math.max(e,8)/4;case Yd:case Zd:return Math.max(o,8)*Math.max(e,8)/2;case Qd:case Jd:case th:case eh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case $d:case Pc:case nh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case _h:case vh:case xh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Sh:case yh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case zc:case Mh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ky(o){switch(o){case vi:case k_:return{byteLength:1,components:1};case Wo:case X_:case Sa:return{byteLength:2,components:1};case Dh:case Uh:return{byteLength:2,components:4};case qi:case wh:case Gi:return{byteLength:4,components:1};case W_:case q_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ch}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ch);function lv(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Qy(o){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,v=p.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,p,x),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const x=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,x);else{v.sort((M,T)=>M.start-T.start);let _=0;for(let M=1;M<v.length;M++){const T=v[_],D=v[M];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++_,v[_]=D)}v.length=_+1;for(let M=0,T=v.length;M<T;M++){const D=v[M];o.bufferSubData(p,D.start*x.BYTES_PER_ELEMENT,x,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var Jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$y=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,oM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,EM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,XM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_E=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$E=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ob=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_b=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Db=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:Jy,alphahash_pars_fragment:$y,alphamap_fragment:tM,alphamap_pars_fragment:eM,alphatest_fragment:nM,alphatest_pars_fragment:iM,aomap_fragment:aM,aomap_pars_fragment:rM,batching_pars_vertex:sM,batching_vertex:oM,begin_vertex:lM,beginnormal_vertex:cM,bsdfs:uM,iridescence_fragment:fM,bumpmap_pars_fragment:dM,clipping_planes_fragment:hM,clipping_planes_pars_fragment:pM,clipping_planes_pars_vertex:mM,clipping_planes_vertex:gM,color_fragment:_M,color_pars_fragment:vM,color_pars_vertex:xM,color_vertex:SM,common:yM,cube_uv_reflection_fragment:MM,defaultnormal_vertex:EM,displacementmap_pars_vertex:bM,displacementmap_vertex:TM,emissivemap_fragment:AM,emissivemap_pars_fragment:RM,colorspace_fragment:CM,colorspace_pars_fragment:wM,envmap_fragment:DM,envmap_common_pars_fragment:UM,envmap_pars_fragment:LM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:XM,envmap_vertex:OM,fog_vertex:FM,fog_pars_vertex:PM,fog_fragment:zM,fog_pars_fragment:BM,gradientmap_pars_fragment:IM,lightmap_pars_fragment:HM,lights_lambert_fragment:GM,lights_lambert_pars_fragment:VM,lights_pars_begin:kM,lights_toon_fragment:WM,lights_toon_pars_fragment:qM,lights_phong_fragment:YM,lights_phong_pars_fragment:jM,lights_physical_fragment:ZM,lights_physical_pars_fragment:KM,lights_fragment_begin:QM,lights_fragment_maps:JM,lights_fragment_end:$M,lightprobes_pars_fragment:tE,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:aE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:oE,map_particle_pars_fragment:lE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:uE,morphinstance_vertex:fE,morphcolor_vertex:dE,morphnormal_vertex:hE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:_E,normal_pars_fragment:vE,normal_pars_vertex:xE,normal_vertex:SE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:bE,iridescence_pars_fragment:TE,opaque_fragment:AE,packing:RE,premultiplied_alpha_fragment:CE,project_vertex:wE,dithering_fragment:DE,dithering_pars_fragment:UE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:OE,shadowmap_pars_vertex:FE,shadowmap_vertex:PE,shadowmask_pars_fragment:zE,skinbase_vertex:BE,skinning_pars_vertex:IE,skinning_vertex:HE,skinnormal_vertex:GE,specularmap_fragment:VE,specularmap_pars_fragment:kE,tonemapping_fragment:XE,tonemapping_pars_fragment:WE,transmission_fragment:qE,transmission_pars_fragment:YE,uv_pars_fragment:jE,uv_pars_vertex:ZE,uv_vertex:KE,worldpos_vertex:QE,background_vert:JE,background_frag:$E,backgroundCube_vert:tb,backgroundCube_frag:eb,cube_vert:nb,cube_frag:ib,depth_vert:ab,depth_frag:rb,distance_vert:sb,distance_frag:ob,equirect_vert:lb,equirect_frag:cb,linedashed_vert:ub,linedashed_frag:fb,meshbasic_vert:db,meshbasic_frag:hb,meshlambert_vert:pb,meshlambert_frag:mb,meshmatcap_vert:gb,meshmatcap_frag:_b,meshnormal_vert:vb,meshnormal_frag:xb,meshphong_vert:Sb,meshphong_frag:yb,meshphysical_vert:Mb,meshphysical_frag:Eb,meshtoon_vert:bb,meshtoon_frag:Tb,points_vert:Ab,points_frag:Rb,shadow_vert:Cb,shadow_frag:wb,sprite_vert:Db,sprite_frag:Ub},It={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new it},probesMax:{value:new it},probesResolution:{value:new it}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ii={basic:{uniforms:Bn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Bn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Bn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Bn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Bn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Bn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Bn([It.points,It.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Bn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Bn([It.common,It.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Bn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Bn([It.sprite,It.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:Bn([It.common,It.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:Bn([It.lights,It.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ii.physical={uniforms:Bn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Cc={r:0,b:0,g:0},Lb=new vn,cv=new re;cv.set(-1,0,0,0,1,0,0,0,1);function Nb(o,e,i,r,l,u){const d=new Ge(0);let h=l===!0?0:1,m,p,x=null,v=0,_=null;function M(w){let L=w.isScene===!0?w.background:null;if(L&&L.isTexture){const O=w.backgroundBlurriness>0;L=e.get(L,O)}return L}function T(w){let L=!1;const O=M(w);O===null?y(d,h):O&&O.isColor&&(y(O,1),L=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function D(w,L){const O=M(L);O&&(O.isCubeTexture||O.mapping===Vc)?(p===void 0&&(p=new wi(new Ko(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Bs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=O,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(L.backgroundRotation)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(cv),p.material.toneMapped=ye.getTransfer(O.colorSpace)!==Pe,(x!==O||v!==O.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,x=O,v=O.version,_=o.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):O&&O.isTexture&&(m===void 0&&(m=new wi(new zs(2,2),new Di({name:"BackgroundMaterial",uniforms:Bs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=O,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=ye.getTransfer(O.colorSpace)!==Pe,O.matrixAutoUpdate===!0&&O.updateMatrix(),m.material.uniforms.uvTransform.value.copy(O.matrix),(x!==O||v!==O.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,x=O,v=O.version,_=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function y(w,L){w.getRGB(Cc,rv(o)),i.buffers.color.setClear(Cc.r,Cc.g,Cc.b,L,u)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,L=1){d.set(w),h=L,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,y(d,h)},render:T,addToRenderList:D,dispose:S}}function Ob(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let u=l,d=!1;function h(H,J,ft,pt,q){let U=!1;const z=v(H,pt,ft,J);u!==z&&(u=z,p(u.object)),U=M(H,pt,ft,q),U&&T(H,pt,ft,q),q!==null&&e.update(q,o.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,O(H,J,ft,pt),q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return o.createVertexArray()}function p(H){return o.bindVertexArray(H)}function x(H){return o.deleteVertexArray(H)}function v(H,J,ft,pt){const q=pt.wireframe===!0;let U=r[J.id];U===void 0&&(U={},r[J.id]=U);const z=H.isInstancedMesh===!0?H.id:0;let ot=U[z];ot===void 0&&(ot={},U[z]=ot);let gt=ot[ft.id];gt===void 0&&(gt={},ot[ft.id]=gt);let Mt=gt[q];return Mt===void 0&&(Mt=_(m()),gt[q]=Mt),Mt}function _(H){const J=[],ft=[],pt=[];for(let q=0;q<i;q++)J[q]=0,ft[q]=0,pt[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ft,attributeDivisors:pt,object:H,attributes:{},index:null}}function M(H,J,ft,pt){const q=u.attributes,U=J.attributes;let z=0;const ot=ft.getAttributes();for(const gt in ot)if(ot[gt].location>=0){const N=q[gt];let Q=U[gt];if(Q===void 0&&(gt==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),gt==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),N===void 0||N.attribute!==Q||Q&&N.data!==Q.data)return!0;z++}return u.attributesNum!==z||u.index!==pt}function T(H,J,ft,pt){const q={},U=J.attributes;let z=0;const ot=ft.getAttributes();for(const gt in ot)if(ot[gt].location>=0){let N=U[gt];N===void 0&&(gt==="instanceMatrix"&&H.instanceMatrix&&(N=H.instanceMatrix),gt==="instanceColor"&&H.instanceColor&&(N=H.instanceColor));const Q={};Q.attribute=N,N&&N.data&&(Q.data=N.data),q[gt]=Q,z++}u.attributes=q,u.attributesNum=z,u.index=pt}function D(){const H=u.newAttributes;for(let J=0,ft=H.length;J<ft;J++)H[J]=0}function y(H){S(H,0)}function S(H,J){const ft=u.newAttributes,pt=u.enabledAttributes,q=u.attributeDivisors;ft[H]=1,pt[H]===0&&(o.enableVertexAttribArray(H),pt[H]=1),q[H]!==J&&(o.vertexAttribDivisor(H,J),q[H]=J)}function w(){const H=u.newAttributes,J=u.enabledAttributes;for(let ft=0,pt=J.length;ft<pt;ft++)J[ft]!==H[ft]&&(o.disableVertexAttribArray(ft),J[ft]=0)}function L(H,J,ft,pt,q,U,z){z===!0?o.vertexAttribIPointer(H,J,ft,q,U):o.vertexAttribPointer(H,J,ft,pt,q,U)}function O(H,J,ft,pt){D();const q=pt.attributes,U=ft.getAttributes(),z=J.defaultAttributeValues;for(const ot in U){const gt=U[ot];if(gt.location>=0){let Mt=q[ot];if(Mt===void 0&&(ot==="instanceMatrix"&&H.instanceMatrix&&(Mt=H.instanceMatrix),ot==="instanceColor"&&H.instanceColor&&(Mt=H.instanceColor)),Mt!==void 0){const N=Mt.normalized,Q=Mt.itemSize,xt=e.get(Mt);if(xt===void 0)continue;const At=xt.buffer,Dt=xt.type,st=xt.bytesPerElement,St=Dt===o.INT||Dt===o.UNSIGNED_INT||Mt.gpuType===wh;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,Ht=bt.stride,$t=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<gt.locationSize;Qt++)S(gt.location+Qt,bt.meshPerAttribute);H.isInstancedMesh!==!0&&pt._maxInstanceCount===void 0&&(pt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Qt=0;Qt<gt.locationSize;Qt++)y(gt.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Qt=0;Qt<gt.locationSize;Qt++)L(gt.location+Qt,Q/gt.locationSize,Dt,N,Ht*st,($t+Q/gt.locationSize*Qt)*st,St)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<gt.locationSize;bt++)S(gt.location+bt,Mt.meshPerAttribute);H.isInstancedMesh!==!0&&pt._maxInstanceCount===void 0&&(pt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<gt.locationSize;bt++)y(gt.location+bt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let bt=0;bt<gt.locationSize;bt++)L(gt.location+bt,Q/gt.locationSize,Dt,N,Q*st,Q/gt.locationSize*bt*st,St)}}else if(z!==void 0){const N=z[ot];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(gt.location,N);break;case 3:o.vertexAttrib3fv(gt.location,N);break;case 4:o.vertexAttrib4fv(gt.location,N);break;default:o.vertexAttrib1fv(gt.location,N)}}}}w()}function V(){P();for(const H in r){const J=r[H];for(const ft in J){const pt=J[ft];for(const q in pt){const U=pt[q];for(const z in U)x(U[z].object),delete U[z];delete pt[q]}}delete r[H]}}function F(H){if(r[H.id]===void 0)return;const J=r[H.id];for(const ft in J){const pt=J[ft];for(const q in pt){const U=pt[q];for(const z in U)x(U[z].object),delete U[z];delete pt[q]}}delete r[H.id]}function I(H){for(const J in r){const ft=r[J];for(const pt in ft){const q=ft[pt];if(q[H.id]===void 0)continue;const U=q[H.id];for(const z in U)x(U[z].object),delete U[z];delete q[H.id]}}}function b(H){for(const J in r){const ft=r[J],pt=H.isInstancedMesh===!0?H.id:0,q=ft[pt];if(q!==void 0){for(const U in q){const z=q[U];for(const ot in z)x(z[ot].object),delete z[ot];delete q[U]}delete ft[pt],Object.keys(ft).length===0&&delete r[J]}}}function P(){K(),d=!0,u!==l&&(u=l,p(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:P,resetDefaultState:K,dispose:V,releaseStatesOfGeometry:F,releaseStatesOfObject:b,releaseStatesOfProgram:I,initAttributes:D,enableAttribute:y,disableUnusedAttributes:w}}function Fb(o,e,i){let r;function l(m){r=m}function u(m,p){o.drawArrays(r,m,p),i.update(p,r,1)}function d(m,p,x){x!==0&&(o.drawArraysInstanced(r,m,p,x),i.update(p,r,x))}function h(m,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,x);let _=0;for(let M=0;M<x;M++)_+=p[M];i.update(_,r,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function Pb(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Ci&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const b=I===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==vi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gi&&!b)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ee("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=o.getParameter(o.MAX_SAMPLES),F=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:O,maxSamples:V,samples:F}}function zb(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Dr,h=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||r!==0||l;return l=_,r=v.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){i=x(v,_,0)},this.setState=function(v,_,M){const T=v.clippingPlanes,D=v.clipIntersection,y=v.clipShadows,S=o.get(v);if(!l||T===null||T.length===0||u&&!y)u?x(null):p();else{const w=u?0:r,L=w*4;let O=S.clippingState||null;m.value=O,O=x(T,_,L,M);for(let V=0;V!==L;++V)O[V]=i[V];S.clippingState=O,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,_,M,T){const D=v!==null?v.length:0;let y=null;if(D!==0){if(y=m.value,T!==!0||y===null){const S=M+D*4,w=_.matrixWorldInverse;h.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,O=M;L!==D;++L,O+=4)d.copy(v[L]).applyMatrix4(w,h),d.normal.toArray(y,O),y[O+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,y}}const rr=4,u_=[.125,.215,.35,.446,.526,.582],Lr=20,Bb=256,Go=new ov,f_=new Ge;let Dd=null,Ud=0,Ld=0,Nd=!1;const Ib=new it;class d_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=Ib}=u;Dd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dd,Ud,Ld),this._renderer.xr.enabled=Nd,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Fr||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Sa,format:Ci,colorSpace:Bc,depthBuffer:!1},l=h_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hb(u)),this._blurMaterial=Vb(u,e,i),this._ggxMaterial=Gb(u,e,i)}return l}_compileMaterial(e){const i=new wi(new Ma,e);this._renderer.compile(i,Go)}_sceneToCubeUV(e,i,r,l,u){const m=new _i(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,M=v.toneMapping;v.getClearColor(f_),v.toneMapping=ki,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new Ko,new Ih({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let S=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,S=!0):(y.color.copy(f_),S=!0);for(let L=0;L<6;L++){const O=L%3;O===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[L],u.y,u.z)):O===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[L]));const V=this._cubeSize;Us(l,O*V,L>2?V:0,V,V),v.setRenderTarget(l),S&&v.render(D,m),v.render(e,m)}v.toneMapping=M,v.autoClear=_,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Fr||e.mapping===Fs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Us(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Go)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-x*x),_=0+p*1.25,M=v*_,{_lodMax:T}=this,D=this._sizeLods[r],y=3*D*(r>T-rr?r-T+rr:0),S=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,Us(u,y,S,3*D,2*D),l.setRenderTarget(u),l.render(h,Go),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-r,Us(e,y,S,3*D,2*D),l.setRenderTarget(e),l.render(h,Go)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ee("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=p;const _=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Lr-1),D=u/T,y=isFinite(u)?1+Math.floor(x*D):Lr;y>Lr&&ee(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Lr}`);const S=[];let w=0;for(let I=0;I<Lr;++I){const b=I/D,P=Math.exp(-b*b/2);S.push(P),I===0?w+=P:I<y&&(w+=2*P)}for(let I=0;I<S.length;I++)S[I]=S[I]/w;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=S,_.latitudinal.value=d==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:L}=this;_.dTheta.value=T,_.mipInt.value=L-r;const O=this._sizeLods[l],V=3*O*(l>L-rr?l-L+rr:0),F=4*(this._cubeSize-O);Us(i,V,F,3*O,2*O),m.setRenderTarget(i),m.render(v,Go)}}function Hb(o){const e=[],i=[],r=[];let l=o;const u=o-rr+1+u_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-rr?m=u_[d-o+rr-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,v=1+p,_=[x,x,v,x,v,v,x,x,v,v,x,v],M=6,T=6,D=3,y=2,S=1,w=new Float32Array(D*T*M),L=new Float32Array(y*T*M),O=new Float32Array(S*T*M);for(let F=0;F<M;F++){const I=F%3*2/3-1,b=F>2?0:-1,P=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];w.set(P,D*T*F),L.set(_,y*T*F);const K=[F,F,F,F,F,F];O.set(K,S*T*F)}const V=new Ma;V.setAttribute("position",new Wi(w,D)),V.setAttribute("uv",new Wi(L,y)),V.setAttribute("faceIndex",new Wi(O,S)),r.push(new wi(V,null)),l>rr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function h_(o,e,i){const r=new Xi(o,e,i);return r.texture.mapping=Vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Us(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function Gb(o,e,i){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Vb(o,e,i){const r=new Float32Array(Lr),l=new it(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function p_(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function m_(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class uv extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new iv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ko(5,5,5),u=new Di({name:"CubemapFromEquirect",uniforms:Bs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:_a});u.uniforms.tEquirect.value=i;const d=new wi(l,u),h=i.minFilter;return i.minFilter===Nr&&(i.minFilter=Fn),new Yy(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}function kb(o){let e=new WeakMap,i=new WeakMap,r=null;function l(_,M=!1){return _==null?null:M?d(_):u(_)}function u(_){if(_&&_.isTexture){const M=_.mapping;if(M===nd||M===id)if(e.has(_)){const T=e.get(_).texture;return h(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const D=new uv(T.height);return D.fromEquirectangularTexture(o,_),e.set(_,D),_.addEventListener("dispose",p),h(D.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const M=_.mapping,T=M===nd||M===id,D=M===Fr||M===Fs;if(T||D){let y=i.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return r===null&&(r=new d_(o)),y=T?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const w=_.image;return T&&w&&w.height>0||D&&w&&m(w)?(r===null&&(r=new d_(o)),y=T?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",x),y.texture):null}}}return _}function h(_,M){return M===nd?_.mapping=Fr:M===id&&(_.mapping=Fs),_}function m(_){let M=0;const T=6;for(let D=0;D<T;D++)_[D]!==void 0&&M++;return M===T}function p(_){const M=_.target;M.removeEventListener("dispose",p);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function x(_){const M=_.target;M.removeEventListener("dispose",x);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function Xb(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Eh("WebGLRenderer: "+r+" extension not supported."),l}}}function Wb(o,e,i,r){const l={},u=new WeakMap;function d(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",d),delete l[_.id];const M=u.get(_);M&&(e.remove(M),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const M in _)e.update(_[M],o.ARRAY_BUFFER)}function p(v){const _=[],M=v.index,T=v.attributes.position;let D=0;if(T===void 0)return;if(M!==null){const w=M.array;D=M.version;for(let L=0,O=w.length;L<O;L+=3){const V=w[L+0],F=w[L+1],I=w[L+2];_.push(V,F,F,I,I,V)}}else{const w=T.array;D=T.version;for(let L=0,O=w.length/3-1;L<O;L+=3){const V=L+0,F=L+1,I=L+2;_.push(V,F,F,I,I,V)}}const y=new(T.count>=65535?ev:tv)(_,1);y.version=D;const S=u.get(v);S&&e.remove(S),u.set(v,y)}function x(v){const _=u.get(v);if(_){const M=v.index;M!==null&&_.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:x}}function qb(o,e,i){let r;function l(v){r=v}let u,d;function h(v){u=v.type,d=v.bytesPerElement}function m(v,_){o.drawElements(r,_,u,v*d),i.update(_,r,1)}function p(v,_,M){M!==0&&(o.drawElementsInstanced(r,_,u,v*d,M),i.update(_,r,M))}function x(v,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,u,v,0,M);let D=0;for(let y=0;y<M;y++)D+=_[y];i.update(D,r,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function Yb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Ee("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function jb(o,e,i){const r=new WeakMap,l=new cn;function u(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=x!==void 0?x.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let K=function(){b.dispose(),r.delete(h),h.removeEventListener("dispose",K)};var M=K;_!==void 0&&_.texture.dispose();const T=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let O=0;T===!0&&(O=1),D===!0&&(O=2),y===!0&&(O=3);let V=h.attributes.position.count*O,F=1;V>e.maxTextureSize&&(F=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const I=new Float32Array(V*F*4*v),b=new Q_(I,V,F,v);b.type=Gi,b.needsUpdate=!0;const P=O*4;for(let H=0;H<v;H++){const J=S[H],ft=w[H],pt=L[H],q=V*F*4*H;for(let U=0;U<J.count;U++){const z=U*P;T===!0&&(l.fromBufferAttribute(J,U),I[q+z+0]=l.x,I[q+z+1]=l.y,I[q+z+2]=l.z,I[q+z+3]=0),D===!0&&(l.fromBufferAttribute(ft,U),I[q+z+4]=l.x,I[q+z+5]=l.y,I[q+z+6]=l.z,I[q+z+7]=0),y===!0&&(l.fromBufferAttribute(pt,U),I[q+z+8]=l.x,I[q+z+9]=l.y,I[q+z+10]=l.z,I[q+z+11]=pt.itemSize===4?l.w:1)}}_={count:v,texture:b,size:new Ve(V,F)},r.set(h,_),h.addEventListener("dispose",K)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const D=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",D),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function Zb(o,e,i,r,l){let u=new WeakMap;function d(p){const x=l.render.frame,v=p.geometry,_=e.get(p,v);if(u.get(_)!==x&&(e.update(_),u.set(_,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),u.get(p)!==x&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),u.set(p,x))),p.isSkinnedMesh){const M=p.skeleton;u.get(M)!==x&&(M.update(),u.set(M,x))}return _}function h(){u=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:h}}const Kb={[F_]:"LINEAR_TONE_MAPPING",[P_]:"REINHARD_TONE_MAPPING",[z_]:"CINEON_TONE_MAPPING",[B_]:"ACES_FILMIC_TONE_MAPPING",[H_]:"AGX_TONE_MAPPING",[G_]:"NEUTRAL_TONE_MAPPING",[I_]:"CUSTOM_TONE_MAPPING"};function Qb(o,e,i,r,l){const u=new Xi(e,i,{type:o,depthBuffer:r,stencilBuffer:l,depthTexture:r?new Ps(e,i):void 0}),d=new Xi(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),h=new Ma;h.setAttribute("position",new xa([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xa([0,2,0,0,2,0],2));const m=new Hy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new wi(h,m),x=new ov(-1,1,1,-1,0,1);let v=null,_=null,M=!1,T,D=null,y=[],S=!1;this.setSize=function(w,L){u.setSize(w,L),d.setSize(w,L);for(let O=0;O<y.length;O++){const V=y[O];V.setSize&&V.setSize(w,L)}},this.setEffects=function(w){y=w,S=y.length>0&&y[0].isRenderPass===!0;const L=u.width,O=u.height;for(let V=0;V<y.length;V++){const F=y[V];F.setSize&&F.setSize(L,O)}},this.begin=function(w,L){if(M||w.toneMapping===ki&&y.length===0)return!1;if(D=L,L!==null){const O=L.width,V=L.height;(u.width!==O||u.height!==V)&&this.setSize(O,V)}return S===!1&&w.setRenderTarget(u),T=w.toneMapping,w.toneMapping=ki,!0},this.hasRenderPass=function(){return S},this.end=function(w,L){w.toneMapping=T,M=!0;let O=u,V=d;for(let F=0;F<y.length;F++){const I=y[F];if(I.enabled!==!1&&(I.render(w,V,O,L),I.needsSwap!==!1)){const b=O;O=V,V=b}}if(v!==w.outputColorSpace||_!==w.toneMapping){v=w.outputColorSpace,_=w.toneMapping,m.defines={},ye.getTransfer(v)===Pe&&(m.defines.SRGB_TRANSFER="");const F=Kb[_];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,w.setRenderTarget(D),w.render(p,x),D=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),h.dispose(),m.dispose()}}const fv=new Pn,Th=new Ps(1,1),dv=new Q_,hv=new gy,pv=new iv,g_=[],__=[],v_=new Float32Array(16),x_=new Float32Array(9),S_=new Float32Array(4);function Hs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=g_[l];if(u===void 0&&(u=new Float32Array(l),g_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Sn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Wc(o,e){let i=__[e];i===void 0&&(i=new Int32Array(e),__[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function Jb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function $b(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),Sn(i,e)}}function tT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),Sn(i,e)}}function eT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),Sn(i,e)}}function nT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,r))return;S_.set(r),o.uniformMatrix2fv(this.addr,!1,S_),Sn(i,r)}}function iT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,r))return;x_.set(r),o.uniformMatrix3fv(this.addr,!1,x_),Sn(i,r)}}function aT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,r))return;v_.set(r),o.uniformMatrix4fv(this.addr,!1,v_),Sn(i,r)}}function rT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function sT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),Sn(i,e)}}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),Sn(i,e)}}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),Sn(i,e)}}function cT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),Sn(i,e)}}function fT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),Sn(i,e)}}function dT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),Sn(i,e)}}function hT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Th.compareFunction=i.isReversedDepthBuffer()?Ph:Fh,u=Th):u=fv,i.setTexture2D(e||u,l)}function pT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||hv,l)}function mT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||pv,l)}function gT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||dv,l)}function _T(o){switch(o){case 5126:return Jb;case 35664:return $b;case 35665:return tT;case 35666:return eT;case 35674:return nT;case 35675:return iT;case 35676:return aT;case 5124:case 35670:return rT;case 35667:case 35671:return sT;case 35668:case 35672:return oT;case 35669:case 35673:return lT;case 5125:return cT;case 36294:return uT;case 36295:return fT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}function vT(o,e){o.uniform1fv(this.addr,e)}function xT(o,e){const i=Hs(e,this.size,2);o.uniform2fv(this.addr,i)}function ST(o,e){const i=Hs(e,this.size,3);o.uniform3fv(this.addr,i)}function yT(o,e){const i=Hs(e,this.size,4);o.uniform4fv(this.addr,i)}function MT(o,e){const i=Hs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ET(o,e){const i=Hs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function bT(o,e){const i=Hs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function TT(o,e){o.uniform1iv(this.addr,e)}function AT(o,e){o.uniform2iv(this.addr,e)}function RT(o,e){o.uniform3iv(this.addr,e)}function CT(o,e){o.uniform4iv(this.addr,e)}function wT(o,e){o.uniform1uiv(this.addr,e)}function DT(o,e){o.uniform2uiv(this.addr,e)}function UT(o,e){o.uniform3uiv(this.addr,e)}function LT(o,e){o.uniform4uiv(this.addr,e)}function NT(o,e,i){const r=this.cache,l=e.length,u=Wc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),Sn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Th:d=fv;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,u[h])}function OT(o,e,i){const r=this.cache,l=e.length,u=Wc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),Sn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||hv,u[d])}function FT(o,e,i){const r=this.cache,l=e.length,u=Wc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),Sn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||pv,u[d])}function PT(o,e,i){const r=this.cache,l=e.length,u=Wc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),Sn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||dv,u[d])}function zT(o){switch(o){case 5126:return vT;case 35664:return xT;case 35665:return ST;case 35666:return yT;case 35674:return MT;case 35675:return ET;case 35676:return bT;case 5124:case 35670:return TT;case 35667:case 35671:return AT;case 35668:case 35672:return RT;case 35669:case 35673:return CT;case 5125:return wT;case 36294:return DT;case 36295:return UT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return PT}}class BT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=_T(i.type)}}class IT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=zT(i.type)}}class HT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function y_(o,e){o.seq.push(e),o.map[e.id]=e}function GT(o,e,i){const r=o.name,l=r.length;for(Od.lastIndex=0;;){const u=Od.exec(r),d=Od.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){y_(i,p===void 0?new BT(h,o,e):new IT(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new HT(h),y_(i,v)),i=v}}}class Fc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);GT(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function M_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const VT=37297;let kT=0;function XT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const E_=new re;function WT(o){ye._getMatrix(E_,ye.workingColorSpace,o);const e=`mat3( ${E_.elements.map(i=>i.toFixed(4))} )`;switch(ye.getTransfer(o)){case Ic:return[e,"LinearTransferOETF"];case Pe:return[e,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function b_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+XT(o.getShaderSource(e),h)}else return u}function qT(o,e){const i=WT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const YT={[F_]:"Linear",[P_]:"Reinhard",[z_]:"Cineon",[B_]:"ACESFilmic",[H_]:"AgX",[G_]:"Neutral",[I_]:"Custom"};function jT(o,e){const i=YT[e];return i===void 0?(ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wc=new it;function ZT(){ye.getLuminanceCoefficients(wc);const o=wc.x.toFixed(4),e=wc.y.toFixed(4),i=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function QT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function JT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Xo(o){return o!==""}function T_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $T=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(o){return o.replace($T,e1)}const t1=new Map;function e1(o,e){let i=ue[e];if(i===void 0){const r=t1.get(e);if(r!==void 0)i=ue[r],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ah(i)}const n1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R_(o){return o.replace(n1,i1)}function i1(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function C_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const a1={[Dc]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function r1(o){return a1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const s1={[Fr]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Vc]:"ENVMAP_TYPE_CUBE_UV"};function o1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":s1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const l1={[Fs]:"ENVMAP_MODE_REFRACTION"};function c1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":l1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const u1={[O_]:"ENVMAP_BLENDING_MULTIPLY",[ZS]:"ENVMAP_BLENDING_MIX",[KS]:"ENVMAP_BLENDING_ADD"};function f1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":u1[o.combine]||"ENVMAP_BLENDING_NONE"}function d1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function h1(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=r1(i),p=o1(i),x=c1(i),v=f1(i),_=d1(i),M=KT(i),T=QT(u),D=l.createProgram();let y,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),S.length>0&&(S+=`
`)):(y=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),S=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?ue.tonemapping_pars_fragment:"",i.toneMapping!==ki?jT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,qT("linearToOutputTexel",i.outputColorSpace),ZT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),d=Ah(d),d=T_(d,i),d=A_(d,i),h=Ah(h),h=T_(h,i),h=A_(h,i),d=R_(d),h=R_(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===Gg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Gg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=w+y+d,O=w+S+h,V=M_(l,l.VERTEX_SHADER,L),F=M_(l,l.FRAGMENT_SHADER,O);l.attachShader(D,V),l.attachShader(D,F),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function I(H){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(D)||"",ft=l.getShaderInfoLog(V)||"",pt=l.getShaderInfoLog(F)||"",q=J.trim(),U=ft.trim(),z=pt.trim();let ot=!0,gt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,V,F);else{const Mt=b_(l,V,"vertex"),N=b_(l,F,"fragment");Ee("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+q+`
`+Mt+`
`+N)}else q!==""?ee("WebGLProgram: Program Info Log:",q):(U===""||z==="")&&(gt=!1);gt&&(H.diagnostics={runnable:ot,programLog:q,vertexShader:{log:U,prefix:y},fragmentShader:{log:z,prefix:S}})}l.deleteShader(V),l.deleteShader(F),b=new Fc(l,D),P=JT(l,D)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let K=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(D,VT)),K},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=kT++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=V,this.fragmentShader=F,this}let p1=0;class m1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new g1(e),i.set(e,r)),r}}class g1{constructor(e){this.id=p1++,this.code=e,this.usedTimes=0}}function _1(o){return o===Pr||o===Pc||o===zc}function v1(o,e,i,r,l,u){const d=new J_,h=new m1,m=new Set,p=[],x=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function D(b,P,K,H,J,ft){const pt=H.fog,q=J.geometry,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ot=e.get(b.envMap||U,z),gt=ot&&ot.mapping===Vc?ot.image.height:null,Mt=M[b.type];b.precision!==null&&(_=r.getMaxPrecision(b.precision),_!==b.precision&&ee("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const N=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Q=N!==void 0?N.length:0;let xt=0;q.morphAttributes.position!==void 0&&(xt=1),q.morphAttributes.normal!==void 0&&(xt=2),q.morphAttributes.color!==void 0&&(xt=3);let At,Dt,st,St;if(Mt){const te=Ii[Mt];At=te.vertexShader,Dt=te.fragmentShader}else At=b.vertexShader,Dt=b.fragmentShader,h.update(b),st=h.getVertexShaderID(b),St=h.getFragmentShaderID(b);const bt=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),$t=J.isInstancedMesh===!0,Qt=J.isBatchedMesh===!0,ke=!!b.map,fe=!!b.matcap,_e=!!ot,De=!!b.aoMap,le=!!b.lightMap,an=!!b.bumpMap,qe=!!b.normalMap,En=!!b.displacementMap,X=!!b.emissiveMap,$e=!!b.metalnessMap,de=!!b.roughnessMap,ze=b.anisotropy>0,Rt=b.clearcoat>0,Ze=b.dispersion>0,C=b.iridescence>0,E=b.sheen>0,Z=b.transmission>0,_t=ze&&!!b.anisotropyMap,Et=Rt&&!!b.clearcoatMap,Ct=Rt&&!!b.clearcoatNormalMap,Nt=Rt&&!!b.clearcoatRoughnessMap,ct=C&&!!b.iridescenceMap,ut=C&&!!b.iridescenceThicknessMap,Ot=E&&!!b.sheenColorMap,Ft=E&&!!b.sheenRoughnessMap,Ut=!!b.specularMap,wt=!!b.specularColorMap,ne=!!b.specularIntensityMap,ie=Z&&!!b.transmissionMap,he=Z&&!!b.thicknessMap,G=!!b.gradientMap,Tt=!!b.alphaMap,ht=b.alphaTest>0,Bt=!!b.alphaHash,Lt=!!b.extensions;let yt=ki;b.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(yt=o.toneMapping);const qt={shaderID:Mt,shaderType:b.type,shaderName:b.name,vertexShader:At,fragmentShader:Dt,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:Qt,batchingColor:Qt&&J._colorsTexture!==null,instancing:$t,instancingColor:$t&&J.instanceColor!==null,instancingMorph:$t&&J.morphTexture!==null,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:ye.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:fe,envMap:_e,envMapMode:_e&&ot.mapping,envMapCubeUVHeight:gt,aoMap:De,lightMap:le,bumpMap:an,normalMap:qe,displacementMap:En,emissiveMap:X,normalMapObjectSpace:qe&&b.normalMapType===$S,normalMapTangentSpace:qe&&b.normalMapType===Bg,packedNormalMap:qe&&b.normalMapType===Bg&&_1(b.normalMap.format),metalnessMap:$e,roughnessMap:de,anisotropy:ze,anisotropyMap:_t,clearcoat:Rt,clearcoatMap:Et,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Nt,dispersion:Ze,iridescence:C,iridescenceMap:ct,iridescenceThicknessMap:ut,sheen:E,sheenColorMap:Ot,sheenRoughnessMap:Ft,specularMap:Ut,specularColorMap:wt,specularIntensityMap:ne,transmission:Z,transmissionMap:ie,thicknessMap:he,gradientMap:G,opaque:b.transparent===!1&&b.blending===Ls&&b.alphaToCoverage===!1,alphaMap:Tt,alphaTest:ht,alphaHash:Bt,combine:b.combine,mapUv:ke&&T(b.map.channel),aoMapUv:De&&T(b.aoMap.channel),lightMapUv:le&&T(b.lightMap.channel),bumpMapUv:an&&T(b.bumpMap.channel),normalMapUv:qe&&T(b.normalMap.channel),displacementMapUv:En&&T(b.displacementMap.channel),emissiveMapUv:X&&T(b.emissiveMap.channel),metalnessMapUv:$e&&T(b.metalnessMap.channel),roughnessMapUv:de&&T(b.roughnessMap.channel),anisotropyMapUv:_t&&T(b.anisotropyMap.channel),clearcoatMapUv:Et&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&T(b.sheenRoughnessMap.channel),specularMapUv:Ut&&T(b.specularMap.channel),specularColorMapUv:wt&&T(b.specularColorMap.channel),specularIntensityMapUv:ne&&T(b.specularIntensityMap.channel),transmissionMapUv:ie&&T(b.transmissionMap.channel),thicknessMapUv:he&&T(b.thicknessMap.channel),alphaMapUv:Tt&&T(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(qe||ze),vertexNormals:!!q.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!q.attributes.uv&&(ke||Tt),fog:!!pt,useFog:b.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||q.attributes.normal===void 0&&qe===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ht,skinning:J.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:xt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ft.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&K.length>0,shadowMapType:o.shadowMap.type,toneMapping:yt,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&ye.getTransfer(b.map.colorSpace)===Pe,decodeVideoTextureEmissive:X&&b.emissiveMap.isVideoTexture===!0&&ye.getTransfer(b.emissiveMap.colorSpace)===Pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Hi,flipSided:b.side===qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Lt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&b.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function y(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const K in b.defines)P.push(K),P.push(b.defines[K]);return b.isRawShaderMaterial===!1&&(S(P,b),w(P,b),P.push(o.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function S(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function w(b,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),P.packedNormalMap&&d.enable(22),P.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),P.numLightProbeGrids>0&&d.enable(22),b.push(d.mask)}function L(b){const P=M[b.type];let K;if(P){const H=Ii[P];K=zy.clone(H.uniforms)}else K=b.uniforms;return K}function O(b,P){let K=x.get(P);return K!==void 0?++K.usedTimes:(K=new h1(o,P,b,l),p.push(K),x.set(P,K)),K}function V(b){if(--b.usedTimes===0){const P=p.indexOf(b);p[P]=p[p.length-1],p.pop(),x.delete(b.cacheKey),b.destroy()}}function F(b){h.remove(b)}function I(){h.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:L,acquireProgram:O,releaseProgram:V,releaseShaderCache:F,programs:p,dispose:I}}function x1(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function S1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function w_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function D_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function h(_,M,T,D,y,S){let w=o[e];return w===void 0?(w={id:_.id,object:_,geometry:M,material:T,materialVariant:d(_),groupOrder:D,renderOrder:_.renderOrder,z:y,group:S},o[e]=w):(w.id=_.id,w.object=_,w.geometry=M,w.material=T,w.materialVariant=d(_),w.groupOrder=D,w.renderOrder=_.renderOrder,w.z=y,w.group=S),e++,w}function m(_,M,T,D,y,S){const w=h(_,M,T,D,y,S);T.transmission>0?r.push(w):T.transparent===!0?l.push(w):i.push(w)}function p(_,M,T,D,y,S){const w=h(_,M,T,D,y,S);T.transmission>0?r.unshift(w):T.transparent===!0?l.unshift(w):i.unshift(w)}function x(_,M){i.length>1&&i.sort(_||S1),r.length>1&&r.sort(M||w_),l.length>1&&l.sort(M||w_)}function v(){for(let _=e,M=o.length;_<M;_++){const T=o[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:m,unshift:p,finish:v,sort:x}}function y1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new D_,o.set(r,[d])):l>=u.length?(d=new D_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function M1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new it,color:new Ge};break;case"SpotLight":i={position:new it,direction:new it,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":i={color:new Ge,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function E1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let b1=0;function T1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function A1(o){const e=new M1,i=E1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new it);const l=new it,u=new vn,d=new vn;function h(p){let x=0,v=0,_=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,T=0,D=0,y=0,S=0,w=0,L=0,O=0,V=0,F=0,I=0;p.sort(T1);for(let P=0,K=p.length;P<K;P++){const H=p[P],J=H.color,ft=H.intensity,pt=H.distance;let q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Pr?q=H.shadow.map.texture:q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=J.r*ft,v+=J.g*ft,_+=J.b*ft;else if(H.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(H.sh.coefficients[U],ft);I++}else if(H.isDirectionalLight){const U=e.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const z=H.shadow,ot=i.get(H);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,r.directionalShadow[M]=ot,r.directionalShadowMap[M]=q,r.directionalShadowMatrix[M]=H.shadow.matrix,w++}r.directional[M]=U,M++}else if(H.isSpotLight){const U=e.get(H);U.position.setFromMatrixPosition(H.matrixWorld),U.color.copy(J).multiplyScalar(ft),U.distance=pt,U.coneCos=Math.cos(H.angle),U.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),U.decay=H.decay,r.spot[D]=U;const z=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,z.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[D]=z.matrix,H.castShadow){const ot=i.get(H);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,r.spotShadow[D]=ot,r.spotShadowMap[D]=q,O++}D++}else if(H.isRectAreaLight){const U=e.get(H);U.color.copy(J).multiplyScalar(ft),U.halfWidth.set(H.width*.5,0,0),U.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=U,y++}else if(H.isPointLight){const U=e.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),U.distance=H.distance,U.decay=H.decay,H.castShadow){const z=H.shadow,ot=i.get(H);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,ot.shadowCameraNear=z.camera.near,ot.shadowCameraFar=z.camera.far,r.pointShadow[T]=ot,r.pointShadowMap[T]=q,r.pointShadowMatrix[T]=H.shadow.matrix,L++}r.point[T]=U,T++}else if(H.isHemisphereLight){const U=e.get(H);U.skyColor.copy(H.color).multiplyScalar(ft),U.groundColor.copy(H.groundColor).multiplyScalar(ft),r.hemi[S]=U,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=It.LTC_FLOAT_1,r.rectAreaLTC2=It.LTC_FLOAT_2):(r.rectAreaLTC1=It.LTC_HALF_1,r.rectAreaLTC2=It.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=_;const b=r.hash;(b.directionalLength!==M||b.pointLength!==T||b.spotLength!==D||b.rectAreaLength!==y||b.hemiLength!==S||b.numDirectionalShadows!==w||b.numPointShadows!==L||b.numSpotShadows!==O||b.numSpotMaps!==V||b.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=D,r.rectArea.length=y,r.point.length=T,r.hemi.length=S,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=O+V-F,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=I,b.directionalLength=M,b.pointLength=T,b.spotLength=D,b.rectAreaLength=y,b.hemiLength=S,b.numDirectionalShadows=w,b.numPointShadows=L,b.numSpotShadows=O,b.numSpotMaps=V,b.numLightProbes=I,r.version=b1++)}function m(p,x){let v=0,_=0,M=0,T=0,D=0;const y=x.matrixWorldInverse;for(let S=0,w=p.length;S<w;S++){const L=p[S];if(L.isDirectionalLight){const O=r.directional[v];O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),v++}else if(L.isSpotLight){const O=r.spot[M];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const O=r.rectArea[T];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(y),d.identity(),u.copy(L.matrixWorld),u.premultiply(y),d.extractRotation(u),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const O=r.point[_];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(y),_++}else if(L.isHemisphereLight){const O=r.hemi[D];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(y),D++}}}return{setup:h,setupView:m,state:r}}function U_(o){const e=new A1(o),i=[],r=[],l=[];function u(_){v.camera=_,i.length=0,r.length=0,l.length=0}function d(_){i.push(_)}function h(_){r.push(_)}function m(_){l.push(_)}function p(){e.setup(i)}function x(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:v,setupLights:p,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function R1(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new U_(o),e.set(l,[h])):u>=d.length?(h=new U_(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const C1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,D1=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],U1=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],L_=new vn,Vo=new it,Fd=new it;function L1(o,e,i){let r=new nv;const l=new Ve,u=new Ve,d=new cn,h=new Gy,m=new Vy,p={},x=i.maxTextureSize,v={[sr]:qn,[qn]:sr,[Hi]:Hi},_=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:C1,fragmentShader:w1}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ma;T.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new wi(T,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let S=this.type;this.render=function(F,I,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;this.type===DS&&(ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Dc);const P=o.getRenderTarget(),K=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),J=o.state;J.setBlending(_a),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ft=S!==this.type;ft&&I.traverse(function(pt){pt.material&&(Array.isArray(pt.material)?pt.material.forEach(q=>q.needsUpdate=!0):pt.material.needsUpdate=!0)});for(let pt=0,q=F.length;pt<q;pt++){const U=F[pt],z=U.shadow;if(z===void 0){ee("WebGLShadowMap:",U,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const ot=z.getFrameExtents();l.multiply(ot),u.copy(z.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/ot.x),l.x=u.x*ot.x,z.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/ot.y),l.y=u.y*ot.y,z.mapSize.y=u.y));const gt=o.state.buffers.depth.getReversed();if(z.camera._reversedDepth=gt,z.map===null||ft===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ko){if(U.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Xi(l.x,l.y,{format:Pr,type:Sa,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),z.map.texture.name=U.name+".shadowMap",z.map.depthTexture=new Ps(l.x,l.y,Gi),z.map.depthTexture.name=U.name+".shadowMapDepth",z.map.depthTexture.format=ya,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn}else U.isPointLight?(z.map=new uv(l.x),z.map.depthTexture=new Fy(l.x,qi)):(z.map=new Xi(l.x,l.y),z.map.depthTexture=new Ps(l.x,l.y,qi)),z.map.depthTexture.name=U.name+".shadowMap",z.map.depthTexture.format=ya,this.type===Dc?(z.map.depthTexture.compareFunction=gt?Ph:Fh,z.map.depthTexture.minFilter=Fn,z.map.depthTexture.magFilter=Fn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn);z.camera.updateProjectionMatrix()}const Mt=z.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<Mt;N++){if(z.map.isWebGLCubeRenderTarget)o.setRenderTarget(z.map,N),o.clear();else{N===0&&(o.setRenderTarget(z.map),o.clear());const Q=z.getViewport(N);d.set(u.x*Q.x,u.y*Q.y,u.x*Q.z,u.y*Q.w),J.viewport(d)}if(U.isPointLight){const Q=z.camera,xt=z.matrix,At=U.distance||Q.far;At!==Q.far&&(Q.far=At,Q.updateProjectionMatrix()),Vo.setFromMatrixPosition(U.matrixWorld),Q.position.copy(Vo),Fd.copy(Q.position),Fd.add(D1[N]),Q.up.copy(U1[N]),Q.lookAt(Fd),Q.updateMatrixWorld(),xt.makeTranslation(-Vo.x,-Vo.y,-Vo.z),L_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),z._frustum.setFromProjectionMatrix(L_,Q.coordinateSystem,Q.reversedDepth)}else z.updateMatrices(U);r=z.getFrustum(),O(I,b,z.camera,U,this.type)}z.isPointLightShadow!==!0&&this.type===ko&&w(z,b),z.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(P,K,H)};function w(F,I){const b=e.update(D);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Xi(l.x,l.y,{format:Pr,type:Sa})),_.uniforms.shadow_pass.value=F.map.depthTexture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(I,null,b,_,D,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(I,null,b,M,D,null)}function L(F,I,b,P){let K=null;const H=b.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)K=H;else if(K=b.isPointLight===!0?m:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const J=K.uuid,ft=I.uuid;let pt=p[J];pt===void 0&&(pt={},p[J]=pt);let q=pt[ft];q===void 0&&(q=K.clone(),pt[ft]=q,I.addEventListener("dispose",V)),K=q}if(K.visible=I.visible,K.wireframe=I.wireframe,P===ko?K.side=I.shadowSide!==null?I.shadowSide:I.side:K.side=I.shadowSide!==null?I.shadowSide:v[I.side],K.alphaMap=I.alphaMap,K.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,K.map=I.map,K.clipShadows=I.clipShadows,K.clippingPlanes=I.clippingPlanes,K.clipIntersection=I.clipIntersection,K.displacementMap=I.displacementMap,K.displacementScale=I.displacementScale,K.displacementBias=I.displacementBias,K.wireframeLinewidth=I.wireframeLinewidth,K.linewidth=I.linewidth,b.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const J=o.properties.get(K);J.light=b}return K}function O(F,I,b,P,K){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&K===ko)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,F.matrixWorld);const ft=e.update(F),pt=F.material;if(Array.isArray(pt)){const q=ft.groups;for(let U=0,z=q.length;U<z;U++){const ot=q[U],gt=pt[ot.materialIndex];if(gt&&gt.visible){const Mt=L(F,gt,P,K);F.onBeforeShadow(o,F,I,b,ft,Mt,ot),o.renderBufferDirect(b,null,ft,Mt,F,ot),F.onAfterShadow(o,F,I,b,ft,Mt,ot)}}}else if(pt.visible){const q=L(F,pt,P,K);F.onBeforeShadow(o,F,I,b,ft,q,null),o.renderBufferDirect(b,null,ft,q,F,null),F.onAfterShadow(o,F,I,b,ft,q,null)}}const J=F.children;for(let ft=0,pt=J.length;ft<pt;ft++)O(J[ft],I,b,P,K)}function V(F){F.target.removeEventListener("dispose",V);for(const b in p){const P=p[b],K=F.target.uuid;K in P&&(P[K].dispose(),delete P[K])}}}function N1(o,e){function i(){let G=!1;const Tt=new cn;let ht=null;const Bt=new cn(0,0,0,0);return{setMask:function(Lt){ht!==Lt&&!G&&(o.colorMask(Lt,Lt,Lt,Lt),ht=Lt)},setLocked:function(Lt){G=Lt},setClear:function(Lt,yt,qt,te,tn){tn===!0&&(Lt*=te,yt*=te,qt*=te),Tt.set(Lt,yt,qt,te),Bt.equals(Tt)===!1&&(o.clearColor(Lt,yt,qt,te),Bt.copy(Tt))},reset:function(){G=!1,ht=null,Bt.set(-1,0,0,0)}}}function r(){let G=!1,Tt=!1,ht=null,Bt=null,Lt=null;return{setReversed:function(yt){if(Tt!==yt){const qt=e.get("EXT_clip_control");yt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Tt=yt;const te=Lt;Lt=null,this.setClear(te)}},getReversed:function(){return Tt},setTest:function(yt){yt?bt(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(yt){ht!==yt&&!G&&(o.depthMask(yt),ht=yt)},setFunc:function(yt){if(Tt&&(yt=cy[yt]),Bt!==yt){switch(yt){case Bd:o.depthFunc(o.NEVER);break;case Id:o.depthFunc(o.ALWAYS);break;case Hd:o.depthFunc(o.LESS);break;case Os:o.depthFunc(o.LEQUAL);break;case Gd:o.depthFunc(o.EQUAL);break;case Vd:o.depthFunc(o.GEQUAL);break;case kd:o.depthFunc(o.GREATER);break;case Xd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=yt}},setLocked:function(yt){G=yt},setClear:function(yt){Lt!==yt&&(Lt=yt,Tt&&(yt=1-yt),o.clearDepth(yt))},reset:function(){G=!1,ht=null,Bt=null,Lt=null,Tt=!1}}}function l(){let G=!1,Tt=null,ht=null,Bt=null,Lt=null,yt=null,qt=null,te=null,tn=null;return{setTest:function(Re){G||(Re?bt(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(Re){Tt!==Re&&!G&&(o.stencilMask(Re),Tt=Re)},setFunc:function(Re,oi,Yn){(ht!==Re||Bt!==oi||Lt!==Yn)&&(o.stencilFunc(Re,oi,Yn),ht=Re,Bt=oi,Lt=Yn)},setOp:function(Re,oi,Yn){(yt!==Re||qt!==oi||te!==Yn)&&(o.stencilOp(Re,oi,Yn),yt=Re,qt=oi,te=Yn)},setLocked:function(Re){G=Re},setClear:function(Re){tn!==Re&&(o.clearStencil(Re),tn=Re)},reset:function(){G=!1,Tt=null,ht=null,Bt=null,Lt=null,yt=null,qt=null,te=null,tn=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},v={},_={},M=new WeakMap,T=[],D=null,y=!1,S=null,w=null,L=null,O=null,V=null,F=null,I=null,b=new Ge(0,0,0),P=0,K=!1,H=null,J=null,ft=null,pt=null,q=null;const U=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ot=0;const gt=o.getParameter(o.VERSION);gt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(gt)[1]),z=ot>=1):gt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(gt)[1]),z=ot>=2);let Mt=null,N={};const Q=o.getParameter(o.SCISSOR_BOX),xt=o.getParameter(o.VIEWPORT),At=new cn().fromArray(Q),Dt=new cn().fromArray(xt);function st(G,Tt,ht,Bt){const Lt=new Uint8Array(4),yt=o.createTexture();o.bindTexture(G,yt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qt=0;qt<ht;qt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Lt):o.texImage2D(Tt+qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Lt);return yt}const St={};St[o.TEXTURE_2D]=st(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=st(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=st(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=st(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),bt(o.DEPTH_TEST),d.setFunc(Os),an(!1),qe(Og),bt(o.CULL_FACE),De(_a);function bt(G){x[G]!==!0&&(o.enable(G),x[G]=!0)}function Ht(G){x[G]!==!1&&(o.disable(G),x[G]=!1)}function $t(G,Tt){return _[G]!==Tt?(o.bindFramebuffer(G,Tt),_[G]=Tt,G===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Tt),G===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Qt(G,Tt){let ht=T,Bt=!1;if(G){ht=M.get(Tt),ht===void 0&&(ht=[],M.set(Tt,ht));const Lt=G.textures;if(ht.length!==Lt.length||ht[0]!==o.COLOR_ATTACHMENT0){for(let yt=0,qt=Lt.length;yt<qt;yt++)ht[yt]=o.COLOR_ATTACHMENT0+yt;ht.length=Lt.length,Bt=!0}}else ht[0]!==o.BACK&&(ht[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(ht)}function ke(G){return D!==G?(o.useProgram(G),D=G,!0):!1}const fe={[Ur]:o.FUNC_ADD,[LS]:o.FUNC_SUBTRACT,[NS]:o.FUNC_REVERSE_SUBTRACT};fe[OS]=o.MIN,fe[FS]=o.MAX;const _e={[PS]:o.ZERO,[zS]:o.ONE,[BS]:o.SRC_COLOR,[Pd]:o.SRC_ALPHA,[XS]:o.SRC_ALPHA_SATURATE,[VS]:o.DST_COLOR,[HS]:o.DST_ALPHA,[IS]:o.ONE_MINUS_SRC_COLOR,[zd]:o.ONE_MINUS_SRC_ALPHA,[kS]:o.ONE_MINUS_DST_COLOR,[GS]:o.ONE_MINUS_DST_ALPHA,[WS]:o.CONSTANT_COLOR,[qS]:o.ONE_MINUS_CONSTANT_COLOR,[YS]:o.CONSTANT_ALPHA,[jS]:o.ONE_MINUS_CONSTANT_ALPHA};function De(G,Tt,ht,Bt,Lt,yt,qt,te,tn,Re){if(G===_a){y===!0&&(Ht(o.BLEND),y=!1);return}if(y===!1&&(bt(o.BLEND),y=!0),G!==US){if(G!==S||Re!==K){if((w!==Ur||V!==Ur)&&(o.blendEquation(o.FUNC_ADD),w=Ur,V=Ur),Re)switch(G){case Ls:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fg:o.blendFunc(o.ONE,o.ONE);break;case Pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case zg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ee("WebGLState: Invalid blending: ",G);break}else switch(G){case Ls:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Pg:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zg:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",G);break}L=null,O=null,F=null,I=null,b.set(0,0,0),P=0,S=G,K=Re}return}Lt=Lt||Tt,yt=yt||ht,qt=qt||Bt,(Tt!==w||Lt!==V)&&(o.blendEquationSeparate(fe[Tt],fe[Lt]),w=Tt,V=Lt),(ht!==L||Bt!==O||yt!==F||qt!==I)&&(o.blendFuncSeparate(_e[ht],_e[Bt],_e[yt],_e[qt]),L=ht,O=Bt,F=yt,I=qt),(te.equals(b)===!1||tn!==P)&&(o.blendColor(te.r,te.g,te.b,tn),b.copy(te),P=tn),S=G,K=!1}function le(G,Tt){G.side===Hi?Ht(o.CULL_FACE):bt(o.CULL_FACE);let ht=G.side===qn;Tt&&(ht=!ht),an(ht),G.blending===Ls&&G.transparent===!1?De(_a):De(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),u.setMask(G.colorWrite);const Bt=G.stencilWrite;h.setTest(Bt),Bt&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),X(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function an(G){H!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),H=G)}function qe(G){G!==CS?(bt(o.CULL_FACE),G!==J&&(G===Og?o.cullFace(o.BACK):G===wS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),J=G}function En(G){G!==ft&&(z&&o.lineWidth(G),ft=G)}function X(G,Tt,ht){G?(bt(o.POLYGON_OFFSET_FILL),(pt!==Tt||q!==ht)&&(pt=Tt,q=ht,d.getReversed()&&(Tt=-Tt),o.polygonOffset(Tt,ht))):Ht(o.POLYGON_OFFSET_FILL)}function $e(G){G?bt(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function de(G){G===void 0&&(G=o.TEXTURE0+U-1),Mt!==G&&(o.activeTexture(G),Mt=G)}function ze(G,Tt,ht){ht===void 0&&(Mt===null?ht=o.TEXTURE0+U-1:ht=Mt);let Bt=N[ht];Bt===void 0&&(Bt={type:void 0,texture:void 0},N[ht]=Bt),(Bt.type!==G||Bt.texture!==Tt)&&(Mt!==ht&&(o.activeTexture(ht),Mt=ht),o.bindTexture(G,Tt||St[G]),Bt.type=G,Bt.texture=Tt)}function Rt(){const G=N[Mt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ze(){try{o.compressedTexImage2D(...arguments)}catch(G){Ee("WebGLState:",G)}}function C(){try{o.compressedTexImage3D(...arguments)}catch(G){Ee("WebGLState:",G)}}function E(){try{o.texSubImage2D(...arguments)}catch(G){Ee("WebGLState:",G)}}function Z(){try{o.texSubImage3D(...arguments)}catch(G){Ee("WebGLState:",G)}}function _t(){try{o.compressedTexSubImage2D(...arguments)}catch(G){Ee("WebGLState:",G)}}function Et(){try{o.compressedTexSubImage3D(...arguments)}catch(G){Ee("WebGLState:",G)}}function Ct(){try{o.texStorage2D(...arguments)}catch(G){Ee("WebGLState:",G)}}function Nt(){try{o.texStorage3D(...arguments)}catch(G){Ee("WebGLState:",G)}}function ct(){try{o.texImage2D(...arguments)}catch(G){Ee("WebGLState:",G)}}function ut(){try{o.texImage3D(...arguments)}catch(G){Ee("WebGLState:",G)}}function Ot(G){return v[G]!==void 0?v[G]:o.getParameter(G)}function Ft(G,Tt){v[G]!==Tt&&(o.pixelStorei(G,Tt),v[G]=Tt)}function Ut(G){At.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),At.copy(G))}function wt(G){Dt.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Dt.copy(G))}function ne(G,Tt){let ht=p.get(Tt);ht===void 0&&(ht=new WeakMap,p.set(Tt,ht));let Bt=ht.get(G);Bt===void 0&&(Bt=o.getUniformBlockIndex(Tt,G.name),ht.set(G,Bt))}function ie(G,Tt){const Bt=p.get(Tt).get(G);m.get(Tt)!==Bt&&(o.uniformBlockBinding(Tt,Bt,G.__bindingPointIndex),m.set(Tt,Bt))}function he(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},v={},Mt=null,N={},_={},M=new WeakMap,T=[],D=null,y=!1,S=null,w=null,L=null,O=null,V=null,F=null,I=null,b=new Ge(0,0,0),P=0,K=!1,H=null,J=null,ft=null,pt=null,q=null,At.set(0,0,o.canvas.width,o.canvas.height),Dt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:bt,disable:Ht,bindFramebuffer:$t,drawBuffers:Qt,useProgram:ke,setBlending:De,setMaterial:le,setFlipSided:an,setCullFace:qe,setLineWidth:En,setPolygonOffset:X,setScissorTest:$e,activeTexture:de,bindTexture:ze,unbindTexture:Rt,compressedTexImage2D:Ze,compressedTexImage3D:C,texImage2D:ct,texImage3D:ut,pixelStorei:Ft,getParameter:Ot,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:Ct,texStorage3D:Nt,texSubImage2D:E,texSubImage3D:Z,compressedTexSubImage2D:_t,compressedTexSubImage3D:Et,scissor:Ut,viewport:wt,reset:he}}function O1(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ve,x=new WeakMap,v=new Set;let _;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(C,E){return T?new OffscreenCanvas(C,E):Yo("canvas")}function y(C,E,Z){let _t=1;const Et=Ze(C);if((Et.width>Z||Et.height>Z)&&(_t=Z/Math.max(Et.width,Et.height)),_t<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ct=Math.floor(_t*Et.width),Nt=Math.floor(_t*Et.height);_===void 0&&(_=D(Ct,Nt));const ct=E?D(Ct,Nt):_;return ct.width=Ct,ct.height=Nt,ct.getContext("2d").drawImage(C,0,0,Ct,Nt),ee("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+Ct+"x"+Nt+")."),ct}else return"data"in C&&ee("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),C;return C}function S(C){return C.generateMipmaps}function w(C){o.generateMipmap(C)}function L(C){return C.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?o.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(C,E,Z,_t,Et,Ct=!1){if(C!==null){if(o[C]!==void 0)return o[C];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Nt;_t&&(Nt=e.get("EXT_texture_norm16"),Nt||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=E;if(E===o.RED&&(Z===o.FLOAT&&(ct=o.R32F),Z===o.HALF_FLOAT&&(ct=o.R16F),Z===o.UNSIGNED_BYTE&&(ct=o.R8),Z===o.UNSIGNED_SHORT&&Nt&&(ct=Nt.R16_EXT),Z===o.SHORT&&Nt&&(ct=Nt.R16_SNORM_EXT)),E===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ct=o.R8UI),Z===o.UNSIGNED_SHORT&&(ct=o.R16UI),Z===o.UNSIGNED_INT&&(ct=o.R32UI),Z===o.BYTE&&(ct=o.R8I),Z===o.SHORT&&(ct=o.R16I),Z===o.INT&&(ct=o.R32I)),E===o.RG&&(Z===o.FLOAT&&(ct=o.RG32F),Z===o.HALF_FLOAT&&(ct=o.RG16F),Z===o.UNSIGNED_BYTE&&(ct=o.RG8),Z===o.UNSIGNED_SHORT&&Nt&&(ct=Nt.RG16_EXT),Z===o.SHORT&&Nt&&(ct=Nt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ct=o.RG8UI),Z===o.UNSIGNED_SHORT&&(ct=o.RG16UI),Z===o.UNSIGNED_INT&&(ct=o.RG32UI),Z===o.BYTE&&(ct=o.RG8I),Z===o.SHORT&&(ct=o.RG16I),Z===o.INT&&(ct=o.RG32I)),E===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),Z===o.UNSIGNED_INT&&(ct=o.RGB32UI),Z===o.BYTE&&(ct=o.RGB8I),Z===o.SHORT&&(ct=o.RGB16I),Z===o.INT&&(ct=o.RGB32I)),E===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),Z===o.UNSIGNED_INT&&(ct=o.RGBA32UI),Z===o.BYTE&&(ct=o.RGBA8I),Z===o.SHORT&&(ct=o.RGBA16I),Z===o.INT&&(ct=o.RGBA32I)),E===o.RGB&&(Z===o.UNSIGNED_SHORT&&Nt&&(ct=Nt.RGB16_EXT),Z===o.SHORT&&Nt&&(ct=Nt.RGB16_SNORM_EXT),Z===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),Z===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),E===o.RGBA){const ut=Ct?Ic:ye.getTransfer(Et);Z===o.FLOAT&&(ct=o.RGBA32F),Z===o.HALF_FLOAT&&(ct=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(ct=ut===Pe?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT&&Nt&&(ct=Nt.RGBA16_EXT),Z===o.SHORT&&Nt&&(ct=Nt.RGBA16_SNORM_EXT),Z===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function V(C,E){let Z;return C?E===null||E===qi||E===qo?Z=o.DEPTH24_STENCIL8:E===Gi?Z=o.DEPTH32F_STENCIL8:E===Wo&&(Z=o.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===qo?Z=o.DEPTH_COMPONENT24:E===Gi?Z=o.DEPTH_COMPONENT32F:E===Wo&&(Z=o.DEPTH_COMPONENT16),Z}function F(C,E){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==wn&&C.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function I(C){const E=C.target;E.removeEventListener("dispose",I),P(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&v.delete(E)}function b(C){const E=C.target;E.removeEventListener("dispose",b),H(E)}function P(C){const E=r.get(C);if(E.__webglInit===void 0)return;const Z=C.source,_t=M.get(Z);if(_t){const Et=_t[E.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&K(C),Object.keys(_t).length===0&&M.delete(Z)}r.remove(C)}function K(C){const E=r.get(C);o.deleteTexture(E.__webglTexture);const Z=C.source,_t=M.get(Z);delete _t[E.__cacheKey],d.memory.textures--}function H(C){const E=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(E.__webglFramebuffer[_t]))for(let Et=0;Et<E.__webglFramebuffer[_t].length;Et++)o.deleteFramebuffer(E.__webglFramebuffer[_t][Et]);else o.deleteFramebuffer(E.__webglFramebuffer[_t]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[_t])}else{if(Array.isArray(E.__webglFramebuffer))for(let _t=0;_t<E.__webglFramebuffer.length;_t++)o.deleteFramebuffer(E.__webglFramebuffer[_t]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _t=0;_t<E.__webglColorRenderbuffer.length;_t++)E.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[_t]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=C.textures;for(let _t=0,Et=Z.length;_t<Et;_t++){const Ct=r.get(Z[_t]);Ct.__webglTexture&&(o.deleteTexture(Ct.__webglTexture),d.memory.textures--),r.remove(Z[_t])}r.remove(C)}let J=0;function ft(){J=0}function pt(){return J}function q(C){J=C}function U(){const C=J;return C>=l.maxTextures&&ee("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l.maxTextures),J+=1,C}function z(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function ot(C,E){const Z=r.get(C);if(C.isVideoTexture&&ze(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Z.__version!==C.version){const _t=C.image;if(_t===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(Z,C,E);return}}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+E)}function gt(C,E){const Z=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){Ht(Z,C,E);return}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+E)}function Mt(C,E){const Z=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){Ht(Z,C,E);return}i.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+E)}function N(C,E){const Z=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&Z.__version!==C.version){$t(Z,C,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+E)}const Q={[Wd]:o.REPEAT,[ga]:o.CLAMP_TO_EDGE,[qd]:o.MIRRORED_REPEAT},xt={[wn]:o.NEAREST,[QS]:o.NEAREST_MIPMAP_NEAREST,[oc]:o.NEAREST_MIPMAP_LINEAR,[Fn]:o.LINEAR,[ad]:o.LINEAR_MIPMAP_NEAREST,[Nr]:o.LINEAR_MIPMAP_LINEAR},At={[ty]:o.NEVER,[ry]:o.ALWAYS,[ey]:o.LESS,[Fh]:o.LEQUAL,[ny]:o.EQUAL,[Ph]:o.GEQUAL,[iy]:o.GREATER,[ay]:o.NOTEQUAL};function Dt(C,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===ad||E.magFilter===oc||E.magFilter===Nr||E.minFilter===Fn||E.minFilter===ad||E.minFilter===oc||E.minFilter===Nr)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(C,o.TEXTURE_WRAP_S,Q[E.wrapS]),o.texParameteri(C,o.TEXTURE_WRAP_T,Q[E.wrapT]),(C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY)&&o.texParameteri(C,o.TEXTURE_WRAP_R,Q[E.wrapR]),o.texParameteri(C,o.TEXTURE_MAG_FILTER,xt[E.magFilter]),o.texParameteri(C,o.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(o.texParameteri(C,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(C,o.TEXTURE_COMPARE_FUNC,At[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==oc&&E.minFilter!==Nr||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function st(C,E){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",I));const _t=E.source;let Et=M.get(_t);Et===void 0&&(Et={},M.set(_t,Et));const Ct=z(E);if(Ct!==C.__cacheKey){Et[Ct]===void 0&&(Et[Ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Z=!0),Et[Ct].usedTimes++;const Nt=Et[C.__cacheKey];Nt!==void 0&&(Et[C.__cacheKey].usedTimes--,Nt.usedTimes===0&&K(E)),C.__cacheKey=Ct,C.__webglTexture=Et[Ct].texture}return Z}function St(C,E,Z){return Math.floor(Math.floor(C/Z)/E)}function bt(C,E,Z,_t){const Ct=C.updateRanges;if(Ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Z,_t,E.data);else{Ct.sort((Ft,Ut)=>Ft.start-Ut.start);let Nt=0;for(let Ft=1;Ft<Ct.length;Ft++){const Ut=Ct[Nt],wt=Ct[Ft],ne=Ut.start+Ut.count,ie=St(wt.start,E.width,4),he=St(Ut.start,E.width,4);wt.start<=ne+1&&ie===he&&St(wt.start+wt.count-1,E.width,4)===ie?Ut.count=Math.max(Ut.count,wt.start+wt.count-Ut.start):(++Nt,Ct[Nt]=wt)}Ct.length=Nt+1;const ct=i.getParameter(o.UNPACK_ROW_LENGTH),ut=i.getParameter(o.UNPACK_SKIP_PIXELS),Ot=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Ft=0,Ut=Ct.length;Ft<Ut;Ft++){const wt=Ct[Ft],ne=Math.floor(wt.start/4),ie=Math.ceil(wt.count/4),he=ne%E.width,G=Math.floor(ne/E.width),Tt=ie,ht=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,he),i.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,he,G,Tt,ht,Z,_t,E.data)}C.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ct),i.pixelStorei(o.UNPACK_SKIP_PIXELS,ut),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ot)}}function Ht(C,E,Z){let _t=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_t=o.TEXTURE_3D);const Et=st(C,E),Ct=E.source;i.bindTexture(_t,C.__webglTexture,o.TEXTURE0+Z);const Nt=r.get(Ct);if(Ct.version!==Nt.__version||Et===!0){if(i.activeTexture(o.TEXTURE0+Z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ht=ye.getPrimaries(ye.workingColorSpace),Bt=E.colorSpace===ar?null:ye.getPrimaries(E.colorSpace),Lt=E.colorSpace===ar||ht===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let ut=y(E.image,!1,l.maxTextureSize);ut=Rt(E,ut);const Ot=u.convert(E.format,E.colorSpace),Ft=u.convert(E.type);let Ut=O(E.internalFormat,Ot,Ft,E.normalized,E.colorSpace,E.isVideoTexture);Dt(_t,E);let wt;const ne=E.mipmaps,ie=E.isVideoTexture!==!0,he=Nt.__version===void 0||Et===!0,G=Ct.dataReady,Tt=F(E,ut);if(E.isDepthTexture)Ut=V(E.format===Or,E.type),he&&(ie?i.texStorage2D(o.TEXTURE_2D,1,Ut,ut.width,ut.height):i.texImage2D(o.TEXTURE_2D,0,Ut,ut.width,ut.height,0,Ot,Ft,null));else if(E.isDataTexture)if(ne.length>0){ie&&he&&i.texStorage2D(o.TEXTURE_2D,Tt,Ut,ne[0].width,ne[0].height);for(let ht=0,Bt=ne.length;ht<Bt;ht++)wt=ne[ht],ie?G&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,wt.width,wt.height,Ot,Ft,wt.data):i.texImage2D(o.TEXTURE_2D,ht,Ut,wt.width,wt.height,0,Ot,Ft,wt.data);E.generateMipmaps=!1}else ie?(he&&i.texStorage2D(o.TEXTURE_2D,Tt,Ut,ut.width,ut.height),G&&bt(E,ut,Ot,Ft)):i.texImage2D(o.TEXTURE_2D,0,Ut,ut.width,ut.height,0,Ot,Ft,ut.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ie&&he&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Tt,Ut,ne[0].width,ne[0].height,ut.depth);for(let ht=0,Bt=ne.length;ht<Bt;ht++)if(wt=ne[ht],E.format!==Ci)if(Ot!==null)if(ie){if(G)if(E.layerUpdates.size>0){const Lt=c_(wt.width,wt.height,E.format,E.type);for(const yt of E.layerUpdates){const qt=wt.data.subarray(yt*Lt/wt.data.BYTES_PER_ELEMENT,(yt+1)*Lt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,yt,wt.width,wt.height,1,Ot,qt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,wt.width,wt.height,ut.depth,Ot,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ht,Ut,wt.width,wt.height,ut.depth,0,wt.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?G&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,wt.width,wt.height,ut.depth,Ot,Ft,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ht,Ut,wt.width,wt.height,ut.depth,0,Ot,Ft,wt.data)}else{ie&&he&&i.texStorage2D(o.TEXTURE_2D,Tt,Ut,ne[0].width,ne[0].height);for(let ht=0,Bt=ne.length;ht<Bt;ht++)wt=ne[ht],E.format!==Ci?Ot!==null?ie?G&&i.compressedTexSubImage2D(o.TEXTURE_2D,ht,0,0,wt.width,wt.height,Ot,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,ht,Ut,wt.width,wt.height,0,wt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?G&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,wt.width,wt.height,Ot,Ft,wt.data):i.texImage2D(o.TEXTURE_2D,ht,Ut,wt.width,wt.height,0,Ot,Ft,wt.data)}else if(E.isDataArrayTexture)if(ie){if(he&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Tt,Ut,ut.width,ut.height,ut.depth),G)if(E.layerUpdates.size>0){const ht=c_(ut.width,ut.height,E.format,E.type);for(const Bt of E.layerUpdates){const Lt=ut.data.subarray(Bt*ht/ut.data.BYTES_PER_ELEMENT,(Bt+1)*ht/ut.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Bt,ut.width,ut.height,1,Ot,Ft,Lt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Ot,Ft,ut.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ut,ut.width,ut.height,ut.depth,0,Ot,Ft,ut.data);else if(E.isData3DTexture)ie?(he&&i.texStorage3D(o.TEXTURE_3D,Tt,Ut,ut.width,ut.height,ut.depth),G&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Ot,Ft,ut.data)):i.texImage3D(o.TEXTURE_3D,0,Ut,ut.width,ut.height,ut.depth,0,Ot,Ft,ut.data);else if(E.isFramebufferTexture){if(he)if(ie)i.texStorage2D(o.TEXTURE_2D,Tt,Ut,ut.width,ut.height);else{let ht=ut.width,Bt=ut.height;for(let Lt=0;Lt<Tt;Lt++)i.texImage2D(o.TEXTURE_2D,Lt,Ut,ht,Bt,0,Ot,Ft,null),ht>>=1,Bt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const ht=o.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),ut.parentNode!==ht){ht.appendChild(ut),v.add(E),ht.onpaint=te=>{const tn=te.changedElements;for(const Re of v)tn.includes(Re.image)&&(Re.needsUpdate=!0)},ht.requestPaint();return}const Bt=0,Lt=o.RGBA,yt=o.RGBA,qt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Bt,Lt,yt,qt,ut),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(ne.length>0){if(ie&&he){const ht=Ze(ne[0]);i.texStorage2D(o.TEXTURE_2D,Tt,Ut,ht.width,ht.height)}for(let ht=0,Bt=ne.length;ht<Bt;ht++)wt=ne[ht],ie?G&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Ot,Ft,wt):i.texImage2D(o.TEXTURE_2D,ht,Ut,Ot,Ft,wt);E.generateMipmaps=!1}else if(ie){if(he){const ht=Ze(ut);i.texStorage2D(o.TEXTURE_2D,Tt,Ut,ht.width,ht.height)}G&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,Ft,ut)}else i.texImage2D(o.TEXTURE_2D,0,Ut,Ot,Ft,ut);S(E)&&w(_t),Nt.__version=Ct.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function $t(C,E,Z){if(E.image.length!==6)return;const _t=st(C,E),Et=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,C.__webglTexture,o.TEXTURE0+Z);const Ct=r.get(Et);if(Et.version!==Ct.__version||_t===!0){i.activeTexture(o.TEXTURE0+Z);const Nt=ye.getPrimaries(ye.workingColorSpace),ct=E.colorSpace===ar?null:ye.getPrimaries(E.colorSpace),ut=E.colorSpace===ar||Nt===ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Ot=E.isCompressedTexture||E.image[0].isCompressedTexture,Ft=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let yt=0;yt<6;yt++)!Ot&&!Ft?Ut[yt]=y(E.image[yt],!0,l.maxCubemapSize):Ut[yt]=Ft?E.image[yt].image:E.image[yt],Ut[yt]=Rt(E,Ut[yt]);const wt=Ut[0],ne=u.convert(E.format,E.colorSpace),ie=u.convert(E.type),he=O(E.internalFormat,ne,ie,E.normalized,E.colorSpace),G=E.isVideoTexture!==!0,Tt=Ct.__version===void 0||_t===!0,ht=Et.dataReady;let Bt=F(E,wt);Dt(o.TEXTURE_CUBE_MAP,E);let Lt;if(Ot){G&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,he,wt.width,wt.height);for(let yt=0;yt<6;yt++){Lt=Ut[yt].mipmaps;for(let qt=0;qt<Lt.length;qt++){const te=Lt[qt];E.format!==Ci?ne!==null?G?ht&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,te.width,te.height,ne,te.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,he,te.width,te.height,0,te.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,te.width,te.height,ne,ie,te.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,he,te.width,te.height,0,ne,ie,te.data)}}}else{if(Lt=E.mipmaps,G&&Tt){Lt.length>0&&Bt++;const yt=Ze(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,he,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Ft){G?ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ut[yt].width,Ut[yt].height,ne,ie,Ut[yt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,he,Ut[yt].width,Ut[yt].height,0,ne,ie,Ut[yt].data);for(let qt=0;qt<Lt.length;qt++){const tn=Lt[qt].image[yt].image;G?ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,tn.width,tn.height,ne,ie,tn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,he,tn.width,tn.height,0,ne,ie,tn.data)}}else{G?ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ne,ie,Ut[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,he,ne,ie,Ut[yt]);for(let qt=0;qt<Lt.length;qt++){const te=Lt[qt];G?ht&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,ne,ie,te.image[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,he,ne,ie,te.image[yt])}}}S(E)&&w(o.TEXTURE_CUBE_MAP),Ct.__version=Et.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Qt(C,E,Z,_t,Et,Ct){const Nt=u.convert(Z.format,Z.colorSpace),ct=u.convert(Z.type),ut=O(Z.internalFormat,Nt,ct,Z.normalized,Z.colorSpace),Ot=r.get(E),Ft=r.get(Z);if(Ft.__renderTarget=E,!Ot.__hasExternalTextures){const Ut=Math.max(1,E.width>>Ct),wt=Math.max(1,E.height>>Ct);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,Ct,ut,Ut,wt,E.depth,0,Nt,ct,null):i.texImage2D(Et,Ct,ut,Ut,wt,0,Nt,ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,C),de(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,Et,Ft.__webglTexture,0,$e(E)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,Et,Ft.__webglTexture,Ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(C,E,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,C),E.depthBuffer){const _t=E.depthTexture,Et=_t&&_t.isDepthTexture?_t.type:null,Ct=V(E.stencilBuffer,Et),Nt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;de(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$e(E),Ct,E.width,E.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,$e(E),Ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,C)}else{const _t=E.textures;for(let Et=0;Et<_t.length;Et++){const Ct=_t[Et],Nt=u.convert(Ct.format,Ct.colorSpace),ct=u.convert(Ct.type),ut=O(Ct.internalFormat,Nt,ct,Ct.normalized,Ct.colorSpace);de(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$e(E),ut,E.width,E.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,$e(E),ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function fe(C,E,Z){const _t=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=r.get(E.depthTexture);if(Et.__renderTarget=E,(!Et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_t){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),Et.__webglTexture===void 0){Et.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Et.__webglTexture),Dt(o.TEXTURE_CUBE_MAP,E.depthTexture);const Ot=u.convert(E.depthTexture.format),Ft=u.convert(E.depthTexture.type);let Ut;E.depthTexture.format===ya?Ut=o.DEPTH_COMPONENT24:E.depthTexture.format===Or&&(Ut=o.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ut,E.width,E.height,0,Ot,Ft,null)}}else ot(E.depthTexture,0);const Ct=Et.__webglTexture,Nt=$e(E),ct=_t?o.TEXTURE_CUBE_MAP_POSITIVE_X+Z:o.TEXTURE_2D,ut=E.depthTexture.format===Or?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)de(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,ct,Ct,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,ut,ct,Ct,0);else if(E.depthTexture.format===Or)de(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,ct,Ct,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,ut,ct,Ct,0);else throw new Error("Unknown depthTexture format")}function _e(C){const E=r.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const _t=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_t){const Et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_t.removeEventListener("dispose",Et)};_t.addEventListener("dispose",Et),E.__depthDisposeCallback=Et}E.__boundDepthTexture=_t}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let _t=0;_t<6;_t++)fe(E.__webglFramebuffer[_t],C,_t);else{const _t=C.texture.mipmaps;_t&&_t.length>0?fe(E.__webglFramebuffer[0],C,0):fe(E.__webglFramebuffer,C,0)}else if(Z){E.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[_t]),E.__webglDepthbuffer[_t]===void 0)E.__webglDepthbuffer[_t]=o.createRenderbuffer(),ke(E.__webglDepthbuffer[_t],C,!1);else{const Et=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,Ct)}}else{const _t=C.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ke(E.__webglDepthbuffer,C,!1);else{const Et=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,Ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function De(C,E,Z){const _t=r.get(C);E!==void 0&&Qt(_t.__webglFramebuffer,C,C.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&_e(C)}function le(C){const E=C.texture,Z=r.get(C),_t=r.get(E);C.addEventListener("dispose",b);const Et=C.textures,Ct=C.isWebGLCubeRenderTarget===!0,Nt=Et.length>1;if(Nt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=E.version,d.memory.textures++),Ct){Z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[ct]=[];for(let ut=0;ut<E.mipmaps.length;ut++)Z.__webglFramebuffer[ct][ut]=o.createFramebuffer()}else Z.__webglFramebuffer[ct]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ct=0;ct<E.mipmaps.length;ct++)Z.__webglFramebuffer[ct]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(Nt)for(let ct=0,ut=Et.length;ct<ut;ct++){const Ot=r.get(Et[ct]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=o.createTexture(),d.memory.textures++)}if(C.samples>0&&de(C)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ct=0;ct<Et.length;ct++){const ut=Et[ct];Z.__webglColorRenderbuffer[ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[ct]);const Ot=u.convert(ut.format,ut.colorSpace),Ft=u.convert(ut.type),Ut=O(ut.internalFormat,Ot,Ft,ut.normalized,ut.colorSpace,C.isXRRenderTarget===!0),wt=$e(C);o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,Ut,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ct,o.RENDERBUFFER,Z.__webglColorRenderbuffer[ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(Z.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ct){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),Dt(o.TEXTURE_CUBE_MAP,E);for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let ut=0;ut<E.mipmaps.length;ut++)Qt(Z.__webglFramebuffer[ct][ut],C,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ut);else Qt(Z.__webglFramebuffer[ct],C,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);S(E)&&w(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let ct=0,ut=Et.length;ct<ut;ct++){const Ot=Et[ct],Ft=r.get(Ot);let Ut=o.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ut=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Ft.__webglTexture),Dt(Ut,Ot),Qt(Z.__webglFramebuffer,C,Ot,o.COLOR_ATTACHMENT0+ct,Ut,0),S(Ot)&&w(Ut)}i.unbindTexture()}else{let ct=o.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ct,_t.__webglTexture),Dt(ct,E),E.mipmaps&&E.mipmaps.length>0)for(let ut=0;ut<E.mipmaps.length;ut++)Qt(Z.__webglFramebuffer[ut],C,E,o.COLOR_ATTACHMENT0,ct,ut);else Qt(Z.__webglFramebuffer,C,E,o.COLOR_ATTACHMENT0,ct,0);S(E)&&w(ct),i.unbindTexture()}C.depthBuffer&&_e(C)}function an(C){const E=C.textures;for(let Z=0,_t=E.length;Z<_t;Z++){const Et=E[Z];if(S(Et)){const Ct=L(C),Nt=r.get(Et).__webglTexture;i.bindTexture(Ct,Nt),w(Ct),i.unbindTexture()}}}const qe=[],En=[];function X(C){if(C.samples>0){if(de(C)===!1){const E=C.textures,Z=C.width,_t=C.height;let Et=o.COLOR_BUFFER_BIT;const Ct=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=r.get(C),ct=E.length>1;if(ct)for(let Ot=0;Ot<E.length;Ot++)i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const ut=C.texture.mipmaps;ut&&ut.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ot=0;Ot<E.length;Ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ot]);const Ft=r.get(E[Ot]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ft,0)}o.blitFramebuffer(0,0,Z,_t,0,0,Z,_t,Et,o.NEAREST),m===!0&&(qe.length=0,En.length=0,qe.push(o.COLOR_ATTACHMENT0+Ot),C.depthBuffer&&C.resolveDepthBuffer===!1&&(qe.push(Ct),En.push(Ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,En)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,qe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ct)for(let Ot=0;Ot<E.length;Ot++){i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ot]);const Ft=r.get(E[Ot]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,Ft,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&m){const E=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function $e(C){return Math.min(l.maxSamples,C.samples)}function de(C){const E=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ze(C){const E=d.render.frame;x.get(C)!==E&&(x.set(C,E),C.update())}function Rt(C,E){const Z=C.colorSpace,_t=C.format,Et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==Bc&&Z!==ar&&(ye.getTransfer(Z)===Pe?(_t!==Ci||Et!==vi)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",Z)),E}function Ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=U,this.resetTextureUnits=ft,this.getTextureUnits=pt,this.setTextureUnits=q,this.setTexture2D=ot,this.setTexture2DArray=gt,this.setTexture3D=Mt,this.setTextureCube=N,this.rebindTextures=De,this.setupRenderTarget=le,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function F1(o,e){function i(r,l=ar){let u;const d=ye.getTransfer(l);if(r===vi)return o.UNSIGNED_BYTE;if(r===Dh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Uh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===W_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===q_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===k_)return o.BYTE;if(r===X_)return o.SHORT;if(r===Wo)return o.UNSIGNED_SHORT;if(r===wh)return o.INT;if(r===qi)return o.UNSIGNED_INT;if(r===Gi)return o.FLOAT;if(r===Sa)return o.HALF_FLOAT;if(r===Y_)return o.ALPHA;if(r===j_)return o.RGB;if(r===Ci)return o.RGBA;if(r===ya)return o.DEPTH_COMPONENT;if(r===Or)return o.DEPTH_STENCIL;if(r===Z_)return o.RED;if(r===Lh)return o.RED_INTEGER;if(r===Pr)return o.RG;if(r===Nh)return o.RG_INTEGER;if(r===Oh)return o.RGBA_INTEGER;if(r===Uc||r===Lc||r===Nc||r===Oc)if(d===Pe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Uc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Uc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yd||r===jd||r===Zd||r===Kd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Yd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qd||r===Jd||r===$d||r===th||r===eh||r===Pc||r===nh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Qd||r===Jd)return d===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===$d)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===th)return u.COMPRESSED_R11_EAC;if(r===eh)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Pc)return u.COMPRESSED_RG11_EAC;if(r===nh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ih)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rh)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ch)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dh)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hh)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ph)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mh)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gh)return d===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_h||r===vh||r===xh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===_h)return d===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sh||r===yh||r===zc||r===Mh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Sh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===yh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const P1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class B1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new av(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Di({vertexShader:P1,fragmentShader:z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wi(new zs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I1 extends Br{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,x=null,v=null,_=null,M=null,T=null;const D=typeof XRWebGLBinding<"u",y=new B1,S={},w=i.getContextAttributes();let L=null,O=null;const V=[],F=[],I=new Ve;let b=null;const P=new _i;P.viewport=new cn;const K=new _i;K.viewport=new cn;const H=[P,K],J=new jy;let ft=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let St=V[st];return St===void 0&&(St=new dd,V[st]=St),St.getTargetRaySpace()},this.getControllerGrip=function(st){let St=V[st];return St===void 0&&(St=new dd,V[st]=St),St.getGripSpace()},this.getHand=function(st){let St=V[st];return St===void 0&&(St=new dd,V[st]=St),St.getHandSpace()};function q(st){const St=F.indexOf(st.inputSource);if(St===-1)return;const bt=V[St];bt!==void 0&&(bt.update(st.inputSource,st.frame,p||d),bt.dispatchEvent({type:st.type,data:st.inputSource}))}function U(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",z);for(let st=0;st<V.length;st++){const St=F[st];St!==null&&(F[st]=null,V[st].disconnect(St))}ft=null,pt=null,y.reset();for(const st in S)delete S[st];e.setRenderTarget(L),M=null,_=null,v=null,l=null,O=null,Dt.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){u=st,r.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){h=st,r.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(st){p=st},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",U),l.addEventListener("inputsourceschange",z),w.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(I),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ht=null,$t=null;w.depth&&($t=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=w.stencil?Or:ya,Ht=w.stencil?qo:qi);const Qt={colorFormat:i.RGBA8,depthFormat:$t,scaleFactor:u};v=this.getBinding(),_=v.createProjectionLayer(Qt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),O=new Xi(_.textureWidth,_.textureHeight,{format:Ci,type:vi,depthTexture:new Ps(_.textureWidth,_.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const bt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Xi(M.framebufferWidth,M.framebufferHeight,{format:Ci,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Dt.setContext(l),Dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z(st){for(let St=0;St<st.removed.length;St++){const bt=st.removed[St],Ht=F.indexOf(bt);Ht>=0&&(F[Ht]=null,V[Ht].disconnect(bt))}for(let St=0;St<st.added.length;St++){const bt=st.added[St];let Ht=F.indexOf(bt);if(Ht===-1){for(let Qt=0;Qt<V.length;Qt++)if(Qt>=F.length){F.push(bt),Ht=Qt;break}else if(F[Qt]===null){F[Qt]=bt,Ht=Qt;break}if(Ht===-1)break}const $t=V[Ht];$t&&$t.connect(bt)}}const ot=new it,gt=new it;function Mt(st,St,bt){ot.setFromMatrixPosition(St.matrixWorld),gt.setFromMatrixPosition(bt.matrixWorld);const Ht=ot.distanceTo(gt),$t=St.projectionMatrix.elements,Qt=bt.projectionMatrix.elements,ke=$t[14]/($t[10]-1),fe=$t[14]/($t[10]+1),_e=($t[9]+1)/$t[5],De=($t[9]-1)/$t[5],le=($t[8]-1)/$t[0],an=(Qt[8]+1)/Qt[0],qe=ke*le,En=ke*an,X=Ht/(-le+an),$e=X*-le;if(St.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX($e),st.translateZ(X),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),$t[10]===-1)st.projectionMatrix.copy(St.projectionMatrix),st.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const de=ke+X,ze=fe+X,Rt=qe-$e,Ze=En+(Ht-$e),C=_e*fe/ze*de,E=De*fe/ze*de;st.projectionMatrix.makePerspective(Rt,Ze,C,E,de,ze),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function N(st,St){St===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(St.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let St=st.near,bt=st.far;y.texture!==null&&(y.depthNear>0&&(St=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),J.near=K.near=P.near=St,J.far=K.far=P.far=bt,(ft!==J.near||pt!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),ft=J.near,pt=J.far),J.layers.mask=st.layers.mask|6,P.layers.mask=J.layers.mask&-5,K.layers.mask=J.layers.mask&-3;const Ht=st.parent,$t=J.cameras;N(J,Ht);for(let Qt=0;Qt<$t.length;Qt++)N($t[Qt],Ht);$t.length===2?Mt(J,P,K):J.projectionMatrix.copy(P.projectionMatrix),Q(st,J,Ht)};function Q(st,St,bt){bt===null?st.matrix.copy(St.matrixWorld):(st.matrix.copy(bt.matrixWorld),st.matrix.invert(),st.matrix.multiply(St.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(St.projectionMatrix),st.projectionMatrixInverse.copy(St.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=bh*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(st){m=st,_!==null&&(_.fixedFoveation=st),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=st)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(st){return S[st]};let xt=null;function At(st,St){if(x=St.getViewerPose(p||d),T=St,x!==null){const bt=x.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let Ht=!1;bt.length!==J.cameras.length&&(J.cameras.length=0,Ht=!0);for(let fe=0;fe<bt.length;fe++){const _e=bt[fe];let De=null;if(M!==null)De=M.getViewport(_e);else{const an=v.getViewSubImage(_,_e);De=an.viewport,fe===0&&(e.setRenderTargetTextures(O,an.colorTexture,an.depthStencilTexture),e.setRenderTarget(O))}let le=H[fe];le===void 0&&(le=new _i,le.layers.enable(fe),le.viewport=new cn,H[fe]=le),le.matrix.fromArray(_e.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(_e.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(De.x,De.y,De.width,De.height),fe===0&&(J.matrix.copy(le.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ht===!0&&J.cameras.push(le)}const $t=l.enabledFeatures;if($t&&$t.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){v=r.getBinding();const fe=v.getDepthInformation(bt[0]);fe&&fe.isValid&&fe.texture&&y.init(fe,l.renderState)}if($t&&$t.includes("camera-access")&&D){e.state.unbindTexture(),v=r.getBinding();for(let fe=0;fe<bt.length;fe++){const _e=bt[fe].camera;if(_e){let De=S[_e];De||(De=new av,S[_e]=De);const le=v.getCameraImage(_e);De.sourceTexture=le}}}}for(let bt=0;bt<V.length;bt++){const Ht=F[bt],$t=V[bt];Ht!==null&&$t!==void 0&&$t.update(Ht,St,p||d)}xt&&xt(st,St),St.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:St}),T=null}const Dt=new lv;Dt.setAnimationLoop(At),this.setAnimationLoop=function(st){xt=st},this.dispose=function(){}}}const H1=new vn,mv=new re;mv.set(-1,0,0,0,1,0,0,0,1);function G1(o,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,rv(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,w,L,O){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(y,S):S.isMeshLambertMaterial?(u(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(y,S),v(y,S)):S.isMeshPhongMaterial?(u(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(y,S),_(y,S),S.isMeshPhysicalMaterial&&M(y,S,O)):S.isMeshMatcapMaterial?(u(y,S),T(y,S)):S.isMeshDepthMaterial?u(y,S):S.isMeshDistanceMaterial?(u(y,S),D(y,S)):S.isMeshNormalMaterial?u(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?m(y,S,w,L):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===qn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===qn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=e.get(S),L=w.envMap,O=w.envMapRotation;L&&(y.envMap.value=L,y.envMapRotation.value.setFromMatrix4(H1.makeRotationFromEuler(O)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(mv),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,w,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=L*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,w){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===qn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,S){S.matcap&&(y.matcap.value=S.matcap)}function D(y,S){const w=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function V1(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,L){const O=L.program;r.uniformBlockBinding(w,O)}function p(w,L){let O=l[w.id];O===void 0&&(T(w),O=x(w),l[w.id]=O,w.addEventListener("dispose",y));const V=L.program;r.updateUBOMapping(w,V);const F=e.render.frame;u[w.id]!==F&&(_(w),u[w.id]=F)}function x(w){const L=v();w.__bindingPointIndex=L;const O=o.createBuffer(),V=w.__size,F=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,V,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,O),O}function v(){for(let w=0;w<h;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const L=l[w.id],O=w.uniforms,V=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let F=0,I=O.length;F<I;F++){const b=Array.isArray(O[F])?O[F]:[O[F]];for(let P=0,K=b.length;P<K;P++){const H=b[P];if(M(H,F,P,V)===!0){const J=H.__offset,ft=Array.isArray(H.value)?H.value:[H.value];let pt=0;for(let q=0;q<ft.length;q++){const U=ft[q],z=D(U);typeof U=="number"||typeof U=="boolean"?(H.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,J+pt,H.__data)):U.isMatrix3?(H.__data[0]=U.elements[0],H.__data[1]=U.elements[1],H.__data[2]=U.elements[2],H.__data[3]=0,H.__data[4]=U.elements[3],H.__data[5]=U.elements[4],H.__data[6]=U.elements[5],H.__data[7]=0,H.__data[8]=U.elements[6],H.__data[9]=U.elements[7],H.__data[10]=U.elements[8],H.__data[11]=0):ArrayBuffer.isView(U)?H.__data.set(new U.constructor(U.buffer,U.byteOffset,H.__data.length)):(U.toArray(H.__data,pt),pt+=z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(w,L,O,V){const F=w.value,I=L+"_"+O;if(V[I]===void 0)return typeof F=="number"||typeof F=="boolean"?V[I]=F:ArrayBuffer.isView(F)?V[I]=F.slice():V[I]=F.clone(),!0;{const b=V[I];if(typeof F=="number"||typeof F=="boolean"){if(b!==F)return V[I]=F,!0}else{if(ArrayBuffer.isView(F))return!0;if(b.equals(F)===!1)return b.copy(F),!0}}return!1}function T(w){const L=w.uniforms;let O=0;const V=16;for(let I=0,b=L.length;I<b;I++){const P=Array.isArray(L[I])?L[I]:[L[I]];for(let K=0,H=P.length;K<H;K++){const J=P[K],ft=Array.isArray(J.value)?J.value:[J.value];for(let pt=0,q=ft.length;pt<q;pt++){const U=ft[pt],z=D(U),ot=O%V,gt=ot%z.boundary,Mt=ot+gt;O+=gt,Mt!==0&&V-Mt<z.storage&&(O+=V-Mt),J.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=O,O+=z.storage}}}const F=O%V;return F>0&&(O+=V-F),w.__size=O,w.__cache={},this}function D(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(L.boundary=16,L.storage=w.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",w),L}function y(w){const L=w.target;L.removeEventListener("dispose",y);const O=d.indexOf(L.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function S(){for(const w in l)o.deleteBuffer(l[w]);d=[],l={},u={}}return{bind:m,update:p,dispose:S}}const k1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function X1(){return Bi===null&&(Bi=new Uy(k1,16,16,Pr,Sa),Bi.name="DFG_LUT",Bi.minFilter=Fn,Bi.magFilter=Fn,Bi.wrapS=ga,Bi.wrapT=ga,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class W1{constructor(e={}){const{canvas:i=oy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:M=vi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const D=M,y=new Set([Oh,Nh,Lh]),S=new Set([vi,qi,Wo,qo,Dh,Uh]),w=new Uint32Array(4),L=new Int32Array(4),O=new it;let V=null,F=null;const I=[],b=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let H=!1,J=null;this._outputColorSpace=ri;let ft=0,pt=0,q=null,U=-1,z=null;const ot=new cn,gt=new cn;let Mt=null;const N=new Ge(0);let Q=0,xt=i.width,At=i.height,Dt=1,st=null,St=null;const bt=new cn(0,0,xt,At),Ht=new cn(0,0,xt,At);let $t=!1;const Qt=new nv;let ke=!1,fe=!1;const _e=new vn,De=new it,le=new cn,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function En(){return q===null?Dt:1}let X=r;function $e(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ch}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",qt,!1),i.addEventListener("webglcontextcreationerror",te,!1),X===null){const W="webgl2";if(X=$e(W,A),X===null)throw $e(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ee("WebGLRenderer: "+A.message),A}let de,ze,Rt,Ze,C,E,Z,_t,Et,Ct,Nt,ct,ut,Ot,Ft,Ut,wt,ne,ie,he,G,Tt,ht;function Bt(){de=new Xb(X),de.init(),G=new F1(X,de),ze=new Pb(X,de,e,G),Rt=new N1(X,de),ze.reversedDepthBuffer&&_&&Rt.buffers.depth.setReversed(!0),Ze=new Yb(X),C=new x1,E=new O1(X,de,Rt,C,ze,G,Ze),Z=new kb(K),_t=new Qy(X),Tt=new Ob(X,_t),Et=new Wb(X,_t,Ze,Tt),Ct=new Zb(X,Et,_t,Tt,Ze),ne=new jb(X,ze,E),Ft=new zb(C),Nt=new v1(K,Z,de,ze,Tt,Ft),ct=new G1(K,C),ut=new y1,Ot=new R1(de),wt=new Nb(K,Z,Rt,Ct,T,m),Ut=new L1(K,Ct,ze),ht=new V1(X,Ze,ze,Rt),ie=new Fb(X,de,Ze),he=new qb(X,de,Ze),Ze.programs=Nt.programs,K.capabilities=ze,K.extensions=de,K.properties=C,K.renderLists=ut,K.shadowMap=Ut,K.state=Rt,K.info=Ze}Bt(),D!==vi&&(P=new Qb(D,i.width,i.height,l,u));const Lt=new I1(K,X);this.xr=Lt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(A){A!==void 0&&(Dt=A,this.setSize(xt,At,!1))},this.getSize=function(A){return A.set(xt,At)},this.setSize=function(A,W,at=!0){if(Lt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=A,At=W,i.width=Math.floor(A*Dt),i.height=Math.floor(W*Dt),at===!0&&(i.style.width=A+"px",i.style.height=W+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(xt*Dt,At*Dt).floor()},this.setDrawingBufferSize=function(A,W,at){xt=A,At=W,Dt=at,i.width=Math.floor(A*at),i.height=Math.floor(W*at),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(D===vi){Ee("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){ee("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ot)},this.getViewport=function(A){return A.copy(bt)},this.setViewport=function(A,W,at,et){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,W,at,et),Rt.viewport(ot.copy(bt).multiplyScalar(Dt).round())},this.getScissor=function(A){return A.copy(Ht)},this.setScissor=function(A,W,at,et){A.isVector4?Ht.set(A.x,A.y,A.z,A.w):Ht.set(A,W,at,et),Rt.scissor(gt.copy(Ht).multiplyScalar(Dt).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(A){Rt.setScissorTest($t=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){St=A},this.getClearColor=function(A){return A.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,at=!0){let et=0;if(A){let nt=!1;if(q!==null){const zt=q.texture.format;nt=y.has(zt)}if(nt){const zt=q.texture.type,Vt=S.has(zt),Pt=wt.getClearColor(),Xt=wt.getClearAlpha(),kt=Pt.r,Zt=Pt.g,se=Pt.b;Vt?(w[0]=kt,w[1]=Zt,w[2]=se,w[3]=Xt,X.clearBufferuiv(X.COLOR,0,w)):(L[0]=kt,L[1]=Zt,L[2]=se,L[3]=Xt,X.clearBufferiv(X.COLOR,0,L))}else et|=X.COLOR_BUFFER_BIT}W&&(et|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(et|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&X.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",qt,!1),i.removeEventListener("webglcontextcreationerror",te,!1),wt.dispose(),ut.dispose(),Ot.dispose(),C.dispose(),Z.dispose(),Ct.dispose(),Tt.dispose(),ht.dispose(),Nt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Vs),Lt.removeEventListener("sessionend",ks),Dn.stop()};function yt(A){A.preventDefault(),kg("WebGLRenderer: Context Lost."),H=!0}function qt(){kg("WebGLRenderer: Context Restored."),H=!1;const A=Ze.autoReset,W=Ut.enabled,at=Ut.autoUpdate,et=Ut.needsUpdate,nt=Ut.type;Bt(),Ze.autoReset=A,Ut.enabled=W,Ut.autoUpdate=at,Ut.needsUpdate=et,Ut.type=nt}function te(A){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tn(A){const W=A.target;W.removeEventListener("dispose",tn),Re(W)}function Re(A){oi(A),C.remove(A)}function oi(A){const W=C.get(A).programs;W!==void 0&&(W.forEach(function(at){Nt.releaseProgram(at)}),A.isShaderMaterial&&Nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,at,et,nt,zt){W===null&&(W=an);const Vt=nt.isMesh&&nt.matrixWorld.determinant()<0,Pt=Ta(A,W,at,et,nt);Rt.setMaterial(et,Vt);let Xt=at.index,kt=1;if(et.wireframe===!0){if(Xt=Et.getWireframeAttribute(at),Xt===void 0)return;kt=2}const Zt=at.drawRange,se=at.attributes.position;let jt=Zt.start*kt,be=(Zt.start+Zt.count)*kt;zt!==null&&(jt=Math.max(jt,zt.start*kt),be=Math.min(be,(zt.start+zt.count)*kt)),Xt!==null?(jt=Math.max(jt,0),be=Math.min(be,Xt.count)):se!=null&&(jt=Math.max(jt,0),be=Math.min(be,se.count));const Ke=be-jt;if(Ke<0||Ke===1/0)return;Tt.setup(nt,et,Pt,at,Xt);let Xe,Ue=ie;if(Xt!==null&&(Xe=_t.get(Xt),Ue=he,Ue.setIndex(Xe)),nt.isMesh)et.wireframe===!0?(Rt.setLineWidth(et.wireframeLinewidth*En()),Ue.setMode(X.LINES)):Ue.setMode(X.TRIANGLES);else if(nt.isLine){let Le=et.linewidth;Le===void 0&&(Le=1),Rt.setLineWidth(Le*En()),nt.isLineSegments?Ue.setMode(X.LINES):nt.isLineLoop?Ue.setMode(X.LINE_LOOP):Ue.setMode(X.LINE_STRIP)}else nt.isPoints?Ue.setMode(X.POINTS):nt.isSprite&&Ue.setMode(X.TRIANGLES);if(nt.isBatchedMesh)if(de.get("WEBGL_multi_draw"))Ue.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Le=nt._multiDrawStarts,Gt=nt._multiDrawCounts,Un=nt._multiDrawCount,pe=Xt?_t.get(Xt).bytesPerElement:1,gn=C.get(et).currentProgram.getUniforms();for(let jn=0;jn<Un;jn++)gn.setValue(X,"_gl_DrawID",jn),Ue.render(Le[jn]/pe,Gt[jn])}else if(nt.isInstancedMesh)Ue.renderInstances(jt,Ke,nt.count);else if(at.isInstancedBufferGeometry){const Le=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Gt=Math.min(at.instanceCount,Le);Ue.renderInstances(jt,Ke,Gt)}else Ue.render(jt,Ke)};function Yn(A,W,at){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,Ir(A,W,at),A.side=sr,A.needsUpdate=!0,Ir(A,W,at),A.side=Hi):Ir(A,W,at)}this.compile=function(A,W,at=null){at===null&&(at=A),F=Ot.get(at),F.init(W),b.push(F),at.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(F.pushLight(nt),nt.castShadow&&F.pushShadow(nt))}),A!==at&&A.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(F.pushLight(nt),nt.castShadow&&F.pushShadow(nt))}),F.setupLights();const et=new Set;return A.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const zt=nt.material;if(zt)if(Array.isArray(zt))for(let Vt=0;Vt<zt.length;Vt++){const Pt=zt[Vt];Yn(Pt,at,nt),et.add(Pt)}else Yn(zt,at,nt),et.add(zt)}),F=b.pop(),et},this.compileAsync=function(A,W,at=null){const et=this.compile(A,W,at);return new Promise(nt=>{function zt(){if(et.forEach(function(Vt){C.get(Vt).currentProgram.isReady()&&et.delete(Vt)}),et.size===0){nt(A);return}setTimeout(zt,10)}de.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let or=null;function Gs(A){or&&or(A)}function Vs(){Dn.stop()}function ks(){Dn.start()}const Dn=new lv;Dn.setAnimationLoop(Gs),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(A){or=A,Lt.setAnimationLoop(A),A===null?Dn.stop():Dn.start()},Lt.addEventListener("sessionstart",Vs),Lt.addEventListener("sessionend",ks),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;J!==null&&J.renderStart(A,W);const at=Lt.enabled===!0&&Lt.isPresenting===!0,et=P!==null&&(q===null||at)&&P.begin(K,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(W),W=Lt.getCamera()),A.isScene===!0&&A.onBeforeRender(K,A,W,q),F=Ot.get(A,b.length),F.init(W),F.state.textureUnits=E.getTextureUnits(),b.push(F),_e.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Qt.setFromProjectionMatrix(_e,Vi,W.reversedDepth),fe=this.localClippingEnabled,ke=Ft.init(this.clippingPlanes,fe),V=ut.get(A,I.length),V.init(),I.push(V),Lt.enabled===!0&&Lt.isPresenting===!0){const Vt=K.xr.getDepthSensingMesh();Vt!==null&&rn(Vt,W,-1/0,K.sortObjects)}rn(A,W,0,K.sortObjects),V.finish(),K.sortObjects===!0&&V.sort(st,St),qe=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,qe&&wt.addToRenderList(V,A),this.info.render.frame++,ke===!0&&Ft.beginShadows();const nt=F.state.shadowsArray;if(Ut.render(nt,A,W),ke===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&P.hasRenderPass())===!1){const Vt=V.opaque,Pt=V.transmissive;if(F.setupLights(),W.isArrayCamera){const Xt=W.cameras;if(Pt.length>0)for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const se=Xt[kt];Yi(Vt,Pt,A,se)}qe&&wt.render(A);for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const se=Xt[kt];bn(V,A,se,se.viewport)}}else Pt.length>0&&Yi(Vt,Pt,A,W),qe&&wt.render(A),bn(V,A,W)}q!==null&&pt===0&&(E.updateMultisampleRenderTarget(q),E.updateRenderTargetMipmap(q)),et&&P.end(K),A.isScene===!0&&A.onAfterRender(K,A,W),Tt.resetDefaultState(),U=-1,z=null,b.pop(),b.length>0?(F=b[b.length-1],E.setTextureUnits(F.state.textureUnits),ke===!0&&Ft.setGlobalState(K.clippingPlanes,F.state.camera)):F=null,I.pop(),I.length>0?V=I[I.length-1]:V=null,J!==null&&J.renderEnd()};function rn(A,W,at,et){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)F.pushLightProbeGrid(A);else if(A.isLight)F.pushLight(A),A.castShadow&&F.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qt.intersectsSprite(A)){et&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const Vt=Ct.update(A),Pt=A.material;Pt.visible&&V.push(A,Vt,Pt,at,le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qt.intersectsObject(A))){const Vt=Ct.update(A),Pt=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),le.copy(A.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),le.copy(Vt.boundingSphere.center)),le.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Pt)){const Xt=Vt.groups;for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const se=Xt[kt],jt=Pt[se.materialIndex];jt&&jt.visible&&V.push(A,Vt,jt,at,le.z,se)}}else Pt.visible&&V.push(A,Vt,Pt,at,le.z,null)}}const zt=A.children;for(let Vt=0,Pt=zt.length;Vt<Pt;Vt++)rn(zt[Vt],W,at,et)}function bn(A,W,at,et){const{opaque:nt,transmissive:zt,transparent:Vt}=A;F.setupLightsView(at),ke===!0&&Ft.setGlobalState(K.clippingPlanes,at),et&&Rt.viewport(ot.copy(et)),nt.length>0&&Ea(nt,W,at),zt.length>0&&Ea(zt,W,at),Vt.length>0&&Ea(Vt,W,at),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Yi(A,W,at,et){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[et.id]===void 0){const jt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[et.id]=new Xi(1,1,{generateMipmaps:!0,type:jt?Sa:vi,minFilter:Nr,samples:Math.max(4,ze.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace})}const zt=F.state.transmissionRenderTarget[et.id],Vt=et.viewport||ot;zt.setSize(Vt.z*K.transmissionResolutionScale,Vt.w*K.transmissionResolutionScale);const Pt=K.getRenderTarget(),Xt=K.getActiveCubeFace(),kt=K.getActiveMipmapLevel();K.setRenderTarget(zt),K.getClearColor(N),Q=K.getClearAlpha(),Q<1&&K.setClearColor(16777215,.5),K.clear(),qe&&wt.render(at);const Zt=K.toneMapping;K.toneMapping=ki;const se=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),F.setupLightsView(et),ke===!0&&Ft.setGlobalState(K.clippingPlanes,et),Ea(A,at,et),E.updateMultisampleRenderTarget(zt),E.updateRenderTargetMipmap(zt),de.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let be=0,Ke=W.length;be<Ke;be++){const Xe=W[be],{object:Ue,geometry:Le,material:Gt,group:Un}=Xe;if(Gt.side===Hi&&Ue.layers.test(et.layers)){const pe=Gt.side;Gt.side=qn,Gt.needsUpdate=!0,Qo(Ue,at,et,Le,Gt,Un),Gt.side=pe,Gt.needsUpdate=!0,jt=!0}}jt===!0&&(E.updateMultisampleRenderTarget(zt),E.updateRenderTargetMipmap(zt))}K.setRenderTarget(Pt,Xt,kt),K.setClearColor(N,Q),se!==void 0&&(et.viewport=se),K.toneMapping=Zt}function Ea(A,W,at){const et=W.isScene===!0?W.overrideMaterial:null;for(let nt=0,zt=A.length;nt<zt;nt++){const Vt=A[nt],{object:Pt,geometry:Xt,group:kt}=Vt;let Zt=Vt.material;Zt.allowOverride===!0&&et!==null&&(Zt=et),Pt.layers.test(at.layers)&&Qo(Pt,W,at,Xt,Zt,kt)}}function Qo(A,W,at,et,nt,zt){A.onBeforeRender(K,W,at,et,nt,zt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),nt.onBeforeRender(K,W,at,et,A,zt),nt.transparent===!0&&nt.side===Hi&&nt.forceSinglePass===!1?(nt.side=qn,nt.needsUpdate=!0,K.renderBufferDirect(at,W,et,nt,A,zt),nt.side=sr,nt.needsUpdate=!0,K.renderBufferDirect(at,W,et,nt,A,zt),nt.side=Hi):K.renderBufferDirect(at,W,et,nt,A,zt),A.onAfterRender(K,W,at,et,nt,zt)}function Ir(A,W,at){W.isScene!==!0&&(W=an);const et=C.get(A),nt=F.state.lights,zt=F.state.shadowsArray,Vt=nt.state.version,Pt=Nt.getParameters(A,nt.state,zt,W,at,F.state.lightProbeGridArray),Xt=Nt.getProgramCacheKey(Pt);let kt=et.programs;et.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,et.fog=W.fog;const Zt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;et.envMap=Z.get(A.envMap||et.environment,Zt),et.envMapRotation=et.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",tn),kt=new Map,et.programs=kt);let se=kt.get(Xt);if(se!==void 0){if(et.currentProgram===se&&et.lightsStateVersion===Vt)return ba(A,Pt),se}else Pt.uniforms=Nt.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,at,Pt),A.onBeforeCompile(Pt,K),se=Nt.acquireProgram(Pt,Xt),kt.set(Xt,se),et.uniforms=Pt.uniforms;const jt=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(jt.clippingPlanes=Ft.uniform),ba(A,Pt),et.needsLights=lr(A),et.lightsStateVersion=Vt,et.needsLights&&(jt.ambientLightColor.value=nt.state.ambient,jt.lightProbe.value=nt.state.probe,jt.directionalLights.value=nt.state.directional,jt.directionalLightShadows.value=nt.state.directionalShadow,jt.spotLights.value=nt.state.spot,jt.spotLightShadows.value=nt.state.spotShadow,jt.rectAreaLights.value=nt.state.rectArea,jt.ltc_1.value=nt.state.rectAreaLTC1,jt.ltc_2.value=nt.state.rectAreaLTC2,jt.pointLights.value=nt.state.point,jt.pointLightShadows.value=nt.state.pointShadow,jt.hemisphereLights.value=nt.state.hemi,jt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,jt.spotLightMatrix.value=nt.state.spotLightMatrix,jt.spotLightMap.value=nt.state.spotLightMap,jt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=F.state.lightProbeGridArray.length>0,et.currentProgram=se,et.uniformsList=null,se}function Xs(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Fc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function ba(A,W){const at=C.get(A);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function Ws(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;O.setFromMatrixPosition(W.matrixWorld);for(let at=0,et=A.length;at<et;at++){const nt=A[at];if(nt.texture!==null&&nt.boundingBox.containsPoint(O))return nt}return null}function Ta(A,W,at,et,nt){W.isScene!==!0&&(W=an),E.resetTextureUnits();const zt=W.fog,Vt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?W.environment:null,Pt=q===null?K.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ye.workingColorSpace,Xt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,kt=Z.get(et.envMap||Vt,Xt),Zt=et.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,se=!!at.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),jt=!!at.morphAttributes.position,be=!!at.morphAttributes.normal,Ke=!!at.morphAttributes.color;let Xe=ki;et.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Xe=K.toneMapping);const Ue=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Le=Ue!==void 0?Ue.length:0,Gt=C.get(et),Un=F.state.lights;if(ke===!0&&(fe===!0||A!==z)){const we=A===z&&et.id===U;Ft.setState(et,A,we)}let pe=!1;et.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Un.state.version||Gt.outputColorSpace!==Pt||nt.isBatchedMesh&&Gt.batching===!1||!nt.isBatchedMesh&&Gt.batching===!0||nt.isBatchedMesh&&Gt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Gt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Gt.instancing===!1||!nt.isInstancedMesh&&Gt.instancing===!0||nt.isSkinnedMesh&&Gt.skinning===!1||!nt.isSkinnedMesh&&Gt.skinning===!0||nt.isInstancedMesh&&Gt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Gt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Gt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Gt.instancingMorph===!1&&nt.morphTexture!==null||Gt.envMap!==kt||et.fog===!0&&Gt.fog!==zt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Ft.numPlanes||Gt.numIntersection!==Ft.numIntersection)||Gt.vertexAlphas!==Zt||Gt.vertexTangents!==se||Gt.morphTargets!==jt||Gt.morphNormals!==be||Gt.morphColors!==Ke||Gt.toneMapping!==Xe||Gt.morphTargetsCount!==Le||!!Gt.lightProbeGrid!=F.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Gt.__version=et.version);let gn=Gt.currentProgram;pe===!0&&(gn=Ir(et,W,nt),J&&et.isNodeMaterial&&J.onUpdateProgram(et,gn,Gt));let jn=!1,xi=!1,Zn=!1;const Ne=gn.getUniforms(),Qe=Gt.uniforms;if(Rt.useProgram(gn.program)&&(jn=!0,xi=!0,Zn=!0),et.id!==U&&(U=et.id,xi=!0),Gt.needsLights){const we=Ws(F.state.lightProbeGridArray,nt);Gt.lightProbeGrid!==we&&(Gt.lightProbeGrid=we,xi=!0)}if(jn||z!==A){Rt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ne.setValue(X,"projectionMatrix",A.projectionMatrix),Ne.setValue(X,"viewMatrix",A.matrixWorldInverse);const Li=Ne.map.cameraPosition;Li!==void 0&&Li.setValue(X,De.setFromMatrixPosition(A.matrixWorld)),ze.logarithmicDepthBuffer&&Ne.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ne.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),z!==A&&(z=A,xi=!0,Zn=!0)}if(Gt.needsLights&&(Un.state.directionalShadowMap.length>0&&Ne.setValue(X,"directionalShadowMap",Un.state.directionalShadowMap,E),Un.state.spotShadowMap.length>0&&Ne.setValue(X,"spotShadowMap",Un.state.spotShadowMap,E),Un.state.pointShadowMap.length>0&&Ne.setValue(X,"pointShadowMap",Un.state.pointShadowMap,E)),nt.isSkinnedMesh){Ne.setOptional(X,nt,"bindMatrix"),Ne.setOptional(X,nt,"bindMatrixInverse");const we=nt.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),Ne.setValue(X,"boneTexture",we.boneTexture,E))}nt.isBatchedMesh&&(Ne.setOptional(X,nt,"batchingTexture"),Ne.setValue(X,"batchingTexture",nt._matricesTexture,E),Ne.setOptional(X,nt,"batchingIdTexture"),Ne.setValue(X,"batchingIdTexture",nt._indirectTexture,E),Ne.setOptional(X,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Ne.setValue(X,"batchingColorTexture",nt._colorsTexture,E));const Si=at.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&ne.update(nt,at,gn),(xi||Gt.receiveShadow!==nt.receiveShadow)&&(Gt.receiveShadow=nt.receiveShadow,Ne.setValue(X,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&W.environment!==null&&(Qe.envMapIntensity.value=W.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=X1()),xi){if(Ne.setValue(X,"toneMappingExposure",K.toneMappingExposure),Gt.needsLights&&Aa(Qe,Zn),zt&&et.fog===!0&&ct.refreshFogUniforms(Qe,zt),ct.refreshMaterialUniforms(Qe,et,Dt,At,F.state.transmissionRenderTarget[A.id]),Gt.needsLights&&Gt.lightProbeGrid){const we=Gt.lightProbeGrid;Qe.probesSH.value=we.texture,Qe.probesMin.value.copy(we.boundingBox.min),Qe.probesMax.value.copy(we.boundingBox.max),Qe.probesResolution.value.copy(we.resolution)}Fc.upload(X,Xs(Gt),Qe,E)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Fc.upload(X,Xs(Gt),Qe,E),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ne.setValue(X,"center",nt.center),Ne.setValue(X,"modelViewMatrix",nt.modelViewMatrix),Ne.setValue(X,"normalMatrix",nt.normalMatrix),Ne.setValue(X,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){const we=et.uniformsGroups;for(let Li=0,Ca=we.length;Li<Ca;Li++){const cr=we[Li];ht.update(cr,gn),ht.bind(cr,gn)}}return gn}function Aa(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function lr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ft},this.getActiveMipmapLevel=function(){return pt},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,W,at){const et=C.get(A);et.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),C.get(A.texture).__webglTexture=W,C.get(A.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:at,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const at=C.get(A);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0};const Ra=X.createFramebuffer();this.setRenderTarget=function(A,W=0,at=0){q=A,ft=W,pt=at;let et=null,nt=!1,zt=!1;if(A){const Pt=C.get(A);if(Pt.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(X.FRAMEBUFFER,Pt.__webglFramebuffer),ot.copy(A.viewport),gt.copy(A.scissor),Mt=A.scissorTest,Rt.viewport(ot),Rt.scissor(gt),Rt.setScissorTest(Mt),U=-1;return}else if(Pt.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Pt.__hasExternalTextures)E.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Zt=A.depthTexture;if(Pt.__boundDepthTexture!==Zt){if(Zt!==null&&C.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Xt=A.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(zt=!0);const kt=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[W])?et=kt[W][at]:et=kt[W],nt=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?et=C.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?et=kt[at]:et=kt,ot.copy(A.viewport),gt.copy(A.scissor),Mt=A.scissorTest}else ot.copy(bt).multiplyScalar(Dt).floor(),gt.copy(Ht).multiplyScalar(Dt).floor(),Mt=$t;if(at!==0&&(et=Ra),Rt.bindFramebuffer(X.FRAMEBUFFER,et)&&Rt.drawBuffers(A,et),Rt.viewport(ot),Rt.scissor(gt),Rt.setScissorTest(Mt),nt){const Pt=C.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pt.__webglTexture,at)}else if(zt){const Pt=W;for(let Xt=0;Xt<A.textures.length;Xt++){const kt=C.get(A.textures[Xt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Xt,kt.__webglTexture,at,Pt)}}else if(A!==null&&at!==0){const Pt=C.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Pt.__webglTexture,at)}U=-1},this.readRenderTargetPixels=function(A,W,at,et,nt,zt,Vt,Pt=0){if(!(A&&A.isWebGLRenderTarget)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){Rt.bindFramebuffer(X.FRAMEBUFFER,Xt);try{const kt=A.textures[Pt],Zt=kt.format,se=kt.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pt),!ze.textureFormatReadable(Zt)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(se)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-et&&at>=0&&at<=A.height-nt&&X.readPixels(W,at,et,nt,G.convert(Zt),G.convert(se),zt)}finally{const kt=q!==null?C.get(q).__webglFramebuffer:null;Rt.bindFramebuffer(X.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,W,at,et,nt,zt,Vt,Pt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(W>=0&&W<=A.width-et&&at>=0&&at<=A.height-nt){Rt.bindFramebuffer(X.FRAMEBUFFER,Xt);const kt=A.textures[Pt],Zt=kt.format,se=kt.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pt),!ze.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,jt),X.bufferData(X.PIXEL_PACK_BUFFER,zt.byteLength,X.STREAM_READ),X.readPixels(W,at,et,nt,G.convert(Zt),G.convert(se),0);const be=q!==null?C.get(q).__webglFramebuffer:null;Rt.bindFramebuffer(X.FRAMEBUFFER,be);const Ke=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await ly(X,Ke,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,jt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,zt),X.deleteBuffer(jt),X.deleteSync(Ke),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,at=0){const et=Math.pow(2,-at),nt=Math.floor(A.image.width*et),zt=Math.floor(A.image.height*et),Vt=W!==null?W.x:0,Pt=W!==null?W.y:0;E.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,at,0,0,Vt,Pt,nt,zt),Rt.unbindTexture()};const un=X.createFramebuffer(),Jo=X.createFramebuffer();this.copyTextureToTexture=function(A,W,at=null,et=null,nt=0,zt=0){let Vt,Pt,Xt,kt,Zt,se,jt,be,Ke;const Xe=A.isCompressedTexture?A.mipmaps[zt]:A.image;if(at!==null)Vt=at.max.x-at.min.x,Pt=at.max.y-at.min.y,Xt=at.isBox3?at.max.z-at.min.z:1,kt=at.min.x,Zt=at.min.y,se=at.isBox3?at.min.z:0;else{const Qe=Math.pow(2,-nt);Vt=Math.floor(Xe.width*Qe),Pt=Math.floor(Xe.height*Qe),A.isDataArrayTexture?Xt=Xe.depth:A.isData3DTexture?Xt=Math.floor(Xe.depth*Qe):Xt=1,kt=0,Zt=0,se=0}et!==null?(jt=et.x,be=et.y,Ke=et.z):(jt=0,be=0,Ke=0);const Ue=G.convert(W.format),Le=G.convert(W.type);let Gt;W.isData3DTexture?(E.setTexture3D(W,0),Gt=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(E.setTexture2DArray(W,0),Gt=X.TEXTURE_2D_ARRAY):(E.setTexture2D(W,0),Gt=X.TEXTURE_2D),Rt.activeTexture(X.TEXTURE0),Rt.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),Rt.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Rt.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const Un=Rt.getParameter(X.UNPACK_ROW_LENGTH),pe=Rt.getParameter(X.UNPACK_IMAGE_HEIGHT),gn=Rt.getParameter(X.UNPACK_SKIP_PIXELS),jn=Rt.getParameter(X.UNPACK_SKIP_ROWS),xi=Rt.getParameter(X.UNPACK_SKIP_IMAGES);Rt.pixelStorei(X.UNPACK_ROW_LENGTH,Xe.width),Rt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Xe.height),Rt.pixelStorei(X.UNPACK_SKIP_PIXELS,kt),Rt.pixelStorei(X.UNPACK_SKIP_ROWS,Zt),Rt.pixelStorei(X.UNPACK_SKIP_IMAGES,se);const Zn=A.isDataArrayTexture||A.isData3DTexture,Ne=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Qe=C.get(A),Si=C.get(W),we=C.get(Qe.__renderTarget),Li=C.get(Si.__renderTarget);Rt.bindFramebuffer(X.READ_FRAMEBUFFER,we.__webglFramebuffer),Rt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ca=0;Ca<Xt;Ca++)Zn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,C.get(A).__webglTexture,nt,se+Ca),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,C.get(W).__webglTexture,zt,Ke+Ca)),X.blitFramebuffer(kt,Zt,Vt,Pt,jt,be,Vt,Pt,X.DEPTH_BUFFER_BIT,X.NEAREST);Rt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(nt!==0||A.isRenderTargetTexture||C.has(A)){const Qe=C.get(A),Si=C.get(W);Rt.bindFramebuffer(X.READ_FRAMEBUFFER,un),Rt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Jo);for(let we=0;we<Xt;we++)Zn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Qe.__webglTexture,nt,se+we):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Qe.__webglTexture,nt),Ne?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Si.__webglTexture,zt,Ke+we):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Si.__webglTexture,zt),nt!==0?X.blitFramebuffer(kt,Zt,Vt,Pt,jt,be,Vt,Pt,X.COLOR_BUFFER_BIT,X.NEAREST):Ne?X.copyTexSubImage3D(Gt,zt,jt,be,Ke+we,kt,Zt,Vt,Pt):X.copyTexSubImage2D(Gt,zt,jt,be,kt,Zt,Vt,Pt);Rt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ne?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Gt,zt,jt,be,Ke,Vt,Pt,Xt,Ue,Le,Xe.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(Gt,zt,jt,be,Ke,Vt,Pt,Xt,Ue,Xe.data):X.texSubImage3D(Gt,zt,jt,be,Ke,Vt,Pt,Xt,Ue,Le,Xe):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,zt,jt,be,Vt,Pt,Ue,Le,Xe.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,zt,jt,be,Xe.width,Xe.height,Ue,Xe.data):X.texSubImage2D(X.TEXTURE_2D,zt,jt,be,Vt,Pt,Ue,Le,Xe);Rt.pixelStorei(X.UNPACK_ROW_LENGTH,Un),Rt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,pe),Rt.pixelStorei(X.UNPACK_SKIP_PIXELS,gn),Rt.pixelStorei(X.UNPACK_SKIP_ROWS,jn),Rt.pixelStorei(X.UNPACK_SKIP_IMAGES,xi),zt===0&&W.generateMipmaps&&X.generateMipmap(Gt),Rt.unbindTexture()},this.initRenderTarget=function(A){C.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Rt.unbindTexture()},this.resetState=function(){ft=0,pt=0,q=null,Rt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(e),i.unpackColorSpace=ye._getUnpackColorSpace()}}const q1=`
  varying vec2 vUv;
  uniform float time;
  uniform float scroll;
  uniform float speed;
  uniform float waveIntensity;
  uniform float warpCount;

  void main() {
    vec3 pos = position;
    vUv = uv;
    float t = time * speed + scroll * 5.0;
    float angle = atan(pos.x, pos.z);
    float radius = length(pos.xz);
    float spiral = sin(angle * warpCount + t * 2.0) * 0.3;
    float displace = sin(radius * 3.0 - t * 4.0 + spiral) * waveIntensity;
    float yWave = sin(vUv.x * 10.0 + t) * cos(vUv.y * 10.0 + t) * 0.05;
    pos.y += displace + yWave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,Y1=`
  varying vec2 vUv;
  uniform float time;
  uniform float colorSpeed;
  uniform float gridScale;
  uniform float lineWidth;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 color3;
  uniform vec3 color4;
  uniform vec3 color5;

  float gridLine(float coord, float width) {
    float fw = fwidth(coord);
    float p = abs(fract(coord - 0.5) - 0.5);
    return smoothstep(width * fw, (width + 1.0) * fw, p);
  }

  void main() {
    float t = time * colorSpeed;
    vec2 uv = vUv;
    uv *= gridScale;
    float gx = gridLine(uv.x, lineWidth);
    float gy = gridLine(uv.y, lineWidth);
    float g = min(gx, gy);
    float angle = atan(vUv.x - 0.5, vUv.y - 0.5) + time * 0.5;
    float blend = fract(angle / 6.28318);
    vec3 c1 = mix(color1, color2, smoothstep(0.0, 0.25, blend));
    vec3 c2 = mix(c1, color3, smoothstep(0.25, 0.5, blend));
    vec3 c3 = mix(c2, mix(color4, color5, smoothstep(0.5, 0.75, blend)), smoothstep(0.5, 1.0, blend));
    vec3 gridColor = c3 * (1.0 - g);
    vec3 bg = vec3(0.0, 0.0, 0.0);
    gl_FragColor = vec4(bg + gridColor, 1.0);
  }
`;function j1(){const o=ln.useRef(null);return ln.useEffect(()=>{const e=o.current;if(!e)return;const i=new by,r=new _i(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.set(0,8,15),r.lookAt(0,0,0);const l=new W1({antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(l.domElement);const d=window.innerWidth<768?100:200,h=new zs(100,100,d,d);h.rotateX(-Math.PI/2);const m=new Zy,p={value:0},x=new Di({vertexShader:q1,fragmentShader:Y1,side:Hi,transparent:!1,uniforms:{time:{value:0},scroll:{value:0},speed:{value:.5},waveIntensity:{value:.05},warpCount:{value:4},colorSpeed:{value:.2},gridScale:{value:50},lineWidth:{value:1},color1:{value:new it(.141,0,.275)},color2:{value:new it(.514,.012,.988)},color3:{value:new it(1,0,.431)},color4:{value:new it(.984,.345,.027)},color5:{value:new it(1,.745,.059)}}}),v=new wi(h,x);i.add(v);const M=new qy().load("/textures/sun-eye.png");M.colorSpace=ri;const T=new zs(9,9),D=new Ih({map:M,transparent:!0,depthWrite:!1,toneMapped:!1}),y=new wi(T,D);y.position.set(0,5.5,-6),i.add(y);let S=0;const w=()=>{S=requestAnimationFrame(w);const V=m.getElapsedTime();x.uniforms.time.value=V,x.uniforms.scroll.value=p.value;const F=1+Math.sin(V*.6)*.06;y.scale.setScalar(F),y.rotation.z=Math.sin(V*.15)*.04,y.position.y=5.5+Math.sin(V*.4)*.25-p.value*2.5,D.opacity=.85+Math.sin(V*.6)*.15,l.render(i,r)};w();const L=()=>{const V=document.body.scrollHeight-window.innerHeight;p.value=V>0?window.scrollY/V:0};window.addEventListener("scroll",L,{passive:!0});const O=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",O),()=>{cancelAnimationFrame(S),window.removeEventListener("scroll",L),window.removeEventListener("resize",O),h.dispose(),x.dispose(),T.dispose(),D.dispose(),M.dispose(),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),j.jsx("div",{ref:o,"aria-hidden":"true",style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}})}const N_=[{label:"Shop",href:"#products"},{label:"Our Mushrooms",href:"#gallery"},{label:"About",href:"#about"},{label:"Reviews",href:"#reviews"}];function Z1(){const[o,e]=ln.useState(!1);return j.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,height:"64px",background:"rgba(36, 0, 70, 0.92)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",zIndex:50,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4vw"},children:[j.jsxs("a",{href:"#",style:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"18px",color:"#FFFFFF",textDecoration:"none",display:"flex",alignItems:"center",gap:"6px",letterSpacing:"-0.02em"},children:[j.jsx("span",{role:"img","aria-label":"mushroom",children:"🍄"})," MYCO WONDERLAND"]}),j.jsxs("div",{style:{alignItems:"center",gap:"32px"},className:"hidden md:flex",children:[N_.map(i=>j.jsx("a",{href:i.href,style:{fontFamily:"var(--font-body)",fontWeight:500,fontSize:"14px",color:"#B8C0FF",textDecoration:"none",transition:"color 0.3s"},onMouseEnter:r=>r.currentTarget.style.color="#FFFFFF",onMouseLeave:r=>r.currentTarget.style.color="#B8C0FF",children:i.label},i.label)),j.jsx("a",{href:"#products",style:{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"13px",color:"#FFFFFF",textDecoration:"none",background:"#E85D04",padding:"8px 20px",borderRadius:"6px",textTransform:"uppercase",letterSpacing:"0.02em",transition:"background 0.3s"},onMouseEnter:i=>i.currentTarget.style.background="#D15100",onMouseLeave:i=>i.currentTarget.style.background="#E85D04",children:"Shop Now"})]}),j.jsx("button",{className:"md:hidden",onClick:()=>e(!o),"aria-label":"Toggle menu",style:{background:"none",border:"none",color:"#FFFFFF",fontSize:"24px",cursor:"pointer",padding:"8px"},children:o?"✕":"☰"}),o&&j.jsxs("div",{style:{position:"absolute",top:"64px",left:0,right:0,background:"rgba(36, 0, 70, 0.98)",backdropFilter:"blur(12px)",padding:"24px 4vw",display:"flex",flexDirection:"column",gap:"20px"},children:[N_.map(i=>j.jsx("a",{href:i.href,onClick:()=>e(!1),style:{fontFamily:"var(--font-body)",fontWeight:500,fontSize:"16px",color:"#B8C0FF",textDecoration:"none"},children:i.label},i.label)),j.jsx("a",{href:"#products",onClick:()=>e(!1),style:{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"14px",color:"#FFFFFF",textDecoration:"none",background:"#E85D04",padding:"10px 20px",borderRadius:"6px",textAlign:"center",textTransform:"uppercase"},children:"Shop Now"})]})]})}function K1(){const[o,e]=ln.useState(!1),i=ln.useRef(null);return ln.useEffect(()=>{const r=setTimeout(()=>e(!0),100);return()=>clearTimeout(r)},[]),j.jsx("section",{ref:i,style:{minHeight:"100vh",background:"transparent",display:"flex",alignItems:"center",position:"relative",zIndex:1,paddingTop:"64px"},children:j.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"100px 4vw 120px",width:"100%",display:"grid",gridTemplateColumns:"1fr",gap:"40px",alignItems:"center"},className:"md:!grid-cols-[55%_45%]",children:[j.jsxs("div",{children:[j.jsx("p",{style:{fontFamily:"var(--font-mono)",fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",color:"#B8C0FF",marginBottom:"20px",opacity:o?1:0,transform:o?"translateY(0)":"translateY(20px)",transition:"opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s"},children:"FUNCTIONAL MUSHROOM SUPPLEMENTS"}),j.jsxs("h1",{style:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(2.8rem, 6vw, 5rem)",letterSpacing:"-0.03em",lineHeight:1,color:"#FFFFFF",textShadow:"0 2px 30px rgba(36, 0, 70, 0.6)"},children:[j.jsx("span",{style:{display:"block",opacity:o?1:0,transform:o?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s"},children:"Free Your Mind's"}),j.jsx("span",{style:{display:"block",opacity:o?1:0,transform:o?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.55s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.55s"},children:"Potential."})]}),j.jsx("p",{style:{fontFamily:"var(--font-body)",fontWeight:400,fontSize:"clamp(0.95rem, 1.5vw, 1.1rem)",color:"#B8C0FF",maxWidth:"440px",marginTop:"24px",lineHeight:1.5,opacity:o?1:0,transition:"opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.8s"},children:"Functional mushroom gummies, coffee, and capsules made to sharpen focus, calm the noise, and fuel your day — the fun way."}),j.jsxs("div",{style:{display:"flex",gap:"16px",marginTop:"36px",flexWrap:"wrap",opacity:o?1:0,transition:"opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 1.0s"},children:[j.jsx("a",{href:"#products",style:{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"14px",color:"#FFFFFF",textDecoration:"none",background:"#E85D04",padding:"14px 28px",borderRadius:"6px",textTransform:"uppercase",letterSpacing:"0.02em",transition:"background 0.3s, transform 0.2s",display:"inline-block"},onMouseEnter:r=>{r.currentTarget.style.background="#D15100",r.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:r=>{r.currentTarget.style.background="#E85D04",r.currentTarget.style.transform="translateY(0)"},children:"Shop the Collection"}),j.jsx("a",{href:"#about",style:{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"14px",color:"#FFFFFF",textDecoration:"none",background:"transparent",padding:"14px 28px",borderRadius:"6px",border:"1px solid rgba(255, 255, 255, 0.4)",textTransform:"uppercase",letterSpacing:"0.02em",transition:"border-color 0.3s, background 0.3s",display:"inline-block"},onMouseEnter:r=>{r.currentTarget.style.borderColor="rgba(255, 255, 255, 0.8)",r.currentTarget.style.background="rgba(255, 255, 255, 0.08)"},onMouseLeave:r=>{r.currentTarget.style.borderColor="rgba(255, 255, 255, 0.4)",r.currentTarget.style.background="transparent"},children:"Meet Your Mushrooms"})]})]}),j.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",opacity:o?1:0,transform:o?"translateY(0) scale(1)":"translateY(40px) scale(0.95)",transition:"opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s, transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s"},children:j.jsx("img",{src:"/images/hero-mushroom.jpg",alt:"Psychedelic mushroom wonderland illustration with red spotted mushrooms, melting rainbow, and purple starry sky",style:{width:"100%",maxWidth:"480px",height:"auto",borderRadius:"20px",boxShadow:"0 20px 60px rgba(36, 0, 70, 0.5)"}})})]})})}function Ui(o=.2){const e=ln.useRef(null);return ln.useEffect(()=>{const i=e.current;if(!i)return;const r=()=>i.classList.add("is-visible");if(typeof IntersectionObserver>"u"){r();return}const l=Math.round(o*100),u=new IntersectionObserver(h=>{h.forEach(m=>{m.isIntersecting&&(r(),u.unobserve(m.target))})},{threshold:0,rootMargin:`0px 0px -${l}% 0px`});u.observe(i);const d=window.setTimeout(()=>{const h=i.getBoundingClientRect();h.top<window.innerHeight&&h.bottom>0&&(r(),u.unobserve(i))},1500);return()=>{window.clearTimeout(d),u.disconnect()}},[o]),e}const Q1=[{name:"Lion's Mane Focus Gummies",tagline:"Clarity, gummy-style.",bullets:["Sharper memory & deep work support","Natural cognitive function","Berry flavor, no sugar crash"],price:"$34",image:"/images/product-gummies.jpg",alt:"Clear glass jar filled with red berry-colored Lion's Mane focus gummies on light lavender background"},{name:"Reishi Calm Capsules",tagline:"The chill pill nature made.",bullets:["Evening wind-down support","Stress response balance","Non-drowsy relaxation"],price:"$38",image:"/images/product-capsules.jpg",alt:"Amber glass bottle with black cap containing Reishi calm capsules on warm cream background"},{name:"Chaga Energy Coffee",tagline:"Wonder fuel.",bullets:["Antioxidant-rich smooth energy","All-day focus without jitters","Mushroom + coffee fusion"],price:"$29",image:"/images/product-coffee.jpg",alt:"Matte black pouch bag of Chaga mushroom coffee blend standing upright on warm cream background"},{name:"Cordyceps Performance Blend",tagline:"Built for the grind.",bullets:["Stamina & endurance support","Workout or workday fuel","Fast-absorbing powder form"],price:"$42",image:"/images/product-powder.jpg",alt:"Clear glass jar containing golden-brown Cordyceps mushroom powder with wooden scoop"}];function J1(){return j.jsxs("svg",{className:"drip-strip",viewBox:"0 0 1200 60",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"60px",overflow:"visible"},children:[j.jsxs("defs",{children:[j.jsx("clipPath",{id:"drip-mask",children:j.jsx("rect",{x:"0",y:"0",width:"1200",height:"30"})}),j.jsx("clipPath",{id:"drip-bottom",children:j.jsx("rect",{x:"0",y:"30",width:"1200",height:"30"})})]}),j.jsx("g",{clipPath:"url(#drip-mask)",children:j.jsx("path",{className:"drip-segment",d:"M0,15 h1200",stroke:"#FF006E"})}),j.jsxs("g",{clipPath:"url(#drip-bottom)",children:[j.jsx("path",{className:"drip-stroke",d:"M100,0 v20",stroke:"#FF006E",style:{animationDelay:"0s"}}),j.jsx("path",{className:"drip-stroke",d:"M250,0 v25",stroke:"#FB5607",style:{animationDelay:"0.8s"}}),j.jsx("path",{className:"drip-stroke",d:"M400,0 v18",stroke:"#FFBE0B",style:{animationDelay:"1.6s"}}),j.jsx("path",{className:"drip-stroke",d:"M550,0 v22",stroke:"#3A86FF",style:{animationDelay:"2.4s"}}),j.jsx("path",{className:"drip-stroke",d:"M700,0 v28",stroke:"#8338EC",style:{animationDelay:"0.4s"}}),j.jsx("path",{className:"drip-stroke",d:"M850,0 v16",stroke:"#FF006E",style:{animationDelay:"1.2s"}}),j.jsx("path",{className:"drip-stroke",d:"M1000,0 v24",stroke:"#FB5607",style:{animationDelay:"2.0s"}})]})]})}function $1(){const o=Ui(.3),e=Ui(.1);return j.jsxs("section",{id:"products",style:{background:"#C8B6FF",position:"relative",zIndex:1},children:[j.jsx(J1,{}),j.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"60px 4vw 80px"},children:[j.jsxs("div",{ref:o,className:"animate-on-scroll",children:[j.jsx("h2",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(1.8rem, 3.5vw, 2.8rem)",color:"#240046",textAlign:"center",letterSpacing:"-0.02em"},children:"Your Daily Dose of Wonder"}),j.jsx("p",{style:{fontFamily:"var(--font-body)",fontWeight:400,fontSize:"16px",color:"rgba(36, 0, 70, 0.7)",textAlign:"center",marginTop:"12px",maxWidth:"520px",marginInline:"auto",lineHeight:1.5},children:"Four functional mushroom blends, each crafted for a specific moment in your day."})]}),j.jsx("div",{ref:e,className:"animate-on-scroll",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"24px",marginTop:"48px"},children:Q1.map(i=>j.jsxs("div",{style:{background:"#FFFFFF",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 24px rgba(36, 0, 70, 0.08)",transition:"transform 0.3s ease, box-shadow 0.3s ease",cursor:"pointer"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-4px)",r.currentTarget.style.boxShadow="0 12px 40px rgba(36, 0, 70, 0.12)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 24px rgba(36, 0, 70, 0.08)"},children:[j.jsx("img",{src:i.image,alt:i.alt,style:{width:"100%",height:"200px",objectFit:"contain",marginBottom:"20px",borderRadius:"8px"}}),j.jsx("h3",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"20px",color:"#240046",letterSpacing:"-0.01em"},children:i.name}),j.jsx("p",{style:{fontFamily:"var(--font-body)",fontWeight:500,fontSize:"14px",color:"#E85D04",marginTop:"4px"},children:i.tagline}),j.jsx("ul",{style:{marginTop:"12px",padding:0,listStyle:"none"},children:i.bullets.map(r=>j.jsxs("li",{style:{fontFamily:"var(--font-body)",fontWeight:400,fontSize:"14px",color:"rgba(36, 0, 70, 0.75)",marginTop:"6px",paddingLeft:"14px",position:"relative"},children:[j.jsx("span",{style:{position:"absolute",left:0,top:"8px",width:"5px",height:"5px",borderRadius:"50%",background:"#E85D04"}}),r]},r))}),j.jsxs("a",{href:"#",style:{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"14px",color:"#240046",textDecoration:"underline",textUnderlineOffset:"3px",marginTop:"20px",display:"inline-block",transition:"color 0.3s"},onMouseEnter:r=>r.currentTarget.style.color="#E85D04",onMouseLeave:r=>r.currentTarget.style.color="#240046",children:[i.price," · Shop →"]})]},i.name))})]})]})}function tA(){const o=Ui(.2),e=Ui(.2);return j.jsx("section",{id:"about",style:{background:"#FFF8E7",position:"relative",zIndex:1},children:j.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"100px 4vw",display:"grid",gridTemplateColumns:"1fr",gap:"48px",alignItems:"center"},className:"md:!grid-cols-2",children:[j.jsxs("div",{ref:o,className:"animate-on-scroll-left",children:[j.jsx("p",{style:{fontFamily:"var(--font-mono)",fontSize:"11px",textTransform:"uppercase",letterSpacing:"0.08em",color:"#E85D04",marginBottom:"16px"},children:"WHY WE BUILT A WONDERLAND"}),j.jsx("h2",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(1.8rem, 3.5vw, 2.8rem)",color:"#240046",letterSpacing:"-0.02em",lineHeight:1.1},children:"Nature's Most Underrated Tool"}),j.jsx("p",{style:{fontFamily:"var(--font-body)",fontWeight:400,fontSize:"16px",color:"rgba(36, 0, 70, 0.8)",marginTop:"20px",lineHeight:1.7},children:"We started in a small kitchen with one obsession: mushrooms are one of nature's most powerful tools for mental performance and daily wellness. The problem? Every supplement on the shelf looked like it was designed in a hospital."}),j.jsx("p",{style:{fontFamily:"var(--font-body)",fontWeight:400,fontSize:"16px",color:"rgba(36, 0, 70, 0.8)",marginTop:"16px",lineHeight:1.7},children:"So we built a Wonderland. Our products are third-party tested, sustainably sourced, and wrapped in packaging that makes you smile. Because taking care of your brain should feel like the magic it is."}),j.jsx("blockquote",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"18px",color:"#240046",marginTop:"28px",paddingLeft:"20px",borderLeft:"3px solid #E85D04",lineHeight:1.5},children:"We make functional mushrooms feel like the magic they are — zero boring beige packaging."})]}),j.jsx("div",{ref:e,className:"animate-on-scroll-right",children:j.jsx("img",{src:"/images/hero-mushroom.jpg",alt:"Psychedelic mushroom wonderland with red spotted mushrooms, melting rainbow, and purple starry sky",style:{width:"100%",height:"auto",borderRadius:"16px",objectFit:"cover",boxShadow:"0 8px 32px rgba(36, 0, 70, 0.12)"}})})]})})}const eA=[{src:"/images/gallery-forest.jpg",alt:"Misty forest floor with wild mushrooms growing on a fallen log, morning light filtering through trees"},{src:"/images/gallery-flatlay.jpg",alt:"Flat-lay of mushroom supplement products artfully arranged on marble surface with dried mushrooms and green leaves"},{src:"/images/gallery-coffee.jpg",alt:"Hands holding a ceramic mug of mushroom coffee at sunrise with warm golden light"},{src:"/images/gallery-lab.jpg",alt:"Modern laboratory with glass beakers and test tubes containing mushroom extracts"},{src:"/images/gallery-desk.jpg",alt:"Lion's Mane gummy jar on a clean wooden desk next to a laptop and notebook"},{src:"/images/product-powder.jpg",alt:"Clear glass jar containing golden-brown Cordyceps mushroom powder with wooden scoop"}];function nA(){const o=Ui(.3),e=Ui(.1);return j.jsx("section",{id:"gallery",style:{background:"#FFF8E7",position:"relative",zIndex:1},children:j.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"60px 4vw 80px"},children:[j.jsxs("div",{ref:o,className:"animate-on-scroll",style:{textAlign:"center"},children:[j.jsx("h2",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(1.5rem, 3vw, 2.4rem)",color:"#240046",letterSpacing:"-0.02em"},children:"Inside the Wonderland"}),j.jsx("p",{style:{fontFamily:"var(--font-body)",fontWeight:400,fontSize:"15px",color:"rgba(36, 0, 70, 0.7)",marginTop:"8px"},children:"From forest to formula — see how we craft every product."})]}),j.jsx("div",{ref:e,className:"animate-on-scroll",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"20px",marginTop:"40px"},children:eA.map((i,r)=>j.jsx("div",{style:{borderRadius:"12px",overflow:"hidden",aspectRatio:"4/3",transition:"transform 0.4s ease",cursor:"pointer"},onMouseEnter:l=>{l.currentTarget.style.transform="scale(1.03)"},onMouseLeave:l=>{l.currentTarget.style.transform="scale(1)"},children:j.jsx("img",{src:i.src,alt:i.alt,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},loading:"lazy"})},r))})]})})}const iA=[{quote:"I take the Lion's Mane gummies before client calls and actually remember names now.",author:"Jess R.",badge:"verified buyer"},{quote:"Reishi capsules are part of my nightly routine. No more 1am brain spirals.",author:"Marcus T.",badge:"verified buyer"},{quote:"Chaga coffee replaced my second espresso. Smoother energy, no jitters.",author:"Priya N.",badge:"verified buyer"}];function aA(){const o=Ui(.3),e=Ui(.1);return j.jsx("section",{id:"reviews",style:{background:"#C8B6FF",position:"relative",zIndex:1},children:j.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"80px 4vw"},children:[j.jsx("div",{ref:o,className:"animate-on-scroll",style:{textAlign:"center"},children:j.jsx("h2",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(1.8rem, 3.5vw, 2.8rem)",color:"#240046",letterSpacing:"-0.02em"},children:"Wonderland Reviews"})}),j.jsx("div",{ref:e,className:"animate-on-scroll",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"24px",marginTop:"48px"},children:iA.map(i=>j.jsxs("div",{style:{background:"#FFFFFF",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 20px rgba(36, 0, 70, 0.06)"},children:[j.jsx("div",{style:{marginBottom:"16px",fontSize:"16px"},children:"⭐".repeat(5)}),j.jsxs("p",{style:{fontFamily:"var(--font-display)",fontWeight:400,fontStyle:"italic",fontSize:"18px",color:"#240046",lineHeight:1.6},children:["“",i.quote,"”"]}),j.jsxs("p",{style:{fontFamily:"var(--font-body)",fontWeight:500,fontSize:"14px",color:"rgba(36, 0, 70, 0.6)",marginTop:"20px"},children:["— ",i.author,", ",i.badge]})]},i.author))})]})})}function rA(){const o=Ui(.2),e=ln.useRef(null),i=ln.useRef([]),r=5,l=ln.useRef({x:0,y:0}),u=ln.useRef({x:0,y:0}),d=ln.useRef(0),h=ln.useCallback(M=>{const T=e.current;if(!T)return;const D=T.getBoundingClientRect(),y=D.left+D.width/2,S=D.top+D.height/2,w=M.clientX-y,L=M.clientY-S,O=Math.sqrt(w*w+L*L),V=100;if(O<V){const F=(V-O)/V;u.current.x=w*F*.4,u.current.y=L*F*.4}else u.current.x=0,u.current.y=0},[]),m=ln.useCallback(()=>{u.current.x=0,u.current.y=0},[]),p=ln.useCallback(()=>{const M=e.current;M&&(l.current.x+=(u.current.x-l.current.x)*.15,l.current.y+=(u.current.y-l.current.y)*.15,M.style.transform=`translate(${l.current.x}px, ${l.current.y}px)`,d.current=requestAnimationFrame(p))},[]),x=ln.useCallback(()=>{window.addEventListener("mousemove",h),d.current=requestAnimationFrame(p)},[h,p]),v=ln.useCallback(()=>{window.removeEventListener("mousemove",h),m(),cancelAnimationFrame(d.current)},[h,m]),_=ln.useCallback(()=>{const M=e.current;if(!M)return;const T=M.getBoundingClientRect(),D=T.width/2,y=T.height/2,S=Math.max(D,y);for(let w=0;w<r;w++){const L=i.current[w];L&&(L.style.left=`${D}px`,L.style.top=`${y}px`,L.style.animation="none",L.offsetHeight,L.style.setProperty("--portal-scale",`${S/20*(1+w*.4)}`),L.style.setProperty("--portal-opacity",`${1-w*.15}`),L.style.animation=`portal-expand 0.8s ease-out ${w*.08}s forwards`)}},[]);return j.jsx("section",{style:{background:"#240046",position:"relative",zIndex:1},children:j.jsx("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"100px 4vw",textAlign:"center"},children:j.jsxs("div",{ref:o,className:"animate-on-scroll",children:[j.jsxs("h2",{style:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"clamp(2.2rem, 5vw, 3.8rem)",color:"#FFFFFF",letterSpacing:"-0.03em",lineHeight:1.1},children:["Your Mind Called.",j.jsx("br",{}),"It Wants In."]}),j.jsx("p",{style:{fontFamily:"var(--font-body)",fontWeight:400,fontSize:"18px",color:"#B8C0FF",marginTop:"20px"},children:"Bundle & save 15% on your first wonderland starter kit."}),j.jsxs("button",{ref:e,onClick:_,onMouseEnter:x,onMouseLeave:v,className:"portal-btn",style:{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"16px",color:"#FFFFFF",background:"#E85D04",padding:"16px 36px",borderRadius:"8px",border:"none",cursor:"pointer",marginTop:"32px",textTransform:"uppercase",letterSpacing:"0.02em",position:"relative",overflow:"hidden",transition:"background 0.3s"},onMouseOver:M=>M.currentTarget.style.background="#D15100",onMouseOut:M=>M.currentTarget.style.background="#E85D04",children:[j.jsx("span",{style:{position:"relative",zIndex:2},children:"Build My Bundle"}),j.jsx("div",{className:"portal-rings","aria-hidden":"true",children:Array.from({length:r}).map((M,T)=>j.jsx("div",{className:"portal-ring",ref:D=>{i.current[T]=D}},T))})]})]})})})}function sA(){const o=Ui(.2),e=Ui(.2),[i,r]=ln.useState({name:"",email:"",subject:"General",message:""}),l=h=>{r(m=>({...m,[h.target.name]:h.target.value}))},u=h=>{h.preventDefault(),alert("Thanks for reaching out! We typically reply within 1 business day."),r({name:"",email:"",subject:"General",message:""})},d={width:"100%",background:"#FFFFFF",border:"1px solid rgba(36, 0, 70, 0.15)",borderRadius:"8px",padding:"14px 16px",fontFamily:"var(--font-body)",fontSize:"15px",color:"#240046",outline:"none",transition:"border-color 0.3s, box-shadow 0.3s"};return j.jsx("section",{id:"contact",style:{background:"#FFF8E7",position:"relative",zIndex:1},children:j.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"80px 4vw",display:"grid",gridTemplateColumns:"1fr",gap:"48px"},className:"md:!grid-cols-[45%_55%]",children:[j.jsxs("div",{ref:o,className:"animate-on-scroll-left",children:[j.jsxs("h2",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"clamp(1.6rem, 3vw, 2.4rem)",color:"#240046",letterSpacing:"-0.02em",lineHeight:1.15},children:["Questions?",j.jsx("br",{}),"Fall Down the Rabbit Hole With Us."]}),j.jsx("p",{style:{fontFamily:"var(--font-body)",fontWeight:400,fontSize:"15px",color:"rgba(36, 0, 70, 0.7)",marginTop:"12px"},children:"We typically reply within 1 business day."}),j.jsxs("div",{style:{marginTop:"32px",display:"flex",flexDirection:"column",gap:"20px"},children:[j.jsxs("div",{children:[j.jsx("p",{style:{fontFamily:"var(--font-mono)",fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.08em",color:"#E85D04",marginBottom:"4px"},children:"Email"}),j.jsx("a",{href:"mailto:hello@mycowonderland.com",style:{fontFamily:"var(--font-body)",fontWeight:400,fontSize:"15px",color:"#240046",textDecoration:"none",transition:"color 0.3s"},onMouseEnter:h=>h.currentTarget.style.color="#E85D04",onMouseLeave:h=>h.currentTarget.style.color="#240046",children:"hello@mycowonderland.com"})]}),j.jsxs("div",{children:[j.jsx("p",{style:{fontFamily:"var(--font-mono)",fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.08em",color:"#E85D04",marginBottom:"4px"},children:"Social"}),j.jsx("p",{style:{fontFamily:"var(--font-body)",fontWeight:400,fontSize:"15px",color:"#240046"},children:"@mycowonderland (Instagram, TikTok)"})]})]})]}),j.jsx("div",{ref:e,className:"animate-on-scroll-right",children:j.jsxs("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[j.jsxs("div",{children:[j.jsx("label",{style:{fontFamily:"var(--font-body)",fontWeight:500,fontSize:"13px",color:"#240046",display:"block",marginBottom:"6px"},children:"Name"}),j.jsx("input",{type:"text",name:"name",value:i.name,onChange:l,required:!0,style:d,onFocus:h=>{h.currentTarget.style.borderColor="#E85D04",h.currentTarget.style.boxShadow="0 0 0 3px rgba(232, 93, 4, 0.15)"},onBlur:h=>{h.currentTarget.style.borderColor="rgba(36, 0, 70, 0.15)",h.currentTarget.style.boxShadow="none"}})]}),j.jsxs("div",{children:[j.jsx("label",{style:{fontFamily:"var(--font-body)",fontWeight:500,fontSize:"13px",color:"#240046",display:"block",marginBottom:"6px"},children:"Email"}),j.jsx("input",{type:"email",name:"email",value:i.email,onChange:l,required:!0,style:d,onFocus:h=>{h.currentTarget.style.borderColor="#E85D04",h.currentTarget.style.boxShadow="0 0 0 3px rgba(232, 93, 4, 0.15)"},onBlur:h=>{h.currentTarget.style.borderColor="rgba(36, 0, 70, 0.15)",h.currentTarget.style.boxShadow="none"}})]}),j.jsxs("div",{children:[j.jsx("label",{style:{fontFamily:"var(--font-body)",fontWeight:500,fontSize:"13px",color:"#240046",display:"block",marginBottom:"6px"},children:"Subject"}),j.jsxs("select",{name:"subject",value:i.subject,onChange:l,style:{...d,appearance:"auto",cursor:"pointer"},onFocus:h=>{h.currentTarget.style.borderColor="#E85D04",h.currentTarget.style.boxShadow="0 0 0 3px rgba(232, 93, 4, 0.15)"},onBlur:h=>{h.currentTarget.style.borderColor="rgba(36, 0, 70, 0.15)",h.currentTarget.style.boxShadow="none"},children:[j.jsx("option",{children:"General"}),j.jsx("option",{children:"Order Help"}),j.jsx("option",{children:"Wholesale"}),j.jsx("option",{children:"Press"})]})]}),j.jsxs("div",{children:[j.jsx("label",{style:{fontFamily:"var(--font-body)",fontWeight:500,fontSize:"13px",color:"#240046",display:"block",marginBottom:"6px"},children:"Message"}),j.jsx("textarea",{name:"message",value:i.message,onChange:l,required:!0,rows:5,style:{...d,resize:"vertical"},onFocus:h=>{h.currentTarget.style.borderColor="#E85D04",h.currentTarget.style.boxShadow="0 0 0 3px rgba(232, 93, 4, 0.15)"},onBlur:h=>{h.currentTarget.style.borderColor="rgba(36, 0, 70, 0.15)",h.currentTarget.style.boxShadow="none"}})]}),j.jsx("button",{type:"submit",style:{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"14px",color:"#FFFFFF",background:"#240046",padding:"16px",borderRadius:"8px",border:"none",cursor:"pointer",textTransform:"uppercase",letterSpacing:"0.02em",transition:"background 0.3s",marginTop:"8px"},onMouseEnter:h=>h.currentTarget.style.background="#E85D04",onMouseLeave:h=>h.currentTarget.style.background="#240046",children:"Send Message"})]})})]})})}const oA={Shop:["All Products","Bundles","Subscriptions"],Company:["About","Careers","Press"],Support:["FAQ","Shipping","Returns"]};function lA(){return j.jsx("footer",{style:{background:"#1A0033",position:"relative",zIndex:1},children:j.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"48px 4vw"},children:[j.jsxs("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"40px"},children:[j.jsxs("div",{children:[j.jsxs("a",{href:"#",style:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"18px",color:"#FFFFFF",textDecoration:"none",display:"flex",alignItems:"center",gap:"6px"},children:[j.jsx("span",{role:"img","aria-label":"mushroom",children:"🍄"})," MYCO WONDERLAND"]}),j.jsx("p",{style:{fontFamily:"var(--font-body)",fontWeight:400,fontSize:"13px",color:"#B8C0FF",marginTop:"8px"},children:"© 2025"}),j.jsx("div",{style:{display:"flex",gap:"16px",marginTop:"16px"},children:["Instagram","TikTok","Pinterest"].map(o=>j.jsxs("a",{href:"#","aria-label":o,style:{color:"#B8C0FF",fontSize:"14px",textDecoration:"none",transition:"color 0.3s"},onMouseEnter:e=>e.currentTarget.style.color="#E85D04",onMouseLeave:e=>e.currentTarget.style.color="#B8C0FF",children:[o==="Instagram"&&j.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[j.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),j.jsx("circle",{cx:"12",cy:"12",r:"5"}),j.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),o==="TikTok"&&j.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:j.jsx("path",{d:"M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"})}),o==="Pinterest"&&j.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[j.jsx("circle",{cx:"12",cy:"12",r:"10"}),j.jsx("path",{d:"M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"}),j.jsx("path",{d:"M12 16l-1 6"})]})]},o))})]}),Object.entries(oA).map(([o,e])=>j.jsxs("div",{children:[j.jsx("p",{style:{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"13px",color:"#FFFFFF",marginBottom:"12px",textTransform:"uppercase",letterSpacing:"0.04em"},children:o}),j.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"8px"},children:e.map(i=>j.jsx("li",{children:j.jsx("a",{href:"#",style:{fontFamily:"var(--font-body)",fontWeight:400,fontSize:"13px",color:"#B8C0FF",textDecoration:"none",transition:"color 0.3s"},onMouseEnter:r=>r.currentTarget.style.color="#FFFFFF",onMouseLeave:r=>r.currentTarget.style.color="#B8C0FF",children:i})},i))})]},o))]}),j.jsx("div",{style:{marginTop:"32px",paddingTop:"24px",borderTop:"1px solid rgba(184, 192, 255, 0.15)"},children:j.jsx("p",{style:{fontFamily:"var(--font-body)",fontWeight:400,fontSize:"11px",color:"rgba(184, 192, 255, 0.5)",maxWidth:"700px",lineHeight:1.5},children:"*These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease."})})]})})}function cA(){return j.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},"aria-hidden":"true",children:j.jsxs("defs",{children:[j.jsx("clipPath",{id:"btn-clip-base",clipPathUnits:"objectBoundingBox",children:j.jsx("rect",{x:"0",y:"0",width:"1",height:"1",rx:"0.08"})}),j.jsx("clipPath",{id:"btn-clip-drip",clipPathUnits:"objectBoundingBox",children:j.jsx("path",{d:"M0,0 h1 v0.88 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 z"})})]})})}function uA(){return ln.useEffect(()=>{if(!window.location.hash)return;const o=window.location.hash.slice(1);document.getElementById(o)?.scrollIntoView()},[]),j.jsxs(j.Fragment,{children:[j.jsx(cA,{}),j.jsx(j1,{}),j.jsxs("div",{style:{position:"relative",zIndex:1},children:[j.jsx(Z1,{}),j.jsx(K1,{}),j.jsx($1,{}),j.jsx(tA,{}),j.jsx(nA,{}),j.jsx(aA,{}),j.jsx(rA,{}),j.jsx(sA,{}),j.jsx(lA,{})]})]})}RS.createRoot(document.getElementById("root")).render(j.jsx(uA,{}));
