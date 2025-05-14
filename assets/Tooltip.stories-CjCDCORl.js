import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{T as n,a as o,b as a,c as l,d as I}from"./Tooltip-Dv84Hdt0.js";import{c as O}from"./cn-C-5SdYIA.js";import{F as c}from"./info-eaZ-klUF.js";import{I as d}from"./Icon-Bs9G1Rwk.js";import{T as C}from"./Text-BYjIVLkz.js";import"./index-DRjF_FHU.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./index-HZDBD2ik.js";const b=({content:P,triggerClassName:R,contentClassName:w})=>e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(a,{className:R,children:e.jsx(c,{})}),e.jsx(l,{className:O("whitespace-pre-line max-w-[400px]",w),children:P})]})});b.__docgenInfo={description:"",methods:[],displayName:"InfoTooltip",props:{content:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},triggerClassName:{required:!1,tsType:{name:"string"},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""}}};const M={title:"Xenith UI/Components/Tooltip",component:o,tags:["autodocs"],parameters:{docs:{source:{type:"dynamic"}}},render:()=>e.jsxs("div",{className:"relative inline-flex items-center gap-1",children:["just text",e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(a,{children:e.jsx(d,{icon:e.jsx(c,{})})}),e.jsx(l,{children:e.jsx("p",{children:"Add to library"})})]})})]})},r={},t={render:()=>e.jsx("div",{className:"relative",children:e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(a,{asChild:!0,children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx(C,{children:"sEcond tooltip"}),e.jsx(d,{icon:e.jsx(c,{})})]})}),e.jsx(I,{children:e.jsx(l,{side:"left",sideOffset:40,align:"start",children:e.jsx("p",{children:"Add to library"})})})]})})})},i={render:()=>e.jsx("div",{className:"relative flex justify-center",children:e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(a,{asChild:!0,children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx(C,{children:"sEcond tooltip"}),e.jsx(d,{icon:e.jsx(c,{})})]})}),e.jsx(I,{children:e.jsx(l,{side:"left",sideOffset:500,align:"start",children:e.jsx("p",{children:"Add to library"})})})]})})})},s={render:()=>e.jsx(b,{content:"This is an info tooltip"})};var p,m,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var f,T,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(T=t.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var j,g,u;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,N,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <InfoTooltip content="This is an info tooltip" />
}`,...(y=(N=s.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};const Q=["Default","NewStory","WithLeftOffset","WithInfoTooltip"];export{r as Default,t as NewStory,s as WithInfoTooltip,i as WithLeftOffset,Q as __namedExportsOrder,M as default};
