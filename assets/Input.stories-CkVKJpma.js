import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{I as a,a as z,S as F,b as _,c as m,C as H,P as X}from"./useClickOutside-r9ioANB4.js";import{F as q}from"./home-BYFYJsES.js";import{r as G}from"./index-l2PZgWEW.js";import{L as t}from"./Label-FDaRk8P_.js";import{I as J}from"./Icon-BVoV0EQW.js";import"./cn-C-5SdYIA.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./search-Bt8qP1Fx.js";import"./close-Bwe4q-Z3.js";import"./chevron-down-jNWesQvo.js";import"./check-4u3gJW-P.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./floating-ui.dom-BuxmzwbT.js";import"./Button-Bl0i2rTO.js";import"./index-Cm6j2cFO.js";import"./styles-BRwXF_yu.js";import"./spinner-DNNsglCv.js";import"./index-DjcUcJmE.js";import"./Checkbox-FMxWXPIY.js";import"./index-CZsjDy6p.js";import"./index-BmdjtsoG.js";import"./index-DZOIkxWA.js";import"./index-CqnGoJLG.js";const Ie={title:"Xenith UI/Components/Input",parameters:{layout:"centered",docs:{subtitle:"Displays a form input field or a component that looks like an input field."}},tags:["autodocs"]},o={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(t,{children:"Email"}),e.jsx(a,{...r,type:"email",placeholder:"Email"})]})},s={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(t,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(z,{noBorder:!0,children:e.jsx(J,{icon:e.jsx(q,{}),className:"text-text-weaker",size:"lg"})}),type:"search",placeholder:"Search.."})]})},n={render:()=>{const[r,h]=G.useState("");return e.jsx(F,{value:r,onChange:B=>h(B.target.value),onClear:()=>h("")})}},c={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(t,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(z,{children:"https://"}),type:"search",placeholder:"Search.."})]})},d={render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(t,{children:"Search"}),e.jsx(a,{...r,rightComponent:e.jsx(_,{children:".com"}),type:"search",placeholder:"Search.."})]})},l={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(t,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(m,{options:[{label:"option 1",value:"option1"},{label:"option 2",value:"option2"},{label:"option 3",value:"option3"}]}),type:"search",placeholder:"Search.."})]})},p={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(t,{children:"Search"}),e.jsx(a,{...r,leftComponent:e.jsx(m,{as:H}),type:"search",placeholder:"Search.."})]})},i={decorators:[r=>e.jsx("div",{className:"h-[400px]",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1 ",children:[e.jsx(t,{children:"Phone"}),e.jsx(a,{...r,leftComponent:e.jsx(m,{as:X}),type:"tel",placeholder:"Phone"})]})};var u,g,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Email</Label>
      <Input {...args} type="email" placeholder="Email" />
    </div>
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var x,v,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputLeftAddon noBorder>
            <Icon icon={<HomeIcon />} className="text-text-weaker" size="lg" />
          </InputLeftAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var I,f,y;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <SearchInput value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} />;
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,L,A;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputLeftAddon>https://</InputLeftAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(A=(L=c.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var C,N,W;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div className="grid gap-1">
      <Label>Search</Label>
      <Input {...args} rightComponent={<InputRightAddon>.com</InputRightAddon>} type="search" placeholder="Search.." />
    </div>
}`,...(W=(N=d.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var P,E,R;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(E=l.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var U,O,k;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  decorators: [Story => <div className="h-[400px]">{<Story />}</div>],
  render: args => <div className="grid gap-1 ">
      <Label>Search</Label>
      <Input {...args} leftComponent={<InputSelectAddon as={CountrySelect} />} type="search" placeholder="Search.." />
    </div>
}`,...(k=(O=p.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var V,w,D;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  decorators: [Story => <div className="h-[400px]">{<Story />}</div>],
  render: args => <div className="grid gap-1 ">
      <Label>Phone</Label>
      <Input {...args} leftComponent={<InputSelectAddon as={PhoneSelect} />} type="tel" placeholder="Phone" />
    </div>
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const fe=["Default","WithIcon","UsingSearchInput","WithLeftAddon","WithRightAddon","WithSelectAddon","WithSelectAddOnUsingSelectCountry","WithSelectAddOnUsingPhoneSelect"];export{o as Default,n as UsingSearchInput,s as WithIcon,c as WithLeftAddon,d as WithRightAddon,i as WithSelectAddOnUsingPhoneSelect,p as WithSelectAddOnUsingSelectCountry,l as WithSelectAddon,fe as __namedExportsOrder,Ie as default};
