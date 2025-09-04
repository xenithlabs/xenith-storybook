import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{R as m,r as d}from"./index-DRjF_FHU.js";import{c as ke}from"./cn-8RyR4BqC.js";import{P as Se,a as Ee,b as Pe}from"./Popover-A4hNnO1p.js";import{T as h}from"./Text-C8HBwI4b.js";import{I as Ie}from"./useClickOutside-CF2VWPuo.js";import{u as Re,a as L,b as W,c as V,d as $}from"./Form-Dj23DUEH.js";import{C as q}from"./Card-C5rr-ZzX.js";import{H as G}from"./Heading-DjlBwQyS.js";import{D as De}from"./Divider-CIm89-oy.js";import{B as He}from"./Button-DZCl7_eM.js";import{B as S}from"./Badge-CQf0SPqP.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-HZDBD2ik.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./stringCase-DaZl3p-i.js";import"./close-D2djoYoT.js";import"./search-5X7N_xNn.js";import"./mini-FlV67GHA.js";import"./check-C0C6JGvp.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";import"./clock-DRhx3Wks.js";import"./Icon-CTnhpE1d.js";import"./index-CAHntWCK.js";import"./Checkbox-CMdwPcui.js";import"./index-Bu1UD4WD.js";import"./Label-CfHWTmrj.js";import"./index-_lyfCmBZ.js";function j(){return(j=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function z(e,r){if(e==null)return{};var a,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r.indexOf(a=s[t])>=0||(n[a]=e[a]);return n}function _(e){var r=d.useRef(e),a=d.useRef(function(t){r.current&&r.current(t)});return r.current=e,a.current}var y=function(e,r,a){return r===void 0&&(r=0),a===void 0&&(a=1),e>a?a:e<r?r:e},F=function(e){return"touches"in e},U=function(e){return e&&e.ownerDocument.defaultView||self},ee=function(e,r,a){var t=e.getBoundingClientRect(),n=F(r)?function(s,c){for(var l=0;l<s.length;l++)if(s[l].identifier===c)return s[l];return s[0]}(r.touches,a):r;return{left:y((n.pageX-(t.left+U(e).pageXOffset))/t.width),top:y((n.pageY-(t.top+U(e).pageYOffset))/t.height)}},re=function(e){!F(e)&&e.preventDefault()},J=m.memo(function(e){var r=e.onMove,a=e.onKey,t=z(e,["onMove","onKey"]),n=d.useRef(null),s=_(r),c=_(a),l=d.useRef(null),i=d.useRef(!1),u=d.useMemo(function(){var T=function(x){re(x),(F(x)?x.touches.length>0:x.buttons>0)&&n.current?s(ee(n.current,x,l.current)):w(!1)},B=function(){return w(!1)};function w(x){var g=i.current,C=U(n.current),k=x?C.addEventListener:C.removeEventListener;k(g?"touchmove":"mousemove",T),k(g?"touchend":"mouseup",B)}return[function(x){var g=x.nativeEvent,C=n.current;if(C&&(re(g),!function(Te,Be){return Be&&!F(Te)}(g,i.current)&&C)){if(F(g)){i.current=!0;var k=g.changedTouches||[];k.length&&(l.current=k[0].identifier)}C.focus(),s(ee(C,g,l.current)),w(!0)}},function(x){var g=x.which||x.keyCode;g<37||g>40||(x.preventDefault(),c({left:g===39?.05:g===37?-.05:0,top:g===40?.05:g===38?-.05:0}))},w]},[c,s]),p=u[0],b=u[1],N=u[2];return d.useEffect(function(){return N},[N]),m.createElement("div",j({},t,{onTouchStart:p,onMouseDown:p,className:"react-colorful__interactive",ref:n,onKeyDown:b,tabIndex:0,role:"slider"}))}),O=function(e){return e.filter(Boolean).join(" ")},Z=function(e){var r=e.color,a=e.left,t=e.top,n=t===void 0?.5:t,s=O(["react-colorful__pointer",e.className]);return m.createElement("div",{className:s,style:{top:100*n+"%",left:100*a+"%"}},m.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},f=function(e,r,a){return r===void 0&&(r=0),a===void 0&&(a=Math.pow(10,r)),Math.round(a*e)/a},Ae=function(e){return Le(X(e))},X=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?f(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?f(parseInt(e.substring(6,8),16)/255,2):1}},Me=function(e){return Oe(ze(e))},Fe=function(e){var r=e.s,a=e.v,t=e.a,n=(200-r)*a/100;return{h:f(e.h),s:f(n>0&&n<200?r*a/100/(n<=100?n:200-n)*100:0),l:f(n/2),a:f(t,2)}},Y=function(e){var r=Fe(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},K=function(e){var r=Fe(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},ze=function(e){var r=e.h,a=e.s,t=e.v,n=e.a;r=r/360*6,a/=100,t/=100;var s=Math.floor(r),c=t*(1-a),l=t*(1-(r-s)*a),i=t*(1-(1-r+s)*a),u=s%6;return{r:f(255*[t,l,c,c,i,t][u]),g:f(255*[i,t,t,l,c,c][u]),b:f(255*[c,c,i,t,t,l][u]),a:f(n,2)}},E=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},Oe=function(e){var r=e.r,a=e.g,t=e.b,n=e.a,s=n<1?E(f(255*n)):"";return"#"+E(r)+E(a)+E(t)+s},Le=function(e){var r=e.r,a=e.g,t=e.b,n=e.a,s=Math.max(r,a,t),c=s-Math.min(r,a,t),l=c?s===r?(a-t)/c:s===a?2+(t-r)/c:4+(r-a)/c:0;return{h:f(60*(l<0?l+6:l)),s:f(s?c/s*100:0),v:f(s/255*100),a:n}},We=m.memo(function(e){var r=e.hue,a=e.onChange,t=O(["react-colorful__hue",e.className]);return m.createElement("div",{className:t},m.createElement(J,{onMove:function(n){a({h:360*n.left})},onKey:function(n){a({h:y(r+360*n.left,0,360)})},"aria-label":"Hue","aria-valuenow":f(r),"aria-valuemax":"360","aria-valuemin":"0"},m.createElement(Z,{className:"react-colorful__hue-pointer",left:r/360,color:Y({h:r,s:100,v:100,a:1})})))}),Ve=m.memo(function(e){var r=e.hsva,a=e.onChange,t={backgroundColor:Y({h:r.h,s:100,v:100,a:1})};return m.createElement("div",{className:"react-colorful__saturation",style:t},m.createElement(J,{onMove:function(n){a({s:100*n.left,v:100-100*n.top})},onKey:function(n){a({s:y(r.s+100*n.left,0,100),v:y(r.v-100*n.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+f(r.s)+"%, Brightness "+f(r.v)+"%"},m.createElement(Z,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:Y(r)})))}),_e=function(e,r){if(e===r)return!0;for(var a in e)if(e[a]!==r[a])return!1;return!0},$e=function(e,r){return e.toLowerCase()===r.toLowerCase()||_e(X(e),X(r))};function Ke(e,r,a){var t=_(a),n=d.useState(function(){return e.toHsva(r)}),s=n[0],c=n[1],l=d.useRef({color:r,hsva:s});d.useEffect(function(){if(!e.equal(r,l.current.color)){var u=e.toHsva(r);l.current={hsva:u,color:r},c(u)}},[r,e]),d.useEffect(function(){var u;_e(s,l.current.hsva)||e.equal(u=e.fromHsva(s),l.current.color)||(l.current={hsva:s,color:u},t(u))},[s,e,t]);var i=d.useCallback(function(u){c(function(p){return Object.assign({},p,u)})},[]);return[s,i]}var qe=typeof window<"u"?d.useLayoutEffect:d.useEffect,Ge=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},oe=new Map,Ue=function(e){qe(function(){var r=e.current?e.current.ownerDocument:document;if(r!==void 0&&!oe.has(r)){var a=r.createElement("style");a.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,oe.set(r,a);var t=Ge();t&&a.setAttribute("nonce",t),r.head.appendChild(a)}},[])},Xe=function(e){var r=e.className,a=e.hsva,t=e.onChange,n={backgroundImage:"linear-gradient(90deg, "+K(Object.assign({},a,{a:0}))+", "+K(Object.assign({},a,{a:1}))+")"},s=O(["react-colorful__alpha",r]),c=f(100*a.a);return m.createElement("div",{className:s},m.createElement("div",{className:"react-colorful__alpha-gradient",style:n}),m.createElement(J,{onMove:function(l){t({a:l.left})},onKey:function(l){t({a:y(a.a+l.left)})},"aria-label":"Alpha","aria-valuetext":c+"%","aria-valuenow":c,"aria-valuemin":"0","aria-valuemax":"100"},m.createElement(Z,{className:"react-colorful__alpha-pointer",left:a.a,color:K(a)})))},Ye=function(e){var r=e.className,a=e.colorModel,t=e.color,n=t===void 0?a.defaultColor:t,s=e.onChange,c=z(e,["className","colorModel","color","onChange"]),l=d.useRef(null);Ue(l);var i=Ke(a,n,s),u=i[0],p=i[1],b=O(["react-colorful",r]);return m.createElement("div",j({},c,{ref:l,className:b}),m.createElement(Ve,{hsva:u,onChange:p}),m.createElement(We,{hue:u.h,onChange:p}),m.createElement(Xe,{hsva:u,onChange:p,className:"react-colorful__last-control"}))},Qe={defaultColor:"0001",toHsva:Ae,fromHsva:Me,equal:$e},Je=function(e){return m.createElement(Ye,j({},e,{colorModel:Qe}))},Ze=/^#?([0-9A-F]{3,8})$/i,er=function(e){var r=e.color,a=r===void 0?"":r,t=e.onChange,n=e.onBlur,s=e.escape,c=e.validate,l=e.format,i=e.process,u=z(e,["color","onChange","onBlur","escape","validate","format","process"]),p=d.useState(function(){return s(a)}),b=p[0],N=p[1],T=_(t),B=_(n),w=d.useCallback(function(g){var C=s(g.target.value);N(C),c(C)&&T(i?i(C):C)},[s,i,c,T]),x=d.useCallback(function(g){c(g.target.value)||N(s(a)),B(g)},[a,s,c,B]);return d.useEffect(function(){N(s(a))},[a,s]),m.createElement("input",j({},u,{value:l?l(b):b,spellCheck:"false",onChange:w,onBlur:x}))},ae=function(e){return"#"+e},rr=function(e){var r=e.prefixed,a=e.alpha,t=z(e,["prefixed","alpha"]),n=d.useCallback(function(c){return c.replace(/([^0-9A-F]+)/gi,"").substring(0,a?8:6)},[a]),s=d.useCallback(function(c){return function(l,i){var u=Ze.exec(l),p=u?u[1].length:0;return p===3||p===6||!!i&&p===4||!!i&&p===8}(c,a)},[a]);return m.createElement(er,j({},t,{escape:n,format:r?ae:void 0,process:ae,validate:s}))};const Q=e=>{let r=e;e.length===3&&(r=e.split("").map(s=>s+s).join(""));const[a,t,n]=r.replace(/^#/,"").match(/.{2}/g).map(s=>parseInt(s,16));return{r:a,g:t,b:n}},or=e=>`#${e.r.toString(16).padStart(2,"0")}${e.g.toString(16).padStart(2,"0")}${e.b.toString(16).padStart(2,"0")}`,ar=(e,r)=>{if(!e.r||!e.g||!e.b)return!1;const a=Q(r);return e.r===a.r&&e.g===a.g&&e.b===a.b},v=({color:e,onChange:r,className:a})=>{const[t,n]=d.useState(!1);return o.jsxs(Se,{open:t,onOpenChange:n,children:[o.jsx(Ee,{children:o.jsxs("div",{className:ke("flex items-center gap-2 border border-border-default rounded-radius-md shadow-input min-h-10 px-3 py-2.5 bg-bg-default",{"border-border-accent":t},a),children:[o.jsx("div",{className:"w-5 h-5 rounded-full border-[1.5px] shadow-container border-white",style:{backgroundColor:e||"transparent"}}),o.jsx(h,{children:e?e.toUpperCase():"Choose color"})]})}),o.jsx(Pe,{children:o.jsxs("div",{children:[o.jsx("div",{className:`[&_.react-colorful\\_\\_hue]:my-2
              [&_.react-colorful\\_\\_hue]:h-2.5 [&_.react-colorful\\_\\_alpha]:h-2.5
              [&_.react-colorful\\_\\_hue]:rounded-full [&_.react-colorful\\_\\_alpha]:rounded-full
              [&_.react-colorful\\_\\_pointer]:w-3.5 [&_.react-colorful\\_\\_pointer]:h-3.5 [&_.react-colorful\\_\\_pointer]:shadow-dropdown
              [&_.react-colorful\\_\\_saturation]:rounded-radius-sm`,children:o.jsx(Je,{color:e,onChange:r,className:"w-[176px]"})}),o.jsxs("div",{className:"flex justify-between gap-2 mt-2",children:[o.jsxs("div",{className:"grid gap-1",children:[o.jsx("span",{className:"text-[8px] leading-[10px] font-medium",children:"HEX"}),o.jsx(rr,{color:e==null?void 0:e.toUpperCase(),onChange:r,prefixed:!0,className:`border border-border-default bg-bg-default
                focus:border-border-accent focus:ring-0 focus:outline-none ring-offset-0
                rounded-radius-md h-7 px-[7px] py-1 w-[61px]
                text-[10px] leading-5 tracking-[0.4%]`})]}),o.jsx(tr,{color:e,onChange:r})]})]})})]})},tr=({color:e,onChange:r})=>{const[a,t]=d.useState(e?Q(e):{}),n="^(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})$",s=i=>{t(i),i.r&&i.g&&i.b&&(r==null||r(or(i)))},c=i=>u=>{if(u.target.value===""){s({...a,[i]:void 0});return}const p=parseInt(u.target.value,10);p>=0&&p<=255&&s({...a,[i]:p})},l=i=>o.jsx(Ie,{type:"number",min:0,max:255,pattern:n,maxLength:3,value:a[i],onChange:c(i),className:"appearance-none text-[10px] leading-5 tracking-[0.4%] text-center",containerClassName:ke("h-7 min-h-7 w-[35px] px-[7px] py-1",{"rounded-r-none border-r-transparent":i==="r","rounded-none":i==="g","rounded-l-none border-l-transparent":i==="b"}),placeholder:" "});return d.useEffect(()=>{e&&!ar(a,e)&&t(Q(e))},[e]),o.jsxs("div",{className:"grid grid-cols-3 gap-y-1",children:[o.jsx("span",{className:"text-[8px] leading-[10px] font-medium",children:"R"}),o.jsx("span",{className:"text-[8px] leading-[10px] font-medium",children:"G"}),o.jsx("span",{className:"text-[8px] leading-[10px] font-medium",children:"B"}),l("r"),l("g"),l("b")]})};v.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{color:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: string) => void",signature:{arguments:[{type:{name:"string"},name:"color"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Vr={title:"Xenith UI/Components/ColorPicker",component:v,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The ColorPicker component provides an intuitive color selection interface with hex and RGB input options. Built on react-colorful, it offers a popover-based color picker with both visual selection and precise input controls.

### Key Features
- **Visual Color Picker**: Interactive hue, saturation, and alpha selection
- **Multiple Input Formats**: Support for HEX and RGB color formats
- **Alpha Channel Support**: Full RGBA color support with transparency
- **Manual Input**: Type exact color values using HEX or RGB inputs
- **Color Preview**: Visual preview of the selected color
- **Popover Interface**: Clean, non-intrusive popover design
- **Form Integration**: Works seamlessly with React Hook Form and other form libraries

### Usage
\`\`\`tsx
import { ColorPicker } from "@xenithlabs/xenith-ui";

// Basic usage
<ColorPicker
  color={selectedColor}
  onChange={setSelectedColor}
/>

// With form integration
<FormField
  name="backgroundColor"
  control={form.control}
  render={({ field }) => (
    <FormItem>
      <FormLabel>Background Color</FormLabel>
      <FormControl>
        <ColorPicker
          color={field.value}
          onChange={field.onChange}
          className="w-40"
        />
      </FormControl>
    </FormItem>
  )}
/>

// Controlled with validation
const [color, setColor] = useState("#3B82F6");
<ColorPicker
  color={color}
  onChange={(newColor) => {
    setColor(newColor);
    validateColor(newColor);
  }}
/>
\`\`\`

### Component Props

- **color** (string): Current color value in hex format (e.g., "#FF0000" or "#FF0000FF" with alpha)
- **onChange** ((color: string) => void): Callback when color changes
- **className** (string): Additional CSS classes for the trigger button

### Color Formats

- **HEX**: Standard hex colors (#FF0000) and hex with alpha (#FF0000FF)
- **RGB**: Individual red, green, blue values (0-255)
- **Alpha**: Transparency support (0-255 or 0-1 depending on format)

### Accessibility

- Keyboard navigation support
- ARIA labels for screen readers
- Focus management within the popover
- Color contrast considerations for preview

### Common Use Cases

1. **Theme Customization**: Brand colors, background colors
2. **UI Customization**: Button colors, accent colors
3. **Content Creation**: Text colors, highlight colors
4. **Design Tools**: Color palette selection
5. **Branding**: Logo colors, brand guidelines
        `}}},argTypes:{color:{control:{type:"color"},description:"The current color value in hex format",table:{type:{summary:"string"}}},onChange:{action:"onChange",description:"Callback function when color changes",table:{type:{summary:"(color: string) => void"}}},className:{control:{type:"text"},description:"Additional CSS classes for the trigger button",table:{type:{summary:"string"}}}}},P={render:()=>{const[e,r]=d.useState("#3B82F6");return o.jsxs("div",{className:"space-y-4",children:[o.jsx(v,{color:e,onChange:r,className:"w-40"}),o.jsxs(h,{variant:"regular",className:"text-text-weak",children:["Selected: ",e||"No color selected"]})]})}},I={name:"With Alpha/Transparency",render:()=>{const[e,r]=d.useState("#3B82F680");return o.jsxs("div",{className:"space-y-4",children:[o.jsx(v,{color:e,onChange:r,className:"w-48"}),o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:"w-16 h-16 rounded border-2 border-border-default",style:{backgroundColor:e,backgroundImage:"linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundPosition:"0 0, 0 4px, 4px -4px, -4px 0px"}}),o.jsxs("div",{children:[o.jsx(h,{variant:"regular",className:"text-text-weak",children:"Color with transparency"}),o.jsx(h,{variant:"regular",children:e})]})]})]})}},R={name:"No Color Selected",render:()=>{const[e,r]=d.useState();return o.jsxs("div",{className:"space-y-4",children:[o.jsx(v,{color:e,onChange:r,className:"w-40"}),o.jsx(h,{variant:"regular",className:"text-text-weak",children:e?`Selected: ${e}`:"No color selected"})]})}},D={name:"With Preset Colors",render:()=>{const[e,r]=d.useState("#EF4444"),a=["#EF4444","#F97316","#EAB308","#22C55E","#3B82F6","#8B5CF6","#EC4899","#6B7280"];return o.jsxs("div",{className:"space-y-4",children:[o.jsx(v,{color:e,onChange:r,className:"w-40"}),o.jsxs("div",{children:[o.jsx(h,{variant:"regular",className:"text-text-weak mb-2",children:"Quick presets:"}),o.jsx("div",{className:"flex gap-2",children:a.map(t=>o.jsx("button",{onClick:()=>r(t),className:`w-8 h-8 rounded border-2 ${e===t?"border-border-accent":"border-border-default"} hover:border-border-stronger transition-colors`,style:{backgroundColor:t},title:t},t))})]}),o.jsxs(h,{variant:"regular",className:"text-text-weak",children:["Selected: ",e]})]})}},H={name:"Theme Customization (Real Example)",render:()=>{const e=Re({defaultValues:{backgroundColor:"#FFFFFF",accentColor:"#3B82F6",textColor:"#1F2937"}}),[r,a]=d.useState(e.getValues()),t=e.watch();return m.useEffect(()=>{a(t)},[t]),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[o.jsxs(q,{className:"p-6",children:[o.jsx(G,{variant:"titleSm",className:"mb-4",children:"Customize Theme"}),o.jsxs("div",{className:"space-y-4",children:[o.jsx(L,{name:"backgroundColor",control:e.control,render:({field:n})=>o.jsxs(W,{children:[o.jsx(V,{children:"Background Color"}),o.jsx($,{children:o.jsx(v,{color:n.value,onChange:n.onChange,className:"w-40"})})]})}),o.jsx(L,{name:"accentColor",control:e.control,render:({field:n})=>o.jsxs(W,{children:[o.jsx(V,{children:"Button & Accent Color"}),o.jsx($,{children:o.jsx(v,{color:n.value,onChange:n.onChange,className:"w-40"})})]})}),o.jsx(L,{name:"textColor",control:e.control,render:({field:n})=>o.jsxs(W,{children:[o.jsx(V,{children:"Text Color"}),o.jsx($,{children:o.jsx(v,{color:n.value,onChange:n.onChange,className:"w-40"})})]})})]}),o.jsx(De,{className:"my-6"}),o.jsx(He,{theme:"primary",style:{backgroundColor:r.accentColor},children:"Save Theme"})]}),o.jsxs(q,{className:"p-6",children:[o.jsx(G,{variant:"titleSm",className:"mb-4",children:"Preview"}),o.jsxs("div",{className:"p-6 rounded border-2 border-border-default min-h-[200px]",style:{backgroundColor:r.backgroundColor,color:r.textColor},children:[o.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Sample Payment Page"}),o.jsx("p",{className:"mb-4",children:"This is how your payment page will look with the selected colors."}),o.jsx("button",{className:"px-4 py-2 rounded text-white font-medium",style:{backgroundColor:r.accentColor},children:"Pay Now"})]}),o.jsxs("div",{className:"mt-4 space-y-2",children:[o.jsxs(h,{variant:"regular",children:[o.jsx("strong",{children:"Background:"})," ",r.backgroundColor]}),o.jsxs(h,{variant:"regular",children:[o.jsx("strong",{children:"Accent:"})," ",r.accentColor]}),o.jsxs(h,{variant:"regular",children:[o.jsx("strong",{children:"Text:"})," ",r.textColor]})]})]})]})}},A={name:"Brand Color Palette",render:()=>{const[e,r]=d.useState({primary:"#3B82F6",secondary:"#10B981",accent:"#F59E0B",danger:"#EF4444"}),a=(t,n)=>{r(s=>({...s,[t]:n}))};return o.jsxs(q,{className:"p-6 max-w-2xl",children:[o.jsx(G,{variant:"titleSm",className:"mb-4",children:"Brand Color Palette"}),o.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[o.jsx("div",{className:"space-y-4",children:Object.entries(e).map(([t,n])=>o.jsxs("div",{className:"space-y-2",children:[o.jsxs(h,{variant:"medium",className:"capitalize",children:[t," Color"]}),o.jsx(v,{color:n,onChange:s=>a(t,s),className:"w-full"})]},t))}),o.jsxs("div",{className:"space-y-4",children:[o.jsx(h,{variant:"medium",children:"Color Palette Preview"}),o.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(e).map(([t,n])=>o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-full h-16 rounded border border-border-default mb-2",style:{backgroundColor:n}}),o.jsx(h,{variant:"regular",className:"capitalize",children:t}),o.jsx(h,{variant:"regular",className:"text-text-weak",children:n})]},t))}),o.jsxs("div",{className:"mt-4 p-4 rounded",style:{backgroundColor:e.primary+"10"},children:[o.jsx(h,{variant:"regular",className:"font-medium",children:"Sample Usage"}),o.jsxs("div",{className:"flex gap-2 mt-2",children:[o.jsx(S,{style:{backgroundColor:e.primary},children:"Primary"}),o.jsx(S,{style:{backgroundColor:e.secondary},children:"Success"}),o.jsx(S,{style:{backgroundColor:e.accent},children:"Warning"}),o.jsx(S,{style:{backgroundColor:e.danger},children:"Error"})]})]})]})]})]})}},M={name:"Different Widths",render:()=>{const[e,r]=d.useState("#8B5CF6");return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx(h,{variant:"medium",className:"mb-2",children:"Narrow (w-32)"}),o.jsx(v,{color:e,onChange:r,className:"w-32"})]}),o.jsxs("div",{children:[o.jsx(h,{variant:"medium",className:"mb-2",children:"Medium (w-40)"}),o.jsx(v,{color:e,onChange:r,className:"w-40"})]}),o.jsxs("div",{children:[o.jsx(h,{variant:"medium",className:"mb-2",children:"Wide (w-56)"}),o.jsx(v,{color:e,onChange:r,className:"w-56"})]}),o.jsxs("div",{children:[o.jsx(h,{variant:"medium",className:"mb-2",children:"Full Width (w-full)"}),o.jsx("div",{className:"max-w-sm",children:o.jsx(v,{color:e,onChange:r,className:"w-full"})})]}),o.jsxs(h,{variant:"regular",className:"text-text-weak",children:["All pickers share the same color: ",e]})]})}};var te,ne,se;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState<string>("#3B82F6");
    return <div className="space-y-4">
        <ColorPicker color={color} onChange={setColor} className="w-40" />
        <Text variant="regular" className="text-text-weak">
          Selected: {color || "No color selected"}
        </Text>
      </div>;
  }
}`,...(se=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var le,ce,ie;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "With Alpha/Transparency",
  render: () => {
    const [color, setColor] = useState<string>("#3B82F680");
    return <div className="space-y-4">
        <ColorPicker color={color} onChange={setColor} className="w-48" />
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded border-2 border-border-default" style={{
          backgroundColor: color,
          backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
        }} />
          <div>
            <Text variant="regular" className="text-text-weak">Color with transparency</Text>
            <Text variant="regular">{color}</Text>
          </div>
        </div>
      </div>;
  }
}`,...(ie=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,ue,me;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "No Color Selected",
  render: () => {
    const [color, setColor] = useState<string>();
    return <div className="space-y-4">
        <ColorPicker color={color} onChange={setColor} className="w-40" />
        <Text variant="regular" className="text-text-weak">
          {color ? \`Selected: \${color}\` : "No color selected"}
        </Text>
      </div>;
  }
}`,...(me=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,he;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "With Preset Colors",
  render: () => {
    const [color, setColor] = useState<string>("#EF4444");
    const presetColors = ["#EF4444",
    // Red
    "#F97316",
    // Orange  
    "#EAB308",
    // Yellow
    "#22C55E",
    // Green
    "#3B82F6",
    // Blue
    "#8B5CF6",
    // Purple
    "#EC4899",
    // Pink
    "#6B7280" // Gray
    ];
    return <div className="space-y-4">
        <ColorPicker color={color} onChange={setColor} className="w-40" />
        
        <div>
          <Text variant="regular" className="text-text-weak mb-2">Quick presets:</Text>
          <div className="flex gap-2">
            {presetColors.map(presetColor => <button key={presetColor} onClick={() => setColor(presetColor)} className={\`w-8 h-8 rounded border-2 \${color === presetColor ? 'border-border-accent' : 'border-border-default'} hover:border-border-stronger transition-colors\`} style={{
            backgroundColor: presetColor
          }} title={presetColor} />)}
          </div>
        </div>
        
        <Text variant="regular" className="text-text-weak">
          Selected: {color}
        </Text>
      </div>;
  }
}`,...(he=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var fe,xe,ve;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: "Theme Customization (Real Example)",
  render: () => {
    const form = useForm({
      defaultValues: {
        backgroundColor: "#FFFFFF",
        accentColor: "#3B82F6",
        textColor: "#1F2937"
      }
    });
    const [formData, setFormData] = useState(form.getValues());
    const watchedValues = form.watch();
    React.useEffect(() => {
      setFormData(watchedValues);
    }, [watchedValues]);
    return <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <Heading variant="titleSm" className="mb-4">Customize Theme</Heading>
          
          <div className="space-y-4">
            <FormField name="backgroundColor" control={form.control} render={({
            field
          }) => <FormItem>
                  <FormLabel>Background Color</FormLabel>
                  <FormControl>
                    <ColorPicker color={field.value} onChange={field.onChange} className="w-40" />
                  </FormControl>
                </FormItem>} />
            
            <FormField name="accentColor" control={form.control} render={({
            field
          }) => <FormItem>
                  <FormLabel>Button & Accent Color</FormLabel>
                  <FormControl>
                    <ColorPicker color={field.value} onChange={field.onChange} className="w-40" />
                  </FormControl>
                </FormItem>} />
            
            <FormField name="textColor" control={form.control} render={({
            field
          }) => <FormItem>
                  <FormLabel>Text Color</FormLabel>
                  <FormControl>
                    <ColorPicker color={field.value} onChange={field.onChange} className="w-40" />
                  </FormControl>
                </FormItem>} />
          </div>
          
          <Divider className="my-6" />
          
          <Button theme="primary" style={{
          backgroundColor: formData.accentColor
        }}>
            Save Theme
          </Button>
        </Card>
        
        <Card className="p-6">
          <Heading variant="titleSm" className="mb-4">Preview</Heading>
          
          <div className="p-6 rounded border-2 border-border-default min-h-[200px]" style={{
          backgroundColor: formData.backgroundColor,
          color: formData.textColor
        }}>
            <h3 className="text-lg font-semibold mb-4">Sample Payment Page</h3>
            <p className="mb-4">This is how your payment page will look with the selected colors.</p>
            <button className="px-4 py-2 rounded text-white font-medium" style={{
            backgroundColor: formData.accentColor
          }}>
              Pay Now
            </button>
          </div>
          
          <div className="mt-4 space-y-2">
            <Text variant="regular"><strong>Background:</strong> {formData.backgroundColor}</Text>
            <Text variant="regular"><strong>Accent:</strong> {formData.accentColor}</Text>
            <Text variant="regular"><strong>Text:</strong> {formData.textColor}</Text>
          </div>
        </Card>
      </div>;
  }
}`,...(ve=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var Ce,be,Ne;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: "Brand Color Palette",
  render: () => {
    const [brandColors, setBrandColors] = useState({
      primary: "#3B82F6",
      secondary: "#10B981",
      accent: "#F59E0B",
      danger: "#EF4444"
    });
    const updateBrandColor = (colorType: keyof typeof brandColors, color: string) => {
      setBrandColors(prev => ({
        ...prev,
        [colorType]: color
      }));
    };
    return <Card className="p-6 max-w-2xl">
        <Heading variant="titleSm" className="mb-4">Brand Color Palette</Heading>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            {Object.entries(brandColors).map(([colorType, color]) => <div key={colorType} className="space-y-2">
                <Text variant="medium" className="capitalize">{colorType} Color</Text>
                <ColorPicker color={color} onChange={newColor => updateBrandColor(colorType as keyof typeof brandColors, newColor)} className="w-full" />
              </div>)}
          </div>
          
          <div className="space-y-4">
            <Text variant="medium">Color Palette Preview</Text>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(brandColors).map(([colorType, color]) => <div key={colorType} className="text-center">
                  <div className="w-full h-16 rounded border border-border-default mb-2" style={{
                backgroundColor: color
              }} />
                  <Text variant="regular" className="capitalize">{colorType}</Text>
                  <Text variant="regular" className="text-text-weak">{color}</Text>
                </div>)}
            </div>
            
            <div className="mt-4 p-4 rounded" style={{
            backgroundColor: brandColors.primary + '10'
          }}>
              <Text variant="regular" className="font-medium">Sample Usage</Text>
              <div className="flex gap-2 mt-2">
                <Badge style={{
                backgroundColor: brandColors.primary
              }}>Primary</Badge>
                <Badge style={{
                backgroundColor: brandColors.secondary
              }}>Success</Badge>
                <Badge style={{
                backgroundColor: brandColors.accent
              }}>Warning</Badge>
                <Badge style={{
                backgroundColor: brandColors.danger
              }}>Error</Badge>
              </div>
            </div>
          </div>
        </div>
      </Card>;
  }
}`,...(Ne=(be=A.parameters)==null?void 0:be.docs)==null?void 0:Ne.source}}};var we,ye,je;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: "Different Widths",
  render: () => {
    const [color, setColor] = useState<string>("#8B5CF6");
    return <div className="space-y-6">
        <div>
          <Text variant="medium" className="mb-2">Narrow (w-32)</Text>
          <ColorPicker color={color} onChange={setColor} className="w-32" />
        </div>
        
        <div>
          <Text variant="medium" className="mb-2">Medium (w-40)</Text>
          <ColorPicker color={color} onChange={setColor} className="w-40" />
        </div>
        
        <div>
          <Text variant="medium" className="mb-2">Wide (w-56)</Text>
          <ColorPicker color={color} onChange={setColor} className="w-56" />
        </div>
        
        <div>
          <Text variant="medium" className="mb-2">Full Width (w-full)</Text>
          <div className="max-w-sm">
            <ColorPicker color={color} onChange={setColor} className="w-full" />
          </div>
        </div>
        
        <Text variant="regular" className="text-text-weak">
          All pickers share the same color: {color}
        </Text>
      </div>;
  }
}`,...(je=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:je.source}}};const $r=["Default","WithTransparency","EmptyState","PresetColors","ThemeCustomization","BrandingExample","ResponsiveWidths"];export{A as BrandingExample,P as Default,R as EmptyState,D as PresetColors,M as ResponsiveWidths,H as ThemeCustomization,I as WithTransparency,$r as __namedExportsOrder,Vr as default};
