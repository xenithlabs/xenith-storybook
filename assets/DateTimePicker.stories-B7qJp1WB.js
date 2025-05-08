import{j as a}from"./jsx-runtime-DR9Q75dM.js";import{D as u}from"./DateTimePicker-Ds9ynDGu.js";import{r as d}from"./index-DRjF_FHU.js";import{T as c}from"./Calendar-Cq4tQa1v.js";import{t as D}from"./index-tz7qpZ4B.js";import{s as U}from"./differenceInCalendarDays-C3EGPyW5.js";import{f as j}from"./format-DeQ6fwDa.js";import"./cn-C-5SdYIA.js";import"./calendar-lcr2z1-P.js";import"./clock-C-cyK6yc.js";import"./Divider-CVEwzqm3.js";import"./Popover-jvvk1f8v.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-CWbDPhO_.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./Button-iG-w-ZO3.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-BNEhTmYy.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";import"./Icon-Bs9G1Rwk.js";import"./Text-BYjIVLkz.js";import"./useClickOutside-BeKAHFKi.js";import"./search-CWRmq9WO.js";import"./close-CAN3cq4E.js";import"./stringCase-DaZl3p-i.js";import"./check-rKbD1QKS.js";import"./index-CAHntWCK.js";import"./Heading-BbwmavmP.js";import"./Checkbox-CY4DEde6.js";import"./index-Bu1UD4WD.js";import"./endOfMonth-CBUZ-2Pf.js";import"./chevron-left-rLDlePxE.js";import"./chevron-right-BqZwpdvf.js";const gt={title:"Xenith UI/Components/Date Time Picker",component:u,decorators:e=>a.jsx("div",{className:"py-10 w-[300px] h-[400px]  pb-40",children:a.jsx(e,{})}),args:{date:new Date,onChange:e=>console.log(e)},tags:["autodocs"]},s={render:()=>{const[e,n]=d.useState(U(new Date).toISOString());return a.jsx(u,{date:e?new Date(e):void 0,onChange:r=>{n(r==null?void 0:r.toISOString())}})}},i={render:()=>{const[e,n]=d.useState(U(new Date).toISOString());return d.useEffect(()=>{const r=setInterval(()=>{console.log("new date arrived"),n(t=>{if(!t)return;const o=new Date(t);return o.setDate(o.getDate()+1),o.toISOString()})},1e3);return()=>clearInterval(r)},[n]),a.jsx(u,{date:e?new Date(e):void 0,onChange:r=>{n(r==null?void 0:r.toISOString())},withoutSaveButton:!0})}},m={render:()=>{const[e,n]=d.useState(new c(new Date,"UTC").toISOString()),r=t=>{if(t)return new c(t,"UTC")};return a.jsx(u,{dateTransformer:r,formatFn:(t,o)=>j(D("Asia/Singapore")(t),o,{in:D("utc")}),date:e?new c(e,"UTC"):void 0,onChange:t=>{console.log("onchange",t==null?void 0:t.toISOString()),n(t==null?void 0:t.toISOString())},withoutSaveButton:!0})}},p={args:{fromDate:new Date}};var S,g,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<string | undefined>(startOfDay(new Date()).toISOString());
    return <DateTimePicker date={date ? new Date(date) : undefined} onChange={(date: Date | undefined) => {
      setDate(date?.toISOString());
    }} />;
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var l,w,h;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(w=i.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var v,I,O;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(O=(I=m.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var T,x,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    fromDate: new Date()
  }
}`,...(C=(x=p.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const ft=["Default","WithoutSaveButton","WithUTC","WithFromDate"];export{s as Default,p as WithFromDate,m as WithUTC,i as WithoutSaveButton,ft as __namedExportsOrder,gt as default};
