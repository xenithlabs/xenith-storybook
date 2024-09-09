import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{d as _,C as O,e as X,P as q}from"./useClickOutside-D5-ywmRC.js";import{r as z}from"./index-l2PZgWEW.js";import{L as a}from"./Label-FDaRk8P_.js";import"./cn-C-5SdYIA.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./Icon-ev__gahW.js";import"./search-BceqokmR.js";import"./close-Bwe4q-Z3.js";import"./stringCase-DaZl3p-i.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";import"./check-4u3gJW-P.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./floating-ui.dom-BuxmzwbT.js";import"./Button-BZP4uVeL.js";import"./index-Cm6j2cFO.js";import"./styles-DsUnyYA6.js";import"./index-DjcUcJmE.js";import"./Checkbox-BePh-fpO.js";import"./index-CZsjDy6p.js";import"./index-BmdjtsoG.js";import"./index-DZOIkxWA.js";import"./index-CqnGoJLG.js";const Se={title:"Xenith UI/Components/Select",tags:["autodocs"],parameters:{docs:{subtitle:"Displays a list of options for the user to pick from—triggered by a button. Extends react-select library."},layout:"centered"},args:{options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}],placeholder:"Select",isMulti:!1},decorators:[r=>e.jsx("div",{className:"py-10 w-[300px]  pb-40",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(_,{...r})]})},s={},n={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},o={args:{isMulti:!0}},t={args:{error:!0}},l={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{isMulti:!0,options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},i={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(O,{...r})]})},c={args:{isMulti:!0,value:["AFG","ALA"]},render:r=>{const[J,F]=z.useState(r.value);return e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(O,{...r,value:J,onChange:W=>{F(W)}})]})}},p={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(X,{...r})]})},d={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Phone"}),e.jsx(q,{...r})]})};var u,m,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,v,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  args: {
    options: [{
      label: "Currency",
      options: [{
        label: "IDR",
        value: "idr"
      }, {
        label: "MYR",
        value: "myr"
      }]
    }, {
      label: "City",
      options: [{
        label: "Jakarta",
        value: "jkt"
      }, {
        label: "Yangon",
        value: "yangon"
      }]
    }]
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,h,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isMulti: true
  }
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var j,C,N;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(N=(C=t.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var M,w,L;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  args: {
    isMulti: true,
    options: [{
      label: "Currency",
      options: [{
        label: "IDR",
        value: "idr"
      }, {
        label: "MYR",
        value: "myr"
      }]
    }, {
      label: "City",
      options: [{
        label: "Jakarta",
        value: "jkt"
      }, {
        label: "Yangon",
        value: "yangon"
      }]
    }]
  }
}`,...(L=(w=l.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var f,R,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Country</Label>
      <CountrySelect {...args} />
    </div>
}`,...(k=(R=i.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var Y,D,I;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    isMulti: true,
    value: ["AFG", "ALA"]
  },
  render: args => {
    const [values, setValues] = useState(args.value);
    return <div className="grid gap-1">
        <Label>Country</Label>
        <CountrySelect {...args} value={values} onChange={newValue => {
        setValues(newValue);
      }} />
      </div>;
  }
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var P,U,V;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} />
    </div>
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var A,E,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Phone</Label>
      <PhoneSelect {...args} />
    </div>
}`,...(G=(E=d.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};const je=["Default","GroupedOptions","Multi","IsError","MultiGroupedOptions","UsingCountrySelect","MultiCountryWithControlledValues","UsingCurrencySelect","UsingPhoneSelect"];export{s as Default,n as GroupedOptions,t as IsError,o as Multi,c as MultiCountryWithControlledValues,l as MultiGroupedOptions,i as UsingCountrySelect,p as UsingCurrencySelect,d as UsingPhoneSelect,je as __namedExportsOrder,Se as default};
