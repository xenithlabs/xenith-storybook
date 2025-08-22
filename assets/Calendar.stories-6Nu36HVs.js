import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{r as o}from"./index-DRjF_FHU.js";import{C as r,e as me,a as ue}from"./Calendar-CfLxHAi1.js";import{s as R}from"./subDays-DGkdSj43.js";import{T as n}from"./Text-C8HBwI4b.js";import{f as m}from"./format-DX5nf6U1.js";import{a as T,s as C}from"./startOfMonth-CZilhnlQ.js";import{B as pe}from"./Badge-tKG4rD-8.js";import{C as M}from"./Card-C5rr-ZzX.js";import"./toDate-SX-ecmdR.js";import"./mini-FlV67GHA.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./Button-DAgrt3Vy.js";import"./cn-8RyR4BqC.js";import"./index-HZDBD2ik.js";import"./spinner-ojW7ALd7.js";import"./Icon-CTnhpE1d.js";import"./chevron-down-CyV3wpL8.js";import"./chevron-left-D0P6BdMN.js";import"./chevron-right-D4FvqfWr.js";const Fe={title:"Xenith UI/Components/Calendar",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The Calendar component provides date selection functionality with support for single date and date range selection. Built on top of react-day-picker, it offers a clean, accessible interface for date picking.

### Key Features
- **Selection Modes**: Single date or date range selection
- **Multi-Month Display**: Show multiple months side-by-side
- **Customizable Appearance**: Extensive styling options through classNames
- **Keyboard Navigation**: Full keyboard support for accessibility
- **Outside Days**: Option to show/hide days from adjacent months
- **Disabled Dates**: Support for disabling specific dates or ranges
- **Time Zone Support**: Built-in UTC timezone handling

### Usage
\`\`\`tsx
import { Calendar } from "@xenithlabs/xenith-ui";

// Single date selection
<Calendar
  mode="single"
  selected={selectedDate}
  onSelect={setSelectedDate}
/>

// Date range selection
<Calendar
  mode="range"
  selected={{ from: startDate, to: endDate }}
  onSelect={setDateRange}
/>

// Multiple months
<Calendar
  mode="range"
  numberOfMonths={2}
  selected={dateRange}
  onSelect={setDateRange}
/>
\`\`\`

### Component Props

- **mode** ("single" | "range" | "multiple"): Selection mode
- **selected** (Date | DateRange | Date[]): Selected date(s)
- **onSelect** ((date: Date | DateRange | Date[] | undefined) => void): Selection handler
- **numberOfMonths** (number): Number of months to display
- **showOutsideDays** (boolean): Show days from adjacent months. Default: true
- **disabled** (Date | Date[] | DateRange | (date: Date) => boolean): Disabled dates
- **fromDate** (Date): Minimum selectable date
- **toDate** (Date): Maximum selectable date
- **className** (string): Additional CSS classes
- **classNames** (object): Custom classNames for internal elements
        `}}},argTypes:{mode:{control:{type:"select"},options:["single","range","multiple"],description:"Selection mode for the calendar",table:{type:{summary:'"single" | "range" | "multiple"'},defaultValue:{summary:'"single"'}}},selected:{control:!1,description:"Currently selected date(s)",table:{type:{summary:"Date | DateRange | Date[]"}}},onSelect:{action:"onSelect",description:"Callback when date selection changes",table:{type:{summary:"(date: Date | DateRange | Date[] | undefined) => void"}}},numberOfMonths:{control:{type:"number",min:1,max:12},description:"Number of months to display",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},showOutsideDays:{control:{type:"boolean"},description:"Show days from adjacent months",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},disabled:{control:!1,description:"Dates that should be disabled",table:{type:{summary:"Date | Date[] | DateRange | (date: Date) => boolean"}}},fromDate:{control:{type:"date"},description:"Minimum selectable date",table:{type:{summary:"Date"}}},toDate:{control:{type:"date"},description:"Maximum selectable date",table:{type:{summary:"Date"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}},args:{mode:"single",showOutsideDays:!0}},p={args:{selected:new Date}},g={render:function(){const[e,a]=o.useState(new Date);return t.jsxs("div",{className:"space-y-4",children:[t.jsx(r,{mode:"single",selected:e,onSelect:a}),e&&t.jsxs(n,{variant:"regular",className:"text-text-weak",children:["Selected: ",m(e,"PPP")]})]})}},x={render:function(){const[e,a]=o.useState({from:new Date,to:T(new Date,7)});return t.jsxs("div",{className:"space-y-4",children:[t.jsx(r,{mode:"range",selected:e,onSelect:a}),(e==null?void 0:e.from)&&t.jsxs(n,{variant:"regular",className:"text-text-weak",children:["From: ",m(e.from,"PPP"),e.to&&` → To: ${m(e.to,"PPP")}`]})]})}},D={args:{mode:"range",numberOfMonths:2,selected:{from:new Date,to:T(new Date,30)}}},h={name:"Three Months View",args:{mode:"range",numberOfMonths:3,selected:{from:C(new Date),to:me(ue(new Date,2))}}},f={name:"With Disabled Dates",render:function(){const[e,a]=o.useState(),s=l=>{const d=l.getDay();return d===0||d===6};return t.jsxs("div",{className:"space-y-4",children:[t.jsx(n,{variant:"regular",className:"text-text-weak",children:"Weekends are disabled in this example"}),t.jsx(r,{mode:"single",selected:e,onSelect:a,disabled:s})]})}},b={name:"Date Range with Min/Max",render:function(){const[e,a]=o.useState(),s=R(new Date,30),l=T(new Date,30);return t.jsxs("div",{className:"space-y-4",children:[t.jsx(n,{variant:"regular",className:"text-text-weak",children:"Selection limited to ±30 days from today"}),t.jsx(r,{mode:"range",selected:e,onSelect:a,fromDate:s,toDate:l,numberOfMonths:2}),(e==null?void 0:e.from)&&(e==null?void 0:e.to)&&t.jsxs(pe,{theme:"primary",variant:"soft",children:[Math.ceil((e.to.getTime()-e.from.getTime())/(1e3*60*60*24))+1," days selected"]})]})}},y={name:"Calendar in Card",render:function(){const[e,a]=o.useState(new Date);return t.jsxs(M,{className:"p-6 max-w-fit",children:[t.jsxs("div",{className:"mb-4",children:[t.jsx(n,{variant:"semiBold",className:"mb-1",children:"Select a date"}),t.jsx(n,{variant:"regular",className:"text-text-weak",children:"Choose your preferred appointment date"})]}),t.jsx(r,{mode:"single",selected:e,onSelect:a,className:"border-0 shadow-none p-0"})]})}},S={name:"Transaction Date Filter (Real Example)",render:function(){const[e,a]=o.useState({from:C(new Date),to:new Date}),s=e!=null&&e.from&&(e!=null&&e.to)?Math.ceil((e.to.getTime()-e.from.getTime())/(1e3*60*60*24))*15:0;return t.jsxs("div",{className:"space-y-4",children:[t.jsxs(M,{className:"p-4",children:[t.jsx(n,{variant:"semiBold",className:"mb-3",children:"Transaction Date Range"}),t.jsx(r,{mode:"range",selected:e,onSelect:a,numberOfMonths:2,className:"border-0 shadow-none p-0"})]}),(e==null?void 0:e.from)&&(e==null?void 0:e.to)&&t.jsx(M,{className:"p-4 bg-surface-subtle",children:t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{children:[t.jsx(n,{variant:"regular",className:"text-text-weak",children:"Date Range"}),t.jsxs(n,{variant:"medium",children:[m(e.from,"MMM d")," - ",m(e.to,"MMM d, yyyy")]})]}),t.jsxs("div",{className:"text-right",children:[t.jsx(n,{variant:"regular",className:"text-text-weak",children:"Est. Transactions"}),t.jsx(n,{variant:"medium",children:s.toLocaleString()})]})]})})]})}},w={name:"Settlement Period Selector",render:function(){const[e,a]=o.useState(),[s,l]=o.useState("custom"),d=u=>{l(u);const c=new Date;switch(u){case"week":a({from:R(c,7),to:c});break;case"month":a({from:C(c),to:c});break;case"quarter":a({from:C(R(c,90)),to:c});break}};return t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:()=>d("week"),className:`px-3 py-1 rounded text-sm ${s==="week"?"bg-primary text-white":"bg-surface-subtle"}`,children:"Last 7 days"}),t.jsx("button",{onClick:()=>d("month"),className:`px-3 py-1 rounded text-sm ${s==="month"?"bg-primary text-white":"bg-surface-subtle"}`,children:"This month"}),t.jsx("button",{onClick:()=>d("quarter"),className:`px-3 py-1 rounded text-sm ${s==="quarter"?"bg-primary text-white":"bg-surface-subtle"}`,children:"Last quarter"}),t.jsx("button",{onClick:()=>d("custom"),className:`px-3 py-1 rounded text-sm ${s==="custom"?"bg-primary text-white":"bg-surface-subtle"}`,children:"Custom"})]}),t.jsx(r,{mode:"range",selected:e,onSelect:u=>{a(u),l("custom")},numberOfMonths:2})]})}},v={render:()=>t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx(n,{variant:"regular",className:"mb-2",children:"Compact Calendar"}),t.jsx(r,{mode:"single",selected:new Date,className:"p-2 text-sm"})]}),t.jsxs("div",{children:[t.jsx(n,{variant:"regular",className:"mb-2",children:"No Border Calendar"}),t.jsx(r,{mode:"single",selected:new Date,className:"border-0 shadow-lg"})]})]})},N={args:{showOutsideDays:!1,selected:new Date}};var j,k,P;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    selected: new Date()
  }
}`,...(P=(k=p.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var O,E,B;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: function SingleDateExample() {
    const [selected, setSelected] = React.useState<Date | undefined>(new Date());
    return <div className="space-y-4">
        <Calendar mode="single" selected={selected} onSelect={setSelected} />
        {selected && <Text variant="regular" className="text-text-weak">
            Selected: {format(selected, "PPP")}
          </Text>}
      </div>;
  }
}`,...(B=(E=g.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var F,L,W;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: function DateRangeExample() {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7)
    });
    return <div className="space-y-4">
        <Calendar mode="range" selected={dateRange} onSelect={setDateRange} />
        {dateRange?.from && <Text variant="regular" className="text-text-weak">
            From: {format(dateRange.from, "PPP")}
            {dateRange.to && \` → To: \${format(dateRange.to, "PPP")}\`}
          </Text>}
      </div>;
  }
}`,...(W=(L=x.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var $,q,V;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    mode: "range",
    numberOfMonths: 2,
    selected: {
      from: new Date(),
      to: addDays(new Date(), 30)
    }
  }
}`,...(V=(q=D.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var I,A,U;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Three Months View",
  args: {
    mode: "range",
    numberOfMonths: 3,
    selected: {
      from: startOfMonth(new Date()),
      to: endOfMonth(addMonths(new Date(), 2))
    }
  }
}`,...(U=(A=h.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var z,K,_;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "With Disabled Dates",
  render: function DisabledDatesExample() {
    const [selected, setSelected] = React.useState<Date | undefined>();

    // Disable weekends
    const disabledDays = (date: Date) => {
      const day = date.getDay();
      return day === 0 || day === 6; // Sunday = 0, Saturday = 6
    };
    return <div className="space-y-4">
        <Text variant="regular" className="text-text-weak">
          Weekends are disabled in this example
        </Text>
        <Calendar mode="single" selected={selected} onSelect={setSelected} disabled={disabledDays} />
      </div>;
  }
}`,...(_=(K=f.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var X,Z,G;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Date Range with Min/Max",
  render: function DateRangeWithLimitsExample() {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>();
    const fromDate = subDays(new Date(), 30);
    const toDate = addDays(new Date(), 30);
    return <div className="space-y-4">
        <Text variant="regular" className="text-text-weak">
          Selection limited to ±30 days from today
        </Text>
        <Calendar mode="range" selected={dateRange} onSelect={setDateRange} fromDate={fromDate} toDate={toDate} numberOfMonths={2} />
        {dateRange?.from && dateRange?.to && <Badge theme="primary" variant="soft">
            {Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24)) + 1} days selected
          </Badge>}
      </div>;
  }
}`,...(G=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var H,J,Q;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Calendar in Card",
  render: function CalendarInCardExample() {
    const [selected, setSelected] = React.useState<Date | undefined>(new Date());
    return <Card className="p-6 max-w-fit">
        <div className="mb-4">
          <Text variant="semiBold" className="mb-1">Select a date</Text>
          <Text variant="regular" className="text-text-weak">
            Choose your preferred appointment date
          </Text>
        </div>
        <Calendar mode="single" selected={selected} onSelect={setSelected} className="border-0 shadow-none p-0" />
      </Card>;
  }
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,ee,te;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Transaction Date Filter (Real Example)",
  render: function TransactionFilterExample() {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
      from: startOfMonth(new Date()),
      to: new Date()
    });
    const transactionCount = dateRange?.from && dateRange?.to ? Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24)) * 15 : 0;
    return <div className="space-y-4">
        <Card className="p-4">
          <Text variant="semiBold" className="mb-3">Transaction Date Range</Text>
          <Calendar mode="range" selected={dateRange} onSelect={setDateRange} numberOfMonths={2} className="border-0 shadow-none p-0" />
        </Card>
        
        {dateRange?.from && dateRange?.to && <Card className="p-4 bg-surface-subtle">
            <div className="flex justify-between items-center">
              <div>
                <Text variant="regular" className="text-text-weak">Date Range</Text>
                <Text variant="medium">
                  {format(dateRange.from, "MMM d")} - {format(dateRange.to, "MMM d, yyyy")}
                </Text>
              </div>
              <div className="text-right">
                <Text variant="regular" className="text-text-weak">Est. Transactions</Text>
                <Text variant="medium">{transactionCount.toLocaleString()}</Text>
              </div>
            </div>
          </Card>}
      </div>;
  }
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,se;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "Settlement Period Selector",
  render: function SettlementPeriodExample() {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>();
    const [period, setPeriod] = React.useState<"custom" | "week" | "month" | "quarter">("custom");
    const handlePeriodChange = (newPeriod: typeof period) => {
      setPeriod(newPeriod);
      const today = new Date();
      switch (newPeriod) {
        case "week":
          setDateRange({
            from: subDays(today, 7),
            to: today
          });
          break;
        case "month":
          setDateRange({
            from: startOfMonth(today),
            to: today
          });
          break;
        case "quarter":
          setDateRange({
            from: startOfMonth(subDays(today, 90)),
            to: today
          });
          break;
      }
    };
    return <div className="space-y-4">
        <div className="flex gap-2">
          <button onClick={() => handlePeriodChange("week")} className={\`px-3 py-1 rounded text-sm \${period === "week" ? "bg-primary text-white" : "bg-surface-subtle"}\`}>
            Last 7 days
          </button>
          <button onClick={() => handlePeriodChange("month")} className={\`px-3 py-1 rounded text-sm \${period === "month" ? "bg-primary text-white" : "bg-surface-subtle"}\`}>
            This month
          </button>
          <button onClick={() => handlePeriodChange("quarter")} className={\`px-3 py-1 rounded text-sm \${period === "quarter" ? "bg-primary text-white" : "bg-surface-subtle"}\`}>
            Last quarter
          </button>
          <button onClick={() => handlePeriodChange("custom")} className={\`px-3 py-1 rounded text-sm \${period === "custom" ? "bg-primary text-white" : "bg-surface-subtle"}\`}>
            Custom
          </button>
        </div>

        <Calendar mode="range" selected={dateRange} onSelect={range => {
        setDateRange(range);
        setPeriod("custom");
      }} numberOfMonths={2} />
      </div>;
  }
}`,...(se=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,de;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4">
      <div>
        <Text variant="regular" className="mb-2">Compact Calendar</Text>
        <Calendar mode="single" selected={new Date()} className="p-2 text-sm" />
      </div>
      <div>
        <Text variant="regular" className="mb-2">No Border Calendar</Text>
        <Calendar mode="single" selected={new Date()} className="border-0 shadow-lg" />
      </div>
    </div>
}`,...(de=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ie,le,ce;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    showOutsideDays: false,
    selected: new Date()
  }
}`,...(ce=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const Le=["Default","SingleDateSelection","DateRangeSelection","MultipleMonths","ThreeMonthsView","DisabledDates","DateRangeWithLimits","CalendarInCard","TransactionDateFilter","SettlementPeriod","CustomStyling","WithoutOutsideDays"];export{y as CalendarInCard,v as CustomStyling,x as DateRangeSelection,b as DateRangeWithLimits,p as Default,f as DisabledDates,D as MultipleMonths,w as SettlementPeriod,g as SingleDateSelection,h as ThreeMonthsView,S as TransactionDateFilter,N as WithoutOutsideDays,Le as __namedExportsOrder,Fe as default};
