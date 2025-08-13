import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as p,R as A}from"./index-DRjF_FHU.js";import{c as be}from"./index-Bb4qSo10.js";import{c as je}from"./cn-8RyR4BqC.js";import{B as a}from"./Badge-C8WRcReV.js";import{F as ye}from"./check-circle-DNKzEdhW.js";import{F as we}from"./clock-DRhx3Wks.js";import{F as Ne}from"./info-Cre7IJy9.js";import{F as Se}from"./alert-circle-Fx72cPit.js";import{F as Ge}from"./user-COLMXspT.js";import{D as h}from"./Dot-Cmfsd4lu.js";import"./styles-x1yxmyQd.js";const Ce=({children:n,maxVisible:s,gap:d})=>{const i=p.useRef(null),[O,l]=p.useState(0),[k,x]=p.useState(0),[V,B]=p.useState(!0);return p.useEffect(()=>{const t=()=>{if(!i.current)return;const W=i.current,v=A.Children.toArray(n),o=v.length;if(s&&s<o){l(s),x(o-s),B(!1);return}const E=W.offsetWidth;if(E===0){requestAnimationFrame(t);return}const m=document.createElement("div");m.style.position="absolute",m.style.visibility="hidden",m.style.display="flex",m.style.gap=`${d}px`,document.body.appendChild(m);let F=0,f=0;const fe=80;for(let g=0;g<o;g++){const u=document.createElement("div");u.className="inline-flex items-center gap-2 px-2 py-1 text-xs rounded-md",u.innerHTML=`<span>${v[g].props.children}</span>`,m.appendChild(u);const L=u.offsetWidth,b=F>0?F+d+L:L;if(g===o-1&&b<=E){f=o;break}if((o-g-1>0?b+d+fe:b)<=E)f=g+1,F=b;else break;u.remove()}document.body.removeChild(m),l(f),x(Math.max(0,o-f)),B(!1)};t();const c=new ResizeObserver(()=>{t()});return i.current&&c.observe(i.current),()=>{c.disconnect()}},[n,s,d]),{containerRef:i,visibleCount:O,overflowCount:k,isCalculating:V}},Re=be("flex items-center flex-wrap",{variants:{gap:{xs:"gap-1",sm:"gap-2",md:"gap-3",lg:"gap-4"}},defaultVariants:{gap:"sm"}}),r=({children:n,className:s,gap:d="sm",maxVisible:i,overflowBadgeProps:O,onOverflowChange:l,...k})=>{const x={xs:4,sm:8,md:12,lg:16}[d||"sm"],{containerRef:V,visibleCount:B,overflowCount:t,isCalculating:c}=Ce({children:n,maxVisible:i,gap:x});A.useEffect(()=>{l&&!c&&l(t)},[t,c,l]);const v=A.Children.toArray(n).slice(0,B);return e.jsx("div",{ref:V,className:je(Re({gap:d,className:s})),...k,children:!c&&e.jsxs(e.Fragment,{children:[v,t>0&&e.jsxs(a,{theme:"neutral",variant:"soft",size:"sm",...O,children:["+",t," more"]})]})})};r.__docgenInfo={description:"",methods:[],displayName:"BadgeGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxVisible:{required:!1,tsType:{name:"number"},description:""},overflowBadgeProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Badge>",elements:[{name:"Badge"}]},description:""},onOverflowChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number) => void",signature:{arguments:[{type:{name:"number"},name:"count"}],return:{name:"void"}}},description:""},gap:{defaultValue:{value:'"sm"',computed:!1},required:!1}},composes:["HTMLAttributes","VariantProps"]};const Ue={title:"Xenith UI/Components/BadgeGroup",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The BadgeGroup component is a container for multiple Badge components that intelligently handles overflow. When badges exceed the available space, it displays a "+X more" indicator.

### Key Features
- **Automatic Overflow Detection**: Calculates which badges fit within the container width
- **Responsive**: Adjusts visible badges as container resizes
- **Max Visible Option**: Set a maximum number of badges to display
- **Customizable Gap**: Control spacing between badges
- **Overflow Indicator**: Shows count of hidden badges
- **Performance Optimized**: Uses ResizeObserver for efficient updates

