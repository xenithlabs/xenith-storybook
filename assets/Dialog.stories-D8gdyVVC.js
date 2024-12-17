import{j as e}from"./jsx-runtime-BhBAkL08.js";import{D as l,a as d,b as p,c,d as g,e as u,f as h}from"./Dialog-B1S6BMlb.js";import{B as r}from"./Button-B0WD4dUB.js";import{L as a}from"./Label-CEq0ZV6F.js";import{I as t}from"./useClickOutside-B5o3O2vD.js";import"./index-caxmlYbZ.js";import"./index-C6K4APRV.js";import"./index-d7ziAqdJ.js";import"./index-DIE_uK0V.js";import"./index-9ELtA30B.js";import"./index-CoQPK225.js";import"./index-D0ZzT1CX.js";import"./index-D1_gb_Tp.js";import"./Icon-7BdkfswG.js";import"./cn-C-5SdYIA.js";import"./index-Bb4qSo10.js";import"./close-CejhmAMe.js";import"./Heading-CSQHx7IS.js";import"./index-D09aQd82.js";import"./styles-BNEhTmYy.js";import"./spinner-C2p9_Bgj.js";import"./chevron-down-mN_p2z2a.js";import"./index-D3x6Zd7j.js";import"./search-l0nYC1Ts.js";import"./stringCase-DaZl3p-i.js";import"./check-CDvVW5im.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DBF0kSry.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-C1NPOm8g.js";import"./Checkbox-CVP6uP7r.js";import"./index-BnmSys5K.js";import"./index-BPrjlVTu.js";const Q={title:"Xenith UI/Components/Dialog",component:l,tags:["autodocs"],parameters:{docs:{controls:{include:["children"]},subtitle:"A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."}}},i={render:m=>e.jsxs(l,{...m,children:[e.jsx(d,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Edit Profile"})}),e.jsxs(p,{className:"sm:max-w-[425px]",children:[e.jsxs(c,{children:[e.jsx(g,{children:"Edit profile"}),e.jsx(u,{children:"Description is here"})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(t,{id:"name",value:"Pedro Duarte",containerClassName:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(t,{id:"username",value:"@peduarte",containerClassName:"col-span-3"})]})]}),e.jsxs(h,{children:[e.jsx(r,{variant:"outline",theme:"neutral",children:"Cancel"}),e.jsx(r,{type:"submit",children:"Save changes"})]})]})]})};var o,n,s;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(n=i.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const V=["Default"];export{i as Default,V as __namedExportsOrder,Q as default};
