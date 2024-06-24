import{j as e}from"./cn-BTg03kWI.js";import{I as k}from"./Icon-DG9iq8fw.js";import{F as w}from"./search-MFtvWDu4.js";import{I as a,a as U,b as D,c as p,C as z,P as B}from"./useClickOutside-BUlHPC6E.js";import{L as t}from"./Label-DIT9I768.js";import"./index-l2PZgWEW.js";import"./index-Bb4qSo10.js";import"./styles-BBItLkJ7.js";import"./check-4u3gJW-P.js";import"./index-q8uFWT42.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./index-CaNG7YX3.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-CeZp-NtI.js";import"./index-DeznNegx.js";import"./index-D9GVr0Dr.js";import"./Checkbox-CcG5GgO3.js";import"./index-CZsjDy6p.js";import"./index-Vu1Slila.js";import"./index-CQG7aoJZ.js";const se={title:"Xenith UI/Components/Input",parameters:{layout:"centered",docs:{subtitle:"Displays a form input field or a component that looks like an input field."}},tags:["autodocs"]},o={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(t,{children:"Email"}),e.jsx(a,{...r,type:"email",placeholder:"Email"})]})},s={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(t,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(U,{noBorder:!0,children:e.jsx(k,{icon:e.jsx(w,{}),className:"text-text-weaker",size:"lg"})}),type:"search",placeholder:"Search.."})]})},n={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(t,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(U,{children:"https://"}),type:"search",placeholder:"Search.."})]})},c={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(t,{children:"Search"}),e.jsx(a,{...r,rightComponent:e.jsx(D,{children:".com"}),type:"search",placeholder:"Search.."})]})},d={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(t,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(p,{options:[{label:"option 1",value:"option1"},{label:"option 2",value:"option2"},{label:"option 3",value:"option3"}]}),type:"search",placeholder:"Search.."})]})},l={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(t,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(p,{as:z}),type:"search",placeholder:"Search.."})]})},i={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(t,{children:"Phone"}),e.jsx(a,{...r,leftComponent:e.jsx(p,{as:B}),type:"tel",placeholder:"Phone"})]})};var h,m,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Email</Label>
      <Input {...args} type="email" placeholder="Email" />
    </div>
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,S,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputLeftAddon noBorder>
            <Icon icon={<SearchIcon />} className="text-text-weaker" size="lg" />
          </InputLeftAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var j,v,f;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputLeftAddon>https://</InputLeftAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var I,y,b;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} rightComponent={<InputRightAddon>.com</InputRightAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var L,A,N;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [Story => <div className="h-[400px]">{<Story />}</div>],
  render: args => <div className="grid gap-1 ">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputSelectAddon options={[{
      label: "option 1",
      value: "option1"
    }, {
      label: "option 2",
      value: "option2"
    }, {
      label: "option 3",
      value: "option3"
    }]} />} type="search" placeholder="Search.." />
    </div>
}`,...(N=(A=d.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var C,W,P;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [Story => <div className="h-[400px]">{<Story />}</div>],
  render: args => <div className="grid gap-1 ">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputSelectAddon as={CountrySelect} />} type="search" placeholder="Search.." />
    </div>
}`,...(P=(W=l.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var R,E,O;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [Story => <div className="h-[400px]">{<Story />}</div>],
  render: args => <div className="grid gap-1 ">
      <Label>Phone</Label>
      <Input {...args} leftComponent={<InputSelectAddon as={PhoneSelect} />} type="tel" placeholder="Phone" />
    </div>
}`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const ne=["Default","WithIcon","WithLeftAddon","WithRightAddon","WithSelectAddon","WithSelectAddOnUsingSelectCountry","WithSelectAddOnUsingPhoneSelect"];export{o as Default,s as WithIcon,n as WithLeftAddon,c as WithRightAddon,i as WithSelectAddOnUsingPhoneSelect,l as WithSelectAddOnUsingSelectCountry,d as WithSelectAddon,ne as __namedExportsOrder,se as default};
