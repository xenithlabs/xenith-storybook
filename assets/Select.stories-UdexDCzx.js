import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{d as w,C as Le,e as n,P as Me,L as Ie,S as De}from"./useClickOutside-Dw3nuaqS.js";import{r as o}from"./index-DRjF_FHU.js";import{D as Oe,a as Ue,b as Ye}from"./Dialog-SJutc6vy.js";import{L as a}from"./Label-DUDV6PD_.js";import{B as Be}from"./Button-iG-w-ZO3.js";import"./cn-C-5SdYIA.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./search-CWRmq9WO.js";import"./close-CAN3cq4E.js";import"./stringCase-DaZl3p-i.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";import"./check-rKbD1QKS.js";import"./index-CxXVImLN.js";import"./index-CxRLcT2J.js";import"./floating-ui.dom-BuxmzwbT.js";import"./Icon-Bs9G1Rwk.js";import"./index-CAHntWCK.js";import"./index-HZDBD2ik.js";import"./Heading-BbwmavmP.js";import"./Checkbox-CxWW_UQV.js";import"./index-Bu1UD4WD.js";import"./index-Chjlzwpf.js";import"./index-nVMawZv2.js";import"./index-DeEMxTqJ.js";import"./index-D4PmrNqQ.js";import"./index-yJl9Mbgj.js";import"./index-RoT-dC5i.js";import"./index-_lyfCmBZ.js";const ur={title:"Xenith UI/Components/Select",tags:["autodocs"],parameters:{docs:{subtitle:"Displays a list of options for the user to pick from—triggered by a button. Extends react-select library."},layout:"centered"},args:{options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}],placeholder:"Select",isMulti:!1,withSelectAll:!1},decorators:[r=>e.jsx("div",{className:"py-10 w-[300px]  pb-40",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(w,{...r})]})},i={},l={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},c={args:{isMulti:!0}},d={args:{error:!0}},p={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{isMulti:!0,options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},u={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(Le,{...r})]})},g={args:{isMulti:!0,value:["AFG","ALA"]},render:r=>{const[s,t]=o.useState(r.value);return e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(Le,{...r,value:s,onChange:Re=>{t(Re)}})]})}},m={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(n,{...r})]})},h={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>{const[s,t]=o.useState([]);return o.useEffect(()=>{setTimeout(()=>{t(["IDR","MYR","SGD","CNY","VND","GBP","MYR","PHP","EUR","USD"])},2e3)},[]),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(n,{withFlag:!0,showCurrencyName:!0,currencyOptions:s,isOptionSearchable:!1,...r})]})}},x={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Phone"}),e.jsx(Me,{...r})]})},v={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Language"}),e.jsx(Ie,{...r,locales:["en","id","th","vn"],initialLocale:"en",onLocaleChange:()=>{}})]})},y={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(n,{withFlag:!0,...r,isDisabled:!0})]})},S={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(n,{withFlag:!0,...r})]})},b={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(n,{withFlag:!0,...r,readonly:!0,readOnlyWithCheck:!0})]})},j={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(n,{...r,optionBorder:!0})]})},C={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>{const s=o.useRef(null);return e.jsxs(Oe,{children:[e.jsx(Ue,{asChild:!0,children:e.jsx(Be,{children:"halo"})}),e.jsxs(Ye,{ref:s,className:"h-[200px]",children:[e.jsx(w,{...r,isMulti:!0}),e.jsxs("div",{className:"grid gap-1 h-[120px] overflow-y-scroll p-4",children:[e.jsx("div",{style:{height:200,width:300}}),e.jsx(a,{children:"Currency"}),e.jsx(n,{...r,optionBorder:!0,float:!0,isOptionSearchable:!1,isSearchable:!1}),e.jsx(w,{...r,ref:s,isMulti:!0,float:!0}),e.jsx(De,{}),e.jsx("div",{style:{height:500,width:300},children:"hello"})]})]})]})}},N={render:r=>e.jsxs("div",{className:"grid gap-1 h-[120px] bg-red-500 overflow-y-scroll p-4",children:[e.jsx("div",{style:{height:200,width:300}}),e.jsx(a,{children:"Currency"}),e.jsx(n,{...r,optionBorder:!0,float:!0,isOptionSearchable:!1,isSearchable:!1}),e.jsx(w,{...r,float:!0,isMulti:!0}),e.jsx(De,{}),e.jsx("div",{style:{height:500,width:300},children:"hello"})]})},f={args:{},render:r=>{const[s,t]=o.useState("");return console.log("search value is",s),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Search"}),e.jsx(n,{...r,searchValue:s,setSearchValue:t})]})}};var L,D,R;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(R=(D=i.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var M,I,O;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(I=l.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var U,Y,B;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isMulti: true
  }
}`,...(B=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var F,k,P;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(P=(k=d.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var V,E,G;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(E=p.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var A,W,T;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Country</Label>
      <CountrySelect {...args} />
    </div>
}`,...(T=(W=u.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var J,H,_;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(_=(H=g.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var X,q,z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} />
    </div>
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var K,Q,Z;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,re;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Phone</Label>
      <PhoneSelect {...args} />
    </div>
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,ne;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Language</Label>
      <LanguageSelect {...args} locales={["en", "id", "th", "vn"]} initialLocale="en" onLocaleChange={() => {}} />
    </div>
}`,...(ne=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var te,oe,ie;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} isDisabled />
    </div>
}`,...(ie=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} />
    </div>
}`,...(de=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,ge;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} readonly readOnlyWithCheck />
    </div>
}`,...(ge=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var me,he,xe;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} optionBorder />
    </div>
}`,...(xe=(he=j.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ve,ye,Se;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Se=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var be,je,Ce;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ce=(je=N.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Ne,fe,we;f.parameters={...f.parameters,docs:{...(Ne=f.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [search, setSearch] = useState("");
    console.log("search value is", search);
    return <div className="grid gap-1">
        <Label>Search</Label>
        <CurrenciesSelect {...args} searchValue={search} setSearchValue={setSearch} />
      </div>;
  }
}`,...(we=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:we.source}}};const gr=["Default","GroupedOptions","Multi","IsError","MultiGroupedOptions","UsingCountrySelect","MultiCountryWithControlledValues","UsingCurrencySelect","UsingCurrencySelectWithFlagAndName","UsingPhoneSelect","UsingLanguageSelect","IsDisabled","UsingReadOnly","ReadonlyWithCheck","UsingOptionBorder","InsideOverflowed","InsideFilter","ControlledSearch"];export{f as ControlledSearch,i as Default,l as GroupedOptions,N as InsideFilter,C as InsideOverflowed,y as IsDisabled,d as IsError,c as Multi,g as MultiCountryWithControlledValues,p as MultiGroupedOptions,b as ReadonlyWithCheck,u as UsingCountrySelect,m as UsingCurrencySelect,h as UsingCurrencySelectWithFlagAndName,v as UsingLanguageSelect,j as UsingOptionBorder,x as UsingPhoneSelect,S as UsingReadOnly,gr as __namedExportsOrder,ur as default};
