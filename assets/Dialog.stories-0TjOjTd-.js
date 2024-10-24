import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r}from"./index-l2PZgWEW.js";import{$ as w,a as C,c as b,d as j,b as _,e as v,f as y,g as I}from"./index-Vudkywkh.js";import{c as s}from"./cn-C-5SdYIA.js";import{F}from"./close-Bwe4q-Z3.js";import{I as B}from"./Icon-ev__gahW.js";import{h as E}from"./Heading-B_Jl69qA.js";import{t as T}from"./styles-BNEhTmYy.js";import{B as d}from"./Button-C--AkFFB.js";import{L as x}from"./Label-FDaRk8P_.js";import{I as u}from"./useClickOutside-NyiZcUo9.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./index-DPMSfDr2.js";import"./index-C76mvIvD.js";import"./index-Bel6ALHY.js";import"./index-DZOIkxWA.js";import"./index-Bb4qSo10.js";import"./index-Cm6j2cFO.js";import"./styles-DsUnyYA6.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";import"./index-CqnGoJLG.js";import"./search-BceqokmR.js";import"./stringCase-DaZl3p-i.js";import"./check-4u3gJW-P.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-DjcUcJmE.js";import"./Checkbox-CCHalYd3.js";import"./index-CZsjDy6p.js";import"./index-BmdjtsoG.js";const $=w,L=C,R=I,l=r.forwardRef(({className:a,...t},o)=>e.jsx(b,{ref:o,className:s("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...t}));l.displayName=b.displayName;const c=r.forwardRef(({className:a,children:t,...o},n)=>e.jsxs(R,{children:[e.jsx(l,{}),e.jsx(j,{ref:n,className:s("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-modal duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...o,children:t})]}));c.displayName=j.displayName;const m=({className:a,containerClassName:t,children:o,...n})=>e.jsxs("div",{className:s("flex items-center justify-between border-b pb-3",t),children:[e.jsx("div",{className:s("flex flex-col space-y-1.5 text-center sm:text-left",a),...n,children:o}),e.jsxs(_,{className:"h-4 rounded-sm focus:ring-none active:ring-none focus:outline-none focus:ring-0  focus:ring-offset-0 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-text-weaker",children:[e.jsx(B,{icon:e.jsx(F,{})}),e.jsx("span",{className:"sr-only",children:"Close"})]})]});m.displayName="DialogHeader";const p=({className:a,...t})=>e.jsx("div",{className:s("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 border-t pt-3",a),...t});p.displayName="DialogFooter";const g=r.forwardRef(({className:a,...t},o)=>e.jsx(v,{ref:o,className:s(E({variant:"titleMd"}),a),...t}));g.displayName=v.displayName;const f=r.forwardRef(({className:a,...t},o)=>e.jsx(y,{ref:o,className:s(T({variant:"medium"}),a),...t}));f.displayName=y.displayName;l.__docgenInfo={description:"",methods:[]};c.__docgenInfo={description:"",methods:[]};m.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{containerClassName:{required:!1,tsType:{name:"string"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};g.__docgenInfo={description:"",methods:[]};f.__docgenInfo={description:"",methods:[]};const ge={title:"Xenith UI/Components/Dialog",component:$,tags:["autodocs"],parameters:{docs:{controls:{include:["children"]},subtitle:"A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."}}},i={render:a=>e.jsxs($,{...a,children:[e.jsx(L,{asChild:!0,children:e.jsx(d,{variant:"outline",children:"Edit Profile"})}),e.jsxs(c,{className:"sm:max-w-[425px]",children:[e.jsxs(m,{children:[e.jsx(g,{children:"Edit profile"}),e.jsx(f,{children:"Description is here"})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(x,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(u,{id:"name",value:"Pedro Duarte",containerClassName:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(x,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(u,{id:"username",value:"@peduarte",containerClassName:"col-span-3"})]})]}),e.jsxs(p,{children:[e.jsx(d,{variant:"outline",theme:"neutral",children:"Cancel"}),e.jsx(d,{type:"submit",children:"Save changes"})]})]})]})};var h,N,D;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(D=(N=i.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const fe=["Default"];export{i as Default,fe as __namedExportsOrder,ge as default};
