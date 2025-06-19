import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{I as n}from"./Icon-CTnhpE1d.js";import{C as ue}from"./CopyButton-Dc_QebxB.js";import{F as ge}from"./menu_vertical-BCfO1BaP.js";import{F as y}from"./edit-C2b6G_Uy.js";import{F as le}from"./close-D2djoYoT.js";import{C as xe}from"./Card-C5rr-ZzX.js";import{B as r}from"./Button-BymKk-hE.js";import{T as Be}from"./Text-C8HBwI4b.js";import{h as he}from"./Heading-DjlBwQyS.js";import"./index-DRjF_FHU.js";import"./cn-8RyR4BqC.js";import"./index-Bb4qSo10.js";import"./check-C0C6JGvp.js";import"./copy-De8jvVXM.js";import"./Tooltip-D2ba4dcD.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./styles-x1yxmyQd.js";import"./index-HZDBD2ik.js";import"./chevron-up-Dp-rU9It.js";import"./chevron-down-CyV3wpL8.js";import"./spinner-ZMRwnkYw.js";const Je={title:"Xenith UI/Components/Button",component:r,tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:["solid","outline","nude","link"]},icon:{},children:{},disabled:{control:"boolean"},iconPosition:{control:"select",options:["left","right"]},iconOnly:{control:"boolean"},size:{control:"select",options:["sm","md","xs"]},theme:{control:"select",options:["neutral","destructive","primary"]}},render:t=>e.jsx(r,{...t,children:"Button"})},o={render:t=>e.jsx(r,{...t,icon:e.jsx(n,{icon:e.jsx(le,{}),size:"md"}),children:"Button"})},s={render:t=>e.jsx(r,{...t,variant:"link",children:"Reset All"})},a={render:t=>e.jsx(r,{...t,icon:e.jsx(n,{icon:e.jsx(y,{}),size:"sm"}),iconOnly:!0,variant:"nude",theme:"neutral",size:"sm"})},i={render:t=>e.jsx(r,{...t,icon:e.jsx(n,{icon:e.jsx(y,{}),size:"sm"}),iconOnly:!0})},c={render:t=>e.jsx(r,{...t,loading:!0,children:"Button"})},d={render:()=>e.jsxs("div",{className:"bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1",children:[e.jsx(Be,{variant:"badge",children:"Label"}),e.jsx(r,{size:"xs",variant:"nude",theme:"neutral",iconOnly:!0,icon:e.jsx(le,{})})]})},m={render:()=>e.jsx(r,{variant:"outline",children:"Button"})},u={render:()=>e.jsx(r,{variant:"unstyled",icon:e.jsx(n,{icon:e.jsx(y,{})})})},l={render:()=>e.jsxs(xe,{className:he({variant:"titleMd",className:"flex items-center justify-between w-[200px]"}),children:[e.jsx("span",{children:"Heading"})," ",e.jsx(r,{variant:"link",children:"Link"})]})},p={render:()=>e.jsx(r,{loading:!1,disabled:!0,children:"DISABLED"})},g={render:()=>e.jsx(r,{loading:!1,disabled:!0,icon:e.jsx(n,{icon:e.jsx(ge,{})}),iconOnly:!0,variant:"nude"})},x={render:()=>e.jsx(ue,{text:"this text is copied from CopyButton"})},B={render:()=>e.jsx(ue,{text:"this text is copied from CopyButton",withButtonText:!0,size:"sm",variant:"outline",theme:"neutral"})},je=["success","destructive","primary","neutral"],h={render:t=>e.jsx(e.Fragment,{children:je.map(pe=>e.jsx(r,{...t,className:"mr-3",theme:pe,children:"Mark as Something"}))})},j={};var f,v,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<CloseIcon />} size="md" />}>
      Button
    </Button>
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var S,I,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Button {...args} variant="link">
      Reset All
    </Button>
}`,...(C=(I=s.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var L,k,w;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<Edit />} size="sm" />} iconOnly variant="nude" theme="neutral" size="sm" />
}`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var z,T,N;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<Edit />} size="sm" />} iconOnly />
}`,...(N=(T=i.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var O,D,F;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Button {...args} loading>
      Button
    </Button>
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var A,E,M;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1">
      <Text variant="badge">Label</Text>
      <Button size="xs" variant="nude" theme="neutral" iconOnly icon={<CloseIcon />} />
    </div>
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var R,W,U;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Button variant="outline">Button</Button>
}`,...(U=(W=m.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var H,G,_;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Button variant="unstyled" icon={<Icon icon={<EditIcon />} />} />
}`,...(_=(G=u.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var $,P,V;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Card className={headingStyles({
    variant: "titleMd",
    className: "flex items-center justify-between w-[200px]"
  })}>
      <span>Heading</span> <Button variant="link">Link</Button>
    </Card>
}`,...(V=(P=l.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var X,q,J;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Button loading={false} disabled>
      DISABLED
    </Button>
}`,...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Button loading={false} disabled icon={<Icon icon={<MenuVerticalIcon />} />} iconOnly variant="nude" />
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <CopyButton text="this text is copied from CopyButton" />
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ne,oe;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <CopyButton text="this text is copied from CopyButton" withButtonText size="sm" variant="outline" theme="neutral" />
}`,...(oe=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ae,ie;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <>
      {availableThemes.map(theme => <Button {...args} className="mr-3" theme={theme}>
          Mark as Something
        </Button>)}
    </>
}`,...(ie=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ce,de,me;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:"{}",...(me=(de=j.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const Ke=["WithIcon","LinkButton","NudeButtonSM","IconOnly","Loading","WithLabel","ButtonAccent","GhostButton","ButtonLinkInsideHeadingStyle","DisabledLoadingFalse","DisabledNudeButtonIcon","UsingCopyButton","UsingCopyButtonWithText","AllButtonTheme","Default"];export{h as AllButtonTheme,m as ButtonAccent,l as ButtonLinkInsideHeadingStyle,j as Default,p as DisabledLoadingFalse,g as DisabledNudeButtonIcon,u as GhostButton,i as IconOnly,s as LinkButton,c as Loading,a as NudeButtonSM,x as UsingCopyButton,B as UsingCopyButtonWithText,o as WithIcon,d as WithLabel,Ke as __namedExportsOrder,Je as default};
