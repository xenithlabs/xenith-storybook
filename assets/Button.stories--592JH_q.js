import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{C as ee}from"./CopyButton-C2xoC3zK.js";import{F as re}from"./menu_vertical-DwETmFhg.js";import{F as Y}from"./edit-BuOM16EU.js";import{F as Z}from"./close-Bwe4q-Z3.js";import{C as te}from"./Card-9Y4jHpVI.js";import{B as r}from"./Button-Bj-1DuKJ.js";import{I as x}from"./Icon-ev__gahW.js";import{T as oe}from"./Text-sxDyydH3.js";import{h as ne}from"./Heading-B_Jl69qA.js";import"./index-l2PZgWEW.js";import"./check-4u3gJW-P.js";import"./copy-BLYJhKYu.js";import"./Tooltip-CZKdCWwJ.js";import"./index-BgmTQNcy.js";import"./index-CaNG7YX3.js";import"./index-C76mvIvD.js";import"./index-DPMSfDr2.js";import"./index-CIGe9IjL.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-BmdjtsoG.js";import"./index-DZOIkxWA.js";import"./index-vMKBQQL5.js";import"./cn-C-5SdYIA.js";import"./index-Cm6j2cFO.js";import"./styles-Cs5Y1E_z.js";import"./index-Bb4qSo10.js";import"./styles-BNEhTmYy.js";import"./spinner-D3uK0xOl.js";import"./chevron-down-jNWesQvo.js";const Ee={title:"Xenith UI/Components/Button",component:r,tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:["solid","outline","nude","link"]},icon:{},children:{},disabled:{control:"boolean"},iconPosition:{control:"select",options:["left","right"]},iconOnly:{control:"boolean"},size:{control:"select",options:["sm","md","xs"]},theme:{control:"select",options:["neutral","destructive","primary"]}},render:t=>e.jsx(r,{...t,children:"Button"})},o={render:t=>e.jsx(r,{...t,icon:e.jsx(x,{icon:e.jsx(Z,{}),size:"md"}),children:"Button"})},n={render:t=>e.jsx(r,{...t,variant:"link",children:"Reset All"})},s={render:t=>e.jsx(r,{...t,icon:e.jsx(x,{icon:e.jsx(Y,{}),size:"lg"}),iconOnly:!0})},a={render:t=>e.jsx(r,{...t,loading:!0,children:"Button"})},i={render:()=>e.jsxs("div",{className:"bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1",children:[e.jsx(oe,{variant:"badge",children:"Label"}),e.jsx(r,{size:"xs",variant:"nude",theme:"neutral",iconOnly:!0,icon:e.jsx(Z,{})})]})},c={render:()=>e.jsx(r,{variant:"outline",children:"Button"})},d={render:()=>e.jsx(r,{variant:"unstyled",icon:e.jsx(x,{icon:e.jsx(Y,{})})})},l={render:()=>e.jsxs(te,{className:ne({variant:"titleMd",className:"flex items-center justify-between w-[200px]"}),children:[e.jsx("span",{children:"Heading"})," ",e.jsx(r,{variant:"link",children:"Link"})]})},m={render:()=>e.jsx(r,{loading:!1,disabled:!0,children:"DISABLED"})},p={render:()=>e.jsx(r,{loading:!1,disabled:!0,icon:e.jsx(x,{icon:e.jsx(re,{})}),iconOnly:!0,variant:"nude"})},u={render:()=>e.jsx(ee,{text:"this text is copied from CopyButton"})},g={};var B,f,j;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<CloseIcon />} size="md" />}>
      Button
    </Button>
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var h,y,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Button {...args} variant="link">
      Reset All
    </Button>
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,I,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<Edit />} size="lg" />} iconOnly />
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var L,C,k;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Button {...args} loading>
      Button
    </Button>
}`,...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var w,D,O;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1">
      <Text variant="badge">Label</Text>
      <Button size="xs" variant="nude" theme="neutral" iconOnly icon={<CloseIcon />} />
    </div>
}`,...(O=(D=i.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var F,N,z;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Button variant="outline">Button</Button>
}`,...(z=(N=c.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var A,E,R;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Button variant="unstyled" icon={<Icon icon={<EditIcon />} />} />
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var T,H,W;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Card className={headingStyles({
    variant: "titleMd",
    className: "flex items-center justify-between w-[200px]"
  })}>
      <span>Heading</span> <Button variant="link">Link</Button>
    </Card>
}`,...(W=(H=l.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var M,U,G;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Button loading={false} disabled>
      DISABLED
    </Button>
}`,...(G=(U=m.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var _,$,P;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Button loading={false} disabled icon={<Icon icon={<MenuVerticalIcon />} />} iconOnly variant="nude" />
}`,...(P=($=p.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var V,X,q;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <CopyButton text="this text is copied from CopyButton" />
}`,...(q=(X=u.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:"{}",...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Re=["WithIcon","LinkButton","IconOnly","Loading","WithLabel","ButtonAccent","GhostButton","ButtonLinkInsideHeadingStyle","DisabledLoadingFalse","DisabledNudeButtonIcon","UsingCopyButton","Default"];export{c as ButtonAccent,l as ButtonLinkInsideHeadingStyle,g as Default,m as DisabledLoadingFalse,p as DisabledNudeButtonIcon,d as GhostButton,s as IconOnly,n as LinkButton,a as Loading,u as UsingCopyButton,o as WithIcon,i as WithLabel,Re as __namedExportsOrder,Ee as default};
