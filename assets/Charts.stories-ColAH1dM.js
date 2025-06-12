import{j as h}from"./jsx-runtime-DR9Q75dM.js";import{u as ut,d as ct,h as mt,i as E,j as dt,k as ft,l as Y,w as pe,o as Xe,p as Ue,q as Je,C as Qe,r as B,s as J,t as ee,v as me,A as ht,x as G,y as ve,z as pt,D as ye,F as vt,G as yt,H as gt,I as ge,J as xe,K as xt,M as bt,g as At,X as Ze,Y as et,f as wt,O as de,P as Ot,Q as Pt,U as Ct,V as Tt,E as jt,R as Nt,T as kt,S as Dt,N as St,a as Et,c as Vt,W as zt,Z,_ as Mt}from"./charts-CNYiuotl.js";import{R as p,r as z}from"./index-DRjF_FHU.js";import{a as tt,c as Q}from"./cn-8RyR4BqC.js";import{F as _t}from"./info-Cre7IJy9.js";import{T as Lt}from"./Text-C8HBwI4b.js";import{T as $t,a as It,b as Ft,c as Wt}from"./Tooltip-D2ba4dcD.js";import{I as Bt}from"./Icon-CTnhpE1d.js";import{f as ue}from"./format-DeQ6fwDa.js";import"./Skeleton-CBnrsDVZ.js";import"./tiny-invariant-CopsF_GD.js";import"./spinner-ZMRwnkYw.js";import"./eye-off-BKECGSzU.js";import"./index-HZDBD2ik.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./differenceInCalendarDays-C3EGPyW5.js";var qt=["x1","y1","x2","y2","key"],Rt=["offset"];function K(e){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(e)}function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?be(Object(r),!0).forEach(function(a){Kt(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Kt(e,t,r){return t=Gt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Gt(e){var t=Ht(e,"string");return K(t)=="symbol"?t:t+""}function Ht(e,t){if(K(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(K(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},q.apply(this,arguments)}function Ae(e,t){if(e==null)return{};var r=Yt(e,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function Yt(e,t){if(e==null)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}var Xt=function(t){var r=t.fill;if(!r||r==="none")return null;var a=t.fillOpacity,n=t.x,i=t.y,o=t.width,l=t.height,u=t.ry;return p.createElement("rect",{x:n,y:i,ry:u,width:o,height:l,stroke:"none",fill:r,fillOpacity:a,className:"recharts-cartesian-grid-bg"})};function at(e,t){var r;if(p.isValidElement(e))r=p.cloneElement(e,t);else if(Y(e))r=e(t);else{var a=t.x1,n=t.y1,i=t.x2,o=t.y2,l=t.key,u=Ae(t,qt),c=B(u,!1);c.offset;var s=Ae(c,Rt);r=p.createElement("line",q({},s,{x1:a,y1:n,x2:i,y2:o,fill:"none",key:l}))}return r}function Ut(e){var t=e.x,r=e.width,a=e.horizontal,n=a===void 0?!0:a,i=e.horizontalPoints;if(!n||!i||!i.length)return null;var o=i.map(function(l,u){var c=k(k({},e),{},{x1:t,y1:l,x2:t+r,y2:l,key:"line-".concat(u),index:u});return at(n,c)});return p.createElement("g",{className:"recharts-cartesian-grid-horizontal"},o)}function Jt(e){var t=e.y,r=e.height,a=e.vertical,n=a===void 0?!0:a,i=e.verticalPoints;if(!n||!i||!i.length)return null;var o=i.map(function(l,u){var c=k(k({},e),{},{x1:l,y1:t,x2:l,y2:t+r,key:"line-".concat(u),index:u});return at(n,c)});return p.createElement("g",{className:"recharts-cartesian-grid-vertical"},o)}function Qt(e){var t=e.horizontalFill,r=e.fillOpacity,a=e.x,n=e.y,i=e.width,o=e.height,l=e.horizontalPoints,u=e.horizontal,c=u===void 0?!0:u;if(!c||!t||!t.length)return null;var s=l.map(function(m){return Math.round(m+n-n)}).sort(function(m,d){return m-d});n!==s[0]&&s.unshift(0);var f=s.map(function(m,d){var v=!s[d+1],y=v?n+o-m:s[d+1]-m;if(y<=0)return null;var x=d%t.length;return p.createElement("rect",{key:"react-".concat(d),y:m,x:a,height:y,width:i,stroke:"none",fill:t[x],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return p.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},f)}function Zt(e){var t=e.vertical,r=t===void 0?!0:t,a=e.verticalFill,n=e.fillOpacity,i=e.x,o=e.y,l=e.width,u=e.height,c=e.verticalPoints;if(!r||!a||!a.length)return null;var s=c.map(function(m){return Math.round(m+i-i)}).sort(function(m,d){return m-d});i!==s[0]&&s.unshift(0);var f=s.map(function(m,d){var v=!s[d+1],y=v?i+l-m:s[d+1]-m;if(y<=0)return null;var x=d%a.length;return p.createElement("rect",{key:"react-".concat(d),x:m,y:o,width:y,height:u,stroke:"none",fill:a[x],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return p.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},f)}var ea=function(t,r){var a=t.xAxis,n=t.width,i=t.height,o=t.offset;return Xe(Ue(k(k(k({},Qe.defaultProps),a),{},{ticks:Je(a,!0),viewBox:{x:0,y:0,width:n,height:i}})),o.left,o.left+o.width,r)},ta=function(t,r){var a=t.yAxis,n=t.width,i=t.height,o=t.offset;return Xe(Ue(k(k(k({},Qe.defaultProps),a),{},{ticks:Je(a,!0),viewBox:{x:0,y:0,width:n,height:i}})),o.top,o.top+o.height,r)},H={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function rt(e){var t,r,a,n,i,o,l=ut(),u=ct(),c=mt(),s=k(k({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:H.stroke,fill:(r=e.fill)!==null&&r!==void 0?r:H.fill,horizontal:(a=e.horizontal)!==null&&a!==void 0?a:H.horizontal,horizontalFill:(n=e.horizontalFill)!==null&&n!==void 0?n:H.horizontalFill,vertical:(i=e.vertical)!==null&&i!==void 0?i:H.vertical,verticalFill:(o=e.verticalFill)!==null&&o!==void 0?o:H.verticalFill,x:E(e.x)?e.x:c.left,y:E(e.y)?e.y:c.top,width:E(e.width)?e.width:c.width,height:E(e.height)?e.height:c.height}),f=s.x,m=s.y,d=s.width,v=s.height,y=s.syncWithTicks,x=s.horizontalValues,C=s.verticalValues,A=dt(),j=ft();if(!E(d)||d<=0||!E(v)||v<=0||!E(f)||f!==+f||!E(m)||m!==+m)return null;var b=s.verticalCoordinatesGenerator||ea,g=s.horizontalCoordinatesGenerator||ta,w=s.horizontalPoints,T=s.verticalPoints;if((!w||!w.length)&&Y(g)){var P=x&&x.length,N=g({yAxis:j?k(k({},j),{},{ticks:P?x:j.ticks}):void 0,width:l,height:u,offset:c},P?!0:y);pe(Array.isArray(N),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(K(N),"]")),Array.isArray(N)&&(w=N)}if((!T||!T.length)&&Y(b)){var V=C&&C.length,S=b({xAxis:A?k(k({},A),{},{ticks:V?C:A.ticks}):void 0,width:l,height:u,offset:c},V?!0:y);pe(Array.isArray(S),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(K(S),"]")),Array.isArray(S)&&(T=S)}return p.createElement("g",{className:"recharts-cartesian-grid"},p.createElement(Xt,{fill:s.fill,fillOpacity:s.fillOpacity,x:s.x,y:s.y,width:s.width,height:s.height,ry:s.ry}),p.createElement(Ut,q({},s,{offset:c,horizontalPoints:w,xAxis:A,yAxis:j})),p.createElement(Jt,q({},s,{offset:c,verticalPoints:T,xAxis:A,yAxis:j})),p.createElement(Qt,q({},s,{horizontalPoints:w})),p.createElement(Zt,q({},s,{verticalPoints:T})))}rt.displayName="CartesianGrid";var aa=["layout","type","stroke","connectNulls","isRange","ref"],ra=["key"],nt;function X(e){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(e)}function it(e,t){if(e==null)return{};var r=na(e,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function na(e,t){if(e==null)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},R.apply(this,arguments)}function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?we(Object(r),!0).forEach(function(a){M(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function ia(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oe(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,st(a.key),a)}}function oa(e,t,r){return t&&Oe(e.prototype,t),r&&Oe(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function sa(e,t,r){return t=ce(t),la(e,ot()?Reflect.construct(t,r||[],ce(e).constructor):t.apply(e,r))}function la(e,t){if(t&&(X(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ua(e)}function ua(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ot(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ot=function(){return!!e})()}function ce(e){return ce=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ce(e)}function ca(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fe(e,t)}function fe(e,t){return fe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},fe(e,t)}function M(e,t,r){return t=st(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function st(e){var t=ma(e,"string");return X(t)=="symbol"?t:t+""}function ma(e,t){if(X(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(X(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var F=function(e){function t(){var r;ia(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return r=sa(this,t,[].concat(n)),M(r,"state",{isAnimationFinished:!0}),M(r,"id",bt("recharts-area-")),M(r,"handleAnimationEnd",function(){var o=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),Y(o)&&o()}),M(r,"handleAnimationStart",function(){var o=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),Y(o)&&o()}),r}return ca(t,e),oa(t,[{key:"renderDots",value:function(a,n,i){var o=this.props.isAnimationActive,l=this.state.isAnimationFinished;if(o&&!l)return null;var u=this.props,c=u.dot,s=u.points,f=u.dataKey,m=B(this.props,!1),d=B(c,!0),v=s.map(function(x,C){var A=I(I(I({key:"dot-".concat(C),r:3},m),d),{},{index:C,cx:x.x,cy:x.y,dataKey:f,value:x.value,payload:x.payload,points:s});return t.renderDotItem(c,A)}),y={clipPath:a?"url(#clipPath-".concat(n?"":"dots-").concat(i,")"):null};return p.createElement(J,R({className:"recharts-area-dots"},y),v)}},{key:"renderHorizontalRect",value:function(a){var n=this.props,i=n.baseLine,o=n.points,l=n.strokeWidth,u=o[0].x,c=o[o.length-1].x,s=a*Math.abs(u-c),f=ee(o.map(function(m){return m.y||0}));return E(i)&&typeof i=="number"?f=Math.max(i,f):i&&Array.isArray(i)&&i.length&&(f=Math.max(ee(i.map(function(m){return m.y||0})),f)),E(f)?p.createElement("rect",{x:u<c?u:u-s,y:0,width:s,height:Math.floor(f+(l?parseInt("".concat(l),10):1))}):null}},{key:"renderVerticalRect",value:function(a){var n=this.props,i=n.baseLine,o=n.points,l=n.strokeWidth,u=o[0].y,c=o[o.length-1].y,s=a*Math.abs(u-c),f=ee(o.map(function(m){return m.x||0}));return E(i)&&typeof i=="number"?f=Math.max(i,f):i&&Array.isArray(i)&&i.length&&(f=Math.max(ee(i.map(function(m){return m.x||0})),f)),E(f)?p.createElement("rect",{x:0,y:u<c?u:u-s,width:f+(l?parseInt("".concat(l),10):1),height:Math.floor(s)}):null}},{key:"renderClipRect",value:function(a){var n=this.props.layout;return n==="vertical"?this.renderVerticalRect(a):this.renderHorizontalRect(a)}},{key:"renderAreaStatically",value:function(a,n,i,o){var l=this.props,u=l.layout,c=l.type,s=l.stroke,f=l.connectNulls,m=l.isRange;l.ref;var d=it(l,aa);return p.createElement(J,{clipPath:i?"url(#clipPath-".concat(o,")"):null},p.createElement(me,R({},B(d,!0),{points:a,connectNulls:f,type:c,baseLine:n,layout:u,stroke:"none",className:"recharts-area-area"})),s!=="none"&&p.createElement(me,R({},B(this.props,!1),{className:"recharts-area-curve",layout:u,type:c,connectNulls:f,fill:"none",points:a})),s!=="none"&&m&&p.createElement(me,R({},B(this.props,!1),{className:"recharts-area-curve",layout:u,type:c,connectNulls:f,fill:"none",points:n})))}},{key:"renderAreaWithAnimation",value:function(a,n){var i=this,o=this.props,l=o.points,u=o.baseLine,c=o.isAnimationActive,s=o.animationBegin,f=o.animationDuration,m=o.animationEasing,d=o.animationId,v=this.state,y=v.prevPoints,x=v.prevBaseLine;return p.createElement(ht,{begin:s,duration:f,isActive:c,easing:m,from:{t:0},to:{t:1},key:"area-".concat(d),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(C){var A=C.t;if(y){var j=y.length/l.length,b=l.map(function(P,N){var V=Math.floor(N*j);if(y[V]){var S=y[V],$=G(S.x,P.x),W=G(S.y,P.y);return I(I({},P),{},{x:$(A),y:W(A)})}return P}),g;if(E(u)&&typeof u=="number"){var w=G(x,u);g=w(A)}else if(ve(u)||pt(u)){var T=G(x,0);g=T(A)}else g=u.map(function(P,N){var V=Math.floor(N*j);if(x[V]){var S=x[V],$=G(S.x,P.x),W=G(S.y,P.y);return I(I({},P),{},{x:$(A),y:W(A)})}return P});return i.renderAreaStatically(b,g,a,n)}return p.createElement(J,null,p.createElement("defs",null,p.createElement("clipPath",{id:"animationClipPath-".concat(n)},i.renderClipRect(A))),p.createElement(J,{clipPath:"url(#animationClipPath-".concat(n,")")},i.renderAreaStatically(l,u,a,n)))})}},{key:"renderArea",value:function(a,n){var i=this.props,o=i.points,l=i.baseLine,u=i.isAnimationActive,c=this.state,s=c.prevPoints,f=c.prevBaseLine,m=c.totalLength;return u&&o&&o.length&&(!s&&m>0||!ye(s,o)||!ye(f,l))?this.renderAreaWithAnimation(a,n):this.renderAreaStatically(o,l,a,n)}},{key:"render",value:function(){var a,n=this.props,i=n.hide,o=n.dot,l=n.points,u=n.className,c=n.top,s=n.left,f=n.xAxis,m=n.yAxis,d=n.width,v=n.height,y=n.isAnimationActive,x=n.id;if(i||!l||!l.length)return null;var C=this.state.isAnimationFinished,A=l.length===1,j=tt("recharts-area",u),b=f&&f.allowDataOverflow,g=m&&m.allowDataOverflow,w=b||g,T=ve(x)?this.id:x,P=(a=B(o,!1))!==null&&a!==void 0?a:{r:3,strokeWidth:2},N=P.r,V=N===void 0?3:N,S=P.strokeWidth,$=S===void 0?2:S,W=vt(o)?o:{},O=W.clipDot,D=O===void 0?!0:O,L=V*2+$;return p.createElement(J,{className:j},b||g?p.createElement("defs",null,p.createElement("clipPath",{id:"clipPath-".concat(T)},p.createElement("rect",{x:b?s:s-d/2,y:g?c:c-v/2,width:b?d:d*2,height:g?v:v*2})),!D&&p.createElement("clipPath",{id:"clipPath-dots-".concat(T)},p.createElement("rect",{x:s-L/2,y:c-L/2,width:d+L,height:v+L}))):null,A?null:this.renderArea(w,T),(o||A)&&this.renderDots(w,D,T),(!y||C)&&yt.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(a,n){return a.animationId!==n.prevAnimationId?{prevAnimationId:a.animationId,curPoints:a.points,curBaseLine:a.baseLine,prevPoints:n.curPoints,prevBaseLine:n.curBaseLine}:a.points!==n.curPoints||a.baseLine!==n.curBaseLine?{curPoints:a.points,curBaseLine:a.baseLine}:null}}])}(z.PureComponent);nt=F;M(F,"displayName","Area");M(F,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!gt.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});M(F,"getBaseValue",function(e,t,r,a){var n=e.layout,i=e.baseValue,o=t.props.baseValue,l=o??i;if(E(l)&&typeof l=="number")return l;var u=n==="horizontal"?a:r,c=u.scale.domain();if(u.type==="number"){var s=Math.max(c[0],c[1]),f=Math.min(c[0],c[1]);return l==="dataMin"?f:l==="dataMax"||s<0?s:Math.max(Math.min(c[0],c[1]),0)}return l==="dataMin"?c[0]:l==="dataMax"?c[1]:c[0]});M(F,"getComposedData",function(e){var t=e.props,r=e.item,a=e.xAxis,n=e.yAxis,i=e.xAxisTicks,o=e.yAxisTicks,l=e.bandSize,u=e.dataKey,c=e.stackedData,s=e.dataStartIndex,f=e.displayedData,m=e.offset,d=t.layout,v=c&&c.length,y=nt.getBaseValue(t,r,a,n),x=d==="horizontal",C=!1,A=f.map(function(b,g){var w;v?w=c[s+g]:(w=ge(b,u),Array.isArray(w)?C=!0:w=[y,w]);var T=w[1]==null||v&&ge(b,u)==null;return x?{x:xe({axis:a,ticks:i,bandSize:l,entry:b,index:g}),y:T?null:n.scale(w[1]),value:w,payload:b}:{x:T?null:a.scale(w[1]),y:xe({axis:n,ticks:o,bandSize:l,entry:b,index:g}),value:w,payload:b}}),j;return v||C?j=A.map(function(b){var g=Array.isArray(b.value)?b.value[0]:null;return x?{x:b.x,y:g!=null&&b.y!=null?n.scale(g):null}:{x:g!=null?a.scale(g):null,y:b.y}}):j=x?n.scale(y):a.scale(y),I({points:A,baseLine:j,layout:d,isRange:C},m)});M(F,"renderDotItem",function(e,t){var r;if(p.isValidElement(e))r=p.cloneElement(e,t);else if(Y(e))r=e(t);else{var a=tt("recharts-area-dot",typeof e!="boolean"?e.className:""),n=t.key,i=it(t,ra);r=p.createElement(xt,R({},i,{key:n,className:a}))}return r});var da=At({chartName:"AreaChart",GraphicalChild:F,axisComponents:[{axisType:"xAxis",AxisComp:Ze},{axisType:"yAxis",AxisComp:et}],formatAxisMap:wt});const fa=({active:e,payload:t,label:r,type:a,currency:n})=>{if(!e||!t||t.length===0)return null;const i=ue(new Date(r),"dd MMM yyyy");return h.jsxs("div",{className:"flex py-[6px] px-[12px] gap-4 bg-bg-default border text-sm rounded-md shadow",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("div",{className:"w-[10px] h-[10px] rounded-md bg-accent"}),h.jsx("p",{children:i})]}),t.map((o,l)=>{const u=a==="volume"?Vt(o.value):zt(o.value);return h.jsxs("div",{className:"flex gap-1 font-medium",children:[n&&h.jsx("p",{children:n}),h.jsx("p",{children:u})]},l)})]})},Pe=(e,t)=>({x:r,y:a,payload:n,className:i,...o})=>{const l=ue(n.value,"dd MMM"),u=ue(new Date(e),"dd MMM"),c=ue(new Date(t),"dd MMM");let s="middle",f=0;return l===u?s="start":l===c&&(s="end",f=30),h.jsx("text",{...o,x:r+f,y:a+10,textAnchor:s,className:Q("fill-text-weak text-xs",i),children:l})},ha=(e,t)=>({x:r,y:a,payload:n,className:i,...o})=>{const l=n.value===e[0],u=n.value===e[e.length-1],c=l?-10:u?14:4;return!l&&!u?h.jsx("div",{}):h.jsx("text",{...o,x:r,y:a+c,textAnchor:"end",className:Q("fill-text-weak text-xs",i),children:t(n.value)})},pa=e=>Number(e.multiplier),_=({hasAccess:e=!0,isLoading:t=!1,data:r=[],type:a="volume",dataKeyX:n="name",dataKeysY:i=["uv"],label:o,formatYText:l,tooltipText:u,containerClassName:c,tooltipContentClassName:s,currency:f,yAxisConfig:m})=>{const d=z.useMemo(()=>[...r].sort((O,D)=>new Date(O.name).getTime()-new Date(D.name).getTime()),[r]),[v,y]=z.useMemo(()=>d.length?[d[0].name,d[d.length-1].name]:de,[d]);function x(O,D,L){const U=(D-O)/(L-1);return Array.from({length:L},(he,lt)=>Math.round((O+lt*U)*1e3)/1e3)}const C=z.useMemo(()=>{if(!d.length)return Ot;let O=d.map(U=>Number(U.uv));if(m!=null&&m.range){const U=Number(m.multiplier);O=m.range.map(he=>Number(he)*U)}const D=Math.min(...O),L=Math.max(...O);return x(D,L,4)},[d,m]),A=z.useMemo(()=>d.length>0?d:Pt,[d]),j=z.useCallback(O=>l?l(O):a==="time"?Ct(O):Tt(O),[l,a]),b=z.useCallback(O=>{if(!m)return j(O);const D=pa(m);return`${O/D}${m.unit}`},[m,j]),g=z.useMemo(()=>{if(m!=null&&m.range){const O=Number(m.multiplier);return m.range.map(D=>Number(D)*O)}return C},[m,C]),w=z.useMemo(()=>`${v}-${y}`,[v,y]),T=z.useMemo(()=>g.join("-"),[g]),P=e&&!t,N=!e&&!t,V=!t&&!r.length,$=Q("min-h-[162px] [&_svg]:overflow-visible",!t&&!e&&"blur-sm",t&&"opacity-[0.1]"),W=z.useMemo(()=>{if(V&&!N)return h.jsx(jt,{});const O=v===y?[v]:[v,y];return h.jsx(Nt,{className:$,children:h.jsxs(da,{data:t||!d||N?A:d,margin:{top:1,right:4,left:-10,bottom:-5},children:[h.jsx(rt,{vertical:!1,stroke:"var(--colors-gray-4)",strokeWidth:.5,horizontalValues:C}),h.jsx(Ze,{dataKey:n,ticks:O,tickLine:!1,tick:t?Pe(de[0],de[1]):Pe(v,y),allowDuplicatedCategory:!1,axisLine:{stroke:"var(--colors-gray-3)",strokeWidth:1}},w),h.jsx(et,{ticks:g,domain:g,tickLine:!1,tickCount:4,tick:ha(g,b),allowDuplicatedCategory:!1,axisLine:{stroke:"var(--colors-gray-3)",strokeWidth:1}},T),P&&h.jsx(kt,{cursor:{stroke:"var(--colors-gray-4)",strokeDasharray:"4 3"},content:h.jsx(fa,{type:a,currency:f})}),i.map(D=>h.jsx(F,{type:"linear",dataKey:D,fillOpacity:.2,stroke:P?"var(--accent)":"var(--colors-gray-8)",fill:P?"var(--colors-indigo-9)":"var(--colors-gray-3)",strokeWidth:2,dot:!1,activeDot:!1},D))]})})},[$,f,n,i,b,t,A,N,V,P,d,a,y,v,g,C,w,T]);return h.jsxs("div",{className:Q("w-full min-h-[230px] flex flex-col p-4 pb-[8px] border rounded-md bg-bg-default",c),children:[h.jsx("div",{className:"flex items-center gap-2 mb-[16px] h-[24px]",children:h.jsxs(Dt,{className:"w-full h-full",loading:!o&&!u,children:[h.jsx(Lt,{variant:"subtitle",className:"font-semibold",children:o}),h.jsx($t,{children:h.jsxs(It,{children:[h.jsx(Ft,{children:h.jsx(Bt,{icon:h.jsx(_t,{})})}),h.jsx(Wt,{className:Q("break-words text-xs font-medium",s),children:u})]})})]})}),h.jsxs("div",{className:"relative flex-1",children:[N&&h.jsx(St,{}),t&&h.jsx(Et,{}),W]})]})};_.__docgenInfo={description:"",methods:[],displayName:"Charts",props:{label:{required:!0,tsType:{name:"string"},description:""},tooltipText:{required:!0,tsType:{name:"string"},description:""},hasAccess:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},data:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  uv: number | string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"uv",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}],raw:"IChartDataItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"volume" | "time"',elements:[{name:"literal",value:'"volume"'},{name:"literal",value:'"time"'}]},description:"",defaultValue:{value:'"volume"',computed:!1}},currency:{required:!1,tsType:{name:"string"},description:""},dataKeyX:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name: string;
  uv: number | string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"uv",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}},description:"",defaultValue:{value:'"name"',computed:!1}},dataKeysY:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(keyof IChartDataItem)[]"},description:"",defaultValue:{value:'["uv"]',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},formatYText:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:""},tooltipContentClassName:{required:!1,tsType:{name:"string"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},yAxisConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label?: string;
  dataKey?: string;
  unit?: string;
  format?: string;
  range?: [string, string];
  multiplier?: number | string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"dataKey",value:{name:"string",required:!1}},{key:"unit",value:{name:"string",required:!1}},{key:"format",value:{name:"string",required:!1}},{key:"range",value:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}],required:!1}},{key:"multiplier",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}},description:""}}};const Ba={title:"Xenith UI/Components/Charts",component:_,tags:["autodocs"]},te={args:{data:Z,tooltipContentClassName:"w-[218px]",tooltipText:"Total number of Pay Out transactions over the selected period.",containerClassName:"bg-yellow-500 h-[500px]",label:"Transaction Volume",hasAccess:!0,isLoading:!1,type:"volume",currency:"VND",yAxisConfig:{label:"Volume",dataKey:"value",unit:"M",format:"millions",range:["0","16"]}},render:e=>h.jsx(_,{...e})},ae={args:{data:Z,tooltipContentClassName:"w-[218px]",tooltipText:"Total number of Pay Out transactions over the selected period.",label:"Transaction Volume",hasAccess:!0,isLoading:!1,type:"volume",currency:"VND"},render:e=>h.jsx("div",{className:"grid w-[30%] h-[300px]",children:h.jsx(_,{...e})})},re={args:{data:[],tooltipText:"Total number of Pay Out transactions over the selected period.",label:"Transaction Volume",hasAccess:!0,isLoading:!1,type:"volume",tooltipContentClassName:"max-w-[218px]",currency:"VND"},render:e=>h.jsx(_,{...e})},ne={args:{data:Z,tooltipText:"Total number of Pay Out transactions over the selected period.",label:"Transaction Volume",hasAccess:!1,isLoading:!1,type:"volume",tooltipContentClassName:"max-w-[218px]",currency:"VND"},render:e=>h.jsx(_,{...e})},ie={args:{data:[],tooltipText:"Total number of Pay Out transactions over the selected period.",label:"Transaction Volume",hasAccess:!0,isLoading:!0,type:"volume",tooltipContentClassName:"max-w-[218px]",currency:"VND"},render:e=>h.jsx(_,{...e})},oe={args:{data:Mt,tooltipText:"Total number of Pay Out transactions over the selected period.",label:"Completion Time",hasAccess:!0,isLoading:!1,type:"time",tooltipContentClassName:"max-w-[218px]",yAxisConfig:{label:"Time",dataKey:"value",unit:"m",format:"minutes",range:["0","41.7"]}},render:e=>h.jsx(_,{...e})},se={args:{data:Z,tooltipText:"Total number of Pay Out transactions over the selected period.",label:"Transaction Volume",hasAccess:!0,isLoading:!1,type:"volume",tooltipContentClassName:"max-w-[218px]",currency:"VND"},render:()=>{const[e,t]=z.useState(["2.5","2.5"]);return h.jsxs("div",{children:[h.jsx(_,{yAxisConfig:{label:"Volume",dataKey:"value",unit:"m",format:"minutes",range:e},data:Z,tooltipText:"Total number of Pay Out transactions over the selected period.",label:"Transaction Volume",hasAccess:!0,isLoading:!1,type:"volume",tooltipContentClassName:"max-w-[218px]",currency:"VND"}),h.jsx("button",{onClick:()=>t(["0","2.5"]),children:"Change"})]})}},le={args:{label:"Transaction Volume",tooltipText:"Total volume of successful Pay In transactions over the selected period.",data:[{name:"2025-04-11",uv:20007},{name:"2025-04-21",uv:5e10},{name:"2025-04-25",uv:11e3},{name:"2025-04-28",uv:200600032003},{name:"2025-05-08",uv:19e4},{name:"2025-05-23",uv:80015},{name:"2025-06-05",uv:10020},{name:"2025-06-09",uv:10020},{name:"2025-06-10",uv:1e4}],hasAccess:!0,isLoading:!1,type:"volume",currency:"IDR",yAxisConfig:{label:"Volume",dataKey:"value",unit:"B",format:"billions",multiplier:"billions",range:["0","250"]}},render:e=>h.jsx(_,{...e})};var Ce,Te,je;te.parameters={...te.parameters,docs:{...(Ce=te.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    data: defaultChartsData,
    tooltipContentClassName: "w-[218px]",
    tooltipText: "Total number of Pay Out transactions over the selected period.",
    containerClassName: "bg-yellow-500 h-[500px]",
    label: "Transaction Volume",
    hasAccess: true,
    isLoading: false,
    type: "volume",
    currency: "VND",
    yAxisConfig: {
      label: "Volume",
      dataKey: "value",
      unit: "M",
      format: "millions",
      range: ["0", "16"]
    }
  },
  render: args => <Charts {...args} />
}`,...(je=(Te=te.parameters)==null?void 0:Te.docs)==null?void 0:je.source}}};var Ne,ke,De;ae.parameters={...ae.parameters,docs:{...(Ne=ae.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    data: defaultChartsData,
    tooltipContentClassName: "w-[218px]",
    tooltipText: "Total number of Pay Out transactions over the selected period.",
    label: "Transaction Volume",
    hasAccess: true,
    isLoading: false,
    type: "volume",
    currency: "VND"
  },
  render: args => <div className="grid w-[30%] h-[300px]">
      <Charts {...args} />
    </div>
}`,...(De=(ke=ae.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Se,Ee,Ve;re.parameters={...re.parameters,docs:{...(Se=re.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    data: [],
    tooltipText: "Total number of Pay Out transactions over the selected period.",
    label: "Transaction Volume",
    hasAccess: true,
    isLoading: false,
    type: "volume",
    tooltipContentClassName: "max-w-[218px]",
    currency: "VND"
  },
  render: args => <Charts {...args} />
}`,...(Ve=(Ee=re.parameters)==null?void 0:Ee.docs)==null?void 0:Ve.source}}};var ze,Me,_e;ne.parameters={...ne.parameters,docs:{...(ze=ne.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    data: defaultChartsData,
    tooltipText: "Total number of Pay Out transactions over the selected period.",
    label: "Transaction Volume",
    hasAccess: false,
    isLoading: false,
    type: "volume",
    tooltipContentClassName: "max-w-[218px]",
    currency: "VND"
  },
  render: args => <Charts {...args} />
}`,...(_e=(Me=ne.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var Le,$e,Ie;ie.parameters={...ie.parameters,docs:{...(Le=ie.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    data: [],
    tooltipText: "Total number of Pay Out transactions over the selected period.",
    label: "Transaction Volume",
    hasAccess: true,
    isLoading: true,
    type: "volume",
    tooltipContentClassName: "max-w-[218px]",
    currency: "VND"
  },
  render: args => <Charts {...args} />
}`,...(Ie=($e=ie.parameters)==null?void 0:$e.docs)==null?void 0:Ie.source}}};var Fe,We,Be;oe.parameters={...oe.parameters,docs:{...(Fe=oe.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    data: timeChartsData,
    tooltipText: "Total number of Pay Out transactions over the selected period.",
    label: "Completion Time",
    hasAccess: true,
    isLoading: false,
    type: "time",
    tooltipContentClassName: "max-w-[218px]",
    yAxisConfig: {
      label: "Time",
      dataKey: "value",
      unit: "m",
      format: "minutes",
      range: ["0", "41.7"]
    }
  },
  render: args => <Charts {...args} />
}`,...(Be=(We=oe.parameters)==null?void 0:We.docs)==null?void 0:Be.source}}};var qe,Re,Ke;se.parameters={...se.parameters,docs:{...(qe=se.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    data: defaultChartsData,
    tooltipText: "Total number of Pay Out transactions over the selected period.",
    label: "Transaction Volume",
    hasAccess: true,
    isLoading: false,
    type: "volume",
    tooltipContentClassName: "max-w-[218px]",
    currency: "VND"
  },
  render: () => {
    const [range, setRange] = useState<[string, string]>(["2.5", "2.5"]);
    return <div>
        <Charts yAxisConfig={{
        label: "Volume",
        dataKey: "value",
        unit: "m",
        format: "minutes",
        range
      }} data={defaultChartsData} tooltipText="Total number of Pay Out transactions over the selected period." label="Transaction Volume" hasAccess isLoading={false} type="volume" tooltipContentClassName="max-w-[218px]" currency="VND" />
        <button onClick={() => setRange(["0", "2.5"])}>Change</button>
      </div>;
  }
}`,...(Ke=(Re=se.parameters)==null?void 0:Re.docs)==null?void 0:Ke.source}}};var Ge,He,Ye;le.parameters={...le.parameters,docs:{...(Ge=le.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    label: "Transaction Volume",
    tooltipText: "Total volume of successful Pay In transactions over the selected period.",
    data: [{
      name: "2025-04-11",
      uv: 20007
    }, {
      name: "2025-04-21",
      uv: 50000000000
    }, {
      name: "2025-04-25",
      uv: 11000
    }, {
      name: "2025-04-28",
      uv: 200600032003
    }, {
      name: "2025-05-08",
      uv: 190000
    }, {
      name: "2025-05-23",
      uv: 80015
    }, {
      name: "2025-06-05",
      uv: 10020
    }, {
      name: "2025-06-09",
      uv: 10020
    }, {
      name: "2025-06-10",
      uv: 10000
    }],
    hasAccess: true,
    isLoading: false,
    type: "volume",
    currency: "IDR",
    yAxisConfig: {
      label: "Volume",
      dataKey: "value",
      unit: "B",
      format: "billions",
      multiplier: "billions",
      range: ["0", "250"]
    }
  },
  render: args => <Charts {...args} />
}`,...(Ye=(He=le.parameters)==null?void 0:He.docs)==null?void 0:Ye.source}}};const qa=["Default","SmallContainer","EmptyDefault","NoAccess","Loading","TimeChart","WithChangeOnButton","WithMultiplierYAxisConfig"];export{te as Default,re as EmptyDefault,ie as Loading,ne as NoAccess,ae as SmallContainer,oe as TimeChart,se as WithChangeOnButton,le as WithMultiplierYAxisConfig,qa as __namedExportsOrder,Ba as default};
