import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{I as a,a as H,S as q,b as G,c as h,C as J,P as K}from"./useClickOutside-YMeLdNuT.js";import{F as M}from"./home-BYFYJsES.js";import{r as Q}from"./index-l2PZgWEW.js";import{L as s}from"./Label-FDaRk8P_.js";import{I as T}from"./Icon-ev__gahW.js";import"./cn-C-5SdYIA.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./search-BceqokmR.js";import"./close-Bwe4q-Z3.js";import"./stringCase-DaZl3p-i.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";import"./check-4u3gJW-P.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./floating-ui.dom-BuxmzwbT.js";import"./Button-YSPy_GLC.js";import"./index-Cm6j2cFO.js";import"./styles-DsUnyYA6.js";import"./index-DjcUcJmE.js";import"./Checkbox-CCHalYd3.js";import"./index-CZsjDy6p.js";import"./index-BmdjtsoG.js";import"./index-DZOIkxWA.js";import"./index-CqnGoJLG.js";const Ne={title:"Xenith UI/Components/Input",parameters:{layout:"centered",docs:{subtitle:"Displays a form input field or a component that looks like an input field."}},tags:["autodocs"]},t={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Email"}),e.jsx(a,{...r,type:"email",placeholder:"Email"})]})},o={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Email"}),e.jsx(a,{...r,error:!0,type:"email",placeholder:"Email"})]})},n={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(H,{noBorder:!0,children:e.jsx(T,{icon:e.jsx(M,{}),className:"text-text-weaker",size:"lg"})}),type:"search",placeholder:"Search.."})]})},c={render:()=>{const[r,u]=Q.useState("");return e.jsx(q,{value:r,onChange:X=>u(X.target.value),onClear:()=>u("")})}},d={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(H,{children:"https://"}),type:"search",placeholder:"Search.."})]})},l={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,rightComponent:e.jsx(G,{children:".com"}),type:"search",placeholder:"Search.."})]})},i={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(h,{options:[{label:"option 1",value:"option1"},{label:"option 2",value:"option2"},{label:"option 3",value:"option3"}]}),type:"search",placeholder:"Search.."})]})},p={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(h,{as:J}),type:"search",placeholder:"Search.."})]})},m={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(s,{children:"Phone"}),e.jsx(a,{...r,leftComponent:e.jsx(h,{as:K}),type:"tel",placeholder:"Phone"})]})};var g,S,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Email</Label>
      <Input {...args} type="email" placeholder="Email" />
    </div>
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var v,j,I;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Email</Label>
      <Input {...args} error type="email" placeholder="Email" />
    </div>
}`,...(I=(j=o.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var f,y,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputLeftAddon noBorder>
            <Icon icon={<HomeIcon />} className="text-text-weaker" size="lg" />
          </InputLeftAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var L,N,A;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <SearchInput value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} />;
  }
}`,...(A=(N=c.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var C,E,W;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputLeftAddon>https://</InputLeftAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var P,R,U;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} rightComponent={<InputRightAddon>.com</InputRightAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(U=(R=l.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var O,k,V;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(V=(k=i.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var w,D,z;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <div className="h-[400px]">{<Story />}</div>],
  render: args => <div className="grid gap-1 ">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputSelectAddon as={CountrySelect} />} type="search" placeholder="Search.." />
    </div>
}`,...(z=(D=p.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var B,F,_;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  decorators: [Story => <div className="h-[400px]">{<Story />}</div>],
  render: args => <div className="grid gap-1 ">
      <Label>Phone</Label>
      <Input {...args} leftComponent={<InputSelectAddon as={PhoneSelect} />} type="tel" placeholder="Phone" />
    </div>
}`,...(_=(F=m.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};const Ae=["Default","IsError","WithIcon","UsingSearchInput","WithLeftAddon","WithRightAddon","WithSelectAddon","WithSelectAddOnUsingSelectCountry","WithSelectAddOnUsingPhoneSelect"];export{t as Default,o as IsError,c as UsingSearchInput,n as WithIcon,d as WithLeftAddon,l as WithRightAddon,m as WithSelectAddOnUsingPhoneSelect,p as WithSelectAddOnUsingSelectCountry,i as WithSelectAddon,Ae as __namedExportsOrder,Ne as default};
