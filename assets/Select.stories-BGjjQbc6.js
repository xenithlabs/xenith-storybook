import{j as e}from"./jsx-runtime-BhBAkL08.js";import{d as Se,C as xe,e as s,P as be}from"./useClickOutside-QHOh8uMH.js";import{r as j}from"./index-caxmlYbZ.js";import{D as Ce,a as je,b as Ne}from"./Dialog-_m0AXsFU.js";import{L as a}from"./Label-CEq0ZV6F.js";import{B as De}from"./Button-DOZIFxSS.js";import"./cn-C-5SdYIA.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./Icon-Bh8OjlaW.js";import"./search-l0nYC1Ts.js";import"./close-CejhmAMe.js";import"./stringCase-DaZl3p-i.js";import"./spinner-C2p9_Bgj.js";import"./chevron-down-mN_p2z2a.js";import"./check-CDvVW5im.js";import"./index-d7ziAqdJ.js";import"./index-DIE_uK0V.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DBF0kSry.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-C1NPOm8g.js";import"./index-D09aQd82.js";import"./Checkbox-CEELigyu.js";import"./index-BnmSys5K.js";import"./index-BPrjlVTu.js";import"./index-D1_gb_Tp.js";import"./index-C6K4APRV.js";import"./index-9ELtA30B.js";import"./index-CoQPK225.js";import"./index-D0ZzT1CX.js";import"./Heading-CSQHx7IS.js";import"./index-D3x6Zd7j.js";const sr={title:"Xenith UI/Components/Select",tags:["autodocs"],parameters:{docs:{subtitle:"Displays a list of options for the user to pick from—triggered by a button. Extends react-select library."},layout:"centered"},args:{options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}],placeholder:"Select",isMulti:!1},decorators:[r=>e.jsx("div",{className:"py-10 w-[300px]  pb-40",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(Se,{...r})]})},t={},i={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},l={args:{isMulti:!0}},c={args:{error:!0}},d={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{isMulti:!0,options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},p={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(xe,{...r})]})},u={args:{isMulti:!0,value:["AFG","ALA"]},render:r=>{const[n,o]=j.useState(r.value);return e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(xe,{...r,value:n,onChange:ve=>{o(ve)}})]})}},m={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r})]})},g={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>{const[n,o]=j.useState([]);return j.useEffect(()=>{setTimeout(()=>{o(["IDR","MYR","SGD","CNY","VND","GBP","MYR","PHP","EUR","USD"])},2e3)},[]),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,showCurrencyName:!0,currencyOptions:n,isOptionSearchable:!1,...r})]})}},h={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Phone"}),e.jsx(be,{...r})]})},y={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r,isDisabled:!0})]})},x={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r})]})},v={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r,readonly:!0,readOnlyWithCheck:!0})]})},S={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r,optionBorder:!0})]})},b={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs(Ce,{children:[e.jsx(je,{asChild:!0,children:e.jsx(De,{children:"halo"})}),e.jsx(Ne,{className:"h-[360px]",children:e.jsxs("div",{className:"grid gap-1 h-[120px] overflow-y-scroll",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r,optionBorder:!0,isOptionSearchable:!1,isSearchable:!1,float:!0}),e.jsx("div",{style:{height:500,width:300},children:"hello"})]})})]})},C={args:{},render:r=>{const[n,o]=j.useState("");return console.log("search value is",n),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Search"}),e.jsx(s,{...r,searchValue:n,setSearchValue:o})]})}};var N,D,w;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(w=(D=t.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var f,R,L;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(L=(R=i.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var M,O,I;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isMulti: true
  }
}`,...(I=(O=l.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var U,Y,k;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(k=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:k.source}}};var P,V,B;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(B=(V=d.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var F,E,G;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Country</Label>
      <CountrySelect {...args} />
    </div>
}`,...(G=(E=p.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var A,W,T;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(W=u.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var J,H,_;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} />
    </div>
}`,...(_=(H=m.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var X,q,z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => {
    const [options, setOptions] = useState<string[]>([]);
    useEffect(() => {
      setTimeout(() => {
        setOptions(["IDR", "MYR", "SGD", "CNY", "VND", "GBP", "MYR", "PHP", "EUR", "USD"]);
      }, 2000);
    }, []);
    return <div className="grid gap-1">
        <Label>Currency</Label>
        <CurrenciesSelect withFlag showCurrencyName currencyOptions={options} isOptionSearchable={false} {...args} />
      </div>;
  }
}`,...(z=(q=g.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var K,Q,Z;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Phone</Label>
      <PhoneSelect {...args} />
    </div>
}`,...(Z=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,re;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} isDisabled />
    </div>
}`,...(re=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,ne;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} />
    </div>
}`,...(ne=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,te,ie;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} readonly readOnlyWithCheck />
    </div>
}`,...(ie=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var le,ce,de;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} optionBorder />
    </div>
}`,...(de=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,me;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,he,ye;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [search, setSearch] = useState("");
    console.log("search value is", search);
    return <div className="grid gap-1">
        <Label>Search</Label>
        <CurrenciesSelect {...args} searchValue={search} setSearchValue={setSearch} />
      </div>;
  }
}`,...(ye=(he=C.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};const nr=["Default","GroupedOptions","Multi","IsError","MultiGroupedOptions","UsingCountrySelect","MultiCountryWithControlledValues","UsingCurrencySelect","UsingCurrencySelectWithFlagAndName","UsingPhoneSelect","IsDisabled","UsingReadOnly","ReadonlyWithCheck","UsingOptionBorder","InsideOverflowed","ControlledSearch"];export{C as ControlledSearch,t as Default,i as GroupedOptions,b as InsideOverflowed,y as IsDisabled,c as IsError,l as Multi,u as MultiCountryWithControlledValues,d as MultiGroupedOptions,v as ReadonlyWithCheck,p as UsingCountrySelect,m as UsingCurrencySelect,g as UsingCurrencySelectWithFlagAndName,S as UsingOptionBorder,h as UsingPhoneSelect,x as UsingReadOnly,nr as __namedExportsOrder,sr as default};
