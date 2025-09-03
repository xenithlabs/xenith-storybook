import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as A,R as b}from"./index-DRjF_FHU.js";import{c as _e}from"./index-Bb4qSo10.js";import{c as Ie}from"./cn-8RyR4BqC.js";import{B as a}from"./Badge-CQf0SPqP.js";import{T as Ge}from"./Truncate-CxCy4zTX.js";import{F as Oe}from"./check-circle-DNKzEdhW.js";import{F as ke}from"./clock-DRhx3Wks.js";import{F as De}from"./info-Cre7IJy9.js";import{F as Ve}from"./alert-circle-Fx72cPit.js";import"./styles-x1yxmyQd.js";import"./Tooltip-D2ba4dcD.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./CopyButton-qsSJYBqc.js";import"./Button-DAgrt3Vy.js";import"./index-HZDBD2ik.js";import"./spinner-ojW7ALd7.js";import"./Icon-CTnhpE1d.js";import"./chevron-down-CyV3wpL8.js";import"./check-C0C6JGvp.js";import"./copy-De8jvVXM.js";const Me=({children:s,maxVisible:n,gap:t,maxBadgeWidth:o})=>{const i=A.useRef(null),[j,v]=A.useState(0),[P,h]=A.useState(0),[z,y]=A.useState(!0);return A.useEffect(()=>{const N=()=>{if(!i.current)return;const x=i.current,u=b.Children.toArray(s),c=u.length;if(n&&n<c){v(n),h(c-n),y(!1);return}const C=x.offsetWidth;if(C===0){requestAnimationFrame(N);return}const d=document.createElement("div");d.style.cssText=`
        position: absolute;
        top: -9999px;
        left: -9999px;
        visibility: hidden;
        display: flex;
        align-items: center;
        gap: ${t}px;
        width: max-content;
        flex-wrap: nowrap;
        box-sizing: border-box;
      `;const m=window.getComputedStyle(x);d.style.fontFamily=m.fontFamily,d.style.fontSize=m.fontSize,d.style.fontWeight=m.fontWeight,d.style.lineHeight=m.lineHeight,d.style.letterSpacing=m.letterSpacing,document.body.appendChild(d);const K=[];for(let l=0;l<c;l++){const p=document.createElement("div");p.className="inline-flex items-center gap-2 px-2 py-1 text-xs rounded-md font-medium";let F=`
          box-sizing: border-box;
          flex-shrink: 0;
          white-space: nowrap;
        `;if(o){const T=typeof o=="number"?`${o}px`:o;F+=`
            max-width: ${T};
            overflow: hidden;
            text-overflow: ellipsis;
          `}p.style.cssText=F,u[l].props.variant==="outline"&&(p.classList.add("border"),p.style.borderWidth="1px");const B=u[l].props.children;p.textContent=typeof B=="string"?B:"Badge",d.appendChild(p),K.push(p)}const H=C-10;let q=0,L=0;const g=document.createElement("div");g.className="inline-flex items-center gap-2 px-2 py-1 text-xs rounded-md font-medium border",g.style.cssText=`
        box-sizing: border-box;
        flex-shrink: 0;
        border-width: 1px;
        white-space: nowrap;
      `;for(let l=0;l<K.length;l++){let f=K[l].offsetWidth;l>0&&(f+=t);const B=c-l-1;if(B>0){g.textContent=`+${B} more`,d.appendChild(g);const T=g.offsetWidth;if(d.removeChild(g),L+f+t+T>H)break}else if(L+f>H)break;L+=f,q=l+1}const Y=Math.max(1,q);document.body.removeChild(d),v(Y),h(c-Y),y(!1)};N();const w=new ResizeObserver(()=>{N()});return i.current&&w.observe(i.current),()=>{w.disconnect()}},[s,n,t,o]),{containerRef:i,visibleCount:j,overflowCount:P,isCalculating:z}},We=_e("flex items-center min-w-0",{variants:{gap:{xs:"gap-1",sm:"gap-2",md:"gap-3",lg:"gap-4"}},defaultVariants:{gap:"sm"}}),Q=({child:s,maxBadgeWidth:n,truncateBadges:t,middleTruncate:o})=>{if(!n)return s;const i={maxWidth:typeof n=="number"?`${n}px`:n,width:"fit-content"};return t?b.cloneElement(s,{style:{...i,overflow:"hidden"},children:e.jsx(Ge,{fluid:!0,withTooltip:!0,minWidth:0,middleTruncate:o,children:s.props.children})}):b.cloneElement(s,{style:i})},r=({children:s,className:n,gap:t="sm",maxVisible:o,maxBadgeWidth:i,truncateBadges:j=!1,middleTruncate:v=!1,overflowBadgeProps:P,onOverflowChange:h,...z})=>{const y={xs:4,sm:8,md:12,lg:16}[t||"sm"],{containerRef:N,visibleCount:w,overflowCount:x,isCalculating:u}=Me({children:s,maxVisible:o,gap:y,maxBadgeWidth:i});b.useEffect(()=>{h&&!u&&h(x)},[x,u,h]);const c=b.Children.toArray(s),C=c.slice(0,w);return e.jsx("div",{ref:N,className:Ie(We({gap:t,className:n})),...z,children:u?e.jsx("div",{style:{visibility:"hidden"},children:c.map((d,m)=>e.jsx(Q,{child:d,maxBadgeWidth:i,truncateBadges:j,middleTruncate:v},m))}):e.jsxs(e.Fragment,{children:[C.map((d,m)=>e.jsx(Q,{child:d,maxBadgeWidth:i,truncateBadges:j,middleTruncate:v},m)),x>0&&e.jsxs(a,{theme:"neutral",variant:"outline",size:"sm",...P,children:["+",x," more"]})]})})};r.__docgenInfo={description:"",methods:[],displayName:"BadgeGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxVisible:{required:!1,tsType:{name:"number"},description:""},maxBadgeWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},truncateBadges:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},middleTruncate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},overflowBadgeProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof Badge>",elements:[{name:"Badge"}]},description:""},onOverflowChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number) => void",signature:{arguments:[{type:{name:"number"},name:"count"}],return:{name:"void"}}},description:""},gap:{defaultValue:{value:'"sm"',computed:!1},required:!1}},composes:["HTMLAttributes","VariantProps"]};const ba={title:"Xenith UI/Components/BadgeGroup",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{gap:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Gap between badges",table:{type:{summary:'"xs" | "sm" | "md" | "lg"'},defaultValue:{summary:'"sm"'}}},maxVisible:{control:{type:"number"},description:"Maximum number of badges to display",table:{type:{summary:"number"}}},children:{description:"Badge components to display",table:{type:{summary:"ReactNode"}}},overflowBadgeProps:{description:"Props for the overflow indicator badge",table:{type:{summary:"BadgeProps"}}},onOverflowChange:{description:"Callback when overflow count changes",table:{type:{summary:"(count: number) => void"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}}},E={args:{},render:()=>e.jsxs(r,{children:[e.jsx(a,{theme:"success",children:"Active"}),e.jsx(a,{theme:"primary",children:"Premium"}),e.jsx(a,{theme:"warning",children:"Pending"}),e.jsx(a,{theme:"neutral",children:"Draft"}),e.jsx(a,{theme:"destructive",children:"Expired"})]})},R={name:"With Overflow",args:{},render:()=>e.jsx("div",{className:"max-w-md border border-border-default rounded-lg p-4",children:e.jsxs(r,{children:[e.jsx(a,{theme:"primary",children:"JavaScript"}),e.jsx(a,{theme:"primary",children:"TypeScript"}),e.jsx(a,{theme:"primary",children:"React"}),e.jsx(a,{theme:"primary",children:"Node.js"}),e.jsx(a,{theme:"primary",children:"GraphQL"}),e.jsx(a,{theme:"primary",children:"PostgreSQL"}),e.jsx(a,{theme:"primary",children:"Redis"}),e.jsx(a,{theme:"primary",children:"Docker"}),e.jsx(a,{theme:"primary",children:"Kubernetes"}),e.jsx(a,{theme:"primary",children:"AWS"})]})})},S={name:"With Max Visible",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Max 3 badges"}),e.jsxs(r,{maxVisible:3,children:[e.jsx(a,{children:"Tag 1"}),e.jsx(a,{children:"Tag 2"}),e.jsx(a,{children:"Tag 3"}),e.jsx(a,{children:"Tag 4"}),e.jsx(a,{children:"Tag 5"}),e.jsx(a,{children:"Tag 6"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Max 5 badges"}),e.jsxs(r,{maxVisible:5,children:[e.jsx(a,{children:"Tag 1"}),e.jsx(a,{children:"Tag 2"}),e.jsx(a,{children:"Tag 3"}),e.jsx(a,{children:"Tag 4"}),e.jsx(a,{children:"Tag 5"}),e.jsx(a,{children:"Tag 6"}),e.jsx(a,{children:"Tag 7"}),e.jsx(a,{children:"Tag 8"})]})]})]})},_={name:"Different Gap Sizes",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Extra Small Gap"}),e.jsxs(r,{gap:"xs",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small Gap (Default)"}),e.jsxs(r,{gap:"sm",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Medium Gap"}),e.jsxs(r,{gap:"md",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Large Gap"}),e.jsxs(r,{gap:"lg",children:[e.jsx(a,{children:"React"}),e.jsx(a,{children:"Vue"}),e.jsx(a,{children:"Angular"}),e.jsx(a,{children:"Svelte"})]})]})]})},I={name:"Payment Channel Dialog (Real Usage)",args:{},render:()=>{const s=["VA BANK SYARIAH INDONESIA","VA BANK NEGARA INDONESIA","VA BANK NEO COMMERCE","VA BANK DANAMON","OVO","VA BANK MANDIRI","VA BANK CENTRAL ASIA"];return e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"bg-bg-default border-2 border-border-default rounded-lg shadow-xl max-w-[952px] mx-auto",children:[e.jsx("div",{className:"px-6 py-4 border-b border-border-default",children:e.jsx("h2",{className:"text-xl font-semibold",children:"Edit Payment Channel Settings"})}),e.jsx("div",{className:"px-6 py-4",children:e.jsx("form",{children:e.jsxs("div",{className:"grid grid-cols-[200px_1fr_1fr] gap-4",children:[e.jsx("div",{children:e.jsx("p",{className:"text-sm font-semibold text-text-weak",children:"Channels"})}),e.jsx("div",{className:"col-span-2 min-w-0 w-full",children:e.jsx(r,{className:"min-w-0 w-full",children:s.map(n=>e.jsx(a,{theme:"neutral",size:"sm",variant:"outline",children:n},n))})}),e.jsx("div",{className:"col-span-3 h-px bg-border-default my-2"}),e.jsx("div",{children:e.jsx("p",{className:"text-sm font-semibold text-text-weak",children:"Deposit Expiry"})}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Deposit Expiry ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx("input",{type:"text",placeholder:"HH:MM:SS",className:"w-full px-3 py-2 border border-border-default rounded-md text-sm"})]}),e.jsx("div",{}),e.jsx("div",{className:"col-span-3 h-px bg-border-default my-2"}),e.jsx("div",{children:e.jsx("p",{className:"text-sm font-semibold text-text-weak",children:"Channel Info"})}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Trx Min Amount ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx("input",{type:"text",placeholder:"Enter an Amount",className:"w-full px-3 py-2 border border-border-default rounded-md text-sm"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Trx Max Amount ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx("input",{type:"text",placeholder:"Enter an Amount",className:"w-full px-3 py-2 border border-border-default rounded-md text-sm"})]}),e.jsx("div",{className:"col-span-3 h-px bg-border-default my-2"}),e.jsx("div",{children:e.jsx("p",{className:"text-sm font-semibold text-text-weak",children:"Fee Info"})}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-2",children:["Fee Type ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsxs("select",{className:"w-full px-3 py-2 border border-border-default rounded-md text-sm",children:[e.jsx("option",{children:"No Fees"}),e.jsx("option",{children:"Fixed Amount"}),e.jsx("option",{children:"Percentage"})]})]}),e.jsx("div",{})]})})}),e.jsxs("div",{className:"px-6 py-4 border-t border-border-default flex justify-end gap-3",children:[e.jsx("button",{className:"px-4 py-2 text-sm font-medium border border-border-default rounded-md hover:bg-bg-weak",children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 text-sm font-medium bg-accent text-text-inverse rounded-md hover:opacity-90",children:"Save"})]})]})})}},G={name:"Responsive Grid Layout",args:{},render:()=>{const s=["QRIS","OVO","DANA","VA BANK ARTHA GRAHA","VA MAYBANK INDONESIA","VA BANK NEO COMMERCE","VA BANK NEGARA INDONESIA"];return e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Different Grid Column Widths"}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4 mb-4",children:[e.jsx("p",{className:"text-sm text-text-weak mb-2",children:"grid-cols-[300px_1fr]"}),e.jsxs("div",{className:"grid grid-cols-[300px_1fr] gap-4",children:[e.jsx("div",{className:"text-sm font-semibold",children:"Payment Channels"}),e.jsx(r,{children:s.map(n=>e.jsx(a,{variant:"outline",size:"sm",children:n},n))})]})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4 mb-4",children:[e.jsx("p",{className:"text-sm text-text-weak mb-2",children:"grid-cols-[200px_1fr]"}),e.jsxs("div",{className:"grid grid-cols-[200px_1fr] gap-4",children:[e.jsx("div",{className:"text-sm font-semibold",children:"Payment Channels"}),e.jsx(r,{children:s.map(n=>e.jsx(a,{variant:"outline",size:"sm",children:n},n))})]})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4 mb-4",children:[e.jsx("p",{className:"text-sm text-text-weak mb-2",children:"grid-cols-[150px_1fr]"}),e.jsxs("div",{className:"grid grid-cols-[150px_1fr] gap-4",children:[e.jsx("div",{className:"text-sm font-semibold",children:"Payment Channels"}),e.jsx(r,{children:s.map(n=>e.jsx(a,{variant:"outline",size:"sm",children:n},n))})]})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("p",{className:"text-sm text-text-weak mb-2",children:"grid-cols-[200px_1fr_1fr] (actual dialog layout)"}),e.jsxs("div",{className:"grid grid-cols-[200px_1fr_1fr] gap-4",children:[e.jsx("div",{className:"text-sm font-semibold",children:"Payment Channels"}),e.jsx(r,{className:"col-span-2",children:s.map(n=>e.jsx(a,{variant:"outline",size:"sm",children:n},n))})]})]})]})})}},O={name:"Varying Channel Names (Real Data)",args:{},render:()=>{const s=["BANK PERMATA","BANK MANDIRI","BANK CENTRAL ASIA","BANK JTRUST INDONESIA","BANK MAYBANK","DANA","OVO","QRIS","BANK ARTHA GRAHA","VA BANK ARTHA GRAHA","VA BANK CENTRAL ASIA","VA BANK DANAMON","VA MAYBANK INDONESIA","VA BANK NEO COMMERCE","VA BANK NEGARA INDONESIA","VA BANK RAKYAT INDONESIA","VA BANK SYARIAH INDONESIA"];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"All Payment Channels"}),e.jsx(r,{children:s.map(n=>e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:n},n))})]}),e.jsxs("div",{className:"max-w-[952px] border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Dialog Width (952px)"}),e.jsxs("div",{className:"grid grid-cols-[200px_1fr_1fr] gap-4",children:[e.jsx("div",{className:"text-sm font-semibold text-text-weak",children:"Channels"}),e.jsx(r,{className:"col-span-2",children:s.slice(0,10).map(n=>e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:n},n))})]})]}),e.jsxs("div",{className:"max-w-[600px] border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Narrow Container (600px)"}),e.jsx(r,{children:s.slice(0,8).map(n=>e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:n},n))})]})]})}},k={name:"Custom Overflow Badge Style",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"max-w-sm border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Primary Outline Overflow"}),e.jsxs(r,{overflowBadgeProps:{theme:"primary",variant:"outline"},children:[e.jsx(a,{theme:"primary",children:"JavaScript"}),e.jsx(a,{theme:"primary",children:"TypeScript"}),e.jsx(a,{theme:"primary",children:"React"}),e.jsx(a,{theme:"primary",children:"Node.js"}),e.jsx(a,{theme:"primary",children:"GraphQL"}),e.jsx(a,{theme:"primary",children:"PostgreSQL"})]})]}),e.jsxs("div",{className:"max-w-sm border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Destructive Solid Overflow"}),e.jsxs(r,{overflowBadgeProps:{theme:"destructive",variant:"solid"},children:[e.jsx(a,{theme:"neutral",children:"Error 1"}),e.jsx(a,{theme:"neutral",children:"Error 2"}),e.jsx(a,{theme:"neutral",children:"Error 3"}),e.jsx(a,{theme:"neutral",children:"Error 4"}),e.jsx(a,{theme:"neutral",children:"Error 5"})]})]})]})},D={name:"Responsive Demo",args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-weak",children:"Resize your browser to see badges hide/show"}),e.jsx("div",{className:"border border-border-default rounded-lg p-4",children:e.jsxs(r,{children:[e.jsxs(a,{theme:"success",variant:"soft",children:[e.jsx(Oe,{className:"h-3 w-3"}),"Completed"]}),e.jsxs(a,{theme:"warning",variant:"soft",children:[e.jsx(ke,{className:"h-3 w-3"}),"In Progress"]}),e.jsxs(a,{theme:"primary",variant:"soft",children:[e.jsx(De,{className:"h-3 w-3"}),"Information"]}),e.jsxs(a,{theme:"destructive",variant:"soft",children:[e.jsx(Ve,{className:"h-3 w-3"}),"Critical"]}),e.jsx(a,{theme:"neutral",variant:"soft",children:"Draft"}),e.jsx(a,{theme:"success",variant:"soft",children:"Published"}),e.jsx(a,{theme:"warning",variant:"soft",children:"Review"})]})})]})},V={name:"With Overflow Callback",args:{},render:()=>{const[s,n]=b.useState(0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"max-w-md border border-border-default rounded-lg p-4",children:e.jsxs(r,{onOverflowChange:n,children:[e.jsx(a,{children:"JavaScript"}),e.jsx(a,{children:"TypeScript"}),e.jsx(a,{children:"React"}),e.jsx(a,{children:"Node.js"}),e.jsx(a,{children:"GraphQL"}),e.jsx(a,{children:"PostgreSQL"}),e.jsx(a,{children:"Redis"}),e.jsx(a,{children:"Docker"})]})}),e.jsxs("p",{className:"text-sm text-text-weak",children:["Hidden badges: ",s]})]})}},M={name:"With Truncation (Long Badge Names)",args:{},render:()=>{const s=["VA BANK SYARIAH INDONESIA JAKARTA BRANCH","VA BANK NEGARA INDONESIA INTERNATIONAL","VA BANK NEO COMMERCE DIGITAL PAYMENT SOLUTION","VA BANK DANAMON ONLINE SERVICES","OVO DIGITAL WALLET PAYMENT","VA BANK MANDIRI INTERNATIONAL CORPORATE","VA BANK CENTRAL ASIA PREMIUM SERVICE","GOPAY DIGITAL PAYMENT PLATFORM","DANA MOBILE WALLET SERVICE"];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Without Truncation (Default)"}),e.jsx("p",{className:"text-xs text-text-weak mb-3",children:"Long badge names will push layout"}),e.jsx(r,{children:s.slice(0,5).map(n=>e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:n},n))})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"With Truncation (maxBadgeWidth: 150)"}),e.jsx("p",{className:"text-xs text-text-weak mb-3",children:"Hover over badges to see full content in tooltip"}),e.jsx(r,{maxBadgeWidth:150,truncateBadges:!0,children:s.slice(0,5).map(n=>e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:n},n))})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Different Max Widths"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-weak mb-2",children:"maxBadgeWidth: 100px"}),e.jsx(r,{maxBadgeWidth:100,truncateBadges:!0,children:s.slice(0,4).map(n=>e.jsx(a,{variant:"outline",theme:"primary",size:"sm",children:n},n))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-weak mb-2",children:"maxBadgeWidth: 200px"}),e.jsx(r,{maxBadgeWidth:200,truncateBadges:!0,children:s.slice(0,4).map(n=>e.jsx(a,{variant:"outline",theme:"success",size:"sm",children:n},n))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-weak mb-2",children:'maxBadgeWidth: "8rem"'}),e.jsx(r,{maxBadgeWidth:"8rem",truncateBadges:!0,children:s.slice(0,4).map(n=>e.jsx(a,{variant:"outline",theme:"warning",size:"sm",children:n},n))})]})]})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Truncation with Overflow"}),e.jsx("p",{className:"text-xs text-text-weak mb-3",children:"Combines truncation with overflow handling"}),e.jsx("div",{className:"max-w-[512px] border border-border-weak rounded p-3",children:e.jsxs(r,{maxBadgeWidth:120,truncateBadges:!0,children:[e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:"OVO"}),s.map(n=>e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:n},n))]})})]}),e.jsxs("div",{className:"max-w-[952px] border-2 border-border-default rounded-lg shadow-xl",children:[e.jsx("div",{className:"px-6 py-4 border-b border-border-default",children:e.jsx("h2",{className:"text-xl font-semibold",children:"Payment Channel Configuration"})}),e.jsx("div",{className:"px-6 py-4",children:e.jsxs("div",{className:"grid grid-cols-[200px_1fr_1fr] gap-4",children:[e.jsx("div",{children:e.jsx("p",{className:"text-sm font-semibold text-text-weak",children:"Available Channels"})}),e.jsx("div",{className:"col-span-2",children:e.jsx(r,{maxBadgeWidth:180,truncateBadges:!0,children:s.map(n=>e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:n},n))})})]})})]})]})}},W={name:"With Middle Truncation",args:{},render:()=>{const s=["document_final_version_2024_01_15_reviewed_approved.pdf","user_profile_image_1234567890_compressed_optimized.jpg","transaction_TXN2024011500001234567890_completed.json","export_data_customers_january_2024_filtered_sorted.csv","backup_database_production_2024_01_15_03_00_00.sql","log_application_error_2024_01_15_detailed_trace.txt"],n=["0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7","bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh","addr1q9nxwl2j8x5tqrsp9xt6k2q7r8c5qv5nj9p5q8x9j7k8x5tqrsp9","cosmos1yl6hdjhmkf37639730gffanpzndzdpmhwlkfhr"];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Middle Truncation for File Names"}),e.jsx("p",{className:"text-xs text-text-weak mb-3",children:"Preserves file extension visibility"}),e.jsx(r,{maxBadgeWidth:200,truncateBadges:!0,middleTruncate:!0,children:s.map(t=>e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:t},t))})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Middle Truncation for Wallet Addresses"}),e.jsx("p",{className:"text-xs text-text-weak mb-3",children:"Shows beginning and end of addresses for verification"}),e.jsx(r,{maxBadgeWidth:150,truncateBadges:!0,middleTruncate:!0,children:n.map(t=>e.jsx(a,{variant:"outline",theme:"primary",size:"sm",children:t},t))})]}),e.jsxs("div",{className:"border border-border-default rounded-lg p-4",children:[e.jsx("h3",{className:"text-sm font-semibold mb-3",children:"Comparison: Regular vs Middle Truncation"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-weak mb-2",children:"Regular Truncation (End)"}),e.jsxs(r,{maxBadgeWidth:180,truncateBadges:!0,children:[e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:"transaction_TXN2024011500001234567890_completed.json"}),e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:"0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7"}),e.jsx(a,{variant:"outline",theme:"neutral",size:"sm",children:"document_final_version_2024_01_15.pdf"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-weak mb-2",children:"Middle Truncation"}),e.jsxs(r,{maxBadgeWidth:180,truncateBadges:!0,middleTruncate:!0,children:[e.jsx(a,{variant:"outline",theme:"success",size:"sm",children:"transaction_TXN2024011500001234567890_completed.json"}),e.jsx(a,{variant:"outline",theme:"success",size:"sm",children:"0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7"}),e.jsx(a,{variant:"outline",theme:"success",size:"sm",children:"document_final_version_2024_01_15.pdf"})]})]})]})]})]})}};var U,J,X;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {} as any,
  render: () => <BadgeGroup>
      <Badge theme="success">Active</Badge>
      <Badge theme="primary">Premium</Badge>
      <Badge theme="warning">Pending</Badge>
      <Badge theme="neutral">Draft</Badge>
      <Badge theme="destructive">Expired</Badge>
    </BadgeGroup>
}`,...(X=(J=E.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var $,Z,ee;R.parameters={...R.parameters,docs:{...($=R.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ee=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,se;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,te,de;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(de=(te=_.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};var ie,le,oe;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "Payment Channel Dialog (Real Usage)",
  args: {} as any,
  render: () => {
    const paymentChannels = ["VA BANK SYARIAH INDONESIA", "VA BANK NEGARA INDONESIA", "VA BANK NEO COMMERCE", "VA BANK DANAMON", "OVO", "VA BANK MANDIRI", "VA BANK CENTRAL ASIA"];
    return <div className="w-full">
        {/* Simulating Dialog Content */}
        <div className="bg-bg-default border-2 border-border-default rounded-lg shadow-xl max-w-[952px] mx-auto">
          {/* Dialog Header */}
          <div className="px-6 py-4 border-b border-border-default">
            <h2 className="text-xl font-semibold">
              Edit Payment Channel Settings
            </h2>
          </div>

          {/* Dialog Body */}
          <div className="px-6 py-4">
            <form>
              {/* Grid Layout - Matching the actual implementation */}
              <div className="grid grid-cols-[200px_1fr_1fr] gap-4">
                {/* Channels Section */}
                <div>
                  <p className="text-sm font-semibold text-text-weak">
                    Channels
                  </p>
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
                  <p className="text-sm font-semibold text-text-weak">
                    Deposit Expiry
                  </p>
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
                  <p className="text-sm font-semibold text-text-weak">
                    Channel Info
                  </p>
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
                  <p className="text-sm font-semibold text-text-weak">
                    Fee Info
                  </p>
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
}`,...(oe=(le=I.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var me,ce,pe;G.parameters={...G.parameters,docs:{...(me=G.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "Responsive Grid Layout",
  args: {} as any,
  render: () => {
    const channels = ["QRIS", "OVO", "DANA", "VA BANK ARTHA GRAHA", "VA MAYBANK INDONESIA", "VA BANK NEO COMMERCE", "VA BANK NEGARA INDONESIA"];
    return <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Different Grid Column Widths
          </h3>

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
            <p className="text-sm text-text-weak mb-2">
              grid-cols-[200px_1fr_1fr] (actual dialog layout)
            </p>
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
}`,...(pe=(ce=G.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var xe,ue,he;O.parameters={...O.parameters,docs:{...(xe=O.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
          <h3 className="text-sm font-semibold mb-3">
            Narrow Container (600px)
          </h3>
          <BadgeGroup>
            {realChannels.slice(0, 8).map(channel => <Badge key={channel} variant="outline" theme="neutral" size="sm">
                {channel}
              </Badge>)}
          </BadgeGroup>
        </div>
      </div>;
  }
}`,...(he=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,be,ve;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(be=k.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var Ne,fe,Be;D.parameters={...D.parameters,docs:{...(Ne=D.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: "Responsive Demo",
  args: {} as any,
  render: () => <div className="space-y-4">
      <p className="text-sm text-text-weak">
        Resize your browser to see badges hide/show
      </p>
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
          <Badge theme="neutral" variant="soft">
            Draft
          </Badge>
          <Badge theme="success" variant="soft">
            Published
          </Badge>
          <Badge theme="warning" variant="soft">
            Review
          </Badge>
        </BadgeGroup>
      </div>
    </div>
}`,...(Be=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:Be.source}}};var Ae,je,ye;V.parameters={...V.parameters,docs:{...(Ae=V.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
        <p className="text-sm text-text-weak">Hidden badges: {overflowCount}</p>
      </div>;
  }
}`,...(ye=(je=V.parameters)==null?void 0:je.docs)==null?void 0:ye.source}}};var we,Ce,Te;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: "With Truncation (Long Badge Names)",
  args: {} as any,
  render: () => {
    const longChannelNames = ["VA BANK SYARIAH INDONESIA JAKARTA BRANCH", "VA BANK NEGARA INDONESIA INTERNATIONAL", "VA BANK NEO COMMERCE DIGITAL PAYMENT SOLUTION", "VA BANK DANAMON ONLINE SERVICES", "OVO DIGITAL WALLET PAYMENT", "VA BANK MANDIRI INTERNATIONAL CORPORATE", "VA BANK CENTRAL ASIA PREMIUM SERVICE", "GOPAY DIGITAL PAYMENT PLATFORM", "DANA MOBILE WALLET SERVICE"];
    return <div className="space-y-6">
        {/* Without truncation - default behavior */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-semibold mb-3">
            Without Truncation (Default)
          </h3>
          <p className="text-xs text-text-weak mb-3">
            Long badge names will push layout
          </p>
          <BadgeGroup>
            {longChannelNames.slice(0, 5).map(channel => <Badge key={channel} variant="outline" theme="neutral" size="sm">
                {channel}
              </Badge>)}
          </BadgeGroup>
        </div>

        {/* With truncation enabled */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-semibold mb-3">
            With Truncation (maxBadgeWidth: 150)
          </h3>
          <p className="text-xs text-text-weak mb-3">
            Hover over badges to see full content in tooltip
          </p>
          <BadgeGroup maxBadgeWidth={150} truncateBadges>
            {longChannelNames.slice(0, 5).map(channel => <Badge key={channel} variant="outline" theme="neutral" size="sm">
                {channel}
              </Badge>)}
          </BadgeGroup>
        </div>

        {/* Different max widths */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-semibold mb-3">Different Max Widths</h3>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-text-weak mb-2">
                maxBadgeWidth: 100px
              </p>
              <BadgeGroup maxBadgeWidth={100} truncateBadges>
                {longChannelNames.slice(0, 4).map(channel => <Badge key={channel} variant="outline" theme="primary" size="sm">
                    {channel}
                  </Badge>)}
              </BadgeGroup>
            </div>

            <div>
              <p className="text-xs text-text-weak mb-2">
                maxBadgeWidth: 200px
              </p>
              <BadgeGroup maxBadgeWidth={200} truncateBadges>
                {longChannelNames.slice(0, 4).map(channel => <Badge key={channel} variant="outline" theme="success" size="sm">
                    {channel}
                  </Badge>)}
              </BadgeGroup>
            </div>

            <div>
              <p className="text-xs text-text-weak mb-2">
                maxBadgeWidth: "8rem"
              </p>
              <BadgeGroup maxBadgeWidth="8rem" truncateBadges>
                {longChannelNames.slice(0, 4).map(channel => <Badge key={channel} variant="outline" theme="warning" size="sm">
                    {channel}
                  </Badge>)}
              </BadgeGroup>
            </div>
          </div>
        </div>

        {/* In constrained container with overflow */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-semibold mb-3">
            Truncation with Overflow
          </h3>
          <p className="text-xs text-text-weak mb-3">
            Combines truncation with overflow handling
          </p>

          <div className="max-w-[512px] border border-border-weak rounded p-3">
            <BadgeGroup maxBadgeWidth={120} truncateBadges>
              <Badge variant="outline" theme="neutral" size="sm">
                OVO
              </Badge>
              {longChannelNames.map(channel => <Badge key={channel} variant="outline" theme="neutral" size="sm">
                  {channel}
                </Badge>)}
            </BadgeGroup>
          </div>
        </div>

        {/* Real-world usage in dialog/form */}
        <div className="max-w-[952px] border-2 border-border-default rounded-lg shadow-xl">
          <div className="px-6 py-4 border-b border-border-default">
            <h2 className="text-xl font-semibold">
              Payment Channel Configuration
            </h2>
          </div>

          <div className="px-6 py-4">
            <div className="grid grid-cols-[200px_1fr_1fr] gap-4">
              <div>
                <p className="text-sm font-semibold text-text-weak">
                  Available Channels
                </p>
              </div>
              <div className="col-span-2">
                <BadgeGroup maxBadgeWidth={180} truncateBadges>
                  {longChannelNames.map(channel => <Badge key={channel} variant="outline" theme="neutral" size="sm">
                      {channel}
                    </Badge>)}
                </BadgeGroup>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(Te=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var Ee,Re,Se;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: "With Middle Truncation",
  args: {} as any,
  render: () => {
    // Example with file paths, transaction IDs, or other content where middle truncation is useful
    const fileNames = ["document_final_version_2024_01_15_reviewed_approved.pdf", "user_profile_image_1234567890_compressed_optimized.jpg", "transaction_TXN2024011500001234567890_completed.json", "export_data_customers_january_2024_filtered_sorted.csv", "backup_database_production_2024_01_15_03_00_00.sql", "log_application_error_2024_01_15_detailed_trace.txt"];
    const walletAddresses = ["0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7", "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh", "addr1q9nxwl2j8x5tqrsp9xt6k2q7r8c5qv5nj9p5q8x9j7k8x5tqrsp9", "cosmos1yl6hdjhmkf37639730gffanpzndzdpmhwlkfhr"];
    return <div className="space-y-6">
        {/* File names with middle truncation */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-semibold mb-3">
            Middle Truncation for File Names
          </h3>
          <p className="text-xs text-text-weak mb-3">
            Preserves file extension visibility
          </p>
          <BadgeGroup maxBadgeWidth={200} truncateBadges middleTruncate>
            {fileNames.map(fileName => <Badge key={fileName} variant="outline" theme="neutral" size="sm">
                {fileName}
              </Badge>)}
          </BadgeGroup>
        </div>

        {/* Wallet addresses with middle truncation */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-semibold mb-3">
            Middle Truncation for Wallet Addresses
          </h3>
          <p className="text-xs text-text-weak mb-3">
            Shows beginning and end of addresses for verification
          </p>
          <BadgeGroup maxBadgeWidth={150} truncateBadges middleTruncate>
            {walletAddresses.map(address => <Badge key={address} variant="outline" theme="primary" size="sm">
                {address}
              </Badge>)}
          </BadgeGroup>
        </div>

        {/* Comparison: Regular vs Middle Truncation */}
        <div className="border border-border-default rounded-lg p-4">
          <h3 className="text-sm font-semibold mb-3">
            Comparison: Regular vs Middle Truncation
          </h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-xs text-text-weak mb-2">
                Regular Truncation (End)
              </p>
              <BadgeGroup maxBadgeWidth={180} truncateBadges>
                <Badge variant="outline" theme="neutral" size="sm">
                  transaction_TXN2024011500001234567890_completed.json
                </Badge>
                <Badge variant="outline" theme="neutral" size="sm">
                  0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7
                </Badge>
                <Badge variant="outline" theme="neutral" size="sm">
                  document_final_version_2024_01_15.pdf
                </Badge>
              </BadgeGroup>
            </div>

            <div>
              <p className="text-xs text-text-weak mb-2">
                Middle Truncation
              </p>
              <BadgeGroup maxBadgeWidth={180} truncateBadges middleTruncate>
                <Badge variant="outline" theme="success" size="sm">
                  transaction_TXN2024011500001234567890_completed.json
                </Badge>
                <Badge variant="outline" theme="success" size="sm">
                  0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7
                </Badge>
                <Badge variant="outline" theme="success" size="sm">
                  document_final_version_2024_01_15.pdf
                </Badge>
              </BadgeGroup>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(Se=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Se.source}}};const va=["Default","WithOverflow","MaxVisible","DifferentGaps","PaymentChannelDialog","ResponsiveGridLayout","VaryingChannelNames","CustomOverflowBadge","ResponsiveDemo","WithCallback","WithTruncation","WithMiddleTruncation"];export{k as CustomOverflowBadge,E as Default,_ as DifferentGaps,S as MaxVisible,I as PaymentChannelDialog,D as ResponsiveDemo,G as ResponsiveGridLayout,O as VaryingChannelNames,V as WithCallback,W as WithMiddleTruncation,R as WithOverflow,M as WithTruncation,va as __namedExportsOrder,ba as default};
