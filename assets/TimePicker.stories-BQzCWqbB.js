import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as i}from"./index-DRjF_FHU.js";import{I as d,b as X}from"./useClickOutside-_U1PkGnR.js";import{F as G}from"./clock-DRhx3Wks.js";import{P as J,a as K,b as Q}from"./Popover-A4hNnO1p.js";import{I as Y}from"./Icon-CTnhpE1d.js";import{H as Z}from"./Heading-DjlBwQyS.js";import{T as j}from"./Text-C8HBwI4b.js";import{B}from"./Button-DAgrt3Vy.js";import"./cn-8RyR4BqC.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./stringCase-DaZl3p-i.js";import"./close-D2djoYoT.js";import"./search-jZ487l5R.js";import"./mini-FlV67GHA.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./floating-ui.dom-BuxmzwbT.js";import"./check-C0C6JGvp.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";import"./index-CAHntWCK.js";import"./index-HZDBD2ik.js";import"./Checkbox-CMdwPcui.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";const ee=/^([0-9]{2,}):/,V=/:([0-9]{2,}):/,k=/:([0-9]{2,})$/,N=r=>r.toString().padStart(2,"0"),b=(r,t)=>t===null?parseInt(r):parseInt(r)<0?0:parseInt(r)>t?t:parseInt(r),m=({value:r,onChange:t,title:l,withoutSaveButton:u,placeholder:C="HH:MM:SS",rawPlaceholder:L=!0,className:R,maxHours:o=23,zeroLimitOnMaxHours:h=!1,hideSeconds:g=!1,error:O=!1})=>{const[F,p]=i.useState(!1),[s,w]=i.useState(r),y=i.useCallback((a,z)=>{let n=s||"00:00:00";const A=n.split(":")[0],T=h&&o!==null&&parseInt(A)>=o;switch(z){case"hours":{const c=b(a,o),U=N(c);n=n.replace(ee,`${U}:`),h&&o!==null&&c>=o&&(n=n.replace(V,":00:"),n=n.replace(k,":00"));break}case"minutes":{const c=N(b(a,T?0:59));n=n.replace(V,`:${c}:`);break}case"seconds":{const c=N(b(a,T?0:59));n=n.replace(k,`:${c}`);break}}w(n),u&&(t==null||t(n))},[s,o,t,u,h]),_=i.useMemo(()=>{const a=u?s:r;return a?g?(a==null?void 0:a.split(":")[0])+":"+(a==null?void 0:a.split(":")[1]):a:""},[u,s,r,g]),W=()=>{t==null||t(s),p(!1)};return i.useEffect(()=>{r&&w(r)},[r]),e.jsxs(J,{open:F,onOpenChange:p,children:[e.jsx(K,{asChild:!0,children:e.jsx("div",{children:e.jsx(d,{value:_,placeholder:C,rawPlaceholder:L,className:R,leftComponent:e.jsx(X,{className:"pr-0 border-r-0",children:e.jsx(Y,{icon:e.jsx(G,{})})}),onFocus:a=>{a.preventDefault(),p(!0)},onClick:a=>{a.preventDefault(),p(!0)},error:O})})}),e.jsxs(Q,{className:"p-6",align:"start",children:[l&&e.jsx(Z,{variant:"titleMd",className:"mb-6",children:l}),e.jsxs("div",{className:"flex gap-3 items-start",children:[e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx(d,{type:"number",min:0,max:23,step:1,maxLength:2,value:s==null?void 0:s.split(":")[0],onChange:a=>y(a.target.value||"00","hours"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(j,{variant:"tiny",className:"text-text-weak",children:"Hour"})]}),e.jsx("div",{className:"flex items-center h-10",children:":"}),e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx(d,{type:"number",min:0,max:59,step:1,maxLength:2,value:s==null?void 0:s.split(":")[1],onChange:a=>y(a.target.value||"00","minutes"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(j,{variant:"tiny",className:"text-text-weak",children:"Minute"})]}),!g&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center h-10",children:":"}),e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx(d,{type:"number",min:0,max:59,step:1,maxLength:2,value:s==null?void 0:s.split(":")[2],onChange:a=>y(a.target.value||"00","seconds"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(j,{variant:"tiny",className:"text-text-weak",children:"Second"})]})]})]}),!u&&e.jsx("div",{className:"flex justify-end pt-4 mt-6 border-t",children:e.jsx(B,{variant:"solid",theme:"primary",onClick:W,className:"w-[70px]",children:"Save"})})]})]})};m.__docgenInfo={description:`@param zeroLimitOnMaxHours if true, when maxHours is reached, the limit for minutes and seconds will be 0
@returns`,methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"union",raw:"string | TimePickerValue",elements:[{name:"string"},{name:"literal",value:"`${number}:${number}:${number}`"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: TimePickerValue) => void",signature:{arguments:[{type:{name:"literal",value:"`${number}:${number}:${number}`"},name:"value"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},withoutSaveButton:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"HH:MM:SS"',computed:!1}},rawPlaceholder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},maxHours:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"",defaultValue:{value:"23",computed:!1}},zeroLimitOnMaxHours:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideSeconds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const De={title:"Xenith UI/Components/TimePicker",component:m,tags:["autodocs"]},x={args:{title:"Deposit Expiry",className:"w-[268px]"},parameters:{layout:"centered"},render:r=>{const[t,l]=i.useState(r.value);return e.jsx("div",{children:e.jsx(m,{...r,value:t,onChange:l})})}},f={args:{title:"Deposit Expiry",className:"w-[268px]",maxHours:48,zeroLimitOnMaxHours:!0},parameters:{layout:"centered"},render:r=>{const[t,l]=i.useState(r.value);return e.jsx("div",{children:e.jsx(m,{...r,value:t,onChange:l})})}},v={args:{title:"Deposit Expiry",className:"w-[268px]",maxHours:null},parameters:{layout:"centered"},render:r=>{const[t,l]=i.useState(r.value);return e.jsx("div",{children:e.jsx(m,{...r,value:t,onChange:l})})}};var S,P,M;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(M=(P=x.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var H,I,q;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(I=f.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var D,E,$;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...($=(E=v.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const Ee=["Default","WithMaxHours","NoMaxHours"];export{x as Default,v as NoMaxHours,f as WithMaxHours,Ee as __namedExportsOrder,De as default};
