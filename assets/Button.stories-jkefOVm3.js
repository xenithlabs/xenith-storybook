import{j as e}from"./jsx-runtime-BhBAkL08.js";import{C as te}from"./CopyButton-DVoMu_pd.js";import{F as se}from"./menu_vertical-Docu9vDj.js";import{F as oe}from"./edit-CJ6QV__c.js";import{F as ne}from"./close-CejhmAMe.js";import{C as ae}from"./Card-yCdhVsiE.js";import{B as r}from"./Button-3dGPhkPQ.js";import{I as B}from"./Icon-7BdkfswG.js";import{T as ie}from"./Text-D-wIA97j.js";import{h as ce}from"./Heading-CSQHx7IS.js";import"./index-caxmlYbZ.js";import"./check-CDvVW5im.js";import"./copy-Dm2rCmc6.js";import"./Tooltip-Clx9wCHb.js";import"./index-d7ziAqdJ.js";import"./index-DIE_uK0V.js";import"./index-CoQPK225.js";import"./index-9ELtA30B.js";import"./index-CYGPaFfr.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-BPrjlVTu.js";import"./index-D1_gb_Tp.js";import"./index-CIZp6xOi.js";import"./cn-C-5SdYIA.js";import"./index-D09aQd82.js";import"./index-Bb4qSo10.js";import"./styles-BNEhTmYy.js";import"./spinner-ByTSIKau.js";import"./chevron-down-mN_p2z2a.js";const We={title:"Xenith UI/Components/Button",component:r,tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:["solid","outline","nude","link"]},icon:{},children:{},disabled:{control:"boolean"},iconPosition:{control:"select",options:["left","right"]},iconOnly:{control:"boolean"},size:{control:"select",options:["sm","md","xs"]},theme:{control:"select",options:["neutral","destructive","primary"]}},render:t=>e.jsx(r,{...t,children:"Button"})},o={render:t=>e.jsx(r,{...t,icon:e.jsx(B,{icon:e.jsx(ne,{}),size:"md"}),children:"Button"})},n={render:t=>e.jsx(r,{...t,variant:"link",children:"Reset All"})},s={render:t=>e.jsx(r,{...t,icon:e.jsx(B,{icon:e.jsx(oe,{}),size:"lg"}),iconOnly:!0})},a={render:t=>e.jsx(r,{...t,loading:!0,children:"Button"})},i={render:()=>e.jsxs("div",{className:"bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1",children:[e.jsx(ie,{variant:"badge",children:"Label"}),e.jsx(r,{size:"xs",variant:"nude",theme:"neutral",iconOnly:!0,icon:e.jsx(ne,{})})]})},c={render:()=>e.jsx(r,{variant:"outline",children:"Button"})},d={render:()=>e.jsx(r,{variant:"unstyled",icon:e.jsx(B,{icon:e.jsx(oe,{})})})},u={render:()=>e.jsxs(ae,{className:ce({variant:"titleMd",className:"flex items-center justify-between w-[200px]"}),children:[e.jsx("span",{children:"Heading"})," ",e.jsx(r,{variant:"link",children:"Link"})]})},m={render:()=>e.jsx(r,{loading:!1,disabled:!0,children:"DISABLED"})},l={render:()=>e.jsx(r,{loading:!1,disabled:!0,icon:e.jsx(B,{icon:e.jsx(se,{})}),iconOnly:!0,variant:"nude"})},p={render:()=>e.jsx(te,{text:"this text is copied from CopyButton"})},g={render:()=>e.jsx(te,{text:"this text is copied from CopyButton",withButtonText:!0,variant:"outline",theme:"neutral"})},x={};var h,f,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<CloseIcon />} size="md" />}>
      Button
    </Button>
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,b,v;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Button {...args} variant="link">
      Reset All
    </Button>
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var I,C,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<Edit />} size="lg" />} iconOnly />
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var L,k,w;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Button {...args} loading>
      Button
    </Button>
}`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var D,O,T;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1">
      <Text variant="badge">Label</Text>
      <Button size="xs" variant="nude" theme="neutral" iconOnly icon={<CloseIcon />} />
    </div>
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var F,N,z;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Button variant="outline">Button</Button>
}`,...(z=(N=c.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var A,E,R;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Button variant="unstyled" icon={<Icon icon={<EditIcon />} />} />
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var W,U,H;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Card className={headingStyles({
    variant: "titleMd",
    className: "flex items-center justify-between w-[200px]"
  })}>
      <span>Heading</span> <Button variant="link">Link</Button>
    </Card>
}`,...(H=(U=u.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var M,G,_;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Button loading={false} disabled>
      DISABLED
    </Button>
}`,...(_=(G=m.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var $,P,V;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Button loading={false} disabled icon={<Icon icon={<MenuVerticalIcon />} />} iconOnly variant="nude" />
}`,...(V=(P=l.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var X,q,J;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <CopyButton text="this text is copied from CopyButton" />
}`,...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <CopyButton text="this text is copied from CopyButton" withButtonText variant="outline" theme="neutral" />
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:"{}",...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Ue=["WithIcon","LinkButton","IconOnly","Loading","WithLabel","ButtonAccent","GhostButton","ButtonLinkInsideHeadingStyle","DisabledLoadingFalse","DisabledNudeButtonIcon","UsingCopyButton","UsingCopyButtonWithText","Default"];export{c as ButtonAccent,u as ButtonLinkInsideHeadingStyle,x as Default,m as DisabledLoadingFalse,l as DisabledNudeButtonIcon,d as GhostButton,s as IconOnly,n as LinkButton,a as Loading,p as UsingCopyButton,g as UsingCopyButtonWithText,o as WithIcon,i as WithLabel,Ue as __namedExportsOrder,We as default};
