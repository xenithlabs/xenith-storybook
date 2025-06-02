import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{I as Z}from"./Icon-CTnhpE1d.js";import{g as ee,B as F,X as K,Y as U,f as ae,N as se,S as te,E as re,L as ne,R as oe,T as ie,b as o,a as le,e as j,m as ce}from"./separator-BZzReNJK.js";import{c}from"./cn-8RyR4BqC.js";import{F as de}from"./info-eaZ-klUF.js";import{r as pe}from"./index-DRjF_FHU.js";import{T as me}from"./Text-1Zc-I06A.js";import{T as y,a as w,b as S,c as B}from"./Tooltip-CZgL-vUT.js";import"./index-Bb4qSo10.js";import"./tiny-invariant-CopsF_GD.js";import"./spinner-jGAO5kda.js";import"./eye-off-CXmd7IDI.js";import"./index-HZDBD2ik.js";import"./styles-BNEhTmYy.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";var ue=ee({chartName:"BarChart",GraphicalChild:F,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:K},{axisType:"yAxis",AxisComp:U}],formatAxisMap:ae});const T=({percentage:s,status:r,value:d})=>e.jsxs("div",{className:"flex py-[6px] px-[12px] gap-4 bg-bg-default border text-sm rounded-md shadow",children:[e.jsxs("div",{className:"flex items-center gap-2 text-text-default",children:[e.jsx("div",{className:c("w-[10px] h-[10px] rounded-md",typeof o[r]>"u"&&"bg-[repeating-linear-gradient(135deg,_#f2cb63_0_2px,_#d0ad53_2px_4px)] bg-[length:16px_16px]"),style:{backgroundColor:o[r]}}),e.jsxs("p",{children:[s,"%"]})]}),e.jsxs("div",{className:"flex gap-1 font-medium text-text-default",children:[e.jsx("p",{children:le(d)}),e.jsx("p",{children:"TRX"})]})]}),i=({hasAccess:s=!0,isLoading:r=!1,label:d,data:n,tooltipText:z,tooltipContentClassName:V})=>{const[f,Y]=pe.useState(()=>!n||n.length===0?{status:"pending",percentage:0,value:0}:n[0]),v=[...n].sort((a,t)=>a.percentage-t.percentage).map(a=>a.status),$=[...n].sort((a,t)=>t.percentage-a.percentage),G=n.reduce((a,t)=>(a[t.status]=t.percentage,a),{name:d}),H=!s&&!r,J=!r&&!n.length;return e.jsxs("div",{className:"w-full min-h-[230px] flex flex-col p-4 pb-[10px] border rounded-md bg-bg-default",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-[13px] h-[20px]",children:[e.jsx(me,{variant:"subtitle",className:"font-semibold",children:d}),e.jsx(y,{children:e.jsxs(w,{children:[e.jsx(S,{children:e.jsx(Z,{icon:e.jsx(de,{})})}),e.jsx(B,{className:c("break-words text-xs font-medium",V),children:z})]})})]}),e.jsxs("div",{className:"relative flex-1 content-center",children:[H&&e.jsx(se,{}),r&&e.jsx(te,{}),J&&e.jsx(re,{}),r?e.jsx(ne,{}):e.jsx(oe,{width:"100%",height:30,className:c(!s&&"blur-sm"),children:e.jsxs(ue,{data:[G],layout:"vertical",margin:{top:0,right:0,left:0,bottom:0},children:[e.jsxs("pattern",{id:"patternStripes",width:"20",height:"20",patternUnits:"userSpaceOnUse",transform:"translate(145, 4, 4)",children:[e.jsx("rect",{width:"100%",height:"100%",fill:"red"}),e.jsx("path",{d:"M0,0 L145, 145",stroke:"#ccaa56","stroke-width":"3"})]}),e.jsx(K,{type:"number",hide:!0}),e.jsx(U,{type:"category",dataKey:"name",hide:!0}),s&&e.jsx(ie,{content:e.jsx(T,{percentage:f.percentage,status:f.status,value:f.value}),cursor:!1}),v.map((a,t)=>{const h=t===0,Q=t===v.length-1,l=[0,0,0,0];h&&(l[0]=l[3]=6),Q&&(l[1]=l[2]=6);const b=n.find(W=>W.status===a);return e.jsx(F,{dataKey:a,stackId:"a",fill:s?o[a]||"url(#patternStripes)":o.expired,name:a,radius:l,isAnimationActive:!1,onMouseEnter:()=>{Y({percentage:b.percentage,status:b.status,value:b.value})},opacity:s?1:.5},a)})]})}),!r&&e.jsx("div",{className:c("flex flex-col mt-2 text-sm divide-y divide-[var(--colors-gray-3)]",!s&&"blur-sm opacity-[0.5]"),children:$.map(({status:a,percentage:t,value:h})=>e.jsx("div",{className:"w-full",children:s?e.jsx(y,{children:e.jsxs(w,{children:[e.jsx(S,{className:"w-full",children:e.jsxs("div",{className:"w-full flex justify-between items-center p-[8px] h-[32px] rounded-md hover:bg-[var(--colors-bg-weak)] select-none",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:c("inline-block w-[16px] h-[16px] rounded-sm",typeof o[a]>"u"&&"bg-[repeating-linear-gradient(135deg,_#f2cb63_0_2px,_#d0ad53_2px_4px)] bg-[length:16px_16px]"),style:{backgroundColor:o[a]}}),e.jsx("span",{className:"capitalize",children:a})]}),e.jsxs("span",{children:[t," %"]})]})}),e.jsx(B,{className:"p-0 bg-transparent border-none outline-none",children:e.jsx(T,{percentage:t,status:a,value:h})})]})}):e.jsxs("div",{className:"w-full flex justify-between items-center p-[8px] h-[32px] rounded-md select-none",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"inline-block w-[16px] h-[16px] rounded-sm",style:{backgroundColor:o.expired}}),e.jsx("span",{className:"capitalize",children:a})]}),e.jsxs("span",{children:[t," %"]})]})},a))})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"StatusBar",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"IChartBarData"}],raw:"IChartBarData[]"},description:""},label:{required:!0,tsType:{name:"string"},description:""},hasAccess:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltipText:{required:!0,tsType:{name:"string"},description:""},tooltipContentClassName:{required:!1,tsType:{name:"string"},description:""}}};const qe={title:"Xenith UI/Components/StatusBar",component:i,tags:["autodocs"],parameters:{docs:{subtitle:"Status Bar"}}},p={args:{data:j,tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!0,isLoading:!1},render:s=>e.jsx(i,{...s})},m={args:{data:ce,tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!0,isLoading:!1},render:s=>e.jsx(i,{...s})},u={args:{data:j,tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!1,isLoading:!1},render:s=>e.jsx(i,{...s})},x={args:{data:j,tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!0,isLoading:!0},render:s=>e.jsx(i,{...s})},g={args:{data:[],tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!0,isLoading:!1},render:s=>e.jsx(i,{...s})};var N,A,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data: exampleStatusBarData,
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: true,
    isLoading: false
  },
  render: args => <StatusBar {...args} />
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var _,I,k;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    data: mismatchStatusBarData,
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: true,
    isLoading: false
  },
  render: args => <StatusBar {...args} />
}`,...(k=(I=m.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var D,L,O;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: exampleStatusBarData,
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: false,
    isLoading: false
  },
  render: args => <StatusBar {...args} />
}`,...(O=(L=u.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var P,E,q;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data: exampleStatusBarData,
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: true,
    isLoading: true
  },
  render: args => <StatusBar {...args} />
}`,...(q=(E=x.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var M,R,X;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    data: [],
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: true,
    isLoading: false
  },
  render: args => <StatusBar {...args} />
}`,...(X=(R=g.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};const Me=["Default","Mismatch","NoAccess","Loading","NoData"];export{p as Default,x as Loading,m as Mismatch,u as NoAccess,g as NoData,Me as __namedExportsOrder,qe as default};
