import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{T as E,a as S,b as A,c as V}from"./Tooltip-DjTe5E2q.js";import{C as q}from"./CopyButton-0zUOGOly.js";import{r as T}from"./index-DRjF_FHU.js";import{T as D,a as P,b as f,c as r,d as W,e as t}from"./Table-D13EUKjP.js";import{B as _}from"./Badge-BZQBR-Yn.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-pOgU7tCp.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./cn-C-5SdYIA.js";import"./Button-Gcg0sGoa.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-BNEhTmYy.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";import"./Icon-Bs9G1Rwk.js";import"./check-rKbD1QKS.js";import"./copy-BA7Vn8GV.js";import"./reset-B7P2r9As.js";import"./Text-BYjIVLkz.js";const c=({children:a,width:s=0,withTooltip:B=!1,withCopy:m=!1,fluid:d=!1})=>{const p=d?"truncate w-full":"truncate",u=d?{minWidth:80}:{width:s};if(!B)return e.jsx("div",{className:"w-full grid gap-1 items-center text-left",children:e.jsx("div",{className:p,style:u,children:a})});if(m&&typeof a!="string")throw new Error("Truncate `withCopy` props only work for children with type of string");return e.jsx(E,{children:e.jsxs(S,{children:[e.jsx(A,{asChild:!0,children:e.jsxs("div",{className:"w-full flex gap-1 items-center text-left",children:[e.jsx("div",{className:p,style:u,children:a}),m&&e.jsx(q,{text:a})]})}),e.jsx(V,{align:"start",className:"whitespace-pre-line max-w-[400px]",children:a})]})})};c.__docgenInfo={description:"",methods:[],displayName:"Truncate",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},withTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},withCopy:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fluid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const de={title:"Xenith UI/Components/Truncate",component:c,tags:["autodocs"],args:{width:80,fluid:!1,children:"Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum super long text Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum super long text"}},l={},o={args:{withTooltip:!0}},n={args:{withTooltip:!0,withCopy:!0}},i={args:{width:40,fluid:!0},render:a=>{const s=T.useRef(null);return T.useEffect(()=>{console.log(s)},[s]),e.jsxs(D,{children:[e.jsx(P,{children:e.jsxs(f,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Currency"}),e.jsx(r,{children:"Payment Method"}),e.jsx(r,{className:"w-[160px]",children:"Payment Channel"}),e.jsx(r,{align:"center",className:"w-[160px]",children:"Status"})]})}),e.jsx(W,{children:e.jsxs(f,{children:[e.jsx(t,{children:e.jsx(c,{...a,children:"ayam goreng"})}),e.jsx(t,{children:e.jsx(c,{...a})}),e.jsx(t,{children:"Virtual Accounts"}),e.jsx(t,{children:"BCA"}),e.jsx(t,{align:"center",children:e.jsx(_,{theme:"success",variant:"soft",children:"Active"})})]})})]})}};var h,b,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var g,y,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    withTooltip: true
  }
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var j,C,H;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    withTooltip: true,
    withCopy: true
  }
}`,...(H=(C=n.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var v,N,R;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
            <TableCell>
              <Truncate {...args} children="ayam goreng" />
            </TableCell>

            <TableCell>
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
}`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const pe=["Default","WithTooltip","WithCopy","TruncateTableDynamic"];export{l as Default,i as TruncateTableDynamic,n as WithCopy,o as WithTooltip,pe as __namedExportsOrder,de as default};
