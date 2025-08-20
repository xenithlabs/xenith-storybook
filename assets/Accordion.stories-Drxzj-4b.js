import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as q}from"./index-DRjF_FHU.js";import{A as r,a as n,b as t,c as s}from"./Accordion-DdEIhkOh.js";import{I as h}from"./Icon-CTnhpE1d.js";import{F as _}from"./info-Cre7IJy9.js";import{F as H}from"./check-circle-DNKzEdhW.js";import{F as K}from"./secure_payment-C3BVKMEA.js";import"./index-HZDBD2ik.js";import"./index-CxRLcT2J.js";import"./index-CAHntWCK.js";import"./cn-8RyR4BqC.js";import"./chevron-down-CyV3wpL8.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";const le={title:"Xenith UI/Components/Accordion",component:r,parameters:{docs:{description:{component:`
## Overview
The Accordion component is a vertically stacked set of interactive headings that each reveal an associated section of content. It's built on top of Radix UI's Accordion primitive, providing accessibility and customizable behavior out of the box.

### Key Features
- **Accessible**: Follows WAI-ARIA design patterns for keyboard navigation and screen reader support
- **Flexible**: Supports single or multiple expanded items
- **Customizable**: Can be styled and animated according to your needs
- **Composable**: Built with separate trigger and content components for maximum flexibility

### Usage
\`\`\`tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@xenithlabs/xenith-ui";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Accordion Header</AccordionTrigger>
    <AccordionContent>
      Accordion content goes here...
    </AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`

### Component Props

#### AccordionItem Props
- **value** (string, required): A unique value for the item
- **showBorder** (boolean): Whether to show bottom border. Default: true
- **className** (string): Additional CSS classes
- **disabled** (boolean): Whether the item is disabled

#### AccordionTrigger Props
- **rightComponent** (ReactNode): Component to display on the right side of the trigger
- **className** (string): Additional CSS classes
- **children** (ReactNode): The trigger content

#### AccordionContent Props
- **className** (string): Additional CSS classes
- **children** (ReactNode): The content to be displayed when expanded
        `}}},argTypes:{type:{control:{type:"radio"},options:["single","multiple"],description:"Determines whether one or multiple items can be opened at the same time",table:{type:{summary:'"single" | "multiple"'},defaultValue:{summary:'"single"'}}},collapsible:{control:{type:"boolean"},description:"When type is 'single', allows closing content when clicking on an open item",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},defaultValue:{control:{type:"text"},description:"The value of the item to expand by default (uncontrolled)",table:{type:{summary:"string | string[]"}}},value:{control:{type:"text"},description:"The controlled value of the item(s) to expand",table:{type:{summary:"string | string[]"}}},onValueChange:{action:"onValueChange",description:"Event handler called when the expanded state changes",table:{type:{summary:"(value: string | string[]) => void"}}},disabled:{control:{type:"boolean"},description:"When true, prevents the user from interacting with the accordion",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},dir:{control:{type:"radio"},options:["ltr","rtl"],description:"The reading direction of the accordion",table:{type:{summary:'"ltr" | "rtl"'},defaultValue:{summary:'"ltr"'}}},orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the accordion",table:{type:{summary:'"horizontal" | "vertical"'},defaultValue:{summary:'"vertical"'}}}},args:{type:"single",collapsible:!0},render:g=>e.jsxs(r,{...g,children:[e.jsxs(n,{value:"item-1",children:[e.jsx(t,{children:"Is it accessible?"}),e.jsx(s,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(n,{value:"item-2",children:[e.jsx(t,{children:"Is it styled?"}),e.jsx(s,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),e.jsxs(n,{value:"item-3",children:[e.jsx(t,{children:"Is it animated?"}),e.jsx(s,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})},i={},a={args:{type:"multiple",defaultValue:["item-1","item-3"]}},c={args:{defaultValue:"item-2"}},l={render:()=>e.jsx(r,{type:"single",collapsible:!0,children:e.jsxs(n,{value:"item-1",showBorder:!1,children:[e.jsx(t,{rightComponent:e.jsx(h,{icon:e.jsx(K,{})}),children:"Is it accessible?"}),e.jsx(s,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]})})},d={render:()=>e.jsxs(r,{type:"single",collapsible:!0,className:"space-y-2",children:[e.jsxs(n,{value:"item-1",className:"bg-surface-subtle rounded-lg px-4",showBorder:!1,children:[e.jsx(t,{className:"hover:no-underline",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{icon:e.jsx(_,{}),className:"h-4 w-4 text-info"}),e.jsx("span",{children:"Information"})]})}),e.jsx(s,{children:"This is an informational message with custom styling."})]}),e.jsxs(n,{value:"item-2",className:"bg-surface-subtle rounded-lg px-4",showBorder:!1,children:[e.jsx(t,{className:"hover:no-underline",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{icon:e.jsx(H,{}),className:"h-4 w-4 text-success"}),e.jsx("span",{children:"Success"})]})}),e.jsx(s,{children:"This indicates a successful operation or state."})]})]})},m={name:"Payment Channel Status (Real Example)",render:()=>e.jsx(r,{type:"single",collapsible:!0,children:e.jsxs(n,{value:"USD",className:"border-none",children:[e.jsx(t,{className:"p-0 [&>div]:px-0 [&>div]:py-2.5 [&>div]:border-none",children:e.jsxs("div",{className:"flex items-center justify-between w-full p-4 border-b border-border-default",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"🇺🇸"}),e.jsx("span",{className:"font-semibold text-text-weak",children:"United States Dollar (USD)"})]}),e.jsxs("div",{className:"flex items-center gap-3 text-sm text-text-weak",children:[e.jsx("span",{children:"Active (3)"}),e.jsx("span",{children:"Inactive (1)"})]})]})}),e.jsx(s,{children:e.jsxs("div",{className:"p-4 space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center py-2",children:[e.jsx("span",{children:"Credit Card"}),e.jsx("span",{className:"text-success",children:"Active"})]}),e.jsxs("div",{className:"flex justify-between items-center py-2",children:[e.jsx("span",{children:"Bank Transfer"}),e.jsx("span",{className:"text-success",children:"Active"})]}),e.jsxs("div",{className:"flex justify-between items-center py-2",children:[e.jsx("span",{children:"E-Wallet"}),e.jsx("span",{className:"text-success",children:"Active"})]}),e.jsxs("div",{className:"flex justify-between items-center py-2",children:[e.jsx("span",{children:"Cryptocurrency"}),e.jsx("span",{className:"text-muted-foreground",children:"Inactive"})]})]})})]})})},p={name:"Filter Accordion (Real Example)",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{type:"multiple",defaultValue:["filters"],children:e.jsxs(n,{value:"filters",children:[e.jsx(t,{children:e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("span",{children:"Applied Filters"}),e.jsx("span",{className:"text-xs bg-surface-subtle px-2 py-0.5 rounded",children:"3"})]})}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-sm",children:"Date Range"}),e.jsx("div",{className:"text-sm text-text-weak",children:"Jan 1, 2024 - Jan 31, 2024"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-sm",children:"Status (2)"}),e.jsx("div",{className:"text-sm text-text-weak",children:"Completed, Pending"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-sm",children:"Amount"}),e.jsx("div",{className:"text-sm text-text-weak",children:"Min. $100 - Max. $10,000"})]})]})})]})})})},u={render:()=>e.jsxs(r,{type:"single",collapsible:!0,children:[e.jsxs(n,{value:"item-1",showBorder:!1,children:[e.jsx(t,{children:"First item without border"}),e.jsx(s,{children:"This accordion item has no bottom border."})]}),e.jsxs(n,{value:"item-2",showBorder:!1,children:[e.jsx(t,{children:"Second item without border"}),e.jsx(s,{children:"This accordion item also has no bottom border."})]})]})},x={render:function(){const[J,o]=q.useState("item-1");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>o("item-1"),className:"px-3 py-1 bg-primary text-white rounded text-sm",children:"Open Item 1"}),e.jsx("button",{onClick:()=>o("item-2"),className:"px-3 py-1 bg-primary text-white rounded text-sm",children:"Open Item 2"}),e.jsx("button",{onClick:()=>o(void 0),className:"px-3 py-1 bg-secondary text-white rounded text-sm",children:"Close All"})]}),e.jsxs(r,{type:"single",value:J,onValueChange:o,collapsible:!0,children:[e.jsxs(n,{value:"item-1",children:[e.jsx(t,{children:"Controlled Item 1"}),e.jsx(s,{children:"This accordion is controlled externally."})]}),e.jsxs(n,{value:"item-2",children:[e.jsx(t,{children:"Controlled Item 2"}),e.jsx(s,{children:"You can control which item is open using the buttons above."})]})]})]})}};var v,f,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var A,y,j;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: "multiple",
    defaultValue: ["item-1", "item-3"]
  }
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var N,C,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    defaultValue: "item-2"
  }
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var I,T,S;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <Accordion type="single" collapsible>
        <AccordionItem value="item-1" showBorder={false}>
          <AccordionTrigger rightComponent={<Icon icon={<SecurePaymentIcon />} />}>
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>;
  }
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var V,k,R;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    return <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="item-1" className="bg-surface-subtle rounded-lg px-4" showBorder={false}>
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <Icon icon={<InfoIcon />} className="h-4 w-4 text-info" />
              <span>Information</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            This is an informational message with custom styling.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="bg-surface-subtle rounded-lg px-4" showBorder={false}>
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <Icon icon={<CheckCircleIcon />} className="h-4 w-4 text-success" />
              <span>Success</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            This indicates a successful operation or state.
          </AccordionContent>
        </AccordionItem>
      </Accordion>;
  }
}`,...(R=(k=d.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var F,B,D;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Payment Channel Status (Real Example)",
  render: () => {
    return <Accordion type="single" collapsible>
        <AccordionItem value="USD" className="border-none">
          <AccordionTrigger className="p-0 [&>div]:px-0 [&>div]:py-2.5 [&>div]:border-none">
            <div className="flex items-center justify-between w-full p-4 border-b border-border-default">
              <div className="flex items-center gap-2">
                <span>🇺🇸</span>
                <span className="font-semibold text-text-weak">
                  United States Dollar (USD)
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-weak">
                <span>Active (3)</span>
                <span>Inactive (1)</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center py-2">
                <span>Credit Card</span>
                <span className="text-success">Active</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>Bank Transfer</span>
                <span className="text-success">Active</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>E-Wallet</span>
                <span className="text-success">Active</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>Cryptocurrency</span>
                <span className="text-muted-foreground">Inactive</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>;
  }
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var W,P,E;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Filter Accordion (Real Example)",
  render: () => {
    return <div className="w-80">
        <Accordion type="multiple" defaultValue={["filters"]}>
          <AccordionItem value="filters">
            <AccordionTrigger>
              <div className="flex items-center justify-between w-full">
                <span>Applied Filters</span>
                <span className="text-xs bg-surface-subtle px-2 py-0.5 rounded">3</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-sm">Date Range</div>
                  <div className="text-sm text-text-weak">Jan 1, 2024 - Jan 31, 2024</div>
                </div>
                <div>
                  <div className="font-semibold text-sm">Status (2)</div>
                  <div className="text-sm text-text-weak">Completed, Pending</div>
                </div>
                <div>
                  <div className="font-semibold text-sm">Amount</div>
                  <div className="text-sm text-text-weak">Min. $100 - Max. $10,000</div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>;
  }
}`,...(E=(P=p.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var U,Y,M;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    return <Accordion type="single" collapsible>
        <AccordionItem value="item-1" showBorder={false}>
          <AccordionTrigger>First item without border</AccordionTrigger>
          <AccordionContent>
            This accordion item has no bottom border.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" showBorder={false}>
          <AccordionTrigger>Second item without border</AccordionTrigger>
          <AccordionContent>
            This accordion item also has no bottom border.
          </AccordionContent>
        </AccordionItem>
      </Accordion>;
  }
}`,...(M=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var O,$,z;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: function ControlledAccordion() {
    const [value, setValue] = React.useState<string | undefined>("item-1");
    return <div className="space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setValue("item-1")} className="px-3 py-1 bg-primary text-white rounded text-sm">
            Open Item 1
          </button>
          <button onClick={() => setValue("item-2")} className="px-3 py-1 bg-primary text-white rounded text-sm">
            Open Item 2
          </button>
          <button onClick={() => setValue(undefined)} className="px-3 py-1 bg-secondary text-white rounded text-sm">
            Close All
          </button>
        </div>
        <Accordion type="single" value={value} onValueChange={setValue} collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Controlled Item 1</AccordionTrigger>
            <AccordionContent>
              This accordion is controlled externally.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Controlled Item 2</AccordionTrigger>
            <AccordionContent>
              You can control which item is open using the buttons above.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>;
  }
}`,...(z=($=x.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const de=["Default","Multiple","WithDefaultValue","WithRightComponent","CustomStyling","PaymentChannelStatus","FilterAccordion","NoBorder","Controlled"];export{x as Controlled,d as CustomStyling,i as Default,p as FilterAccordion,a as Multiple,u as NoBorder,m as PaymentChannelStatus,c as WithDefaultValue,l as WithRightComponent,de as __namedExportsOrder,le as default};
