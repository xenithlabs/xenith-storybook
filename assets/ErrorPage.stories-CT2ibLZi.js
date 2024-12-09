import{j as r}from"./jsx-runtime-BhBAkL08.js";import{F as g}from"./error-DKVH6Ri6.js";import{H as l}from"./Heading-CSQHx7IS.js";import{T as u}from"./Text-D-wIA97j.js";import{I as x}from"./Icon-Bh8OjlaW.js";import{B as E}from"./Button-Dpzn5L7J.js";import"./index-caxmlYbZ.js";import"./index-D09aQd82.js";import"./index-Bb4qSo10.js";import"./cn-C-5SdYIA.js";import"./styles-BNEhTmYy.js";import"./spinner-C2p9_Bgj.js";import"./chevron-down-mN_p2z2a.js";const i=({children:e})=>r.jsx(l,{variant:"titleSm",className:"text-text-weak",children:e}),c=({children:e})=>r.jsx(u,{variant:"medium",className:"text-text-weak",children:e}),m=({children:e})=>r.jsx("div",{className:"mb-4 flex flex-col items-center gap-1",children:e}),p=()=>r.jsx(x,{icon:r.jsx(g,{})}),d=E;d.displayName="ErrorPageButton";const t=({children:e})=>r.jsx("div",{className:"flex flex-col items-center",children:e});i.__docgenInfo={description:"",methods:[],displayName:"ErrorPageTitle"};c.__docgenInfo={description:"",methods:[],displayName:"ErrorPageSubtitle"};m.__docgenInfo={description:"",methods:[],displayName:"ErrorPageContent"};p.__docgenInfo={description:"",methods:[],displayName:"ErrorPageIcon"};t.__docgenInfo={description:"",methods:[],displayName:"ErrorPage"};const C={title:"Xenith UI/Components/ErrorPage",component:t,tags:["autodocs"],args:{children:"label"}},o={render:()=>r.jsxs(t,{children:[r.jsx(p,{}),r.jsxs(m,{children:[r.jsx(i,{children:"Oops! Something went wrong."}),r.jsx(c,{children:"An unexpected error occurred. Please refresh the page or contact our support."})]}),r.jsx(d,{children:"Refresh the page"})]})};var n,a,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <ErrorPage>
      <ErrorPageIcon />
      <ErrorPageContent>
        <ErrorPageTitle>Oops! Something went wrong.</ErrorPageTitle>
        <ErrorPageSubtitle>
          An unexpected error occurred. Please refresh the page or contact our
          support.
        </ErrorPageSubtitle>
      </ErrorPageContent>
      <ErrorPageButton>Refresh the page</ErrorPageButton>
    </ErrorPage>
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,C as default};
