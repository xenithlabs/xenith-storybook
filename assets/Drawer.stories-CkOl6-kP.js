import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as p}from"./index-DRjF_FHU.js";import{$ as z,a as K,b as H,c as L,e as E,f as V,d as W,g as q}from"./index-BoPx_Bfl.js";import{c as M}from"./index-Bb4qSo10.js";import{F as P}from"./close-D2djoYoT.js";import{c as i}from"./cn-8RyR4BqC.js";import{B as o}from"./Button-C-jt4Opy.js";import{h as B}from"./Heading-DjlBwQyS.js";import{F as U}from"./maximize-DG_pTxn1.js";import{L as s}from"./Label-CfHWTmrj.js";import{I as n}from"./useClickOutside-CI_1m4PE.js";import{I as X}from"./Icon-CTnhpE1d.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-qtGI3euC.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-BhXpUKZt.js";import"./index-HZDBD2ik.js";import"./styles-x1yxmyQd.js";import"./chevron-up-Dp-rU9It.js";import"./chevron-down-CyV3wpL8.js";import"./spinner-ZMRwnkYw.js";import"./index-_lyfCmBZ.js";import"./search-CRI6LAtg.js";import"./stringCase-DaZl3p-i.js";import"./check-C0C6JGvp.js";import"./clock-DRhx3Wks.js";import"./mini-FlV67GHA.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-CAHntWCK.js";import"./Checkbox-CAdLyoQE.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./Text-C8HBwI4b.js";const m=z,j=K,G=W,J=q,v=p.forwardRef(({className:r,...a},t)=>e.jsx(H,{className:i("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...a,ref:t}));v.displayName=H.displayName;const Q=M("flex flex-col fixed z-50 bg-bg-default shadow-modal transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-3 top-3 rounded-xl border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-3 bottom-3 rounded-xl border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-3 left-3 h-[calc(100%-2rem)] rounded-xl border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-3 right-3 h-[calc(100%-2rem)] rounded-xl border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),d=p.forwardRef(({side:r="right",className:a,children:t,...l},D)=>e.jsxs(J,{children:[e.jsx(v,{}),e.jsx(L,{ref:D,className:i(Q({side:r}),"p-6",a),onOpenAutoFocus:S=>S.preventDefault(),...l,children:t})]}));d.displayName=L.displayName;const k=p.forwardRef(({shortcut:r,children:a,...t},l)=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(o,{ref:l,size:"sm",theme:"neutral",variant:"nude",className:"px-3",...t,children:a}),r&&e.jsx("kbd",{className:i(B({variant:"titleSm"}),"text-text-weaker select-none"),children:r})]})),c=({className:r,showCloseButton:a=!0,hasDivider:t=!1,children:l,...D})=>e.jsxs("div",{className:i("flex justify-between mb-4 border-border-default shrink-0",{"pb-3 border-b":t},r),...D,children:[e.jsx("div",{className:"flex flex-col justify-center",children:l}),a&&e.jsx(G,{asChild:!0,children:e.jsx(o,{iconOnly:!0,icon:e.jsx(P,{}),variant:"nude",theme:"neutral",size:"sm"})})]});c.displayName="DrawerHeader";const f=p.forwardRef(({className:r,...a},t)=>e.jsx(E,{ref:t,className:i(B({variant:"titleMd"}),r),...a}));f.displayName=E.displayName;const u=p.forwardRef(({className:r,...a},t)=>e.jsx(V,{ref:t,className:i("text-sm text-text-weak",r),...a}));u.displayName=V.displayName;v.__docgenInfo={description:"",methods:[]};d.__docgenInfo={description:"",methods:[],props:{side:{defaultValue:{value:'"right"',computed:!1},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},hasDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};k.__docgenInfo={description:"",methods:[],displayName:"DrawerHeaderAction"};f.__docgenInfo={description:"",methods:[]};u.__docgenInfo={description:"",methods:[]};const _e={title:"Xenith UI/Components/Drawer",component:m,tags:["autodocs"],render:r=>e.jsxs(m,{...r,children:[e.jsx(j,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open Drawer"})}),e.jsxs(d,{children:[e.jsxs(c,{hasDivider:!0,children:[e.jsx(f,{children:"Transaction Details"}),e.jsx(u,{children:"View and edit transaction information"})]}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"reference",className:"text-right",children:"Reference"}),e.jsx(n,{id:"reference",value:"REF-12345678",containerClassName:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"amount",className:"text-right",children:"Amount"}),e.jsx(n,{id:"amount",value:"10,000,000.00",containerClassName:"col-span-3"})]})]})]})]})},x={},h={render:r=>e.jsxs(m,{...r,children:[e.jsx(j,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open Drawer with Action"})}),e.jsxs(d,{children:[e.jsx(c,{children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(k,{shortcut:"⌘↵",icon:e.jsx(X,{icon:e.jsx(U,{})}),onKeyDown:a=>{a.metaKey&&a.key==="Enter"&&alert("Open full page")},children:"Open full page"})})}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"reference",className:"text-right",children:"Reference"}),e.jsx(n,{id:"reference",value:"REF-12345678",containerClassName:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"amount",className:"text-right",children:"Amount"}),e.jsx(n,{id:"amount",value:"10,000,000.00",containerClassName:"col-span-3"})]})]})]})]})},g={render:r=>e.jsxs(m,{...r,children:[e.jsx(j,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open Left Drawer"})}),e.jsxs(d,{side:"left",children:[e.jsxs(c,{children:[e.jsx(f,{children:"Transaction Details"}),e.jsx(u,{children:"View and edit transaction information"})]}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"reference",className:"text-right",children:"Reference"}),e.jsx(n,{id:"reference",value:"REF-12345678",containerClassName:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"amount",className:"text-right",children:"Amount"}),e.jsx(n,{id:"amount",value:"10,000,000.00",containerClassName:"col-span-3"})]})]})]})]})},w={render:r=>e.jsxs(m,{...r,children:[e.jsx(j,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open Drawer"})}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(f,{children:"Transaction Details"}),e.jsx(u,{children:"View and edit transaction information"})]}),e.jsx("div",{className:"overflow-y-auto flex-1",children:Array.from({length:100}).map((a,t)=>e.jsx("div",{className:"p-4",children:e.jsxs("p",{children:["Item ",t]})},t))})]})]})};var N,b,y;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(y=(b=x.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var C,$,F;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=($=h.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var I,T,R;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(T=g.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var O,A,_;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Transaction Details</DrawerTitle>
          <DrawerDescription>
            View and edit transaction information
          </DrawerDescription>
        </DrawerHeader>
        <div className="overflow-y-auto flex-1">
          {Array.from({
          length: 100
        }).map((_, index) => <div key={index} className="p-4">
              <p>Item {index}</p>
            </div>)}
        </div>
      </DrawerContent>
    </Drawer>
}`,...(_=(A=w.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const He=["Default","WithHeaderAction","LeftSide","WithOverflow"];export{x as Default,g as LeftSide,h as WithHeaderAction,w as WithOverflow,He as __namedExportsOrder,_e as default};
