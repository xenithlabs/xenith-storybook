import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as o}from"./index-DRjF_FHU.js";import{c as j}from"./cn-8RyR4BqC.js";import{t as S}from"./stringCase-DaZl3p-i.js";import{I as M}from"./useClickOutside-NjOEmSQi.js";import{C as I}from"./Card-C5rr-ZzX.js";import{T as d}from"./Text-C8HBwI4b.js";import{B as T}from"./Button-DAgrt3Vy.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./close-D2djoYoT.js";import"./search-BbudfyUD.js";import"./mini-FlV67GHA.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./floating-ui.dom-BuxmzwbT.js";import"./check-C0C6JGvp.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";import"./clock-DRhx3Wks.js";import"./Icon-CTnhpE1d.js";import"./index-CAHntWCK.js";import"./index-HZDBD2ik.js";import"./Heading-DjlBwQyS.js";import"./Checkbox-CMdwPcui.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";const u=({range:s,onChange:n,inputProps:a,leftInputProps:r,rightInputProps:t,className:m,...l})=>{const[i,N]=o.useState(s??[null,null]);return o.useEffect(()=>{N(s??[null,null])},[s]),e.jsxs("div",{className:j("flex items-center",m),...l,children:[e.jsx(M,{type:"number",leftComponent:e.jsx("span",{className:"ml-3 text-text-weak",children:"Min"}),value:i[0]??"",onChange:A=>{const c=A.target.value,p=[c?parseFloat(c):null,i[1]];N(p),n&&n(p)},min:0,max:i[1]??void 0,...a,...r,placeholder:r!=null&&r.placeholder?S(r.placeholder):"",className:j("appearance-none",a==null?void 0:a.className,r==null?void 0:r.className)}),e.jsx("span",{className:"mx-2",children:"-"}),e.jsx(M,{type:"number",leftComponent:e.jsx("span",{className:"ml-3 text-text-weak",children:"Max"}),value:i[1]??"",onChange:A=>{const c=A.target.value,p=[i[0],c?parseFloat(c):null];N(p),n&&n(p)},min:i[0]??0,...a,...t,placeholder:t!=null&&t.placeholder?S(t.placeholder):"",className:j("appearance-none",a==null?void 0:a.className,t==null?void 0:t.className)})]})};u.__docgenInfo={description:"",methods:[],displayName:"AmountRangeInput",props:{range:{required:!1,tsType:{name:"tuple",raw:"[number | null, number | null]",elements:[{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: [number | null, number | null]) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number | null, number | null]",elements:[{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]}]},name:"range"}],return:{name:"void"}}},description:""},inputProps:{required:!1,tsType:{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},leftInputProps:{required:!1,tsType:{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},rightInputProps:{required:!1,tsType:{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""}},composes:["Omit"]};const we={title:"Xenith UI/Components/Amount Range Input",component:u,decorators:s=>e.jsx("div",{className:"py-10 w-[400px] h-[400px] pb-40",children:e.jsx(s,{})}),tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The AmountRangeInput component provides a user-friendly interface for inputting numeric ranges, commonly used for filtering by price, amount, or other numeric values. It consists of two connected input fields with automatic validation.

### Key Features
- **Range Validation**: Automatically ensures min value doesn't exceed max value
- **Controlled/Uncontrolled**: Supports both controlled and uncontrolled usage patterns
- **Customizable**: Individual props for each input field
- **Accessible**: Built-in labels for min/max fields
- **Type Safety**: Properly typed for TypeScript projects

### Usage
\`\`\`tsx
import { AmountRangeInput } from "@xenithlabs/xenith-ui";

// Uncontrolled
<AmountRangeInput 
  onChange={(range) => console.log(range)}
/>

// Controlled
const [range, setRange] = useState<[number | null, number | null]>([0, 100]);
<AmountRangeInput 
  range={range}
  onChange={setRange}
/>
\`\`\`

### Component Props

- **range** ([number | null, number | null]): The controlled range value
- **onChange** ((range: [number | null, number | null]) => void): Callback when range changes
- **inputProps** (InputHTMLAttributes): Props applied to both inputs
- **leftInputProps** (InputHTMLAttributes): Props for the min input
- **rightInputProps** (InputHTMLAttributes): Props for the max input
- **className** (string): Additional CSS classes for the container
        `}}},argTypes:{range:{control:{type:"object"},description:"The controlled range value as [min, max]",table:{type:{summary:"[number | null, number | null]"}}},onChange:{action:"onChange",description:"Callback function called when the range changes",table:{type:{summary:"(range: [number | null, number | null]) => void"}}},inputProps:{control:{type:"object"},description:"Props applied to both input fields",table:{type:{summary:"InputHTMLAttributes<HTMLInputElement>"}}},leftInputProps:{control:{type:"object"},description:"Props specific to the min (left) input field",table:{type:{summary:"InputHTMLAttributes<HTMLInputElement>"},defaultValue:{summary:"{}"}}},rightInputProps:{control:{type:"object"},description:"Props specific to the max (right) input field",table:{type:{summary:"InputHTMLAttributes<HTMLInputElement>"},defaultValue:{summary:"{}"}}},className:{control:{type:"text"},description:"Additional CSS classes for the container",table:{type:{summary:"string"}}}}},g={},b={args:{leftInputProps:{placeholder:"0"},rightInputProps:{placeholder:"1000"}}},h={args:{range:[100,500]}},x={render:function(){const[n,a]=o.useState([50,200]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(u,{range:n,onChange:a}),e.jsx("div",{className:"p-3 bg-surface-subtle rounded",children:e.jsxs(d,{variant:"regular",children:["Selected range: ",n[0]??"No min"," - ",n[1]??"No max"]})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(T,{size:"sm",variant:"outline",onClick:()=>a([null,null]),children:"Clear"}),e.jsx(T,{size:"sm",variant:"outline",onClick:()=>a([0,1e3]),children:"Set 0-1000"})]})]})}},f={name:"Price Filter Example",render:function(){const[n,a]=o.useState([null,null]),[r,t]=o.useState(!1),m=()=>{t(!0)},l=()=>{a([null,null]),t(!1)};return e.jsxs(I,{className:"p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx(d,{variant:"semiBold",className:"mb-2",children:"Price Range"}),e.jsx(u,{range:n,onChange:a,leftInputProps:{placeholder:"0.00"},rightInputProps:{placeholder:"10,000.00"}})]}),r&&(n[0]!==null||n[1]!==null)&&e.jsxs("div",{className:"p-2 bg-info/10 rounded text-sm",children:["Filtering: $",n[0]??0," - $",n[1]??"∞"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(T,{size:"sm",onClick:m,disabled:n[0]===null&&n[1]===null,children:"Apply Filter"}),e.jsx(T,{size:"sm",variant:"outline",onClick:l,children:"Clear"})]})]})}},v={name:"Transaction Amount Filter",render:function(){const[n,a]=o.useState([null,null]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(I,{className:"p-4",children:[e.jsx(d,{variant:"semiBold",className:"mb-3",children:"Transaction Amount"}),e.jsx(u,{range:n,onChange:a,leftInputProps:{placeholder:"min amount"},rightInputProps:{placeholder:"max amount"}})]}),(n[0]!==null||n[1]!==null)&&e.jsx(I,{className:"p-3 bg-surface-subtle",children:e.jsxs(d,{variant:"regular",children:[e.jsx("span",{className:"font-semibold",children:"Active Filter:"})," ",n[0]!==null&&`Min: $${n[0]}`,n[0]!==null&&n[1]!==null&&" • ",n[1]!==null&&`Max: $${n[1]}`]})})]})}},R={name:"With Validation",render:function(){const[n,a]=o.useState([null,null]),[r,t]=o.useState(null),m=l=>{a(l),l[0]!==null&&l[1]!==null?l[0]>l[1]?t("Minimum value cannot be greater than maximum value"):l[0]<0||l[1]<0?t("Values must be positive"):t(null):t(null)};return e.jsxs("div",{className:"space-y-2",children:[e.jsx(u,{range:n,onChange:m}),r&&e.jsx(d,{variant:"regular",className:"text-destructive",children:r})]})}},y={args:{range:[100,500],inputProps:{disabled:!0}}},C={args:{className:"gap-4",leftInputProps:{className:"border-2 border-primary focus:border-primary"},rightInputProps:{className:"border-2 border-primary focus:border-primary"}}};var E,w,F;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(F=(w=g.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var H,L,B;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    leftInputProps: {
      placeholder: "0"
    },
    rightInputProps: {
      placeholder: "1000"
    }
  }
}`,...(B=(L=b.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var P,V,k;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    range: [100, 500]
  }
}`,...(k=(V=h.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var $,z,W;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: function ControlledAmountRange() {
    const [range, setRange] = React.useState<[number | null, number | null]>([50, 200]);
    return <div className="space-y-4">
        <AmountRangeInput range={range} onChange={setRange} />
        <div className="p-3 bg-surface-subtle rounded">
          <Text variant="regular">
            Selected range: {range[0] ?? "No min"} - {range[1] ?? "No max"}
          </Text>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setRange([null, null])}>
            Clear
          </Button>
          <Button size="sm" variant="outline" onClick={() => setRange([0, 1000])}>
            Set 0-1000
          </Button>
        </div>
      </div>;
  }
}`,...(W=(z=x.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var D,q,U;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Price Filter Example",
  render: function PriceFilterExample() {
    const [priceRange, setPriceRange] = React.useState<[number | null, number | null]>([null, null]);
    const [applied, setApplied] = React.useState(false);
    const handleApply = () => {
      setApplied(true);
    };
    const handleClear = () => {
      setPriceRange([null, null]);
      setApplied(false);
    };
    return <Card className="p-4 space-y-4">
        <div>
          <Text variant="semiBold" className="mb-2">Price Range</Text>
          <AmountRangeInput range={priceRange} onChange={setPriceRange} leftInputProps={{
          placeholder: "0.00"
        }} rightInputProps={{
          placeholder: "10,000.00"
        }} />
        </div>
        
        {applied && (priceRange[0] !== null || priceRange[1] !== null) && <div className="p-2 bg-info/10 rounded text-sm">
            Filtering: \${priceRange[0] ?? 0} - \${priceRange[1] ?? "∞"}
          </div>}
        
        <div className="flex gap-2">
          <Button size="sm" onClick={handleApply} disabled={priceRange[0] === null && priceRange[1] === null}>
            Apply Filter
          </Button>
          <Button size="sm" variant="outline" onClick={handleClear}>
            Clear
          </Button>
        </div>
      </Card>;
  }
}`,...(U=(q=f.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var _,O,K;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Transaction Amount Filter",
  render: function TransactionFilterExample() {
    const [amountRange, setAmountRange] = React.useState<[number | null, number | null]>([null, null]);
    return <div className="space-y-4">
        <Card className="p-4">
          <Text variant="semiBold" className="mb-3">Transaction Amount</Text>
          <AmountRangeInput range={amountRange} onChange={setAmountRange} leftInputProps={{
          placeholder: "min amount"
        }} rightInputProps={{
          placeholder: "max amount"
        }} />
        </Card>
        
        {(amountRange[0] !== null || amountRange[1] !== null) && <Card className="p-3 bg-surface-subtle">
            <Text variant="regular">
              <span className="font-semibold">Active Filter:</span>{" "}
              {amountRange[0] !== null && \`Min: $\${amountRange[0]}\`}
              {amountRange[0] !== null && amountRange[1] !== null && " • "}
              {amountRange[1] !== null && \`Max: $\${amountRange[1]}\`}
            </Text>
          </Card>}
      </div>;
  }
}`,...(K=(O=v.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var X,G,J;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "With Validation",
  render: function ValidationExample() {
    const [range, setRange] = React.useState<[number | null, number | null]>([null, null]);
    const [error, setError] = React.useState<string | null>(null);
    const handleChange = (newRange: [number | null, number | null]) => {
      setRange(newRange);

      // Validation
      if (newRange[0] !== null && newRange[1] !== null) {
        if (newRange[0] > newRange[1]) {
          setError("Minimum value cannot be greater than maximum value");
        } else if (newRange[0] < 0 || newRange[1] < 0) {
          setError("Values must be positive");
        } else {
          setError(null);
        }
      } else {
        setError(null);
      }
    };
    return <div className="space-y-2">
        <AmountRangeInput range={range} onChange={handleChange} />
        {error && <Text variant="regular" className="text-destructive">
            {error}
          </Text>}
      </div>;
  }
}`,...(J=(G=R.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Y,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    range: [100, 500],
    inputProps: {
      disabled: true
    }
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,ae;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    className: "gap-4",
    leftInputProps: {
      className: "border-2 border-primary focus:border-primary"
    },
    rightInputProps: {
      className: "border-2 border-primary focus:border-primary"
    }
  }
}`,...(ae=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const Fe=["Default","WithPlaceholders","WithDefaultValues","Controlled","PriceFilter","TransactionAmountFilter","WithValidation","Disabled","CustomStyling"];export{x as Controlled,C as CustomStyling,g as Default,y as Disabled,f as PriceFilter,v as TransactionAmountFilter,h as WithDefaultValues,b as WithPlaceholders,R as WithValidation,Fe as __namedExportsOrder,we as default};
