import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{I as o}from"./Icon-ev__gahW.js";import{B as t}from"./Button--egxP2zT.js";import{F as oe}from"./check-4u3gJW-P.js";import{F as ne}from"./copy-BLYJhKYu.js";import{r as h}from"./index-l2PZgWEW.js";import{a as se,T as ae,b as ie,c as ce}from"./Tooltip-r6aCk8b0.js";import{F as Y}from"./edit-BuOM16EU.js";import{F as Z}from"./close-Bwe4q-Z3.js";import{C as de}from"./Card-9Y4jHpVI.js";import{T as le}from"./Text-sxDyydH3.js";import{h as pe}from"./Heading-B_Jl69qA.js";import"./cn-C-5SdYIA.js";import"./index-Bb4qSo10.js";import"./index-Cm6j2cFO.js";import"./styles-DsUnyYA6.js";import"./styles-BNEhTmYy.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./index-C76mvIvD.js";import"./index-DPMSfDr2.js";import"./index-CIGe9IjL.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-BmdjtsoG.js";import"./index-DZOIkxWA.js";import"./index-vMKBQQL5.js";const ee=r=>{const[f,B]=h.useState("copy"),[re,x]=h.useState(!1);return e.jsx(se,{children:e.jsxs(ae,{open:re,onOpenChange:x,children:[e.jsx(ie,{asChild:!0,children:e.jsx(t,{...r,variant:"unstyled",iconOnly:!0,onClick:te=>{te.stopPropagation(),navigator.clipboard.writeText(r.text),B("Copied"),x(!0),setTimeout(()=>{x(!1),setTimeout(()=>{B("copy")},150)},1e3)},icon:e.jsx(o,{icon:e.jsx(ne,{})})})}),e.jsx(ce,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[f,f==="Copied"&&e.jsx(o,{icon:e.jsx(oe,{})})]})})]})})};ee.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!0,tsType:{name:"string"},description:""}},composes:["ButtonHTMLAttributes","VariantProps"]};const Pe={title:"Xenith UI/Components/Button",component:t,tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:["solid","outline","nude","link"]},icon:{},children:{},disabled:{control:"boolean"},iconPosition:{control:"select",options:["left","right"]},iconOnly:{control:"boolean"},size:{control:"select",options:["sm","md","xs"]},theme:{control:"select",options:["neutral","destructive","primary"]}},render:r=>e.jsx(t,{...r,children:"Button"})},n={render:r=>e.jsx(t,{...r,icon:e.jsx(o,{icon:e.jsx(Z,{}),size:"md"}),children:"Button"})},s={render:r=>e.jsx(t,{...r,variant:"link",children:"Reset All"})},a={render:r=>e.jsx(t,{...r,icon:e.jsx(o,{icon:e.jsx(Y,{}),size:"lg"}),iconOnly:!0})},i={render:r=>e.jsx(t,{...r,loading:!0,children:"Button"})},c={render:()=>e.jsxs("div",{className:"bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1",children:[e.jsx(le,{variant:"badge",children:"Label"}),e.jsx(t,{size:"xs",variant:"nude",theme:"neutral",iconOnly:!0,icon:e.jsx(Z,{})})]})},d={render:()=>e.jsx(t,{variant:"outline",children:"Button"})},l={render:()=>e.jsx(t,{variant:"unstyled",icon:e.jsx(o,{icon:e.jsx(Y,{})})})},p={render:()=>e.jsxs(de,{className:pe({variant:"titleMd",className:"flex items-center justify-between w-[200px]"}),children:[e.jsx("span",{children:"Heading"})," ",e.jsx(t,{variant:"link",children:"Link"})]})},m={render:()=>e.jsx(t,{loading:!1,disabled:!0,children:"DISABLED"})},u={render:()=>e.jsx(ee,{text:"this text is copied from CopyButton"})},g={};var y,j,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<CloseIcon />} size="md" />}>
      Button
    </Button>
}`,...(b=(j=n.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var v,T,C;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Button {...args} variant="link">
      Reset All
    </Button>
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,I,L;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<Edit />} size="lg" />} iconOnly />
}`,...(L=(I=a.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var k,w,O;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Button {...args} loading>
      Button
    </Button>
}`,...(O=(w=i.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var F,N,D;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1">
      <Text variant="badge">Label</Text>
      <Button size="xs" variant="nude" theme="neutral" iconOnly icon={<CloseIcon />} />
    </div>
}`,...(D=(N=c.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var R,z,A;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Button variant="outline">Button</Button>
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var E,q,H;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Button variant="unstyled" icon={<Icon icon={<EditIcon />} />} />
}`,...(H=(q=l.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var P,W,_;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Card className={headingStyles({
    variant: "titleMd",
    className: "flex items-center justify-between w-[200px]"
  })}>
      <span>Heading</span> <Button variant="link">Link</Button>
    </Card>
}`,...(_=(W=p.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var M,U,$;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Button loading={false} disabled>
      DISABLED
    </Button>
}`,...($=(U=m.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var G,V,X;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <CopyButton text="this text is copied from CopyButton" />
}`,...(X=(V=u.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:"{}",...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const We=["WithIcon","LinkButton","IconOnly","Loading","WithLabel","ButtonAccent","GhostButton","ButtonLinkInsideHeadingStyle","DisabledLoadingFalse","UsingCopyButton","Default"];export{d as ButtonAccent,p as ButtonLinkInsideHeadingStyle,g as Default,m as DisabledLoadingFalse,l as GhostButton,a as IconOnly,s as LinkButton,i as Loading,u as UsingCopyButton,n as WithIcon,c as WithLabel,We as __namedExportsOrder,Pe as default};
