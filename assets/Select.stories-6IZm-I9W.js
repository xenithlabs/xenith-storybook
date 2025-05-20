import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{d as L,C as Ie,e as n,P as Pe,L as Ye,S as Oe}from"./useClickOutside-C1thhK2D.js";import{r as o}from"./index-DRjF_FHU.js";import{D as Be,a as Fe,b as ke}from"./Dialog-t4Lnvx-X.js";import{L as a}from"./Label-DUDV6PD_.js";import{B as Ve}from"./Button-iG-w-ZO3.js";import"./cn-C-5SdYIA.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./search-CWRmq9WO.js";import"./close-CAN3cq4E.js";import"./stringCase-DaZl3p-i.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";import"./check-rKbD1QKS.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./floating-ui.dom-BuxmzwbT.js";import"./Icon-Bs9G1Rwk.js";import"./index-CAHntWCK.js";import"./index-HZDBD2ik.js";import"./Heading-BbwmavmP.js";import"./Checkbox-CY4DEde6.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-COysi2iU.js";import"./index-qtGI3euC.js";import"./index-DdILnG7L.js";import"./index-CWbDPhO_.js";import"./index-_lyfCmBZ.js";const vr={title:"Xenith UI/Components/Select",tags:["autodocs"],parameters:{docs:{subtitle:"Displays a list of options for the user to pick from—triggered by a button. Extends react-select library."},layout:"centered"},args:{options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}],placeholder:"Select",isMulti:!1,withSelectAll:!1},decorators:[r=>e.jsx("div",{className:"py-10 w-[300px]  pb-40",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(L,{...r})]})},i={},l={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},c={args:{isMulti:!0}},d={args:{isMulti:!0,menuPlacement:"top"}},p={args:{error:!0}},u={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{isMulti:!0,options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},m={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(Ie,{...r})]})},g={args:{isMulti:!0,value:["AFG","ALA"]},render:r=>{const[s,t]=o.useState(r.value);return e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(Ie,{...r,value:s,onChange:Ue=>{t(Ue)}})]})}},h={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(n,{...r})]})},v={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>{const[s,t]=o.useState([]);return o.useEffect(()=>{setTimeout(()=>{t(["IDR","MYR","SGD","CNY","VND","GBP","MYR","PHP","EUR","USD"])},2e3)},[]),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(n,{withFlag:!0,showCurrencyName:!0,currencyOptions:s,isOptionSearchable:!1,...r})]})}},x={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Phone"}),e.jsx(Pe,{...r})]})},y={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Language"}),e.jsx(Ye,{...r,locales:["en","id","th","vn"],initialLocale:"en",onLocaleChange:()=>{}})]})},S={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(n,{withFlag:!0,...r,isDisabled:!0})]})},b={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(n,{withFlag:!0,...r})]})},j={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(n,{withFlag:!0,...r,readonly:!0,readOnlyWithCheck:!0})]})},C={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(n,{...r,optionBorder:!0})]})},N={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>{const s=o.useRef(null);return e.jsxs(Be,{children:[e.jsx(Fe,{asChild:!0,children:e.jsx(Ve,{children:"halo"})}),e.jsxs(ke,{ref:s,className:"h-[200px]",children:[e.jsx(L,{...r,isMulti:!0}),e.jsxs("div",{className:"grid gap-1 h-[120px] overflow-y-scroll p-4",children:[e.jsx("div",{style:{height:200,width:300}}),e.jsx(a,{children:"Currency"}),e.jsx(n,{...r,optionBorder:!0,float:!0,isOptionSearchable:!1,isSearchable:!1}),e.jsx(L,{...r,ref:s,isMulti:!0,float:!0}),e.jsx(Oe,{}),e.jsx("div",{style:{height:500,width:300},children:"hello"})]})]})]})}},f={render:r=>e.jsxs("div",{className:"grid gap-1 h-[120px] bg-red-500 overflow-y-scroll p-4",children:[e.jsx("div",{style:{height:200,width:300}}),e.jsx(a,{children:"Currency"}),e.jsx(n,{...r,optionBorder:!0,float:!0,isOptionSearchable:!1,isSearchable:!1}),e.jsx(L,{...r,float:!0,isMulti:!0}),e.jsx(Oe,{}),e.jsx("div",{style:{height:500,width:300},children:"hello"})]})},w={args:{},render:r=>{const[s,t]=o.useState("");return console.log("search value is",s),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Search"}),e.jsx(n,{...r,searchValue:s,setSearchValue:t})]})}};var D,R,M;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(M=(R=i.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var I,O,U;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(U=(O=l.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var P,Y,B;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    isMulti: true
  }
}`,...(B=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var F,k,V;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isMulti: true,
    menuPlacement: "top"
  }
}`,...(V=(k=d.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var E,G,A;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(A=(G=p.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var W,T,J;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=(T=u.parameters)==null?void 0:T.docs)==null?void 0:J.source}}};var H,_,X;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Country</Label>
      <CountrySelect {...args} />
    </div>
}`,...(X=(_=m.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var q,z,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(z=g.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var Q,Z,$;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} />
    </div>
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ne,te;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Phone</Label>
      <PhoneSelect {...args} />
    </div>
}`,...(te=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ie,le;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Language</Label>
      <LanguageSelect {...args} locales={["en", "id", "th", "vn"]} initialLocale="en" onLocaleChange={() => {}} />
    </div>
}`,...(le=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,pe;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} isDisabled />
    </div>
}`,...(pe=(de=S.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,ge;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} />
    </div>
}`,...(ge=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,ve,xe;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} readonly readOnlyWithCheck />
    </div>
}`,...(xe=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var ye,Se,be;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} optionBorder />
    </div>
}`,...(be=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var je,Ce,Ne;N.parameters={...N.parameters,docs:{...(je=N.parameters)==null?void 0:je.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => {
    const ref = useRef(null);
    return <Dialog>
        <DialogTrigger asChild>
          <Button>halo</Button>
        </DialogTrigger>
        <DialogContent ref={ref} className="h-[200px]">
          <Select {...args} isMulti />
          <div className="grid gap-1 h-[120px] overflow-y-scroll p-4">
            <div style={{
            height: 200,
            width: 300
          }}></div>
            <Label>Currency</Label>

            <CurrenciesSelect {...args} optionBorder float isOptionSearchable={false} isSearchable={false} />
            <Select {...args} ref={ref} isMulti float />
            <SearchInput />
            <div style={{
            height: 500,
            width: 300
          }}>hello</div>
          </div>
        </DialogContent>
      </Dialog>;
  }
}`,...(Ne=(Ce=N.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var fe,we,Le;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => {
    return <div className="grid gap-1 h-[120px] bg-red-500 overflow-y-scroll p-4">
        <div style={{
        height: 200,
        width: 300
      }}></div>
        <Label>Currency</Label>

        <CurrenciesSelect {...args} optionBorder float isOptionSearchable={false} isSearchable={false} />
        <Select {...args} float isMulti />
        <SearchInput />
        <div style={{
        height: 500,
        width: 300
      }}>hello</div>
      </div>;
  }
}`,...(Le=(we=f.parameters)==null?void 0:we.docs)==null?void 0:Le.source}}};var De,Re,Me;w.parameters={...w.parameters,docs:{...(De=w.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [search, setSearch] = useState("");
    console.log("search value is", search);
    return <div className="grid gap-1">
        <Label>Search</Label>
        <CurrenciesSelect {...args} searchValue={search} setSearchValue={setSearch} />
      </div>;
  }
}`,...(Me=(Re=w.parameters)==null?void 0:Re.docs)==null?void 0:Me.source}}};const xr=["Default","GroupedOptions","Multi","MultiReverse","IsError","MultiGroupedOptions","UsingCountrySelect","MultiCountryWithControlledValues","UsingCurrencySelect","UsingCurrencySelectWithFlagAndName","UsingPhoneSelect","UsingLanguageSelect","IsDisabled","UsingReadOnly","ReadonlyWithCheck","UsingOptionBorder","InsideOverflowed","InsideFilter","ControlledSearch"];export{w as ControlledSearch,i as Default,l as GroupedOptions,f as InsideFilter,N as InsideOverflowed,S as IsDisabled,p as IsError,c as Multi,g as MultiCountryWithControlledValues,u as MultiGroupedOptions,d as MultiReverse,j as ReadonlyWithCheck,m as UsingCountrySelect,h as UsingCurrencySelect,v as UsingCurrencySelectWithFlagAndName,y as UsingLanguageSelect,C as UsingOptionBorder,x as UsingPhoneSelect,b as UsingReadOnly,xr as __namedExportsOrder,vr as default};
