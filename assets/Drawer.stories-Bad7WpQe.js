import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as d}from"./index-DRjF_FHU.js";import{$ as V,a as B,b as A,c as L,e as _,f as H,d as S,g as k}from"./index-COysi2iU.js";import{c as z}from"./index-Bb4qSo10.js";import{F as K}from"./close-CAN3cq4E.js";import{c as i}from"./cn-8RyR4BqC.js";import{B as c}from"./Button-Bkz3uuoL.js";import{h as O}from"./Heading-BT2nFqfh.js";import{I as q}from"./Icon-CTnhpE1d.js";import{F as M}from"./maximize-C0DAjtQq.js";import{L as s}from"./Label-MWD1E6Co.js";import{I as n}from"./useClickOutside-CrJN2rio.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-qtGI3euC.js";import"./index-DdILnG7L.js";import"./index-CWbDPhO_.js";import"./index-BhXpUKZt.js";import"./index-HZDBD2ik.js";import"./styles-BNEhTmYy.js";import"./chevron-up-4gJfOMpE.js";import"./chevron-down-CqDGuCdo.js";import"./spinner-jGAO5kda.js";import"./index-_lyfCmBZ.js";import"./search-CWRmq9WO.js";import"./stringCase-DaZl3p-i.js";import"./check-rKbD1QKS.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-CAHntWCK.js";import"./Checkbox-BR7RWrKp.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";const x=V,j=B,W=S,P=k,N=d.forwardRef(({className:a,...r},t)=>e.jsx(A,{className:i("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r,ref:t}));N.displayName=A.displayName;const U=z("fixed z-50 gap-4 bg-bg-default shadow-modal transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-3 top-3 rounded-xl border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-3 bottom-3 rounded-xl border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-3 left-3 h-[calc(100%-2rem)] rounded-xl border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-3 right-3 h-[calc(100%-2rem)] rounded-xl border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),l=d.forwardRef(({side:a="right",className:r,children:t,...o},w)=>e.jsxs(P,{children:[e.jsx(N,{}),e.jsx(L,{ref:w,className:i(U({side:a}),"p-6",r),onOpenAutoFocus:E=>E.preventDefault(),...o,children:t})]}));l.displayName=L.displayName;const T=d.forwardRef(({shortcut:a,children:r,...t},o)=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(c,{ref:o,size:"sm",theme:"neutral",variant:"nude",className:"px-3",...t,children:r}),a&&e.jsx("kbd",{className:i(O({variant:"titleSm"}),"text-text-weaker select-none"),children:a})]})),m=({className:a,showCloseButton:r=!0,hasDivider:t=!0,children:o,...w})=>e.jsxs("div",{className:i("flex justify-between mb-6 border-border-default",{"pb-3 border-b":t},a),...w,children:[e.jsx("div",{className:"flex flex-col",children:o}),r&&e.jsx(W,{asChild:!0,children:e.jsx(c,{iconOnly:!0,icon:e.jsx(K,{}),variant:"nude",theme:"neutral",size:"sm"})})]});m.displayName="DrawerHeader";const h=d.forwardRef(({className:a,...r},t)=>e.jsx(_,{ref:t,className:i(O({variant:"titleMd"}),a),...r}));h.displayName=_.displayName;const g=d.forwardRef(({className:a,...r},t)=>e.jsx(H,{ref:t,className:i("text-sm text-text-weak",a),...r}));g.displayName=H.displayName;N.__docgenInfo={description:"",methods:[]};l.__docgenInfo={description:"",methods:[],props:{side:{defaultValue:{value:'"right"',computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},hasDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};T.__docgenInfo={description:"",methods:[],displayName:"DrawerHeaderAction"};h.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[]};const Ce={title:"Xenith UI/Components/Drawer",component:x,tags:["autodocs"],render:a=>e.jsxs(x,{...a,children:[e.jsx(j,{asChild:!0,children:e.jsx(c,{variant:"outline",children:"Open Drawer"})}),e.jsxs(l,{children:[e.jsxs(m,{children:[e.jsx(h,{children:"Transaction Details"}),e.jsx(g,{children:"View and edit transaction information"})]}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"reference",className:"text-right",children:"Reference"}),e.jsx(n,{id:"reference",value:"REF-12345678",containerClassName:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"amount",className:"text-right",children:"Amount"}),e.jsx(n,{id:"amount",value:"10,000,000.00",containerClassName:"col-span-3"})]})]})]})]})},p={},f={render:a=>e.jsxs(x,{...a,children:[e.jsx(j,{asChild:!0,children:e.jsx(c,{variant:"outline",children:"Open Drawer with Action"})}),e.jsxs(l,{children:[e.jsx(m,{children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(T,{shortcut:"⌘↵",icon:e.jsx(q,{icon:e.jsx(M,{})}),onKeyDown:r=>{r.metaKey&&r.key==="Enter"&&alert("Open full page")},children:"Open full page"})})}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"reference",className:"text-right",children:"Reference"}),e.jsx(n,{id:"reference",value:"REF-12345678",containerClassName:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"amount",className:"text-right",children:"Amount"}),e.jsx(n,{id:"amount",value:"10,000,000.00",containerClassName:"col-span-3"})]})]})]})]})},u={render:a=>e.jsxs(x,{...a,children:[e.jsx(j,{asChild:!0,children:e.jsx(c,{variant:"outline",children:"Open Left Drawer"})}),e.jsxs(l,{side:"left",children:[e.jsxs(m,{children:[e.jsx(h,{children:"Transaction Details"}),e.jsx(g,{children:"View and edit transaction information"})]}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"reference",className:"text-right",children:"Reference"}),e.jsx(n,{id:"reference",value:"REF-12345678",containerClassName:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"amount",className:"text-right",children:"Amount"}),e.jsx(n,{id:"amount",value:"10,000,000.00",containerClassName:"col-span-3"})]})]})]})]})};var v,D,b;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var y,$,C;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer with Action</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <DrawerHeaderAction shortcut="⌘↵" icon={<Icon icon={<MaximizeIcon />} />} onKeyDown={e => {
            if (e.metaKey && e.key === "Enter") {
              alert("Open full page");
            }
          }}>
              Open full page
            </DrawerHeaderAction>
          </div>
        </DrawerHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reference" className="text-right">
              Reference
            </Label>
            <Input id="reference" value="REF-12345678" containerClassName="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input id="amount" value="10,000,000.00" containerClassName="col-span-3" />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
}`,...(C=($=f.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var F,R,I;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Left Drawer</Button>
      </DrawerTrigger>
      <DrawerContent side="left">
        <DrawerHeader>
          <DrawerTitle>Transaction Details</DrawerTitle>
          <DrawerDescription>
            View and edit transaction information
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reference" className="text-right">
              Reference
            </Label>
            <Input id="reference" value="REF-12345678" containerClassName="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input id="amount" value="10,000,000.00" containerClassName="col-span-3" />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
}`,...(I=(R=u.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const Fe=["Default","WithHeaderAction","LeftSide"];export{p as Default,u as LeftSide,f as WithHeaderAction,Fe as __namedExportsOrder,Ce as default};
