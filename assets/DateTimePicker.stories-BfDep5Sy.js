import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{D as l}from"./DateTimePicker-D4XVHtuF.js";import{r as i}from"./index-DRjF_FHU.js";import{i as J,T as w}from"./Calendar-CGVhkGMw.js";import"./mini-FlV67GHA.js";import{t as v}from"./index-CSP0bfvs.js";import{s as S,f as X}from"./format-DX5nf6U1.js";import"./cn-8RyR4BqC.js";import"./calendar-C26CUINT.js";import"./clock-DRhx3Wks.js";import"./Divider-CIm89-oy.js";import"./Popover-A4hNnO1p.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./Button-47JPF8V9.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-x1yxmyQd.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";import"./Icon-CTnhpE1d.js";import"./Text-C8HBwI4b.js";import"./useClickOutside-Bwal1TUL.js";import"./search-5X7N_xNn.js";import"./close-D2djoYoT.js";import"./stringCase-DaZl3p-i.js";import"./check-C0C6JGvp.js";import"./index-CAHntWCK.js";import"./Heading-DjlBwQyS.js";import"./Checkbox-CMdwPcui.js";import"./index-Bu1UD4WD.js";import"./startOfMonth-CZilhnlQ.js";import"./toDate-SX-ecmdR.js";import"./chevron-left-D0P6BdMN.js";import"./chevron-right-D4FvqfWr.js";const We={title:"Xenith UI/Components/Date Time Picker",component:l,decorators:t=>e.jsx("div",{className:"py-10 w-[300px] h-[400px]  pb-40",children:e.jsx(t,{})}),args:{date:new Date,onChange:t=>console.log(t)},tags:["autodocs"]},c={render:()=>{const[t,s]=i.useState(S(new Date).toISOString());return e.jsx(l,{date:t?new Date(t):void 0,onChange:a=>{s(a==null?void 0:a.toISOString())}})}},m={render:()=>{const[t,s]=i.useState(S(new Date).toISOString());return i.useEffect(()=>{const a=setInterval(()=>{console.log("new date arrived"),s(r=>{if(!r)return;const n=new Date(r);return n.setDate(n.getDate()+1),n.toISOString()})},1e3);return()=>clearInterval(a)},[s]),e.jsx(l,{date:t?new Date(t):void 0,onChange:a=>{s(a==null?void 0:a.toISOString())},withoutSaveButton:!0})}},u={render:()=>{const[t,s]=i.useState(S(new Date).toISOString()),[a,r]=i.useState(S(new Date).toISOString());return i.useEffect(()=>{!t||!a||J(new Date(t),new Date(a))&&r(new Date(t).toISOString())},[t]),e.jsxs("div",{children:[e.jsx(l,{date:t?new Date(t):void 0,onChange:n=>{s(n==null?void 0:n.toISOString())},withoutSaveButton:!0}),e.jsx(l,{date:a?new Date(a):void 0,onChange:n=>{r(n==null?void 0:n.toISOString())},withoutSaveButton:!0})]})}},p={render:()=>{const[t,s]=i.useState(new w(new Date,"UTC").toISOString()),a=r=>{if(r)return new w(r,"UTC")};return e.jsx(l,{dateTransformer:a,formatFn:(r,n)=>X(v("Asia/Singapore")(r),n,{in:v("utc")}),date:t?new w(t,"UTC"):void 0,onChange:r=>{console.log("onchange",r==null?void 0:r.toISOString()),s(r==null?void 0:r.toISOString())},withoutSaveButton:!0})}},h={args:{fromDate:new Date}},g={render:()=>{const[t,s]=i.useState({}),[a,r]=i.useState(!1),[n,d]=i.useState(),x=t.requestedDateStart,b=o=>{if(o)return new Date(o)},Z=(o="UTC")=>f=>b(f),$=()=>{d(x),r(!0)},G=()=>{n&&s({...t,requestedDateStart:n}),r(!1)},H=()=>{const o=new Date;o.setHours(14,30,45);const f=o.toISOString();s({...t,requestedDateStart:f})};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 border rounded",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Test Scenario: Query Param Filter Bug"}),e.jsx("p",{className:"text-sm mb-4 text-gray-600",children:"This simulates the actual filter behavior with query params where the hour resets to 00 when reopening."}),e.jsxs("div",{className:"mb-4 p-3 bg-gray-100 rounded",children:[e.jsx("h4",{className:"font-semibold text-sm mb-2",children:"Query Params (Applied Filters):"}),e.jsx("pre",{className:"text-xs overflow-auto",children:JSON.stringify(t,null,2)||"{}"}),x&&e.jsxs("p",{className:"text-sm mt-2",children:[e.jsx("strong",{children:"Applied time:"})," ",new Date(x).toLocaleString()]})]}),e.jsxs("div",{className:"flex gap-2 mb-4",children:[e.jsx("button",{className:"px-4 py-2 bg-green-500 text-white rounded",onClick:H,children:"1. Set Initial Date (14:30:45)"}),e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded",onClick:$,disabled:a,children:"2. Open Filter"}),e.jsx("button",{className:"px-4 py-2 bg-red-500 text-white rounded",onClick:()=>s({}),children:"Clear All"})]}),a&&e.jsxs("div",{className:"border-2 border-blue-400 p-4 rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Filter Sheet (Open)"}),e.jsxs("div",{className:"mb-3 p-2 bg-yellow-50 rounded",children:[e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Current temp value:"})," ",n||"undefined"]}),n&&e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Temp time:"})," ",new Date(n).toLocaleString()]})]}),e.jsx(l,{timezone:"UTC",dateTransformer:Z("UTC"),withoutSaveButton:!0,date:n?b(n):void 0,onChange:o=>{console.log("DateTimePicker onChange:",o),d(o?o.toISOString():void 0)}},`picker-${a}`),e.jsxs("div",{className:"flex gap-2 mt-4",children:[e.jsx("button",{className:"px-4 py-2 bg-green-500 text-white rounded",onClick:G,children:"Apply Filter"}),e.jsx("button",{className:"px-4 py-2 bg-gray-500 text-white rounded",onClick:()=>r(!1),children:"Cancel"})]})]})]}),e.jsxs("div",{className:"p-4 border rounded bg-red-50",children:[e.jsx("h4",{className:"font-semibold mb-2 text-red-700",children:"🐛 Bug Reproduction Steps:"}),e.jsxs("ol",{className:"list-decimal list-inside text-sm space-y-1",children:[e.jsx("li",{children:'Click "Set Initial Date" - this sets 14:30:45 in query params'}),e.jsx("li",{children:'Click "Open Filter" - the DateTimePicker should show 14:30:45'}),e.jsx("li",{children:'Click "Apply Filter" to save it'}),e.jsx("li",{children:'Click "Open Filter" again to reopen'}),e.jsx("li",{children:e.jsx("strong",{className:"text-red-600",children:"BUG: The hour input shows 00 instead of 14!"})}),e.jsx("li",{children:'If you click "Apply Filter" now, it saves the wrong time (00:30:45)'}),e.jsx("li",{children:"This breaks the filter because the time is now incorrect"})]}),e.jsxs("div",{className:"mt-3 p-2 bg-red-100 rounded",children:[e.jsx("p",{className:"text-xs font-semibold",children:"Root Cause:"}),e.jsx("p",{className:"text-xs",children:`The DateTimePicker's internal hour/minute/second states are initialized with "00" when the component mounts, but they're not updated when the date prop is provided on mount.`})]})]})]})}},D={render:()=>{const[t,s]=i.useState([void 0,new Date(2024,0,1,10,30,0).toISOString(),new Date(2024,1,15,15,45,30).toISOString(),new Date(2024,2,20,18,0,0).toISOString()]),[a,r]=i.useState(0);return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 border rounded",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Test: Rapid Date Prop Changes"}),e.jsx("p",{className:"text-sm mb-4",children:"Tests if time inputs update correctly when date prop changes rapidly."}),e.jsx("div",{className:"space-x-2 mb-4",children:t.map((n,d)=>e.jsx("button",{className:`px-3 py-1 rounded ${a===d?"bg-blue-500 text-white":"bg-gray-200"}`,onClick:()=>r(d),children:n?new Date(n).toLocaleString():"No Date"},d))}),e.jsx(l,{date:t[a]?new Date(t[a]):void 0,onChange:n=>{const d=[...t];d[a]=n==null?void 0:n.toISOString(),s(d)},withoutSaveButton:!0}),e.jsx("div",{className:"mt-4 p-2 bg-gray-100 rounded",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Current selection:"})," ",t[a]?new Date(t[a]).toLocaleString():"No date selected"]})})]})})}};var y,N,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<string | undefined>(startOfDay(new Date()).toISOString());
    return <DateTimePicker date={date ? new Date(date) : undefined} onChange={(date: Date | undefined) => {
      setDate(date?.toISOString());
    }} />;
  }
}`,...(C=(N=c.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var T,O,I;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(I=(O=m.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var j,k,F;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(k=u.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var P,A,B;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var q,V,U;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    fromDate: new Date()
  }
}`,...(U=(V=h.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var W,E,z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    // Simulate query params storage
    const [queryParams, setQueryParams] = useState<Record<string, string>>({});
    const [filterOpen, setFilterOpen] = useState(false);

    // Temporary filter value (before applying)
    const [tempDateValue, setTempDateValue] = useState<string | undefined>();

    // Applied filter value (simulating query params)
    const appliedDateValue = queryParams.requestedDateStart;

    // Transform function similar to the one used in filter sheet
    const transpose = (dateString?: string) => {
      if (!dateString) return undefined;
      return new Date(dateString);
    };
    const getTransposeWithTimezone = (_timezone: string = "UTC") => (date?: Date | string | null) => transpose(date as string);

    // When opening filter, load from query params
    const handleOpenFilter = () => {
      setTempDateValue(appliedDateValue);
      setFilterOpen(true);
    };

    // Apply filter (save to query params)
    const handleApplyFilter = () => {
      if (tempDateValue) {
        setQueryParams({
          ...queryParams,
          requestedDateStart: tempDateValue
        });
      }
      setFilterOpen(false);
    };

    // Set initial date with specific time
    const setInitialDate = () => {
      const initialDate = new Date();
      initialDate.setHours(14, 30, 45);
      const isoString = initialDate.toISOString();
      setQueryParams({
        ...queryParams,
        requestedDateStart: isoString
      });
    };
    return <div className="space-y-4">
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Test Scenario: Query Param Filter Bug</h3>
          <p className="text-sm mb-4 text-gray-600">
            This simulates the actual filter behavior with query params where the hour resets to 00 when reopening.
          </p>
          
          {/* Query Params Display */}
          <div className="mb-4 p-3 bg-gray-100 rounded">
            <h4 className="font-semibold text-sm mb-2">Query Params (Applied Filters):</h4>
            <pre className="text-xs overflow-auto">
              {JSON.stringify(queryParams, null, 2) || "{}"}
            </pre>
            {appliedDateValue && <p className="text-sm mt-2">
                <strong>Applied time:</strong> {new Date(appliedDateValue).toLocaleString()}
              </p>}
          </div>
          
          {/* Control Buttons */}
          <div className="flex gap-2 mb-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={setInitialDate}>
              1. Set Initial Date (14:30:45)
            </button>
            
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleOpenFilter} disabled={filterOpen}>
              2. Open Filter
            </button>
            
            <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => setQueryParams({})}>
              Clear All
            </button>
          </div>
          
          {/* Filter Sheet */}
          {filterOpen && <div className="border-2 border-blue-400 p-4 rounded">
              <h4 className="font-semibold mb-2">Filter Sheet (Open)</h4>
              
              {/* Temp value display */}
              <div className="mb-3 p-2 bg-yellow-50 rounded">
                <p className="text-xs">
                  <strong>Current temp value:</strong> {tempDateValue || "undefined"}
                </p>
                {tempDateValue && <p className="text-xs">
                    <strong>Temp time:</strong> {new Date(tempDateValue).toLocaleString()}
                  </p>}
              </div>
              
              {/* DateTimePicker - This remounts when filter opens */}
              <DateTimePicker key={\`picker-\${filterOpen}\`} // Force remount to simulate real behavior
          timezone="UTC" dateTransformer={getTransposeWithTimezone("UTC")} withoutSaveButton date={tempDateValue ? transpose(tempDateValue) : undefined} onChange={v => {
            console.log("DateTimePicker onChange:", v);
            setTempDateValue(v ? v.toISOString() : undefined);
          }} />
              
              {/* Filter Actions */}
              <div className="flex gap-2 mt-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={handleApplyFilter}>
                  Apply Filter
                </button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={() => setFilterOpen(false)}>
                  Cancel
                </button>
              </div>
            </div>}
        </div>
        
        <div className="p-4 border rounded bg-red-50">
          <h4 className="font-semibold mb-2 text-red-700">🐛 Bug Reproduction Steps:</h4>
          <ol className="list-decimal list-inside text-sm space-y-1">
            <li>Click "Set Initial Date" - this sets 14:30:45 in query params</li>
            <li>Click "Open Filter" - the DateTimePicker should show 14:30:45</li>
            <li>Click "Apply Filter" to save it</li>
            <li>Click "Open Filter" again to reopen</li>
            <li><strong className="text-red-600">BUG: The hour input shows 00 instead of 14!</strong></li>
            <li>If you click "Apply Filter" now, it saves the wrong time (00:30:45)</li>
            <li>This breaks the filter because the time is now incorrect</li>
          </ol>
          <div className="mt-3 p-2 bg-red-100 rounded">
            <p className="text-xs font-semibold">Root Cause:</p>
            <p className="text-xs">The DateTimePicker's internal hour/minute/second states are initialized with "00" when the component mounts, but they're not updated when the date prop is provided on mount.</p>
          </div>
        </div>
      </div>;
  }
}`,...(z=(E=g.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var Q,R,L;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [dates, setDates] = useState<(string | undefined)[]>([undefined, new Date(2024, 0, 1, 10, 30, 0).toISOString(), new Date(2024, 1, 15, 15, 45, 30).toISOString(), new Date(2024, 2, 20, 18, 0, 0).toISOString()]);
    const [currentIndex, setCurrentIndex] = useState(0);
    return <div className="space-y-4">
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-2">Test: Rapid Date Prop Changes</h3>
          <p className="text-sm mb-4">
            Tests if time inputs update correctly when date prop changes rapidly.
          </p>
          
          <div className="space-x-2 mb-4">
            {dates.map((date, index) => <button key={index} className={\`px-3 py-1 rounded \${currentIndex === index ? "bg-blue-500 text-white" : "bg-gray-200"}\`} onClick={() => setCurrentIndex(index)}>
                {date ? new Date(date).toLocaleString() : "No Date"}
              </button>)}
          </div>
          
          <DateTimePicker date={dates[currentIndex] ? new Date(dates[currentIndex]!) : undefined} onChange={date => {
          const newDates = [...dates];
          newDates[currentIndex] = date?.toISOString();
          setDates(newDates);
        }} withoutSaveButton />
          
          <div className="mt-4 p-2 bg-gray-100 rounded">
            <p className="text-sm">
              <strong>Current selection:</strong> {dates[currentIndex] ? new Date(dates[currentIndex]!).toLocaleString() : "No date selected"}
            </p>
          </div>
        </div>
      </div>;
  }
}`,...(L=(R=D.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const Ee=["Default","WithoutSaveButton","WithStartEnd","WithUTC","WithFromDate","FilterSheetWithQueryParams","RapidPropChanges"];export{c as Default,g as FilterSheetWithQueryParams,D as RapidPropChanges,h as WithFromDate,u as WithStartEnd,p as WithUTC,m as WithoutSaveButton,Ee as __namedExportsOrder,We as default};
