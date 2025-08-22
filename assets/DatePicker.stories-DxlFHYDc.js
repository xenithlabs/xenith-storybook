import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as i}from"./index-DRjF_FHU.js";import"./mini-FlV67GHA.js";import{t as De}from"./index-BOZ7EmoW.js";import{c as ge}from"./cn-8RyR4BqC.js";import{P as Se,a as Ce,b as Ne}from"./Popover-A4hNnO1p.js";import{F as je}from"./calendar-C26CUINT.js";import{C as we,T as z}from"./Calendar-CfLxHAi1.js";import{B as m}from"./Button-DAgrt3Vy.js";import{I as he}from"./Icon-CTnhpE1d.js";import{f as u,s as Te}from"./format-DX5nf6U1.js";import{F as ke}from"./clock-DRhx3Wks.js";import{a as D}from"./startOfMonth-CZilhnlQ.js";import{T as n}from"./Text-C8HBwI4b.js";import{C as p}from"./Card-C5rr-ZzX.js";import{H as b}from"./Heading-DjlBwQyS.js";import{D as ve}from"./Divider-CIm89-oy.js";import{s as F}from"./subDays-DGkdSj43.js";import{e as ye}from"./endOfDay-irTNPJGS.js";import{B as be}from"./Badge-tKG4rD-8.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./toDate-SX-ecmdR.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./chevron-left-D0P6BdMN.js";import"./chevron-right-D4FvqfWr.js";import"./index-HZDBD2ik.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";const r=({date:a,fromDate:s,toDate:t,onChange:o,error:l,timezone:c="UTC",...d})=>{const[x,P]=i.useState(a),fe=i.useMemo(()=>{if(s&&t)return{before:s,after:t};if(s)return{before:s};if(t)return{after:t}},[s,t]);return i.useEffect(()=>{P(a)},[a]),e.jsxs(Se,{children:[e.jsx(Ce,{asChild:!0,children:e.jsx(m,{variant:"outline",theme:"neutral",className:ge("justify-start text-left font-normal items-center",!x&&"text-muted-foreground",{"border-border-critical":l}),icon:e.jsx(he,{icon:e.jsx(je,{})}),children:x?u(x,"dd MMM yyy",{in:De(c)}):e.jsx("div",{className:"text-text-weaker",children:d.placeholder??"Pick a date"})})}),e.jsx(Ne,{className:"w-auto p-0",children:e.jsx(we,{timeZone:c,mode:"single",disabled:fe,startMonth:s,endMonth:t,selected:x,defaultMonth:x,onSelect:M=>{P(M),o&&o(M)},autoFocus:!0})})]})};r.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{date:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},fromDate:{required:!1,tsType:{name:"Date"},description:""},toDate:{required:!1,tsType:{name:"Date"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},timezone:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"UTC"',computed:!1}}},composes:["Omit"]};const pa={title:"Xenith UI/Components/Date Picker",component:r,decorators:a=>e.jsx("div",{className:"py-10 w-[300px] h-[400px]  pb-40",children:e.jsx(a,{})}),tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The DatePicker component provides an intuitive date selection interface with calendar popup. Built on top of the Calendar component, it offers timezone support, date range constraints, and integration with form controls.

### Key Features
- **Calendar Popup**: Click to open calendar selection
- **Timezone Support**: Handle dates in different timezones
- **Date Constraints**: Set minimum and maximum selectable dates
- **Form Integration**: Works with react-hook-form
- **Accessible**: Full keyboard navigation and ARIA support
- **Format Display**: Customizable date display format
- **Error States**: Visual feedback for validation errors
- **Controlled Component**: Full control over selected date

### Usage
\`\`\`tsx
import { DatePicker } from "@xenithlabs/xenith-ui";

// Basic usage
<DatePicker 
  date={selectedDate}
  onChange={setSelectedDate}
/>

// With constraints
<DatePicker 
  date={selectedDate}
  onChange={setSelectedDate}
  fromDate={new Date()} // Minimum date
  toDate={addDays(new Date(), 30)} // Maximum date
/>

// With timezone
<DatePicker 
  date={selectedDate}
  onChange={setSelectedDate}
  timezone="America/New_York"
/>

// In a form with validation
<FormField
  name="date"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Select Date</FormLabel>
      <FormControl>
        <DatePicker
          date={field.value}
          onChange={field.onChange}
          error={!!errors.date}
          placeholder="Choose a date"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
\`\`\`

### Component Props

- **date** (Date | undefined): Currently selected date
- **onChange** ((date?: Date) => void): Callback when date is selected
- **fromDate** (Date): Minimum selectable date
- **toDate** (Date): Maximum selectable date
- **error** (boolean): Show error state styling
- **timezone** (string): IANA timezone or UTC offset. Default: "UTC"
- **placeholder** (string): Placeholder text when no date selected
- **...inputProps**: Additional HTML input attributes

### Common Patterns

1. **Date Range Selection**: Use two DatePickers for start/end dates
2. **CSV Export Forms**: Common in download dialogs with date filters
3. **Filter Panels**: Date filtering in data tables and reports
4. **Scheduling**: Appointment and event scheduling interfaces
5. **Transaction Filters**: Filter by created/updated dates

### Timezone Handling

The component supports timezone-aware date selection:
- Uses @date-fns/tz for timezone operations
- Displays dates in specified timezone
- Returns Date objects in local time
- Preserves time information when switching dates

### Integration Examples

1. **With Form Validation**:
   - Required date validation
   - Date range validation
   - Business day validation
   - Custom validation rules

2. **Dynamic Constraints**:
   - Update min/max based on other fields
   - Disable past/future dates
   - Block specific date ranges
   - Holiday/weekend restrictions

3. **Advanced Formatting**:
   - Custom date format display
   - Relative date descriptions
   - Localized date formats
   - Multiple timezone display
        `}}},argTypes:{date:{control:{type:"date"},description:"Currently selected date",table:{type:{summary:"Date | undefined"}}},onChange:{action:"onChange",description:"Callback when date is selected",table:{type:{summary:"(date?: Date) => void"}}},fromDate:{control:{type:"date"},description:"Minimum selectable date",table:{type:{summary:"Date"}}},toDate:{control:{type:"date"},description:"Maximum selectable date",table:{type:{summary:"Date"}}},error:{control:{type:"boolean"},description:"Show error state styling",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},timezone:{control:{type:"text"},description:"IANA timezone or UTC offset",table:{type:{summary:"string"},defaultValue:{summary:'"UTC"'}}},placeholder:{control:{type:"text"},description:"Placeholder text when no date selected",table:{type:{summary:"string"},defaultValue:{summary:'"Pick a date"'}}}}},h={args:{placeholder:"Select a date"}},v={name:"With Selected Date",args:{date:new Date}},y={name:"With Date Constraints",args:{fromDate:new Date,toDate:D(new Date,30),placeholder:"Select date (next 30 days)"}},f={name:"With Error State",args:{error:!0,placeholder:"Required field"}},g={name:"With Timezone",args:{timezone:"America/New_York",date:new Date}},S={name:"Controlled Example",render:()=>{const[a,s]=i.useState(void 0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{date:a,onChange:s,placeholder:"Choose a date"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(n,{variant:"regular",className:"text-text-weak",children:["Selected: ",a?u(a,"PPP"):"None"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(m,{size:"sm",variant:"outline",onClick:()=>s(new Date),children:"Today"}),e.jsx(m,{size:"sm",variant:"outline",onClick:()=>s(D(new Date,7)),children:"Next Week"}),e.jsx(m,{size:"sm",variant:"outline",onClick:()=>s(void 0),children:"Clear"})]})]})]})}},C={name:"Date Range Selection",decorators:a=>e.jsx("div",{className:"py-10 w-[600px] h-[400px] pb-40",children:e.jsx(a,{})}),render:()=>{const[a,s]=i.useState(void 0),[t,o]=i.useState(void 0);return e.jsxs(p,{className:"p-6",children:[e.jsx(b,{variant:"titleSm",className:"mb-4",children:"Select Date Range"}),e.jsxs("div",{className:"grid grid-cols-[1fr_auto_1fr] gap-4 items-end",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{variant:"medium",children:"From"}),e.jsx(r,{date:a,onChange:s,toDate:t||void 0,placeholder:"Start date"})]}),e.jsx("div",{className:"pb-2",children:e.jsx(n,{variant:"medium",className:"text-text-weak",children:"—"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{variant:"medium",children:"To"}),e.jsx(r,{date:t,onChange:o,fromDate:a||void 0,placeholder:"End date"})]})]}),(a||t)&&e.jsxs(e.Fragment,{children:[e.jsx(ve,{className:"my-4"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{variant:"regular",className:"text-text-weak",children:"Selected range:"}),e.jsxs(n,{variant:"medium",children:[a&&u(a,"MMM d, yyyy"),a&&t&&" to ",t&&u(t,"MMM d, yyyy")]})]})]})]})}},N={name:"CSV Download Dialog Pattern",decorators:a=>e.jsx("div",{className:"py-10 w-[500px] h-[400px] pb-40",children:e.jsx(a,{})}),render:()=>{const[a,s]=i.useState(F(new Date,30)),[t,o]=i.useState(new Date),l=d=>F(d,90),c=d=>D(d,90);return e.jsxs(p,{className:"p-6",children:[e.jsx(b,{variant:"titleMd",className:"mb-6",children:"Download CSV"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-[1fr_fit-content(100px)_1fr] gap-2 items-start",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{variant:"medium",children:"From"}),e.jsx(r,{date:a,onChange:d=>s(d||new Date),placeholder:"Select date",fromDate:l(t),toDate:t<new Date?t:new Date})]}),e.jsx("div",{className:"flex items-end h-full",children:e.jsx("div",{className:"flex items-center h-10",children:"-"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{variant:"medium",children:"To"}),e.jsx(r,{date:t,onChange:d=>o(d||new Date),placeholder:"Select date",fromDate:a,toDate:new Date>c(a)?c(a):new Date})]})]}),e.jsx("div",{className:"p-3 bg-surface-subtle rounded",children:e.jsxs(n,{variant:"regular",className:"text-text-weak",children:[e.jsx(he,{icon:e.jsx(ke,{}),className:"w-4 h-4 inline mr-1"}),"Maximum date range: 90 days"]})}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx(m,{variant:"outline",theme:"neutral",children:"Cancel"}),e.jsx(m,{theme:"primary",children:"Download"})]})]})]})}},j={name:"Filter Panel Usage",decorators:a=>e.jsx("div",{className:"py-10 w-[400px] h-[500px] pb-40",children:e.jsx(a,{})}),render:()=>{const[a,s]=i.useState(),[t,o]=i.useState(),l="America/New_York",c=()=>{s(void 0),o(void 0)};return e.jsxs(p,{className:"p-6",children:[e.jsx(b,{variant:"titleSm",className:"mb-4",children:"Filters"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(n,{variant:"medium",children:"Updated At"}),(a||t)&&e.jsx(m,{size:"xs",variant:"link",onClick:c,children:"Reset"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex-1",children:e.jsx(r,{timezone:l,date:a,onChange:d=>s(d?Te(d):void 0),placeholder:"From",toDate:t})}),e.jsx(n,{variant:"medium",className:"text-text-weak",children:"-"}),e.jsx("div",{className:"flex-1",children:e.jsx(r,{timezone:l,date:t,onChange:d=>o(d?ye(d):void 0),placeholder:"To",fromDate:a})})]})]}),e.jsx(ve,{}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(n,{variant:"regular",className:"text-text-weak",children:["Timezone: ",l]}),(a||t)&&e.jsxs("div",{className:"p-3 bg-surface-subtle rounded space-y-1",children:[e.jsx(n,{variant:"regular",children:"Filtering by updated date:"}),e.jsxs(n,{variant:"regular",className:"text-text-weak",children:[a&&u(a,"MMM d, yyyy HH:mm"),a&&t&&" to ",t&&u(t,"MMM d, yyyy HH:mm")]})]})]})]})]})}},w={name:"UTC Timezone Example",render:()=>{const[a,s]=i.useState(void 0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{date:a?new z(a,"UTC"):void 0,onChange:t=>{s(t?ye(t,{in:De("UTC")}).toISOString():void 0)},timezone:"UTC",placeholder:"Select date (UTC)"}),a&&e.jsxs(p,{className:"p-4 space-y-2",children:[e.jsx(n,{variant:"regular",className:"text-text-weak",children:"Selected date (UTC):"}),e.jsx(be,{variant:"soft",children:u(new z(a,"UTC"),"PPP 'at' HH:mm:ss 'UTC'")}),e.jsx(n,{variant:"regular",className:"text-text-weak mt-2",children:"ISO String:"}),e.jsx(n,{variant:"regular",className:"font-mono",children:a})]})]})}},T={name:"Validation States",decorators:a=>e.jsx("div",{className:"py-10 w-[400px] h-[500px] pb-40",children:e.jsx(a,{})}),render:()=>{const[a,s]=i.useState(),[t,o]=i.useState(),[l,c]=i.useState();return e.jsxs("div",{className:"space-y-6",children:[e.jsx(p,{className:"p-4 space-y-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{variant:"medium",children:"Required Field"}),e.jsx(r,{date:a,onChange:s,error:!a,placeholder:"This field is required"}),!a&&e.jsx(n,{variant:"regular",className:"text-critical",children:"Please select a date"})]})}),e.jsx(p,{className:"p-4 space-y-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{variant:"medium",children:"Future Dates Only"}),e.jsx(r,{date:t,onChange:o,fromDate:D(new Date,1),placeholder:"Select future date"}),e.jsx(n,{variant:"regular",className:"text-text-weak",children:"Past dates are disabled"})]})}),e.jsx(p,{className:"p-4 space-y-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{variant:"medium",children:"Within 7 Days"}),e.jsx(r,{date:l,onChange:c,fromDate:new Date,toDate:D(new Date,7),placeholder:"Next 7 days only"}),e.jsx(n,{variant:"regular",className:"text-text-weak",children:"Select a date within the next week"})]})})]})}},k={name:"Custom Placeholders",decorators:a=>e.jsx("div",{className:"py-10 w-[350px] h-[400px] pb-40",children:e.jsx(a,{})}),render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{placeholder:"Select transaction date"}),e.jsx(r,{placeholder:"Choose delivery date"}),e.jsx(r,{placeholder:"Pick appointment date"}),e.jsx(r,{placeholder:"Set expiration date"}),e.jsx(r,{placeholder:"Schedule for later"})]})};var A,E,U;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    placeholder: "Select a date"
  }
}`,...(U=(E=h.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var W,H,R;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "With Selected Date",
  args: {
    date: new Date()
  }
}`,...(R=(H=v.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var B,I,V;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "With Date Constraints",
  args: {
    fromDate: new Date(),
    toDate: addDays(new Date(), 30),
    placeholder: "Select date (next 30 days)"
  }
}`,...(V=(I=y.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var _,O,q;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "With Error State",
  args: {
    error: true,
    placeholder: "Required field"
  }
}`,...(q=(O=f.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var Y,L,Z;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "With Timezone",
  args: {
    timezone: "America/New_York",
    date: new Date()
  }
}`,...(Z=(L=g.parameters)==null?void 0:L.docs)==null?void 0:Z.source}}};var K,X,$;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Controlled Example",
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <div className="space-y-4">
        <DatePicker date={date} onChange={setDate} placeholder="Choose a date" />
        <div className="space-y-2">
          <Text variant="regular" className="text-text-weak">
            Selected: {date ? format(date, "PPP") : "None"}
          </Text>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setDate(new Date())}>
              Today
            </Button>
            <Button size="sm" variant="outline" onClick={() => setDate(addDays(new Date(), 7))}>
              Next Week
            </Button>
            <Button size="sm" variant="outline" onClick={() => setDate(undefined)}>
              Clear
            </Button>
          </div>
        </div>
      </div>;
  }
}`,...($=(X=S.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var G,J,Q;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Date Range Selection",
  decorators: Story => <div className="py-10 w-[600px] h-[400px] pb-40">
      <Story />
    </div>,
  render: () => {
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    return <Card className="p-6">
        <Heading variant="titleSm" className="mb-4">Select Date Range</Heading>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-end">
          <div className="space-y-2">
            <Text variant="medium">From</Text>
            <DatePicker date={startDate} onChange={setStartDate} toDate={endDate || undefined} placeholder="Start date" />
          </div>
          <div className="pb-2">
            <Text variant="medium" className="text-text-weak">—</Text>
          </div>
          <div className="space-y-2">
            <Text variant="medium">To</Text>
            <DatePicker date={endDate} onChange={setEndDate} fromDate={startDate || undefined} placeholder="End date" />
          </div>
        </div>
        {(startDate || endDate) && <>
            <Divider className="my-4" />
            <div className="space-y-2">
              <Text variant="regular" className="text-text-weak">
                Selected range:
              </Text>
              <Text variant="medium">
                {startDate && format(startDate, "MMM d, yyyy")}
                {startDate && endDate && " to "}
                {endDate && format(endDate, "MMM d, yyyy")}
              </Text>
            </div>
          </>}
      </Card>;
  }
}`,...(Q=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,ae,te;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "CSV Download Dialog Pattern",
  decorators: Story => <div className="py-10 w-[500px] h-[400px] pb-40">
      <Story />
    </div>,
  render: () => {
    const [startDate, setStartDate] = useState<Date>(subDays(new Date(), 30));
    const [endDate, setEndDate] = useState<Date>(new Date());
    const getCsvMinStartDate = (endDate: Date) => {
      return subDays(endDate, 90); // Max 90 days range
    };
    const getCsvMaxEndDate = (startDate: Date) => {
      return addDays(startDate, 90); // Max 90 days range
    };
    return <Card className="p-6">
        <Heading variant="titleMd" className="mb-6">Download CSV</Heading>
        <div className="space-y-6">
          <div className="grid grid-cols-[1fr_fit-content(100px)_1fr] gap-2 items-start">
            <div className="space-y-2">
              <Text variant="medium">From</Text>
              <DatePicker date={startDate} onChange={date => setStartDate(date || new Date())} placeholder="Select date" fromDate={getCsvMinStartDate(endDate)} toDate={endDate < new Date() ? endDate : new Date()} />
            </div>
            <div className="flex items-end h-full">
              <div className="flex items-center h-10">-</div>
            </div>
            <div className="space-y-2">
              <Text variant="medium">To</Text>
              <DatePicker date={endDate} onChange={date => setEndDate(date || new Date())} placeholder="Select date" fromDate={startDate} toDate={new Date() > getCsvMaxEndDate(startDate) ? getCsvMaxEndDate(startDate) : new Date()} />
            </div>
          </div>
          
          <div className="p-3 bg-surface-subtle rounded">
            <Text variant="regular" className="text-text-weak">
              <Icon icon={<ClockIcon />} className="w-4 h-4 inline mr-1" />
              Maximum date range: 90 days
            </Text>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button variant="outline" theme="neutral">
              Cancel
            </Button>
            <Button theme="primary">
              Download
            </Button>
          </div>
        </div>
      </Card>;
  }
}`,...(te=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "Filter Panel Usage",
  decorators: Story => <div className="py-10 w-[400px] h-[500px] pb-40">
      <Story />
    </div>,
  render: () => {
    const [updatedAtStart, setUpdatedAtStart] = useState<Date | undefined>();
    const [updatedAtEnd, setUpdatedAtEnd] = useState<Date | undefined>();
    const timezone = "America/New_York";
    const handleReset = () => {
      setUpdatedAtStart(undefined);
      setUpdatedAtEnd(undefined);
    };
    return <Card className="p-6">
        <Heading variant="titleSm" className="mb-4">Filters</Heading>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Text variant="medium">Updated At</Text>
              {(updatedAtStart || updatedAtEnd) && <Button size="xs" variant="link" onClick={handleReset}>
                  Reset
                </Button>}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <DatePicker timezone={timezone} date={updatedAtStart} onChange={v => setUpdatedAtStart(v ? startOfDay(v) : undefined)} placeholder="From" toDate={updatedAtEnd} />
              </div>
              <Text variant="medium" className="text-text-weak">-</Text>
              <div className="flex-1">
                <DatePicker timezone={timezone} date={updatedAtEnd} onChange={v => setUpdatedAtEnd(v ? endOfDay(v) : undefined)} placeholder="To" fromDate={updatedAtStart} />
              </div>
            </div>
          </div>
          
          <Divider />
          
          <div className="space-y-2">
            <Text variant="regular" className="text-text-weak">
              Timezone: {timezone}
            </Text>
            {(updatedAtStart || updatedAtEnd) && <div className="p-3 bg-surface-subtle rounded space-y-1">
                <Text variant="regular">
                  Filtering by updated date:
                </Text>
                <Text variant="regular" className="text-text-weak">
                  {updatedAtStart && format(updatedAtStart, "MMM d, yyyy HH:mm")}
                  {updatedAtStart && updatedAtEnd && " to "}
                  {updatedAtEnd && format(updatedAtEnd, "MMM d, yyyy HH:mm")}
                </Text>
              </div>}
          </div>
        </div>
      </Card>;
  }
}`,...(re=(se=j.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var de,ie,oe;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "UTC Timezone Example",
  render: () => {
    const [date, setDate] = useState<string | undefined>(undefined);
    return <div className="space-y-4">
        <DatePicker date={date ? new TZDate(date, "UTC") : undefined} onChange={date => {
        setDate(date ? endOfDay(date, {
          in: tz("UTC")
        }).toISOString() : undefined);
      }} timezone="UTC" placeholder="Select date (UTC)" />
        {date && <Card className="p-4 space-y-2">
            <Text variant="regular" className="text-text-weak">
              Selected date (UTC):
            </Text>
            <Badge variant="soft">
              {format(new TZDate(date, "UTC"), "PPP 'at' HH:mm:ss 'UTC'")}
            </Badge>
            <Text variant="regular" className="text-text-weak mt-2">
              ISO String:
            </Text>
            <Text variant="regular" className="font-mono">
              {date}
            </Text>
          </Card>}
      </div>;
  }
}`,...(oe=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,ce,me;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "Validation States",
  decorators: Story => <div className="py-10 w-[400px] h-[500px] pb-40">
      <Story />
    </div>,
  render: () => {
    const [date1, setDate1] = useState<Date | undefined>();
    const [date2, setDate2] = useState<Date | undefined>();
    const [date3, setDate3] = useState<Date | undefined>();
    return <div className="space-y-6">
        <Card className="p-4 space-y-4">
          <div className="space-y-2">
            <Text variant="medium">Required Field</Text>
            <DatePicker date={date1} onChange={setDate1} error={!date1} placeholder="This field is required" />
            {!date1 && <Text variant="regular" className="text-critical">
                Please select a date
              </Text>}
          </div>
        </Card>
        
        <Card className="p-4 space-y-4">
          <div className="space-y-2">
            <Text variant="medium">Future Dates Only</Text>
            <DatePicker date={date2} onChange={setDate2} fromDate={addDays(new Date(), 1)} placeholder="Select future date" />
            <Text variant="regular" className="text-text-weak">
              Past dates are disabled
            </Text>
          </div>
        </Card>
        
        <Card className="p-4 space-y-4">
          <div className="space-y-2">
            <Text variant="medium">Within 7 Days</Text>
            <DatePicker date={date3} onChange={setDate3} fromDate={new Date()} toDate={addDays(new Date(), 7)} placeholder="Next 7 days only" />
            <Text variant="regular" className="text-text-weak">
              Select a date within the next week
            </Text>
          </div>
        </Card>
      </div>;
  }
}`,...(me=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,ue,xe;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "Custom Placeholders",
  decorators: Story => <div className="py-10 w-[350px] h-[400px] pb-40">
      <Story />
    </div>,
  render: () => {
    return <div className="space-y-4">
        <DatePicker placeholder="Select transaction date" />
        <DatePicker placeholder="Choose delivery date" />
        <DatePicker placeholder="Pick appointment date" />
        <DatePicker placeholder="Set expiration date" />
        <DatePicker placeholder="Schedule for later" />
      </div>;
  }
}`,...(xe=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:xe.source}}};const ua=["Default","WithSelectedDate","WithDateConstraints","WithError","WithTimezone","ControlledExample","DateRangeSelection","CSVDownloadDialog","FilterPanel","WithUTCTimezone","ValidationStates","CustomPlaceholders"];export{N as CSVDownloadDialog,S as ControlledExample,k as CustomPlaceholders,C as DateRangeSelection,h as Default,j as FilterPanel,T as ValidationStates,y as WithDateConstraints,f as WithError,v as WithSelectedDate,g as WithTimezone,w as WithUTCTimezone,ua as __namedExportsOrder,pa as default};
