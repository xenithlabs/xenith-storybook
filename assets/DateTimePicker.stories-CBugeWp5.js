import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{D as s}from"./DateTimePicker-mCu1w1ZJ.js";import{r as i}from"./index-DRjF_FHU.js";import{i as k,T as p}from"./Calendar-l-4OT5P4.js";import{t as g}from"./index-GNhzAZ6i.js";import{s as S}from"./differenceInCalendarDays-C3EGPyW5.js";import{f as P}from"./format-DeQ6fwDa.js";import"./cn-C-5SdYIA.js";import"./calendar-lcr2z1-P.js";import"./clock-C-cyK6yc.js";import"./Divider-CVEwzqm3.js";import"./Popover-B_YRgxiT.js";import"./index-CxXVImLN.js";import"./index-CxRLcT2J.js";import"./index-yJl9Mbgj.js";import"./index-RoT-dC5i.js";import"./index-D4PmrNqQ.js";import"./index-BoBYWeOI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-Chjlzwpf.js";import"./index-nVMawZv2.js";import"./Button-iG-w-ZO3.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-BNEhTmYy.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";import"./Icon-Bs9G1Rwk.js";import"./Text-BYjIVLkz.js";import"./useClickOutside-Bv9QlyoM.js";import"./search-CWRmq9WO.js";import"./close-CAN3cq4E.js";import"./stringCase-DaZl3p-i.js";import"./check-rKbD1QKS.js";import"./index-CAHntWCK.js";import"./Heading-BbwmavmP.js";import"./Checkbox-CxWW_UQV.js";import"./index-Bu1UD4WD.js";import"./endOfMonth-CBUZ-2Pf.js";import"./chevron-left-rLDlePxE.js";import"./chevron-right-BqZwpdvf.js";const lt={title:"Xenith UI/Components/Date Time Picker",component:s,decorators:t=>o.jsx("div",{className:"py-10 w-[300px] h-[400px]  pb-40",children:o.jsx(t,{})}),args:{date:new Date,onChange:t=>console.log(t)},tags:["autodocs"]},d={render:()=>{const[t,a]=i.useState(S(new Date).toISOString());return o.jsx(s,{date:t?new Date(t):void 0,onChange:n=>{a(n==null?void 0:n.toISOString())}})}},u={render:()=>{const[t,a]=i.useState(S(new Date).toISOString());return i.useEffect(()=>{const n=setInterval(()=>{console.log("new date arrived"),a(e=>{if(!e)return;const r=new Date(e);return r.setDate(r.getDate()+1),r.toISOString()})},1e3);return()=>clearInterval(n)},[a]),o.jsx(s,{date:t?new Date(t):void 0,onChange:n=>{a(n==null?void 0:n.toISOString())},withoutSaveButton:!0})}},m={render:()=>{const[t,a]=i.useState(S(new Date).toISOString()),[n,e]=i.useState(S(new Date).toISOString());return i.useEffect(()=>{!t||!n||k(new Date(t),new Date(n))&&e(new Date(t).toISOString())},[t]),o.jsxs("div",{children:[o.jsx(s,{date:t?new Date(t):void 0,onChange:r=>{a(r==null?void 0:r.toISOString())},withoutSaveButton:!0}),o.jsx(s,{date:n?new Date(n):void 0,onChange:r=>{e(r==null?void 0:r.toISOString())},withoutSaveButton:!0})]})}},D={render:()=>{const[t,a]=i.useState(new p(new Date,"UTC").toISOString()),n=e=>{if(e)return new p(e,"UTC")};return o.jsx(s,{dateTransformer:n,formatFn:(e,r)=>P(g("Asia/Singapore")(e),r,{in:g("utc")}),date:t?new p(t,"UTC"):void 0,onChange:e=>{console.log("onchange",e==null?void 0:e.toISOString()),a(e==null?void 0:e.toISOString())},withoutSaveButton:!0})}},c={args:{fromDate:new Date}};var f,w,h;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<string | undefined>(startOfDay(new Date()).toISOString());
    return <DateTimePicker date={date ? new Date(date) : undefined} onChange={(date: Date | undefined) => {
      setDate(date?.toISOString());
    }} />;
  }
}`,...(h=(w=d.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var O,l,v;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<string | undefined>(startOfDay(new Date()).toISOString());
    useEffect(() => {
      const interval = setInterval(() => {
        console.log("new date arrived");
        setDate(prev => {
          if (!prev) return;
          const nextDate = new Date(prev);
          nextDate.setDate(nextDate.getDate() + 1);
          return nextDate.toISOString();
        });
      }, 1000); // 24 hours

      return () => clearInterval(interval);
    }, [setDate]);
    return <DateTimePicker date={date ? new Date(date) : undefined} onChange={(date: Date | undefined) => {
      setDate(date?.toISOString());
    }} withoutSaveButton />;
  }
}`,...(v=(l=u.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var I,T,x;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<string | undefined>(startOfDay(new Date()).toISOString());
    const [endDate, setEndDate] = useState<string | undefined>(startOfDay(new Date()).toISOString());
    useEffect(() => {
      if (!date || !endDate) return;
      if (isAfter(new Date(date), new Date(endDate))) {
        setEndDate(new Date(date).toISOString());
      }
    }, [date]);
    return <div>
        <DateTimePicker date={date ? new Date(date) : undefined} onChange={(date: Date | undefined) => {
        setDate(date?.toISOString());
      }} withoutSaveButton />

        <DateTimePicker date={endDate ? new Date(endDate) : undefined} onChange={(date: Date | undefined) => {
        setEndDate(date?.toISOString());
      }} withoutSaveButton />
      </div>;
  }
}`,...(x=(T=m.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var C,E,j;D.parameters={...D.parameters,docs:{...(C=D.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(E=D.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var B,U,W;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    fromDate: new Date()
  }
}`,...(W=(U=c.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const vt=["Default","WithoutSaveButton","WithStartEnd","WithUTC","WithFromDate"];export{d as Default,c as WithFromDate,m as WithStartEnd,D as WithUTC,u as WithoutSaveButton,vt as __namedExportsOrder,lt as default};
