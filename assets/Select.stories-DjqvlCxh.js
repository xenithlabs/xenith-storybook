import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{d as Ne,C as je,e as s,P as Le,L as we}from"./useClickOutside-SVu6NKAh.js";import{r as N}from"./index-DRjF_FHU.js";import{D as De,a as fe,b as Re}from"./Dialog-t4Lnvx-X.js";import{L as a}from"./Label-DUDV6PD_.js";import{B as Me}from"./Button-Gcg0sGoa.js";import"./cn-C-5SdYIA.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./search-CWRmq9WO.js";import"./close-CAN3cq4E.js";import"./stringCase-DaZl3p-i.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";import"./check-rKbD1QKS.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./floating-ui.dom-BuxmzwbT.js";import"./Icon-Bs9G1Rwk.js";import"./index-CAHntWCK.js";import"./index-HZDBD2ik.js";import"./Heading-BbwmavmP.js";import"./Checkbox-CY4DEde6.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-COysi2iU.js";import"./index-qtGI3euC.js";import"./index-DdILnG7L.js";import"./index-CWbDPhO_.js";import"./index-_lyfCmBZ.js";const lr={title:"Xenith UI/Components/Select",tags:["autodocs"],parameters:{docs:{subtitle:"Displays a list of options for the user to pick from—triggered by a button. Extends react-select library."},layout:"centered"},args:{options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}],placeholder:"Select",isMulti:!1,withSelectAll:!1},decorators:[r=>e.jsx("div",{className:"py-10 w-[300px]  pb-40",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(Ne,{...r})]})},t={},l={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},i={args:{isMulti:!0}},c={args:{error:!0}},d={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{isMulti:!0,options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},p={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(je,{...r})]})},u={args:{isMulti:!0,value:["AFG","ALA"]},render:r=>{const[n,o]=N.useState(r.value);return e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(je,{...r,value:n,onChange:Ce=>{o(Ce)}})]})}},m={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r})]})},g={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>{const[n,o]=N.useState([]);return N.useEffect(()=>{setTimeout(()=>{o(["IDR","MYR","SGD","CNY","VND","GBP","MYR","PHP","EUR","USD"])},2e3)},[]),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,showCurrencyName:!0,currencyOptions:n,isOptionSearchable:!1,...r})]})}},h={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Phone"}),e.jsx(Le,{...r})]})},x={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Language"}),e.jsx(we,{...r,locales:["en","id"],initialLocale:"en",onLocaleChange:()=>{}})]})},y={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r,isDisabled:!0})]})},v={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r})]})},S={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r,readonly:!0,readOnlyWithCheck:!0})]})},b={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r,optionBorder:!0})]})},j={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs(De,{children:[e.jsx(fe,{asChild:!0,children:e.jsx(Me,{children:"halo"})}),e.jsx(Re,{className:"h-[360px]",children:e.jsxs("div",{className:"grid gap-1 h-[120px] overflow-y-scroll",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r,optionBorder:!0,isOptionSearchable:!1,isSearchable:!1,float:!0}),e.jsx("div",{style:{height:500,width:300},children:"hello"})]})})]})},C={args:{},render:r=>{const[n,o]=N.useState("");return console.log("search value is",n),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Search"}),e.jsx(s,{...r,searchValue:n,setSearchValue:o})]})}};var L,w,D;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(D=(w=t.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var f,R,M;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(M=(R=l.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var O,I,U;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isMulti: true
  }
}`,...(U=(I=i.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var Y,k,P;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(P=(k=c.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var V,B,F;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var E,G,A;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Country</Label>
      <CountrySelect {...args} />
    </div>
}`,...(A=(G=p.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var W,T,J;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=(T=u.parameters)==null?void 0:T.docs)==null?void 0:J.source}}};var H,_,X;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} />
    </div>
}`,...(X=(_=m.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var q,z,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(z=g.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var Q,Z,$;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Phone</Label>
      <PhoneSelect {...args} />
    </div>
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Language</Label>
      <LanguageSelect {...args} locales={["en", "id"]} initialLocale="en" onLocaleChange={() => {}} />
    </div>
}`,...(ae=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ne,oe;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} isDisabled />
    </div>
}`,...(oe=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var te,le,ie;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} />
    </div>
}`,...(ie=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,pe;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} readonly readOnlyWithCheck />
    </div>
}`,...(pe=(de=S.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,ge;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} optionBorder />
    </div>
}`,...(ge=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,xe,ye;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ye=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var ve,Se,be;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [search, setSearch] = useState("");
    console.log("search value is", search);
    return <div className="grid gap-1">
        <Label>Search</Label>
        <CurrenciesSelect {...args} searchValue={search} setSearchValue={setSearch} />
      </div>;
  }
}`,...(be=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};const ir=["Default","GroupedOptions","Multi","IsError","MultiGroupedOptions","UsingCountrySelect","MultiCountryWithControlledValues","UsingCurrencySelect","UsingCurrencySelectWithFlagAndName","UsingPhoneSelect","UsingLanguageSelect","IsDisabled","UsingReadOnly","ReadonlyWithCheck","UsingOptionBorder","InsideOverflowed","ControlledSearch"];export{C as ControlledSearch,t as Default,l as GroupedOptions,j as InsideOverflowed,y as IsDisabled,c as IsError,i as Multi,u as MultiCountryWithControlledValues,d as MultiGroupedOptions,S as ReadonlyWithCheck,p as UsingCountrySelect,m as UsingCurrencySelect,g as UsingCurrencySelectWithFlagAndName,x as UsingLanguageSelect,b as UsingOptionBorder,h as UsingPhoneSelect,v as UsingReadOnly,ir as __namedExportsOrder,lr as default};
