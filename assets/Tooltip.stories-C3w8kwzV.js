import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{T as n,a as o,b as a,c as l,d as y}from"./Tooltip-D2ba4dcD.js";import{c as S}from"./cn-8RyR4BqC.js";import{F as d}from"./info-Cre7IJy9.js";import{I as p}from"./Icon-CTnhpE1d.js";import{T as C}from"./Text-C8HBwI4b.js";import"./index-DRjF_FHU.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./index-HZDBD2ik.js";const P=({children:b,triggerClassName:O,contentClassName:E})=>e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(a,{className:O,children:e.jsx(d,{})}),e.jsx(l,{className:S("whitespace-pre-line max-w-[400px]",E),children:b})]})});P.__docgenInfo={description:"",methods:[],displayName:"InfoTooltip",props:{triggerClassName:{required:!1,tsType:{name:"string"},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const M={title:"Xenith UI/Components/Tooltip",component:o,tags:["autodocs"],parameters:{docs:{source:{type:"dynamic"}}},render:()=>e.jsxs("div",{className:"relative inline-flex items-center gap-1",children:["just text",e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(a,{children:e.jsx(p,{icon:e.jsx(d,{})})}),e.jsx(l,{children:e.jsx("p",{children:"Add to library"})})]})})]})},r={},t={render:()=>e.jsx("div",{className:"relative",children:e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(a,{asChild:!0,children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx(C,{children:"sEcond tooltip"}),e.jsx(p,{icon:e.jsx(d,{})})]})}),e.jsx(y,{children:e.jsx(l,{side:"left",sideOffset:40,align:"start",children:e.jsx("p",{children:"Add to library"})})})]})})})},s={render:()=>e.jsx("div",{className:"relative flex justify-center",children:e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(a,{asChild:!0,children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx(C,{children:"sEcond tooltip"}),e.jsx(p,{icon:e.jsx(d,{})})]})}),e.jsx(y,{children:e.jsx(l,{side:"left",sideOffset:500,align:"start",children:e.jsx("p",{children:"Add to library"})})})]})})})},i={render:()=>e.jsx(P,{children:"This is an info tooltip"})};var c,m,x;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var f,T,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="relative">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex gap-1">
              <Text>sEcond tooltip</Text>
              <Icon icon={<InfoIcon />} />
            </div>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent side="left" sideOffset={40} align="start">
              <p>Add to library</p>
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
    </div>
}`,...(h=(T=t.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var j,g,u;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="relative flex justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex gap-1">
              <Text>sEcond tooltip</Text>
              <Icon icon={<InfoIcon />} />
            </div>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent side="left" sideOffset={500} align="start">
              <p>Add to library</p>
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
    </div>
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,I,N;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <InfoTooltip>This is an info tooltip</InfoTooltip>
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const Q=["Default","NewStory","WithLeftOffset","WithInfoTooltip"];export{r as Default,t as NewStory,i as WithInfoTooltip,s as WithLeftOffset,Q as __namedExportsOrder,M as default};
