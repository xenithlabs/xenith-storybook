import{j as e}from"./jsx-runtime-BhBAkL08.js";import{d as be,C as ye,e as s,P as Se}from"./useClickOutside-2DwGNyTj.js";import{r as ve}from"./index-caxmlYbZ.js";import{D as Ce,a as je,b as Ne}from"./Dialog-BpJFdv1k.js";import{L as a}from"./Label-CEq0ZV6F.js";import{B as De}from"./Button-Dpzn5L7J.js";import"./cn-C-5SdYIA.js";import"./styles-BNEhTmYy.js";import"./index-Bb4qSo10.js";import"./search-l0nYC1Ts.js";import"./close-CejhmAMe.js";import"./stringCase-DaZl3p-i.js";import"./spinner-C2p9_Bgj.js";import"./chevron-down-mN_p2z2a.js";import"./check-CDvVW5im.js";import"./index-d7ziAqdJ.js";import"./index-DIE_uK0V.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DBF0kSry.js";import"./floating-ui.dom-BuxmzwbT.js";import"./Icon-Bh8OjlaW.js";import"./index-C1NPOm8g.js";import"./index-D09aQd82.js";import"./Checkbox-CnedzFtL.js";import"./index-BnmSys5K.js";import"./index-BPrjlVTu.js";import"./index-D1_gb_Tp.js";import"./index-C6K4APRV.js";import"./index-9ELtA30B.js";import"./index-CoQPK225.js";import"./index-D0ZzT1CX.js";import"./Heading-CSQHx7IS.js";import"./index-D3x6Zd7j.js";const sr={title:"Xenith UI/Components/Select",tags:["autodocs"],parameters:{docs:{subtitle:"Displays a list of options for the user to pick from—triggered by a button. Extends react-select library."},layout:"centered"},args:{options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}],placeholder:"Select",isMulti:!1},decorators:[r=>e.jsx("div",{className:"py-10 w-[300px]  pb-40",children:e.jsx(r,{})})],render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(be,{...r})]})},o={},t={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},l={args:{isMulti:!0}},i={args:{error:!0}},c={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),args:{isMulti:!0,options:[{label:"Currency",options:[{label:"IDR",value:"idr"},{label:"MYR",value:"myr"}]},{label:"City",options:[{label:"Jakarta",value:"jkt"},{label:"Yangon",value:"yangon"}]}]}},d={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(ye,{...r})]})},p={args:{isMulti:!0,value:["AFG","ALA"]},render:r=>{const[n,C]=ve.useState(r.value);return e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Country"}),e.jsx(ye,{...r,value:n,onChange:xe=>{C(xe)}})]})}},u={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r})]})},m={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,showCurrencyName:!0,filterOption:n=>["IDR","MYR","SGD","CNY","VND","GBP","MYR","PHP","EUR","USD"].includes(n.value),isOptionSearchable:!1,...r})]})},g={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Phone"}),e.jsx(Se,{...r})]})},h={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r,isDisabled:!0})]})},y={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r})]})},v={args:{readonly:!0,value:"IDR"},render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{withFlag:!0,...r,readonly:!0,readOnlyWithCheck:!0})]})},x={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r,optionBorder:!0})]})},b={decorators:r=>e.jsx("div",{className:"py-10 w-[300px] min-h-[250px]  pb-20",children:e.jsx(r,{})}),render:r=>e.jsxs(Ce,{children:[e.jsx(je,{asChild:!0,children:e.jsx(De,{children:"halo"})}),e.jsx(Ne,{className:"h-[360px]",children:e.jsxs("div",{className:"grid gap-1 h-[120px] overflow-y-scroll",children:[e.jsx(a,{children:"Currency"}),e.jsx(s,{...r,optionBorder:!0,isOptionSearchable:!1,isSearchable:!1,float:!0}),e.jsx("div",{style:{height:500,width:300},children:"hello"})]})})]})},S={args:{},render:r=>{const[n,C]=ve.useState("");return console.log("search value is",n),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(a,{children:"Search"}),e.jsx(s,{...r,searchValue:n,setSearchValue:C})]})}};var j,N,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(D=(N=o.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var w,R,f;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(R=t.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var L,M,I;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isMulti: true
  }
}`,...(I=(M=l.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var O,U,Y;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(Y=(U=i.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var k,P,V;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var B,F,G;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Country</Label>
      <CountrySelect {...args} />
    </div>
}`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var A,E,W;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(E=p.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var J,T,H;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} />
    </div>
}`,...(H=(T=u.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var _,X,q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag showCurrencyName filterOption={option => {
      return ["IDR", "MYR", "SGD", "CNY", "VND", "GBP", "MYR", "PHP", "EUR", "USD"].includes(option.value);
    }} isOptionSearchable={false} {...args} />
    </div>
}`,...(q=(X=m.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var z,K,Q;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Phone</Label>
      <PhoneSelect {...args} />
    </div>
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} isDisabled />
    </div>
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,se;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} />
    </div>
}`,...(se=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,oe,te;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: "IDR"
  },
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect withFlag {...args} readonly readOnlyWithCheck />
    </div>
}`,...(te=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var le,ie,ce;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  decorators: Story => <div className="py-10 w-[300px] min-h-[250px]  pb-20">
      <Story />
    </div>,
  render: args => <div className="grid gap-1">
      <Label>Currency</Label>
      <CurrenciesSelect {...args} optionBorder />
    </div>
}`,...(ce=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,ue;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,ge,he;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [search, setSearch] = useState("");
    console.log("search value is", search);
    return <div className="grid gap-1">
        <Label>Search</Label>
        <CurrenciesSelect {...args} searchValue={search} setSearchValue={setSearch} />
      </div>;
  }
}`,...(he=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};const nr=["Default","GroupedOptions","Multi","IsError","MultiGroupedOptions","UsingCountrySelect","MultiCountryWithControlledValues","UsingCurrencySelect","UsingCurrencySelectWithFlagAndName","UsingPhoneSelect","IsDisabled","UsingReadOnly","ReadonlyWithCheck","UsingOptionBorder","InsideOverflowed","ControlledSearch"];export{S as ControlledSearch,o as Default,t as GroupedOptions,b as InsideOverflowed,h as IsDisabled,i as IsError,l as Multi,p as MultiCountryWithControlledValues,c as MultiGroupedOptions,v as ReadonlyWithCheck,d as UsingCountrySelect,u as UsingCurrencySelect,m as UsingCurrencySelectWithFlagAndName,x as UsingOptionBorder,g as UsingPhoneSelect,y as UsingReadOnly,nr as __namedExportsOrder,sr as default};
