import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as i}from"./index-DRjF_FHU.js";import{F as Y}from"./clock-DRhx3Wks.js";import{I as x,b as Z}from"./useClickOutside-COM8HxLp.js";import{P as ee,a as re,b as te}from"./Popover-A4hNnO1p.js";import{I as ae}from"./Icon-CTnhpE1d.js";import{H as se}from"./Heading-DjlBwQyS.js";import{T as N}from"./Text-C8HBwI4b.js";import{B as _}from"./Button-DcdQGMoO.js";import"./cn-8RyR4BqC.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./search-jZ487l5R.js";import"./close-D2djoYoT.js";import"./stringCase-DaZl3p-i.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";import"./check-C0C6JGvp.js";import"./mini-FlV67GHA.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-CAHntWCK.js";import"./index-HZDBD2ik.js";import"./Checkbox-CMdwPcui.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";const ne=/^([0-9]{2,}):/,S=/:([0-9]{2,}):/,k=/:([0-9]{2,})$/,w=r=>r.toString().padStart(2,"0"),b=(r,a)=>a===null?parseInt(r):parseInt(r)<0?0:parseInt(r)>a?a:parseInt(r),H=(r,a)=>{if(r)return a&&(r==null?void 0:r.split(":").length)===2?r+":00":r},m=({value:r,onChange:a,title:l,withoutSaveButton:o,placeholder:B="HH:MM:SS",rawPlaceholder:W=!0,className:z,maxHours:u=23,zeroLimitOnMaxHours:y=!1,hideSeconds:c=!1,error:A=!1})=>{const[U,d]=i.useState(!1),[s,T]=i.useState(H(r,c)),j=i.useCallback((t,J)=>{let n=s||"00:00:00";const K=n.split(":")[0],V=y&&u!==null&&parseInt(K)>=u;switch(J){case"hours":{const p=b(t,u),Q=w(p);n=n.replace(ne,`${Q}:`),y&&u!==null&&p>=u&&(n=n.replace(S,":00:"),n=n.replace(k,":00"));break}case"minutes":{const p=w(b(t,V?0:59));n=n.replace(S,`:${p}:`);break}case"seconds":{const p=w(b(t,V?0:59));n=n.replace(k,`:${p}`);break}}T(n),o&&(a==null||a(n))},[s,u,a,o,y]),X=i.useMemo(()=>{const t=o?s:r;return t?c?(t==null?void 0:t.split(":")[0])+":"+(t==null?void 0:t.split(":")[1]):t:""},[o,s,r,c]),G=()=>{a==null||a(s),d(!1)};return i.useEffect(()=>{T(H(r,c))},[r,c]),e.jsxs(ee,{open:U,onOpenChange:d,children:[e.jsx(re,{asChild:!0,children:e.jsx("div",{children:e.jsx(x,{value:X,placeholder:B,rawPlaceholder:W,className:z,leftComponent:e.jsx(Z,{className:"pr-0 border-r-0",children:e.jsx(ae,{icon:e.jsx(Y,{})})}),onFocus:t=>{t.preventDefault(),d(!0)},onClick:t=>{t.preventDefault(),d(!0)},error:A})})}),e.jsxs(te,{className:"p-6",align:"start",children:[l&&e.jsx(se,{variant:"titleMd",className:"mb-6",children:l}),e.jsxs("div",{className:"flex gap-3 items-start",children:[e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx(x,{type:"number",min:0,max:23,step:1,maxLength:2,value:s==null?void 0:s.split(":")[0],onChange:t=>j(t.target.value||"00","hours"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(N,{variant:"tiny",className:"text-text-weak",children:"Hour"})]}),e.jsx("div",{className:"flex items-center h-10",children:":"}),e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx(x,{type:"number",min:0,max:59,step:1,maxLength:2,value:s==null?void 0:s.split(":")[1],onChange:t=>j(t.target.value||"00","minutes"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(N,{variant:"tiny",className:"text-text-weak",children:"Minute"})]}),!c&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center h-10",children:":"}),e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx(x,{type:"number",min:0,max:59,step:1,maxLength:2,value:s==null?void 0:s.split(":")[2],onChange:t=>j(t.target.value||"00","seconds"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(N,{variant:"tiny",className:"text-text-weak",children:"Second"})]})]})]}),!o&&e.jsx("div",{className:"flex justify-end pt-4 mt-6 border-t",children:e.jsx(_,{variant:"solid",theme:"primary",onClick:G,className:"w-[70px]",children:"Save"})})]})]})};m.__docgenInfo={description:`@param zeroLimitOnMaxHours if true, when maxHours is reached, the limit for minutes and seconds will be 0
@returns`,methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"union",raw:"string | TimePickerValue",elements:[{name:"string"},{name:"literal",value:"`${number}:${number}:${number}`"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: TimePickerValue) => void",signature:{arguments:[{type:{name:"literal",value:"`${number}:${number}:${number}`"},name:"value"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},withoutSaveButton:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"HH:MM:SS"',computed:!1}},rawPlaceholder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},maxHours:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"",defaultValue:{value:"23",computed:!1}},zeroLimitOnMaxHours:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideSeconds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Le={title:"Xenith UI/Components/TimePicker",component:m,tags:["autodocs"]},f={args:{title:"Deposit Expiry",className:"w-[268px]"},parameters:{layout:"centered"},render:r=>{const[a,l]=i.useState(r.value);return e.jsx("div",{children:e.jsx(m,{...r,value:a,onChange:l})})}},v={args:{title:"Deposit Expiry",className:"w-[268px]",maxHours:48,zeroLimitOnMaxHours:!0},parameters:{layout:"centered"},render:r=>{const[a,l]=i.useState(r.value);return e.jsx("div",{children:e.jsx(m,{...r,value:a,onChange:l})})}},h={args:{title:"Deposit Expiry",className:"w-[268px]",maxHours:null},parameters:{layout:"centered"},render:r=>{const[a,l]=i.useState(r.value);return e.jsx("div",{children:e.jsx(m,{...r,value:a,onChange:l})})}},g={args:{title:"Deposit Expiry",className:"w-[268px]",maxHours:null,placeholder:"HH:MM",withoutSaveButton:!0,hideSeconds:!0,value:"12:00"},parameters:{layout:"centered"},render:r=>{const[a,l]=i.useState(r.value);return e.jsxs("div",{className:"space-y-2",children:[e.jsx(m,{...r,value:a,onChange:o=>l(o.split(":")[0]+":"+o.split(":")[1])}),e.jsx(_,{onClick:()=>l(void 0),children:"Reset"})]})}};var M,P,C;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(P=f.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var E,D,I;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(D=v.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var q,$,R;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=($=h.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var L,F,O;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: "Deposit Expiry",
    className: "w-[268px]",
    maxHours: null,
    placeholder: "HH:MM",
    withoutSaveButton: true,
    hideSeconds: true,
    value: "12:00"
  },
  parameters: {
    layout: "centered"
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    return <div className="space-y-2">
        <TimePicker {...args} value={value} onChange={v => setValue(v.split(":")[0] + ":" + v.split(":")[1])} />
        <Button onClick={() => setValue(undefined)}>Reset</Button>
      </div>;
  }
}`,...(O=(F=g.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const Fe=["Default","WithMaxHours","NoMaxHours","ExternalControl"];export{f as Default,g as ExternalControl,h as NoMaxHours,v as WithMaxHours,Fe as __namedExportsOrder,Le as default};
