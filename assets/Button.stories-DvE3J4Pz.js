import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{I as o}from"./Icon-ev__gahW.js";import{B as r}from"./Button-BT-8gRS6.js";import{F as ie}from"./check-4u3gJW-P.js";import{F as ce,a as de}from"./copy-1dOaghtG.js";import{r as h}from"./index-l2PZgWEW.js";import{a as le,T as pe,b as me,c as ue}from"./Tooltip-DOujJUT_.js";import{F as te}from"./edit-BuOM16EU.js";import{F as oe}from"./close-Bwe4q-Z3.js";import{C as ge}from"./Card-9Y4jHpVI.js";import{T as xe}from"./Text-sxDyydH3.js";import{h as fe}from"./Heading-B_Jl69qA.js";import"./cn-C-5SdYIA.js";import"./index-Bb4qSo10.js";import"./index-Cm6j2cFO.js";import"./styles-Cs5Y1E_z.js";import"./styles-BNEhTmYy.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./index-C76mvIvD.js";import"./index-DPMSfDr2.js";import"./index-CIGe9IjL.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-BmdjtsoG.js";import"./index-DZOIkxWA.js";import"./index-vMKBQQL5.js";const ne=t=>{const[B,y]=h.useState("Copy"),[se,f]=h.useState(!1);return e.jsx(le,{children:e.jsxs(pe,{open:se,onOpenChange:f,children:[e.jsx(me,{asChild:!0,children:e.jsx(r,{...t,variant:"unstyled",iconOnly:!0,onClick:ae=>{ae.stopPropagation(),navigator.clipboard.writeText(t.text),y("Copied"),f(!0),setTimeout(()=>{f(!1),setTimeout(()=>{y("Copy")},150)},1e3)},icon:e.jsx(o,{icon:e.jsx(ce,{})})})}),e.jsx(ue,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[B,B==="Copied"&&e.jsx(o,{icon:e.jsx(ie,{})})]})})]})})};ne.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!0,tsType:{name:"string"},description:""}},composes:["ButtonHTMLAttributes","VariantProps"]};const Ue={title:"Xenith UI/Components/Button",component:r,tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:["solid","outline","nude","link"]},icon:{},children:{},disabled:{control:"boolean"},iconPosition:{control:"select",options:["left","right"]},iconOnly:{control:"boolean"},size:{control:"select",options:["sm","md","xs"]},theme:{control:"select",options:["neutral","destructive","primary"]}},render:t=>e.jsx(r,{...t,children:"Button"})},n={render:t=>e.jsx(r,{...t,icon:e.jsx(o,{icon:e.jsx(oe,{}),size:"md"}),children:"Button"})},s={render:t=>e.jsx(r,{...t,variant:"link",children:"Reset All"})},a={render:t=>e.jsx(r,{...t,icon:e.jsx(o,{icon:e.jsx(te,{}),size:"lg"}),iconOnly:!0})},i={render:t=>e.jsx(r,{...t,loading:!0,children:"Button"})},c={render:()=>e.jsxs("div",{className:"bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1",children:[e.jsx(xe,{variant:"badge",children:"Label"}),e.jsx(r,{size:"xs",variant:"nude",theme:"neutral",iconOnly:!0,icon:e.jsx(oe,{})})]})},d={render:()=>e.jsx(r,{variant:"outline",children:"Button"})},l={render:()=>e.jsx(r,{variant:"unstyled",icon:e.jsx(o,{icon:e.jsx(te,{})})})},p={render:()=>e.jsxs(ge,{className:fe({variant:"titleMd",className:"flex items-center justify-between w-[200px]"}),children:[e.jsx("span",{children:"Heading"})," ",e.jsx(r,{variant:"link",children:"Link"})]})},m={render:()=>e.jsx(r,{loading:!1,disabled:!0,children:"DISABLED"})},u={render:()=>e.jsx(r,{loading:!1,disabled:!0,icon:e.jsx(o,{icon:e.jsx(de,{})}),iconOnly:!0,variant:"nude"})},g={render:()=>e.jsx(ne,{text:"this text is copied from CopyButton"})},x={};var j,b,v;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<CloseIcon />} size="md" />}>
      Button
    </Button>
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var T,C,I;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Button {...args} variant="link">
      Reset All
    </Button>
}`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var S,L,w;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<Edit />} size="lg" />} iconOnly />
}`,...(w=(L=a.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var k,O,F;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Button {...args} loading>
      Button
    </Button>
}`,...(F=(O=i.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var N,D,R;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1">
      <Text variant="badge">Label</Text>
      <Button size="xs" variant="nude" theme="neutral" iconOnly icon={<CloseIcon />} />
    </div>
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var z,A,E;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Button variant="outline">Button</Button>
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var q,H,P;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Button variant="unstyled" icon={<Icon icon={<EditIcon />} />} />
}`,...(P=(H=l.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var M,W,_;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Card className={headingStyles({
    variant: "titleMd",
    className: "flex items-center justify-between w-[200px]"
  })}>
      <span>Heading</span> <Button variant="link">Link</Button>
    </Card>
}`,...(_=(W=p.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var $,U,G;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Button loading={false} disabled>
      DISABLED
    </Button>
}`,...(G=(U=m.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var V,X,J;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Button loading={false} disabled icon={<Icon icon={<MenuVerticalIcon />} />} iconOnly variant="nude" />
}`,...(J=(X=u.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,Q,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <CopyButton text="this text is copied from CopyButton" />
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:"{}",...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Ge=["WithIcon","LinkButton","IconOnly","Loading","WithLabel","ButtonAccent","GhostButton","ButtonLinkInsideHeadingStyle","DisabledLoadingFalse","DisabledNudeButtonIcon","UsingCopyButton","Default"];export{d as ButtonAccent,p as ButtonLinkInsideHeadingStyle,x as Default,m as DisabledLoadingFalse,u as DisabledNudeButtonIcon,l as GhostButton,a as IconOnly,s as LinkButton,i as Loading,g as UsingCopyButton,n as WithIcon,c as WithLabel,Ge as __namedExportsOrder,Ue as default};
