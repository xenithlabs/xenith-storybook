import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{T as l,a as o,b as c,c as d,d as R}from"./Tooltip-D2ba4dcD.js";import{c as _}from"./cn-8RyR4BqC.js";import{F as r}from"./info-Cre7IJy9.js";import{r as x}from"./index-DRjF_FHU.js";import{I as f}from"./Icon-CTnhpE1d.js";import{T as O}from"./Text-C8HBwI4b.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./index-HZDBD2ik.js";function E({children:p,fallback:t=null}){const[m,S]=x.useState(!1);return x.useEffect(()=>{S(!0)},[]),m?e.jsx(e.Fragment,{children:p}):e.jsx(e.Fragment,{children:t})}E.__docgenInfo={description:"",methods:[],displayName:"ClientOnly",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fallback:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"null",computed:!1}}}};const w=({children:p,triggerClassName:t,contentClassName:m})=>e.jsx(E,{fallback:e.jsx(r,{className:t}),children:e.jsx(l,{children:e.jsxs(o,{children:[e.jsx(c,{className:t,children:e.jsx(r,{})}),e.jsx(d,{className:_("whitespace-pre-line max-w-[400px]",m),children:p})]})})});w.__docgenInfo={description:"",methods:[],displayName:"InfoTooltip",props:{triggerClassName:{required:!1,tsType:{name:"string"},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const Y={title:"Xenith UI/Components/Tooltip",component:o,tags:["autodocs"],parameters:{docs:{source:{type:"dynamic"}}},render:()=>e.jsxs("div",{className:"relative inline-flex items-center gap-1",children:["just text",e.jsx(l,{children:e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(f,{icon:e.jsx(r,{})})}),e.jsx(d,{children:e.jsx("p",{children:"Add to library"})})]})})]})},s={},i={render:()=>e.jsx("div",{className:"relative",children:e.jsx(l,{children:e.jsxs(o,{children:[e.jsx(c,{asChild:!0,children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx(O,{children:"sEcond tooltip"}),e.jsx(f,{icon:e.jsx(r,{})})]})}),e.jsx(R,{children:e.jsx(d,{side:"left",sideOffset:40,align:"start",children:e.jsx("p",{children:"Add to library"})})})]})})})},n={render:()=>e.jsx("div",{className:"relative flex justify-center",children:e.jsx(l,{children:e.jsxs(o,{children:[e.jsx(c,{asChild:!0,children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx(O,{children:"sEcond tooltip"}),e.jsx(f,{icon:e.jsx(r,{})})]})}),e.jsx(R,{children:e.jsx(d,{side:"left",sideOffset:500,align:"start",children:e.jsx("p",{children:"Add to library"})})})]})})})},a={render:()=>e.jsx(w,{children:"This is an info tooltip"})};var T,h,j;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(j=(h=s.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var u,g,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var N,y,I;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(y=n.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var C,b,P;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <InfoTooltip>This is an info tooltip</InfoTooltip>
}`,...(P=(b=a.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};const Z=["Default","NewStory","WithLeftOffset","WithInfoTooltip"];export{s as Default,i as NewStory,a as WithInfoTooltip,n as WithLeftOffset,Z as __namedExportsOrder,Y as default};
