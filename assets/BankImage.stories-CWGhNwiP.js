import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{B as l,a as g,b as d}from"./BankImage-DXE0xlqe.js";import{T as x,a as T,b as u,c as k}from"./Tooltip-D2ba4dcD.js";import"./index-DRjF_FHU.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./cn-8RyR4BqC.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";const G={title:"Xenith UI/Components/BankImage",component:l,tags:["autodocs"],args:{bank:g.BCA}},o={render:c=>r.jsx("div",{className:"flex flex-wrap max-w-full gap-4",children:d.map(a=>r.jsx(x,{children:r.jsxs(T,{children:[r.jsx(u,{children:r.jsx(l,{...c,bank:a})}),r.jsx(k,{children:a})]})},a))})},e={};var t,n,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap max-w-full gap-4">
      {bankImages.map(name => {
      return <TooltipProvider key={name}>
            <Tooltip>
              <TooltipTrigger>
                <BankImage {...args} bank={name} />
              </TooltipTrigger>
              <TooltipContent>{name}</TooltipContent>
            </Tooltip>
          </TooltipProvider>;
    })}
    </div>
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const K=["AllBankImage","SingleImage"];export{o as AllBankImage,e as SingleImage,K as __namedExportsOrder,G as default};
