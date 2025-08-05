import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as l}from"./index-DRjF_FHU.js";import{I as d,b as U}from"./useClickOutside-NjOEmSQi.js";import{F as X}from"./clock-DRhx3Wks.js";import{P as G,a as J,b as K}from"./Popover-A4hNnO1p.js";import{I as Q}from"./Icon-CTnhpE1d.js";import{H as Y}from"./Heading-DjlBwQyS.js";import{T as y}from"./Text-C8HBwI4b.js";import{B as Z}from"./Button-DAgrt3Vy.js";import"./cn-8RyR4BqC.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./stringCase-DaZl3p-i.js";import"./close-D2djoYoT.js";import"./search-BbudfyUD.js";import"./mini-FlV67GHA.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./floating-ui.dom-BuxmzwbT.js";import"./check-C0C6JGvp.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";import"./index-CAHntWCK.js";import"./index-HZDBD2ik.js";import"./Checkbox-CMdwPcui.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";const B=/^([0-9]{2,}):/,k=/:([0-9]{2,}):/,S=/:([0-9]{2,})$/,N=r=>r.toString().padStart(2,"0"),b=(r,a)=>a===null?parseInt(r):parseInt(r)<0?0:parseInt(r)>a?a:parseInt(r),m=({value:r,onChange:a,title:i,withoutSaveButton:u,placeholder:C="HH:MM:SS",rawPlaceholder:L=!0,className:R,maxHours:o=23,zeroLimitOnMaxHours:h=!1,hideSeconds:g=!1})=>{const[O,p]=l.useState(!1),[s,w]=l.useState(r),j=l.useCallback((t,W)=>{let n=s||"00:00:00";const z=n.split(":")[0],T=h&&o!==null&&parseInt(z)>=o;switch(W){case"hours":{const c=b(t,o),A=N(c);n=n.replace(B,`${A}:`),h&&o!==null&&c>=o&&(n=n.replace(k,":00:"),n=n.replace(S,":00"));break}case"minutes":{const c=N(b(t,T?0:59));n=n.replace(k,`:${c}:`);break}case"seconds":{const c=N(b(t,T?0:59));n=n.replace(S,`:${c}`);break}}w(n),u&&(a==null||a(n))},[s,o,a,u,h]),F=l.useMemo(()=>{const t=u?s:r;return t?g?(t==null?void 0:t.split(":")[0])+":"+(t==null?void 0:t.split(":")[1]):t:""},[u,s,r,g]),_=()=>{a==null||a(s),p(!1)};return l.useEffect(()=>{r&&w(r)},[r]),e.jsxs(G,{open:O,onOpenChange:p,children:[e.jsx(J,{asChild:!0,children:e.jsx("div",{children:e.jsx(d,{value:F,placeholder:C,rawPlaceholder:L,className:R,leftComponent:e.jsx(U,{className:"pr-0 border-r-0",children:e.jsx(Q,{icon:e.jsx(X,{})})}),onFocus:t=>{t.preventDefault(),p(!0)},onClick:t=>{t.preventDefault(),p(!0)}})})}),e.jsxs(K,{className:"p-6",align:"start",children:[i&&e.jsx(Y,{variant:"titleMd",className:"mb-6",children:i}),e.jsxs("div",{className:"flex gap-3 items-start",children:[e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx(d,{type:"number",min:0,max:23,step:1,maxLength:2,value:s==null?void 0:s.split(":")[0],onChange:t=>j(t.target.value||"00","hours"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(y,{variant:"tiny",className:"text-text-weak",children:"Hour"})]}),e.jsx("div",{className:"flex items-center h-10",children:":"}),e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx(d,{type:"number",min:0,max:59,step:1,maxLength:2,value:s==null?void 0:s.split(":")[1],onChange:t=>j(t.target.value||"00","minutes"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(y,{variant:"tiny",className:"text-text-weak",children:"Minute"})]}),!g&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center h-10",children:":"}),e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx(d,{type:"number",min:0,max:59,step:1,maxLength:2,value:s==null?void 0:s.split(":")[2],onChange:t=>j(t.target.value||"00","seconds"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(y,{variant:"tiny",className:"text-text-weak",children:"Second"})]})]})]}),!u&&e.jsx("div",{className:"flex justify-end pt-4 mt-6 border-t",children:e.jsx(Z,{variant:"solid",theme:"primary",onClick:_,className:"w-[70px]",children:"Save"})})]})]})};m.__docgenInfo={description:`@param zeroLimitOnMaxHours if true, when maxHours is reached, the limit for minutes and seconds will be 0
@returns`,methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"union",raw:"string | TimePickerValue",elements:[{name:"string"},{name:"literal",value:"`${number}:${number}:${number}`"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: TimePickerValue) => void",signature:{arguments:[{type:{name:"literal",value:"`${number}:${number}:${number}`"},name:"value"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},withoutSaveButton:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"HH:MM:SS"',computed:!1}},rawPlaceholder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},maxHours:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"",defaultValue:{value:"23",computed:!1}},zeroLimitOnMaxHours:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideSeconds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const De={title:"Xenith UI/Components/TimePicker",component:m,tags:["autodocs"]},x={args:{title:"Deposit Expiry",className:"w-[268px]"},parameters:{layout:"centered"},render:r=>{const[a,i]=l.useState(r.value);return e.jsx("div",{children:e.jsx(m,{...r,value:a,onChange:i})})}},f={args:{title:"Deposit Expiry",className:"w-[268px]",maxHours:48,zeroLimitOnMaxHours:!0},parameters:{layout:"centered"},render:r=>{const[a,i]=l.useState(r.value);return e.jsx("div",{children:e.jsx(m,{...r,value:a,onChange:i})})}},v={args:{title:"Deposit Expiry",className:"w-[268px]",maxHours:null},parameters:{layout:"centered"},render:r=>{const[a,i]=l.useState(r.value);return e.jsx("div",{children:e.jsx(m,{...r,value:a,onChange:i})})}};var V,P,M;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: "Deposit Expiry",
    className: "w-[268px]"
  },
  parameters: {
    layout: "centered"
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    return <div>
        <TimePicker {...args} value={value} onChange={setValue} />
      </div>;
  }
}`,...(M=(P=x.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var H,I,D;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: "Deposit Expiry",
    className: "w-[268px]",
    maxHours: 48,
    zeroLimitOnMaxHours: true
  },
  parameters: {
    layout: "centered"
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    return <div>
        <TimePicker {...args} value={value} onChange={setValue} />
      </div>;
  }
}`,...(D=(I=f.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var q,E,$;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: "Deposit Expiry",
    className: "w-[268px]",
    maxHours: null
  },
  parameters: {
    layout: "centered"
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    return <div>
        <TimePicker {...args} value={value} onChange={setValue} />
      </div>;
  }
}`,...($=(E=v.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const qe=["Default","WithMaxHours","NoMaxHours"];export{x as Default,v as NoMaxHours,f as WithMaxHours,qe as __namedExportsOrder,De as default};
