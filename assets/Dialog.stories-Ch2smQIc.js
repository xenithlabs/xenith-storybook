import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r}from"./index-l2PZgWEW.js";import{$ as w,a as _,c as b,d as D,b as C,e as j,f as v,g as I}from"./index-Vudkywkh.js";import{c as s}from"./cn-C-5SdYIA.js";import{F}from"./close-Bwe4q-Z3.js";import{I as B}from"./Icon-ev__gahW.js";import{h as E}from"./Heading-B_Jl69qA.js";import{t as L}from"./styles-BNEhTmYy.js";import{B as n}from"./Button-C9MRXLXV.js";import{L as f}from"./Label-FDaRk8P_.js";import{I as x}from"./useClickOutside-DPZua7Nn.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./index-DPMSfDr2.js";import"./index-C76mvIvD.js";import"./index-Bel6ALHY.js";import"./index-DZOIkxWA.js";import"./index-Bb4qSo10.js";import"./index-Cm6j2cFO.js";import"./styles-BRwXF_yu.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";import"./index-CqnGoJLG.js";import"./search-BceqokmR.js";import"./check-4u3gJW-P.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-DjcUcJmE.js";import"./Checkbox-CCHalYd3.js";import"./index-CZsjDy6p.js";import"./index-BmdjtsoG.js";const y=w,R=_,T=I,d=r.forwardRef(({className:a,...t},o)=>e.jsx(b,{ref:o,className:s("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...t}));d.displayName=b.displayName;const l=r.forwardRef(({className:a,children:t,...o},$)=>e.jsxs(T,{children:[e.jsx(d,{}),e.jsx(D,{ref:$,className:s("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-modal duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...o,children:t})]}));l.displayName=D.displayName;const c=({className:a,children:t,...o})=>e.jsxs("div",{className:"flex items-center justify-between border-b pb-3",children:[e.jsx("div",{className:s("flex flex-col space-y-1.5 text-center sm:text-left",a),...o,children:t}),e.jsxs(C,{className:"h-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-text-weaker",children:[e.jsx(B,{icon:e.jsx(F,{})}),e.jsx("span",{className:"sr-only",children:"Close"})]})]});c.displayName="DialogHeader";const m=({className:a,...t})=>e.jsx("div",{className:s("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 border-t pt-3",a),...t});m.displayName="DialogFooter";const p=r.forwardRef(({className:a,...t},o)=>e.jsx(j,{ref:o,className:s(E({variant:"titleMd"}),a),...t}));p.displayName=j.displayName;const g=r.forwardRef(({className:a,...t},o)=>e.jsx(v,{ref:o,className:s(L({variant:"medium"}),a),...t}));g.displayName=v.displayName;d.__docgenInfo={description:"",methods:[]};l.__docgenInfo={description:"",methods:[]};c.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};m.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};p.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[]};const pe={title:"Xenith UI/Components/Dialog",component:y,tags:["autodocs"],parameters:{docs:{controls:{include:["children"]},subtitle:"A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."}}},i={render:a=>e.jsxs(y,{...a,children:[e.jsx(R,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Edit Profile"})}),e.jsxs(l,{className:"sm:max-w-[425px]",children:[e.jsxs(c,{children:[e.jsx(p,{children:"Edit profile"}),e.jsx(g,{children:"Description is here"})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(f,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(x,{id:"name",value:"Pedro Duarte",containerClassName:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(f,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(x,{id:"username",value:"@peduarte",containerClassName:"col-span-3"})]})]}),e.jsxs(m,{children:[e.jsx(n,{variant:"outline",theme:"neutral",children:"Cancel"}),e.jsx(n,{type:"submit",children:"Save changes"})]})]})]})};var u,h,N;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Description is here</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" containerClassName="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" containerClassName="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" theme="neutral">
            Cancel
          </Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(N=(h=i.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};const ge=["Default"];export{i as Default,ge as __namedExportsOrder,pe as default};
