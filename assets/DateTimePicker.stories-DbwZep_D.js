import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{D as s}from"./DateTimePicker-CtFbFh_N.js";import{r as i}from"./index-DRjF_FHU.js";import{i as k,T as p}from"./Calendar-BGfpJGzD.js";import{t as g}from"./index-BxkuFkVB.js";import{s as S}from"./differenceInCalendarDays-C3EGPyW5.js";import{f as P}from"./format-DeQ6fwDa.js";import"./cn-8RyR4BqC.js";import"./calendar-C26CUINT.js";import"./clock-DRhx3Wks.js";import"./Divider-CIm89-oy.js";import"./Popover-A4hNnO1p.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./Button-C-jt4Opy.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-x1yxmyQd.js";import"./chevron-up-Dp-rU9It.js";import"./chevron-down-CyV3wpL8.js";import"./spinner-ZMRwnkYw.js";import"./Icon-CTnhpE1d.js";import"./Text-C8HBwI4b.js";import"./useClickOutside-wERPwcQv.js";import"./search-CkRkU8_d.js";import"./close-D2djoYoT.js";import"./stringCase-DaZl3p-i.js";import"./check-C0C6JGvp.js";import"./index-CAHntWCK.js";import"./Heading-DjlBwQyS.js";import"./Checkbox-CAdLyoQE.js";import"./index-Bu1UD4WD.js";import"./endOfMonth-CBUZ-2Pf.js";import"./chevron-left-D0P6BdMN.js";import"./chevron-right-D4FvqfWr.js";const vt={title:"Xenith UI/Components/Date Time Picker",component:s,decorators:t=>o.jsx("div",{className:"py-10 w-[300px] h-[400px]  pb-40",children:o.jsx(t,{})}),args:{date:new Date,onChange:t=>console.log(t)},tags:["autodocs"]},d={render:()=>{const[t,a]=i.useState(S(new Date).toISOString());return o.jsx(s,{date:t?new Date(t):void 0,onChange:n=>{a(n==null?void 0:n.toISOString())}})}},u={render:()=>{const[t,a]=i.useState(S(new Date).toISOString());return i.useEffect(()=>{const n=setInterval(()=>{console.log("new date arrived"),a(e=>{if(!e)return;const r=new Date(e);return r.setDate(r.getDate()+1),r.toISOString()})},1e3);return()=>clearInterval(n)},[a]),o.jsx(s,{date:t?new Date(t):void 0,onChange:n=>{a(n==null?void 0:n.toISOString())},withoutSaveButton:!0})}},m={render:()=>{const[t,a]=i.useState(S(new Date).toISOString()),[n,e]=i.useState(S(new Date).toISOString());return i.useEffect(()=>{!t||!n||k(new Date(t),new Date(n))&&e(new Date(t).toISOString())},[t]),o.jsxs("div",{children:[o.jsx(s,{date:t?new Date(t):void 0,onChange:r=>{a(r==null?void 0:r.toISOString())},withoutSaveButton:!0}),o.jsx(s,{date:n?new Date(n):void 0,onChange:r=>{e(r==null?void 0:r.toISOString())},withoutSaveButton:!0})]})}},D={render:()=>{const[t,a]=i.useState(new p(new Date,"UTC").toISOString()),n=e=>{if(e)return new p(e,"UTC")};return o.jsx(s,{dateTransformer:n,formatFn:(e,r)=>P(g("Asia/Singapore")(e),r,{in:g("utc")}),date:t?new p(t,"UTC"):void 0,onChange:e=>{console.log("onchange",e==null?void 0:e.toISOString()),a(e==null?void 0:e.toISOString())},withoutSaveButton:!0})}},c={args:{fromDate:new Date}};var f,w,h;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(W=(U=c.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const It=["Default","WithoutSaveButton","WithStartEnd","WithUTC","WithFromDate"];export{d as Default,c as WithFromDate,m as WithStartEnd,D as WithUTC,u as WithoutSaveButton,It as __namedExportsOrder,vt as default};
