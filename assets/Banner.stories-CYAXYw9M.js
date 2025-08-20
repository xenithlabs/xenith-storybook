import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as K}from"./index-DRjF_FHU.js";import{B as n}from"./Banner-D4oQEaer.js";import{I as t}from"./Icon-CTnhpE1d.js";import{F as h}from"./close-D2djoYoT.js";import{F as G}from"./close-circle-BoBsQXa4.js";import{F as J}from"./link-BnRrDxjS.js";import{F as H}from"./check-circle-DNKzEdhW.js";import{F as x}from"./alert-circle-Fx72cPit.js";import{F as Q}from"./forward-D4TzkHoG.js";import{B as s}from"./Button-CHcYOyT5.js";import"./index-Bb4qSo10.js";import"./cn-8RyR4BqC.js";import"./info-Cre7IJy9.js";import"./index-HZDBD2ik.js";import"./styles-x1yxmyQd.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";const ve={title:"Xenith UI/Components/Banner",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The Banner component is used to display important information, alerts, or notifications to users. It supports different themes for various message types and can include icons and action buttons.

### Key Features
- **Theme Variants**: Neutral, accent, warning, success, and destructive themes
- **Flexible Content**: Supports text, icons, and action components
- **Dismissible**: Can include close buttons or other actions
- **Accessible**: Proper color contrast and semantic structure
- **Responsive**: Adapts to container width

### Usage
\`\`\`tsx
import { Banner } from "@xenithlabs/xenith-ui";

// Basic usage
<Banner>
  This is an informational message
</Banner>

// With theme
<Banner theme="warning">
  Please review your settings before continuing
</Banner>

// With custom icon
<Banner theme="success" icon={<CheckCircleIcon />}>
  Your changes have been saved successfully
</Banner>

// With action button
<Banner 
  theme="accent"
  rightComponent={<Button size="sm">Learn More</Button>}
>
  New features are available
</Banner>
\`\`\`

### Component Props

- **variant** ("simple"): Visual style variant. Currently only "simple" is available
- **theme** ("neutral" | "accent" | "warning" | "success" | "destructive"): Color theme. Default: "neutral"
- **icon** (ReactNode): Icon to display. Default: InfoIcon
- **rightComponent** (ReactNode): Component to display on the right (e.g., buttons, close icon)
- **className** (string): Additional CSS classes
- **children** (ReactNode): Banner content
        `}}},argTypes:{variant:{control:{type:"select"},options:["simple"],description:"Visual style variant of the banner",table:{type:{summary:'"simple"'},defaultValue:{summary:'"simple"'}}},theme:{control:{type:"select"},options:["neutral","accent","warning","success","destructive"],description:"Color theme of the banner",table:{type:{summary:'"neutral" | "accent" | "warning" | "success" | "destructive"'},defaultValue:{summary:'"neutral"'}}},icon:{control:!1,description:"Icon to display in the banner",table:{type:{summary:"ReactNode"},defaultValue:{summary:"<InfoIcon />"}}},rightComponent:{control:!1,description:"Component to display on the right side",table:{type:{summary:"ReactNode"}}},children:{control:{type:"text"},description:"Content to display in the banner",table:{type:{summary:"ReactNode"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}},args:{variant:"simple",theme:"neutral",children:"This is a banner message"}},a={},r={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{theme:"neutral",children:"Neutral theme - General information or updates"}),e.jsx(n,{theme:"accent",children:"Accent theme - Highlighted information or features"}),e.jsx(n,{theme:"warning",icon:e.jsx(t,{icon:e.jsx(x,{})}),children:"Warning theme - Important notices or cautions"}),e.jsx(n,{theme:"success",icon:e.jsx(t,{icon:e.jsx(H,{})}),children:"Success theme - Positive feedback or confirmations"}),e.jsx(n,{theme:"destructive",icon:e.jsx(t,{icon:e.jsx(G,{})}),children:"Destructive theme - Errors or critical alerts"})]})},i={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{theme:"accent",rightComponent:e.jsx(s,{variant:"unstyled",size:"sm",className:"font-semibold",children:"Learn More"}),children:"New features are now available"}),e.jsx(n,{theme:"warning",icon:e.jsx(t,{icon:e.jsx(x,{})}),rightComponent:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{variant:"unstyled",size:"sm",className:"font-semibold",children:"Review"}),e.jsx(s,{variant:"unstyled",size:"sm",className:"font-semibold",children:"Dismiss"})]}),children:"Your trial expires in 3 days"})]})},o={render:function(){const[_,g]=K.useState(!0);return _?e.jsx(n,{theme:"accent",rightComponent:e.jsx(s,{variant:"unstyled",iconOnly:!0,icon:e.jsx(t,{icon:e.jsx(h,{}),size:"lg"}),onClick:()=>g(!1),className:"p-1.5"}),children:"This banner can be dismissed by clicking the close button"}):e.jsx(s,{onClick:()=>g(!0),variant:"outline",size:"sm",children:"Show Banner"})}},c={name:"Sandbox Mode Banner (Real Example)",render:()=>e.jsx(n,{theme:"warning",className:"rounded-none",icon:null,children:e.jsx("div",{className:"text-center w-full font-semibold",children:"Sandbox Mode"})})},l={name:"Informational Banners",render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{theme:"neutral",children:e.jsxs("div",{children:[e.jsx("strong",{children:"Maintenance Notice:"})," System maintenance scheduled for Sunday, 2:00 AM - 4:00 AM UTC"]})}),e.jsx(n,{theme:"accent",rightComponent:e.jsxs(s,{variant:"unstyled",size:"sm",className:"flex items-center gap-1",children:[e.jsx("span",{children:"View docs"}),e.jsx(J,{className:"h-3 w-3"})]}),children:e.jsxs("div",{children:[e.jsx("strong",{children:"API Update:"})," Version 2.0 is now available with new endpoints"]})})]})},m={name:"Payment Notifications (Real Examples)",render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{theme:"warning",icon:e.jsx(t,{icon:e.jsx(x,{})}),children:e.jsxs("div",{children:[e.jsx("strong",{children:"Pending Approval:"})," 5 payouts require your approval"]})}),e.jsx(n,{theme:"success",icon:e.jsx(t,{icon:e.jsx(H,{})}),rightComponent:e.jsxs(s,{variant:"unstyled",size:"sm",className:"flex items-center gap-1",children:["View details",e.jsx(Q,{className:"h-3 w-3"})]}),children:e.jsx("div",{children:"Settlement completed successfully for $10,234.50"})}),e.jsx(n,{theme:"destructive",icon:e.jsx(t,{icon:e.jsx(G,{})}),children:e.jsxs("div",{children:[e.jsx("strong",{children:"Payment Failed:"})," Transaction TXN-123456 could not be processed"]})})]})},d={render:()=>e.jsx("div",{className:"max-w-2xl",children:e.jsx(n,{theme:"neutral",rightComponent:e.jsx(s,{variant:"unstyled",iconOnly:!0,icon:e.jsx(t,{icon:e.jsx(h,{}),size:"lg"}),className:"p-1.5 flex-shrink-0"}),children:e.jsx("div",{className:"text-sm",children:"This is a longer banner message that might wrap to multiple lines. It contains detailed information about an important update or notification that users need to be aware of. The banner adapts to the content length while maintaining proper spacing and alignment."})})})},u={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{theme:"accent",className:"border-2 border-accent",children:"Banner with custom border"}),e.jsx(n,{theme:"warning",className:"rounded-full",children:"Banner with rounded corners"}),e.jsx(n,{theme:"neutral",className:"shadow-lg",children:"Banner with shadow effect"})]})},p={render:()=>e.jsx(n,{theme:"accent",rightComponent:e.jsxs("div",{className:"flex items-center gap-4 font-semibold text-inherit [&>*]:h-8",children:[e.jsx(s,{variant:"unstyled",className:"px-[15.5px]",children:"Accept"}),e.jsx(s,{variant:"unstyled",className:"px-[15.5px]",children:"Decline"}),e.jsx(s,{variant:"unstyled",iconOnly:!0,icon:e.jsx("div",{className:"flex items-center justify-center w-5 h-5",children:e.jsx(t,{icon:e.jsx(h,{}),size:"lg"})}),className:"p-1.5"})]}),children:"Cookie consent: We use cookies to improve your experience"})};var f,v,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var B,b,j;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Banner theme="neutral">
        Neutral theme - General information or updates
      </Banner>
      <Banner theme="accent">
        Accent theme - Highlighted information or features
      </Banner>
      <Banner theme="warning" icon={<Icon icon={<AlertCircleIcon />} />}>
        Warning theme - Important notices or cautions
      </Banner>
      <Banner theme="success" icon={<Icon icon={<CheckCircleIcon />} />}>
        Success theme - Positive feedback or confirmations
      </Banner>
      <Banner theme="destructive" icon={<Icon icon={<XCircleIcon />} />}>
        Destructive theme - Errors or critical alerts
      </Banner>
    </div>
}`,...(j=(b=r.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var N,w,C;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Banner theme="accent" rightComponent={<Button variant="unstyled" size="sm" className="font-semibold">
            Learn More
          </Button>}>
        New features are now available
      </Banner>
      
      <Banner theme="warning" icon={<Icon icon={<AlertCircleIcon />} />} rightComponent={<div className="flex items-center gap-2">
            <Button variant="unstyled" size="sm" className="font-semibold">
              Review
            </Button>
            <Button variant="unstyled" size="sm" className="font-semibold">
              Dismiss
            </Button>
          </div>}>
        Your trial expires in 3 days
      </Banner>
    </div>
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var I,S,A;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: function DismissibleBanner() {
    const [visible, setVisible] = React.useState(true);
    if (!visible) {
      return <Button onClick={() => setVisible(true)} variant="outline" size="sm">
          Show Banner
        </Button>;
    }
    return <Banner theme="accent" rightComponent={<Button variant="unstyled" iconOnly icon={<Icon icon={<CloseIcon />} size="lg" />} onClick={() => setVisible(false)} className="p-1.5" />}>
        This banner can be dismissed by clicking the close button
      </Banner>;
  }
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var R,z,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Sandbox Mode Banner (Real Example)",
  render: () => <Banner theme="warning" className="rounded-none" icon={null}>
      <div className="text-center w-full font-semibold">
        Sandbox Mode
      </div>
    </Banner>
}`,...(T=(z=c.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var k,M,F;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Informational Banners",
  render: () => <div className="space-y-3">
      <Banner theme="neutral">
        <div>
          <strong>Maintenance Notice:</strong> System maintenance scheduled for Sunday, 2:00 AM - 4:00 AM UTC
        </div>
      </Banner>
      
      <Banner theme="accent" rightComponent={<Button variant="unstyled" size="sm" className="flex items-center gap-1">
            <span>View docs</span>
            <ExternalLinkIcon className="h-3 w-3" />
          </Button>}>
        <div>
          <strong>API Update:</strong> Version 2.0 is now available with new endpoints
        </div>
      </Banner>
    </div>
}`,...(F=(M=l.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var V,D,P;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Payment Notifications (Real Examples)",
  render: () => <div className="space-y-3">
      <Banner theme="warning" icon={<Icon icon={<AlertCircleIcon />} />}>
        <div>
          <strong>Pending Approval:</strong> 5 payouts require your approval
        </div>
      </Banner>
      
      <Banner theme="success" icon={<Icon icon={<CheckCircleIcon />} />} rightComponent={<Button variant="unstyled" size="sm" className="flex items-center gap-1">
            View details
            <ArrowRightIcon className="h-3 w-3" />
          </Button>}>
        <div>
          Settlement completed successfully for $10,234.50
        </div>
      </Banner>
      
      <Banner theme="destructive" icon={<Icon icon={<XCircleIcon />} />}>
        <div>
          <strong>Payment Failed:</strong> Transaction TXN-123456 could not be processed
        </div>
      </Banner>
    </div>
}`,...(P=(D=m.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var E,W,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">
      <Banner theme="neutral" rightComponent={<Button variant="unstyled" iconOnly icon={<Icon icon={<CloseIcon />} size="lg" />} className="p-1.5 flex-shrink-0" />}>
        <div className="text-sm">
          This is a longer banner message that might wrap to multiple lines. It contains detailed information
          about an important update or notification that users need to be aware of. The banner adapts to the
          content length while maintaining proper spacing and alignment.
        </div>
      </Banner>
    </div>
}`,...(O=(W=d.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var $,L,U;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Banner theme="accent" className="border-2 border-accent">
        Banner with custom border
      </Banner>
      
      <Banner theme="warning" className="rounded-full">
        Banner with rounded corners
      </Banner>
      
      <Banner theme="neutral" className="shadow-lg">
        Banner with shadow effect
      </Banner>
    </div>
}`,...(U=(L=u.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var X,Y,q;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Banner theme="accent" rightComponent={<div className="flex items-center gap-4 font-semibold text-inherit [&>*]:h-8">
          <Button variant="unstyled" className="px-[15.5px]">
            Accept
          </Button>
          <Button variant="unstyled" className="px-[15.5px]">
            Decline
          </Button>
          <Button variant="unstyled" iconOnly icon={<div className="flex items-center justify-center w-5 h-5">
                <Icon icon={<CloseIcon />} size="lg" />
              </div>} className="p-1.5" />
        </div>}>
      Cookie consent: We use cookies to improve your experience
    </Banner>
}`,...(q=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};const ye=["Default","Themes","WithActions","Dismissible","SandboxMode","InformationalBanners","PaymentNotifications","LongContent","CustomStyling","MultipleActions"];export{u as CustomStyling,a as Default,o as Dismissible,l as InformationalBanners,d as LongContent,p as MultipleActions,m as PaymentNotifications,c as SandboxMode,r as Themes,i as WithActions,ye as __namedExportsOrder,ve as default};
