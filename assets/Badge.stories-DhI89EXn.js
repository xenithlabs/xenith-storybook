import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{B as a}from"./Badge-CQf0SPqP.js";import{F as t}from"./user-COLMXspT.js";import{F as H}from"./close-circle-BoBsQXa4.js";import{F as J}from"./info-Cre7IJy9.js";import{F as q}from"./check-circle-DNKzEdhW.js";import{F as Q}from"./alert-circle-Fx72cPit.js";import{F as Z}from"./clock-DRhx3Wks.js";import{c as ee}from"./cn-8RyR4BqC.js";import"./index-DRjF_FHU.js";import"./index-Bb4qSo10.js";import"./styles-x1yxmyQd.js";const s=({className:K})=>e.jsx("div",{className:ee("rounded-full w-2 h-2 bg-bg-critical",K)});s.__docgenInfo={description:"",methods:[],displayName:"Dot",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const he={title:"Xenith UI/Components/Badge",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The Badge component is used to highlight and display short information, labels, or statuses. It supports multiple visual variants and themes to convey different types of information effectively.

### Key Features
- **Multiple Variants**: Solid, soft, and outline styles
- **Theme Options**: Primary, success, warning, destructive, and neutral themes
- **Flexible Sizing**: Extra small to large sizes
- **Composable**: Can include icons, dots, or other inline elements
- **Accessible**: Proper color contrast for all theme combinations

### Usage
\`\`\`tsx
import { Badge } from "@xenithlabs/xenith-ui";

// Basic usage
<Badge>Default</Badge>

// With theme
<Badge theme="success">Active</Badge>

// With variant and size
<Badge variant="outline" theme="warning" size="lg">
  Pending
</Badge>

// With icon
<Badge theme="primary">
  <CheckCircleIcon className="h-3 w-3" />
  Verified
</Badge>
\`\`\`

### Component Props

- **variant** ("solid" | "soft" | "outline" | "count"): Visual style variant. Default: "soft"
- **theme** ("neutral" | "primary" | "success" | "destructive" | "warning"): Color theme. Default: "neutral"
- **size** ("xs" | "sm" | "md" | "lg"): Size of the badge. Default: "sm"
- **className** (string): Additional CSS classes
- **children** (ReactNode): Badge content
        `}}},argTypes:{variant:{control:{type:"select"},options:["solid","soft","outline","count"],description:"Visual style variant of the badge",table:{type:{summary:'"solid" | "soft" | "outline" | "count"'},defaultValue:{summary:'"soft"'}}},theme:{control:{type:"select"},options:["neutral","primary","success","destructive","warning"],description:"Color theme of the badge",table:{type:{summary:'"neutral" | "primary" | "success" | "destructive" | "warning"'},defaultValue:{summary:'"neutral"'}}},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Size of the badge",table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:'"sm"'}}},children:{control:{type:"text"},description:"Content to display in the badge",table:{type:{summary:"ReactNode"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}},args:{variant:"soft",theme:"neutral",size:"sm",children:"Badge"}},n={},r={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{variant:"solid",theme:"primary",children:"Solid"}),e.jsx(a,{variant:"soft",theme:"primary",children:"Soft"}),e.jsx(a,{variant:"outline",theme:"primary",children:"Outline"})]})},i={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{variant:"solid",theme:"neutral",children:"Neutral"}),e.jsx(a,{variant:"solid",theme:"primary",children:"Primary"}),e.jsx(a,{variant:"solid",theme:"success",children:"Success"}),e.jsx(a,{variant:"solid",theme:"warning",children:"Warning"}),e.jsx(a,{variant:"solid",theme:"destructive",children:"Destructive"})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{variant:"soft",theme:"neutral",children:"Neutral"}),e.jsx(a,{variant:"soft",theme:"primary",children:"Primary"}),e.jsx(a,{variant:"soft",theme:"success",children:"Success"}),e.jsx(a,{variant:"soft",theme:"warning",children:"Warning"}),e.jsx(a,{variant:"soft",theme:"destructive",children:"Destructive"})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{variant:"outline",theme:"neutral",children:"Neutral"}),e.jsx(a,{variant:"outline",theme:"primary",children:"Primary"}),e.jsx(a,{variant:"outline",theme:"success",children:"Success"}),e.jsx(a,{variant:"outline",theme:"warning",children:"Warning"}),e.jsx(a,{variant:"outline",theme:"destructive",children:"Destructive"})]})]})},d={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{size:"xs",children:"Extra Small"}),e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},c={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsxs(a,{theme:"success",variant:"soft",children:[e.jsx(q,{className:"h-3 w-3"}),"Active"]}),e.jsxs(a,{theme:"destructive",variant:"soft",children:[e.jsx(H,{className:"h-3 w-3"}),"Inactive"]}),e.jsxs(a,{theme:"warning",variant:"soft",children:[e.jsx(Q,{className:"h-3 w-3"}),"Warning"]}),e.jsxs(a,{theme:"primary",variant:"soft",children:[e.jsx(J,{className:"h-3 w-3"}),"Info"]})]})},m={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsxs(a,{theme:"neutral",variant:"soft",children:[e.jsx(s,{className:"bg-success"}),"Online"]}),e.jsxs(a,{theme:"neutral",variant:"soft",children:[e.jsx(s,{className:"bg-warning"}),"Away"]}),e.jsxs(a,{theme:"neutral",variant:"soft",children:[e.jsx(s,{className:"bg-muted"}),"Offline"]}),e.jsxs(a,{theme:"neutral",variant:"outline",children:[e.jsx(s,{className:"bg-destructive"}),"Do not disturb"]})]})},l={name:"Status Badges (Real Examples)",render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Transaction Status"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(a,{theme:"success",variant:"soft",children:"Success"}),e.jsx(a,{theme:"warning",variant:"soft",children:"Pending"}),e.jsx(a,{theme:"primary",variant:"soft",children:"Processing"}),e.jsx(a,{theme:"destructive",variant:"soft",children:"Failed"}),e.jsx(a,{theme:"neutral",variant:"soft",children:"Expired"}),e.jsx(a,{theme:"neutral",variant:"soft",children:"Cancelled"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"User Status"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(a,{theme:"success",variant:"soft",children:"Active"}),e.jsx(a,{theme:"warning",variant:"soft",children:"Invited"}),e.jsx(a,{theme:"destructive",variant:"soft",children:"Inactive"}),e.jsx(a,{theme:"neutral",variant:"soft",children:"Expired"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Environment"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs(a,{theme:"success",variant:"outline",children:[e.jsx(s,{className:"bg-success"}),"Production"]}),e.jsxs(a,{theme:"warning",variant:"outline",children:[e.jsx(s,{className:"bg-warning"}),"Staging"]}),e.jsxs(a,{theme:"primary",variant:"outline",children:[e.jsx(s,{className:"bg-primary"}),"Development"]})]})]})]})},o={name:"Count Badges",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{size:"xs",theme:"primary",variant:"solid",children:"3"}),e.jsx(a,{size:"sm",theme:"destructive",variant:"solid",children:"99+"}),e.jsx(a,{size:"md",theme:"neutral",variant:"soft",children:"12 new"}),e.jsxs(a,{size:"lg",theme:"success",variant:"soft",children:[e.jsx(q,{className:"h-4 w-4"}),"5 completed"]})]})},g={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{className:"bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0",children:"Gradient"}),e.jsx(a,{className:"shadow-md",theme:"primary",variant:"soft",children:"With Shadow"}),e.jsx(a,{className:"rounded-full",theme:"success",variant:"outline",children:"Pill Shape"}),e.jsx(a,{className:"font-mono",theme:"neutral",variant:"soft",children:"CODE123"})]})},h={name:"Role/Permission Badges",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs(a,{theme:"primary",variant:"soft",size:"sm",children:[e.jsx(t,{className:"h-3 w-3"}),"Admin"]}),e.jsxs(a,{theme:"success",variant:"soft",size:"sm",children:[e.jsx(t,{className:"h-3 w-3"}),"Operator"]}),e.jsxs(a,{theme:"warning",variant:"soft",size:"sm",children:[e.jsx(t,{className:"h-3 w-3"}),"Viewer"]}),e.jsxs(a,{theme:"neutral",variant:"soft",size:"sm",children:[e.jsx(t,{className:"h-3 w-3"}),"Guest"]})]})},u={name:"Inline Usage Example",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-sm",children:["Your account is ",e.jsx(a,{theme:"success",variant:"soft",size:"sm",children:"verified"})," and has"," ",e.jsx(a,{theme:"primary",variant:"soft",size:"sm",children:"premium"})," status."]}),e.jsxs("p",{className:"text-sm",children:["Transaction ",e.jsx("code",{className:"text-xs bg-muted px-1 rounded",children:"TXN-123456"})," is"," ",e.jsxs(a,{theme:"warning",variant:"soft",size:"sm",children:[e.jsx(Z,{className:"h-3 w-3"}),"pending approval"]})]})]})};var p,v,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,B,j;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Badge variant="solid" theme="primary">Solid</Badge>
      <Badge variant="soft" theme="primary">Soft</Badge>
      <Badge variant="outline" theme="primary">Outline</Badge>
    </div>
}`,...(j=(B=r.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var N,w,y;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <Badge variant="solid" theme="neutral">Neutral</Badge>
        <Badge variant="solid" theme="primary">Primary</Badge>
        <Badge variant="solid" theme="success">Success</Badge>
        <Badge variant="solid" theme="warning">Warning</Badge>
        <Badge variant="solid" theme="destructive">Destructive</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Badge variant="soft" theme="neutral">Neutral</Badge>
        <Badge variant="soft" theme="primary">Primary</Badge>
        <Badge variant="soft" theme="success">Success</Badge>
        <Badge variant="soft" theme="warning">Warning</Badge>
        <Badge variant="soft" theme="destructive">Destructive</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Badge variant="outline" theme="neutral">Neutral</Badge>
        <Badge variant="outline" theme="primary">Primary</Badge>
        <Badge variant="outline" theme="success">Success</Badge>
        <Badge variant="outline" theme="warning">Warning</Badge>
        <Badge variant="outline" theme="destructive">Destructive</Badge>
      </div>
    </div>
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,b,z;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(z=(b=d.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var D,I,C;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Badge theme="success" variant="soft">
        <CheckCircleIcon className="h-3 w-3" />
        Active
      </Badge>
      <Badge theme="destructive" variant="soft">
        <XCircleIcon className="h-3 w-3" />
        Inactive
      </Badge>
      <Badge theme="warning" variant="soft">
        <AlertCircleIcon className="h-3 w-3" />
        Warning
      </Badge>
      <Badge theme="primary" variant="soft">
        <InfoIcon className="h-3 w-3" />
        Info
      </Badge>
    </div>
}`,...(C=(I=c.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var P,E,W;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Badge theme="neutral" variant="soft">
        <Dot className="bg-success" />
        Online
      </Badge>
      <Badge theme="neutral" variant="soft">
        <Dot className="bg-warning" />
        Away
      </Badge>
      <Badge theme="neutral" variant="soft">
        <Dot className="bg-muted" />
        Offline
      </Badge>
      <Badge theme="neutral" variant="outline">
        <Dot className="bg-destructive" />
        Do not disturb
      </Badge>
    </div>
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var F,R,A;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Status Badges (Real Examples)",
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Transaction Status</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge theme="success" variant="soft">Success</Badge>
          <Badge theme="warning" variant="soft">Pending</Badge>
          <Badge theme="primary" variant="soft">Processing</Badge>
          <Badge theme="destructive" variant="soft">Failed</Badge>
          <Badge theme="neutral" variant="soft">Expired</Badge>
          <Badge theme="neutral" variant="soft">Cancelled</Badge>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">User Status</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge theme="success" variant="soft">Active</Badge>
          <Badge theme="warning" variant="soft">Invited</Badge>
          <Badge theme="destructive" variant="soft">Inactive</Badge>
          <Badge theme="neutral" variant="soft">Expired</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Environment</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge theme="success" variant="outline">
            <Dot className="bg-success" />
            Production
          </Badge>
          <Badge theme="warning" variant="outline">
            <Dot className="bg-warning" />
            Staging
          </Badge>
          <Badge theme="primary" variant="outline">
            <Dot className="bg-primary" />
            Development
          </Badge>
        </div>
      </div>
    </div>
}`,...(A=(R=l.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var O,T,U;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Count Badges",
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Badge size="xs" theme="primary" variant="solid">3</Badge>
      <Badge size="sm" theme="destructive" variant="solid">99+</Badge>
      <Badge size="md" theme="neutral" variant="soft">12 new</Badge>
      <Badge size="lg" theme="success" variant="soft">
        <CheckCircleIcon className="h-4 w-4" />
        5 completed
      </Badge>
    </div>
}`,...(U=(T=o.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var V,k,$;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
        Gradient
      </Badge>
      <Badge className="shadow-md" theme="primary" variant="soft">
        With Shadow
      </Badge>
      <Badge className="rounded-full" theme="success" variant="outline">
        Pill Shape
      </Badge>
      <Badge className="font-mono" theme="neutral" variant="soft">
        CODE123
      </Badge>
    </div>
}`,...($=(k=g.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var G,X,_;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Role/Permission Badges",
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Badge theme="primary" variant="soft" size="sm">
        <UserIcon className="h-3 w-3" />
        Admin
      </Badge>
      <Badge theme="success" variant="soft" size="sm">
        <UserIcon className="h-3 w-3" />
        Operator
      </Badge>
      <Badge theme="warning" variant="soft" size="sm">
        <UserIcon className="h-3 w-3" />
        Viewer
      </Badge>
      <Badge theme="neutral" variant="soft" size="sm">
        <UserIcon className="h-3 w-3" />
        Guest
      </Badge>
    </div>
}`,...(_=(X=h.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var M,L,Y;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Inline Usage Example",
  render: () => <div className="space-y-4">
      <p className="text-sm">
        Your account is <Badge theme="success" variant="soft" size="sm">verified</Badge> and has{" "}
        <Badge theme="primary" variant="soft" size="sm">premium</Badge> status.
      </p>
      <p className="text-sm">
        Transaction <code className="text-xs bg-muted px-1 rounded">TXN-123456</code> is{" "}
        <Badge theme="warning" variant="soft" size="sm">
          <ClockIcon className="h-3 w-3" />
          pending approval
        </Badge>
      </p>
    </div>
}`,...(Y=(L=u.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};const ue=["Default","Variants","Themes","Sizes","WithIcons","WithDot","StatusBadges","CountBadges","CustomStyling","RoleBadges","InlineUsage"];export{o as CountBadges,g as CustomStyling,n as Default,u as InlineUsage,h as RoleBadges,d as Sizes,l as StatusBadges,i as Themes,r as Variants,m as WithDot,c as WithIcons,ue as __namedExportsOrder,he as default};
