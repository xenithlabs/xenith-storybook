import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{g as Ne,B as ve,X as he,Y as fe,f as Ae,n as Be,N as De,S as ke,E as Le,L as Pe,R as _e,T as Oe,b as r,a as Ie,e as l,m as Ee}from"./charts-quA1gbU4.js";import{c as o}from"./cn-8RyR4BqC.js";import{F as ze}from"./info-Cre7IJy9.js";import{r as Re}from"./index-DRjF_FHU.js";import{S as Ue}from"./Skeletonize-DZPbcDcL.js";import{T as A}from"./Text-C8HBwI4b.js";import{T as D,a as k,b as L,c as P}from"./Tooltip-D2ba4dcD.js";import{I as be}from"./Icon-CTnhpE1d.js";import{F as Ve}from"./chevron-right-D4FvqfWr.js";import{H as qe}from"./Heading-DjlBwQyS.js";import{B as We}from"./Button-47JPF8V9.js";import"./tiny-invariant-CopsF_GD.js";import"./spinner-ojW7ALd7.js";import"./eye-off-BKECGSzU.js";import"./Skeleton-CBnrsDVZ.js";import"./index-HZDBD2ik.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./chevron-down-CyV3wpL8.js";var He=Ne({chartName:"BarChart",GraphicalChild:ve,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:he},{axisType:"yAxis",AxisComp:fe}],formatAxisMap:Ae});const _=({percentage:t,status:n,value:c})=>e.jsxs("div",{className:"flex py-[6px] px-[12px] gap-4 bg-bg-default border text-sm rounded-md shadow",children:[e.jsxs("div",{className:"flex items-center gap-2 text-text-default",children:[e.jsx("div",{className:o("w-[10px] h-[10px] rounded-md",typeof r[n]>"u"&&"bg-[repeating-linear-gradient(-45deg,_transparent_0_3px,_rgba(42,42,42,0.12)_3px_5px)]",n==="pending approval"&&"bg-[repeating-linear-gradient(-45deg,_transparent_0_3px,_rgba(42,42,42,0.5)_3px_5px)]"),style:{backgroundColor:r[n]||"var(--colors-yellow-7)"}}),e.jsxs("p",{children:[t,"%"]})]}),e.jsxs("div",{className:"flex gap-1 font-medium text-text-default",children:[e.jsx("p",{children:Ie(c)}),e.jsx("p",{children:"Trx"})]})]}),i=({hasAccess:t=!0,isLoading:n=!1,label:c,data:u,tooltipText:B,tooltipContentClassName:Se,containerClassName:ye})=>{const[C,we]=Re.useState(()=>!u||u.length===0?{status:"pending",percentage:0,value:0}:u[0]),d=Be(u).sort((a,s)=>s.percentage-a.percentage),Te=[...d].sort((a,s)=>a.percentage-s.percentage).map(a=>a.status),je=d.reduce((a,s)=>(a[s.status]=s.percentage,a),{name:c}),N=!t&&!n,Ce=!n&&!u.length;return e.jsxs("div",{className:o("w-full min-h-[230px] flex flex-col p-4 pb-[10px] border rounded-md bg-bg-default overflow-hidden",ye),children:[e.jsx("div",{className:"flex items-center gap-2 mb-[9px] h-[24px]",children:e.jsxs(Ue,{className:"w-full h-full",loading:!c&&!B,children:[e.jsx(A,{variant:"subtitle",className:"font-semibold",children:c}),e.jsx(D,{children:e.jsxs(k,{children:[e.jsx(L,{children:e.jsx(be,{icon:e.jsx(ze,{})})}),e.jsx(P,{className:o("break-words text-xs font-medium",Se),children:B})]})})]})}),e.jsxs("div",{className:"relative flex-1",children:[N&&e.jsx(De,{}),n&&e.jsx(ke,{}),Ce&&t&&e.jsx(Le,{}),n||N?e.jsx(Pe,{isBlur:N}):e.jsx("div",{className:"rounded-md overflow-hidden",children:e.jsx(_e,{width:"100%",height:30,className:o(!t&&"blur-sm"),children:e.jsxs(He,{data:[je],layout:"vertical",barGap:0,barCategoryGap:0,margin:{top:0,right:0,left:0,bottom:0},children:[e.jsxs("defs",{children:[e.jsxs("pattern",{id:"patternStripes",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[e.jsx("rect",{width:"100%",height:"100%",className:"fill-[var(--colors-yellow-7)]"}),e.jsx("line",{x1:"4",y1:"0",x2:"4",y2:"20",strokeWidth:"3",className:"stroke-[#2a2a2a] opacity-[0.12]"})]}),e.jsxs("pattern",{id:"pendingApproval",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:[e.jsx("rect",{width:"100%",height:"100%",className:"fill-[var(--colors-yellow-7)]"}),e.jsx("line",{x1:"4",y1:"0",x2:"4",y2:"20",strokeWidth:"2",className:"stroke-[#2a2a2a] opacity-[0.5]"})]})]}),e.jsx(he,{type:"number",hide:!0}),e.jsx(fe,{type:"category",dataKey:"name",hide:!0}),t&&e.jsx(Oe,{content:e.jsx(_,{percentage:C.percentage,status:C.status,value:C.value}),cursor:!1}),Te.map(a=>{const s=d.find(p=>p.status===a);return e.jsx(ve,{dataKey:a,stackId:"a",fill:t?a==="pending approval"?"url(#pendingApproval)":r[a]||"url(#patternStripes)":r.expired,name:a,isAnimationActive:!1,opacity:t?1:.5,onMouseEnter:()=>{we({percentage:s.percentage,status:s.status,value:s.value})},shape:p=>e.jsx("rect",{...p,shapeRendering:"crispEdges"})},a)})]})})}),!n&&e.jsx("div",{className:o("flex flex-col mt-2 text-sm divide-y divide-[var(--colors-gray-3)]",!t&&"blur-sm opacity-[0.5]"),children:d.map(({status:a,percentage:s,value:p})=>e.jsx("div",{className:"w-full",children:t?e.jsx(D,{children:e.jsxs(k,{children:[e.jsx(L,{className:"w-full",children:e.jsxs("div",{className:"w-full flex justify-between items-center p-[8px] h-[32px] rounded-md hover:bg-[var(--colors-bg-weak)] select-none text-xs",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:o("inline-block w-[16px] h-[16px] rounded-sm",typeof r[a]>"u"&&"bg-[repeating-linear-gradient(-45deg,_transparent_0_3px,_rgba(42,42,42,0.12)_3px_5px)]",a==="pending approval"&&"bg-[repeating-linear-gradient(-45deg,_transparent_0_3px,_rgba(42,42,42,0.5)_3px_5px)]"),style:{backgroundColor:r[a]||"var(--colors-yellow-7)"}}),e.jsx("span",{className:"capitalize",children:a})]}),e.jsxs("span",{className:"font-medium",children:[s,"%"]})]})}),e.jsx(P,{className:"p-0 bg-transparent border-none outline-none",children:e.jsx(_,{percentage:s,status:a,value:p})})]})}):e.jsxs("div",{className:"w-full flex justify-between items-center p-[8px] h-[32px] rounded-md select-none text-xs",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"inline-block w-[16px] h-[16px] rounded-sm",style:{backgroundColor:r.expired}}),e.jsx("span",{className:"capitalize",children:a})]}),e.jsxs("span",{children:[s,"%"]})]})},a))})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"StatusBar",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"IChartBarData"}],raw:"IChartBarData[]"},description:""},label:{required:!0,tsType:{name:"string"},description:""},hasAccess:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltipText:{required:!0,tsType:{name:"string"},description:""},tooltipContentClassName:{required:!1,tsType:{name:"string"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""}}};const ba={title:"Xenith UI/Components/StatusBar",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The StatusBar component provides a horizontal stacked bar chart visualization for displaying status distributions, commonly used for transaction status breakdowns in analytics dashboards. It features interactive tooltips, percentage calculations, and special styling for different status types.

### Key Features
- **Stacked Bar Visualization**: Shows percentage distribution across multiple statuses
- **Interactive Tooltips**: Hover to see detailed counts and percentages
- **Status List**: Displays all statuses with color coding below the bar
- **Special Status Styling**: Striped patterns for "pending approval" and unknown statuses
- **Access Control**: Built-in support for permission-based visibility
- **Loading States**: Skeleton loading with placeholder
- **Empty States**: Graceful handling of no data
- **Automatic Percentage Normalization**: Ensures percentages sum to 100%

### Usage
\`\`\`tsx
import { StatusBar } from "@xenithlabs/xenith-ui";

// Basic status bar
<StatusBar
  label="Status Overview"
  data={[
    { status: "successful", percentage: 75, value: 7500 },
    { status: "pending", percentage: 15, value: 1500 },
    { status: "failed", percentage: 10, value: 1000 },
  ]}
  tooltipText="Breakdown of transactions by status"
/>

// With access control
<StatusBar
  label="Payment Status"
  data={statusData}
  hasAccess={userHasPermission}
  isLoading={isLoadingData}
/>
\`\`\`

### Component Props

- **data** (IChartBarData[]): Array of status data with percentage and value
  - **status** (string): Status name
  - **percentage** (number): Percentage value (auto-normalized to 100%)
  - **value** (number): Actual count/value
- **label** (string): Chart title/label
- **hasAccess** (boolean): Whether user has permission to view. Default: true
- **isLoading** (boolean): Loading state. Default: false
- **tooltipText** (string): Tooltip description text
- **containerClassName** (string): Container CSS classes
- **tooltipContentClassName** (string): Tooltip content CSS classes

### Status Color Mapping

The component automatically maps common status names to colors:
- **successful/success**: Green
- **pending**: Yellow
- **failed/failure**: Red
- **expired**: Gray
- **cancelled**: Orange
- **pending approval**: Yellow with stripes
- **unknown statuses**: Yellow with light stripes

### Common Patterns

1. **Transaction Status**: Show distribution of payment/transaction statuses
2. **Order Status**: Display order fulfillment status breakdown
3. **User Status**: Visualize active/inactive/pending users
4. **Process Status**: Track multi-step process completion rates
        `}}},argTypes:{data:{control:!1,description:"Array of status data with percentages and values",table:{type:{summary:"IChartBarData[]"}}},label:{control:{type:"text"},description:"Chart title displayed at the top",table:{type:{summary:"string"}}},hasAccess:{control:{type:"boolean"},description:"Whether user has permission to view chart data",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},isLoading:{control:{type:"boolean"},description:"Show loading state with skeleton",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},tooltipText:{control:{type:"text"},description:"Description text shown in info tooltip",table:{type:{summary:"string"}}},containerClassName:{control:{type:"text"},description:"CSS classes for the container",table:{type:{summary:"string"}}},tooltipContentClassName:{control:{type:"text"},description:"CSS classes for tooltip content",table:{type:{summary:"string"}}}}},m={args:{data:l,label:"Status Overview",tooltipText:"Breakdown of transactions by status.",hasAccess:!0,isLoading:!1}},g={name:"Transaction Status (Real Example)",args:{data:[{status:"successful",percentage:75.5,value:15234},{status:"pending",percentage:12.3,value:2456},{status:"failed",percentage:8.2,value:1643},{status:"expired",percentage:2.5,value:502},{status:"cancelled",percentage:1.5,value:298}],label:"Payment Status Overview",tooltipText:"Breakdown of payment transactions by current status.",containerClassName:"h-[315px]",hasAccess:!0,isLoading:!1}},x={name:"With Pending Approval Status",args:{data:[{status:"successful",percentage:45,value:4500},{status:"pending approval",percentage:30,value:3e3},{status:"pending",percentage:15,value:1500},{status:"failed",percentage:10,value:1e3}],label:"Payout Status",tooltipText:"Status distribution for payout transactions requiring approval.",hasAccess:!0,isLoading:!1}},v={name:"With Unknown Statuses",args:{data:[{status:"successful",percentage:60,value:6e3},{status:"processing",percentage:20,value:2e3},{status:"unknown_status",percentage:10,value:1e3},{status:"custom_status",percentage:10,value:1e3}],label:"Status Overview",tooltipText:"Including statuses not in the predefined color mapping.",hasAccess:!0,isLoading:!1}},h={name:"Auto-Normalized Percentages",args:{data:Ee,label:"Status Distribution",tooltipText:"Percentages are automatically normalized to sum to 100%.",hasAccess:!0,isLoading:!1}},f={args:{data:[],label:"Status Overview",tooltipText:"Loading transaction status data...",hasAccess:!0,isLoading:!0}},b={args:{data:[],label:"Status Overview",tooltipText:"No status data available for the selected period.",hasAccess:!0,isLoading:!1}},S={args:{data:l,label:"Status Overview",tooltipText:"Transaction status breakdown.",hasAccess:!1,isLoading:!1}},y={name:"Analytics Dashboard Integration",args:{data:l,label:"Status Overview",tooltipText:"Transaction status breakdown.",hasAccess:!0,isLoading:!1},render:t=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(qe,{variant:"h2",children:"Transaction Analytics"}),e.jsx(We,{variant:"link",iconPosition:"right",icon:e.jsx(be,{icon:e.jsx(Ve,{})}),children:"View Details"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(i,{...t,label:"Pay In Status",tooltipText:"Distribution of incoming payment statuses.",hasAccess:!0,isLoading:!1,containerClassName:"h-[315px]",data:[{status:"successful",percentage:82,value:12453},{status:"pending",percentage:10,value:1523},{status:"failed",percentage:5,value:762},{status:"expired",percentage:3,value:456}]}),e.jsx(i,{...t,label:"Pay Out Status",tooltipText:"Distribution of outgoing payment statuses.",hasAccess:!0,isLoading:!1,containerClassName:"h-[315px]",data:[{status:"successful",percentage:68,value:8234},{status:"pending approval",percentage:18,value:2178},{status:"pending",percentage:8,value:968},{status:"failed",percentage:4,value:484},{status:"cancelled",percentage:2,value:242}]})]})]})},w={name:"Compact Status Bar",args:{data:[],label:"Quick Status",tooltipText:"Compact status overview.",hasAccess:!0,isLoading:!1},render:t=>e.jsx("div",{className:"max-w-md",children:e.jsx(i,{...t,label:"Quick Status",tooltipText:"Compact status overview",hasAccess:!0,isLoading:!1,data:[{status:"active",percentage:70,value:700},{status:"inactive",percentage:20,value:200},{status:"pending",percentage:10,value:100}],containerClassName:"h-[200px]"})})},T={name:"Detailed Status Breakdown",args:{data:[{status:"successful",percentage:45.2,value:452345},{status:"pending",percentage:15.8,value:158234},{status:"processing",percentage:12.5,value:125456},{status:"failed",percentage:8.3,value:83123},{status:"expired",percentage:6.7,value:67234},{status:"cancelled",percentage:5.5,value:55123},{status:"pending approval",percentage:3.2,value:32456},{status:"refunded",percentage:2.8,value:28234}],label:"Comprehensive Status Overview",tooltipText:"Complete breakdown of all transaction statuses in the system.",containerClassName:"h-[400px]",hasAccess:!0,isLoading:!1}},j={name:"Custom Container Styling",args:{data:l,label:"Default Status",tooltipText:"Status overview with custom styling.",hasAccess:!0,isLoading:!1},render:t=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(A,{variant:"regular",className:"mb-2",children:"Default Styling"}),e.jsx(i,{...t,label:"Default Status",data:l,hasAccess:!0,isLoading:!1,tooltipText:"Default status bar styling"})]}),e.jsxs("div",{children:[e.jsx(A,{variant:"regular",className:"mb-2",children:"Custom Height & Padding"}),e.jsx(i,{...t,label:"Custom Status",data:l,hasAccess:!0,isLoading:!1,tooltipText:"Custom height and padding",containerClassName:"h-[250px] p-6"})]})]})};var O,I,E;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: exampleStatusBarData,
    label: "Status Overview",
    tooltipText: "Breakdown of transactions by status.",
    hasAccess: true,
    isLoading: false
  }
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var z,R,U;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Transaction Status (Real Example)",
  args: {
    data: [{
      status: "successful",
      percentage: 75.5,
      value: 15234
    }, {
      status: "pending",
      percentage: 12.3,
      value: 2456
    }, {
      status: "failed",
      percentage: 8.2,
      value: 1643
    }, {
      status: "expired",
      percentage: 2.5,
      value: 502
    }, {
      status: "cancelled",
      percentage: 1.5,
      value: 298
    }],
    label: "Payment Status Overview",
    tooltipText: "Breakdown of payment transactions by current status.",
    containerClassName: "h-[315px]",
    hasAccess: true,
    isLoading: false
  }
}`,...(U=(R=g.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,q,W;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "With Pending Approval Status",
  args: {
    data: [{
      status: "successful",
      percentage: 45,
      value: 4500
    }, {
      status: "pending approval",
      percentage: 30,
      value: 3000
    }, {
      status: "pending",
      percentage: 15,
      value: 1500
    }, {
      status: "failed",
      percentage: 10,
      value: 1000
    }],
    label: "Payout Status",
    tooltipText: "Status distribution for payout transactions requiring approval.",
    hasAccess: true,
    isLoading: false
  }
}`,...(W=(q=x.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var H,G,M;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "With Unknown Statuses",
  args: {
    data: [{
      status: "successful",
      percentage: 60,
      value: 6000
    }, {
      status: "processing",
      percentage: 20,
      value: 2000
    }, {
      status: "unknown_status",
      percentage: 10,
      value: 1000
    }, {
      status: "custom_status",
      percentage: 10,
      value: 1000
    }],
    label: "Status Overview",
    tooltipText: "Including statuses not in the predefined color mapping.",
    hasAccess: true,
    isLoading: false
  }
}`,...(M=(G=v.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var F,Y,K;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Auto-Normalized Percentages",
  args: {
    data: mismatchStatusBarData,
    label: "Status Distribution",
    tooltipText: "Percentages are automatically normalized to sum to 100%.",
    hasAccess: true,
    isLoading: false
  }
}`,...(K=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Q,X,$;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    data: [],
    label: "Status Overview",
    tooltipText: "Loading transaction status data...",
    hasAccess: true,
    isLoading: true
  }
}`,...($=(X=f.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var J,Z,ee;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data: [],
    label: "Status Overview",
    tooltipText: "No status data available for the selected period.",
    hasAccess: true,
    isLoading: false
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,se;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    data: exampleStatusBarData,
    label: "Status Overview",
    tooltipText: "Transaction status breakdown.",
    hasAccess: false,
    isLoading: false
  }
}`,...(se=(te=S.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,re,ie;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "Analytics Dashboard Integration",
  args: {
    data: exampleStatusBarData,
    label: "Status Overview",
    tooltipText: "Transaction status breakdown.",
    hasAccess: true,
    isLoading: false
  },
  render: args => <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Heading variant="h2">Transaction Analytics</Heading>
        <Button variant="link" iconPosition="right" icon={<Icon icon={<ChevronRightIcon />} />}>
          View Details
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatusBar {...args} label="Pay In Status" tooltipText="Distribution of incoming payment statuses." hasAccess={true} isLoading={false} containerClassName="h-[315px]" data={[{
        status: "successful",
        percentage: 82,
        value: 12453
      }, {
        status: "pending",
        percentage: 10,
        value: 1523
      }, {
        status: "failed",
        percentage: 5,
        value: 762
      }, {
        status: "expired",
        percentage: 3,
        value: 456
      }]} />
        
        <StatusBar {...args} label="Pay Out Status" tooltipText="Distribution of outgoing payment statuses." hasAccess={true} isLoading={false} containerClassName="h-[315px]" data={[{
        status: "successful",
        percentage: 68,
        value: 8234
      }, {
        status: "pending approval",
        percentage: 18,
        value: 2178
      }, {
        status: "pending",
        percentage: 8,
        value: 968
      }, {
        status: "failed",
        percentage: 4,
        value: 484
      }, {
        status: "cancelled",
        percentage: 2,
        value: 242
      }]} />
      </div>
    </div>
}`,...(ie=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,le,ce;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Compact Status Bar",
  args: {
    data: [],
    label: "Quick Status",
    tooltipText: "Compact status overview.",
    hasAccess: true,
    isLoading: false
  },
  render: args => <div className="max-w-md">
      <StatusBar {...args} label="Quick Status" tooltipText="Compact status overview" hasAccess={true} isLoading={false} data={[{
      status: "active",
      percentage: 70,
      value: 700
    }, {
      status: "inactive",
      percentage: 20,
      value: 200
    }, {
      status: "pending",
      percentage: 10,
      value: 100
    }]} containerClassName="h-[200px]" />
    </div>
}`,...(ce=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,pe,de;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "Detailed Status Breakdown",
  args: {
    data: [{
      status: "successful",
      percentage: 45.2,
      value: 452345
    }, {
      status: "pending",
      percentage: 15.8,
      value: 158234
    }, {
      status: "processing",
      percentage: 12.5,
      value: 125456
    }, {
      status: "failed",
      percentage: 8.3,
      value: 83123
    }, {
      status: "expired",
      percentage: 6.7,
      value: 67234
    }, {
      status: "cancelled",
      percentage: 5.5,
      value: 55123
    }, {
      status: "pending approval",
      percentage: 3.2,
      value: 32456
    }, {
      status: "refunded",
      percentage: 2.8,
      value: 28234
    }],
    label: "Comprehensive Status Overview",
    tooltipText: "Complete breakdown of all transaction statuses in the system.",
    containerClassName: "h-[400px]",
    hasAccess: true,
    isLoading: false
  }
}`,...(de=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ge,xe;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "Custom Container Styling",
  args: {
    data: exampleStatusBarData,
    label: "Default Status",
    tooltipText: "Status overview with custom styling.",
    hasAccess: true,
    isLoading: false
  },
  render: args => <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Text variant="regular" className="mb-2">Default Styling</Text>
        <StatusBar {...args} label="Default Status" data={exampleStatusBarData} hasAccess={true} isLoading={false} tooltipText="Default status bar styling" />
      </div>
      
      <div>
        <Text variant="regular" className="mb-2">Custom Height & Padding</Text>
        <StatusBar {...args} label="Custom Status" data={exampleStatusBarData} hasAccess={true} isLoading={false} tooltipText="Custom height and padding" containerClassName="h-[250px] p-6" />
      </div>
    </div>
}`,...(xe=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};const Sa=["Default","TransactionStatusBreakdown","PendingApprovalStatus","UnknownStatuses","PercentageMismatch","LoadingState","EmptyState","NoAccessState","AnalyticsDashboard","CompactView","DetailedBreakdown","CustomStyling"];export{y as AnalyticsDashboard,w as CompactView,j as CustomStyling,m as Default,T as DetailedBreakdown,b as EmptyState,f as LoadingState,S as NoAccessState,x as PendingApprovalStatus,h as PercentageMismatch,g as TransactionStatusBreakdown,v as UnknownStatuses,Sa as __namedExportsOrder,ba as default};
