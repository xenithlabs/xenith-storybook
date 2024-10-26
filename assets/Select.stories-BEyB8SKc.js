import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{d as de,C as ie,e as s,P as pe}from"./useClickOutside-CSHC3sE0.js";import{r as ue}from"./index-l2PZgWEW.js";import{L as a}from"./Label-FDaRk8P_.js";import"./cn-C-5SdYIA.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./Icon-ev__gahW.js";import"./search-BceqokmR.js";import"./close-Bwe4q-Z3.js";import"./stringCase-DaZl3p-i.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";import"./check-4u3gJW-P.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./floating-ui.dom-BuxmzwbT.js";import"./Button-BT-8gRS6.js";import"./index-Cm6j2cFO.js";import"./styles-Cs5Y1E_z.js";import"./index-DjcUcJmE.js";import"./Checkbox-BePh-fpO.js";import"./index-CZsjDy6p.js";import"./index-BmdjtsoG.js";import"./index-DZOIkxWA.js";import"./index-CqnGoJLG.js";const We={title:"Xenith UI/Components/Select",tags:["autodocs"],parameters:{docs:{subtitle:"Displays a list of options for the user to pick from—triggered by a button. Extends react-select library."},layout:"centered"},args:{options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}],placeholder:"Select",isMulti:!1},decorators:[r=>e.jsx("div",{className:"py-10 w-[300px]  pb-40",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(de,{...r})]})},n={},o={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},t={args:{isMulti:!0}},i={args:{error:!0}},l={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{isMulti:!0,options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},c={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(ie,{...r})]})},d={args:{isMulti:!0,value:["AFG","ALA"]},render:r=>{const[h,le]=ue.useState(r.value);return e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(ie,{...r,value:h,onChange:ce=>{le(ce)}})]})}},p={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r})]})},u={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,filterOption:h=>["IDR","MYR","SGD","CNY","VND","GBP","MYR","PHP","EUR","USD"].includes(h.value),isOptionSearchable:!1,...r})]})},m={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Phone"}),e.jsx(pe,{...r})]})},g={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r,isDisabled:!0})]})},y={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r})]})},v={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r,readonly:!0,readOnlyWithCheck:!0})]})},x={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r,optionBorder:!0})]})};var b,S,C;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var j,N,R;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(R=(N=o.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var D,w,L;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isMulti: true
  }
}`,...(L=(w=t.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var M,I,U;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(U=(I=i.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var f,O,Y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(Y=(O=l.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var k,P,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Country</Label>
      <CountrySelect {...args} />
    </div>
}`,...(F=(P=c.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var G,V,E;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(E=(V=d.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var W,A,B;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} />
    </div>
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var J,H,_;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag filterOption={option => {
      return ["IDR", "MYR", "SGD", "CNY", "VND", "GBP", "MYR", "PHP", "EUR", "USD"].includes(option.value);
    }} isOptionSearchable={false} {...args} />
    </div>
}`,...(_=(H=u.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var X,q,z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Phone</Label>
      <PhoneSelect {...args} />
    </div>
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var K,Q,T;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} isDisabled />
    </div>
}`,...(T=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:T.source}}};var Z,$,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} />
    </div>
}`,...(ee=($=y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,se;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} readonly readOnlyWithCheck />
    </div>
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,oe,te;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} optionBorder />
    </div>
}`,...(te=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};const Ae=["Default","GroupedOptions","Multi","IsError","MultiGroupedOptions","UsingCountrySelect","MultiCountryWithControlledValues","UsingCurrencySelect","UsingCurrencySelectWithFlag","UsingPhoneSelect","IsDisabled","UsingReadOnly","ReadonlyWithCheck","UsingOptionBorder"];export{n as Default,o as GroupedOptions,g as IsDisabled,i as IsError,t as Multi,d as MultiCountryWithControlledValues,l as MultiGroupedOptions,v as ReadonlyWithCheck,c as UsingCountrySelect,p as UsingCurrencySelect,u as UsingCurrencySelectWithFlag,x as UsingOptionBorder,m as UsingPhoneSelect,y as UsingReadOnly,Ae as __namedExportsOrder,We as default};
