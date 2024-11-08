import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{d as ge,C as pe,e as s,P as he}from"./useClickOutside-BZvvelqW.js";import{r as ye}from"./index-l2PZgWEW.js";import{D as xe,a as ve,b as be}from"./Dialog-TAJ2jwE5.js";import{L as a}from"./Label-FDaRk8P_.js";import{B as Se}from"./Button-Bj-1DuKJ.js";import"./cn-C-5SdYIA.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./search-BceqokmR.js";import"./close-Bwe4q-Z3.js";import"./stringCase-DaZl3p-i.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";import"./check-4u3gJW-P.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-fvTbNGom.js";import"./floating-ui.dom-BuxmzwbT.js";import"./Icon-ev__gahW.js";import"./index-DjcUcJmE.js";import"./index-Cm6j2cFO.js";import"./Checkbox-CCHalYd3.js";import"./index-CZsjDy6p.js";import"./index-BmdjtsoG.js";import"./index-DZOIkxWA.js";import"./index-DrokelHr.js";import"./index-DPMSfDr2.js";import"./index-C76mvIvD.js";import"./index-Bel6ALHY.js";import"./Heading-B_Jl69qA.js";import"./index-CqnGoJLG.js";import"./styles-Cs5Y1E_z.js";const er={title:"Xenith UI/Components/Select",tags:["autodocs"],parameters:{docs:{subtitle:"Displays a list of options for the user to pick from—triggered by a button. Extends react-select library."},layout:"centered"},args:{options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}],placeholder:"Select",isMulti:!1},decorators:[r=>e.jsx("div",{className:"py-10 w-[300px]  pb-40",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(ge,{...r})]})},n={},o={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},t={args:{isMulti:!0}},i={args:{error:!0}},l={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{isMulti:!0,options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},c={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(pe,{...r})]})},d={args:{isMulti:!0,value:["AFG","ALA"]},render:r=>{const[b,ue]=ye.useState(r.value);return e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(pe,{...r,value:b,onChange:me=>{ue(me)}})]})}},p={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r})]})},u={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,filterOption:b=>["IDR","MYR","SGD","CNY","VND","GBP","MYR","PHP","EUR","USD"].includes(b.value),isOptionSearchable:!1,...r})]})},m={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Phone"}),e.jsx(he,{...r})]})},g={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r,isDisabled:!0})]})},h={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r})]})},y={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r,readonly:!0,readOnlyWithCheck:!0})]})},x={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r,optionBorder:!0})]})},v={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs(xe,{children:[e.jsx(ve,{asChild:!0,children:e.jsx(Se,{children:"halo"})}),e.jsx(be,{className:"h-[360px]",children:e.jsxs("div",{className:"grid gap-1 h-[120px] overflow-y-scroll",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r,optionBorder:!0,isOptionSearchable:!1,isSearchable:!1,float:!0}),e.jsx("div",{style:{height:500,width:300},children:"hello"})]})})]})};var S,C,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var N,D,w;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var R,f,L;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isMulti: true
  }
}`,...(L=(f=t.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var M,I,O;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var U,Y,k;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(k=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:k.source}}};var P,B,F;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Country</Label>
      <CountrySelect {...args} />
    </div>
}`,...(F=(B=c.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,V,E;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(E=(V=d.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var W,A,J;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} />
    </div>
}`,...(J=(A=p.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var T,H,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var K,Q,Z;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} isDisabled />
    </div>
}`,...(Z=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,re;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} />
    </div>
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,ne;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} readonly readOnlyWithCheck />
    </div>
}`,...(ne=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,te,ie;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} optionBorder />
    </div>
}`,...(ie=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var le,ce,de;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <Dialog>
      <DialogTrigger asChild>
        <Button>halo</Button>
      </DialogTrigger>
      <DialogContent className="h-[360px]">
        <div className="grid gap-1 h-[120px] overflow-y-scroll">
          <Label>Currency</Label>

          <CurrenciesSelect {...args} optionBorder isOptionSearchable={false} isSearchable={false} float />
          <div style={{
          height: 500,
          width: 300
        }}>hello</div>
        </div>
      </DialogContent>
    </Dialog>
}`,...(de=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const rr=["Default","GroupedOptions","Multi","IsError","MultiGroupedOptions","UsingCountrySelect","MultiCountryWithControlledValues","UsingCurrencySelect","UsingCurrencySelectWithFlag","UsingPhoneSelect","IsDisabled","UsingReadOnly","ReadonlyWithCheck","UsingOptionBorder","InsideOverflowed"];export{n as Default,o as GroupedOptions,v as InsideOverflowed,g as IsDisabled,i as IsError,t as Multi,d as MultiCountryWithControlledValues,l as MultiGroupedOptions,y as ReadonlyWithCheck,c as UsingCountrySelect,p as UsingCurrencySelect,u as UsingCurrencySelectWithFlag,x as UsingOptionBorder,m as UsingPhoneSelect,h as UsingReadOnly,rr as __namedExportsOrder,er as default};
