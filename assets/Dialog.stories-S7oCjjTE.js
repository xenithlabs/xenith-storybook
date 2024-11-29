import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{D as l,a as p,b as d,c,d as g,e as u,f as h}from"./Dialog-B7t5h84S.js";import{B as r}from"./Button-BT-8gRS6.js";import{L as a}from"./Label-FDaRk8P_.js";import{I as t}from"./useClickOutside-B9BrWhWb.js";import"./index-l2PZgWEW.js";import"./index-DrokelHr.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./index-DPMSfDr2.js";import"./index-C76mvIvD.js";import"./index-Bel6ALHY.js";import"./index-DZOIkxWA.js";import"./Icon-ev__gahW.js";import"./cn-C-5SdYIA.js";import"./index-Bb4qSo10.js";import"./close-Bwe4q-Z3.js";import"./Heading-B_Jl69qA.js";import"./index-Cm6j2cFO.js";import"./styles-BNEhTmYy.js";import"./styles-Cs5Y1E_z.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";import"./index-CqnGoJLG.js";import"./search-BceqokmR.js";import"./stringCase-DaZl3p-i.js";import"./check-4u3gJW-P.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-DjcUcJmE.js";import"./Checkbox-CMCf69ok.js";import"./index-CZsjDy6p.js";import"./index-BmdjtsoG.js";const V={title:"Xenith UI/Components/Dialog",component:l,tags:["autodocs"],parameters:{docs:{controls:{include:["children"]},subtitle:"A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."}}},i={render:m=>e.jsxs(l,{...m,children:[e.jsx(p,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Edit Profile"})}),e.jsxs(d,{className:"sm:max-w-[425px]",children:[e.jsxs(c,{children:[e.jsx(g,{children:"Edit profile"}),e.jsx(u,{children:"Description is here"})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(t,{id:"name",value:"Pedro Duarte",containerClassName:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(t,{id:"username",value:"@peduarte",containerClassName:"col-span-3"})]})]}),e.jsxs(h,{children:[e.jsx(r,{variant:"outline",theme:"neutral",children:"Cancel"}),e.jsx(r,{type:"submit",children:"Save changes"})]})]})]})};var o,n,s;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(n=i.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const W=["Default"];export{i as Default,W as __namedExportsOrder,V as default};