### Usage
\`\`\`tsx
import { Badge, BadgeGroup } from "@xenithlabs/xenith-ui";

// Basic usage
<BadgeGroup>
  <Badge theme="success">Active</Badge>
  <Badge theme="primary">Premium</Badge>
  <Badge theme="warning">Pending</Badge>
</BadgeGroup>

// With max visible
<BadgeGroup maxVisible={3}>
  <Badge>Tag 1</Badge>
  <Badge>Tag 2</Badge>
  <Badge>Tag 3</Badge>
  <Badge>Tag 4</Badge> // Will show as "+1 more"
</BadgeGroup>

// Custom overflow badge
<BadgeGroup overflowBadgeProps={{ theme: "primary", variant: "outline" }}>
  {badges}
</BadgeGroup>
\`\`\`

### Component Props

- **children** (ReactNode): Badge components to display
- **maxVisible** (number): Maximum number of badges to show
- **gap** ("xs" | "sm" | "md" | "lg"): Space between badges. Default: "sm"
- **overflowBadgeProps** (BadgeProps): Props for the overflow indicator badge
- **onOverflowChange** ((count: number) => void): Callback when overflow count changes
- **className** (string): Additional CSS classes
        `}}},argTypes:{gap:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Gap between badges",table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:'"sm"'}}},maxVisible:{control:{type:"number"},description:"Maximum number of badges to display",table:{type:{summary:"number"}}},children:{description:"Badge components to display",table:{type:{summary:"ReactNode"}}},overflowBadgeProps:{description:"Props for the overflow indicator badge",table:{type:{summary:"BadgeProps"}}},onOverflowChange:{description:"Callback when overflow count changes",table:{type:{summary:"(count: number) => void"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}}},j={args:{},render:()=>e.jsxs(r,{children:[e.jsx(a,{theme:"success",children:"Active"}),e.jsx(a,{theme:"primary",children:"Premium"}),e.jsx(a,{theme:"warning",children:"Pending"}),e.jsx(a,{theme:"neutral",children:"Draft"}),e.jsx(a,{theme:"destructive",children:"Expired"})]})},y={name:"With Overflow",args:{},render:()=>e.jsx("div",{className:"max-w-md border border-border-default rounded-lg p-4",children:e.jsxs(r,{children:[e.jsx(a,{theme:"primary",children:"JavaScript"}),e.jsx(a,{theme:"primary",children:"TypeScript"}),e.jsx(a,{theme:"primary",children:"React"}),e.jsx(a,{theme:"primary",children:"Node.js"}),e.jsx(a,{theme:"primary",children:"GraphQL"}),e.jsx(a,{theme:"primary",children:"PostgreSQL"}),e.jsx(a,{theme:"primary",children:"Redis"}),e.jsx(a,{theme:"primary",children:"Docker"}),e.jsx(a,{theme:"primary",children:"Kubernetes"}),e.jsx(a,{theme:"primary",children:"AWS"})]})})},w={name:"With Max Visible",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Max 3 badges"}),e.jsxs(r,{maxVisible:3,children:[e.jsx(a,{children:"Tag 1"}),e.jsx(a,{children:"Tag 2"}),e.jsx(a,{children:"Tag 3"}),e.jsx(a,{children:"Tag 4"}),e.jsx(a,{children:"Tag 5"}),e.jsx(a,{children:"Tag 6"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Max 5 badges"}),e.jsxs(r,{maxVisible:5,children:[e.jsx(a,{children:"Tag 1"}),e.jsx(a,{children:"Tag 2"}),e.jsx(a,{children:"Tag 3"}),e.jsx(a,{children:"Tag 4"}),e.jsx(a,{children:"Tag 5"}),e.jsx(a,{children:"Tag 6"}),e.jsx(a,{children:"Tag 7"}),e.jsx(a,{children:"Tag 8"})]})]})]})},N={name:"Different Gap Sizes",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Extra Small Gap"}),e.jsxs(r,{gap:"xs",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small Gap (Default)"}),e.jsxs(r,{gap:"sm",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Medium Gap"}),e.jsxs(r,{gap:"md",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Large Gap"}),e.jsxs(r,{gap:"lg",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]})]})},S={name:"Custom Overflow Badge Style",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"max-w-sm border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Primary Outline Overflow"}),e.jsxs(r,{overflowBadgeProps:{theme:"primary",variant:"outline"},children:[e.jsx(a,{theme:"primary",children:"JavaScript"}),e.jsx(a,{theme:"primary",children:"TypeScript"}),e.jsx(a,{theme:"primary",children:"React"}),e.jsx(a,{theme:"primary",children:"Node.js"}),e.jsx(a,{theme:"primary",children:"GraphQL"}),e.jsx(a,{theme:"primary",children:"PostgreSQL"})]})]}),e.jsxs("div",{className:"max-w-sm border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Destructive Solid Overflow"}),e.jsxs(r,{overflowBadgeProps:{theme:"destructive",variant:"solid"},children:[e.jsx(a,{theme:"neutral",children:"Error 1"}),e.jsx(a,{theme:"neutral",children:"Error 2"}),e.jsx(a,{theme:"neutral",children:"Error 3"}),e.jsx(a,{theme:"neutral",children:"Error 4"}),e.jsx(a,{theme:"neutral",children:"Error 5"})]})]})]})},G={name:"Responsive Demo",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-weak",children:"Resize your browser to see badges hide/show"}),e.jsx("div",{className:"border border-border-default rounded-lg p-4",children:e.jsxs(r,{children:[e.jsxs(a,{theme:"success",variant:"soft",children:[e.jsx(ye,{className:"h-3 w-3"}),"Completed"]}),e.jsxs(a,{theme:"warning",variant:"soft",children:[e.jsx(we,{className:"h-3 w-3"}),"In Progress"]}),e.jsxs(a,{theme:"primary",variant:"soft",children:[e.jsx(Ne,{className:"h-3 w-3"}),"Information"]}),e.jsxs(a,{theme:"destructive",variant:"soft",children:[e.jsx(Se,{className:"h-3 w-3"}),"Critical"]}),e.jsx(a,{theme:"neutral",variant:"soft",children:"Draft"}),e.jsx(a,{theme:"success",variant:"soft",children:"Published"}),e.jsx(a,{theme:"warning",variant:"soft",children:"Review"})]})})]})},C={name:"User Skills Example",args:{},render:()=>e.jsxs("div",{className:"max-w-lg border border-border-default rounded-lg p-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-bg-weak flex items-center justify-center",children:e.jsx(Ge,{className:"h-6 w-6 text-text-weak"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium",children:"John Doe"}),e.jsx("p",{className:"text-sm text-text-weak",children:"Full Stack Developer"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"Skills"}),e.jsxs(r,{maxVisible:5,children:[e.jsx(a,{theme:"primary",variant:"soft",children:"JavaScript"}),e.jsx(a,{theme:"primary",variant:"soft",children:"TypeScript"}),e.jsx(a,{theme:"primary",variant:"soft",children:"React"}),e.jsx(a,{theme:"primary",variant:"soft",children:"Node.js"}),e.jsx(a,{theme:"primary",variant:"soft",children:"GraphQL"}),e.jsx(a,{theme:"primary",variant:"soft",children:"PostgreSQL"}),e.jsx(a,{theme:"primary",variant:"soft",children:"MongoDB"}),e.jsx(a,{theme:"primary",variant:"soft",children:"Redis"}),e.jsx(a,{theme:"primary",variant:"soft",children:"Docker"}),e.jsx(a,{theme:"primary",variant:"soft",children:"AWS"})]})]})]})},R={name:"Filter Tags Example",args:{},render:()=>e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Active Filters"}),e.jsx("button",{className:"text-xs text-text-accent hover:underline",children:"Clear all"})]}),e.jsxs(r,{children:[e.jsx(a,{theme:"neutral",variant:"outline",children:"Status: Active"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"Type: Premium"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"Date: Last 30 days"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"Region: US-East"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"Priority: High"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"Category: Technology"})]})]})},T={name:"Status Indicators",args:{},render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"System Status"}),e.jsxs(r,{children:[e.jsxs(a,{theme:"success",variant:"soft",children:[e.jsx(h,{className:"bg-success"}),"API: Operational"]}),e.jsxs(a,{theme:"success",variant:"soft",children:[e.jsx(h,{className:"bg-success"}),"Database: Healthy"]}),e.jsxs(a,{theme:"warning",variant:"soft",children:[e.jsx(h,{className:"bg-warning"}),"Cache: Degraded"]}),e.jsxs(a,{theme:"success",variant:"soft",children:[e.jsx(h,{className:"bg-success"}),"CDN: Active"]}),e.jsxs(a,{theme:"destructive",variant:"soft",children:[e.jsx(h,{className:"bg-destructive"}),"Search: Down"]}),e.jsxs(a,{theme:"success",variant:"soft",children:[e.jsx(h,{className:"bg-success"}),"Auth: Running"]})]})]})})},D={name:"Mixed Badge Variants",args:{},render:()=>e.jsxs("div",{className:"max-w-lg border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Product Features"}),e.jsxs(r,{children:[e.jsx(a,{theme:"success",variant:"solid",children:"New"}),e.jsx(a,{theme:"primary",variant:"soft",children:"Popular"}),e.jsx(a,{theme:"warning",variant:"outline",children:"Beta"}),e.jsx(a,{theme:"neutral",variant:"soft",children:"Free"}),e.jsx(a,{theme:"primary",variant:"solid",children:"Pro"}),e.jsx(a,{theme:"destructive",variant:"outline",children:"Deprecated"}),e.jsx(a,{theme:"success",variant:"soft",children:"Updated"})]})]})},P={name:"With Overflow Callback",args:{},render:()=>{const[n,s]=A.useState(0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"max-w-md border border-border-default rounded-lg p-4",children:e.jsxs(r,{onOverflowChange:s,children:[e.jsx(a,{children:"JavaScript"}),e.jsx(a,{children:"TypeScript"}),e.jsx(a,{children:"React"}),e.jsx(a,{children:"Node.js"}),e.jsx(a,{children:"GraphQL"}),e.jsx(a,{children:"PostgreSQL"}),e.jsx(a,{children:"Redis"}),e.jsx(a,{children:"Docker"})]})}),e.jsxs("p",{className:"text-sm text-text-weak",children:["Hidden badges: ",n]})]})}};var M,I,Q;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {} as any,
  render: () => <BadgeGroup>
      <Badge theme="success">Active</Badge>
      <Badge theme="primary">Premium</Badge>
      <Badge theme="warning">Pending</Badge>
      <Badge theme="neutral">Draft</Badge>
      <Badge theme="destructive">Expired</Badge>
    </BadgeGroup>
}`,...(Q=(I=j.parameters)==null?void 0:I.docs)==null?void 0:Q.source}}};var U,z,J;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "With Overflow",
  args: {} as any,
  render: () => <div className="max-w-md border border-border-default rounded-lg p-4">
      <BadgeGroup>
        <Badge theme="primary">JavaScript</Badge>
        <Badge theme="primary">TypeScript</Badge>
        <Badge theme="primary">React</Badge>
        <Badge theme="primary">Node.js</Badge>
        <Badge theme="primary">GraphQL</Badge>
        <Badge theme="primary">PostgreSQL</Badge>
        <Badge theme="primary">Redis</Badge>
        <Badge theme="primary">Docker</Badge>
        <Badge theme="primary">Kubernetes</Badge>
        <Badge theme="primary">AWS</Badge>
      </BadgeGroup>
    </div>
}`,...(J=(z=y.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var H,q,$;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "With Max Visible",
  args: {} as any,
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Max 3 badges</h3>
        <BadgeGroup maxVisible={3}>
          <Badge>Tag 1</Badge>
          <Badge>Tag 2</Badge>
          <Badge>Tag 3</Badge>
          <Badge>Tag 4</Badge>
          <Badge>Tag 5</Badge>
          <Badge>Tag 6</Badge>
        </BadgeGroup>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Max 5 badges</h3>
        <BadgeGroup maxVisible={5}>
          <Badge>Tag 1</Badge>
          <Badge>Tag 2</Badge>
          <Badge>Tag 3</Badge>
          <Badge>Tag 4</Badge>
          <Badge>Tag 5</Badge>
          <Badge>Tag 6</Badge>
          <Badge>Tag 7</Badge>
          <Badge>Tag 8</Badge>
        </BadgeGroup>
      </div>
    </div>
}`,...($=(q=w.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var _,K,X;N.parameters={...N.parameters,docs:{...(_=N.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Different Gap Sizes",
  args: {} as any,
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Extra Small Gap</h3>
        <BadgeGroup gap="xs">
          <Badge>React</Badge>
          <Badge>Vue</Badge>
          <Badge>Angular</Badge>
          <Badge>Svelte</Badge>
        </BadgeGroup>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Small Gap (Default)</h3>
        <BadgeGroup gap="sm">
          <Badge>React</Badge>
          <Badge>Vue</Badge>
          <Badge>Angular</Badge>
          <Badge>Svelte</Badge>
        </BadgeGroup>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Medium Gap</h3>
        <BadgeGroup gap="md">
          <Badge>React</Badge>
          <Badge>Vue</Badge>
          <Badge>Angular</Badge>
          <Badge>Svelte</Badge>
        </BadgeGroup>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Large Gap</h3>
        <BadgeGroup gap="lg">
          <Badge>React</Badge>
          <Badge>Vue</Badge>
          <Badge>Angular</Badge>
          <Badge>Svelte</Badge>
        </BadgeGroup>
      </div>
    </div>
}`,...(X=(K=N.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Custom Overflow Badge Style",
  args: {} as any,
  render: () => <div className="space-y-4">
      <div className="max-w-sm border border-border-default rounded-lg p-4">
        <h3 className="text-sm font-medium mb-2">Primary Outline Overflow</h3>
        <BadgeGroup overflowBadgeProps={{
        theme: "primary",
        variant: "outline"
      }}>
          <Badge theme="primary">JavaScript</Badge>
          <Badge theme="primary">TypeScript</Badge>
          <Badge theme="primary">React</Badge>
          <Badge theme="primary">Node.js</Badge>
          <Badge theme="primary">GraphQL</Badge>
          <Badge theme="primary">PostgreSQL</Badge>
        </BadgeGroup>
      </div>
      <div className="max-w-sm border border-border-default rounded-lg p-4">
        <h3 className="text-sm font-medium mb-2">Destructive Solid Overflow</h3>
        <BadgeGroup overflowBadgeProps={{
        theme: "destructive",
        variant: "solid"
      }}>
          <Badge theme="neutral">Error 1</Badge>
          <Badge theme="neutral">Error 2</Badge>
          <Badge theme="neutral">Error 3</Badge>
          <Badge theme="neutral">Error 4</Badge>
          <Badge theme="neutral">Error 5</Badge>
        </BadgeGroup>
      </div>
    </div>
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,se;G.parameters={...G.parameters,docs:{...(ae=G.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "Responsive Demo",
  args: {} as any,
  render: () => <div className="space-y-4">
      <p className="text-sm text-text-weak">Resize your browser to see badges hide/show</p>
      <div className="border border-border-default rounded-lg p-4">
        <BadgeGroup>
          <Badge theme="success" variant="soft">
            <CheckCircleIcon className="h-3 w-3" />
            Completed
          </Badge>
          <Badge theme="warning" variant="soft">
            <ClockIcon className="h-3 w-3" />
            In Progress
          </Badge>
          <Badge theme="primary" variant="soft">
            <InfoIcon className="h-3 w-3" />
            Information
          </Badge>
          <Badge theme="destructive" variant="soft">
            <AlertCircleIcon className="h-3 w-3" />
            Critical
          </Badge>
          <Badge theme="neutral" variant="soft">Draft</Badge>
          <Badge theme="success" variant="soft">Published</Badge>
          <Badge theme="warning" variant="soft">Review</Badge>
        </BadgeGroup>
      </div>
    </div>
}`,...(se=(re=G.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ne,de;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "User Skills Example",
  args: {} as any,
  render: () => <div className="max-w-lg border border-border-default rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-bg-weak flex items-center justify-center">
          <UserIcon className="h-6 w-6 text-text-weak" />
        </div>
        <div>
          <h3 className="font-medium">John Doe</h3>
          <p className="text-sm text-text-weak">Full Stack Developer</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Skills</p>
        <BadgeGroup maxVisible={5}>
          <Badge theme="primary" variant="soft">JavaScript</Badge>
          <Badge theme="primary" variant="soft">TypeScript</Badge>
          <Badge theme="primary" variant="soft">React</Badge>
          <Badge theme="primary" variant="soft">Node.js</Badge>
          <Badge theme="primary" variant="soft">GraphQL</Badge>
          <Badge theme="primary" variant="soft">PostgreSQL</Badge>
          <Badge theme="primary" variant="soft">MongoDB</Badge>
          <Badge theme="primary" variant="soft">Redis</Badge>
          <Badge theme="primary" variant="soft">Docker</Badge>
          <Badge theme="primary" variant="soft">AWS</Badge>
        </BadgeGroup>
      </div>
    </div>
}`,...(de=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var ie,oe,me;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "Filter Tags Example",
  args: {} as any,
  render: () => <div className="border border-border-default rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium">Active Filters</h3>
        <button className="text-xs text-text-accent hover:underline">Clear all</button>
      </div>
      <BadgeGroup>
        <Badge theme="neutral" variant="outline">
          Status: Active
        </Badge>
        <Badge theme="neutral" variant="outline">
          Type: Premium
        </Badge>
        <Badge theme="neutral" variant="outline">
          Date: Last 30 days
        </Badge>
        <Badge theme="neutral" variant="outline">
          Region: US-East
        </Badge>
        <Badge theme="neutral" variant="outline">
          Priority: High
        </Badge>
        <Badge theme="neutral" variant="outline">
          Category: Technology
        </Badge>
      </BadgeGroup>
    </div>
}`,...(me=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:me.source}}};var le,ce,ge;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "Status Indicators",
  args: {} as any,
  render: () => <div className="space-y-4">
      <div className="border border-border-default rounded-lg p-4">
        <h3 className="text-sm font-medium mb-3">System Status</h3>
        <BadgeGroup>
          <Badge theme="success" variant="soft">
            <Dot className="bg-success" />
            API: Operational
          </Badge>
          <Badge theme="success" variant="soft">
            <Dot className="bg-success" />
            Database: Healthy
          </Badge>
          <Badge theme="warning" variant="soft">
            <Dot className="bg-warning" />
            Cache: Degraded
          </Badge>
          <Badge theme="success" variant="soft">
            <Dot className="bg-success" />
            CDN: Active
          </Badge>
          <Badge theme="destructive" variant="soft">
            <Dot className="bg-destructive" />
            Search: Down
          </Badge>
          <Badge theme="success" variant="soft">
            <Dot className="bg-success" />
            Auth: Running
          </Badge>
        </BadgeGroup>
      </div>
    </div>
}`,...(ge=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var he,ue,pe;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: "Mixed Badge Variants",
  args: {} as any,
  render: () => <div className="max-w-lg border border-border-default rounded-lg p-4">
      <h3 className="text-sm font-medium mb-3">Product Features</h3>
      <BadgeGroup>
        <Badge theme="success" variant="solid">New</Badge>
        <Badge theme="primary" variant="soft">Popular</Badge>
        <Badge theme="warning" variant="outline">Beta</Badge>
        <Badge theme="neutral" variant="soft">Free</Badge>
        <Badge theme="primary" variant="solid">Pro</Badge>
        <Badge theme="destructive" variant="outline">Deprecated</Badge>
        <Badge theme="success" variant="soft">Updated</Badge>
      </BadgeGroup>
    </div>
}`,...(pe=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var xe,Be,ve;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: "With Overflow Callback",
  args: {} as any,
  render: () => {
    const [overflowCount, setOverflowCount] = React.useState(0);
    return <div className="space-y-4">
        <div className="max-w-md border border-border-default rounded-lg p-4">
          <BadgeGroup onOverflowChange={setOverflowCount}>
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>GraphQL</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>Redis</Badge>
            <Badge>Docker</Badge>
          </BadgeGroup>
        </div>
        <p className="text-sm text-text-weak">
          Hidden badges: {overflowCount}
        </p>
      </div>;
  }
}`,...(ve=(Be=P.parameters)==null?void 0:Be.docs)==null?void 0:ve.source}}};const ze=["Default","WithOverflow","MaxVisible","DifferentGaps","CustomOverflowBadge","ResponsiveDemo","UserSkills","FilterTags","StatusIndicators","MixedVariants","WithCallback"];export{S as CustomOverflowBadge,j as Default,N as DifferentGaps,R as FilterTags,w as MaxVisible,D as MixedVariants,G as ResponsiveDemo,T as StatusIndicators,C as UserSkills,P as WithCallback,y as WithOverflow,ze as __namedExportsOrder,Ue as default};
