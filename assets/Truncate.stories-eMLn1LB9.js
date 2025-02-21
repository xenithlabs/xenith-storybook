import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as x}from"./cn-C-5SdYIA.js";import{T as X,a as z,b as F,c as G}from"./Tooltip-BdfrGtl9.js";import{C as s}from"./CopyButton-B2aQ9jb0.js";import{r as o}from"./index-DRjF_FHU.js";import{T as b,a as g,b as i,c as a,d as f,e as n}from"./Table-BzsgnI-w.js";import{B as y}from"./Badge-BZQBR-Yn.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-pOgU7tCp.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./Button-iG-w-ZO3.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-BNEhTmYy.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";import"./Icon-Bs9G1Rwk.js";import"./check-rKbD1QKS.js";import"./copy-BA7Vn8GV.js";import"./reset-B7P2r9As.js";import"./Text-BYjIVLkz.js";const l=({children:t,width:r=0,withTooltip:U=!1,withCopy:j=!1,fluid:C=!1,maxWidth:c})=>{const w=C?x("truncate",{"w-full":!c}):"truncate",H=C?{minWidth:80,maxWidth:c}:{width:r,maxWidth:c};if(!U)return e.jsx("div",{className:x("grid gap-1 items-center text-left",{"w-full":!c}),children:e.jsx("div",{className:w,style:H,children:t})});if(j&&typeof t!="string")throw new Error("Truncate `withCopy` props only work for children with type of string");return e.jsx(X,{children:e.jsxs(z,{children:[e.jsx(F,{asChild:!0,children:e.jsxs("div",{className:x("flex gap-1 items-center text-left",{"w-full":!c}),children:[e.jsx("div",{className:w,style:H,children:t}),j&&e.jsx(s,{text:t})]})}),e.jsx(G,{align:"start",className:"whitespace-pre-line max-w-[400px]",children:t})]})})};l.__docgenInfo={description:"",methods:[],displayName:"Truncate",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},withTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},withCopy:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fluid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const je={title:"Xenith UI/Components/Truncate",component:l,tags:["autodocs"],args:{width:80,fluid:!1,children:"Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum super long text Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum super long text"}},d={},m={args:{withTooltip:!0}},u={args:{withTooltip:!0,withCopy:!0}},T={args:{width:40,fluid:!0},render:t=>{const r=o.useRef(null);return o.useEffect(()=>{console.log(r)},[r]),e.jsxs(b,{children:[e.jsx(g,{children:e.jsxs(i,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Currency"}),e.jsx(a,{children:"Payment Method"}),e.jsx(a,{className:"w-[160px]",children:"Payment Channel"}),e.jsx(a,{align:"center",className:"w-[160px]",children:"Status"})]})}),e.jsx(f,{children:e.jsxs(i,{children:[e.jsx(n,{action:e.jsx(s,{text:"ayam goreng"}),children:e.jsx(l,{...t})}),e.jsx(n,{action:e.jsx(s,{text:"ayam goreng"}),children:e.jsx(l,{...t})}),e.jsx(n,{children:"Virtual Accounts"}),e.jsx(n,{children:"BCA"}),e.jsx(n,{align:"center",children:e.jsx(y,{theme:"success",variant:"soft",children:"Active"})})]})})]})}},p={args:{width:40,fluid:!0},render:t=>{const r=o.useRef(null);return o.useEffect(()=>{console.log(r)},[r]),e.jsxs(b,{children:[e.jsx(g,{children:e.jsxs(i,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Currency"}),e.jsx(a,{children:"Payment Method"}),e.jsx(a,{className:"w-[160px]",children:"Payment Channel"}),e.jsx(a,{align:"center",className:"w-[160px]",children:"Status"})]})}),e.jsx(f,{children:e.jsxs(i,{children:[e.jsx(n,{action:e.jsx(s,{text:"ayam goreng"}),children:e.jsx(l,{...t,children:"ayam goreng"})}),e.jsx(n,{action:e.jsx(s,{text:"ayam goreng"}),children:e.jsx(l,{...t,children:"ayam goreng"})}),e.jsx(n,{children:"Virtual Accounts"}),e.jsx(n,{children:"BCA"}),e.jsx(n,{align:"center",children:e.jsx(y,{theme:"success",variant:"soft",children:"Active"})})]})})]})}},h={args:{width:40,fluid:!0},render:t=>{const r=o.useRef(null);return o.useEffect(()=>{console.log(r)},[r]),e.jsxs(b,{children:[e.jsx(g,{children:e.jsxs(i,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Currency"}),e.jsx(a,{children:"Payment Method"}),e.jsx(a,{className:"w-[160px]",children:"Payment Channel"}),e.jsx(a,{align:"center",className:"w-[160px]",children:"Status"})]})}),e.jsx(f,{children:e.jsxs(i,{children:[e.jsx(n,{action:e.jsx(s,{text:"ayam goreng"}),children:e.jsx(l,{maxWidth:"fit-content",...t,children:"ayam goreng"})}),e.jsx(n,{action:e.jsx(s,{text:"ayam goreng"}),children:e.jsx(l,{maxWidth:"fit-content",...t,children:"ayam goreng"})}),e.jsx(n,{children:"Virtual Accounts"}),e.jsx(n,{children:"BCA"}),e.jsx(n,{align:"center",children:e.jsx(y,{theme:"success",variant:"soft",children:"Active"})})]})})]})}};var R,B,N;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(N=(B=d.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var v,A,W;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    withTooltip: true
  }
}`,...(W=(A=m.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var E,M,P;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    withTooltip: true,
    withCopy: true
  }
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var S,V,D;T.parameters={...T.parameters,docs:{...(S=T.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    width: 40,
    fluid: true
  },
  render: args => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      console.log(containerRef);
    }, [containerRef]);
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead className="w-[160px]">Payment Channel</TableHead>
            <TableHead align="center" className="w-[160px]">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell action={<CopyButton text="ayam goreng" />}>
              <Truncate {...args} />
            </TableCell>

            <TableCell action={<CopyButton text="ayam goreng" />}>
              <Truncate {...args} />
            </TableCell>
            <TableCell>Virtual Accounts</TableCell>
            <TableCell>BCA</TableCell>
            <TableCell align="center">
              <Badge theme="success" variant="soft">
                Active
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  }
}`,...(D=(V=T.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var q,L,_;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    width: 40,
    fluid: true
  },
  render: args => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      console.log(containerRef);
    }, [containerRef]);
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead className="w-[160px]">Payment Channel</TableHead>
            <TableHead align="center" className="w-[160px]">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell action={<CopyButton text="ayam goreng" />}>
              <Truncate {...args} children="ayam goreng" />
            </TableCell>

            <TableCell action={<CopyButton text="ayam goreng" />}>
              <Truncate {...args} children="ayam goreng" />
            </TableCell>
            <TableCell>Virtual Accounts</TableCell>
            <TableCell>BCA</TableCell>
            <TableCell align="center">
              <Badge theme="success" variant="soft">
                Active
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  }
}`,...(_=(L=p.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var I,k,O;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    width: 40,
    fluid: true
  },
  render: args => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      console.log(containerRef);
    }, [containerRef]);
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead className="w-[160px]">Payment Channel</TableHead>
            <TableHead align="center" className="w-[160px]">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell action={<CopyButton text="ayam goreng" />}>
              <Truncate maxWidth="fit-content" {...args} children="ayam goreng" />
            </TableCell>

            <TableCell action={<CopyButton text="ayam goreng" />}>
              <Truncate maxWidth="fit-content" {...args} children="ayam goreng" />
            </TableCell>
            <TableCell>Virtual Accounts</TableCell>
            <TableCell>BCA</TableCell>
            <TableCell align="center">
              <Badge theme="success" variant="soft">
                Active
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  }
}`,...(O=(k=h.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const Ce=["Default","WithTooltip","WithCopy","TruncateTableDynamic","TruncateTableWithoutMaxWidth","TruncateTableWithMaxWidth"];export{d as Default,T as TruncateTableDynamic,h as TruncateTableWithMaxWidth,p as TruncateTableWithoutMaxWidth,u as WithCopy,m as WithTooltip,Ce as __namedExportsOrder,je as default};
