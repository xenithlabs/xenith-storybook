import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{r as o}from"./index-DRjF_FHU.js";import{c as I}from"./cn-8RyR4BqC.js";import{I as U}from"./useClickOutside-CF2VWPuo.js";import{h as X}from"./Heading-DjlBwQyS.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./stringCase-DaZl3p-i.js";import"./close-D2djoYoT.js";import"./search-5X7N_xNn.js";import"./mini-FlV67GHA.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./floating-ui.dom-BuxmzwbT.js";import"./check-C0C6JGvp.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";import"./clock-DRhx3Wks.js";import"./Button-DZCl7_eM.js";import"./index-HZDBD2ik.js";import"./Icon-CTnhpE1d.js";import"./index-CAHntWCK.js";import"./Checkbox-CMdwPcui.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./Text-C8HBwI4b.js";const R=({onComplete:l,errorMessage:g,onClear:v,className:D,disabled:p})=>{const k=I("w-[48px] h-[48px] flex items-center justify-center",{"bg-bg-weaker":p}),[e,L]=o.useState(["","","","","",""]),f=u=>{p||L(u)},c=[o.useRef(null),o.useRef(null),o.useRef(null),o.useRef(null),o.useRef(null),o.useRef(null)],Y=" ",O=typeof g=="string"&&g.length>0;return o.useEffect(()=>{var u;c[0]&&((u=c[0].current)==null||u.focus())},[]),o.useEffect(()=>{e.every(u=>u==="")&&v&&v()},[e]),s.jsxs("div",{className:I("grid gap-2 min-w-[400px]",D),children:[s.jsx("div",{className:"flex justify-between",children:e.map((u,t)=>s.jsx(U,{value:u,ref:c[t],onKeyDown:r=>{var C;if(p){r.stopPropagation(),r.preventDefault();return}e[t]===""&&r.code.toLowerCase()==="backspace"&&t!==0&&((C=c[t-1].current)==null||C.focus(),f(e.map((i,d)=>d===t?"":i))),e[t]!==""&&r.code.toLowerCase()==="enter"&&t===e.length-1&&l(e.join(""))},onPaste:r=>{var x,a;if(r.preventDefault(),p)return;const m=r.clipboardData.getData("text").replace(/[^0-9]/g,"");if(m.length===0)return;const i=[...e];let d=t;for(let n=0;n<m.length&&d<e.length;n++)i[d]=m[n],d++;f(i);const h=Math.min(t+m.length-1,e.length-1);h<e.length-1?(x=c[h+1].current)==null||x.focus():(a=c[h].current)==null||a.focus(),i.every(n=>n!=="")&&l(i.join(""))},onChange:r=>{var m,i,d,h,x;if(r.target.value.length&&!/^[0-9]+$/gim.test(r.target.value))return;if(r.target.value.length>1){if(t!==e.length-1){const a=r.target.value[r.target.value.length-1],n=e.map((w,K)=>K===t+1?a:w);f(n),(m=c[t+1].current)==null||m.focus(),e.filter(w=>w!=="").length===e.length-1&&l(n.join(""))}return}const C=e.filter(a=>a!=="").length;if(r.target.value.length&&C===e.length-1){const a=e.map((n,y)=>y===t?r.target.value:n);l(a.join("")),f(a);return}if(r.target.value.length>1&&t!==e.length-1){const a=r.target.value[r.target.value.length-1];f(e.map((y,S)=>S===t+1?a:y)),(i=c[t+1].current)==null||i.focus();return}if(r.target.value.length===1&&t!==e.length-1&&((d=c[t+1].current)==null||d.focus()),r.target.value.length<1&&t!==0&&((h=c[t-1].current)==null||h.focus()),e[t].length&&r.target.value.length&&t!==e.length-1){(x=c[t+1].current)==null||x.focus();return}f(e.map((a,n)=>t===n?r.target.value:a))},error:O,containerClassName:k,className:I("text-center",X({variant:"titleMd"}),{"bg-bg-weaker":p}),placeholder:Y},t))}),O&&s.jsx("div",{children:s.jsx("div",{className:"text-text-critical",children:g})})]})};R.__docgenInfo={description:"",methods:[],displayName:"OtpInput",props:{onComplete:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: string) => void",signature:{arguments:[{type:{name:"string"},name:"values"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Ce={title:"Xenith UI/Components/OtpInput",parameters:{layout:"centered",docs:{subtitle:"Displays a form input field or a component that looks like an input field."}},tags:["autodocs"]},N={render:()=>s.jsx("div",{className:"grid gap-1",children:s.jsx(R,{onComplete:l=>console.log("yey complete",l)})})},j={render:()=>{const[l,g]=o.useState(!1);return s.jsx("div",{className:"grid gap-1",children:s.jsx(R,{onComplete:()=>{g(!0),console.log("yey complete")},disabled:l,errorMessage:"OTP you have entered is incorrect"})})}},b={render:()=>{const[l,g]=o.useState(""),[v,D]=o.useState(0);return s.jsxs("div",{className:"grid gap-4",children:[s.jsxs("div",{className:"text-center space-y-2",children:[s.jsx("p",{className:"text-sm text-gray-600",children:"Try pasting a 6-digit code like: 123456"}),s.jsx("p",{className:"text-xs text-gray-500",children:"You can paste at any input position"})]}),s.jsx(R,{onComplete:p=>{console.log("onComplete fired with code:",p),g(p),D(k=>k+1)}}),l&&s.jsxs("div",{className:"mt-4 p-4 bg-green-50 border border-green-200 rounded",children:[s.jsx("p",{className:"text-sm font-semibold text-green-800",children:"✓ onComplete Callback Fired!"}),s.jsxs("p",{className:"text-sm text-green-700",children:["Completed Code: ",s.jsx("span",{className:"font-mono",children:l})]}),s.jsxs("p",{className:"text-xs text-green-600 mt-1",children:["Callback fired ",v," time",v!==1?"s":""]})]}),s.jsx("div",{className:"mt-2 text-xs text-gray-500",children:s.jsx("p",{children:"💡 Tip: Open console to see logs"})})]})}};var T,E,P;N.parameters={...N.parameters,docs:{...(T=N.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="grid gap-1">
      <OtpInput onComplete={v => console.log("yey complete", v)} />
    </div>
}`,...(P=(E=N.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var q,V,_;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [disabled, setDisabled] = useState(false);
    return <div className="grid gap-1">
        <OtpInput onComplete={() => {
        setDisabled(true);
        console.log("yey complete");
      }} disabled={disabled} errorMessage="OTP you have entered is incorrect" />
      </div>;
  }
}`,...(_=(V=j.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var W,F,M;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [completedCode, setCompletedCode] = useState<string>("");
    const [callCount, setCallCount] = useState(0);
    return <div className="grid gap-4">
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">
            Try pasting a 6-digit code like: 123456
          </p>
          <p className="text-xs text-gray-500">
            You can paste at any input position
          </p>
        </div>
        
        <OtpInput onComplete={code => {
        console.log("onComplete fired with code:", code);
        setCompletedCode(code);
        setCallCount(prev => prev + 1);
      }} />
        
        {completedCode && <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <p className="text-sm font-semibold text-green-800">
              ✓ onComplete Callback Fired!
            </p>
            <p className="text-sm text-green-700">
              Completed Code: <span className="font-mono">{completedCode}</span>
            </p>
            <p className="text-xs text-green-600 mt-1">
              Callback fired {callCount} time{callCount !== 1 ? 's' : ''}
            </p>
          </div>}
        
        <div className="mt-2 text-xs text-gray-500">
          <p>💡 Tip: Open console to see logs</p>
        </div>
      </div>;
  }
}`,...(M=(F=b.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const xe=["Default","WithError","WithPasteCallback"];export{N as Default,j as WithError,b as WithPasteCallback,xe as __namedExportsOrder,Ce as default};
