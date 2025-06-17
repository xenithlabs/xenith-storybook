import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{D as l,a as p,b as d,c,d as g,e as u,f as h}from"./Dialog-CC7HiIcQ.js";import{B as r}from"./Button-C-jt4Opy.js";import{L as t}from"./Label-CfHWTmrj.js";import{I as a}from"./useClickOutside-CTb3d7a-.js";import"./index-DRjF_FHU.js";import"./index-BoPx_Bfl.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-qtGI3euC.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-BhXpUKZt.js";import"./cn-8RyR4BqC.js";import"./close-D2djoYoT.js";import"./Icon-CTnhpE1d.js";import"./index-Bb4qSo10.js";import"./Heading-DjlBwQyS.js";import"./index-HZDBD2ik.js";import"./styles-x1yxmyQd.js";import"./chevron-up-Dp-rU9It.js";import"./chevron-down-CyV3wpL8.js";import"./spinner-ZMRwnkYw.js";import"./index-_lyfCmBZ.js";import"./search-CRI6LAtg.js";import"./stringCase-DaZl3p-i.js";import"./check-C0C6JGvp.js";import"./clock-DRhx3Wks.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-CAHntWCK.js";import"./Checkbox-CAdLyoQE.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./Text-C8HBwI4b.js";const W={title:"Xenith UI/Components/Dialog",component:l,tags:["autodocs"],parameters:{docs:{controls:{include:["children"]},subtitle:"A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."}}},i={render:m=>e.jsxs(l,{...m,children:[e.jsx(p,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Edit Profile"})}),e.jsxs(d,{className:"sm:max-w-[425px]",children:[e.jsxs(c,{children:[e.jsx(g,{children:"Edit profile"}),e.jsx(u,{children:"Description is here"})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(t,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(a,{id:"name",value:"Pedro Duarte",containerClassName:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(t,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(a,{id:"username",value:"@peduarte",containerClassName:"col-span-3"})]})]}),e.jsxs(h,{children:[e.jsx(r,{variant:"outline",theme:"neutral",children:"Cancel"}),e.jsx(r,{type:"submit",children:"Save changes"})]})]})]})};var o,n,s;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(n=i.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Y=["Default"];export{i as Default,Y as __namedExportsOrder,W as default};
