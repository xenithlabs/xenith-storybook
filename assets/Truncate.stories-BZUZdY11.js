import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as f}from"./cn-C-5SdYIA.js";import{T as Q,a as Y,b as Z,c as ee}from"./Tooltip-ByR2nsEC.js";import{C as s}from"./CopyButton-Di4KTDML.js";import{r as o}from"./index-DRjF_FHU.js";import{T as y,a as j,b as i,c as n,d as C,e as t}from"./Table-B4fQulwM.js";import{B as w}from"./Badge-BZQBR-Yn.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./Button-X8fnom3X.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-BNEhTmYy.js";import"./Icon-Bs9G1Rwk.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";import"./check-rKbD1QKS.js";import"./copy-BA7Vn8GV.js";import"./reset-B7P2r9As.js";import"./Text-BYjIVLkz.js";const ae=(a,r=5,u=5)=>{const c="...";return a.length<=r+u+c.length?a:`${a.slice(0,r)}${c}${a.slice(-u)}`},l=({children:a,width:r=0,withTooltip:u=!1,withCopy:c=!1,fluid:H=!1,maxWidth:d,middleTruncate:R=!1,middleTruncateStartLength:J,middleTruncateEndLength:K})=>{const B=H?f("truncate",{"w-full":!d}):"truncate",N=H?{minWidth:80,maxWidth:d}:{width:r,maxWidth:d};if(!u)return e.jsx("div",{className:f("grid gap-1 items-center text-left",{"w-full":!d}),children:e.jsx("div",{className:B,style:N,children:a})});if(c&&typeof a!="string")throw new Error("Truncate `withCopy` props only work for children with type of string");if(R&&typeof a!="string")throw new Error("Truncate `middleTruncate` props only work for children with type of string");return e.jsx(Q,{children:e.jsxs(Y,{children:[e.jsx(Z,{asChild:!0,children:e.jsxs("div",{className:f("flex gap-1 items-center text-left",{"w-full":!d}),children:[e.jsx("div",{className:B,style:N,children:R?ae(a,J,K):a}),c&&e.jsx(s,{text:a})]})}),e.jsx(ee,{align:"start",className:"whitespace-pre-line max-w-[400px]",children:a})]})})};l.__docgenInfo={description:"",methods:[],displayName:"Truncate",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},withTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},withCopy:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fluid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},middleTruncate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},middleTruncateStartLength:{required:!1,tsType:{name:"number"},description:""},middleTruncateEndLength:{required:!1,tsType:{name:"number"},description:""}}};const Ae={title:"Xenith UI/Components/Truncate",component:l,tags:["autodocs"],args:{width:80,fluid:!1,children:"Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum super long text Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum super long text"}},m={},T={args:{withTooltip:!0}},p={args:{withTooltip:!0,withCopy:!0}},h={args:{withTooltip:!0,withCopy:!0,middleTruncate:!0}},b={args:{width:40,fluid:!0},render:a=>{const r=o.useRef(null);return o.useEffect(()=>{console.log(r)},[r]),e.jsxs(y,{children:[e.jsx(j,{children:e.jsxs(i,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Currency"}),e.jsx(n,{children:"Payment Method"}),e.jsx(n,{className:"w-[160px]",children:"Payment Channel"}),e.jsx(n,{align:"center",className:"w-[160px]",children:"Status"})]})}),e.jsx(C,{children:e.jsxs(i,{children:[e.jsx(t,{action:e.jsx(s,{text:"ayam goreng"}),children:e.jsx(l,{...a})}),e.jsx(t,{action:e.jsx(s,{text:"ayam goreng"}),children:e.jsx(l,{...a})}),e.jsx(t,{children:"Virtual Accounts"}),e.jsx(t,{children:"BCA"}),e.jsx(t,{align:"center",children:e.jsx(w,{theme:"success",variant:"soft",children:"Active"})})]})})]})}},g={args:{width:40,fluid:!0},render:a=>{const r=o.useRef(null);return o.useEffect(()=>{console.log(r)},[r]),e.jsxs(y,{children:[e.jsx(j,{children:e.jsxs(i,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Currency"}),e.jsx(n,{children:"Payment Method"}),e.jsx(n,{className:"w-[160px]",children:"Payment Channel"}),e.jsx(n,{align:"center",className:"w-[160px]",children:"Status"})]})}),e.jsx(C,{children:e.jsxs(i,{children:[e.jsx(t,{action:e.jsx(s,{text:"ayam goreng"}),children:e.jsx(l,{...a,children:"ayam goreng"})}),e.jsx(t,{action:e.jsx(s,{text:"ayam goreng"}),children:e.jsx(l,{...a,children:"ayam goreng"})}),e.jsx(t,{children:"Virtual Accounts"}),e.jsx(t,{children:"BCA"}),e.jsx(t,{align:"center",children:e.jsx(w,{theme:"success",variant:"soft",children:"Active"})})]})})]})}},x={args:{width:40,fluid:!0},render:a=>{const r=o.useRef(null);return o.useEffect(()=>{console.log(r)},[r]),e.jsxs(y,{children:[e.jsx(j,{children:e.jsxs(i,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Currency"}),e.jsx(n,{children:"Payment Method"}),e.jsx(n,{className:"w-[160px]",children:"Payment Channel"}),e.jsx(n,{align:"center",className:"w-[160px]",children:"Status"})]})}),e.jsx(C,{children:e.jsxs(i,{children:[e.jsx(t,{action:e.jsx(s,{text:"ayam goreng"}),children:e.jsx(l,{maxWidth:"fit-content",...a,children:"ayam goreng"})}),e.jsx(t,{action:e.jsx(s,{text:"ayam goreng"}),children:e.jsx(l,{maxWidth:"fit-content",...a,children:"ayam goreng"})}),e.jsx(t,{children:"Virtual Accounts"}),e.jsx(t,{children:"BCA"}),e.jsx(t,{align:"center",children:e.jsx(w,{theme:"success",variant:"soft",children:"Active"})})]})})]})}};var v,A,W;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(W=(A=m.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var E,M,S;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    withTooltip: true
  }
}`,...(S=(M=T.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var P,V,q;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    withTooltip: true,
    withCopy: true
  }
}`,...(q=(V=p.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var D,L,_;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    withTooltip: true,
    withCopy: true,
    middleTruncate: true
  }
}`,...(_=(L=h.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var k,I,$;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...($=(I=b.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var O,U,X;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var z,F,G;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(G=(F=x.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const We=["Default","WithTooltip","WithCopy","WithMiddleTruncate","TruncateTableDynamic","TruncateTableWithoutMaxWidth","TruncateTableWithMaxWidth"];export{m as Default,b as TruncateTableDynamic,x as TruncateTableWithMaxWidth,g as TruncateTableWithoutMaxWidth,p as WithCopy,h as WithMiddleTruncate,T as WithTooltip,We as __namedExportsOrder,Ae as default};
