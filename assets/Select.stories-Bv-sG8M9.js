import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{d as D,C as Ye,e as n,P as ke,L as Ve,S as Be,T as Te}from"./useClickOutside-DxMEJLjw.js";import{r as o}from"./index-DRjF_FHU.js";import{D as Ee,a as Ge,b as Ae}from"./Dialog-CC7HiIcQ.js";import{L as s}from"./Label-CfHWTmrj.js";import{B as We}from"./Button-C-jt4Opy.js";import"./cn-8RyR4BqC.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./search-CRI6LAtg.js";import"./close-D2djoYoT.js";import"./stringCase-DaZl3p-i.js";import"./chevron-up-Dp-rU9It.js";import"./chevron-down-CyV3wpL8.js";import"./check-C0C6JGvp.js";import"./clock-DRhx3Wks.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./floating-ui.dom-BuxmzwbT.js";import"./mini-FlV67GHA.js";import"./Icon-CTnhpE1d.js";import"./index-CAHntWCK.js";import"./index-HZDBD2ik.js";import"./Heading-DjlBwQyS.js";import"./Checkbox-CAdLyoQE.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./Text-C8HBwI4b.js";import"./index-BoPx_Bfl.js";import"./index-qtGI3euC.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-_lyfCmBZ.js";import"./spinner-ZMRwnkYw.js";const wr={title:"Xenith UI/Components/Select",tags:["autodocs"],parameters:{docs:{subtitle:"Displays a list of options for the user to pick from—triggered by a button. Extends react-select library."},layout:"centered"},args:{options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}],placeholder:"Select",isMulti:!1,withSelectAll:!1,readonly:!1},decorators:[r=>e.jsx("div",{className:"py-10 w-[300px]  pb-40",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Currency"}),e.jsx(D,{...r})]})},i={},l={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},c={args:{isMulti:!0}},d={args:{isMulti:!0,menuPlacement:"top"}},p={args:{error:!0}},u={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{isMulti:!0,options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},m={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Country"}),e.jsx(Ye,{...r})]})},g={args:{isMulti:!0,value:["AFG","ALA"]},render:r=>{const[a,t]=o.useState(r.value);return e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Country"}),e.jsx(Ye,{...r,value:a,onChange:Fe=>{t(Fe)}})]})}},h={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Currency"}),e.jsx(n,{...r})]})},v={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>{const[a,t]=o.useState([]);return o.useEffect(()=>{setTimeout(()=>{t(["IDR","MYR","SGD","CNY","VND","GBP","MYR","PHP","EUR","USD"])},2e3)},[]),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Currency"}),e.jsx(n,{withFlag:!0,showCurrencyName:!0,currencyOptions:a,isOptionSearchable:!1,...r})]})}},x={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Phone"}),e.jsx(ke,{...r})]})},y={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Language"}),e.jsx(Ve,{...r,locales:["en","id","th","vn"],initialLocale:"en",onLocaleChange:()=>{}})]})},S={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Currency"}),e.jsx(n,{withFlag:!0,...r,isDisabled:!0})]})},b={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Currency"}),e.jsx(n,{withFlag:!0,...r})]})},j={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Currency"}),e.jsx(n,{withFlag:!0,...r,readonly:!0,readOnlyWithCheck:!0})]})},C={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Currency"}),e.jsx(n,{...r,optionBorder:!0})]})},N={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>{const a=o.useRef(null);return e.jsxs(Ee,{children:[e.jsx(Ge,{asChild:!0,children:e.jsx(We,{children:"halo"})}),e.jsxs(Ae,{ref:a,className:"h-[200px]",children:[e.jsx(D,{...r,isMulti:!0}),e.jsxs("div",{className:"grid gap-1 h-[120px] overflow-y-scroll p-4",children:[e.jsx("div",{style:{height:200,width:300}}),e.jsx(s,{children:"Currency"}),e.jsx(n,{...r,optionBorder:!0,float:!0,isOptionSearchable:!1,isSearchable:!1}),e.jsx(D,{...r,ref:a,isMulti:!0,float:!0}),e.jsx(Be,{}),e.jsx("div",{style:{height:500,width:300},children:"hello"})]})]})]})}},f={render:r=>e.jsxs("div",{className:"grid gap-1 h-[120px] bg-red-500 overflow-y-scroll p-4",children:[e.jsx("div",{style:{height:200,width:300}}),e.jsx(s,{children:"Currency"}),e.jsx(n,{...r,optionBorder:!0,float:!0,isOptionSearchable:!1,isSearchable:!1}),e.jsx(D,{...r,float:!0,isMulti:!0}),e.jsx(Be,{}),e.jsx("div",{style:{height:500,width:300},children:"hello"})]})},w={args:{},render:r=>{const[a,t]=o.useState("");return console.log("search value is",a),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Search"}),e.jsx(n,{...r,searchValue:a,setSearchValue:t})]})}},L={args:{},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(s,{children:"Timezone"}),e.jsx(Te,{withIcon:!0,...r})]})};var R,M,I;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(I=(M=i.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var O,U,P;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(U=l.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var Y,B,F;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    isMulti: true
  }
}`,...(F=(B=c.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var k,V,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    isMulti: true,
    menuPlacement: "top"
  }
}`,...(T=(V=d.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var E,G,A;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(A=(G=p.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var W,z,J;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=(z=u.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var H,_,X;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Country</Label>
      <CountrySelect {...args} />
    </div>
}`,...(X=(_=m.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var q,K,Q;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} />
    </div>
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,se,ae;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ne,te,oe;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Phone</Label>
      <PhoneSelect {...args} />
    </div>
}`,...(oe=(te=x.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ie,le,ce;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Language</Label>
      <LanguageSelect {...args} locales={["en", "id", "th", "vn"]} initialLocale="en" onLocaleChange={() => {}} />
    </div>
}`,...(ce=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,pe,ue;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} isDisabled />
    </div>
}`,...(ue=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,ge,he;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} />
    </div>
}`,...(he=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,xe,ye;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} readonly readOnlyWithCheck />
    </div>
}`,...(ye=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var Se,be,je;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} optionBorder />
    </div>
}`,...(je=(be=C.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var Ce,Ne,fe;N.parameters={...N.parameters,docs:{...(Ce=N.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(fe=(Ne=N.parameters)==null?void 0:Ne.docs)==null?void 0:fe.source}}};var we,Le,De;f.parameters={...f.parameters,docs:{...(we=f.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(De=(Le=f.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var Re,Me,Ie;w.parameters={...w.parameters,docs:{...(Re=w.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [search, setSearch] = useState("");
    console.log("search value is", search);
    return <div className="grid gap-1">
        <Label>Search</Label>
        <CurrenciesSelect {...args} searchValue={search} setSearchValue={setSearch} />
      </div>;
  }
}`,...(Ie=(Me=w.parameters)==null?void 0:Me.docs)==null?void 0:Ie.source}}};var Oe,Ue,Pe;L.parameters={...L.parameters,docs:{...(Oe=L.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="grid gap-1">
      <Label>Timezone</Label>
      <TimezoneSelect withIcon {...args} />
    </div>
}`,...(Pe=(Ue=L.parameters)==null?void 0:Ue.docs)==null?void 0:Pe.source}}};const Lr=["Default","GroupedOptions","Multi","MultiReverse","IsError","MultiGroupedOptions","UsingCountrySelect","MultiCountryWithControlledValues","UsingCurrencySelect","UsingCurrencySelectWithFlagAndName","UsingPhoneSelect","UsingLanguageSelect","IsDisabled","UsingReadOnly","ReadonlyWithCheck","UsingOptionBorder","InsideOverflowed","InsideFilter","ControlledSearch","UsingTimezoneSelect"];export{w as ControlledSearch,i as Default,l as GroupedOptions,f as InsideFilter,N as InsideOverflowed,S as IsDisabled,p as IsError,c as Multi,g as MultiCountryWithControlledValues,u as MultiGroupedOptions,d as MultiReverse,j as ReadonlyWithCheck,m as UsingCountrySelect,h as UsingCurrencySelect,v as UsingCurrencySelectWithFlagAndName,y as UsingLanguageSelect,C as UsingOptionBorder,x as UsingPhoneSelect,b as UsingReadOnly,L as UsingTimezoneSelect,Lr as __namedExportsOrder,wr as default};
