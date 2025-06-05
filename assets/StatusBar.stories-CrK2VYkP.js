import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{g as Z,B as F,X as K,Y as U,f as ee,S as ae,N as se,a as te,E as re,L as ne,R as oe,T as ie,b as o,c as le,e as j,m as ce}from"./separator-CU7JuEUw.js";import{c}from"./cn-8RyR4BqC.js";import{F as de}from"./info-eaZ-klUF.js";import{r as pe}from"./index-DRjF_FHU.js";import{T as me}from"./Text-AJQ9L6gA.js";import{T as w,a as S,b as B,c as T}from"./Tooltip-B7pBtfFI.js";import{I as ue}from"./Icon-CTnhpE1d.js";import"./Skeleton-CBnrsDVZ.js";import"./tiny-invariant-CopsF_GD.js";import"./spinner-jGAO5kda.js";import"./eye-off-CXmd7IDI.js";import"./index-HZDBD2ik.js";import"./styles-CmMnSVhX.js";import"./index-Bb4qSo10.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";var xe=Z({chartName:"BarChart",GraphicalChild:F,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:K},{axisType:"yAxis",AxisComp:U}],formatAxisMap:ee});const N=({percentage:s,status:r,value:d})=>e.jsxs("div",{className:"flex py-[6px] px-[12px] gap-4 bg-bg-default border text-sm rounded-md shadow",children:[e.jsxs("div",{className:"flex items-center gap-2 text-text-default",children:[e.jsx("div",{className:c("w-[10px] h-[10px] rounded-md",typeof o[r]>"u"&&"bg-[repeating-linear-gradient(135deg,_#f2cb63_0_2px,_#d0ad53_2px_4px)] bg-[length:16px_16px]"),style:{backgroundColor:o[r]}}),e.jsxs("p",{children:[s,"%"]})]}),e.jsxs("div",{className:"flex gap-1 font-medium text-text-default",children:[e.jsx("p",{children:le(d)}),e.jsx("p",{children:"TRX"})]})]}),i=({hasAccess:s=!0,isLoading:r=!1,label:d,data:n,tooltipText:V,tooltipContentClassName:Y})=>{const[g,$]=pe.useState(()=>!n||n.length===0?{status:"pending",percentage:0,value:0}:n[0]),v=[...n].sort((a,t)=>a.percentage-t.percentage).map(a=>a.status),G=[...n].sort((a,t)=>t.percentage-a.percentage),H=n.reduce((a,t)=>(a[t.status]=t.percentage,a),{name:d}),J=!s&&!r,y=!r&&!n.length;return e.jsxs("div",{className:"w-full min-h-[230px] flex flex-col p-4 pb-[10px] border rounded-md bg-bg-default",children:[e.jsx("div",{className:"flex items-center gap-2 mb-[9px] h-[24px]",children:e.jsxs(ae,{className:"w-full h-full",loading:r,children:[e.jsx(me,{variant:"subtitle",className:"font-semibold",children:d}),e.jsx(w,{children:e.jsxs(S,{children:[e.jsx(B,{children:e.jsx(ue,{icon:e.jsx(de,{})})}),e.jsx(T,{className:c("break-words text-xs font-medium",Y),children:V})]})})]})}),e.jsxs("div",{className:"relative flex-1",children:[J&&e.jsx(se,{}),r&&e.jsx(te,{}),y&&e.jsx(re,{}),!y&&r?e.jsx(ne,{}):e.jsx(oe,{width:"100%",height:30,className:c(!s&&"blur-sm"),children:e.jsxs(xe,{data:[H],layout:"vertical",margin:{top:0,right:0,left:0,bottom:0},children:[e.jsxs("pattern",{id:"patternStripes",width:"20",height:"20",patternUnits:"userSpaceOnUse",transform:"translate(145, 4, 4)",children:[e.jsx("rect",{width:"100%",height:"100%",fill:"red"}),e.jsx("path",{d:"M0,0 L145, 145",stroke:"#ccaa56","stroke-width":"3"})]}),e.jsx(K,{type:"number",hide:!0}),e.jsx(U,{type:"category",dataKey:"name",hide:!0}),s&&e.jsx(ie,{content:e.jsx(N,{percentage:g.percentage,status:g.status,value:g.value}),cursor:!1}),v.map((a,t)=>{const h=t===0,Q=t===v.length-1,l=[0,0,0,0];h&&(l[0]=l[3]=6),Q&&(l[1]=l[2]=6);const b=n.find(W=>W.status===a);return e.jsx(F,{dataKey:a,stackId:"a",fill:s?o[a]||"url(#patternStripes)":o.expired,name:a,radius:l,isAnimationActive:!1,onMouseEnter:()=>{$({percentage:b.percentage,status:b.status,value:b.value})},opacity:s?1:.5},a)})]})}),!r&&e.jsx("div",{className:c("flex flex-col mt-2 text-sm divide-y divide-[var(--colors-gray-3)]",!s&&"blur-sm opacity-[0.5]"),children:G.map(({status:a,percentage:t,value:h})=>e.jsx("div",{className:"w-full",children:s?e.jsx(w,{children:e.jsxs(S,{children:[e.jsx(B,{className:"w-full",children:e.jsxs("div",{className:"w-full flex justify-between items-center p-[8px] h-[32px] rounded-md hover:bg-[var(--colors-bg-weak)] select-none",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:c("inline-block w-[16px] h-[16px] rounded-sm",typeof o[a]>"u"&&"bg-[repeating-linear-gradient(135deg,_#f2cb63_0_2px,_#d0ad53_2px_4px)] bg-[length:16px_16px]"),style:{backgroundColor:o[a]}}),e.jsx("span",{className:"capitalize",children:a})]}),e.jsxs("span",{children:[t," %"]})]})}),e.jsx(T,{className:"p-0 bg-transparent border-none outline-none",children:e.jsx(N,{percentage:t,status:a,value:h})})]})}):e.jsxs("div",{className:"w-full flex justify-between items-center p-[8px] h-[32px] rounded-md select-none",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"inline-block w-[16px] h-[16px] rounded-sm",style:{backgroundColor:o.expired}}),e.jsx("span",{className:"capitalize",children:a})]}),e.jsxs("span",{children:[t," %"]})]})},a))})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"StatusBar",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"IChartBarData"}],raw:"IChartBarData[]"},description:""},label:{required:!0,tsType:{name:"string"},description:""},hasAccess:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltipText:{required:!0,tsType:{name:"string"},description:""},tooltipContentClassName:{required:!1,tsType:{name:"string"},description:""}}};const Re={title:"Xenith UI/Components/StatusBar",component:i,tags:["autodocs"],parameters:{docs:{subtitle:"Status Bar"}}},p={args:{data:j,tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!0,isLoading:!1},render:s=>e.jsx(i,{...s})},m={args:{data:ce,tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!0,isLoading:!1},render:s=>e.jsx(i,{...s})},u={args:{data:j,tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!1,isLoading:!1},render:s=>e.jsx(i,{...s})},x={args:{data:j,tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!0,isLoading:!0},render:s=>e.jsx(i,{...s})},f={args:{data:[],tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!0,isLoading:!1},render:s=>e.jsx(i,{...s})};var A,C,_;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data: exampleStatusBarData,
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: true,
    isLoading: false
  },
  render: args => <StatusBar {...args} />
}`,...(_=(C=p.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var k,I,D;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: mismatchStatusBarData,
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: true,
    isLoading: false
  },
  render: args => <StatusBar {...args} />
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var L,O,P;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data: exampleStatusBarData,
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: false,
    isLoading: false
  },
  render: args => <StatusBar {...args} />
}`,...(P=(O=u.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var E,q,M;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    data: exampleStatusBarData,
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: true,
    isLoading: true
  },
  render: args => <StatusBar {...args} />
}`,...(M=(q=x.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var R,X,z;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    data: [],
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: true,
    isLoading: false
  },
  render: args => <StatusBar {...args} />
}`,...(z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};const Xe=["Default","Mismatch","NoAccess","Loading","NoData"];export{p as Default,x as Loading,m as Mismatch,u as NoAccess,f as NoData,Xe as __namedExportsOrder,Re as default};
