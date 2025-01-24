import{j as e}from"./jsx-runtime-BhBAkL08.js";import{C as te}from"./CopyButton-DfF1lQC7.js";import{F as se}from"./menu_vertical-Docu9vDj.js";import{F as oe}from"./edit-CJ6QV__c.js";import{F as ne}from"./close-CejhmAMe.js";import{C as ae}from"./Card-yCdhVsiE.js";import{B as r}from"./Button-3dGPhkPQ.js";import{I as B}from"./Icon-7BdkfswG.js";import{T as ie}from"./Text-D-wIA97j.js";import{h as ce}from"./Heading-CSQHx7IS.js";import"./index-caxmlYbZ.js";import"./check-CDvVW5im.js";import"./copy-Dm2rCmc6.js";import"./Tooltip-Clx9wCHb.js";import"./index-d7ziAqdJ.js";import"./index-DIE_uK0V.js";import"./index-CoQPK225.js";import"./index-9ELtA30B.js";import"./index-CYGPaFfr.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-BPrjlVTu.js";import"./index-D1_gb_Tp.js";import"./index-CIZp6xOi.js";import"./cn-C-5SdYIA.js";import"./index-D09aQd82.js";import"./index-Bb4qSo10.js";import"./styles-BNEhTmYy.js";import"./spinner-ByTSIKau.js";import"./chevron-down-mN_p2z2a.js";const We={title:"Xenith UI/Components/Button",component:r,tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:["solid","outline","nude","link"]},icon:{},children:{},disabled:{control:"boolean"},iconPosition:{control:"select",options:["left","right"]},iconOnly:{control:"boolean"},size:{control:"select",options:["sm","md","xs"]},theme:{control:"select",options:["neutral","destructive","primary"]}},render:t=>e.jsx(r,{...t,children:"Button"})},o={render:t=>e.jsx(r,{...t,icon:e.jsx(B,{icon:e.jsx(ne,{}),size:"md"}),children:"Button"})},n={render:t=>e.jsx(r,{...t,variant:"link",children:"Reset All"})},s={render:t=>e.jsx(r,{...t,icon:e.jsx(B,{icon:e.jsx(oe,{}),size:"lg"}),iconOnly:!0})},a={render:t=>e.jsx(r,{...t,loading:!0,children:"Button"})},i={render:()=>e.jsxs("div",{className:"bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1",children:[e.jsx(ie,{variant:"badge",children:"Label"}),e.jsx(r,{size:"xs",variant:"nude",theme:"neutral",iconOnly:!0,icon:e.jsx(ne,{})})]})},c={render:()=>e.jsx(r,{variant:"outline",children:"Button"})},d={render:()=>e.jsx(r,{variant:"unstyled",icon:e.jsx(B,{icon:e.jsx(oe,{})})})},m={render:()=>e.jsxs(ae,{className:ce({variant:"titleMd",className:"flex items-center justify-between w-[200px]"}),children:[e.jsx("span",{children:"Heading"})," ",e.jsx(r,{variant:"link",children:"Link"})]})},u={render:()=>e.jsx(r,{loading:!1,disabled:!0,children:"DISABLED"})},p={render:()=>e.jsx(r,{loading:!1,disabled:!0,icon:e.jsx(B,{icon:e.jsx(se,{})}),iconOnly:!0,variant:"nude"})},l={render:()=>e.jsx(te,{text:"this text is copied from CopyButton"})},g={render:()=>e.jsx(te,{text:"this text is copied from CopyButton",buttonText:"Copy",variant:"outline",size:"sm",theme:"neutral"})},x={};var h,y,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<CloseIcon />} size="md" />}>
      Button
    </Button>
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var j,b,v;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Button {...args} variant="link">
      Reset All
    </Button>
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var C,I,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<Edit />} size="lg" />} iconOnly />
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var L,k,w;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Button {...args} loading>
      Button
    </Button>
}`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var D,O,z;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1">
      <Text variant="badge">Label</Text>
      <Button size="xs" variant="nude" theme="neutral" iconOnly icon={<CloseIcon />} />
    </div>
}`,...(z=(O=i.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var T,F,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Button variant="outline">Button</Button>
}`,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var A,E,R;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Button variant="unstyled" icon={<Icon icon={<EditIcon />} />} />
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var W,U,H;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Card className={headingStyles({
    variant: "titleMd",
    className: "flex items-center justify-between w-[200px]"
  })}>
      <span>Heading</span> <Button variant="link">Link</Button>
    </Card>
}`,...(H=(U=m.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var M,G,_;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Button loading={false} disabled>
      DISABLED
    </Button>
}`,...(_=(G=u.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var $,P,V;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Button loading={false} disabled icon={<Icon icon={<MenuVerticalIcon />} />} iconOnly variant="nude" />
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var X,q,J;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <CopyButton text="this text is copied from CopyButton" />
}`,...(J=(q=l.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <CopyButton text="this text is copied from CopyButton" buttonText="Copy" variant="outline" size="sm" theme="neutral" />
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:"{}",...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Ue=["WithIcon","LinkButton","IconOnly","Loading","WithLabel","ButtonAccent","GhostButton","ButtonLinkInsideHeadingStyle","DisabledLoadingFalse","DisabledNudeButtonIcon","UsingCopyButton","UsingCopyButtonWithText","Default"];export{c as ButtonAccent,m as ButtonLinkInsideHeadingStyle,x as Default,u as DisabledLoadingFalse,p as DisabledNudeButtonIcon,d as GhostButton,s as IconOnly,n as LinkButton,a as Loading,l as UsingCopyButton,g as UsingCopyButtonWithText,o as WithIcon,i as WithLabel,Ue as __namedExportsOrder,We as default};
