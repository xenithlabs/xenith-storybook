import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as N,R as O}from"./index-DRjF_FHU.js";import{c as Ne}from"./index-Bb4qSo10.js";import{c as Be}from"./cn-8RyR4BqC.js";import{B as a}from"./Badge-TrTt3KrN.js";import{F as Ae}from"./info-Cre7IJy9.js";import{F as je}from"./check-circle-DNKzEdhW.js";import{F as ye}from"./alert-circle-Fx72cPit.js";import{F as we}from"./clock-DRhx3Wks.js";import"./styles-x1yxmyQd.js";const Ce=({children:s,maxVisible:n,gap:c})=>{const o=N.useRef(null),[I,m]=N.useState(0),[D,u]=N.useState(0),[T,b]=N.useState(!0);return N.useEffect(()=>{const l=()=>{if(!o.current)return;const V=o.current,f=O.Children.toArray(s),g=f.length;if(n&&n<g){m(n),u(g-n),b(!1);return}const k=V.offsetWidth;if(k===0){requestAnimationFrame(l);return}const d=document.createElement("div");d.style.cssText=`
        position: absolute;
        top: -9999px;
        left: -9999px;
        visibility: hidden;
        display: flex;
        align-items: center;
        gap: ${c}px;
        width: max-content;
        flex-wrap: nowrap;
        box-sizing: border-box;
      `;const v=window.getComputedStyle(V);d.style.fontFamily=v.fontFamily,d.style.fontSize=v.fontSize,d.style.fontWeight=v.fontWeight,d.style.lineHeight=v.lineHeight,d.style.letterSpacing=v.letterSpacing,document.body.appendChild(d);const P=[];for(let i=0;i<g;i++){const t=document.createElement("div");t.className="inline-flex items-center gap-2 px-2 py-1 text-xs rounded-md whitespace-nowrap font-medium",t.style.cssText=`
          box-sizing: border-box;
          flex-shrink: 0;
        `,f[i].props.variant==="outline"&&(t.classList.add("border"),t.style.borderWidth="1px");const x=f[i].props.children;typeof x=="string"?t.textContent=x:t.innerHTML=`<span>${x}</span>`,d.appendChild(t),P.push(t)}const fe=d.scrollWidth,K=k-10;if(fe<=K){m(g),u(0),document.body.removeChild(d),b(!1);return}let M=0;for(let i=0;i<P.length;i++){const t=P[i],z=t.offsetLeft+t.offsetWidth,x=g-i-1;if(x===0)break;const h=document.createElement("div");h.className="inline-flex items-center gap-2 px-2 py-1 text-xs rounded-md whitespace-nowrap font-medium border",h.style.cssText=`
          box-sizing: border-box;
          flex-shrink: 0;
          border-width: 1px;
        `,h.textContent=`+${x} more`,d.appendChild(h);const ve=h.offsetWidth;z+c+ve<=K&&(M=i+1),d.removeChild(h)}const W=Math.max(1,M);document.body.removeChild(d),m(W),u(g-W),b(!1)};l();const p=new ResizeObserver(()=>{l()});return o.current&&p.observe(o.current),()=>{p.disconnect()}},[s,n,c]),{containerRef:o,visibleCount:I,overflowCount:D,isCalculating:T}},Se=Ne("flex items-center min-w-0",{variants:{gap:{xs:"gap-1",sm:"gap-2",md:"gap-3",lg:"gap-4"}},defaultVariants:{gap:"sm"}}),r=({children:s,className:n,gap:c="sm",maxVisible:o,overflowBadgeProps:I,onOverflowChange:m,...D})=>{const u={xs:4,sm:8,md:12,lg:16}[c||"sm"],{containerRef:T,visibleCount:b,overflowCount:l,isCalculating:p}=Ce({children:s,maxVisible:o,gap:u});O.useEffect(()=>{m&&!p&&m(l)},[l,p,m]);const f=O.Children.toArray(s).slice(0,b);return e.jsx("div",{ref:T,className:Be(Se({gap:c,className:n})),...D,children:!p&&e.jsxs(e.Fragment,{children:[f,l>0&&e.jsxs(a,{theme:"neutral",variant:"outline",size:"sm",...I,children:["+",l," more"]})]})})};r.__docgenInfo={description:"",methods:[],displayName:"BadgeGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxVisible:{required:!1,tsType:{name:"number"},description:""},overflowBadgeProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Badge>",elements:[{name:"Badge"}]},description:""},onOverflowChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number) => void",signature:{arguments:[{type:{name:"number"},name:"count"}],return:{name:"void"}}},description:""},gap:{defaultValue:{value:'"sm"',computed:!1},required:!1}},composes:["HTMLAttributes","VariantProps"]};const We={title:"Xenith UI/Components/BadgeGroup",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{gap:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Gap between badges",table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:'"sm"'}}},maxVisible:{control:{type:"number"},description:"Maximum number of badges to display",table:{type:{summary:"number"}}},children:{description:"Badge components to display",table:{type:{summary:"ReactNode"}}},overflowBadgeProps:{description:"Props for the overflow indicator badge",table:{type:{summary:"BadgeProps"}}},onOverflowChange:{description:"Callback when overflow count changes",table:{type:{summary:"(count: number) => void"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}}},B={args:{},render:()=>e.jsxs(r,{children:[e.jsx(a,{theme:"success",children:"Active"}),e.jsx(a,{theme:"primary",children:"Premium"}),e.jsx(a,{theme:"warning",children:"Pending"}),e.jsx(a,{theme:"neutral",children:"Draft"}),e.jsx(a,{theme:"destructive",children:"Expired"})]})},A={name:"With Overflow",args:{},render:()=>e.jsx("div",{className:"max-w-md border border-border-default rounded-lg p-4",children:e.jsxs(r,{children:[e.jsx(a,{theme:"primary",children:"JavaScript"}),e.jsx(a,{theme:"primary",children:"TypeScript"}),e.jsx(a,{theme:"primary",children:"React"}),e.jsx(a,{theme:"primary",children:"Node.js"}),e.jsx(a,{theme:"primary",children:"GraphQL"}),e.jsx(a,{theme:"primary",children:"PostgreSQL"}),e.jsx(a,{theme:"primary",children:"Redis"}),e.jsx(a,{theme:"primary",children:"Docker"}),e.jsx(a,{theme:"primary",children:"Kubernetes"}),e.jsx(a,{theme:"primary",children:"AWS"})]})})},j={name:"With Max Visible",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Max 3 badges"}),e.jsxs(r,{maxVisible:3,children:[e.jsx(a,{children:"Tag 1"}),e.jsx(a,{children:"Tag 2"}),e.jsx(a,{children:"Tag 3"}),e.jsx(a,{children:"Tag 4"}),e.jsx(a,{children:"Tag 5"}),e.jsx(a,{children:"Tag 6"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Max 5 badges"}),e.jsxs(r,{maxVisible:5,children:[e.jsx(a,{children:"Tag 1"}),e.jsx(a,{children:"Tag 2"}),e.jsx(a,{children:"Tag 3"}),e.jsx(a,{children:"Tag 4"}),e.jsx(a,{children:"Tag 5"}),e.jsx(a,{children:"Tag 6"}),e.jsx(a,{children:"Tag 7"}),e.jsx(a,{children:"Tag 8"})]})]})]})},y={name:"Different Gap Sizes",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Extra Small Gap"}),e.jsxs(r,{gap:"xs",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small Gap (Default)"}),e.jsxs(r,{gap:"sm",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Medium Gap"}),e.jsxs(r,{gap:"md",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Large Gap"}),e.jsxs(r,{gap:"lg",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]})]})},w={name:"Payment Channel Dialog (Real Usage)",args:{},render:()=>{const s=["VA BANK SYARIAH INDONESIA","VA BANK NEGARA INDONESIA","VA BANK NEO COMMERCE","VA BANK DANAMON","OVO","VA BANK MANDIRI","VA BANK CENTRAL ASIA"];return e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"bg-bg-default border-2 border-border-default rounded-lg shadow-xl max-w-[952px] mx-auto",children:[e.jsx("div",{className:"px-6 py-4 border-b border-border-default",children:e.jsx("h2",{className:"text-xl font-semibold",children:"Edit Payment Channel Settings"})}),e.jsx("div",{className:"px-6 py-4",children:e.jsx("form",{children:e.jsxs("div",{className:"grid grid-cols-[200px_1fr_1fr] gap-4",children:[e.jsx("div",{children:e.jsx("p",{className:"text-sm font-semibold text-text-weak",children:"Channels"})}),e.jsx("div",{className:"col-span-2 min-w-0 w-full",children:e.jsx(r,{className:"min-w-0 w-full",children:s.map(n=>e.jsx(a,{theme:"neutral",size:"sm",variant:"outline",children:n},n))})}),e.jsx("div",{className:"col-span-3 h-px bg-border-default my-2"}),e.jsx("div",{children:e.jsx("p",{className:"text-sm font-semibold text-text-weak",children:"Deposit Expiry"})}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Deposit Expiry ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx("input",{type:"text",placeholder:"HH:MM:SS",className:"w-full px-3 py-2 border border-border-default rounded-md text-sm"})]}),e.jsx("div",{}),e.jsx("div",{className:"col-span-3 h-px bg-border-default my-2"}),e.jsx("div",{children:e.jsx("p",{className:"text-sm font-semibold text-text-weak",children:"Channel Info"})}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Trx Min Amount ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx("input",{type:"text",placeholder:"Enter an Amount",className:"w-full px-3 py-2 border border-border-default rounded-md text-sm"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Trx Max Amount ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx("input",{type:"text",placeholder:"Enter an Amount",className:"w-full px-3 py-2 border border-border-default rounded-md text-sm"})]}),e.jsx("div",{className:"col-span-3 h-px bg-border-default my-2"}),e.jsx("div",{children:e.jsx("p",{className:"text-sm font-semibold text-text-weak",children:"Fee Info"})}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Fee Type ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsxs("select",{className:"w-full px-3 py-2 border border-border-default rounded-md text-sm",children:[e.jsx("option",{children:"No Fees"}),e.jsx("option",{children:"Fixed Amount"}),e.jsx("option",{children:"Percentage"})]})]}),e.jsx("div",{})]})})}),e.jsxs("div",{className:"px-6 py-4 border-t border-border-default flex justify-end gap-3",children:[e.jsx("button",{className:"px-4 py-2 text-sm font-medium border border-border-default rounded-md hover:bg-bg-weak",children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 text-sm font-medium bg-accent text-text-inverse rounded-md hover:opacity-90",children:"Save"})]})]})})}},C={name:"Responsive Grid Layout",args:{},render:()=>{const s=["QRIS","OVO","DANA","VA BANK ARTHA GRAHA","VA MAYBANK INDONESIA","VA BANK NEO COMMERCE","VA BANK NEGARA INDONESIA"];return e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Different Grid Column Widths"}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4 mb-4",children:[e.jsx("p",{className:"text-sm text-text-weak mb-2",children:"grid-cols-[300px_1fr]"}),e.jsxs("div",{className:"grid grid-cols-[300px_1fr] gap-4",children:[e.jsx("div",{className:"text-sm font-semibold",children:"Payment Channels"}),e.jsx(r,{children:s.map(n=>e.jsx(a,{variant:"outline",size:"sm",children:n},n))})]})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4 mb-4",children:[e.jsx("p",{className:"text-sm text-text-weak mb-2",children:"grid-cols-[200px_1fr]"}),e.jsxs("div",{className:"grid grid-cols-[200px_1fr] gap-4",children:[e.jsx("div",{className:"text-sm font-semibold",children:"Payment Channels"}),e.jsx(r,{children:s.map(n=>e.jsx(a,{variant:"outline",size:"sm",children:n},n))})]})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4 mb-4",children:[e.jsx("p",{className:"text-sm text-text-weak mb-2",children:"grid-cols-[150px_1fr]"}),e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-4",children:[e.jsx("div",{className:"text-sm font-semibold",children:"Payment Channels"}),e.jsx(r,{children:s.map(n=>e.jsx(a,{variant:"outline",size:"sm",children:n},n))})]})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("p",{className:"text-sm text-text-weak mb-2",children:"grid-cols-[200px_1fr_1fr] (actual dialog layout)"}),e.jsxs("div",{className:"grid grid-cols-[200px_1fr_1fr] gap-4",children:[e.jsx("div",{className:"text-sm font-semibold",children:"Payment Channels"}),e.jsx(r,{className:"col-span-2",children:s.map(n=>e.jsx(a,{variant:"outline",size:"sm",children:n},n))})]})]})]})})}},S={name:"Varying Channel Names (Real Data)",args:{},render:()=>{const s=["BANK PERMATA","BANK MANDIRI","BANK CENTRAL ASIA","BANK JTRUST INDONESIA","BANK MAYBANK","DANA","OVO","QRIS","BANK ARTHA GRAHA","VA BANK ARTHA GRAHA","VA BANK CENTRAL ASIA","VA BANK DANAMON","VA MAYBANK INDONESIA","VA BANK NEO COMMERCE","VA BANK NEGARA INDONESIA","VA BANK RAKYAT INDONESIA","VA BANK SYARIAH INDONESIA"];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"All Payment Channels"}),e.jsx(r,{children:s.map(n=>e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:n},n))})]}),e.jsxs("div",{className:"max-w-[952px] border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Dialog Width (952px)"}),e.jsxs("div",{className:"grid grid-cols-[200px_1fr_1fr] gap-4",children:[e.jsx("div",{className:"text-sm font-semibold text-text-weak",children:"Channels"}),e.jsx(r,{className:"col-span-2",children:s.slice(0,10).map(n=>e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:n},n))})]})]}),e.jsxs("div",{className:"max-w-[600px] border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Narrow Container (600px)"}),e.jsx(r,{children:s.slice(0,8).map(n=>e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:n},n))})]})]})}},R={name:"Custom Overflow Badge Style",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"max-w-sm border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Primary Outline Overflow"}),e.jsxs(r,{overflowBadgeProps:{theme:"primary",variant:"outline"},children:[e.jsx(a,{theme:"primary",children:"JavaScript"}),e.jsx(a,{theme:"primary",children:"TypeScript"}),e.jsx(a,{theme:"primary",children:"React"}),e.jsx(a,{theme:"primary",children:"Node.js"}),e.jsx(a,{theme:"primary",children:"GraphQL"}),e.jsx(a,{theme:"primary",children:"PostgreSQL"})]})]}),e.jsxs("div",{className:"max-w-sm border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Destructive Solid Overflow"}),e.jsxs(r,{overflowBadgeProps:{theme:"destructive",variant:"solid"},children:[e.jsx(a,{theme:"neutral",children:"Error 1"}),e.jsx(a,{theme:"neutral",children:"Error 2"}),e.jsx(a,{theme:"neutral",children:"Error 3"}),e.jsx(a,{theme:"neutral",children:"Error 4"}),e.jsx(a,{theme:"neutral",children:"Error 5"})]})]})]})},G={name:"Responsive Demo",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-weak",children:"Resize your browser to see badges hide/show"}),e.jsx("div",{className:"border border-border-default rounded-lg p-4",children:e.jsxs(r,{children:[e.jsxs(a,{theme:"success",variant:"soft",children:[e.jsx(je,{className:"h-3 w-3"}),"Completed"]}),e.jsxs(a,{theme:"warning",variant:"soft",children:[e.jsx(we,{className:"h-3 w-3"}),"In Progress"]}),e.jsxs(a,{theme:"primary",variant:"soft",children:[e.jsx(Ae,{className:"h-3 w-3"}),"Information"]}),e.jsxs(a,{theme:"destructive",variant:"soft",children:[e.jsx(ye,{className:"h-3 w-3"}),"Critical"]}),e.jsx(a,{theme:"neutral",variant:"soft",children:"Draft"}),e.jsx(a,{theme:"success",variant:"soft",children:"Published"}),e.jsx(a,{theme:"warning",variant:"soft",children:"Review"})]})})]})},E={name:"With Overflow Callback",args:{},render:()=>{const[s,n]=O.useState(0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"max-w-md border border-border-default rounded-lg p-4",children:e.jsxs(r,{onOverflowChange:n,children:[e.jsx(a,{children:"JavaScript"}),e.jsx(a,{children:"TypeScript"}),e.jsx(a,{children:"React"}),e.jsx(a,{children:"Node.js"}),e.jsx(a,{children:"GraphQL"}),e.jsx(a,{children:"PostgreSQL"}),e.jsx(a,{children:"Redis"}),e.jsx(a,{children:"Docker"})]})}),e.jsxs("p",{className:"text-sm text-text-weak",children:["Hidden badges: ",s]})]})}};var _,L,F;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {} as any,
  render: () => <BadgeGroup>
      <Badge theme="success">Active</Badge>
      <Badge theme="primary">Premium</Badge>
      <Badge theme="warning">Pending</Badge>
      <Badge theme="neutral">Draft</Badge>
      <Badge theme="destructive">Expired</Badge>
    </BadgeGroup>
}`,...(F=(L=B.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var H,Q,Y;A.parameters={...A.parameters,docs:{...(H=A.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Y=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var U,J,q;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(J=j.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var $,X,Z;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,ne;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Payment Channel Dialog (Real Usage)",
  args: {} as any,
  render: () => {
    const paymentChannels = ["VA BANK SYARIAH INDONESIA", "VA BANK NEGARA INDONESIA", "VA BANK NEO COMMERCE", "VA BANK DANAMON", "OVO", "VA BANK MANDIRI", "VA BANK CENTRAL ASIA"];
    return <div className="w-full">
        {/* Simulating Dialog Content */}
        <div className="bg-bg-default border-2 border-border-default rounded-lg shadow-xl max-w-[952px] mx-auto">
          {/* Dialog Header */}
          <div className="px-6 py-4 border-b border-border-default">
            <h2 className="text-xl font-semibold">Edit Payment Channel Settings</h2>
          </div>
          
          {/* Dialog Body */}
          <div className="px-6 py-4">
            <form>
              {/* Grid Layout - Matching the actual implementation */}
              <div className="grid grid-cols-[200px_1fr_1fr] gap-4">
                {/* Channels Section */}
                <div>
                  <p className="text-sm font-semibold text-text-weak">Channels</p>
                </div>
                <div className="col-span-2 min-w-0 w-full">
                  <BadgeGroup className="min-w-0 w-full">
                    {paymentChannels.map(channel => <Badge key={channel} theme="neutral" size="sm" variant="outline">
                        {channel}
                      </Badge>)}
                  </BadgeGroup>
                </div>

                {/* Divider */}
                <div className="col-span-3 h-px bg-border-default my-2" />

                {/* Deposit Expiry Section */}
                <div>
                  <p className="text-sm font-semibold text-text-weak">Deposit Expiry</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Deposit Expiry <span className="text-destructive">*</span>
                  </label>
                  <input type="text" placeholder="HH:MM:SS" className="w-full px-3 py-2 border border-border-default rounded-md text-sm" />
                </div>
                <div />

                {/* Divider */}
                <div className="col-span-3 h-px bg-border-default my-2" />

                {/* Channel Info Section */}
                <div>
                  <p className="text-sm font-semibold text-text-weak">Channel Info</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Trx Min Amount <span className="text-destructive">*</span>
                  </label>
                  <input type="text" placeholder="Enter an Amount" className="w-full px-3 py-2 border border-border-default rounded-md text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Trx Max Amount <span className="text-destructive">*</span>
                  </label>
                  <input type="text" placeholder="Enter an Amount" className="w-full px-3 py-2 border border-border-default rounded-md text-sm" />
                </div>

                {/* Divider */}
                <div className="col-span-3 h-px bg-border-default my-2" />

                {/* Fee Info Section */}
                <div>
                  <p className="text-sm font-semibold text-text-weak">Fee Info</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Fee Type <span className="text-destructive">*</span>
                  </label>
                  <select className="w-full px-3 py-2 border border-border-default rounded-md text-sm">
                    <option>No Fees</option>
                    <option>Fixed Amount</option>
                    <option>Percentage</option>
                  </select>
                </div>
                <div />
              </div>
            </form>
          </div>

          {/* Dialog Footer */}
          <div className="px-6 py-4 border-t border-border-default flex justify-end gap-3">
            <button className="px-4 py-2 text-sm font-medium border border-border-default rounded-md hover:bg-bg-weak">
              Cancel
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-accent text-text-inverse rounded-md hover:opacity-90">
              Save
            </button>
          </div>
        </div>
      </div>;
  }
}`,...(ne=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,se,de;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "Responsive Grid Layout",
  args: {} as any,
  render: () => {
    const channels = ["QRIS", "OVO", "DANA", "VA BANK ARTHA GRAHA", "VA MAYBANK INDONESIA", "VA BANK NEO COMMERCE", "VA BANK NEGARA INDONESIA"];
    return <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Different Grid Column Widths</h3>
          
          {/* Wide first column */}
          <div className="border border-border-default rounded-lg p-4 mb-4">
            <p className="text-sm text-text-weak mb-2">grid-cols-[300px_1fr]</p>
            <div className="grid grid-cols-[300px_1fr] gap-4">
              <div className="text-sm font-semibold">Payment Channels</div>
              <BadgeGroup>
                {channels.map(channel => <Badge key={channel} variant="outline" size="sm">
                    {channel}
                  </Badge>)}
              </BadgeGroup>
            </div>
          </div>

          {/* Medium first column */}
          <div className="border border-border-default rounded-lg p-4 mb-4">
            <p className="text-sm text-text-weak mb-2">grid-cols-[200px_1fr]</p>
            <div className="grid grid-cols-[200px_1fr] gap-4">
              <div className="text-sm font-semibold">Payment Channels</div>
              <BadgeGroup>
                {channels.map(channel => <Badge key={channel} variant="outline" size="sm">
                    {channel}
                  </Badge>)}
              </BadgeGroup>
            </div>
          </div>

          {/* Narrow first column */}
          <div className="border border-border-default rounded-lg p-4 mb-4">
            <p className="text-sm text-text-weak mb-2">grid-cols-[150px_1fr]</p>
            <div className="grid grid-cols-[150px_1fr] gap-4">
              <div className="text-sm font-semibold">Payment Channels</div>
              <BadgeGroup>
                {channels.map(channel => <Badge key={channel} variant="outline" size="sm">
                    {channel}
                  </Badge>)}
              </BadgeGroup>
            </div>
          </div>

          {/* Three column grid like in the actual dialog */}
          <div className="border border-border-default rounded-lg p-4">
            <p className="text-sm text-text-weak mb-2">grid-cols-[200px_1fr_1fr] (actual dialog layout)</p>
            <div className="grid grid-cols-[200px_1fr_1fr] gap-4">
              <div className="text-sm font-semibold">Payment Channels</div>
              <BadgeGroup className="col-span-2">
                {channels.map(channel => <Badge key={channel} variant="outline" size="sm">
                    {channel}
                  </Badge>)}
              </BadgeGroup>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(de=(se=C.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var te,ie,le;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Varying Channel Names (Real Data)",
  args: {} as any,
  render: () => {
    const realChannels = ["BANK PERMATA", "BANK MANDIRI", "BANK CENTRAL ASIA", "BANK JTRUST INDONESIA", "BANK MAYBANK", "DANA", "OVO", "QRIS", "BANK ARTHA GRAHA", "VA BANK ARTHA GRAHA", "VA BANK CENTRAL ASIA", "VA BANK DANAMON", "VA MAYBANK INDONESIA", "VA BANK NEO COMMERCE", "VA BANK NEGARA INDONESIA", "VA BANK RAKYAT INDONESIA", "VA BANK SYARIAH INDONESIA"];
    return <div className="space-y-6">
        {/* Full width container */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-semibold mb-3">All Payment Channels</h3>
          <BadgeGroup>
            {realChannels.map(channel => <Badge key={channel} variant="outline" theme="neutral" size="sm">
                {channel}
              </Badge>)}
          </BadgeGroup>
        </div>

        {/* Constrained width - simulating dialog */}
        <div className="max-w-[952px] border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-semibold mb-3">Dialog Width (952px)</h3>
          <div className="grid grid-cols-[200px_1fr_1fr] gap-4">
            <div className="text-sm font-semibold text-text-weak">Channels</div>
            <BadgeGroup className="col-span-2">
              {realChannels.slice(0, 10).map(channel => <Badge key={channel} variant="outline" theme="neutral" size="sm">
                  {channel}
                </Badge>)}
            </BadgeGroup>
          </div>
        </div>

        {/* Narrower container */}
        <div className="max-w-[600px] border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-semibold mb-3">Narrow Container (600px)</h3>
          <BadgeGroup>
            {realChannels.slice(0, 8).map(channel => <Badge key={channel} variant="outline" theme="neutral" size="sm">
                {channel}
              </Badge>)}
          </BadgeGroup>
        </div>
      </div>;
  }
}`,...(le=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,me,ce;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(me=R.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,ge,xe;G.parameters={...G.parameters,docs:{...(pe=G.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(xe=(ge=G.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var he,ue,be;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(be=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};const ze=["Default","WithOverflow","MaxVisible","DifferentGaps","PaymentChannelDialog","ResponsiveGridLayout","VaryingChannelNames","CustomOverflowBadge","ResponsiveDemo","WithCallback"];export{R as CustomOverflowBadge,B as Default,y as DifferentGaps,j as MaxVisible,w as PaymentChannelDialog,G as ResponsiveDemo,C as ResponsiveGridLayout,S as VaryingChannelNames,E as WithCallback,A as WithOverflow,ze as __namedExportsOrder,We as default};
