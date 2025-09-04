import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{u as Mt,c as Vt,d as Rt,i as M,h as Ut,j as Et,k as Q,w as Te,l as gt,o as xt,p as bt,C as Ct,q as $,r as te,s as ae,t as ge,A as zt,v as H,x as De,y as It,z as Se,D as Bt,F as _t,G as Kt,H as we,I as je,J as $t,K as Yt,g as Ft,X as At,Y as Tt,f as Wt,M as xe,O as qt,P as Gt,Q as Ht,U as Xt,E as Jt,R as Qt,T as Zt,N as ea,S as ta,a as aa,V as ra,W as V,Z as Ce}from"./charts-Cy-Kjkz-.js";import{R as h,r as S}from"./index-DRjF_FHU.js";import{a as Dt,c as J}from"./cn-8RyR4BqC.js";import{S as na}from"./Skeletonize-DZPbcDcL.js";import{F as ia}from"./info-Cre7IJy9.js";import{T as q}from"./Text-C8HBwI4b.js";import{T as sa,a as oa,b as la,c as ca}from"./Tooltip-D2ba4dcD.js";import{I as St}from"./Icon-CTnhpE1d.js";import{f as ve}from"./format-DX5nf6U1.js";import{F as ua}from"./chevron-right-D4FvqfWr.js";import{s as ma}from"./startOfMonth-CZilhnlQ.js";import{H as da}from"./Heading-DjlBwQyS.js";import{B as Y}from"./Button-CTdNiJsS.js";import{C as pa}from"./Card-C5rr-ZzX.js";import{s as fa}from"./subDays-DGkdSj43.js";import"./tiny-invariant-CopsF_GD.js";import"./eye-off-BKECGSzU.js";import"./spinner-ojW7ALd7.js";import"./Skeleton-CBnrsDVZ.js";import"./index-HZDBD2ik.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./toDate-SX-ecmdR.js";import"./chevron-down-CyV3wpL8.js";var ha=["x1","y1","x2","y2","key"],va=["offset"];function G(e){"@babel/helpers - typeof";return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(e)}function Ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ne(Object(r),!0).forEach(function(a){ya(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ne(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function ya(e,t,r){return t=ga(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ga(e){var t=xa(e,"string");return G(t)=="symbol"?t:t+""}function xa(e,t){if(G(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(G(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},F.apply(this,arguments)}function Pe(e,t){if(e==null)return{};var r=ba(e,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ba(e,t){if(e==null)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}var Ca=function(t){var r=t.fill;if(!r||r==="none")return null;var a=t.fillOpacity,n=t.x,i=t.y,o=t.width,l=t.height,m=t.ry;return h.createElement("rect",{x:n,y:i,ry:m,width:o,height:l,stroke:"none",fill:r,fillOpacity:a,className:"recharts-cartesian-grid-bg"})};function wt(e,t){var r;if(h.isValidElement(e))r=h.cloneElement(e,t);else if(Q(e))r=e(t);else{var a=t.x1,n=t.y1,i=t.x2,o=t.y2,l=t.key,m=Pe(t,ha),c=$(m,!1);c.offset;var u=Pe(c,va);r=h.createElement("line",F({},u,{x1:a,y1:n,x2:i,y2:o,fill:"none",key:l}))}return r}function Aa(e){var t=e.x,r=e.width,a=e.horizontal,n=a===void 0?!0:a,i=e.horizontalPoints;if(!n||!i||!i.length)return null;var o=i.map(function(l,m){var c=k(k({},e),{},{x1:t,y1:l,x2:t+r,y2:l,key:"line-".concat(m),index:m});return wt(n,c)});return h.createElement("g",{className:"recharts-cartesian-grid-horizontal"},o)}function Ta(e){var t=e.y,r=e.height,a=e.vertical,n=a===void 0?!0:a,i=e.verticalPoints;if(!n||!i||!i.length)return null;var o=i.map(function(l,m){var c=k(k({},e),{},{x1:l,y1:t,x2:l,y2:t+r,key:"line-".concat(m),index:m});return wt(n,c)});return h.createElement("g",{className:"recharts-cartesian-grid-vertical"},o)}function Da(e){var t=e.horizontalFill,r=e.fillOpacity,a=e.x,n=e.y,i=e.width,o=e.height,l=e.horizontalPoints,m=e.horizontal,c=m===void 0?!0:m;if(!c||!t||!t.length)return null;var u=l.map(function(d){return Math.round(d+n-n)}).sort(function(d,p){return d-p});n!==u[0]&&u.unshift(0);var f=u.map(function(d,p){var v=!u[p+1],y=v?n+o-d:u[p+1]-d;if(y<=0)return null;var x=p%t.length;return h.createElement("rect",{key:"react-".concat(p),y:d,x:a,height:y,width:i,stroke:"none",fill:t[x],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return h.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},f)}function Sa(e){var t=e.vertical,r=t===void 0?!0:t,a=e.verticalFill,n=e.fillOpacity,i=e.x,o=e.y,l=e.width,m=e.height,c=e.verticalPoints;if(!r||!a||!a.length)return null;var u=c.map(function(d){return Math.round(d+i-i)}).sort(function(d,p){return d-p});i!==u[0]&&u.unshift(0);var f=u.map(function(d,p){var v=!u[p+1],y=v?i+l-d:u[p+1]-d;if(y<=0)return null;var x=p%a.length;return h.createElement("rect",{key:"react-".concat(p),x:d,y:o,width:y,height:m,stroke:"none",fill:a[x],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return h.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},f)}var wa=function(t,r){var a=t.xAxis,n=t.width,i=t.height,o=t.offset;return gt(xt(k(k(k({},Ct.defaultProps),a),{},{ticks:bt(a,!0),viewBox:{x:0,y:0,width:n,height:i}})),o.left,o.left+o.width,r)},ja=function(t,r){var a=t.yAxis,n=t.width,i=t.height,o=t.offset;return gt(xt(k(k(k({},Ct.defaultProps),a),{},{ticks:bt(a,!0),viewBox:{x:0,y:0,width:n,height:i}})),o.top,o.top+o.height,r)},X={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function jt(e){var t,r,a,n,i,o,l=Mt(),m=Vt(),c=Rt(),u=k(k({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:X.stroke,fill:(r=e.fill)!==null&&r!==void 0?r:X.fill,horizontal:(a=e.horizontal)!==null&&a!==void 0?a:X.horizontal,horizontalFill:(n=e.horizontalFill)!==null&&n!==void 0?n:X.horizontalFill,vertical:(i=e.vertical)!==null&&i!==void 0?i:X.vertical,verticalFill:(o=e.verticalFill)!==null&&o!==void 0?o:X.verticalFill,x:M(e.x)?e.x:c.left,y:M(e.y)?e.y:c.top,width:M(e.width)?e.width:c.width,height:M(e.height)?e.height:c.height}),f=u.x,d=u.y,p=u.width,v=u.height,y=u.syncWithTicks,x=u.horizontalValues,w=u.verticalValues,C=Ut(),N=Et();if(!M(p)||p<=0||!M(v)||v<=0||!M(f)||f!==+f||!M(d)||d!==+d)return null;var b=u.verticalCoordinatesGenerator||wa,g=u.horizontalCoordinatesGenerator||ja,A=u.horizontalPoints,j=u.verticalPoints;if((!A||!A.length)&&Q(g)){var D=x&&x.length,P=g({yAxis:N?k(k({},N),{},{ticks:D?x:N.ticks}):void 0,width:l,height:m,offset:c},D?!0:y);Te(Array.isArray(P),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(G(P),"]")),Array.isArray(P)&&(A=P)}if((!j||!j.length)&&Q(b)){var R=w&&w.length,L=b({xAxis:C?k(k({},C),{},{ticks:R?w:C.ticks}):void 0,width:l,height:m,offset:c},R?!0:y);Te(Array.isArray(L),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(G(L),"]")),Array.isArray(L)&&(j=L)}return h.createElement("g",{className:"recharts-cartesian-grid"},h.createElement(Ca,{fill:u.fill,fillOpacity:u.fillOpacity,x:u.x,y:u.y,width:u.width,height:u.height,ry:u.ry}),h.createElement(Aa,F({},u,{offset:c,horizontalPoints:A,xAxis:C,yAxis:N})),h.createElement(Ta,F({},u,{offset:c,verticalPoints:j,xAxis:C,yAxis:N})),h.createElement(Da,F({},u,{horizontalPoints:A})),h.createElement(Sa,F({},u,{verticalPoints:j})))}jt.displayName="CartesianGrid";var Na=["layout","type","stroke","connectNulls","isRange","ref"],Pa=["key"],Nt;function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(e)}function Pt(e,t){if(e==null)return{};var r=ka(e,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ka(e,t){if(e==null)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},W.apply(this,arguments)}function ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ke(Object(r),!0).forEach(function(a){E(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ke(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function Oa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oe(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,Ot(a.key),a)}}function La(e,t,r){return t&&Oe(e.prototype,t),r&&Oe(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ma(e,t,r){return t=ye(t),Va(e,kt()?Reflect.construct(t,r||[],ye(e).constructor):t.apply(e,r))}function Va(e,t){if(t&&(Z(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ra(e)}function Ra(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function kt(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(kt=function(){return!!e})()}function ye(e){return ye=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ye(e)}function Ua(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&be(e,t)}function be(e,t){return be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},be(e,t)}function E(e,t,r){return t=Ot(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ot(e){var t=Ea(e,"string");return Z(t)=="symbol"?t:t+""}function Ea(e,t){if(Z(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(Z(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var _=function(e){function t(){var r;Oa(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return r=Ma(this,t,[].concat(n)),E(r,"state",{isAnimationFinished:!0}),E(r,"id",Yt("recharts-area-")),E(r,"handleAnimationEnd",function(){var o=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),Q(o)&&o()}),E(r,"handleAnimationStart",function(){var o=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),Q(o)&&o()}),r}return Ua(t,e),La(t,[{key:"renderDots",value:function(a,n,i){var o=this.props.isAnimationActive,l=this.state.isAnimationFinished;if(o&&!l)return null;var m=this.props,c=m.dot,u=m.points,f=m.dataKey,d=$(this.props,!1),p=$(c,!0),v=u.map(function(x,w){var C=B(B(B({key:"dot-".concat(w),r:3},d),p),{},{index:w,cx:x.x,cy:x.y,dataKey:f,value:x.value,payload:x.payload,points:u});return t.renderDotItem(c,C)}),y={clipPath:a?"url(#clipPath-".concat(n?"":"dots-").concat(i,")"):null};return h.createElement(te,W({className:"recharts-area-dots"},y),v)}},{key:"renderHorizontalRect",value:function(a){var n=this.props,i=n.baseLine,o=n.points,l=n.strokeWidth,m=o[0].x,c=o[o.length-1].x,u=a*Math.abs(m-c),f=ae(o.map(function(d){return d.y||0}));return M(i)&&typeof i=="number"?f=Math.max(i,f):i&&Array.isArray(i)&&i.length&&(f=Math.max(ae(i.map(function(d){return d.y||0})),f)),M(f)?h.createElement("rect",{x:m<c?m:m-u,y:0,width:u,height:Math.floor(f+(l?parseInt("".concat(l),10):1))}):null}},{key:"renderVerticalRect",value:function(a){var n=this.props,i=n.baseLine,o=n.points,l=n.strokeWidth,m=o[0].y,c=o[o.length-1].y,u=a*Math.abs(m-c),f=ae(o.map(function(d){return d.x||0}));return M(i)&&typeof i=="number"?f=Math.max(i,f):i&&Array.isArray(i)&&i.length&&(f=Math.max(ae(i.map(function(d){return d.x||0})),f)),M(f)?h.createElement("rect",{x:0,y:m<c?m:m-u,width:f+(l?parseInt("".concat(l),10):1),height:Math.floor(u)}):null}},{key:"renderClipRect",value:function(a){var n=this.props.layout;return n==="vertical"?this.renderVerticalRect(a):this.renderHorizontalRect(a)}},{key:"renderAreaStatically",value:function(a,n,i,o){var l=this.props,m=l.layout,c=l.type,u=l.stroke,f=l.connectNulls,d=l.isRange;l.ref;var p=Pt(l,Na);return h.createElement(te,{clipPath:i?"url(#clipPath-".concat(o,")"):null},h.createElement(ge,W({},$(p,!0),{points:a,connectNulls:f,type:c,baseLine:n,layout:m,stroke:"none",className:"recharts-area-area"})),u!=="none"&&h.createElement(ge,W({},$(this.props,!1),{className:"recharts-area-curve",layout:m,type:c,connectNulls:f,fill:"none",points:a})),u!=="none"&&d&&h.createElement(ge,W({},$(this.props,!1),{className:"recharts-area-curve",layout:m,type:c,connectNulls:f,fill:"none",points:n})))}},{key:"renderAreaWithAnimation",value:function(a,n){var i=this,o=this.props,l=o.points,m=o.baseLine,c=o.isAnimationActive,u=o.animationBegin,f=o.animationDuration,d=o.animationEasing,p=o.animationId,v=this.state,y=v.prevPoints,x=v.prevBaseLine;return h.createElement(zt,{begin:u,duration:f,isActive:c,easing:d,from:{t:0},to:{t:1},key:"area-".concat(p),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(w){var C=w.t;if(y){var N=y.length/l.length,b=l.map(function(D,P){var R=Math.floor(P*N);if(y[R]){var L=y[R],I=H(L.x,D.x),K=H(L.y,D.y);return B(B({},D),{},{x:I(C),y:K(C)})}return D}),g;if(M(m)&&typeof m=="number"){var A=H(x,m);g=A(C)}else if(De(m)||It(m)){var j=H(x,0);g=j(C)}else g=m.map(function(D,P){var R=Math.floor(P*N);if(x[R]){var L=x[R],I=H(L.x,D.x),K=H(L.y,D.y);return B(B({},D),{},{x:I(C),y:K(C)})}return D});return i.renderAreaStatically(b,g,a,n)}return h.createElement(te,null,h.createElement("defs",null,h.createElement("clipPath",{id:"animationClipPath-".concat(n)},i.renderClipRect(C))),h.createElement(te,{clipPath:"url(#animationClipPath-".concat(n,")")},i.renderAreaStatically(l,m,a,n)))})}},{key:"renderArea",value:function(a,n){var i=this.props,o=i.points,l=i.baseLine,m=i.isAnimationActive,c=this.state,u=c.prevPoints,f=c.prevBaseLine,d=c.totalLength;return m&&o&&o.length&&(!u&&d>0||!Se(u,o)||!Se(f,l))?this.renderAreaWithAnimation(a,n):this.renderAreaStatically(o,l,a,n)}},{key:"render",value:function(){var a,n=this.props,i=n.hide,o=n.dot,l=n.points,m=n.className,c=n.top,u=n.left,f=n.xAxis,d=n.yAxis,p=n.width,v=n.height,y=n.isAnimationActive,x=n.id;if(i||!l||!l.length)return null;var w=this.state.isAnimationFinished,C=l.length===1,N=Dt("recharts-area",m),b=f&&f.allowDataOverflow,g=d&&d.allowDataOverflow,A=b||g,j=De(x)?this.id:x,D=(a=$(o,!1))!==null&&a!==void 0?a:{r:3,strokeWidth:2},P=D.r,R=P===void 0?3:P,L=D.strokeWidth,I=L===void 0?2:L,K=Bt(o)?o:{},T=K.clipDot,O=T===void 0?!0:T,z=R*2+I;return h.createElement(te,{className:N},b||g?h.createElement("defs",null,h.createElement("clipPath",{id:"clipPath-".concat(j)},h.createElement("rect",{x:b?u:u-p/2,y:g?c:c-v/2,width:b?p:p*2,height:g?v:v*2})),!O&&h.createElement("clipPath",{id:"clipPath-dots-".concat(j)},h.createElement("rect",{x:u-z/2,y:c-z/2,width:p+z,height:v+z}))):null,C?null:this.renderArea(A,j),(o||C)&&this.renderDots(A,O,j),(!y||w)&&_t.renderCallByParent(this.props,l))}}],[{key:"getDerivedStateFromProps",value:function(a,n){return a.animationId!==n.prevAnimationId?{prevAnimationId:a.animationId,curPoints:a.points,curBaseLine:a.baseLine,prevPoints:n.curPoints,prevBaseLine:n.curBaseLine}:a.points!==n.curPoints||a.baseLine!==n.curBaseLine?{curPoints:a.points,curBaseLine:a.baseLine}:null}}])}(S.PureComponent);Nt=_;E(_,"displayName","Area");E(_,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!Kt.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});E(_,"getBaseValue",function(e,t,r,a){var n=e.layout,i=e.baseValue,o=t.props.baseValue,l=o??i;if(M(l)&&typeof l=="number")return l;var m=n==="horizontal"?a:r,c=m.scale.domain();if(m.type==="number"){var u=Math.max(c[0],c[1]),f=Math.min(c[0],c[1]);return l==="dataMin"?f:l==="dataMax"||u<0?u:Math.max(Math.min(c[0],c[1]),0)}return l==="dataMin"?c[0]:l==="dataMax"?c[1]:c[0]});E(_,"getComposedData",function(e){var t=e.props,r=e.item,a=e.xAxis,n=e.yAxis,i=e.xAxisTicks,o=e.yAxisTicks,l=e.bandSize,m=e.dataKey,c=e.stackedData,u=e.dataStartIndex,f=e.displayedData,d=e.offset,p=t.layout,v=c&&c.length,y=Nt.getBaseValue(t,r,a,n),x=p==="horizontal",w=!1,C=f.map(function(b,g){var A;v?A=c[u+g]:(A=we(b,m),Array.isArray(A)?w=!0:A=[y,A]);var j=A[1]==null||v&&we(b,m)==null;return x?{x:je({axis:a,ticks:i,bandSize:l,entry:b,index:g}),y:j?null:n.scale(A[1]),value:A,payload:b}:{x:j?null:a.scale(A[1]),y:je({axis:n,ticks:o,bandSize:l,entry:b,index:g}),value:A,payload:b}}),N;return v||w?N=C.map(function(b){var g=Array.isArray(b.value)?b.value[0]:null;return x?{x:b.x,y:g!=null&&b.y!=null?n.scale(g):null}:{x:g!=null?a.scale(g):null,y:b.y}}):N=x?n.scale(y):a.scale(y),B({points:C,baseLine:N,layout:p,isRange:w},d)});E(_,"renderDotItem",function(e,t){var r;if(h.isValidElement(e))r=h.cloneElement(e,t);else if(Q(e))r=e(t);else{var a=Dt("recharts-area-dot",typeof e!="boolean"?e.className:""),n=t.key,i=Pt(t,Pa);r=h.createElement($t,W({},i,{key:n,className:a}))}return r});var za=Ft({chartName:"AreaChart",GraphicalChild:_,axisComponents:[{axisType:"xAxis",AxisComp:At},{axisType:"yAxis",AxisComp:Tt}],formatAxisMap:Wt});const Ia=({active:e,payload:t,label:r,type:a,currency:n})=>{if(!e||!t||t.length===0)return null;const i=ve(new Date(r),"dd MMM yyyy");return s.jsxs("div",{className:"flex py-[6px] px-[12px] gap-4 bg-bg-default border text-sm rounded-md shadow",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-[10px] h-[10px] rounded-md bg-accent"}),s.jsx("p",{children:i})]}),t.map((o,l)=>{const m=a==="volume"?aa(o.value):ra(o.value);return s.jsxs("div",{className:"flex gap-1 font-medium",children:[n&&s.jsx("p",{children:n}),s.jsx("p",{children:m})]},l)})]})},Le=(e,t)=>({x:r,y:a,payload:n,className:i,...o})=>{const l=ve(n.value,"dd MMM"),m=ve(new Date(e),"dd MMM"),c=ve(new Date(t),"dd MMM");let u="middle",f=0;return l===m?u="start":l===c&&(u="end",f=30),s.jsx("text",{...o,x:r+f,y:a+10,textAnchor:u,className:J("fill-text-weak text-xs",i),children:l})},Ba=(e,t)=>({x:r,y:a,payload:n,className:i,...o})=>{const l=n.value===e[0],m=n.value===e[e.length-1],c=l?-10:m?14:4;return!l&&!m?s.jsx("div",{}):s.jsx("text",{...o,x:r,y:a+c,textAnchor:"end",className:J("fill-text-weak text-xs",i),children:t(n.value)})},_a=e=>Number(e.multiplier),U=({hasAccess:e=!0,isLoading:t=!1,data:r=[],type:a="volume",dataKeyX:n="name",dataKeysY:i=["uv"],label:o,formatYText:l,tooltipText:m,containerClassName:c,tooltipContentClassName:u,currency:f,yAxisConfig:d})=>{const p=S.useMemo(()=>[...r].sort((T,O)=>new Date(T.name).getTime()-new Date(O.name).getTime()),[r]),[v,y]=S.useMemo(()=>p.length?[p[0].name,p[p.length-1].name]:xe,[p]);function x(T,O,z){const ee=(O-T)/(z-1);return Array.from({length:z},(Ae,Lt)=>Math.round((T+Lt*ee)*1e3)/1e3)}const w=S.useMemo(()=>{if(!p.length)return qt;let T=p.map(ee=>Number(ee.uv));if(d!=null&&d.range){const ee=Number(d.multiplier);T=d.range.map(Ae=>Number(Ae)*ee)}const O=Math.min(...T),z=Math.max(...T);return x(O,z,4)},[p,d]),C=S.useMemo(()=>p.length>0?p:Gt,[p]),N=S.useCallback(T=>l?l(T):a==="time"?Ht(T):Xt(T),[l,a]),b=S.useCallback(T=>{if(!d)return N(T);const O=_a(d);return`${Math.round(T/O*1e3)/1e3}${d.unit}`},[d,N]),g=S.useMemo(()=>{if(d!=null&&d.range){const T=Number(d.multiplier);return d.range.map(O=>Number(O)*T)}return w},[d,w]),A=S.useMemo(()=>`${v}-${y}`,[v,y]),j=S.useMemo(()=>g.join("-"),[g]),D=e&&!t,P=!e&&!t,R=!t&&!r.length,I=J("min-h-[162px] [&_svg]:overflow-visible",!t&&!e&&"blur-sm",t&&"opacity-[0.1]"),K=S.useMemo(()=>{if(R&&!P)return s.jsx(Jt,{});const T=v===y?[v]:[v,y];return s.jsx(Qt,{className:I,children:s.jsxs(za,{data:t||!p||P?C:p,margin:{top:1,right:4,left:-10,bottom:-5},children:[s.jsx(jt,{vertical:!1,stroke:"var(--colors-gray-4)",strokeWidth:.5,horizontalValues:w}),s.jsx(At,{dataKey:n,ticks:T,tickLine:!1,tick:t?Le(xe[0],xe[1]):Le(v,y),allowDuplicatedCategory:!1,axisLine:{stroke:"var(--colors-gray-3)",strokeWidth:1}},A),s.jsx(Tt,{ticks:g,domain:g,tickLine:!1,tickCount:4,tick:Ba(g,b),allowDuplicatedCategory:!1,axisLine:{stroke:"var(--colors-gray-3)",strokeWidth:1}},j),D&&s.jsx(Zt,{cursor:{stroke:"var(--colors-gray-4)",strokeDasharray:"4 3"},content:s.jsx(Ia,{type:a,currency:f})}),i.map(O=>s.jsx(_,{type:"linear",dataKey:O,fillOpacity:.2,stroke:D?"var(--accent)":"var(--colors-gray-8)",fill:D?"var(--colors-indigo-9)":"var(--colors-gray-3)",strokeWidth:2,dot:!1,activeDot:!1},O))]})})},[I,f,n,i,b,t,C,P,R,D,p,a,y,v,g,w,A,j]);return s.jsxs("div",{className:J("w-full min-h-[230px] flex flex-col p-4 pb-[8px] border rounded-md bg-bg-default",c),children:[s.jsx("div",{className:"flex items-center gap-2 mb-[16px] h-[24px]",children:s.jsxs(na,{className:"w-full h-full",loading:!o&&!m,children:[s.jsx(q,{variant:"subtitle",className:"font-semibold",children:o}),s.jsx(sa,{children:s.jsxs(oa,{children:[s.jsx(la,{children:s.jsx(St,{icon:s.jsx(ia,{})})}),s.jsx(ca,{className:J("break-words text-xs font-medium",u),children:m})]})})]})}),s.jsxs("div",{className:J("relative flex-1",c),children:[P&&s.jsx(ea,{}),t&&s.jsx(ta,{}),K]})]})};U.__docgenInfo={description:"",methods:[],displayName:"Charts",props:{label:{required:!0,tsType:{name:"string"},description:""},tooltipText:{required:!0,tsType:{name:"string"},description:""},hasAccess:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},data:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"dataKey",value:{name:"string",required:!1}},{key:"unit",value:{name:"string",required:!1}},{key:"format",value:{name:"string",required:!1}},{key:"range",value:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}],required:!1}},{key:"multiplier",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}},description:""}}};const Ar={title:"Xenith UI/Components/Charts",component:U,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The Charts component provides a powerful area chart visualization for displaying time-series data, commonly used for analytics dashboards. Built on Recharts, it offers features like tooltips, custom Y-axis configuration, loading states, and access control.

### Key Features
- **Area Chart Visualization**: Display trends over time with filled area charts
- **Multiple Chart Types**: Support for volume and time-based charts
- **Y-Axis Configuration**: Flexible Y-axis with custom units, multipliers, and ranges
- **Access Control**: Built-in support for permission-based chart visibility
- **Loading States**: Skeleton loading with animated placeholders
- **Empty States**: Graceful handling of no data scenarios
- **Tooltips**: Interactive tooltips showing detailed information
- **Currency Support**: Display monetary values with currency symbols
- **Responsive Design**: Automatically adjusts to container size

### Usage
\`\`\`tsx
import { Charts } from "@xenithlabs/xenith-ui";

// Basic volume chart
<Charts
  label="Transaction Volume"
  data={volumeData}
  type="volume"
  currency="USD"
  tooltipText="Total transaction volume over time"
/>

// Time-based chart with Y-axis config
<Charts
  label="Completion Time"
  data={timeData}
  type="time"
  yAxisConfig={{
    unit: "m",
    format: "minutes",
    range: ["0", "60"],
  }}
/>

// Chart with access control
<Charts
  label="Revenue"
  data={revenueData}
  hasAccess={userHasPermission}
  isLoading={isLoadingData}
/>
\`\`\`

### Component Props

- **data** (Array<{name: string, uv: number}>): Chart data points
- **label** (string): Chart title/label
- **type** ("volume" | "time"): Chart type for formatting
- **hasAccess** (boolean): Whether user has permission to view. Default: true
- **isLoading** (boolean): Loading state. Default: false
- **dataKeyX** (string): X-axis data key. Default: "name"
- **dataKeysY** (string[]): Y-axis data keys. Default: ["uv"]
- **currency** (string): Currency symbol to display
- **tooltipText** (string): Tooltip description text
- **formatYText** ((val: number) => string): Custom Y-axis formatter
- **yAxisConfig** (object): Y-axis configuration
  - **label** (string): Y-axis label
  - **dataKey** (string): Data key for Y-axis
  - **unit** (string): Unit to display (e.g., "M", "h")
  - **format** (string): Format type ("millions", "thousands", "minutes", "hours")
  - **multiplier** (string | number): Value multiplier
  - **range** ([string, string]): Fixed Y-axis range
- **containerClassName** (string): Container CSS classes
- **tooltipContentClassName** (string): Tooltip content CSS classes

### Common Patterns

1. **Analytics Dashboard**: Display transaction volumes, completion times
2. **Financial Metrics**: Show revenue, costs with currency formatting
3. **Performance Monitoring**: Track API response times, processing durations
4. **User Activity**: Visualize user engagement over time periods
        `}}},argTypes:{data:{control:!1,description:"Array of data points with name (date) and uv (value) properties",table:{type:{summary:"Array<{name: string, uv: number}>"}}},label:{control:{type:"text"},description:"Chart title displayed at the top",table:{type:{summary:"string"}}},type:{control:{type:"select"},options:["volume","time"],description:"Chart type affects value formatting",table:{type:{summary:'"volume" | "time"'},defaultValue:{summary:'"volume"'}}},hasAccess:{control:{type:"boolean"},description:"Whether user has permission to view chart data",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},isLoading:{control:{type:"boolean"},description:"Show loading state with skeleton",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},currency:{control:{type:"text"},description:"Currency symbol to display in tooltips",table:{type:{summary:"string"}}},tooltipText:{control:{type:"text"},description:"Description text shown in info tooltip",table:{type:{summary:"string"}}},dataKeyX:{control:{type:"text"},description:"Key for X-axis data",table:{type:{summary:"string"},defaultValue:{summary:'"name"'}}},dataKeysY:{control:!1,description:"Keys for Y-axis data (supports multiple lines)",table:{type:{summary:"string[]"},defaultValue:{summary:'["uv"]'}}},yAxisConfig:{control:!1,description:"Configuration for Y-axis formatting and range",table:{type:{summary:"IYAxisConfig"}}},formatYText:{control:!1,description:"Custom formatter function for Y-axis values",table:{type:{summary:"(val: number) => string"}}},containerClassName:{control:{type:"text"},description:"CSS classes for the container",table:{type:{summary:"string"}}},tooltipContentClassName:{control:{type:"text"},description:"CSS classes for tooltip content",table:{type:{summary:"string"}}}}},re={args:{data:V,label:"Transaction Volume",tooltipText:"Total number of transactions over the selected period.",type:"volume",currency:"USD",hasAccess:!0,isLoading:!1}},ne={name:"Volume Chart with Y-Axis Config",args:{data:V,label:"Transaction Volume",tooltipText:"Total volume of successful transactions over the selected period.",type:"volume",currency:"USD",hasAccess:!0,isLoading:!1,yAxisConfig:{label:"Volume",dataKey:"value",unit:"M",format:"millions",multiplier:1e6,range:["0","16"]}}},ie={name:"Time Chart",args:{data:Ce,label:"Completion Time",tooltipText:"Average time taken for transactions to complete, measured from request to successful status.",type:"time",hasAccess:!0,isLoading:!1,tooltipContentClassName:"max-w-[352px]",yAxisConfig:{label:"Time",dataKey:"value",unit:"m",format:"minutes",multiplier:1,range:["0","60"]}}},se={args:{data:[],label:"Transaction Volume",tooltipText:"Total number of transactions over the selected period.",hasAccess:!0,isLoading:!0,type:"volume",currency:"USD"}},oe={args:{data:[],label:"Transaction Volume",tooltipText:"Total number of transactions over the selected period.",hasAccess:!0,isLoading:!1,type:"volume",currency:"USD"}},le={args:{data:V,label:"Transaction Volume",tooltipText:"Total number of transactions over the selected period.",hasAccess:!1,isLoading:!1,type:"volume",currency:"USD"}},ce={name:"Analytics Dashboard (Real Example)",args:{data:[],label:"Transaction Volume",tooltipText:"Total number of transactions over the selected period.",hasAccess:!0,isLoading:!1,type:"volume",currency:"USD"},render:e=>{const[t,r]=S.useState("USD"),[a,n]=S.useState({from:ma(new Date),to:new Date}),i=c=>{const u=[],f=new Date;for(let d=c-1;d>=0;d--){const p=fa(f,d);u.push({name:p.toISOString(),uv:Math.floor(Math.random()*1e7)+1e6})}return u},o=a.from&&a.to?Math.ceil((a.to.getTime()-a.from.getTime())/(1e3*60*60*24)):30,l=S.useMemo(()=>i(o),[o]),m=S.useMemo(()=>i(o).map(c=>({...c,uv:Math.random()*60})),[o]);return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex gap-4",children:[s.jsxs("select",{value:t,onChange:c=>r(c.target.value),className:"w-32 h-10 px-3 border rounded-md",children:[s.jsx("option",{value:"USD",children:"USD"}),s.jsx("option",{value:"EUR",children:"EUR"}),s.jsx("option",{value:"GBP",children:"GBP"}),s.jsx("option",{value:"JPY",children:"JPY"})]}),s.jsxs("div",{className:"flex gap-2 items-center",children:[s.jsx("input",{type:"date",value:a.from.toISOString().split("T")[0],onChange:c=>n({...a,from:new Date(c.target.value)}),className:"px-3 py-2 border rounded-md"}),s.jsx("span",{children:"to"}),s.jsx("input",{type:"date",value:a.to.toISOString().split("T")[0],onChange:c=>n({...a,to:new Date(c.target.value)}),className:"px-3 py-2 border rounded-md"})]})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[s.jsx(U,{...e,label:"Transaction Volume",tooltipText:"Total volume of successful transactions over the selected period.",data:l,containerClassName:"h-[315px]",type:"volume",currency:t,hasAccess:!0,isLoading:!1,yAxisConfig:{label:"Volume",dataKey:"value",unit:"M",format:"millions",multiplier:1e6,range:["0","12"]}}),s.jsx(U,{...e,label:"Completion Time",tooltipText:"Average time taken for transactions to complete.",data:m,containerClassName:"h-[315px]",tooltipContentClassName:"max-w-[352px]",type:"time",hasAccess:!0,isLoading:!1,yAxisConfig:{label:"Time",dataKey:"value",unit:"m",format:"minutes",multiplier:1,range:["0","60"]}})]})]})}},ue={name:"Payment Dashboard",args:{data:V,label:"Transaction Volume",tooltipText:"Total volume of successful Pay In transactions over the selected period.",hasAccess:!0,isLoading:!1,type:"volume",currency:"USD"},render:e=>s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx(da,{variant:"h2",children:"Pay Ins"}),s.jsx(Y,{variant:"link",iconPosition:"right",icon:s.jsx(St,{icon:s.jsx(ua,{})}),children:"View More"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[s.jsx(U,{...e,label:"Transaction Volume",tooltipText:"Total volume of successful Pay In transactions over the selected period.",data:V,containerClassName:"h-[315px]",type:"volume",currency:"USD",hasAccess:!0,isLoading:!1,yAxisConfig:{label:"Volume",dataKey:"value",unit:"M",format:"millions",multiplier:1e6,range:["0","16"]}}),s.jsxs(pa,{className:"h-[315px] flex flex-col justify-center items-center",children:[s.jsx(q,{variant:"medium",className:"text-text-weak",children:"Status Overview"}),s.jsx(q,{variant:"regular",className:"text-text-weaker mt-2",children:"StatusBar component would go here"})]}),s.jsx(U,{...e,label:"Completion Time",tooltipText:"Average time taken for Pay In transactions to complete.",data:Ce,containerClassName:"h-[315px] md:col-span-2 lg:col-span-1",tooltipContentClassName:"max-w-[352px]",type:"time",hasAccess:!0,isLoading:!1,yAxisConfig:{label:"Time",dataKey:"value",unit:"h",format:"hours",multiplier:60,range:["0","2"]}})]})]})},me={name:"Dynamic Y-Axis Range",args:{data:V,label:"Transaction Volume",tooltipText:"Total number of transactions over the selected period.",hasAccess:!0,isLoading:!1,type:"volume",currency:"USD"},render:e=>{const[t,r]=S.useState(["0","10"]),[a,n]=S.useState("M");return s.jsxs("div",{className:"space-y-4",children:[s.jsx(U,{...e,data:V,label:"Transaction Volume",tooltipText:"Total number of transactions over the selected period.",type:"volume",currency:"USD",hasAccess:!0,isLoading:!1,yAxisConfig:{label:"Volume",dataKey:"value",unit:a,format:"millions",multiplier:1e6,range:t}}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(Y,{size:"sm",variant:"outline",onClick:()=>r(["0","5"]),children:"0-5M Range"}),s.jsx(Y,{size:"sm",variant:"outline",onClick:()=>r(["0","10"]),children:"0-10M Range"}),s.jsx(Y,{size:"sm",variant:"outline",onClick:()=>r(["0","20"]),children:"0-20M Range"}),s.jsx(Y,{size:"sm",variant:"outline",onClick:()=>{r(["0","1000"]),n("K")},children:"Switch to K"})]})]})}},de={name:"Multi-Currency Support",args:{data:V,label:"Revenue in USD",tooltipText:"Total revenue in USD over the selected period.",hasAccess:!0,isLoading:!1,type:"volume",currency:"USD"},render:e=>{const t=["USD","EUR","GBP","JPY","VND"],[r,a]=S.useState("USD");return s.jsxs("div",{className:"space-y-4",children:[s.jsx("div",{className:"flex gap-2",children:t.map(n=>s.jsx(Y,{size:"sm",variant:r===n?"solid":"outline",theme:r===n?"primary":"neutral",onClick:()=>a(n),children:n},n))}),s.jsx(U,{...e,data:V,label:`Revenue in ${r}`,tooltipText:`Total revenue in ${r} over the selected period.`,type:"volume",currency:r,containerClassName:"h-[400px]",hasAccess:!0,isLoading:!1,yAxisConfig:{label:"Revenue",dataKey:"value",unit:"M",format:"millions",multiplier:1e6,range:["0","20"]}})]})}},pe={name:"Custom Container Styling",args:{data:V,label:"Weekly Overview",tooltipText:"Last 7 days of activity",hasAccess:!0,isLoading:!1,type:"volume",currency:"USD"},render:e=>s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx(q,{variant:"regular",className:"mb-2",children:"Compact Chart"}),s.jsx(U,{...e,data:V.slice(0,7),label:"Weekly Overview",tooltipText:"Last 7 days of activity",type:"volume",currency:"USD",hasAccess:!0,isLoading:!1,containerClassName:"h-[250px] text-sm"})]}),s.jsxs("div",{children:[s.jsx(q,{variant:"regular",className:"mb-2",children:"Tall Chart"}),s.jsx(U,{...e,data:Ce,label:"Response Time",tooltipText:"API response time in milliseconds",type:"time",hasAccess:!0,isLoading:!1,containerClassName:"h-[450px]",yAxisConfig:{unit:"ms",format:"milliseconds",multiplier:1e3,range:["0","500"]}})]})]})},fe={name:"Realtime Data Simulation",args:{data:V,label:"Live Transaction Volume",tooltipText:"Real-time transaction volume updates",hasAccess:!0,isLoading:!1,type:"volume",currency:"USD"},render:e=>{const[t,r]=S.useState(V),[a,n]=S.useState(!1),i=()=>{n(!0),setTimeout(()=>{const o=t.map(l=>({...l,uv:l.uv+(Math.random()-.5)*1e6}));r(o),n(!1)},500)};return s.jsxs("div",{className:"space-y-4",children:[s.jsx(U,{...e,data:t,label:"Live Transaction Volume",tooltipText:"Real-time transaction volume updates",type:"volume",currency:"USD",hasAccess:!0,isLoading:a,containerClassName:"h-[400px]",yAxisConfig:{label:"Volume",dataKey:"value",unit:"M",format:"millions",multiplier:1e6,range:["0","20"]}}),s.jsx(Y,{onClick:i,disabled:a,children:a?"Updating...":"Update Data"})]})}},he={name:"Error States",args:{data:[],label:"Transaction Volume",tooltipText:"No data available for the selected period",hasAccess:!0,isLoading:!1,type:"volume",currency:"USD"},render:e=>s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx(q,{variant:"medium",className:"mb-2",children:"No Data Available"}),s.jsx(U,{...e,data:[],label:"Transaction Volume",tooltipText:"No data available for the selected period",type:"volume",currency:"USD",hasAccess:!0,isLoading:!1})]}),s.jsxs("div",{children:[s.jsx(q,{variant:"medium",className:"mb-2",children:"Access Denied"}),s.jsx(U,{...e,data:V,label:"Restricted Data",tooltipText:"You don't have permission to view this data",type:"volume",currency:"USD",hasAccess:!1,isLoading:!1})]})]})};var Me,Ve,Re;re.parameters={...re.parameters,docs:{...(Me=re.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    data: defaultChartsData,
    label: "Transaction Volume",
    tooltipText: "Total number of transactions over the selected period.",
    type: "volume",
    currency: "USD",
    hasAccess: true,
    isLoading: false
  }
}`,...(Re=(Ve=re.parameters)==null?void 0:Ve.docs)==null?void 0:Re.source}}};var Ue,Ee,ze;ne.parameters={...ne.parameters,docs:{...(Ue=ne.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: "Volume Chart with Y-Axis Config",
  args: {
    data: defaultChartsData,
    label: "Transaction Volume",
    tooltipText: "Total volume of successful transactions over the selected period.",
    type: "volume",
    currency: "USD",
    hasAccess: true,
    isLoading: false,
    yAxisConfig: {
      label: "Volume",
      dataKey: "value",
      unit: "M",
      format: "millions",
      multiplier: 1000000,
      range: ["0", "16"]
    }
  }
}`,...(ze=(Ee=ne.parameters)==null?void 0:Ee.docs)==null?void 0:ze.source}}};var Ie,Be,_e;ie.parameters={...ie.parameters,docs:{...(Ie=ie.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: "Time Chart",
  args: {
    data: timeChartsData,
    label: "Completion Time",
    tooltipText: "Average time taken for transactions to complete, measured from request to successful status.",
    type: "time",
    hasAccess: true,
    isLoading: false,
    tooltipContentClassName: "max-w-[352px]",
    yAxisConfig: {
      label: "Time",
      dataKey: "value",
      unit: "m",
      format: "minutes",
      multiplier: 1,
      range: ["0", "60"]
    }
  }
}`,...(_e=(Be=ie.parameters)==null?void 0:Be.docs)==null?void 0:_e.source}}};var Ke,$e,Ye;se.parameters={...se.parameters,docs:{...(Ke=se.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    data: [],
    label: "Transaction Volume",
    tooltipText: "Total number of transactions over the selected period.",
    hasAccess: true,
    isLoading: true,
    type: "volume",
    currency: "USD"
  }
}`,...(Ye=($e=se.parameters)==null?void 0:$e.docs)==null?void 0:Ye.source}}};var Fe,We,qe;oe.parameters={...oe.parameters,docs:{...(Fe=oe.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    data: [],
    label: "Transaction Volume",
    tooltipText: "Total number of transactions over the selected period.",
    hasAccess: true,
    isLoading: false,
    type: "volume",
    currency: "USD"
  }
}`,...(qe=(We=oe.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};var Ge,He,Xe;le.parameters={...le.parameters,docs:{...(Ge=le.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    data: defaultChartsData,
    label: "Transaction Volume",
    tooltipText: "Total number of transactions over the selected period.",
    hasAccess: false,
    isLoading: false,
    type: "volume",
    currency: "USD"
  }
}`,...(Xe=(He=le.parameters)==null?void 0:He.docs)==null?void 0:Xe.source}}};var Je,Qe,Ze;ce.parameters={...ce.parameters,docs:{...(Je=ce.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: "Analytics Dashboard (Real Example)",
  args: {
    data: [],
    label: "Transaction Volume",
    tooltipText: "Total number of transactions over the selected period.",
    hasAccess: true,
    isLoading: false,
    type: "volume",
    currency: "USD"
  },
  render: args => {
    const [currency, setCurrency] = useState("USD");
    const [dateRange, setDateRange] = useState<{
      from: Date;
      to: Date;
    }>({
      from: startOfMonth(new Date()),
      to: new Date()
    });

    // Simulate data based on date range
    const generateData = (days: number) => {
      const data = [];
      const endDate = new Date();
      for (let i = days - 1; i >= 0; i--) {
        const date = subDays(endDate, i);
        data.push({
          name: date.toISOString(),
          uv: Math.floor(Math.random() * 10000000) + 1000000
        });
      }
      return data;
    };
    const days = dateRange.from && dateRange.to ? Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24)) : 30;
    const volumeData = useMemo(() => generateData(days), [days]);
    const timeData = useMemo(() => generateData(days).map(d => ({
      ...d,
      uv: Math.random() * 60
    })), [days]);
    return <div className="space-y-6">
        <div className="flex gap-4">
          <select value={currency} onChange={e => setCurrency(e.target.value)} className="w-32 h-10 px-3 border rounded-md">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
          {/* DateRangePicker usage */}
          <div className="flex gap-2 items-center">
            <input type="date" value={dateRange.from.toISOString().split('T')[0]} onChange={e => setDateRange({
            ...dateRange,
            from: new Date(e.target.value)
          })} className="px-3 py-2 border rounded-md" />
            <span>to</span>
            <input type="date" value={dateRange.to.toISOString().split('T')[0]} onChange={e => setDateRange({
            ...dateRange,
            to: new Date(e.target.value)
          })} className="px-3 py-2 border rounded-md" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Charts {...args} label="Transaction Volume" tooltipText="Total volume of successful transactions over the selected period." data={volumeData} containerClassName="h-[315px]" type="volume" currency={currency} hasAccess={true} isLoading={false} yAxisConfig={{
          label: "Volume",
          dataKey: "value",
          unit: "M",
          format: "millions",
          multiplier: 1000000,
          range: ["0", "12"]
        }} />
          <Charts {...args} label="Completion Time" tooltipText="Average time taken for transactions to complete." data={timeData} containerClassName="h-[315px]" tooltipContentClassName="max-w-[352px]" type="time" hasAccess={true} isLoading={false} yAxisConfig={{
          label: "Time",
          dataKey: "value",
          unit: "m",
          format: "minutes",
          multiplier: 1,
          range: ["0", "60"]
        }} />
        </div>
      </div>;
  }
}`,...(Ze=(Qe=ce.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,at;ue.parameters={...ue.parameters,docs:{...(et=ue.parameters)==null?void 0:et.docs,source:{originalSource:`{
  name: "Payment Dashboard",
  args: {
    data: defaultChartsData,
    label: "Transaction Volume",
    tooltipText: "Total volume of successful Pay In transactions over the selected period.",
    hasAccess: true,
    isLoading: false,
    type: "volume",
    currency: "USD"
  },
  render: args => {
    return <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Heading variant="h2">Pay Ins</Heading>
          <Button variant="link" iconPosition="right" icon={<Icon icon={<ChevronRightIcon />} />}>
            View More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Charts {...args} label="Transaction Volume" tooltipText="Total volume of successful Pay In transactions over the selected period." data={defaultChartsData} containerClassName="h-[315px]" type="volume" currency="USD" hasAccess={true} isLoading={false} yAxisConfig={{
          label: "Volume",
          dataKey: "value",
          unit: "M",
          format: "millions",
          multiplier: 1000000,
          range: ["0", "16"]
        }} />
          
          <Card className="h-[315px] flex flex-col justify-center items-center">
            <Text variant="medium" className="text-text-weak">Status Overview</Text>
            <Text variant="regular" className="text-text-weaker mt-2">
              StatusBar component would go here
            </Text>
          </Card>
          
          <Charts {...args} label="Completion Time" tooltipText="Average time taken for Pay In transactions to complete." data={timeChartsData} containerClassName="h-[315px] md:col-span-2 lg:col-span-1" tooltipContentClassName="max-w-[352px]" type="time" hasAccess={true} isLoading={false} yAxisConfig={{
          label: "Time",
          dataKey: "value",
          unit: "h",
          format: "hours",
          multiplier: 60,
          range: ["0", "2"]
        }} />
        </div>
      </div>;
  }
}`,...(at=(tt=ue.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var rt,nt,it;me.parameters={...me.parameters,docs:{...(rt=me.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  name: "Dynamic Y-Axis Range",
  args: {
    data: defaultChartsData,
    label: "Transaction Volume",
    tooltipText: "Total number of transactions over the selected period.",
    hasAccess: true,
    isLoading: false,
    type: "volume",
    currency: "USD"
  },
  render: args => {
    const [range, setRange] = useState<[string, string]>(["0", "10"]);
    const [unit, setUnit] = useState("M");
    return <div className="space-y-4">
        <Charts {...args} data={defaultChartsData} label="Transaction Volume" tooltipText="Total number of transactions over the selected period." type="volume" currency="USD" hasAccess={true} isLoading={false} yAxisConfig={{
        label: "Volume",
        dataKey: "value",
        unit,
        format: "millions",
        multiplier: 1000000,
        range
      }} />
        
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setRange(["0", "5"])}>
            0-5M Range
          </Button>
          <Button size="sm" variant="outline" onClick={() => setRange(["0", "10"])}>
            0-10M Range
          </Button>
          <Button size="sm" variant="outline" onClick={() => setRange(["0", "20"])}>
            0-20M Range
          </Button>
          <Button size="sm" variant="outline" onClick={() => {
          setRange(["0", "1000"]);
          setUnit("K");
        }}>
            Switch to K
          </Button>
        </div>
      </div>;
  }
}`,...(it=(nt=me.parameters)==null?void 0:nt.docs)==null?void 0:it.source}}};var st,ot,lt;de.parameters={...de.parameters,docs:{...(st=de.parameters)==null?void 0:st.docs,source:{originalSource:`{
  name: "Multi-Currency Support",
  args: {
    data: defaultChartsData,
    label: "Revenue in USD",
    tooltipText: "Total revenue in USD over the selected period.",
    hasAccess: true,
    isLoading: false,
    type: "volume",
    currency: "USD"
  },
  render: args => {
    const currencies = ["USD", "EUR", "GBP", "JPY", "VND"];
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    return <div className="space-y-4">
        <div className="flex gap-2">
          {currencies.map(currency => <Button key={currency} size="sm" variant={selectedCurrency === currency ? "solid" : "outline"} theme={selectedCurrency === currency ? "primary" : "neutral"} onClick={() => setSelectedCurrency(currency)}>
              {currency}
            </Button>)}
        </div>
        
        <Charts {...args} data={defaultChartsData} label={\`Revenue in \${selectedCurrency}\`} tooltipText={\`Total revenue in \${selectedCurrency} over the selected period.\`} type="volume" currency={selectedCurrency} containerClassName="h-[400px]" hasAccess={true} isLoading={false} yAxisConfig={{
        label: "Revenue",
        dataKey: "value",
        unit: "M",
        format: "millions",
        multiplier: 1000000,
        range: ["0", "20"]
      }} />
      </div>;
  }
}`,...(lt=(ot=de.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var ct,ut,mt;pe.parameters={...pe.parameters,docs:{...(ct=pe.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  name: "Custom Container Styling",
  args: {
    data: defaultChartsData,
    label: "Weekly Overview",
    tooltipText: "Last 7 days of activity",
    hasAccess: true,
    isLoading: false,
    type: "volume",
    currency: "USD"
  },
  render: args => <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Text variant="regular" className="mb-2">Compact Chart</Text>
        <Charts {...args} data={defaultChartsData.slice(0, 7)} label="Weekly Overview" tooltipText="Last 7 days of activity" type="volume" currency="USD" hasAccess={true} isLoading={false} containerClassName="h-[250px] text-sm" />
      </div>
      
      <div>
        <Text variant="regular" className="mb-2">Tall Chart</Text>
        <Charts {...args} data={timeChartsData} label="Response Time" tooltipText="API response time in milliseconds" type="time" hasAccess={true} isLoading={false} containerClassName="h-[450px]" yAxisConfig={{
        unit: "ms",
        format: "milliseconds",
        multiplier: 1000,
        range: ["0", "500"]
      }} />
      </div>
    </div>
}`,...(mt=(ut=pe.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var dt,pt,ft;fe.parameters={...fe.parameters,docs:{...(dt=fe.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  name: "Realtime Data Simulation",
  args: {
    data: defaultChartsData,
    label: "Live Transaction Volume",
    tooltipText: "Real-time transaction volume updates",
    hasAccess: true,
    isLoading: false,
    type: "volume",
    currency: "USD"
  },
  render: args => {
    const [data, setData] = useState(defaultChartsData);
    const [isUpdating, setIsUpdating] = useState(false);
    const updateData = () => {
      setIsUpdating(true);
      setTimeout(() => {
        const newData = data.map(point => ({
          ...point,
          uv: point.uv + (Math.random() - 0.5) * 1000000
        }));
        setData(newData);
        setIsUpdating(false);
      }, 500);
    };
    return <div className="space-y-4">
        <Charts {...args} data={data} label="Live Transaction Volume" tooltipText="Real-time transaction volume updates" type="volume" currency="USD" hasAccess={true} isLoading={isUpdating} containerClassName="h-[400px]" yAxisConfig={{
        label: "Volume",
        dataKey: "value",
        unit: "M",
        format: "millions",
        multiplier: 1000000,
        range: ["0", "20"]
      }} />
        
        <Button onClick={updateData} disabled={isUpdating}>
          {isUpdating ? "Updating..." : "Update Data"}
        </Button>
      </div>;
  }
}`,...(ft=(pt=fe.parameters)==null?void 0:pt.docs)==null?void 0:ft.source}}};var ht,vt,yt;he.parameters={...he.parameters,docs:{...(ht=he.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  name: "Error States",
  args: {
    data: [],
    label: "Transaction Volume",
    tooltipText: "No data available for the selected period",
    hasAccess: true,
    isLoading: false,
    type: "volume",
    currency: "USD"
  },
  render: args => <div className="space-y-4">
      <div>
        <Text variant="medium" className="mb-2">No Data Available</Text>
        <Charts {...args} data={[]} label="Transaction Volume" tooltipText="No data available for the selected period" type="volume" currency="USD" hasAccess={true} isLoading={false} />
      </div>
      
      <div>
        <Text variant="medium" className="mb-2">Access Denied</Text>
        <Charts {...args} data={defaultChartsData} label="Restricted Data" tooltipText="You don't have permission to view this data" type="volume" currency="USD" hasAccess={false} isLoading={false} />
      </div>
    </div>
}`,...(yt=(vt=he.parameters)==null?void 0:vt.docs)==null?void 0:yt.source}}};const Tr=["Default","VolumeChart","TimeChart","LoadingState","EmptyState","NoAccessState","AnalyticsDashboard","PaymentDashboard","DynamicRangeUpdate","MultiCurrencyChart","CustomStyling","RealtimeSimulation","ErrorHandling"];export{ce as AnalyticsDashboard,pe as CustomStyling,re as Default,me as DynamicRangeUpdate,oe as EmptyState,he as ErrorHandling,se as LoadingState,de as MultiCurrencyChart,le as NoAccessState,ue as PaymentDashboard,fe as RealtimeSimulation,ie as TimeChart,ne as VolumeChart,Tr as __namedExportsOrder,Ar as default};
