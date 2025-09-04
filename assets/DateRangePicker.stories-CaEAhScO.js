import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as m}from"./index-DRjF_FHU.js";import{e as P,d as ka,a as Sa,b as ae,c as te,f as xa,T as V,i as je,g as S}from"./Calendar-CGVhkGMw.js";import"./mini-FlV67GHA.js";import{t as c}from"./index-CSP0bfvs.js";import{e as T}from"./endOfDay-irTNPJGS.js";import{t as L}from"./toDate-SX-ecmdR.js";import{n as Pa,s as w,a as ne,b as se,f as p}from"./format-DX5nf6U1.js";import{s as re}from"./startOfMonth-CZilhnlQ.js";import{c as O}from"./cn-8RyR4BqC.js";import{a as be}from"./spinner-ojW7ALd7.js";import{F as Va}from"./chevron-right-D4FvqfWr.js";import{F as ga}from"./check-C0C6JGvp.js";import{B as h}from"./Button-47JPF8V9.js";import{T as l}from"./Text-C8HBwI4b.js";import{I as j}from"./Icon-CTnhpE1d.js";import{D as Ce}from"./DateTimePicker-D4XVHtuF.js";import{P as Me,a as Re,b as ke}from"./Popover-A4hNnO1p.js";import{D as b}from"./Divider-CIm89-oy.js";import{F as La}from"./calendar-C26CUINT.js";import{F as Fa}from"./download-8bUW3GqY.js";import{F as Ia}from"./clock-DRhx3Wks.js";import{B as Aa}from"./Banner-CB0YVy4m.js";import{C as v}from"./Card-C5rr-ZzX.js";import{H as fe}from"./Heading-DjlBwQyS.js";import{B as ee}from"./Badge-CQf0SPqP.js";import{s as C}from"./subDays-DGkdSj43.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./chevron-left-D0P6BdMN.js";import"./index-HZDBD2ik.js";import"./chevron-down-CyV3wpL8.js";import"./useClickOutside-Bwal1TUL.js";import"./search-5X7N_xNn.js";import"./close-D2djoYoT.js";import"./stringCase-DaZl3p-i.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-CAHntWCK.js";import"./Checkbox-CMdwPcui.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./info-Cre7IJy9.js";function pe(t,s){const n=+L(t)-+L(s);return n<0?-1:n>0?1:n}function Wa(t,s){const n=L(t,s==null?void 0:s.in);return+T(n,s)==+P(n,s)}function Ea(t,s,n){const[a,o,d]=Pa(n==null?void 0:n.in,t,t,s),y=pe(o,d),g=Math.abs(ka(o,d));if(g<1)return 0;o.getMonth()===1&&o.getDate()>27&&o.setDate(30),o.setMonth(o.getMonth()-y*g);let f=pe(o,d)===-y;Wa(a)&&g===1&&pe(a,d)===1&&(f=!1);const I=y*(g-+f);return I===0?0:I}function oe(t,s){const n=L(t,s==null?void 0:s.in),a=n.getMonth(),o=a-a%3;return n.setMonth(o,1),n.setHours(0,0,0,0),n}function ie(t,s){const n=L(t,s==null?void 0:s.in),a=n.getMonth(),o=a-a%3+3;return n.setMonth(o,0),n.setHours(23,59,59,999),n}function N(t,s,n){return Sa(t,-s,n)}const Ya={Today:Oa,"This week":Ba,"This month":za,"This quarter":qa,"This year":Ha,"Last week":_a,"Last month":Ua,"Last quarter":Qa,"Last year":Ga};function Oa(){const t=new Date,s=w(t),n=T(t);return{from:s,to:n}}function Ba(){const t=new Date,s=ne(t),n=ae(t);return{from:s,to:n}}function za(){const t=new Date,s=re(t),n=P(t);return{from:s,to:n}}function qa(){const t=new Date,s=oe(t),n=ie(t);return{from:s,to:n}}function Ha(){const t=new Date,s=se(t),n=te(t);return{from:s,to:n}}function _a(){const t=new Date,s=ne(t),n=ae(t);return s.setDate(s.getDate()-7),n.setDate(n.getDate()-7),{from:s,to:n}}function Ua(){const t=new Date,s=re(t),n=P(t);return s.setMonth(s.getMonth()-1),n.setMonth(n.getMonth()-1),{from:s,to:n}}function Qa(){const t=new Date,s=oe(t),n=ie(t);return s.setMonth(s.getMonth()-3),n.setMonth(n.getMonth()-3),{from:s,to:n}}function Ga(){const t=new Date,s=se(t),n=te(t);return s.setFullYear(s.getFullYear()-1),n.setFullYear(n.getFullYear()-1),{from:s,to:n}}const va=({label:t,startDate:s,endDate:n,startDateFormat:a="dd MMM yyyy",endDateFormat:o="dd MMM yyyy",formatOptions:d,selected:y,onClick:g})=>{const f=()=>xa(s,n)?`${p(s,a,d)}`:`${p(s,a,d)} - ${p(n,o,d)}`;return e.jsxs(h,{variant:"unstyled",size:"sm",className:"flex-1 p-2 hover:bg-bg-weaker rounded-radius-md",innerClassName:"flex justify-between flex-1",onClick:()=>g&&g({from:s,to:n}),children:[e.jsx(l,{variant:"regular",children:t}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{variant:"regular",className:"text-text-weak",children:f()}),y?e.jsx(j,{icon:e.jsx(ga,{}),className:"text-text-accent"}):e.jsx("div",{className:"w-4 h-4"})]})]})};va.__docgenInfo={description:"",methods:[],displayName:"DateRangeTemplate",props:{label:{required:!0,tsType:{name:"string"},description:""},startDate:{required:!0,tsType:{name:"Date"},description:""},endDate:{required:!0,tsType:{name:"Date"},description:""},startDateFormat:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"dd MMM yyyy"',computed:!1}},endDateFormat:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"dd MMM yyyy"',computed:!1}},formatOptions:{required:!1,tsType:{name:"FormatOptions"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(dateRange: DateRange) => void",signature:{arguments:[{type:{name:"DateRange"},name:"dateRange"}],return:{name:"void"}}},description:""}}};const Se=()=>({from:new V,to:new V}),D=({value:t,onChange:s,required:n,fromDate:a,toDate:o,rangeTemplates:d=Ya,placeholder:y="Select Date Range",timePickerProps:g={},fromTimePickerProps:f={},toTimePickerProps:I={},error:he,dateFormat:A,dividerIndex:xe,showTemplateInValue:ya=!0,customLabel:le="Custom",timezone:M="UTC"})=>{const[ce,ge]=m.useState(!1),[i,me]=m.useState(t),[Da,ve]=m.useState(!1),[u,ye]=m.useState(Se()),Ta=xe||Math.floor(Object.keys(d).length/2)-1,[de,wa]=m.useState(),[W,R]=m.useState(),E=r=>{r&&W&&je(r,W)&&R(r),wa(r)},De=r=>{if(r!=null&&r.from&&(r!=null&&r.to)&&je(r.from,r.to)){ye({from:r.from,to:r.from});return}ye(r)},[Na,ja]=m.useState(320),k=m.useRef(),ue=m.useMemo(()=>Object.entries(d).map(([r,x])=>({label:r,range:x(M)})),[d,M]),Te=r=>!(i!=null&&i.from)||!(i!=null&&i.to)?!1:p(i.from,"yyyy-MM-dd-hh-mm-ss")===p(r.from,"yyyy-MM-dd-hh-mm-ss")&&p(i.to,"yyyy-MM-dd-hh-mm-ss")===p(r.to,"yyyy-MM-dd-hh-mm-ss"),ba=m.useMemo(()=>{const r=ue.find(x=>Te(x.range));return r?r==null?void 0:r.label:le},[ue,i,le]),Ca=r=>A?Array.isArray(A)?A[r==="from"?0:1]:A:"dd MMM yyyy",Y=(r,x)=>r?p(r,Ca(x)):"",Ma=r=>{me(r),s==null||s(r),De(Se())},Ra=r=>{me(r),s==null||s(r),ve(!1),ge(!1)},we=r=>{ve(r),De(i)};return m.useEffect(()=>{me(t)},[t]),m.useEffect(()=>{E(u==null?void 0:u.from),R(u==null?void 0:u.to)},[u]),m.useLayoutEffect(()=>{var r;if(k){const x=(r=k.current)==null?void 0:r.getBoundingClientRect();ja((x==null?void 0:x.width)||320)}},[k]),e.jsxs(Me,{open:ce,onOpenChange:ge,children:[e.jsx(Re,{asChild:!0,children:ya?e.jsx(h,{ref:k,variant:"outline",theme:"neutral",innerClassName:"justify-between w-full gap-2",className:O("flex text-left font-normal items-center px-3 gap-5 w-full justify-between bg-bg-default",!i&&"text-muted-foreground",{"border-border-critical":he}),icon:e.jsx(j,{icon:e.jsx(be,{}),size:"lg",className:O("text-text-weak",{"rotate-180":!ce})}),iconPosition:"right",children:i?e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"regular",children:ba}),e.jsx("div",{className:"flex items-center gap-2 ml-auto",children:e.jsxs(l,{variant:"regular",className:"text-text-weak",children:[Y(i==null?void 0:i.from,"from"),(i==null?void 0:i.from)&&(i==null?void 0:i.to)&&!xa(i==null?void 0:i.from,i==null?void 0:i.to)&&e.jsxs(e.Fragment,{children:[" - ",Y(i==null?void 0:i.to,"to")]})]})})]}):y}):e.jsx(h,{ref:k,variant:"outline",theme:"neutral",innerClassName:"w-full",className:O("justify-start text-left font-normal items-center px-3 gap-5 w-full bg-bg-default",!i&&"text-muted-foreground",{"border-border-critical":he}),icon:e.jsx(j,{icon:e.jsx(be,{}),size:"lg",className:O("text-text-weak",{"rotate-180":!ce})}),iconPosition:"right",children:i?e.jsxs(e.Fragment,{children:[Y(i.from,"from")," -"," ",Y(i.to,"to")]}):"Select Date Range"})}),e.jsx(ke,{className:"p-1",align:"start",style:{width:`${Na}px`},children:e.jsxs("div",{className:"flex flex-col w-full",children:[ue.map(({label:r,range:x},Ne)=>e.jsxs(m.Fragment,{children:[e.jsx(va,{label:r,startDate:x.from,endDate:x.to,onClick:Ma,selected:Te(x),formatOptions:{in:c(M)}}),Ne===Ta&&e.jsx(b,{className:"my-1"})]},Ne)),e.jsx(b,{className:"my-1"}),e.jsxs(Me,{open:Da,onOpenChange:we,children:[e.jsx(Re,{asChild:!0,children:e.jsxs(h,{variant:"unstyled",size:"sm",className:"flex-1 p-2 hover:bg-bg-weaker rounded-radius-md",innerClassName:"flex justify-between flex-1",children:[e.jsx(l,{variant:"regular",children:le}),e.jsx(j,{icon:e.jsx(Va,{}),className:"text-text-weak"})]})}),e.jsxs(ke,{side:"right",sideOffset:8,className:"p-0",children:[e.jsxs("div",{className:"p-3 flex gap-2",children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(l,{variant:"medium",children:"From"}),e.jsx(Ce,{withoutSaveButton:!0,autoFocus:!0,date:de,onDateChange:E,onChange:E,required:n,fromDate:a,toDate:o,timezone:M,className:"border-0 shadow-none",...g,...f})]}),e.jsx("div",{className:"self-end mb-2",children:"-"}),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(l,{variant:"medium",children:"To"}),e.jsx(Ce,{withoutSaveButton:!0,autoFocus:!0,date:W,onChange:R,onDateChange:R,required:n,fromDate:de,toDate:o,timezone:M,className:"border-0 shadow-none",...g,...I})]})]}),e.jsx(b,{className:"my-1"}),e.jsxs("div",{className:"flex justify-end gap-4 p-3",children:[e.jsx(h,{variant:"outline",theme:"neutral",size:"sm",className:"w-[70px]",onClick:()=>{E(u==null?void 0:u.from),R(u==null?void 0:u.to),we(!1)},children:"Cancel"}),e.jsx(h,{size:"sm",className:"w-[70px]",disabled:!(u!=null&&u.from)||!(u!=null&&u.to),onClick:()=>{Ra(u&&{from:de,to:W})},children:"Apply"})]})]})]})]})})]})};D.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{timezone:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"UTC"',computed:!1}},value:{required:!1,tsType:{name:"union",raw:"DateRange | undefined",elements:[{name:"DateRange"},{name:"undefined"}]},description:""},showTemplateInValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},dividerIndex:{required:!1,tsType:{name:"number"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select Date Range"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: DateRange | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | undefined",elements:[{name:"DateRange"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},fromDate:{required:!1,tsType:{name:"Date"},description:""},rangeTemplates:{required:!1,tsType:{name:"union",raw:`| typeof RANGE_TEMPLATES
| Record<string, (timezone?: string) => DateRange>`,elements:[{name:"RANGE_TEMPLATES"},{name:"Record",elements:[{name:"string"},{name:"signature",type:"function",raw:"(timezone?: string) => DateRange",signature:{arguments:[{type:{name:"string"},name:"timezone"}],return:{name:"DateRange"}}}],raw:"Record<string, (timezone?: string) => DateRange>"}]},description:"",defaultValue:{value:`{
  Today: getTodayRange,
  "This week": getThisWeekRange,
  "This month": getThisMonthRange,
  "This quarter": getThisQuarterRange,
  "This year": getThisYearRange,
  "Last week": getLastWeekRange,
  "Last month": getLastMonthRange,
  "Last quarter": getLastQuarterRange,
  "Last year": getLastYearRange,
}`,computed:!1}},toDate:{required:!1,tsType:{name:"Date"},description:""},timePickerProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<typeof DateTimePicker>",elements:[{name:"DateTimePicker"}]}],raw:`Partial<
  React.ComponentPropsWithoutRef<typeof DateTimePicker>
>`},description:"",defaultValue:{value:"{}",computed:!1}},fromTimePickerProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<typeof DateTimePicker>",elements:[{name:"DateTimePicker"}]}],raw:`Partial<
  React.ComponentPropsWithoutRef<typeof DateTimePicker>
>`},description:"",defaultValue:{value:"{}",computed:!1}},toTimePickerProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ReactComponentPropsWithoutRef",raw:"React.ComponentPropsWithoutRef<typeof DateTimePicker>",elements:[{name:"DateTimePicker"}]}],raw:`Partial<
  React.ComponentPropsWithoutRef<typeof DateTimePicker>
>`},description:"",defaultValue:{value:"{}",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:""},dateFormat:{required:!1,tsType:{name:"union",raw:"string | [string, string]",elements:[{name:"string"},{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]}]},description:""},customLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Custom"',computed:!1}}}};const F=t=>{const s={Today:a=>({from:w(new Date,a?{in:c(a)}:void 0),to:T(new Date,a?{in:c(a)}:void 0)}),Yesterday:a=>({from:w(C(new Date,1),a?{in:c(a)}:void 0),to:T(C(new Date,1),a?{in:c(a)}:void 0)}),"This Week":a=>({from:ne(new Date,a?{in:c(a)}:void 0),to:ae(new Date,a?{in:c(a)}:void 0)}),"Last Week":a=>({from:ne(C(new Date,7),a?{in:c(a)}:void 0),to:ae(C(new Date,7),a?{in:c(a)}:void 0)}),"This Month":a=>({from:re(new Date,a?{in:c(a)}:void 0),to:P(new Date,a?{in:c(a)}:void 0)}),"Last Month":a=>({from:re(N(new Date,1),a?{in:c(a)}:void 0),to:P(N(new Date,1),a?{in:c(a)}:void 0)}),"This Quarter":a=>({from:oe(new Date,a?{in:c(a)}:void 0),to:ie(new Date,a?{in:c(a)}:void 0)}),"Last Quarter":a=>({from:oe(N(new Date,3),a?{in:c(a)}:void 0),to:ie(N(new Date,3),a?{in:c(a)}:void 0)}),"This Year":a=>({from:se(new Date,a?{in:c(a)}:void 0),to:te(new Date,a?{in:c(a)}:void 0)}),"Last Year":a=>({from:se(N(new Date,12),a?{in:c(a)}:void 0),to:te(N(new Date,12),a?{in:c(a)}:void 0)}),"Last 7 Days":a=>({from:w(C(new Date,6),a?{in:c(a)}:void 0),to:T(new Date,a?{in:c(a)}:void 0)}),"Last 30 Days":a=>({from:w(C(new Date,29),a?{in:c(a)}:void 0),to:T(new Date,a?{in:c(a)}:void 0)}),"Last 3 Months":a=>({from:w(N(new Date,3),a?{in:c(a)}:void 0),to:T(new Date,a?{in:c(a)}:void 0)}),"Last 6 Months":a=>({from:w(N(new Date,6),a?{in:c(a)}:void 0),to:T(new Date,a?{in:c(a)}:void 0)})},n={};return t.forEach(a=>{s[a]&&(n[a]=s[a])}),n},Ht={title:"Xenith UI/Components/Date Range Picker",component:D,decorators:t=>e.jsx("div",{className:"py-10 w-[600px] h-[400px]  pb-40",children:e.jsx(t,{})}),tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The DateRangePicker component provides a comprehensive date range selection interface with predefined templates and custom range support. Built with timezone awareness and datetime picker integration, it's perfect for analytics, reporting, and filtering interfaces.

### Key Features
- **Predefined Templates**: Quick selection of common date ranges (Today, This Week, Last Month, etc.)
- **Custom Range**: Full datetime picker for precise range selection
- **Timezone Support**: Handle dates across different timezones
- **Template Display**: Show selected template name in the value
- **Date Constraints**: Set minimum and maximum selectable dates
- **Time Selection**: Optional time picker for precise datetime ranges
- **Accessible**: Full keyboard navigation and ARIA support
- **Customizable**: Configure templates, labels, and behavior

### Usage
\`\`\`tsx
import { DateRangePicker } from "@xenithlabs/xenith-ui";
import { pickDateTemplate, RANGE_NAME } from "@xenithlabs/xenith-ui/utils";

// Basic usage
<DateRangePicker 
  value={dateRange}
  onChange={setDateRange}
/>

// With custom templates
<DateRangePicker 
  value={dateRange}
  onChange={setDateRange}
  rangeTemplates={pickDateTemplate([
    RANGE_NAME.Today,
    RANGE_NAME.ThisWeek,
    RANGE_NAME.ThisMonth,
    RANGE_NAME.LastMonth,
  ])}
/>

// With timezone support
<DateRangePicker 
  value={dateRange}
  onChange={setDateRange}
  timezone="America/New_York"
  timePickerProps={{
    dateTransformer: (d) => transpose(d, timezone)
  }}
/>

// For CSV export with constraints
<DateRangePicker 
  value={dateRange}
  onChange={setDateRange}
  showTemplateInValue
  toDate={addYears(new Date(), 1)}
  fromDate={addYears(new Date(), -1)}
/>
\`\`\`

### Component Props

- **value** (DateRange | undefined): Currently selected date range
- **onChange** ((value: DateRange | undefined) => void): Callback when range changes
- **timezone** (string): IANA timezone or UTC offset. Default: "UTC"
- **rangeTemplates** (Record<string, (timezone?: string) => DateRange>): Custom range templates
- **showTemplateInValue** (boolean): Show template name in button. Default: true
- **dividerIndex** (number): Position of divider in template list
- **placeholder** (string): Placeholder text. Default: "Select Date Range"
- **fromDate** (Date): Minimum selectable date
- **toDate** (Date): Maximum selectable date
- **timePickerProps** (object): Props for time picker integration
- **fromTimePickerProps** (object): Props for "from" time picker
- **toTimePickerProps** (object): Props for "to" time picker
- **error** (boolean): Show error state styling
- **dateFormat** (string | [string, string]): Date format(s) for display
- **customLabel** (string): Label for custom range option. Default: "Custom"
- **required** (boolean): Whether selection is required

### Common Use Cases

1. **Analytics Dashboards**: Date filtering for charts and metrics
2. **CSV Export Dialogs**: Date range selection for data exports
3. **Report Generation**: Period selection for reports
4. **Transaction Filtering**: Filter lists by date ranges
5. **Activity Logs**: View logs within specific time periods

### Date Range Templates

The component supports various predefined templates through the \`pickDateTemplate\` utility:
- Today, Yesterday
- This Week, Last Week
- This Month, Last Month
- This Quarter, Last Quarter
- This Year, Last Year
- Last 7/30/90 days
- Last 3/6 months

### Integration Patterns

1. **With Form Validation**: Integrate with react-hook-form for validation
2. **Dynamic Constraints**: Update min/max dates based on business logic
3. **Timezone Handling**: Convert dates for different user timezones
4. **Custom Templates**: Define business-specific date ranges
        `}}},argTypes:{value:{control:{type:"object"},description:"Currently selected date range",table:{type:{summary:"DateRange | undefined"}}},onChange:{action:"onChange",description:"Callback when date range changes",table:{type:{summary:"(value: DateRange | undefined) => void"}}},timezone:{control:{type:"text"},description:"IANA timezone or UTC offset",table:{type:{summary:"string"},defaultValue:{summary:'"UTC"'}}},showTemplateInValue:{control:{type:"boolean"},description:"Show template name in button value",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},placeholder:{control:{type:"text"},description:"Placeholder text when no range selected",table:{type:{summary:"string"},defaultValue:{summary:'"Select Date Range"'}}},customLabel:{control:{type:"text"},description:"Label for custom range option",table:{type:{summary:"string"},defaultValue:{summary:'"Custom"'}}},dividerIndex:{control:{type:"number"},description:"Position of divider in template list",table:{type:{summary:"number"}}},fromDate:{control:{type:"date"},description:"Minimum selectable date",table:{type:{summary:"Date"}}},toDate:{control:{type:"date"},description:"Maximum selectable date",table:{type:{summary:"Date"}}},error:{control:{type:"boolean"},description:"Show error state styling",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},dateFormat:{control:{type:"text"},description:"Date format for display",table:{type:{summary:"string | [string, string]"},defaultValue:{summary:'"dd MMM yyyy"'}}},required:{control:{type:"boolean"},description:"Whether selection is required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},B={args:{placeholder:"Select date range"}},z={name:"With Template in Value",args:{showTemplateInValue:!0,value:{from:new Date,to:new Date}}},q={name:"Without Template in Value",args:{showTemplateInValue:!1,value:{from:new Date,to:new Date}}},H={name:"With Error State",args:{error:!0,placeholder:"Required field"}},_={name:"With Custom Label",args:{customLabel:"Custom range",showTemplateInValue:!0}},U={name:"Controlled Example",render:t=>{const[s,n]=m.useState();return e.jsxs("div",{className:"space-y-4",children:[e.jsx(D,{...t,value:s,onChange:n,showTemplateInValue:!0}),e.jsxs(v,{className:"p-4 space-y-2",children:[e.jsx(l,{variant:"regular",className:"text-text-weak",children:"Selected Range:"}),s?e.jsxs("div",{className:"space-y-1",children:[e.jsxs(l,{variant:"medium",children:["From: ",s.from&&p(s.from,"PPP 'at' HH:mm")]}),e.jsxs(l,{variant:"medium",children:["To: ",s.to&&p(s.to,"PPP 'at' HH:mm")]})]}):e.jsx(l,{variant:"medium",children:"No range selected"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{size:"sm",variant:"outline",onClick:()=>n({from:w(new Date),to:T(new Date)}),children:"Today"}),e.jsx(h,{size:"sm",variant:"outline",onClick:()=>n(void 0),children:"Clear"})]})]})}},Q={name:"Analytics Dashboard Pattern",decorators:t=>e.jsx("div",{className:"py-10 w-[800px] h-[500px] pb-40",children:e.jsx(t,{})}),render:()=>{const[t,s]=m.useState(),[n,a]=m.useState("USD"),o="America/New_York";return e.jsx(v,{className:"p-6",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx(fe,{variant:"titleLg",children:"Analytics Overview"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs("select",{className:"px-3 py-2 border rounded",value:n,onChange:d=>a(d.target.value),children:[e.jsx("option",{value:"USD",children:"USD"}),e.jsx("option",{value:"EUR",children:"EUR"}),e.jsx("option",{value:"GBP",children:"GBP"})]}),e.jsx(D,{timezone:o,customLabel:"Custom range",rangeTemplates:F(["This Week","This Month","This Quarter","This Year","Last Week","Last Month","Last Quarter","Last Year"]),value:t,onChange:s,dividerIndex:3,showTemplateInValue:!0,toDate:S(new Date,1)})]})]}),e.jsx(b,{}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{variant:"medium",className:"text-text-weak",children:"Total Revenue"}),e.jsxs(l,{variant:"subtitle",className:"font-semibold",children:[n," 125,430.00"]}),e.jsx(ee,{variant:"soft",theme:"success",children:"+12.5%"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{variant:"medium",className:"text-text-weak",children:"Transactions"}),e.jsx(l,{variant:"subtitle",className:"font-semibold",children:"1,234"}),e.jsx(ee,{variant:"soft",theme:"success",children:"+8.2%"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{variant:"medium",className:"text-text-weak",children:"Avg. Value"}),e.jsxs(l,{variant:"subtitle",className:"font-semibold",children:[n," 101.70"]}),e.jsx(ee,{variant:"soft",theme:"neutral",children:"+0.5%"})]})]}),t&&e.jsx("div",{className:"p-3 bg-surface-subtle rounded",children:e.jsxs(l,{variant:"regular",className:"text-text-weak",children:[e.jsx(j,{icon:e.jsx(La,{}),className:"w-4 h-4 inline mr-1"}),"Showing data from ",p(t.from,"MMM d, yyyy")," to ",p(t.to,"MMM d, yyyy")," ","(",o,")"]})})]})})}},G={name:"CSV Export Dialog Pattern",decorators:t=>e.jsx("div",{className:"py-10 w-[700px] h-[600px] pb-40",children:e.jsx(t,{})}),render:()=>{const[t,s]=m.useState({from:w(new Date),to:T(new Date)}),[n,a]=m.useState("UTC"),[o,d]=m.useState(!1),y=t.from&&t.to&&Ea(t.to,t.from)>6,g=()=>{d(!0),setTimeout(()=>{d(!1),alert("CSV export started! Check your email.")},2e3)};return e.jsxs(v,{className:"p-6",children:[e.jsx(fe,{variant:"titleMd",className:"mb-6",children:"Download CSV"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(Aa,{theme:"accent",children:"All CSV files will be emailed to you. Files with up to 5,000 rows will also be downloaded directly from the browser."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Timezone"}),e.jsxs("select",{className:"w-full px-3 py-2 border rounded",value:n,onChange:f=>a(f.target.value),children:[e.jsx("option",{value:"UTC",children:"UTC"}),e.jsx("option",{value:"America/New_York",children:"America/New_York"}),e.jsx("option",{value:"Europe/London",children:"Europe/London"}),e.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"text-sm font-medium flex gap-1",children:["Date Range",e.jsxs("span",{className:"text-text-weak",children:["(All timestamps are in ",n,")"]})]}),e.jsx(D,{timezone:n,timePickerProps:{dateTransformer:f=>{if(f)return new V(f,n)}},showTemplateInValue:!0,rangeTemplates:F(["Today","This Week","This Month","Last Month","Last 3 Months","Last 6 Months"]),value:t,onChange:f=>f&&s(f),error:y}),y&&e.jsx(l,{variant:"regular",className:"text-critical",children:"Date range cannot exceed 6 months"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Recipient Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border rounded",placeholder:"user@example.com",defaultValue:"user@example.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Settlement Type"}),e.jsxs("select",{className:"w-full px-3 py-2 border rounded",children:[e.jsx("option",{children:"Same Currency"}),e.jsx("option",{children:"Cross Currency"})]})]})]}),e.jsx(b,{}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx(h,{variant:"outline",theme:"neutral",children:"Cancel"}),e.jsx(h,{theme:"primary",onClick:g,loading:o,disabled:y,icon:e.jsx(j,{icon:e.jsx(Fa,{})}),children:"Download"})]})]})]})}},$={name:"Filter Panel Usage",decorators:t=>e.jsx("div",{className:"py-10 w-[400px] h-[500px] pb-40",children:e.jsx(t,{})}),render:()=>{const[t,s]=m.useState(),[n,a]=m.useState(!1);m.useEffect(()=>{a(!!t)},[t]);const o=()=>{s(void 0)};return e.jsxs(v,{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx(fe,{variant:"titleSm",children:"Filters"}),n&&e.jsx(h,{size:"xs",variant:"link",onClick:o,children:"Reset All"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{variant:"medium",children:"Transaction Date"}),e.jsx(D,{value:t,onChange:s,showTemplateInValue:!1,rangeTemplates:F(["Today","Yesterday","Last 7 Days","Last 30 Days","This Month","Last Month"]),placeholder:"All dates",customLabel:"Custom dates"})]}),e.jsx(b,{}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{variant:"medium",children:"Status"}),e.jsxs("select",{className:"w-full px-3 py-2 border rounded",children:[e.jsx("option",{children:"All statuses"}),e.jsx("option",{children:"Completed"}),e.jsx("option",{children:"Pending"}),e.jsx("option",{children:"Failed"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{variant:"medium",children:"Amount Range"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"number",className:"flex-1 px-3 py-2 border rounded",placeholder:"Min"}),e.jsx("span",{className:"self-center",children:"—"}),e.jsx("input",{type:"number",className:"flex-1 px-3 py-2 border rounded",placeholder:"Max"})]})]}),t&&e.jsx(v,{className:"p-3 bg-surface-subtle border-0",children:e.jsxs(l,{variant:"regular",className:"text-text-weak",children:[e.jsx(j,{icon:e.jsx(ga,{}),className:"w-4 h-4 inline mr-1 text-success"}),"Filtering transactions from ",p(t.from,"MMM d")," to ",p(t.to,"MMM d, yyyy")]})})]})]})}},Z={name:"With Timezone Support",render:()=>{const[t,s]=m.useState(),n="America/New_York",a=(o,d)=>typeof o=="string"?new V(o,d):new V(o,d);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(D,{timezone:n,timePickerProps:{dateTransformer:o=>o?a(o,n):void 0},value:t?{from:a(t.from,n),to:a(t.to,n)}:void 0,onChange:o=>s(o?{from:o.from.toISOString(),to:o.to.toISOString()}:void 0),showTemplateInValue:!0}),t&&e.jsxs(v,{className:"p-4 space-y-3",children:[e.jsxs("div",{children:[e.jsx(l,{variant:"regular",className:"text-text-weak",children:"Timezone:"}),e.jsx(ee,{variant:"soft",children:n})]}),e.jsx(b,{}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{variant:"regular",className:"text-text-weak",children:"Selected Range (ISO):"}),e.jsxs("div",{className:"font-mono text-xs space-y-1",children:[e.jsxs("div",{children:["From: ",t.from]}),e.jsxs("div",{children:["To: ",t.to]})]})]}),e.jsx(b,{}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(l,{variant:"regular",className:"text-text-weak",children:["Display (",n,"):"]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{children:["From: ",p(a(t.from,n),"PPP 'at' HH:mm zzz")]}),e.jsxs("div",{children:["To: ",p(a(t.to,n),"PPP 'at' HH:mm zzz")]})]})]})]})]})}},K={name:"With Date Constraints",render:()=>{const[t,s]=m.useState(),[n,a]=m.useState("future"),o=()=>{switch(n){case"future":return{fromDate:new Date,toDate:S(new Date,1)};case"past":return{fromDate:S(new Date,-1),toDate:new Date};case"year":return{fromDate:S(new Date,-1),toDate:S(new Date,1)};default:return{}}};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(v,{className:"p-4",children:[e.jsx(l,{variant:"medium",className:"mb-3",children:"Constraint Type:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{size:"sm",variant:n==="future"?"solid":"outline",onClick:()=>a("future"),children:"Future Only"}),e.jsx(h,{size:"sm",variant:n==="past"?"solid":"outline",onClick:()=>a("past"),children:"Past Only"}),e.jsx(h,{size:"sm",variant:n==="year"?"solid":"outline",onClick:()=>a("year"),children:"±1 Year"})]})]}),e.jsx(D,{value:t,onChange:s,...o(),showTemplateInValue:!0}),e.jsx(v,{className:"p-3 bg-surface-subtle",children:e.jsxs(l,{variant:"regular",className:"text-text-weak",children:[e.jsx(j,{icon:e.jsx(Ia,{}),className:"w-4 h-4 inline mr-1"}),n==="future"&&"Only future dates can be selected",n==="past"&&"Only past dates can be selected",n==="year"&&"Dates within 1 year from today can be selected"]})})]})}},X={name:"Custom Range Templates",render:()=>{const[t,s]=m.useState(),n={"Fiscal Q1":()=>({from:new Date(new Date().getFullYear(),0,1),to:new Date(new Date().getFullYear(),2,31)}),"Fiscal Q2":()=>({from:new Date(new Date().getFullYear(),3,1),to:new Date(new Date().getFullYear(),5,30)}),"Holiday Season":()=>({from:new Date(new Date().getFullYear(),10,15),to:new Date(new Date().getFullYear(),11,31)}),"Summer Break":()=>({from:new Date(new Date().getFullYear(),5,1),to:new Date(new Date().getFullYear(),7,31)})};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(v,{className:"p-4",children:[e.jsx(l,{variant:"medium",className:"mb-2",children:"Business Calendar Ranges"}),e.jsx(l,{variant:"regular",className:"text-text-weak",children:"Custom templates for fiscal periods and seasons"})]}),e.jsx(D,{value:t,onChange:s,rangeTemplates:n,showTemplateInValue:!0,customLabel:"Other dates",dividerIndex:1}),t&&e.jsxs(v,{className:"p-4",children:[e.jsx(l,{variant:"regular",className:"text-text-weak mb-2",children:"Selected Period:"}),e.jsxs(l,{variant:"medium",children:[p(t.from,"MMMM d")," - ",p(t.to,"MMMM d, yyyy")]})]})]})}},J={name:"Mobile Responsive",decorators:t=>e.jsx("div",{className:"py-10 w-[350px] h-[400px] pb-40",children:e.jsx(t,{})}),render:()=>{const[t,s]=m.useState();return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(v,{className:"p-4",children:[e.jsx(l,{variant:"regular",className:"text-text-weak mb-3",children:"Mobile view (template name hidden)"}),e.jsx(D,{value:t,onChange:s,showTemplateInValue:!!0,rangeTemplates:F(["Today","This Week","This Month","Last Month"]),placeholder:"Select dates"})]}),e.jsxs(v,{className:"p-4",children:[e.jsx(l,{variant:"regular",className:"text-text-weak mb-3",children:"Desktop view (template name shown)"}),e.jsx(D,{value:t,onChange:s,showTemplateInValue:!0,rangeTemplates:F(["Today","This Week","This Month","Last Month"]),placeholder:"Select dates"})]})]})}};var Pe,Ve,Le;B.parameters={...B.parameters,docs:{...(Pe=B.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    placeholder: "Select date range"
  }
}`,...(Le=(Ve=B.parameters)==null?void 0:Ve.docs)==null?void 0:Le.source}}};var Fe,Ie,Ae;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: "With Template in Value",
  args: {
    showTemplateInValue: true,
    value: {
      from: new Date(),
      to: new Date()
    }
  }
}`,...(Ae=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source}}};var We,Ee,Ye;q.parameters={...q.parameters,docs:{...(We=q.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: "Without Template in Value",
  args: {
    showTemplateInValue: false,
    value: {
      from: new Date(),
      to: new Date()
    }
  }
}`,...(Ye=(Ee=q.parameters)==null?void 0:Ee.docs)==null?void 0:Ye.source}}};var Oe,Be,ze;H.parameters={...H.parameters,docs:{...(Oe=H.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: "With Error State",
  args: {
    error: true,
    placeholder: "Required field"
  }
}`,...(ze=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var qe,He,_e;_.parameters={..._.parameters,docs:{...(qe=_.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: "With Custom Label",
  args: {
    customLabel: "Custom range",
    showTemplateInValue: true
  }
}`,...(_e=(He=_.parameters)==null?void 0:He.docs)==null?void 0:_e.source}}};var Ue,Qe,Ge;U.parameters={...U.parameters,docs:{...(Ue=U.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: "Controlled Example",
  render: args => {
    const [value, setValue] = useState<DateRange | undefined>();
    return <div className="space-y-4">
        <DateRangePicker {...args} value={value} onChange={setValue} showTemplateInValue />
        <Card className="p-4 space-y-2">
          <Text variant="regular" className="text-text-weak">
            Selected Range:
          </Text>
          {value ? <div className="space-y-1">
              <Text variant="medium">
                From: {value.from && format(value.from, "PPP 'at' HH:mm")}
              </Text>
              <Text variant="medium">
                To: {value.to && format(value.to, "PPP 'at' HH:mm")}
              </Text>
            </div> : <Text variant="medium">No range selected</Text>}
        </Card>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setValue({
          from: startOfDay(new Date()),
          to: endOfDay(new Date())
        })}>
            Today
          </Button>
          <Button size="sm" variant="outline" onClick={() => setValue(undefined)}>
            Clear
          </Button>
        </div>
      </div>;
  }
}`,...(Ge=(Qe=U.parameters)==null?void 0:Qe.docs)==null?void 0:Ge.source}}};var $e,Ze,Ke;Q.parameters={...Q.parameters,docs:{...($e=Q.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  name: "Analytics Dashboard Pattern",
  decorators: Story => <div className="py-10 w-[800px] h-[500px] pb-40">
      <Story />
    </div>,
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    const [currency, setCurrency] = useState("USD");
    const timezone = "America/New_York";
    return <Card className="p-6">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <Heading variant="titleLg">Analytics Overview</Heading>
            <div className="flex gap-3">
              <select className="px-3 py-2 border rounded" value={currency} onChange={e => setCurrency(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              <DateRangePicker timezone={timezone} customLabel="Custom range" rangeTemplates={createRangeTemplates(["This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year"])} value={dateRange} onChange={setDateRange} dividerIndex={3} showTemplateInValue toDate={addYears(new Date(), 1)} />
            </div>
          </div>
          
          <Divider />
          
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <Text variant="medium" className="text-text-weak">Total Revenue</Text>
              <Text variant="subtitle" className="font-semibold">
                {currency} 125,430.00
              </Text>
              <Badge variant="soft" theme="success">+12.5%</Badge>
            </div>
            <div className="space-y-2">
              <Text variant="medium" className="text-text-weak">Transactions</Text>
              <Text variant="subtitle" className="font-semibold">1,234</Text>
              <Badge variant="soft" theme="success">+8.2%</Badge>
            </div>
            <div className="space-y-2">
              <Text variant="medium" className="text-text-weak">Avg. Value</Text>
              <Text variant="subtitle" className="font-semibold">
                {currency} 101.70
              </Text>
              <Badge variant="soft" theme="neutral">+0.5%</Badge>
            </div>
          </div>
          
          {dateRange && <div className="p-3 bg-surface-subtle rounded">
              <Text variant="regular" className="text-text-weak">
                <Icon icon={<CalendarIcon />} className="w-4 h-4 inline mr-1" />
                Showing data from {format(dateRange.from!, "MMM d, yyyy")} to {format(dateRange.to!, "MMM d, yyyy")}
                {" "}({timezone})
              </Text>
            </div>}
        </div>
      </Card>;
  }
}`,...(Ke=(Ze=Q.parameters)==null?void 0:Ze.docs)==null?void 0:Ke.source}}};var Xe,Je,ea;G.parameters={...G.parameters,docs:{...(Xe=G.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  name: "CSV Export Dialog Pattern",
  decorators: Story => <div className="py-10 w-[700px] h-[600px] pb-40">
      <Story />
    </div>,
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange>({
      from: startOfDay(new Date()),
      to: endOfDay(new Date())
    });
    const [timezone, setTimezone] = useState("UTC");
    const [isExporting, setIsExporting] = useState(false);
    const isInvalidDate = dateRange.from && dateRange.to && differenceInMonths(dateRange.to, dateRange.from) > 6;
    const handleExport = () => {
      setIsExporting(true);
      setTimeout(() => {
        setIsExporting(false);
        alert("CSV export started! Check your email.");
      }, 2000);
    };
    return <Card className="p-6">
        <Heading variant="titleMd" className="mb-6">Download CSV</Heading>
        
        <div className="space-y-6">
          <Banner theme="accent">
            All CSV files will be emailed to you. Files with up to 5,000
            rows will also be downloaded directly from the browser.
          </Banner>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Timezone</label>
              <select className="w-full px-3 py-2 border rounded" value={timezone} onChange={e => setTimezone(e.target.value)}>
                <option value="UTC">UTC</option>
                <option value="America/New_York">America/New_York</option>
                <option value="Europe/London">Europe/London</option>
                <option value="Asia/Singapore">Asia/Singapore</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex gap-1">
                Date Range
                <span className="text-text-weak">
                  (All timestamps are in {timezone})
                </span>
              </label>
              <DateRangePicker timezone={timezone} timePickerProps={{
              dateTransformer: d => {
                if (!d) return undefined;
                return new TZDate(d, timezone);
              }
            }} showTemplateInValue rangeTemplates={createRangeTemplates(["Today", "This Week", "This Month", "Last Month", "Last 3 Months", "Last 6 Months"])} value={dateRange} onChange={v => v && setDateRange(v)} error={isInvalidDate} />
              {isInvalidDate && <Text variant="regular" className="text-critical">
                  Date range cannot exceed 6 months
                </Text>}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Recipient Email</label>
              <input type="email" className="w-full px-3 py-2 border rounded" placeholder="user@example.com" defaultValue="user@example.com" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Settlement Type</label>
              <select className="w-full px-3 py-2 border rounded">
                <option>Same Currency</option>
                <option>Cross Currency</option>
              </select>
            </div>
          </div>
          
          <Divider />
          
          <div className="flex justify-end gap-3">
            <Button variant="outline" theme="neutral">
              Cancel
            </Button>
            <Button theme="primary" onClick={handleExport} loading={isExporting} disabled={isInvalidDate} icon={<Icon icon={<DownloadIcon />} />}>
              Download
            </Button>
          </div>
        </div>
      </Card>;
  }
}`,...(ea=(Je=G.parameters)==null?void 0:Je.docs)==null?void 0:ea.source}}};var aa,ta,na;$.parameters={...$.parameters,docs:{...(aa=$.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: "Filter Panel Usage",
  decorators: Story => <div className="py-10 w-[400px] h-[500px] pb-40">
      <Story />
    </div>,
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    const [hasFilters, setHasFilters] = useState(false);
    useEffect(() => {
      setHasFilters(!!dateRange);
    }, [dateRange]);
    const handleReset = () => {
      setDateRange(undefined);
    };
    return <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <Heading variant="titleSm">Filters</Heading>
          {hasFilters && <Button size="xs" variant="link" onClick={handleReset}>
              Reset All
            </Button>}
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Text variant="medium">Transaction Date</Text>
            <DateRangePicker value={dateRange} onChange={setDateRange} showTemplateInValue={false} rangeTemplates={createRangeTemplates(["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Month", "Last Month"])} placeholder="All dates" customLabel="Custom dates" />
          </div>
          
          <Divider />
          
          <div className="space-y-2">
            <Text variant="medium">Status</Text>
            <select className="w-full px-3 py-2 border rounded">
              <option>All statuses</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <Text variant="medium">Amount Range</Text>
            <div className="flex gap-2">
              <input type="number" className="flex-1 px-3 py-2 border rounded" placeholder="Min" />
              <span className="self-center">—</span>
              <input type="number" className="flex-1 px-3 py-2 border rounded" placeholder="Max" />
            </div>
          </div>
          
          {dateRange && <Card className="p-3 bg-surface-subtle border-0">
              <Text variant="regular" className="text-text-weak">
                <Icon icon={<CheckIcon />} className="w-4 h-4 inline mr-1 text-success" />
                Filtering transactions from {format(dateRange.from!, "MMM d")} to {format(dateRange.to!, "MMM d, yyyy")}
              </Text>
            </Card>}
        </div>
      </Card>;
  }
}`,...(na=(ta=$.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var sa,ra,oa;Z.parameters={...Z.parameters,docs:{...(sa=Z.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  name: "With Timezone Support",
  render: () => {
    const [value, setValue] = useState<{
      from: string;
      to: string;
    } | undefined>();
    const timezone = "America/New_York";
    const transpose = (date: Date | string, tz: string) => {
      if (typeof date === "string") {
        return new TZDate(date, tz);
      }
      return new TZDate(date, tz);
    };
    return <div className="space-y-4">
        <DateRangePicker timezone={timezone} timePickerProps={{
        dateTransformer: v => v ? transpose(v, timezone) : undefined
      }} value={value ? {
        from: transpose(value.from, timezone),
        to: transpose(value.to, timezone)
      } : undefined} onChange={v => setValue(v ? {
        from: v.from!.toISOString(),
        to: v.to!.toISOString()
      } : undefined)} showTemplateInValue />
        
        {value && <Card className="p-4 space-y-3">
            <div>
              <Text variant="regular" className="text-text-weak">Timezone:</Text>
              <Badge variant="soft">{timezone}</Badge>
            </div>
            <Divider />
            <div className="space-y-2">
              <Text variant="regular" className="text-text-weak">Selected Range (ISO):</Text>
              <div className="font-mono text-xs space-y-1">
                <div>From: {value.from}</div>
                <div>To: {value.to}</div>
              </div>
            </div>
            <Divider />
            <div className="space-y-2">
              <Text variant="regular" className="text-text-weak">Display ({timezone}):</Text>
              <div className="space-y-1">
                <div>From: {format(transpose(value.from, timezone), "PPP 'at' HH:mm zzz")}</div>
                <div>To: {format(transpose(value.to, timezone), "PPP 'at' HH:mm zzz")}</div>
              </div>
            </div>
          </Card>}
      </div>;
  }
}`,...(oa=(ra=Z.parameters)==null?void 0:ra.docs)==null?void 0:oa.source}}};var ia,la,ca;K.parameters={...K.parameters,docs:{...(ia=K.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  name: "With Date Constraints",
  render: () => {
    const [value, setValue] = useState<DateRange | undefined>();
    const [constraint, setConstraint] = useState("future");
    const getConstraints = () => {
      switch (constraint) {
        case "future":
          return {
            fromDate: new Date(),
            toDate: addYears(new Date(), 1)
          };
        case "past":
          return {
            fromDate: addYears(new Date(), -1),
            toDate: new Date()
          };
        case "year":
          return {
            fromDate: addYears(new Date(), -1),
            toDate: addYears(new Date(), 1)
          };
        default:
          return {};
      }
    };
    return <div className="space-y-4">
        <Card className="p-4">
          <Text variant="medium" className="mb-3">Constraint Type:</Text>
          <div className="flex gap-2">
            <Button size="sm" variant={constraint === "future" ? "solid" : "outline"} onClick={() => setConstraint("future")}>
              Future Only
            </Button>
            <Button size="sm" variant={constraint === "past" ? "solid" : "outline"} onClick={() => setConstraint("past")}>
              Past Only
            </Button>
            <Button size="sm" variant={constraint === "year" ? "solid" : "outline"} onClick={() => setConstraint("year")}>
              ±1 Year
            </Button>
          </div>
        </Card>
        
        <DateRangePicker value={value} onChange={setValue} {...getConstraints()} showTemplateInValue />
        
        <Card className="p-3 bg-surface-subtle">
          <Text variant="regular" className="text-text-weak">
            <Icon icon={<ClockIcon />} className="w-4 h-4 inline mr-1" />
            {constraint === "future" && "Only future dates can be selected"}
            {constraint === "past" && "Only past dates can be selected"}
            {constraint === "year" && "Dates within 1 year from today can be selected"}
          </Text>
        </Card>
      </div>;
  }
}`,...(ca=(la=K.parameters)==null?void 0:la.docs)==null?void 0:ca.source}}};var ma,da,ua;X.parameters={...X.parameters,docs:{...(ma=X.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  name: "Custom Range Templates",
  render: () => {
    const [value, setValue] = useState<DateRange | undefined>();

    // Custom business-specific templates
    const customTemplates = {
      "Fiscal Q1": () => ({
        from: new Date(new Date().getFullYear(), 0, 1),
        to: new Date(new Date().getFullYear(), 2, 31)
      }),
      "Fiscal Q2": () => ({
        from: new Date(new Date().getFullYear(), 3, 1),
        to: new Date(new Date().getFullYear(), 5, 30)
      }),
      "Holiday Season": () => ({
        from: new Date(new Date().getFullYear(), 10, 15),
        to: new Date(new Date().getFullYear(), 11, 31)
      }),
      "Summer Break": () => ({
        from: new Date(new Date().getFullYear(), 5, 1),
        to: new Date(new Date().getFullYear(), 7, 31)
      })
    };
    return <div className="space-y-4">
        <Card className="p-4">
          <Text variant="medium" className="mb-2">Business Calendar Ranges</Text>
          <Text variant="regular" className="text-text-weak">
            Custom templates for fiscal periods and seasons
          </Text>
        </Card>
        
        <DateRangePicker value={value} onChange={setValue} rangeTemplates={customTemplates} showTemplateInValue customLabel="Other dates" dividerIndex={1} />
        
        {value && <Card className="p-4">
            <Text variant="regular" className="text-text-weak mb-2">
              Selected Period:
            </Text>
            <Text variant="medium">
              {format(value.from!, "MMMM d")} - {format(value.to!, "MMMM d, yyyy")}
            </Text>
          </Card>}
      </div>;
  }
}`,...(ua=(da=X.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var pa,fa,ha;J.parameters={...J.parameters,docs:{...(pa=J.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  name: "Mobile Responsive",
  decorators: Story => <div className="py-10 w-[350px] h-[400px] pb-40">
      <Story />
    </div>,
  render: () => {
    const [value, setValue] = useState<DateRange | undefined>();
    const isMobile = true; // Simulating mobile view

    return <div className="space-y-4">
        <Card className="p-4">
          <Text variant="regular" className="text-text-weak mb-3">
            Mobile view (template name hidden)
          </Text>
          <DateRangePicker value={value} onChange={setValue} showTemplateInValue={!isMobile} rangeTemplates={createRangeTemplates(["Today", "This Week", "This Month", "Last Month"])} placeholder="Select dates" />
        </Card>
        
        <Card className="p-4">
          <Text variant="regular" className="text-text-weak mb-3">
            Desktop view (template name shown)
          </Text>
          <DateRangePicker value={value} onChange={setValue} showTemplateInValue={true} rangeTemplates={createRangeTemplates(["Today", "This Week", "This Month", "Last Month"])} placeholder="Select dates" />
        </Card>
      </div>;
  }
}`,...(ha=(fa=J.parameters)==null?void 0:fa.docs)==null?void 0:ha.source}}};const _t=["Default","WithTemplateInValue","WithoutTemplateInValue","WithError","WithCustomLabel","ControlledExample","AnalyticsDashboard","CSVExportDialog","FilterPanel","WithTimezone","WithDateConstraints","CustomTemplates","MobileResponsive"];export{Q as AnalyticsDashboard,G as CSVExportDialog,U as ControlledExample,X as CustomTemplates,B as Default,$ as FilterPanel,J as MobileResponsive,_ as WithCustomLabel,K as WithDateConstraints,H as WithError,z as WithTemplateInValue,Z as WithTimezone,q as WithoutTemplateInValue,_t as __namedExportsOrder,Ht as default};
