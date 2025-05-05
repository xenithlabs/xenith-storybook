import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{D as p}from"./DateTimePicker-DbG3YSQW.js";import{r as u}from"./index-DRjF_FHU.js";import{T as d}from"./Calendar-DbVYY7jP.js";import{t as c}from"./index-UORyxh73.js";import{s as v}from"./differenceInCalendarDays-C3EGPyW5.js";import{f as j}from"./format-DeQ6fwDa.js";import"./cn-C-5SdYIA.js";import"./Icon-Bs9G1Rwk.js";import"./index-Bb4qSo10.js";import"./calendar-lcr2z1-P.js";import"./Divider-CVEwzqm3.js";import"./Popover-jvvk1f8v.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-CWbDPhO_.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./Button-X8fnom3X.js";import"./index-HZDBD2ik.js";import"./styles-BNEhTmYy.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";import"./Text-BYjIVLkz.js";import"./useClickOutside-BKEUG6_P.js";import"./search-CWRmq9WO.js";import"./close-CAN3cq4E.js";import"./stringCase-DaZl3p-i.js";import"./check-rKbD1QKS.js";import"./index-CAHntWCK.js";import"./Heading-BbwmavmP.js";import"./Checkbox-C6NF-Wyv.js";import"./index-Bu1UD4WD.js";import"./endOfMonth-CBUZ-2Pf.js";import"./chevron-left-rLDlePxE.js";import"./chevron-right-BqZwpdvf.js";const Dt={title:"Xenith UI/Components/Date Time Picker",component:p,decorators:t=>o.jsx("div",{className:"py-10 w-[300px] h-[400px]  pb-40",children:o.jsx(t,{})}),args:{date:new Date,onChange:t=>console.log(t)},tags:["autodocs"]},a={render:()=>{const[t,n]=u.useState(v(new Date).toISOString());return o.jsx(p,{date:t?new Date(t):void 0,onChange:r=>{n(r==null?void 0:r.toISOString())}})}},i={render:()=>{const[t,n]=u.useState(v(new Date).toISOString());return o.jsx(p,{date:t?new Date(t):void 0,onChange:r=>{n(r==null?void 0:r.toISOString())},withoutSaveButton:!0})}},s={render:()=>{const[t,n]=u.useState(new d(new Date,"UTC").toISOString()),r=e=>{if(e)return new d(e,"UTC")};return o.jsx(p,{dateTransformer:r,formatFn:(e,U)=>j(c("Asia/Singapore")(e),U,{in:c("utc")}),date:t?new d(t,"UTC"):void 0,onChange:e=>{console.log("onchange",e==null?void 0:e.toISOString()),n(e==null?void 0:e.toISOString())},withoutSaveButton:!0})}},m={args:{fromDate:new Date}};var S,D,g;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<string | undefined>(startOfDay(new Date()).toISOString());
    return <DateTimePicker date={date ? new Date(date) : undefined} onChange={(date: Date | undefined) => {
      setDate(date?.toISOString());
    }} />;
  }
}`,...(g=(D=a.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var f,w,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<string | undefined>(startOfDay(new Date()).toISOString());
    return <DateTimePicker date={date ? new Date(date) : undefined} onChange={(date: Date | undefined) => {
      setDate(date?.toISOString());
    }} withoutSaveButton />;
  }
}`,...(h=(w=i.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var T,O,l;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<string | undefined>(new TZDate(new Date(), "UTC").toISOString());
    const transformer = (date?: Date) => {
      if (!date) return undefined;
      return new TZDate(date, "UTC");
    };
    return <DateTimePicker dateTransformer={transformer} formatFn={(d, s) => format(tz("Asia/Singapore")(d), s, {
      in: tz("utc")
    })} date={date ? new TZDate(date, "UTC") : undefined} onChange={(_date: Date | undefined) => {
      console.log("onchange", _date?.toISOString());
      setDate(_date?.toISOString());
    }} withoutSaveButton />;
  }
}`,...(l=(O=s.parameters)==null?void 0:O.docs)==null?void 0:l.source}}};var C,I,x;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    fromDate: new Date()
  }
}`,...(x=(I=m.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};const gt=["Default","WithoutSaveButton","WithUTC","WithFromDate"];export{a as Default,m as WithFromDate,s as WithUTC,i as WithoutSaveButton,gt as __namedExportsOrder,Dt as default};
