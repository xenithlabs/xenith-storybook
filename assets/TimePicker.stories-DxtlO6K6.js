import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as l}from"./index-DRjF_FHU.js";import{F as z}from"./clock-DRhx3Wks.js";import{I as d,a as A}from"./useClickOutside-BU3ZSvys.js";import{P as U,a as X,b as B}from"./Popover-A4hNnO1p.js";import{I as G}from"./Icon-CTnhpE1d.js";import{H as J}from"./Heading-DjlBwQyS.js";import{T as j}from"./Text-C8HBwI4b.js";import{B as K}from"./Button-C-jt4Opy.js";import"./cn-8RyR4BqC.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./search-CRI6LAtg.js";import"./close-D2djoYoT.js";import"./stringCase-DaZl3p-i.js";import"./chevron-up-Dp-rU9It.js";import"./chevron-down-CyV3wpL8.js";import"./check-C0C6JGvp.js";import"./mini-FlV67GHA.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-CAHntWCK.js";import"./index-HZDBD2ik.js";import"./Checkbox-CMdwPcui.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./spinner-ZMRwnkYw.js";const Q=/^([0-9]{2,}):/,T=/:([0-9]{2,}):/,S=/:([0-9]{2,})$/,y=r=>r.toString().padStart(2,"0"),N=(r,a)=>a===null?parseInt(r):parseInt(r)>a?a:parseInt(r),m=({value:r,onChange:a,title:i,withoutSaveButton:u,placeholder:q="HH:MM:SS",rawPlaceholder:C=!0,className:L,maxHours:o=23,zeroLimitOnMaxHours:h=!1})=>{const[R,p]=l.useState(!1),[t,w]=l.useState(r),g=l.useCallback((s,_)=>{let n=t||"00:00:00";const F=n.split(":")[0],b=h&&o!==null&&parseInt(F)>=o;switch(_){case"hours":{const c=N(s,o),W=y(c);n=n.replace(Q,`${W}:`),h&&o!==null&&c>=o&&(n=n.replace(T,":00:"),n=n.replace(S,":00"));break}case"minutes":{const c=y(N(s,b?0:59));n=n.replace(T,`:${c}:`);break}case"seconds":{const c=y(N(s,b?0:59));n=n.replace(S,`:${c}`);break}}w(n),u&&(a==null||a(n))},[t,o,a,u,h]),O=()=>{a==null||a(t),p(!1)};return l.useEffect(()=>{r&&w(r)},[r]),e.jsxs(U,{open:R,onOpenChange:p,children:[e.jsx(X,{asChild:!0,children:e.jsx("div",{children:e.jsx(d,{value:u?t:r,placeholder:q,rawPlaceholder:C,className:L,leftComponent:e.jsx(A,{className:"pr-0 border-r-0",children:e.jsx(G,{icon:e.jsx(z,{})})}),onFocus:s=>{s.preventDefault(),p(!0)},onClick:s=>{s.preventDefault(),p(!0)}})})}),e.jsxs(B,{className:"p-6",align:"start",children:[i&&e.jsx(J,{variant:"titleMd",className:"mb-6",children:i}),e.jsxs("div",{className:"flex gap-3 items-start",children:[e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx(d,{type:"number",min:0,max:23,step:1,maxLength:2,value:t==null?void 0:t.split(":")[0],onChange:s=>g(s.target.value||"00","hours"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(j,{variant:"tiny",className:"text-text-weak",children:"Hour"})]}),e.jsx("div",{className:"flex items-center h-10",children:":"}),e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx(d,{type:"number",min:0,max:59,step:1,maxLength:2,value:t==null?void 0:t.split(":")[1],onChange:s=>g(s.target.value||"00","minutes"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(j,{variant:"tiny",className:"text-text-weak",children:"Minute"})]}),e.jsx("div",{className:"flex items-center h-10",children:":"}),e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx(d,{type:"number",min:0,max:59,step:1,maxLength:2,value:t==null?void 0:t.split(":")[2],onChange:s=>g(s.target.value||"00","seconds"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(j,{variant:"tiny",className:"text-text-weak",children:"Second"})]})]}),!u&&e.jsx("div",{className:"flex justify-end pt-4 mt-6 border-t",children:e.jsx(K,{variant:"solid",theme:"primary",onClick:O,className:"w-[70px]",children:"Save"})})]})]})};m.__docgenInfo={description:`@param zeroLimitOnMaxHours if true, when maxHours is reached, the limit for minutes and seconds will be 0
@returns`,methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"union",raw:"string | TimePickerValue",elements:[{name:"string"},{name:"literal",value:"`${number}:${number}:${number}`"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: TimePickerValue) => void",signature:{arguments:[{type:{name:"literal",value:"`${number}:${number}:${number}`"},name:"value"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},withoutSaveButton:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"HH:MM:SS"',computed:!1}},rawPlaceholder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},maxHours:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"",defaultValue:{value:"23",computed:!1}},zeroLimitOnMaxHours:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const De={title:"Xenith UI/Components/TimePicker",component:m,tags:["autodocs"]},x={args:{title:"Deposit Expiry",className:"w-[268px]"},parameters:{layout:"centered"},render:r=>{const[a,i]=l.useState(r.value);return e.jsx("div",{children:e.jsx(m,{...r,value:a,onChange:i})})}},f={args:{title:"Deposit Expiry",className:"w-[268px]",maxHours:48,zeroLimitOnMaxHours:!0},parameters:{layout:"centered"},render:r=>{const[a,i]=l.useState(r.value);return e.jsx("div",{children:e.jsx(m,{...r,value:a,onChange:i})})}},v={args:{title:"Deposit Expiry",className:"w-[268px]",maxHours:null},parameters:{layout:"centered"},render:r=>{const[a,i]=l.useState(r.value);return e.jsx("div",{children:e.jsx(m,{...r,value:a,onChange:i})})}};var k,P,V;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(P=x.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var H,M,D;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(M=f.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var I,E,$;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...($=(E=v.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const Ie=["Default","WithMaxHours","NoMaxHours"];export{x as Default,v as NoMaxHours,f as WithMaxHours,Ie as __namedExportsOrder,De as default};
