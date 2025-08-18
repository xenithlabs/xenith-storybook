import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as B,R as L}from"./index-DRjF_FHU.js";import{c as _e}from"./index-Bb4qSo10.js";import{c as ze}from"./cn-8RyR4BqC.js";import{B as a}from"./Badge-TrTt3KrN.js";import{F as $e}from"./check-circle-DNKzEdhW.js";import{F as qe}from"./clock-DRhx3Wks.js";import{F as Xe}from"./info-Cre7IJy9.js";import{F as Ze}from"./alert-circle-Fx72cPit.js";import{F as ea}from"./user-COLMXspT.js";import{D as h}from"./Dot-Cmfsd4lu.js";import"./styles-x1yxmyQd.js";const aa=({children:t,maxVisible:s,gap:d})=>{const i=B.useRef(null),[x,n]=B.useState(0),[H,A]=B.useState(0),[W,v]=B.useState(!0);return B.useEffect(()=>{const l=()=>{if(!i.current)return;const Y=i.current,p=L.Children.toArray(t),m=p.length;if(s&&s<m){n(s),A(m-s),v(!1);return}const Q=Y.offsetWidth;if(Q===0){requestAnimationFrame(l);return}const o=document.createElement("div");o.style.position="absolute",o.style.visibility="hidden",o.style.display="flex",o.style.gap=`${d}px`,document.body.appendChild(o);let F=0,b=0;const U=Q-2;for(let c=0;c<m;c++){const u=document.createElement("div");u.className="inline-flex items-center gap-2 px-2 py-1 text-xs rounded-md whitespace-nowrap font-medium",p[c].props.variant==="outline"&&(u.className+=" border"),u.innerHTML=`<span>${p[c].props.children}</span>`,o.appendChild(u);const J=u.offsetWidth,f=F>0?F+d+J:J;if(c===m-1&&f<=U){b=m,u.remove();break}const _=m-c-1,Ue=`+${_} more`,N=document.createElement("div");N.className="inline-flex items-center gap-2 px-2 py-1 text-xs rounded-md whitespace-nowrap font-medium",N.innerHTML=`<span>${Ue}</span>`,o.appendChild(N);const Je=N.offsetWidth;if(N.remove(),(_>0?f+d+Je:f)<=U)b=c+1,F=f;else break;u.remove()}document.body.removeChild(o),n(b),A(Math.max(0,m-b)),v(!1)};l();const g=new ResizeObserver(()=>{l()});return i.current&&g.observe(i.current),()=>{g.disconnect()}},[t,s,d]),{containerRef:i,visibleCount:x,overflowCount:H,isCalculating:W}},ra=_e("flex items-center",{variants:{gap:{xs:"gap-1",sm:"gap-2",md:"gap-3",lg:"gap-4"}},defaultVariants:{gap:"sm"}}),r=({children:t,className:s,gap:d="sm",maxVisible:i,overflowBadgeProps:x,onOverflowChange:n,...H})=>{const A={xs:4,sm:8,md:12,lg:16}[d||"sm"],{containerRef:W,visibleCount:v,overflowCount:l,isCalculating:g}=aa({children:t,maxVisible:i,gap:A});L.useEffect(()=>{n&&!g&&n(l)},[l,g,n]);const p=L.Children.toArray(t).slice(0,v);return e.jsx("div",{ref:W,className:ze(ra({gap:d,className:s})),...H,children:!g&&e.jsxs(e.Fragment,{children:[p,l>0&&e.jsxs(a,{theme:"neutral",variant:"soft",size:"sm",...x,children:["+",l," more"]})]})})};r.__docgenInfo={description:"",methods:[],displayName:"BadgeGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxVisible:{required:!1,tsType:{name:"number"},description:""},overflowBadgeProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Badge>",elements:[{name:"Badge"}]},description:""},onOverflowChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number) => void",signature:{arguments:[{type:{name:"number"},name:"count"}],return:{name:"void"}}},description:""},gap:{defaultValue:{value:'"sm"',computed:!1},required:!1}},composes:["HTMLAttributes","VariantProps"]};const Ba={title:"Xenith UI/Components/BadgeGroup",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{gap:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Gap between badges",table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:'"sm"'}}},maxVisible:{control:{type:"number"},description:"Maximum number of badges to display",table:{type:{summary:"number"}}},children:{description:"Badge components to display",table:{type:{summary:"ReactNode"}}},overflowBadgeProps:{description:"Props for the overflow indicator badge",table:{type:{summary:"BadgeProps"}}},onOverflowChange:{description:"Callback when overflow count changes",table:{type:{summary:"(count: number) => void"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}}},j={args:{},render:()=>e.jsxs(r,{children:[e.jsx(a,{theme:"success",children:"Active"}),e.jsx(a,{theme:"primary",children:"Premium"}),e.jsx(a,{theme:"warning",children:"Pending"}),e.jsx(a,{theme:"neutral",children:"Draft"}),e.jsx(a,{theme:"destructive",children:"Expired"})]})},y={name:"With Overflow",args:{},render:()=>e.jsx("div",{className:"max-w-md border border-border-default rounded-lg p-4",children:e.jsxs(r,{children:[e.jsx(a,{theme:"primary",children:"JavaScript"}),e.jsx(a,{theme:"primary",children:"TypeScript"}),e.jsx(a,{theme:"primary",children:"React"}),e.jsx(a,{theme:"primary",children:"Node.js"}),e.jsx(a,{theme:"primary",children:"GraphQL"}),e.jsx(a,{theme:"primary",children:"PostgreSQL"}),e.jsx(a,{theme:"primary",children:"Redis"}),e.jsx(a,{theme:"primary",children:"Docker"}),e.jsx(a,{theme:"primary",children:"Kubernetes"}),e.jsx(a,{theme:"primary",children:"AWS"})]})})},w={name:"With Max Visible",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Max 3 badges"}),e.jsxs(r,{maxVisible:3,children:[e.jsx(a,{children:"Tag 1"}),e.jsx(a,{children:"Tag 2"}),e.jsx(a,{children:"Tag 3"}),e.jsx(a,{children:"Tag 4"}),e.jsx(a,{children:"Tag 5"}),e.jsx(a,{children:"Tag 6"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Max 5 badges"}),e.jsxs(r,{maxVisible:5,children:[e.jsx(a,{children:"Tag 1"}),e.jsx(a,{children:"Tag 2"}),e.jsx(a,{children:"Tag 3"}),e.jsx(a,{children:"Tag 4"}),e.jsx(a,{children:"Tag 5"}),e.jsx(a,{children:"Tag 6"}),e.jsx(a,{children:"Tag 7"}),e.jsx(a,{children:"Tag 8"})]})]})]})},S={name:"Different Gap Sizes",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Extra Small Gap"}),e.jsxs(r,{gap:"xs",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small Gap (Default)"}),e.jsxs(r,{gap:"sm",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Medium Gap"}),e.jsxs(r,{gap:"md",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Large Gap"}),e.jsxs(r,{gap:"lg",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]})]})},I={name:"Custom Overflow Badge Style",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"max-w-sm border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Primary Outline Overflow"}),e.jsxs(r,{overflowBadgeProps:{theme:"primary",variant:"outline"},children:[e.jsx(a,{theme:"primary",children:"JavaScript"}),e.jsx(a,{theme:"primary",children:"TypeScript"}),e.jsx(a,{theme:"primary",children:"React"}),e.jsx(a,{theme:"primary",children:"Node.js"}),e.jsx(a,{theme:"primary",children:"GraphQL"}),e.jsx(a,{theme:"primary",children:"PostgreSQL"})]})]}),e.jsxs("div",{className:"max-w-sm border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Destructive Solid Overflow"}),e.jsxs(r,{overflowBadgeProps:{theme:"destructive",variant:"solid"},children:[e.jsx(a,{theme:"neutral",children:"Error 1"}),e.jsx(a,{theme:"neutral",children:"Error 2"}),e.jsx(a,{theme:"neutral",children:"Error 3"}),e.jsx(a,{theme:"neutral",children:"Error 4"}),e.jsx(a,{theme:"neutral",children:"Error 5"})]})]})]})},E={name:"Responsive Demo",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-weak",children:"Resize your browser to see badges hide/show"}),e.jsx("div",{className:"border border-border-default rounded-lg p-4",children:e.jsxs(r,{children:[e.jsxs(a,{theme:"success",variant:"soft",children:[e.jsx($e,{className:"h-3 w-3"}),"Completed"]}),e.jsxs(a,{theme:"warning",variant:"soft",children:[e.jsx(qe,{className:"h-3 w-3"}),"In Progress"]}),e.jsxs(a,{theme:"primary",variant:"soft",children:[e.jsx(Xe,{className:"h-3 w-3"}),"Information"]}),e.jsxs(a,{theme:"destructive",variant:"soft",children:[e.jsx(Ze,{className:"h-3 w-3"}),"Critical"]}),e.jsx(a,{theme:"neutral",variant:"soft",children:"Draft"}),e.jsx(a,{theme:"success",variant:"soft",children:"Published"}),e.jsx(a,{theme:"warning",variant:"soft",children:"Review"})]})})]})},R={name:"User Skills Example",args:{},render:()=>e.jsxs("div",{className:"max-w-lg border border-border-default rounded-lg p-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-bg-weak flex items-center justify-center",children:e.jsx(ea,{className:"h-6 w-6 text-text-weak"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium",children:"John Doe"}),e.jsx("p",{className:"text-sm text-text-weak",children:"Full Stack Developer"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"Skills"}),e.jsxs(r,{maxVisible:5,children:[e.jsx(a,{theme:"primary",variant:"soft",children:"JavaScript"}),e.jsx(a,{theme:"primary",variant:"soft",children:"TypeScript"}),e.jsx(a,{theme:"primary",variant:"soft",children:"React"}),e.jsx(a,{theme:"primary",variant:"soft",children:"Node.js"}),e.jsx(a,{theme:"primary",variant:"soft",children:"GraphQL"}),e.jsx(a,{theme:"primary",variant:"soft",children:"PostgreSQL"}),e.jsx(a,{theme:"primary",variant:"soft",children:"MongoDB"}),e.jsx(a,{theme:"primary",variant:"soft",children:"Redis"}),e.jsx(a,{theme:"primary",variant:"soft",children:"Docker"}),e.jsx(a,{theme:"primary",variant:"soft",children:"AWS"})]})]})]})},C={name:"Filter Tags Example",args:{},render:()=>e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Active Filters"}),e.jsx("button",{className:"text-xs text-text-accent hover:underline",children:"Clear all"})]}),e.jsxs(r,{children:[e.jsx(a,{theme:"neutral",variant:"outline",children:"Status: Active"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"Type: Premium"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"Date: Last 30 days"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"Region: US-East"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"Priority: High"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"Category: Technology"})]})]})},G={name:"Status Indicators",args:{},render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"System Status"}),e.jsxs(r,{children:[e.jsxs(a,{theme:"success",variant:"soft",children:[e.jsx(h,{className:"bg-success"}),"API: Operational"]}),e.jsxs(a,{theme:"success",variant:"soft",children:[e.jsx(h,{className:"bg-success"}),"Database: Healthy"]}),e.jsxs(a,{theme:"warning",variant:"soft",children:[e.jsx(h,{className:"bg-warning"}),"Cache: Degraded"]}),e.jsxs(a,{theme:"success",variant:"soft",children:[e.jsx(h,{className:"bg-success"}),"CDN: Active"]}),e.jsxs(a,{theme:"destructive",variant:"soft",children:[e.jsx(h,{className:"bg-destructive"}),"Search: Down"]}),e.jsxs(a,{theme:"success",variant:"soft",children:[e.jsx(h,{className:"bg-success"}),"Auth: Running"]})]})]})})},V={name:"Mixed Badge Variants",args:{},render:()=>e.jsxs("div",{className:"max-w-lg border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Product Features"}),e.jsxs(r,{children:[e.jsx(a,{theme:"success",variant:"solid",children:"New"}),e.jsx(a,{theme:"primary",variant:"soft",children:"Popular"}),e.jsx(a,{theme:"warning",variant:"outline",children:"Beta"}),e.jsx(a,{theme:"neutral",variant:"soft",children:"Free"}),e.jsx(a,{theme:"primary",variant:"solid",children:"Pro"}),e.jsx(a,{theme:"destructive",variant:"outline",children:"Deprecated"}),e.jsx(a,{theme:"success",variant:"soft",children:"Updated"})]})]})},O={name:"With Overflow Callback",args:{},render:()=>{const[t,s]=L.useState(0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"max-w-md border border-border-default rounded-lg p-4",children:e.jsxs(r,{onOverflowChange:s,children:[e.jsx(a,{children:"JavaScript"}),e.jsx(a,{children:"TypeScript"}),e.jsx(a,{children:"React"}),e.jsx(a,{children:"Node.js"}),e.jsx(a,{children:"GraphQL"}),e.jsx(a,{children:"PostgreSQL"}),e.jsx(a,{children:"Redis"}),e.jsx(a,{children:"Docker"})]})}),e.jsxs("p",{className:"text-sm text-text-weak",children:["Hidden badges: ",t]})]})}},T={name:"With Long Badge Names (No Wrapping)",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"max-w-lg border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Payment Channels Example"}),e.jsxs(r,{children:[e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK ARTHA GRAHA"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK CENTRAL ASIA"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA MAYBANK INDONESIA"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK NEGARA INDONESIA"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK RAKYAT INDONESIA"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK MANDIRI"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK CIMB NIAGA"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK PERMATA"})]})]}),e.jsxs("div",{className:"max-w-md border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Narrower Container"}),e.jsxs(r,{children:[e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK ARTHA GRAHA"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK CENTRAL ASIA"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA MAYBANK INDONESIA"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK NEGARA INDONESIA"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK RAKYAT INDONESIA"})]})]}),e.jsxs("div",{className:"max-w-sm border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Even Narrower Container"}),e.jsxs(r,{children:[e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK ARTHA GRAHA"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK CENTRAL ASIA"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA MAYBANK INDONESIA"}),e.jsx(a,{theme:"neutral",variant:"outline",children:"VA BANK NEGARA INDONESIA"})]})]})]})},K={name:"Edge Case Overflow (Dialog/Grid Layout)",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-weak",children:"Testing edge cases where total badge width is very close to container width"}),e.jsxs("div",{className:"max-w-4xl mx-auto border border-border-default rounded-lg p-6 bg-bg-default",children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Edit Payment Channel Settings"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Channels"}),e.jsx("div",{className:"border border-border-default rounded p-3",children:e.jsxs(r,{children:[e.jsx(a,{variant:"outline",children:"VA BANK SYARIAH INDONESIA"}),e.jsx(a,{variant:"outline",children:"VA BANK NEGARA INDONESIA"}),e.jsx(a,{variant:"outline",children:"VA BANK NEO COMMERCE"}),e.jsx(a,{variant:"outline",children:"VA BANK DANAMON"}),e.jsx(a,{variant:"outline",children:"OVO"})]})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Selected Banks"}),e.jsx("div",{className:"border border-border-default rounded p-3",children:e.jsxs(r,{children:[e.jsx(a,{theme:"primary",variant:"soft",children:"VA MAYBANK INDONESIA"}),e.jsx(a,{theme:"primary",variant:"soft",children:"VA BANK CENTRAL ASIA"}),e.jsx(a,{theme:"primary",variant:"soft",children:"VA BANK MANDIRI"})]})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Fixed Width Containers (Testing Precision)"}),e.jsxs("div",{style:{width:"500px"},className:"border border-border-default rounded p-3",children:[e.jsx("p",{className:"text-xs text-text-weak mb-2",children:"Container: 500px"}),e.jsxs(r,{children:[e.jsx(a,{variant:"outline",children:"VA BANK SYARIAH INDONESIA"}),e.jsx(a,{variant:"outline",children:"VA BANK NEGARA INDONESIA"}),e.jsx(a,{variant:"outline",children:"VA BANK NEO COMMERCE"})]})]}),e.jsxs("div",{style:{width:"450px"},className:"border border-border-default rounded p-3",children:[e.jsx("p",{className:"text-xs text-text-weak mb-2",children:"Container: 450px"}),e.jsxs(r,{children:[e.jsx(a,{variant:"outline",children:"VA BANK SYARIAH INDONESIA"}),e.jsx(a,{variant:"outline",children:"VA BANK NEGARA INDONESIA"}),e.jsx(a,{variant:"outline",children:"VA BANK NEO COMMERCE"})]})]}),e.jsxs("div",{style:{width:"400px"},className:"border border-border-default rounded p-3",children:[e.jsx("p",{className:"text-xs text-text-weak mb-2",children:"Container: 400px"}),e.jsxs(r,{children:[e.jsx(a,{variant:"outline",children:"VA BANK SYARIAH INDONESIA"}),e.jsx(a,{variant:"outline",children:"VA BANK NEGARA INDONESIA"}),e.jsx(a,{variant:"outline",children:"VA BANK NEO COMMERCE"})]})]})]})]})},D={name:"Precision Overflow Testing",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-weak",children:"Testing badges that are exactly at container width boundaries"}),[600,580,560,540,520,500,480,460,440,420,400].map(t=>e.jsxs("div",{style:{width:`${t}px`},className:"border border-border-default rounded p-3",children:[e.jsxs("p",{className:"text-xs text-text-weak mb-2",children:["Container: ",t,"px"]}),e.jsxs(r,{children:[e.jsx(a,{theme:"neutral",variant:"soft",children:"JavaScript"}),e.jsx(a,{theme:"neutral",variant:"soft",children:"TypeScript"}),e.jsx(a,{theme:"neutral",variant:"soft",children:"React"}),e.jsx(a,{theme:"neutral",variant:"soft",children:"Node.js"}),e.jsx(a,{theme:"neutral",variant:"soft",children:"GraphQL"})]})]},t))]})},M={name:"Dynamic Overflow Width Testing",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-weak",children:"Testing different overflow counts (+1, +10, +100)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"max-w-xs border border-border-default rounded p-3",children:[e.jsx("h4",{className:"text-xs font-medium mb-2",children:"Small overflow (+1-2)"}),e.jsxs(r,{maxVisible:3,children:[e.jsx(a,{children:"Tag 1"}),e.jsx(a,{children:"Tag 2"}),e.jsx(a,{children:"Tag 3"}),e.jsx(a,{children:"Tag 4"})]})]}),e.jsxs("div",{className:"max-w-xs border border-border-default rounded p-3",children:[e.jsx("h4",{className:"text-xs font-medium mb-2",children:"Medium overflow (+10)"}),e.jsx(r,{maxVisible:2,children:Array.from({length:12},(t,s)=>e.jsxs(a,{children:["Tag ",s+1]},s))})]}),e.jsxs("div",{className:"max-w-xs border border-border-default rounded p-3",children:[e.jsx("h4",{className:"text-xs font-medium mb-2",children:"Large overflow (+100)"}),e.jsx(r,{maxVisible:2,children:Array.from({length:102},(t,s)=>e.jsxs(a,{children:["Tag ",s+1]},s))})]}),e.jsxs("div",{className:"max-w-md border border-border-default rounded p-3",children:[e.jsx("h4",{className:"text-xs font-medium mb-2",children:"Dynamic container with many badges"}),e.jsx(r,{children:Array.from({length:20},(t,s)=>e.jsxs(a,{theme:s%2===0?"primary":"neutral",variant:s%3===0?"outline":"soft",children:["Badge ",s+1]},s))})]})]})]})},k={name:"Grid Layout Test (Payment Dialog Simulation)",args:{},render:()=>{const t=["VA BANK SYARIAH INDONESIA","VA BANK NEGARA INDONESIA","VA BANK NEO COMMERCE","VA BANK DANAMON","OVO","VA BANK MANDIRI","VA BANK CENTRAL ASIA"];return e.jsxs("div",{className:"max-w-6xl mx-auto space-y-4",children:[e.jsxs("div",{className:"border-2 border-border-default rounded-lg shadow-lg",children:[e.jsxs("div",{className:"border-b border-border-default p-4 flex justify-between items-center",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Edit Payment Channel Settings"}),e.jsx("button",{className:"text-text-weak hover:text-text-default",children:"✕"})]}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Channels"}),e.jsx("div",{className:"border border-border-default rounded-md p-3 bg-bg-weak",children:e.jsx(r,{children:t.map(s=>e.jsx(a,{variant:"outline",theme:"neutral",children:s},s))})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Deposit Expiry"}),e.jsx("input",{type:"text",placeholder:"HH:MM:SS",className:"w-full px-3 py-2 border border-border-default rounded-md"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Trx Min Amount"}),e.jsx("input",{type:"text",placeholder:"Enter an Amount",className:"w-full px-3 py-2 border border-border-default rounded-md"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Trx Max Amount"}),e.jsx("input",{type:"text",placeholder:"Enter an Amount",className:"w-full px-3 py-2 border border-border-default rounded-md"})]})]})]})]}),e.jsxs("div",{className:"mt-6 grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Fee Info"}),e.jsxs("select",{className:"w-full px-3 py-2 border border-border-default rounded-md",children:[e.jsx("option",{children:"No Fees"}),e.jsx("option",{children:"Fixed Fee"}),e.jsx("option",{children:"Percentage Fee"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Active Channels"}),e.jsx("div",{className:"border border-border-default rounded-md p-3 bg-bg-weak",children:e.jsxs(r,{children:[e.jsx(a,{theme:"success",variant:"soft",children:"VA BCA"}),e.jsx(a,{theme:"success",variant:"soft",children:"VA Mandiri"}),e.jsx(a,{theme:"success",variant:"soft",children:"OVO"}),e.jsx(a,{theme:"success",variant:"soft",children:"GoPay"})]})})]})]})]}),e.jsxs("div",{className:"border-t border-border-default p-4 flex justify-end gap-3",children:[e.jsx("button",{className:"px-4 py-2 text-sm font-medium border border-border-default rounded-md hover:bg-bg-weak",children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 text-sm font-medium bg-accent text-text-inverse rounded-md hover:opacity-90",children:"Save"})]})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-6",children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Narrow Grid Columns Test"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"border border-border-default rounded p-3",children:e.jsxs(r,{children:[e.jsx(a,{variant:"outline",children:"VA BANK SYARIAH"}),e.jsx(a,{variant:"outline",children:"VA BNI"}),e.jsx(a,{variant:"outline",children:"VA NEO"})]})}),e.jsx("div",{className:"border border-border-default rounded p-3",children:e.jsxs(r,{children:[e.jsx(a,{variant:"soft",children:"Payment Gateway 1"}),e.jsx(a,{variant:"soft",children:"Payment Gateway 2"})]})}),e.jsx("div",{className:"border border-border-default rounded p-3",children:e.jsxs(r,{children:[e.jsx(a,{theme:"success",children:"Active"}),e.jsx(a,{theme:"warning",children:"Pending"}),e.jsx(a,{theme:"destructive",children:"Failed"})]})})]})]})]})}},P={name:"Varying Width Channels (Real Payment Data)",args:{},render:()=>{const t=["BANK PERMATA","BANK MANDIRI","BANK CENTRAL ASIA","BANK JTRUST INDONESIA","BANK MAYBANK","DANA","OVO","QRIS","BANK ARTHA GRAHA","VA BANK ARTHA GRAHA","VA BANK CENTRAL ASIA","VA BANK DANAMON","VA MAYBANK INDONESIA","VA BANK NEO COMMERCE","VA BANK NEGARA INDONESIA","VA BANK RAKYAT INDONESIA"],s=["DANA","OVO","QRIS"],d=["BANK PERMATA","BANK MANDIRI","BANK MAYBANK"],i=["BANK CENTRAL ASIA","BANK JTRUST INDONESIA","BANK ARTHA GRAHA"],x=["VA BANK ARTHA GRAHA","VA BANK CENTRAL ASIA","VA BANK DANAMON","VA MAYBANK INDONESIA","VA BANK NEO COMMERCE","VA BANK NEGARA INDONESIA","VA BANK RAKYAT INDONESIA"];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Testing Varying Width Channel Names"}),e.jsx("p",{className:"text-sm text-text-weak mb-4",children:"These are real payment channel names from your data, testing how BadgeGroup handles different text lengths"})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"All Payment Channels (Mixed Widths)"}),e.jsx(r,{children:t.map(n=>e.jsx(a,{variant:"outline",theme:"neutral",children:n},n))})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Short Channel Names"}),e.jsx(r,{children:s.map(n=>e.jsx(a,{variant:"outline",theme:"neutral",children:n},n))})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Medium Channel Names"}),e.jsx(r,{children:d.map(n=>e.jsx(a,{variant:"outline",theme:"neutral",children:n},n))})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Long Channel Names"}),e.jsx(r,{children:i.map(n=>e.jsx(a,{variant:"outline",theme:"neutral",children:n},n))})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Virtual Account Channels"}),e.jsx(r,{children:x.map(n=>e.jsx(a,{variant:"outline",theme:"neutral",children:n},n))})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Constrained Container Widths"}),e.jsxs("div",{className:"max-w-xl border border-border-default rounded-lg p-4",children:[e.jsx("p",{className:"text-xs text-text-weak mb-2",children:"Container: max-w-xl"}),e.jsx(r,{children:t.slice(0,8).map(n=>e.jsx(a,{variant:"outline",theme:"neutral",children:n},n))})]}),e.jsxs("div",{className:"max-w-lg border border-border-default rounded-lg p-4",children:[e.jsx("p",{className:"text-xs text-text-weak mb-2",children:"Container: max-w-lg"}),e.jsx(r,{children:t.slice(0,8).map(n=>e.jsx(a,{variant:"outline",theme:"neutral",children:n},n))})]}),e.jsxs("div",{className:"max-w-md border border-border-default rounded-lg p-4",children:[e.jsx("p",{className:"text-xs text-text-weak mb-2",children:"Container: max-w-md"}),e.jsx(r,{children:t.slice(0,8).map(n=>e.jsx(a,{variant:"outline",theme:"neutral",children:n},n))})]}),e.jsxs("div",{className:"max-w-sm border border-border-default rounded-lg p-4",children:[e.jsx("p",{className:"text-xs text-text-weak mb-2",children:"Container: max-w-sm"}),e.jsx(r,{children:t.slice(0,8).map(n=>e.jsx(a,{variant:"outline",theme:"neutral",children:n},n))})]})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Mixed Short and Long Names (Edge Case)"}),e.jsx("div",{className:"max-w-2xl",children:e.jsxs(r,{children:[e.jsx(a,{variant:"outline",children:"OVO"}),e.jsx(a,{variant:"outline",children:"VA BANK RAKYAT INDONESIA"}),e.jsx(a,{variant:"outline",children:"DANA"}),e.jsx(a,{variant:"outline",children:"VA BANK NEGARA INDONESIA"}),e.jsx(a,{variant:"outline",children:"QRIS"}),e.jsx(a,{variant:"outline",children:"BANK JTRUST INDONESIA"})]})})]})]})}};var z,$,q;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {} as any,
  render: () => <BadgeGroup>
      <Badge theme="success">Active</Badge>
      <Badge theme="primary">Premium</Badge>
      <Badge theme="warning">Pending</Badge>
      <Badge theme="neutral">Draft</Badge>
      <Badge theme="destructive">Expired</Badge>
    </BadgeGroup>
}`,...(q=($=j.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var X,Z,ee;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,ne;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,te,de;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(te=S.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};var ie,le,oe;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(le=I.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var me,ce,ue;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ge,he,xe;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(xe=(he=R.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var pe,Ne,Be;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(Be=(Ne=C.parameters)==null?void 0:Ne.docs)==null?void 0:Be.source}}};var Ae,ve,be;G.parameters={...G.parameters,docs:{...(Ae=G.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(be=(ve=G.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var fe,je,ye;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ye=(je=V.parameters)==null?void 0:je.docs)==null?void 0:ye.source}}};var we,Se,Ie;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ie=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var Ee,Re,Ce;T.parameters={...T.parameters,docs:{...(Ee=T.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: "With Long Badge Names (No Wrapping)",
  args: {} as any,
  render: () => <div className="space-y-4">
      <div className="max-w-lg border border-border-default rounded-lg p-4">
        <h3 className="text-sm font-medium mb-3">Payment Channels Example</h3>
        <BadgeGroup>
          <Badge theme="neutral" variant="outline">VA BANK ARTHA GRAHA</Badge>
          <Badge theme="neutral" variant="outline">VA BANK CENTRAL ASIA</Badge>
          <Badge theme="neutral" variant="outline">VA MAYBANK INDONESIA</Badge>
          <Badge theme="neutral" variant="outline">VA BANK NEGARA INDONESIA</Badge>
          <Badge theme="neutral" variant="outline">VA BANK RAKYAT INDONESIA</Badge>
          <Badge theme="neutral" variant="outline">VA BANK MANDIRI</Badge>
          <Badge theme="neutral" variant="outline">VA BANK CIMB NIAGA</Badge>
          <Badge theme="neutral" variant="outline">VA BANK PERMATA</Badge>
        </BadgeGroup>
      </div>
      <div className="max-w-md border border-border-default rounded-lg p-4">
        <h3 className="text-sm font-medium mb-3">Narrower Container</h3>
        <BadgeGroup>
          <Badge theme="neutral" variant="outline">VA BANK ARTHA GRAHA</Badge>
          <Badge theme="neutral" variant="outline">VA BANK CENTRAL ASIA</Badge>
          <Badge theme="neutral" variant="outline">VA MAYBANK INDONESIA</Badge>
          <Badge theme="neutral" variant="outline">VA BANK NEGARA INDONESIA</Badge>
          <Badge theme="neutral" variant="outline">VA BANK RAKYAT INDONESIA</Badge>
        </BadgeGroup>
      </div>
      <div className="max-w-sm border border-border-default rounded-lg p-4">
        <h3 className="text-sm font-medium mb-3">Even Narrower Container</h3>
        <BadgeGroup>
          <Badge theme="neutral" variant="outline">VA BANK ARTHA GRAHA</Badge>
          <Badge theme="neutral" variant="outline">VA BANK CENTRAL ASIA</Badge>
          <Badge theme="neutral" variant="outline">VA MAYBANK INDONESIA</Badge>
          <Badge theme="neutral" variant="outline">VA BANK NEGARA INDONESIA</Badge>
        </BadgeGroup>
      </div>
    </div>
}`,...(Ce=(Re=T.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};var Ge,Ve,Oe;K.parameters={...K.parameters,docs:{...(Ge=K.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: "Edge Case Overflow (Dialog/Grid Layout)",
  args: {} as any,
  render: () => <div className="space-y-4">
      <p className="text-sm text-text-weak">Testing edge cases where total badge width is very close to container width</p>
      
      {/* Simulating dialog with grid layout */}
      <div className="max-w-4xl mx-auto border border-border-default rounded-lg p-6 bg-bg-default">
        <h3 className="text-lg font-medium mb-4">Edit Payment Channel Settings</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Channels</label>
            <div className="border border-border-default rounded p-3">
              <BadgeGroup>
                <Badge variant="outline">VA BANK SYARIAH INDONESIA</Badge>
                <Badge variant="outline">VA BANK NEGARA INDONESIA</Badge>
                <Badge variant="outline">VA BANK NEO COMMERCE</Badge>
                <Badge variant="outline">VA BANK DANAMON</Badge>
                <Badge variant="outline">OVO</Badge>
              </BadgeGroup>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Selected Banks</label>
            <div className="border border-border-default rounded p-3">
              <BadgeGroup>
                <Badge theme="primary" variant="soft">VA MAYBANK INDONESIA</Badge>
                <Badge theme="primary" variant="soft">VA BANK CENTRAL ASIA</Badge>
                <Badge theme="primary" variant="soft">VA BANK MANDIRI</Badge>
              </BadgeGroup>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testing with fixed width containers */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Fixed Width Containers (Testing Precision)</h3>
        
        <div style={{
        width: "500px"
      }} className="border border-border-default rounded p-3">
          <p className="text-xs text-text-weak mb-2">Container: 500px</p>
          <BadgeGroup>
            <Badge variant="outline">VA BANK SYARIAH INDONESIA</Badge>
            <Badge variant="outline">VA BANK NEGARA INDONESIA</Badge>
            <Badge variant="outline">VA BANK NEO COMMERCE</Badge>
          </BadgeGroup>
        </div>
        
        <div style={{
        width: "450px"
      }} className="border border-border-default rounded p-3">
          <p className="text-xs text-text-weak mb-2">Container: 450px</p>
          <BadgeGroup>
            <Badge variant="outline">VA BANK SYARIAH INDONESIA</Badge>
            <Badge variant="outline">VA BANK NEGARA INDONESIA</Badge>
            <Badge variant="outline">VA BANK NEO COMMERCE</Badge>
          </BadgeGroup>
        </div>
        
        <div style={{
        width: "400px"
      }} className="border border-border-default rounded p-3">
          <p className="text-xs text-text-weak mb-2">Container: 400px</p>
          <BadgeGroup>
            <Badge variant="outline">VA BANK SYARIAH INDONESIA</Badge>
            <Badge variant="outline">VA BANK NEGARA INDONESIA</Badge>
            <Badge variant="outline">VA BANK NEO COMMERCE</Badge>
          </BadgeGroup>
        </div>
      </div>
    </div>
}`,...(Oe=(Ve=K.parameters)==null?void 0:Ve.docs)==null?void 0:Oe.source}}};var Te,Ke,De;D.parameters={...D.parameters,docs:{...(Te=D.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: "Precision Overflow Testing",
  args: {} as any,
  render: () => <div className="space-y-4">
      <p className="text-sm text-text-weak">Testing badges that are exactly at container width boundaries</p>
      
      {/* Test with incrementally smaller containers */}
      {[600, 580, 560, 540, 520, 500, 480, 460, 440, 420, 400].map(width => <div key={width} style={{
      width: \`\${width}px\`
    }} className="border border-border-default rounded p-3">
          <p className="text-xs text-text-weak mb-2">Container: {width}px</p>
          <BadgeGroup>
            <Badge theme="neutral" variant="soft">JavaScript</Badge>
            <Badge theme="neutral" variant="soft">TypeScript</Badge>
            <Badge theme="neutral" variant="soft">React</Badge>
            <Badge theme="neutral" variant="soft">Node.js</Badge>
            <Badge theme="neutral" variant="soft">GraphQL</Badge>
          </BadgeGroup>
        </div>)}
    </div>
}`,...(De=(Ke=D.parameters)==null?void 0:Ke.docs)==null?void 0:De.source}}};var Me,ke,Pe;M.parameters={...M.parameters,docs:{...(Me=M.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: "Dynamic Overflow Width Testing",
  args: {} as any,
  render: () => <div className="space-y-4">
      <p className="text-sm text-text-weak">Testing different overflow counts (+1, +10, +100)</p>
      
      <div className="space-y-3">
        <div className="max-w-xs border border-border-default rounded p-3">
          <h4 className="text-xs font-medium mb-2">Small overflow (+1-2)</h4>
          <BadgeGroup maxVisible={3}>
            <Badge>Tag 1</Badge>
            <Badge>Tag 2</Badge>
            <Badge>Tag 3</Badge>
            <Badge>Tag 4</Badge>
          </BadgeGroup>
        </div>
        
        <div className="max-w-xs border border-border-default rounded p-3">
          <h4 className="text-xs font-medium mb-2">Medium overflow (+10)</h4>
          <BadgeGroup maxVisible={2}>
            {Array.from({
            length: 12
          }, (_, i) => <Badge key={i}>Tag {i + 1}</Badge>)}
          </BadgeGroup>
        </div>
        
        <div className="max-w-xs border border-border-default rounded p-3">
          <h4 className="text-xs font-medium mb-2">Large overflow (+100)</h4>
          <BadgeGroup maxVisible={2}>
            {Array.from({
            length: 102
          }, (_, i) => <Badge key={i}>Tag {i + 1}</Badge>)}
          </BadgeGroup>
        </div>
        
        <div className="max-w-md border border-border-default rounded p-3">
          <h4 className="text-xs font-medium mb-2">Dynamic container with many badges</h4>
          <BadgeGroup>
            {Array.from({
            length: 20
          }, (_, i) => <Badge key={i} theme={i % 2 === 0 ? "primary" : "neutral"} variant={i % 3 === 0 ? "outline" : "soft"}>
                Badge {i + 1}
              </Badge>)}
          </BadgeGroup>
        </div>
      </div>
    </div>
}`,...(Pe=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var Le,He,We;k.parameters={...k.parameters,docs:{...(Le=k.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: "Grid Layout Test (Payment Dialog Simulation)",
  args: {} as any,
  render: () => {
    const paymentChannels = ["VA BANK SYARIAH INDONESIA", "VA BANK NEGARA INDONESIA", "VA BANK NEO COMMERCE", "VA BANK DANAMON", "OVO", "VA BANK MANDIRI", "VA BANK CENTRAL ASIA"];
    return <div className="max-w-6xl mx-auto space-y-4">
        <div className="border-2 border-border-default rounded-lg shadow-lg">
          {/* Dialog Header */}
          <div className="border-b border-border-default p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Edit Payment Channel Settings</h2>
            <button className="text-text-weak hover:text-text-default">✕</button>
          </div>
          
          {/* Dialog Body with Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Channels Column */}
              <div>
                <label className="block text-sm font-medium mb-2">Channels</label>
                <div className="border border-border-default rounded-md p-3 bg-bg-weak">
                  <BadgeGroup>
                    {paymentChannels.map(channel => <Badge key={channel} variant="outline" theme="neutral">
                        {channel}
                      </Badge>)}
                  </BadgeGroup>
                </div>
              </div>
              
              {/* Channel Info Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Deposit Expiry</label>
                  <input type="text" placeholder="HH:MM:SS" className="w-full px-3 py-2 border border-border-default rounded-md" />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-2">Trx Min Amount</label>
                    <input type="text" placeholder="Enter an Amount" className="w-full px-3 py-2 border border-border-default rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Trx Max Amount</label>
                    <input type="text" placeholder="Enter an Amount" className="w-full px-3 py-2 border border-border-default rounded-md" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Grid Rows */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Fee Info</label>
                <select className="w-full px-3 py-2 border border-border-default rounded-md">
                  <option>No Fees</option>
                  <option>Fixed Fee</option>
                  <option>Percentage Fee</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Active Channels</label>
                <div className="border border-border-default rounded-md p-3 bg-bg-weak">
                  <BadgeGroup>
                    <Badge theme="success" variant="soft">VA BCA</Badge>
                    <Badge theme="success" variant="soft">VA Mandiri</Badge>
                    <Badge theme="success" variant="soft">OVO</Badge>
                    <Badge theme="success" variant="soft">GoPay</Badge>
                  </BadgeGroup>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dialog Footer */}
          <div className="border-t border-border-default p-4 flex justify-end gap-3">
            <button className="px-4 py-2 text-sm font-medium border border-border-default rounded-md hover:bg-bg-weak">
              Cancel
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-accent text-text-inverse rounded-md hover:opacity-90">
              Save
            </button>
          </div>
        </div>
        
        {/* Test in narrower grid columns */}
        <div className="border border-border-default rounded-lg p-6">
          <h3 className="text-sm font-medium mb-4">Narrow Grid Columns Test</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="border border-border-default rounded p-3">
              <BadgeGroup>
                <Badge variant="outline">VA BANK SYARIAH</Badge>
                <Badge variant="outline">VA BNI</Badge>
                <Badge variant="outline">VA NEO</Badge>
              </BadgeGroup>
            </div>
            <div className="border border-border-default rounded p-3">
              <BadgeGroup>
                <Badge variant="soft">Payment Gateway 1</Badge>
                <Badge variant="soft">Payment Gateway 2</Badge>
              </BadgeGroup>
            </div>
            <div className="border border-border-default rounded p-3">
              <BadgeGroup>
                <Badge theme="success">Active</Badge>
                <Badge theme="warning">Pending</Badge>
                <Badge theme="destructive">Failed</Badge>
              </BadgeGroup>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(We=(He=k.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var Fe,Ye,Qe;P.parameters={...P.parameters,docs:{...(Fe=P.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: "Varying Width Channels (Real Payment Data)",
  args: {} as any,
  render: () => {
    // Real payment channel names with varying widths
    const paymentChannels = ["BANK PERMATA", "BANK MANDIRI", "BANK CENTRAL ASIA", "BANK JTRUST INDONESIA", "BANK MAYBANK", "DANA", "OVO", "QRIS", "BANK ARTHA GRAHA", "VA BANK ARTHA GRAHA", "VA BANK CENTRAL ASIA", "VA BANK DANAMON", "VA MAYBANK INDONESIA", "VA BANK NEO COMMERCE", "VA BANK NEGARA INDONESIA", "VA BANK RAKYAT INDONESIA"];

    // Split into different groups to test different scenarios
    const shortNames = ["DANA", "OVO", "QRIS"];
    const mediumNames = ["BANK PERMATA", "BANK MANDIRI", "BANK MAYBANK"];
    const longNames = ["BANK CENTRAL ASIA", "BANK JTRUST INDONESIA", "BANK ARTHA GRAHA"];
    const vaNames = ["VA BANK ARTHA GRAHA", "VA BANK CENTRAL ASIA", "VA BANK DANAMON", "VA MAYBANK INDONESIA", "VA BANK NEO COMMERCE", "VA BANK NEGARA INDONESIA", "VA BANK RAKYAT INDONESIA"];
    return <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Testing Varying Width Channel Names</h2>
          <p className="text-sm text-text-weak mb-4">
            These are real payment channel names from your data, testing how BadgeGroup handles different text lengths
          </p>
        </div>
        
        {/* All channels mixed */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-medium mb-3">All Payment Channels (Mixed Widths)</h3>
          <BadgeGroup>
            {paymentChannels.map(channel => <Badge key={channel} variant="outline" theme="neutral">
                {channel}
              </Badge>)}
          </BadgeGroup>
        </div>
        
        {/* Short names only */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-medium mb-3">Short Channel Names</h3>
          <BadgeGroup>
            {shortNames.map(channel => <Badge key={channel} variant="outline" theme="neutral">
                {channel}
              </Badge>)}
          </BadgeGroup>
        </div>
        
        {/* Medium names */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-medium mb-3">Medium Channel Names</h3>
          <BadgeGroup>
            {mediumNames.map(channel => <Badge key={channel} variant="outline" theme="neutral">
                {channel}
              </Badge>)}
          </BadgeGroup>
        </div>
        
        {/* Long names */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-medium mb-3">Long Channel Names</h3>
          <BadgeGroup>
            {longNames.map(channel => <Badge key={channel} variant="outline" theme="neutral">
                {channel}
              </Badge>)}
          </BadgeGroup>
        </div>
        
        {/* VA channels (all have prefix) */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-medium mb-3">Virtual Account Channels</h3>
          <BadgeGroup>
            {vaNames.map(channel => <Badge key={channel} variant="outline" theme="neutral">
                {channel}
              </Badge>)}
          </BadgeGroup>
        </div>
        
        {/* Testing in constrained widths */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Constrained Container Widths</h3>
          
          <div className="max-w-xl border border-border-default rounded-lg p-4">
            <p className="text-xs text-text-weak mb-2">Container: max-w-xl</p>
            <BadgeGroup>
              {paymentChannels.slice(0, 8).map(channel => <Badge key={channel} variant="outline" theme="neutral">
                  {channel}
                </Badge>)}
            </BadgeGroup>
          </div>
          
          <div className="max-w-lg border border-border-default rounded-lg p-4">
            <p className="text-xs text-text-weak mb-2">Container: max-w-lg</p>
            <BadgeGroup>
              {paymentChannels.slice(0, 8).map(channel => <Badge key={channel} variant="outline" theme="neutral">
                  {channel}
                </Badge>)}
            </BadgeGroup>
          </div>
          
          <div className="max-w-md border border-border-default rounded-lg p-4">
            <p className="text-xs text-text-weak mb-2">Container: max-w-md</p>
            <BadgeGroup>
              {paymentChannels.slice(0, 8).map(channel => <Badge key={channel} variant="outline" theme="neutral">
                  {channel}
                </Badge>)}
            </BadgeGroup>
          </div>
          
          <div className="max-w-sm border border-border-default rounded-lg p-4">
            <p className="text-xs text-text-weak mb-2">Container: max-w-sm</p>
            <BadgeGroup>
              {paymentChannels.slice(0, 8).map(channel => <Badge key={channel} variant="outline" theme="neutral">
                  {channel}
                </Badge>)}
            </BadgeGroup>
          </div>
        </div>
        
        {/* Mix of short and long names to test edge cases */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-medium mb-3">Mixed Short and Long Names (Edge Case)</h3>
          <div className="max-w-2xl">
            <BadgeGroup>
              <Badge variant="outline">OVO</Badge>
              <Badge variant="outline">VA BANK RAKYAT INDONESIA</Badge>
              <Badge variant="outline">DANA</Badge>
              <Badge variant="outline">VA BANK NEGARA INDONESIA</Badge>
              <Badge variant="outline">QRIS</Badge>
              <Badge variant="outline">BANK JTRUST INDONESIA</Badge>
            </BadgeGroup>
          </div>
        </div>
      </div>;
  }
}`,...(Qe=(Ye=P.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source}}};const Aa=["Default","WithOverflow","MaxVisible","DifferentGaps","CustomOverflowBadge","ResponsiveDemo","UserSkills","FilterTags","StatusIndicators","MixedVariants","WithCallback","WithLongNames","EdgeCaseOverflow","PrecisionOverflow","DynamicOverflowWidth","GridLayoutTest","VaryingWidthChannels"];export{I as CustomOverflowBadge,j as Default,S as DifferentGaps,M as DynamicOverflowWidth,K as EdgeCaseOverflow,C as FilterTags,k as GridLayoutTest,w as MaxVisible,V as MixedVariants,D as PrecisionOverflow,E as ResponsiveDemo,G as StatusIndicators,R as UserSkills,P as VaryingWidthChannels,O as WithCallback,T as WithLongNames,y as WithOverflow,Aa as __namedExportsOrder,Ba as default};
