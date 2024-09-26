import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{I as a,a as J,S as M,b as Q,c as u,C as T,P as Y}from"./useClickOutside-CLRVaUC_.js";import{I as Z}from"./Icon-ev__gahW.js";import{F as $}from"./home-BYFYJsES.js";import{r as ee}from"./index-l2PZgWEW.js";import{L as s}from"./Label-FDaRk8P_.js";import"./cn-C-5SdYIA.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./search-BceqokmR.js";import"./close-Bwe4q-Z3.js";import"./stringCase-DaZl3p-i.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";import"./check-4u3gJW-P.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./floating-ui.dom-BuxmzwbT.js";import"./Button--egxP2zT.js";import"./index-Cm6j2cFO.js";import"./styles-DsUnyYA6.js";import"./index-DjcUcJmE.js";import"./Checkbox-BePh-fpO.js";import"./index-CZsjDy6p.js";import"./index-BmdjtsoG.js";import"./index-DZOIkxWA.js";import"./index-CqnGoJLG.js";const We={title:"Xenith UI/Components/Input",parameters:{layout:"centered",docs:{subtitle:"Displays a form input field or a component that looks like an input field."}},tags:["autodocs"]},t={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Email"}),e.jsx(a,{...r,type:"email",placeholder:"Email"})]})},o={render:r=>e.jsxs("div",{className:"grid gap-1 bg-red-500 p-4",children:[e.jsx(s,{children:"Email"}),e.jsx(a,{...r,type:"email",placeholder:"Email"})]})},n={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Email"}),e.jsx(a,{...r,error:!0,type:"email",placeholder:"Email"})]})},c={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(J,{noBorder:!0,children:e.jsx(Z,{icon:e.jsx($,{}),className:"text-text-weaker",size:"lg"})}),type:"search",placeholder:"Search.."})]})},d={render:()=>{const[r,g]=ee.useState("");return e.jsx(M,{value:r,onChange:K=>g(K.target.value),onClear:()=>g("")})}},l={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(J,{children:"https://"}),type:"search",placeholder:"Search.."})]})},i={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,rightComponent:e.jsx(Q,{children:".com"}),type:"search",placeholder:"Search.."})]})},p={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(u,{options:[{label:"option 1",value:"option1"},{label:"option 2",value:"option2"},{label:"option 3",value:"option3"}]}),type:"search",placeholder:"Search.."})]})},m={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(s,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(u,{as:T}),type:"search",placeholder:"Search.."})]})},h={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(s,{children:"Phone"}),e.jsx(a,{...r,leftComponent:e.jsx(u,{as:Y}),type:"tel",placeholder:"Phone"})]})};var S,x,v;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Email</Label>
      <Input {...args} type="email" placeholder="Email" />
    </div>
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var j,I,f;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1 bg-red-500 p-4">
      <Label>Email</Label>
      <Input {...args} type="email" placeholder="Email" />
    </div>
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var y,b,L;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Email</Label>
      <Input {...args} error type="email" placeholder="Email" />
    </div>
}`,...(L=(b=n.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var N,A,C;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputLeftAddon noBorder>
            <Icon icon={<HomeIcon />} className="text-text-weaker" size="lg" />
          </InputLeftAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var E,W,P;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <SearchInput value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} />;
  }
}`,...(P=(W=d.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var R,U,O;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputLeftAddon>https://</InputLeftAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(O=(U=l.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var k,B,V;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} rightComponent={<InputRightAddon>.com</InputRightAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(V=(B=i.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var w,D,z;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(D=p.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var F,_,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  decorators: [Story => <div className="h-[400px]">{<Story />}</div>],
  render: args => <div className="grid gap-1 ">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputSelectAddon as={CountrySelect} />} type="search" placeholder="Search.." />
    </div>
}`,...(H=(_=m.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var X,q,G;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  decorators: [Story => <div className="h-[400px]">{<Story />}</div>],
  render: args => <div className="grid gap-1 ">
      <Label>Phone</Label>
      <Input {...args} leftComponent={<InputSelectAddon as={PhoneSelect} />} type="tel" placeholder="Phone" />
    </div>
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Pe=["Default","WIthBg","IsError","WithIcon","UsingSearchInput","WithLeftAddon","WithRightAddon","WithSelectAddon","WithSelectAddOnUsingSelectCountry","WithSelectAddOnUsingPhoneSelect"];export{t as Default,n as IsError,d as UsingSearchInput,o as WIthBg,c as WithIcon,l as WithLeftAddon,i as WithRightAddon,h as WithSelectAddOnUsingPhoneSelect,m as WithSelectAddOnUsingSelectCountry,p as WithSelectAddon,Pe as __namedExportsOrder,We as default};
