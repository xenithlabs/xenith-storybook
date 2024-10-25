import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{I as a,a as T,S as Z,b as $,c as g,C as ee,P as re}from"./useClickOutside-NyiZcUo9.js";import{F as ae}from"./home-BYFYJsES.js";import{r as se}from"./index-l2PZgWEW.js";import{L as s}from"./Label-FDaRk8P_.js";import{I as te}from"./Icon-ev__gahW.js";import"./cn-C-5SdYIA.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./search-BceqokmR.js";import"./close-Bwe4q-Z3.js";import"./stringCase-DaZl3p-i.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";import"./check-4u3gJW-P.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./floating-ui.dom-BuxmzwbT.js";import"./Button-C--AkFFB.js";import"./index-Cm6j2cFO.js";import"./styles-DsUnyYA6.js";import"./index-DjcUcJmE.js";import"./Checkbox-CCHalYd3.js";import"./index-CZsjDy6p.js";import"./index-BmdjtsoG.js";import"./index-DZOIkxWA.js";import"./index-CqnGoJLG.js";const De={title:"Xenith UI/Components/Input",parameters:{layout:"centered",docs:{subtitle:"Displays a form input field or a component that looks like an input field."}},tags:["autodocs"]},t={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Email"}),e.jsx(a,{...r,type:"email",placeholder:"Email"})]})},o={render:r=>e.jsxs("div",{className:"grid gap-1 bg-red-500 p-4",children:[e.jsx(s,{children:"Email"}),e.jsx(a,{...r,type:"email",placeholder:"Email"})]})},n={render:r=>e.jsxs("div",{className:"grid gap-1 p-4",children:[e.jsx(s,{children:"Email"}),e.jsx(a,{...r,disabled:!0,type:"email",placeholder:"Email"})]})},d={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Email"}),e.jsx(a,{...r,error:!0,type:"email",placeholder:"Email"})]})},c={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(T,{noBorder:!0,children:e.jsx(te,{icon:e.jsx(ae,{}),className:"text-text-weaker",size:"lg"})}),type:"search",placeholder:"Search.."})]})},l={render:()=>{const[r,S]=se.useState("");return e.jsx(Z,{value:r,onChange:Y=>S(Y.target.value),onClear:()=>S("")})}},i={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(T,{children:"https://"}),type:"search",placeholder:"Search.."})]})},p={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,rightComponent:e.jsx($,{children:".com"}),type:"search",placeholder:"Search.."})]})},m={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(g,{options:[{label:"option 1",value:"option1"},{label:"option 2",value:"option2"},{label:"option 3",value:"option3"}]}),type:"search",placeholder:"Search.."})]})},h={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(g,{as:ee}),type:"search",placeholder:"Search.."})]})},u={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(s,{children:"Phone"}),e.jsx(a,{...r,leftComponent:e.jsx(g,{as:re}),type:"tel",placeholder:"Phone"})]})};var x,v,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Email</Label>
      <Input {...args} type="email" placeholder="Email" />
    </div>
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var I,b,y;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1 bg-red-500 p-4">
      <Label>Email</Label>
      <Input {...args} type="email" placeholder="Email" />
    </div>
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,L,N;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1 p-4">
      <Label>Email</Label>
      <Input {...args} disabled type="email" placeholder="Email" />
    </div>
}`,...(N=(L=n.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var A,C,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Email</Label>
      <Input {...args} error type="email" placeholder="Email" />
    </div>
}`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var W,P,R;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputLeftAddon noBorder>
            <Icon icon={<HomeIcon />} className="text-text-weaker" size="lg" />
          </InputLeftAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var U,D,O;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <SearchInput value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} />;
  }
}`,...(O=(D=l.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var k,B,V;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputLeftAddon>https://</InputLeftAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(V=(B=i.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var w,z,F;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} rightComponent={<InputRightAddon>.com</InputRightAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(F=(z=p.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var _,H,X;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(X=(H=m.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var q,G,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  decorators: [Story => <div className="h-[400px]">{<Story />}</div>],
  render: args => <div className="grid gap-1 ">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputSelectAddon as={CountrySelect} />} type="search" placeholder="Search.." />
    </div>
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  decorators: [Story => <div className="h-[400px]">{<Story />}</div>],
  render: args => <div className="grid gap-1 ">
      <Label>Phone</Label>
      <Input {...args} leftComponent={<InputSelectAddon as={PhoneSelect} />} type="tel" placeholder="Phone" />
    </div>
}`,...(Q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const Oe=["Default","WIthBg","IsDisabled","IsError","WithIcon","UsingSearchInput","WithLeftAddon","WithRightAddon","WithSelectAddon","WithSelectAddOnUsingSelectCountry","WithSelectAddOnUsingPhoneSelect"];export{t as Default,n as IsDisabled,d as IsError,l as UsingSearchInput,o as WIthBg,c as WithIcon,i as WithLeftAddon,p as WithRightAddon,u as WithSelectAddOnUsingPhoneSelect,h as WithSelectAddOnUsingSelectCountry,m as WithSelectAddon,Oe as __namedExportsOrder,De as default};
