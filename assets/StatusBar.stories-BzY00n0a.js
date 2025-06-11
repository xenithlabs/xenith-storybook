import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{I as Z}from"./Icon-CTnhpE1d.js";import{g as ee,B as X,X as V,Y,f as ae,n as se,S as te,N as re,a as ne,E as oe,L as ie,R as le,T as ce,b as n,c as de,e as v,m as pe}from"./charts-CXXQmEbY.js";import{c as d}from"./cn-8RyR4BqC.js";import{F as me}from"./info-Cre7IJy9.js";import{r as ue}from"./index-DRjF_FHU.js";import{T as xe}from"./Text-C8HBwI4b.js";import{T as B,a as T,b as N,c as C}from"./Tooltip-D2ba4dcD.js";import"./index-Bb4qSo10.js";import"./Skeleton-CBnrsDVZ.js";import"./tiny-invariant-CopsF_GD.js";import"./spinner-ZMRwnkYw.js";import"./eye-off-BKECGSzU.js";import"./index-HZDBD2ik.js";import"./styles-x1yxmyQd.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";var fe=ee({chartName:"BarChart",GraphicalChild:X,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:V},{axisType:"yAxis",AxisComp:Y}],formatAxisMap:ae});const A=({percentage:s,status:r,value:i})=>e.jsxs("div",{className:"flex py-[6px] px-[12px] gap-4 bg-bg-default border text-sm rounded-md shadow",children:[e.jsxs("div",{className:"flex items-center gap-2 text-text-default",children:[e.jsx("div",{className:d("w-[10px] h-[10px] rounded-md",typeof n[r]>"u"&&"bg-[repeating-linear-gradient(-45deg,_#f2cb63_0_2px,_#d0ad53_2px_4px)] bg-[length:16px_16px]"),style:{backgroundColor:n[r]}}),e.jsxs("p",{children:[s,"%"]})]}),e.jsxs("div",{className:"flex gap-1 font-medium text-text-default",children:[e.jsx("p",{children:de(i)}),e.jsx("p",{children:"Trx"})]})]}),o=({hasAccess:s=!0,isLoading:r=!1,label:i,data:l,tooltipText:y,tooltipContentClassName:$})=>{const[h,G]=ue.useState(()=>!l||l.length===0?{status:"pending",percentage:0,value:0}:l[0]),p=se(l).sort((a,t)=>t.percentage-a.percentage),w=[...p].sort((a,t)=>a.percentage-t.percentage).map(a=>a.status),H=p.reduce((a,t)=>(a[t.status]=t.percentage,a),{name:i}),S=!s&&!r,J=!r&&!l.length;return e.jsxs("div",{className:"w-full min-h-[230px] flex flex-col p-4 pb-[10px] border rounded-md bg-bg-default",children:[e.jsx("div",{className:"flex items-center gap-2 mb-[9px] h-[24px]",children:e.jsxs(te,{className:"w-full h-full",loading:!i&&!y,children:[e.jsx(xe,{variant:"subtitle",className:"font-semibold",children:i}),e.jsx(B,{children:e.jsxs(T,{children:[e.jsx(N,{children:e.jsx(Z,{icon:e.jsx(me,{})})}),e.jsx(C,{className:d("break-words text-xs font-medium",$),children:y})]})})]})}),e.jsxs("div",{className:"relative flex-1",children:[S&&e.jsx(re,{}),r&&e.jsx(ne,{}),J&&s&&e.jsx(oe,{}),r||S?e.jsx(ie,{}):e.jsx(le,{width:"100%",height:30,className:d(!s&&"blur-sm"),children:e.jsxs(fe,{data:[H],layout:"vertical",margin:{top:0,right:0,left:0,bottom:0},children:[e.jsxs("pattern",{id:"patternStripes",width:"20",height:"20",patternUnits:"userSpaceOnUse",patternTransform:"rotate(90)",children:[e.jsx("rect",{width:"100%",height:"100%",fill:"#ebc060"}),e.jsx("path",{d:"M0,0 L145,145",stroke:"#ccaa56","stroke-width":"3"})]}),e.jsx(V,{type:"number",hide:!0}),e.jsx(Y,{type:"category",dataKey:"name",hide:!0}),s&&e.jsx(ce,{content:e.jsx(A,{percentage:h.percentage,status:h.status,value:h.value}),cursor:!1}),w.map((a,t)=>{const b=t===0,Q=t===w.length-1,c=[0,0,0,0];b&&(c[0]=c[3]=6),Q&&(c[1]=c[2]=6);const j=p.find(W=>W.status===a);return e.jsx(X,{dataKey:a,stackId:"a",fill:s?n[a]||"url(#patternStripes)":n.expired,name:a,radius:c,isAnimationActive:!1,onMouseEnter:()=>{G({percentage:j.percentage,status:j.status,value:j.value})},opacity:s?1:.5},a)})]})}),!r&&e.jsx("div",{className:d("flex flex-col mt-2 text-sm divide-y divide-[var(--colors-gray-3)]",!s&&"blur-sm opacity-[0.5]"),children:p.map(({status:a,percentage:t,value:b})=>e.jsx("div",{className:"w-full",children:s?e.jsx(B,{children:e.jsxs(T,{children:[e.jsx(N,{className:"w-full",children:e.jsxs("div",{className:"w-full flex justify-between items-center p-[8px] h-[32px] rounded-md hover:bg-[var(--colors-bg-weak)] select-none text-xs",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:d("inline-block w-[16px] h-[16px] rounded-sm",typeof n[a]>"u"&&"bg-[repeating-linear-gradient(-45deg,_#f2cb63_0_2px,_#d0ad53_2px_4px)] bg-[length:16px_16px]"),style:{backgroundColor:n[a]}}),e.jsx("span",{className:"capitalize",children:a})]}),e.jsxs("span",{className:"font-medium",children:[t,"%"]})]})}),e.jsx(C,{className:"p-0 bg-transparent border-none outline-none",children:e.jsx(A,{percentage:t,status:a,value:b})})]})}):e.jsxs("div",{className:"w-full flex justify-between items-center p-[8px] h-[32px] rounded-md select-none text-xs",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"inline-block w-[16px] h-[16px] rounded-sm",style:{backgroundColor:n.expired}}),e.jsx("span",{className:"capitalize",children:a})]}),e.jsxs("span",{children:[t,"%"]})]})},a))})]})]})};o.__docgenInfo={description:"",methods:[],displayName:"StatusBar",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"IChartBarData"}],raw:"IChartBarData[]"},description:""},label:{required:!0,tsType:{name:"string"},description:""},hasAccess:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltipText:{required:!0,tsType:{name:"string"},description:""},tooltipContentClassName:{required:!1,tsType:{name:"string"},description:""}}};const ze={title:"Xenith UI/Components/StatusBar",component:o,tags:["autodocs"],parameters:{docs:{subtitle:"Status Bar"}}},m={args:{data:v,tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!0,isLoading:!1},render:s=>e.jsx(o,{...s})},u={args:{data:pe,tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!0,isLoading:!1},render:s=>e.jsx(o,{...s})},x={args:{data:v,tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!1,isLoading:!1},render:s=>e.jsx(o,{...s})},f={args:{data:v,tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!0,isLoading:!0},render:s=>e.jsx(o,{...s})},g={args:{data:[],tooltipText:"Breakdown of Pay In transactions by status.",label:"Status Overview",hasAccess:!0,isLoading:!1},render:s=>e.jsx(o,{...s})};var _,k,I;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    data: exampleStatusBarData,
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: true,
    isLoading: false
  },
  render: args => <StatusBar {...args} />
}`,...(I=(k=m.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var D,L,P;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: mismatchStatusBarData,
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: true,
    isLoading: false
  },
  render: args => <StatusBar {...args} />
}`,...(P=(L=u.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var O,E,q;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: exampleStatusBarData,
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: false,
    isLoading: false
  },
  render: args => <StatusBar {...args} />
}`,...(q=(E=x.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var M,R,z;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    data: exampleStatusBarData,
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: true,
    isLoading: true
  },
  render: args => <StatusBar {...args} />
}`,...(z=(R=f.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var F,K,U;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data: [],
    tooltipText: "Breakdown of Pay In transactions by status.",
    label: "Status Overview",
    hasAccess: true,
    isLoading: false
  },
  render: args => <StatusBar {...args} />
}`,...(U=(K=g.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const Fe=["Default","Mismatch","NoAccess","Loading","NoData"];export{m as Default,f as Loading,u as Mismatch,x as NoAccess,g as NoData,Fe as __namedExportsOrder,ze as default};
