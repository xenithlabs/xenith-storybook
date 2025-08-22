import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as u}from"./index-DRjF_FHU.js";import{I as $,b as he}from"./useClickOutside-Cz0URkAA.js";import{F as ve}from"./clock-DRhx3Wks.js";import{P as fe,a as ye,b as Ve}from"./Popover-A4hNnO1p.js";import{I as je}from"./Icon-CTnhpE1d.js";import{H as Ne}from"./Heading-DjlBwQyS.js";import{T as W}from"./Text-C8HBwI4b.js";import{B as ce}from"./Button-DAgrt3Vy.js";import"./cn-8RyR4BqC.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./stringCase-DaZl3p-i.js";import"./close-D2djoYoT.js";import"./search-5X7N_xNn.js";import"./mini-FlV67GHA.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./floating-ui.dom-BuxmzwbT.js";import"./check-C0C6JGvp.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";import"./index-CAHntWCK.js";import"./index-HZDBD2ik.js";import"./Checkbox-CMdwPcui.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";const be=/^([0-9]{2,}):/,z=/:([0-9]{2,}):/,_=/:([0-9]{2,})$/,V=r=>r.toString().padStart(2,"0"),G=(r,a)=>{if(r)return a&&(r==null?void 0:r.split(":").length)===2?r+":00":r},j=({value:r,higherValue:a,higherValueLimits:n,generalLimits:m,edgeLimits:w})=>{let[v,f]=m;if(a&&n){const[g,d]=n;g!==null&&a<=g&&(v=w[0]),d!==null&&a>=d&&(f=w[1])}return v!==null&&r<v?v:f!==null&&r>f?f:r},h=({value:r,onChange:a,title:n,withoutSaveButton:m,placeholder:w="HH:MM:SS",rawPlaceholder:v=!0,className:f,maxHours:g=23,hideSeconds:d=!1,error:me=!1,min:T,max:S})=>{const[pe,k]=u.useState(!1),[i,A]=u.useState(G(r,d)),B=u.useMemo(()=>(T==null?void 0:T.split(":").map(t=>parseInt(t)))||[0,0,0],[T]),O=u.useMemo(()=>{const t=(S==null?void 0:S.split(":").map(N=>parseInt(N)))||[g,59,59];return t[0]&&g&&t[0]>g?[g,t[1],t[2]]:t},[S,g]),D=(t,N,s)=>{const[o,p]=N,[b,c]=s;return o!==null&&t<=o?[b,null]:p!==null&&t>=p?[null,c]:[null,null]},I=u.useCallback((t,N)=>{let s=i||"00:00:00";const[o,p,b]=B,[c,x,q]=O,R=s.split(":"),F=parseInt(R[0]),U=parseInt(R[1]),X=parseInt(R[2]);switch(N){case"hours":{const l=j({value:parseInt(t),generalLimits:[o,c],edgeLimits:[o,c]}),M=V(l);if(s=s.replace(be,`${M}:`),l<=o||c!==null&&l>=c){const y=j({value:U,higherValue:l,higherValueLimits:[o,c],generalLimits:[0,59],edgeLimits:[p,x]});if(s=s.replace(z,`:${V(y)}:`),y<=p||x!==null&&y>=x){const ge=j({value:X,higherValue:y,higherValueLimits:D(l,[o,c],[p,x]),generalLimits:[0,59],edgeLimits:[b,q]});s=s.replace(_,`:${V(ge)}`)}}break}case"minutes":{const l=j({value:parseInt(t),higherValue:F,higherValueLimits:[o,c],generalLimits:[0,59],edgeLimits:[p,x]}),M=V(l);if(s=s.replace(z,`:${M}:`),l<=p||x!==null&&l>=x){const y=j({value:X,higherValue:l,higherValueLimits:D(F,[o,c],[p,x]),generalLimits:[0,59],edgeLimits:[b,q]});s=s.replace(_,`:${V(y)}`)}break}case"seconds":{const l=j({value:parseInt(t),higherValue:U,higherValueLimits:D(F,[o,c],[p,x]),generalLimits:[0,59],edgeLimits:[b,q]}),M=V(l);s=s.replace(_,`:${M}`);break}}A(s),m&&(a==null||a(s))},[i,B,O,a,m]),de=u.useMemo(()=>{const t=m?i:r;return t?d?(t==null?void 0:t.split(":")[0])+":"+(t==null?void 0:t.split(":")[1]):t:""},[m,i,r,d]),xe=()=>{a==null||a(i),k(!1)};return u.useEffect(()=>{A(G(r,d))},[r,d]),e.jsxs(fe,{open:pe,onOpenChange:k,children:[e.jsx(ye,{asChild:!0,children:e.jsx("div",{children:e.jsx($,{value:de,placeholder:w,rawPlaceholder:v,className:f,leftComponent:e.jsx(he,{className:"pr-0 border-r-0",children:e.jsx(je,{icon:e.jsx(ve,{})})}),onFocus:t=>{t.preventDefault(),k(!0)},onClick:t=>{t.preventDefault(),k(!0)},error:me})})}),e.jsxs(Ve,{className:"p-6",align:"start",children:[n&&e.jsx(Ne,{variant:"titleMd",className:"mb-6",children:n}),e.jsxs("div",{className:"flex gap-3 items-start",children:[e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx($,{type:"number",min:0,max:23,step:1,maxLength:2,value:i==null?void 0:i.split(":")[0],onChange:t=>I(t.target.value||"00","hours"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(W,{variant:"tiny",className:"text-text-weak",children:"Hour"})]}),e.jsx("div",{className:"flex items-center h-10",children:":"}),e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx($,{type:"number",min:0,max:59,step:1,maxLength:2,value:i==null?void 0:i.split(":")[1],onChange:t=>I(t.target.value||"00","minutes"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(W,{variant:"tiny",className:"text-text-weak",children:"Minute"})]}),!d&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center h-10",children:":"}),e.jsxs("div",{className:"flex flex-col gap-1 items-center",children:[e.jsx($,{type:"number",min:0,max:59,step:1,maxLength:2,value:i==null?void 0:i.split(":")[2],onChange:t=>I(t.target.value||"00","seconds"),placeholder:"00",rawPlaceholder:!0,className:"w-[47px] appearance-none text-center"}),e.jsx(W,{variant:"tiny",className:"text-text-weak",children:"Second"})]})]})]}),!m&&e.jsx("div",{className:"flex justify-end pt-4 mt-6 border-t",children:e.jsx(ce,{variant:"solid",theme:"primary",onClick:xe,className:"w-[70px]",children:"Save"})})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"union",raw:"string | TimePickerValue | TimePickerShortValue",elements:[{name:"string"},{name:"literal",value:"`${number}:${number}:${number}`"},{name:"literal",value:"`${number}:${number}`"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: TimePickerValue) => void",signature:{arguments:[{type:{name:"literal",value:"`${number}:${number}:${number}`"},name:"value"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},withoutSaveButton:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"HH:MM:SS"',computed:!1}},rawPlaceholder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},maxHours:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"",defaultValue:{value:"23",computed:!1}},hideSeconds:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},min:{required:!1,tsType:{name:"union",raw:"string | TimePickerValue | TimePickerShortValue",elements:[{name:"string"},{name:"literal",value:"`${number}:${number}:${number}`"},{name:"literal",value:"`${number}:${number}`"}]},description:""},max:{required:!1,tsType:{name:"union",raw:"string | TimePickerValue | TimePickerShortValue",elements:[{name:"string"},{name:"literal",value:"`${number}:${number}:${number}`"},{name:"literal",value:"`${number}:${number}`"}]},description:""}}};const tr={title:"Xenith UI/Components/TimePicker",component:h,tags:["autodocs"]},P={args:{title:"Deposit Expiry",className:"w-[268px]"},parameters:{layout:"centered"},render:r=>{const[a,n]=u.useState(r.value);return e.jsx("div",{children:e.jsx(h,{...r,value:a,onChange:n})})}},H={args:{title:"Deposit Expiry",className:"w-[268px]",maxHours:48},parameters:{layout:"centered"},render:r=>{const[a,n]=u.useState(r.value);return e.jsx("div",{children:e.jsx(h,{...r,value:a,onChange:n})})}},L={args:{title:"Deposit Expiry",className:"w-[268px]",maxHours:null},parameters:{layout:"centered"},render:r=>{const[a,n]=u.useState(r.value);return e.jsx("div",{children:e.jsx(h,{...r,value:a,onChange:n})})}},C={args:{title:"Deposit Expiry",className:"w-[268px]",maxHours:null,placeholder:"HH:MM",withoutSaveButton:!0,hideSeconds:!0,value:"12:00"},parameters:{layout:"centered"},render:r=>{const[a,n]=u.useState(r.value);return e.jsxs("div",{className:"space-y-2",children:[e.jsx(h,{...r,value:a,onChange:m=>n(m.split(":")[0]+":"+m.split(":")[1])}),e.jsx(ce,{onClick:()=>n(void 0),children:"Reset"})]})}},E={args:{title:"Deposit Expiry",className:"w-[268px]",maxHours:48,min:"12:34:56",max:"20:21:22"},parameters:{layout:"centered"},render:r=>{const[a,n]=u.useState(r.value);return e.jsx("div",{children:e.jsx(h,{...r,value:a,onChange:n})})}};var J,K,Q;P.parameters={...P.parameters,docs:{...(J=P.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=P.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;H.parameters={...H.parameters,docs:{...(Y=H.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: "Deposit Expiry",
    className: "w-[268px]",
    maxHours: 48
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
}`,...(ee=(Z=H.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,ae;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(te=L.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,ne,ie;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,ue,oe;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    title: "Deposit Expiry",
    className: "w-[268px]",
    maxHours: 48,
    min: "12:34:56",
    max: "20:21:22"
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
}`,...(oe=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};const ar=["Default","WithMaxHours","NoMaxHours","ExternalControl","WithMinAndMaxValues"];export{P as Default,C as ExternalControl,L as NoMaxHours,H as WithMaxHours,E as WithMinAndMaxValues,ar as __namedExportsOrder,tr as default};
