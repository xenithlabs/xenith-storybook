import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{C as ie}from"./CopyButton-DLnsV6FZ.js";import{F as de}from"./menu_vertical-BCfO1BaP.js";import{F as y}from"./edit-BbB4m1XH.js";import{F as ce}from"./close-CAN3cq4E.js";import{C as ue}from"./Card-CG3bkfPC.js";import{B as r}from"./Button-Gcg0sGoa.js";import{I as o}from"./Icon-Bs9G1Rwk.js";import{T as me}from"./Text-BYjIVLkz.js";import{h as le}from"./Heading-BbwmavmP.js";import"./index-DRjF_FHU.js";import"./check-rKbD1QKS.js";import"./copy-BA7Vn8GV.js";import"./Tooltip-BdfrGtl9.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-pOgU7tCp.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./cn-C-5SdYIA.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-BNEhTmYy.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";const Ge={title:"Xenith UI/Components/Button",component:r,tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:["solid","outline","nude","link"]},icon:{},children:{},disabled:{control:"boolean"},iconPosition:{control:"select",options:["left","right"]},iconOnly:{control:"boolean"},size:{control:"select",options:["sm","md","xs"]},theme:{control:"select",options:["neutral","destructive","primary"]}},render:t=>e.jsx(r,{...t,children:"Button"})},n={render:t=>e.jsx(r,{...t,icon:e.jsx(o,{icon:e.jsx(ce,{}),size:"md"}),children:"Button"})},s={render:t=>e.jsx(r,{...t,variant:"link",children:"Reset All"})},a={render:t=>e.jsx(r,{...t,icon:e.jsx(o,{icon:e.jsx(y,{}),size:"sm"}),iconOnly:!0,variant:"nude",theme:"neutral",size:"sm"})},i={render:t=>e.jsx(r,{...t,icon:e.jsx(o,{icon:e.jsx(y,{}),size:"sm"}),iconOnly:!0})},c={render:t=>e.jsx(r,{...t,loading:!0,children:"Button"})},d={render:()=>e.jsxs("div",{className:"bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1",children:[e.jsx(me,{variant:"badge",children:"Label"}),e.jsx(r,{size:"xs",variant:"nude",theme:"neutral",iconOnly:!0,icon:e.jsx(ce,{})})]})},u={render:()=>e.jsx(r,{variant:"outline",children:"Button"})},m={render:()=>e.jsx(r,{variant:"unstyled",icon:e.jsx(o,{icon:e.jsx(y,{})})})},l={render:()=>e.jsxs(ue,{className:le({variant:"titleMd",className:"flex items-center justify-between w-[200px]"}),children:[e.jsx("span",{children:"Heading"})," ",e.jsx(r,{variant:"link",children:"Link"})]})},p={render:()=>e.jsx(r,{loading:!1,disabled:!0,children:"DISABLED"})},x={render:()=>e.jsx(r,{loading:!1,disabled:!0,icon:e.jsx(o,{icon:e.jsx(de,{})}),iconOnly:!0,variant:"nude"})},g={render:()=>e.jsx(ie,{text:"this text is copied from CopyButton"})},B={render:()=>e.jsx(ie,{text:"this text is copied from CopyButton",withButtonText:!0,size:"sm",variant:"outline",theme:"neutral"})},h={};var f,j,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<CloseIcon />} size="md" />}>
      Button
    </Button>
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var b,I,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Button {...args} variant="link">
      Reset All
    </Button>
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var C,L,k;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<Edit />} size="sm" />} iconOnly variant="nude" theme="neutral" size="sm" />
}`,...(k=(L=a.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var w,z,O;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<Edit />} size="sm" />} iconOnly />
}`,...(O=(z=i.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var D,N,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Button {...args} loading>
      Button
    </Button>
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var F,E,A;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1">
      <Text variant="badge">Label</Text>
      <Button size="xs" variant="nude" theme="neutral" iconOnly icon={<CloseIcon />} />
    </div>
}`,...(A=(E=d.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var R,W,M;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Button variant="outline">Button</Button>
}`,...(M=(W=u.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var U,H,G;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Button variant="unstyled" icon={<Icon icon={<EditIcon />} />} />
}`,...(G=(H=m.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var _,$,P;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Card className={headingStyles({
    variant: "titleMd",
    className: "flex items-center justify-between w-[200px]"
  })}>
      <span>Heading</span> <Button variant="link">Link</Button>
    </Card>
}`,...(P=($=l.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var V,X,q;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Button loading={false} disabled>
      DISABLED
    </Button>
}`,...(q=(X=p.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Button loading={false} disabled icon={<Icon icon={<MenuVerticalIcon />} />} iconOnly variant="nude" />
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <CopyButton text="this text is copied from CopyButton" />
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,oe;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <CopyButton text="this text is copied from CopyButton" withButtonText size="sm" variant="outline" theme="neutral" />
}`,...(oe=(te=B.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,se,ae;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:"{}",...(ae=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};const _e=["WithIcon","LinkButton","NudeButtonSM","IconOnly","Loading","WithLabel","ButtonAccent","GhostButton","ButtonLinkInsideHeadingStyle","DisabledLoadingFalse","DisabledNudeButtonIcon","UsingCopyButton","UsingCopyButtonWithText","Default"];export{u as ButtonAccent,l as ButtonLinkInsideHeadingStyle,h as Default,p as DisabledLoadingFalse,x as DisabledNudeButtonIcon,m as GhostButton,i as IconOnly,s as LinkButton,c as Loading,a as NudeButtonSM,g as UsingCopyButton,B as UsingCopyButtonWithText,n as WithIcon,d as WithLabel,_e as __namedExportsOrder,Ge as default};
