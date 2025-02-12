import{j as e}from"./jsx-runtime-BhBAkL08.js";import{c as y}from"./cn-C-5SdYIA.js";import"./index-caxmlYbZ.js";const x=({children:f,className:b})=>{const a=f.split(`
`);return e.jsx("div",{className:y("font-mono text-sm bg-bg-weaker rounded-radius-sm overflow-hidden border border-default text-text-weak",b),children:e.jsx("pre",{className:"relative",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"py-4 leading-[26px] pl-4 pr-4 text-neutral select-none bg-bg-weaker border-r border-border-default",children:a.map((s,t)=>e.jsx("div",{className:"text-center text-text-weak ",children:t+1},t+1))}),e.jsx("div",{className:"py-4 px-4 overflow-auto ",children:a.map((s,t)=>e.jsx("div",{className:"whitespace-pre leading-[26px] text-text-weak",children:s||" "},t))})]})})})};x.__docgenInfo={description:"",methods:[],displayName:"Code",props:{children:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Xenith UI/Components/Code",component:x,tags:["autodocs"]},o={args:{children:`POST /webhook-endpoint HTTP/1.1
Host: merchantswebsite.com
Content-Type: application/json
Authorization: Bearer your-webhook-token
User-Agent: Payment-Aggregator/1.0
X-Webhook-Event: transaction.created
X-Webhook-Signature:
sha256=af3f9c17c8bb6bfc89cf8dd782a497`}},r={args:{children:`const greeting = "Hello World";
console.log(greeting);`}},n={args:{children:`// Regular import
import { useState } from 'react';

// Very long line of code that demonstrates horizontal scrolling
const extremelyLongVariableName = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"].map((item, index) => ({ id: index, value: item, timestamp: new Date().toISOString(), metadata: { category: "test", subcategory: "example", tags: ["sample", "demonstration", "horizontal-scroll"], description: "This is a very long line of code that demonstrates how the Code component handles horizontal overflow with proper scrolling functionality" } }));

// Normal line
console.log('Done');`}};var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: \`POST /webhook-endpoint HTTP/1.1
Host: merchantswebsite.com
Content-Type: application/json
Authorization: Bearer your-webhook-token
User-Agent: Payment-Aggregator/1.0
X-Webhook-Event: transaction.created
X-Webhook-Signature:
sha256=af3f9c17c8bb6bfc89cf8dd782a497\`
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: \`const greeting = "Hello World";
console.log(greeting);\`
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,h,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: \`// Regular import
import { useState } from 'react';

// Very long line of code that demonstrates horizontal scrolling
const extremelyLongVariableName = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"].map((item, index) => ({ id: index, value: item, timestamp: new Date().toISOString(), metadata: { category: "test", subcategory: "example", tags: ["sample", "demonstration", "horizontal-scroll"], description: "This is a very long line of code that demonstrates how the Code component handles horizontal overflow with proper scrolling functionality" } }));

// Normal line
console.log('Done');\`
  }
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const N=["Default","ShortCode","LongLine"];export{o as Default,n as LongLine,r as ShortCode,N as __namedExportsOrder,S as default};
