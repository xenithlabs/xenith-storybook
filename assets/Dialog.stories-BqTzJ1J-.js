import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{D as l,a as d,b as p,c,d as g,e as u,f as h}from"./Dialog-t4Lnvx-X.js";import{B as r}from"./Button-iG-w-ZO3.js";import{L as a}from"./Label-DUDV6PD_.js";import{I as t}from"./useClickOutside-k3t8SAzG.js";import"./index-DRjF_FHU.js";import"./index-COysi2iU.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-qtGI3euC.js";import"./index-DdILnG7L.js";import"./index-CWbDPhO_.js";import"./index-BhXpUKZt.js";import"./cn-C-5SdYIA.js";import"./close-CAN3cq4E.js";import"./Icon-Bs9G1Rwk.js";import"./index-Bb4qSo10.js";import"./Heading-BbwmavmP.js";import"./index-HZDBD2ik.js";import"./styles-BNEhTmYy.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";import"./index-_lyfCmBZ.js";import"./search-CWRmq9WO.js";import"./stringCase-DaZl3p-i.js";import"./check-rKbD1QKS.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-CAHntWCK.js";import"./Checkbox-CY4DEde6.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";const M={title:"Xenith UI/Components/Dialog",component:l,tags:["autodocs"],parameters:{docs:{controls:{include:["children"]},subtitle:"A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."}}},i={render:m=>e.jsxs(l,{...m,children:[e.jsx(d,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Edit Profile"})}),e.jsxs(p,{className:"sm:max-w-[425px]",children:[e.jsxs(c,{children:[e.jsx(g,{children:"Edit profile"}),e.jsx(u,{children:"Description is here"})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(t,{id:"name",value:"Pedro Duarte",containerClassName:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(t,{id:"username",value:"@peduarte",containerClassName:"col-span-3"})]})]}),e.jsxs(h,{children:[e.jsx(r,{variant:"outline",theme:"neutral",children:"Cancel"}),e.jsx(r,{type:"submit",children:"Save changes"})]})]})]})};var n,o,s;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(o=i.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const Q=["Default"];export{i as Default,Q as __namedExportsOrder,M as default};
