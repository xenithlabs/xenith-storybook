import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{S as c}from"./Skeletonize-DZPbcDcL.js";import{F as K}from"./banknote-Ds1E6alo.js";import{F as V}from"./user-COLMXspT.js";import{F as i}from"./secure_payment-C3BVKMEA.js";import{F as ae}from"./chevron-right-D4FvqfWr.js";import{F as te}from"./clock-DRhx3Wks.js";import{C as t}from"./Card-C5rr-ZzX.js";import{H as s}from"./Heading-DjlBwQyS.js";import{T as a}from"./Text-C8HBwI4b.js";import{D as d}from"./Divider-CIm89-oy.js";import{I as n}from"./Icon-CTnhpE1d.js";import{B as Q}from"./Badge-CQf0SPqP.js";import{A as Z}from"./Avatar-BW7BzErr.js";import{B as m}from"./Button-DZCl7_eM.js";import"./index-DRjF_FHU.js";import"./Skeleton-CBnrsDVZ.js";import"./cn-8RyR4BqC.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-x1yxmyQd.js";import"./index-CxRLcT2J.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";const Se={title:"Xenith UI/Components/Card",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The Card component provides a container with consistent styling for grouping related content. It includes a subtle shadow, rounded corners, and padding to create visual separation between different sections of your interface.

### Key Features
- **Flexible Container**: Accepts any valid HTML div attributes
- **Consistent Styling**: Predefined shadow, border, and background
- **Composable**: Works seamlessly with other Xenith UI components
- **Responsive**: Adapts to different screen sizes
- **Theme Support**: Automatically adapts to light/dark themes

### Usage
\`\`\`tsx
import { Card } from "@xenithlabs/xenith-ui";

// Basic card
<Card>
  <Heading variant="titleSm">Card Title</Heading>
  <Text>Card content goes here</Text>
</Card>

// Card with custom styling
<Card className="overflow-hidden">
  <Heading variant="titleSm">Custom Card</Heading>
  <Divider className="my-3" />
  <Text>Content with divider</Text>
</Card>
\`\`\`

### Component Props

- **className** (string): Additional CSS classes to apply
- **...props**: All standard HTMLDivElement attributes are supported

### Common Patterns

1. **Details Card**: Used for displaying structured information with labels and values
2. **Timeline Card**: Used for showing chronological events or status updates
3. **Stats Card**: Used for displaying metrics and KPIs
4. **Action Card**: Used with buttons or interactive elements
5. **Loading Card**: Used with Skeletonize for loading states
        `}}},argTypes:{className:{control:{type:"text"},description:"Additional CSS classes to apply to the card",table:{type:{summary:"string"}}},children:{control:!1,description:"Content to display inside the card",table:{type:{summary:"React.ReactNode"}}}}},l={render:({...r})=>e.jsxs(t,{...r,children:[e.jsx(s,{variant:"titleSm",className:"mb-3",children:"Welcome to Xenith UI"}),e.jsx(a,{className:"text-text-weak",children:"Cards are versatile containers that group related content and actions about a single subject. They provide visual hierarchy and help organize information in a clean, scannable format."})]})},o={name:"Batch Details (Real Example)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs(t,{className:"overflow-hidden",children:[e.jsx(s,{variant:"titleSm",children:"Batch Timeline"}),e.jsx(d,{className:"mt-3 mb-4"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-success mt-2"}),e.jsxs("div",{className:"flex-1",children:[e.jsx(a,{variant:"medium",children:"Batch Created"}),e.jsx(a,{variant:"regular",className:"text-text-weak",children:"2024-01-15 10:30 AM"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-warning mt-2"}),e.jsxs("div",{className:"flex-1",children:[e.jsx(a,{variant:"medium",children:"Processing"}),e.jsx(a,{variant:"regular",className:"text-text-weak",children:"2024-01-15 10:35 AM"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-surface-weak mt-2"}),e.jsxs("div",{className:"flex-1",children:[e.jsx(a,{variant:"medium",children:"Pending Completion"}),e.jsx(a,{variant:"regular",className:"text-text-weak",children:"-"})]})]})]})]}),e.jsxs(t,{className:"overflow-hidden",children:[e.jsx(s,{variant:"titleSm",children:"Batch Details"}),e.jsx(d,{className:"mt-3 mb-4"}),e.jsxs("div",{className:"grid grid-cols-[1fr_2fr] gap-x-10 gap-y-3",children:[e.jsx(a,{variant:"medium",className:"text-text-weak",children:"Batch ID"}),e.jsx(a,{children:"batch_2024_01_15_001"}),e.jsx(a,{variant:"medium",className:"text-text-weak",children:"Batch Name"}),e.jsx(a,{children:"January Payroll"}),e.jsx(a,{variant:"medium",className:"text-text-weak",children:"Created By"}),e.jsx(a,{children:"John Doe"}),e.jsx(a,{variant:"medium",className:"text-text-weak",children:"Requested Amount"}),e.jsx(a,{children:"$125,000.00"}),e.jsx(a,{variant:"medium",className:"text-text-weak",children:"Fee Amount"}),e.jsx(a,{children:"$250.00"}),e.jsx(a,{variant:"medium",className:"text-text-weak",children:"Net Amount"}),e.jsx(a,{children:"$124,750.00"})]})]})]})},x={name:"Stats Card",render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs(t,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(a,{variant:"medium",className:"text-text-weak",children:"Total Revenue"}),e.jsx(n,{icon:e.jsx(K,{}),className:"w-5 h-5 text-text-weaker"})]}),e.jsx(s,{variant:"titleLg",children:"$45,231.89"}),e.jsx(a,{variant:"regular",className:"text-success mt-1",children:"+20.1% from last month"})]}),e.jsxs(t,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(a,{variant:"medium",className:"text-text-weak",children:"Active Users"}),e.jsx(n,{icon:e.jsx(V,{}),className:"w-5 h-5 text-text-weaker"})]}),e.jsx(s,{variant:"titleLg",children:"2,345"}),e.jsx(a,{variant:"regular",className:"text-success mt-1",children:"+15.3% from last month"})]}),e.jsxs(t,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(a,{variant:"medium",className:"text-text-weak",children:"Transactions"}),e.jsx(n,{icon:e.jsx(i,{}),className:"w-5 h-5 text-text-weaker"})]}),e.jsx(s,{variant:"titleLg",children:"12,543"}),e.jsx(a,{variant:"regular",className:"text-destructive mt-1",children:"-5.4% from last month"})]})]})},v={name:"Loading State",render:()=>e.jsxs(t,{children:[e.jsx(c,{loading:!0,className:"h-6 w-40 mb-3",children:e.jsx(s,{variant:"titleSm",children:"Transaction Details"})}),e.jsx(d,{className:"mt-3 mb-4"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(a,{variant:"medium",className:"text-text-weak",children:"Transaction ID"}),e.jsx(c,{loading:!0,className:"h-4 w-32",children:e.jsx(a,{children:"txn_123456789"})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(a,{variant:"medium",className:"text-text-weak",children:"Amount"}),e.jsx(c,{loading:!0,className:"h-4 w-24",children:e.jsx(a,{children:"$1,234.56"})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(a,{variant:"medium",className:"text-text-weak",children:"Status"}),e.jsx(c,{loading:!0,className:"h-5 w-20",children:e.jsx(Q,{theme:"success",variant:"soft",children:"Completed"})})]})]})]})},h={name:"Action Card",render:()=>e.jsxs(t,{className:"max-w-sm",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx(Z,{className:"h-12 w-12"}),e.jsxs("div",{children:[e.jsx(s,{variant:"titleSm",children:"Upgrade to Pro"}),e.jsx(a,{variant:"regular",className:"text-text-weak",children:"Unlock advanced features"})]})]}),e.jsx(a,{className:"mb-4",children:"Get access to advanced analytics, priority support, and unlimited transactions with our Pro plan."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(m,{theme:"primary",size:"sm",children:"Upgrade Now"}),e.jsx(m,{theme:"neutral",variant:"outline",size:"sm",children:"Learn More"})]})]})},u={name:"Details Card Pattern",render:()=>e.jsxs(t,{children:[e.jsx(s,{variant:"titleSm",children:"Order Information"}),e.jsx(d,{className:"mt-3 mb-4"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"medium",className:"text-text-weak mb-1",children:"Customer"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Z,{className:"h-8 w-8"}),e.jsxs("div",{children:[e.jsx(a,{variant:"medium",children:"Jane Smith"}),e.jsx(a,{variant:"regular",className:"text-text-weak",children:"jane.smith@example.com"})]})]})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"medium",className:"text-text-weak mb-1",children:"Shipping Address"}),e.jsx(a,{children:"123 Main Street"}),e.jsx(a,{children:"New York, NY 10001"})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"medium",className:"text-text-weak mb-1",children:"Order Items"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(a,{children:"Product A × 2"}),e.jsx(a,{children:"$59.98"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(a,{children:"Product B × 1"}),e.jsx(a,{children:"$29.99"})]}),e.jsx(d,{}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(a,{variant:"semiBold",children:"Total"}),e.jsx(a,{variant:"semiBold",children:"$89.97"})]})]})]})]})]})},g={name:"List Card",render:()=>e.jsxs(t,{className:"p-0 overflow-hidden",children:[e.jsx("div",{className:"p-6 pb-3",children:e.jsx(s,{variant:"titleSm",children:"Recent Activity"})}),e.jsx("div",{className:"divide-y",children:[{name:"Payment Received",time:"2 hours ago",amount:"+$1,234.56",icon:e.jsx(i,{})},{name:"Withdrawal",time:"5 hours ago",amount:"-$500.00",icon:e.jsx(K,{})},{name:"Transfer",time:"1 day ago",amount:"-$250.00",icon:e.jsx(i,{})},{name:"Payment Received",time:"2 days ago",amount:"+$3,456.78",icon:e.jsx(i,{})}].map((r,ee)=>e.jsx("div",{className:"px-6 py-3 hover:bg-surface-subtle transition-colors cursor-pointer",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(n,{icon:r.icon,className:"w-5 h-5 text-text-weak"}),e.jsxs("div",{children:[e.jsx(a,{variant:"medium",children:r.name}),e.jsx(a,{variant:"regular",className:"text-text-weak",children:r.time})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{variant:"medium",className:r.amount.startsWith("+")?"text-success":"",children:r.amount}),e.jsx(n,{icon:e.jsx(ae,{}),className:"w-4 h-4 text-text-weaker"})]})]})},ee))}),e.jsx("div",{className:"p-6 pt-3",children:e.jsx(m,{theme:"neutral",variant:"outline",size:"sm",className:"w-full",children:"View All Activity"})})]})},N={name:"Custom Styling",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(t,{className:"bg-primary text-white border-primary",children:[e.jsx(s,{variant:"titleSm",className:"text-white",children:"Primary Theme Card"}),e.jsx(a,{className:"text-white/80",children:"This card uses custom background and text colors to match the primary theme."})]}),e.jsxs(t,{className:"border-2 border-warning bg-warning/5",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(n,{icon:e.jsx(te,{}),className:"w-5 h-5 text-warning"}),e.jsx(s,{variant:"titleSm",className:"text-warning",children:"Warning Card"})]}),e.jsx(a,{children:"This card has a warning theme with custom border and background."})]}),e.jsxs(t,{className:"shadow-none border-dashed border-2",children:[e.jsx(s,{variant:"titleSm",children:"Dashed Border Card"}),e.jsx(a,{className:"text-text-weak",children:"This card removes the shadow and uses a dashed border for a different visual style."})]})]})},p={name:"Nested Cards",render:()=>e.jsxs(t,{children:[e.jsx(s,{variant:"titleSm",className:"mb-4",children:"Payment Methods"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{className:"bg-surface-subtle border-0 shadow-none",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(n,{icon:e.jsx(i,{}),className:"w-5 h-5"}),e.jsxs("div",{children:[e.jsx(a,{variant:"medium",children:"•••• •••• •••• 4242"}),e.jsx(a,{variant:"regular",className:"text-text-weak",children:"Expires 12/25"})]})]}),e.jsx(Q,{theme:"primary",variant:"soft",children:"Default"})]})}),e.jsx(t,{className:"bg-surface-subtle border-0 shadow-none",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(n,{icon:e.jsx(i,{}),className:"w-5 h-5"}),e.jsxs("div",{children:[e.jsx(a,{variant:"medium",children:"•••• •••• •••• 5555"}),e.jsx(a,{variant:"regular",className:"text-text-weak",children:"Expires 03/26"})]})]}),e.jsx(m,{theme:"neutral",variant:"nude",size:"sm",children:"Set as default"})]})})]})]})},j={name:"Empty State",render:()=>e.jsxs(t,{className:"text-center py-12",children:[e.jsx("div",{className:"flex justify-center mb-4",children:e.jsx("div",{className:"w-16 h-16 bg-surface-subtle rounded-full flex items-center justify-center",children:e.jsx(n,{icon:e.jsx(V,{}),className:"w-8 h-8 text-text-weaker"})})}),e.jsx(s,{variant:"titleMd",className:"mb-2",children:"No Users Found"}),e.jsx(a,{className:"text-text-weak mb-6 max-w-sm mx-auto",children:"Start by inviting team members to collaborate on your projects."}),e.jsx(m,{theme:"primary",size:"sm",children:"Invite Team Members"})]})};var w,f,T;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Card {...args}>
      <Heading variant="titleSm" className="mb-3">Welcome to Xenith UI</Heading>
      <Text className="text-text-weak">
        Cards are versatile containers that group related content and actions about a single subject. 
        They provide visual hierarchy and help organize information in a clean, scannable format.
      </Text>
    </Card>
}`,...(T=(f=l.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var b,y,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Batch Details (Real Example)",
  render: () => <div className="grid grid-cols-2 gap-6">
      <Card className="overflow-hidden">
        <Heading variant="titleSm">Batch Timeline</Heading>
        <Divider className="mt-3 mb-4" />
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-success mt-2" />
            <div className="flex-1">
              <Text variant="medium">Batch Created</Text>
              <Text variant="regular" className="text-text-weak">2024-01-15 10:30 AM</Text>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-warning mt-2" />
            <div className="flex-1">
              <Text variant="medium">Processing</Text>
              <Text variant="regular" className="text-text-weak">2024-01-15 10:35 AM</Text>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-surface-weak mt-2" />
            <div className="flex-1">
              <Text variant="medium">Pending Completion</Text>
              <Text variant="regular" className="text-text-weak">-</Text>
            </div>
          </div>
        </div>
      </Card>

      <Card className="overflow-hidden">
        <Heading variant="titleSm">Batch Details</Heading>
        <Divider className="mt-3 mb-4" />
        <div className="grid grid-cols-[1fr_2fr] gap-x-10 gap-y-3">
          <Text variant="medium" className="text-text-weak">Batch ID</Text>
          <Text>batch_2024_01_15_001</Text>

          <Text variant="medium" className="text-text-weak">Batch Name</Text>
          <Text>January Payroll</Text>

          <Text variant="medium" className="text-text-weak">Created By</Text>
          <Text>John Doe</Text>

          <Text variant="medium" className="text-text-weak">Requested Amount</Text>
          <Text>$125,000.00</Text>

          <Text variant="medium" className="text-text-weak">Fee Amount</Text>
          <Text>$250.00</Text>

          <Text variant="medium" className="text-text-weak">Net Amount</Text>
          <Text>$124,750.00</Text>
        </div>
      </Card>
    </div>
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var k,S,B;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Stats Card",
  render: () => <div className="grid grid-cols-3 gap-4">
      <Card>
        <div className="flex items-center justify-between mb-2">
          <Text variant="medium" className="text-text-weak">Total Revenue</Text>
          <Icon icon={<BanknotesIcon />} className="w-5 h-5 text-text-weaker" />
        </div>
        <Heading variant="titleLg">$45,231.89</Heading>
        <Text variant="regular" className="text-success mt-1">+20.1% from last month</Text>
      </Card>

      <Card>
        <div className="flex items-center justify-between mb-2">
          <Text variant="medium" className="text-text-weak">Active Users</Text>
          <Icon icon={<UserIcon />} className="w-5 h-5 text-text-weaker" />
        </div>
        <Heading variant="titleLg">2,345</Heading>
        <Text variant="regular" className="text-success mt-1">+15.3% from last month</Text>
      </Card>

      <Card>
        <div className="flex items-center justify-between mb-2">
          <Text variant="medium" className="text-text-weak">Transactions</Text>
          <Icon icon={<SecurePaymentIcon />} className="w-5 h-5 text-text-weaker" />
        </div>
        <Heading variant="titleLg">12,543</Heading>
        <Text variant="regular" className="text-destructive mt-1">-5.4% from last month</Text>
      </Card>
    </div>
}`,...(B=(S=x.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var A,I,H;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Loading State",
  render: () => {
    const isLoading = true;
    return <Card>
        <Skeletonize loading={isLoading} className="h-6 w-40 mb-3">
          <Heading variant="titleSm">Transaction Details</Heading>
        </Skeletonize>
        <Divider className="mt-3 mb-4" />
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <Text variant="medium" className="text-text-weak">Transaction ID</Text>
            <Skeletonize loading={isLoading} className="h-4 w-32">
              <Text>txn_123456789</Text>
            </Skeletonize>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Text variant="medium" className="text-text-weak">Amount</Text>
            <Skeletonize loading={isLoading} className="h-4 w-24">
              <Text>$1,234.56</Text>
            </Skeletonize>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Text variant="medium" className="text-text-weak">Status</Text>
            <Skeletonize loading={isLoading} className="h-5 w-20">
              <Badge theme="success" variant="soft">Completed</Badge>
            </Skeletonize>
          </div>
        </div>
      </Card>;
  }
}`,...(H=(I=v.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var D,P,L;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Action Card",
  render: () => <Card className="max-w-sm">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-12 w-12" />
        <div>
          <Heading variant="titleSm">Upgrade to Pro</Heading>
          <Text variant="regular" className="text-text-weak">Unlock advanced features</Text>
        </div>
      </div>
      <Text className="mb-4">
        Get access to advanced analytics, priority support, and unlimited transactions with our Pro plan.
      </Text>
      <div className="flex gap-2">
        <Button theme="primary" size="sm">Upgrade Now</Button>
        <Button theme="neutral" variant="outline" size="sm">Learn More</Button>
      </div>
    </Card>
}`,...(L=(P=h.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var $,z,R;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Details Card Pattern",
  render: () => <Card>
      <Heading variant="titleSm">Order Information</Heading>
      <Divider className="mt-3 mb-4" />
      
      <div className="space-y-4">
        <div>
          <Text variant="medium" className="text-text-weak mb-1">Customer</Text>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8" />
            <div>
              <Text variant="medium">Jane Smith</Text>
              <Text variant="regular" className="text-text-weak">jane.smith@example.com</Text>
            </div>
          </div>
        </div>

        <div>
          <Text variant="medium" className="text-text-weak mb-1">Shipping Address</Text>
          <Text>123 Main Street</Text>
          <Text>New York, NY 10001</Text>
        </div>

        <div>
          <Text variant="medium" className="text-text-weak mb-1">Order Items</Text>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Text>Product A × 2</Text>
              <Text>$59.98</Text>
            </div>
            <div className="flex justify-between">
              <Text>Product B × 1</Text>
              <Text>$29.99</Text>
            </div>
            <Divider />
            <div className="flex justify-between">
              <Text variant="semiBold">Total</Text>
              <Text variant="semiBold">$89.97</Text>
            </div>
          </div>
        </div>
      </div>
    </Card>
}`,...(R=(z=u.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var U,F,M;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "List Card",
  render: () => <Card className="p-0 overflow-hidden">
      <div className="p-6 pb-3">
        <Heading variant="titleSm">Recent Activity</Heading>
      </div>
      <div className="divide-y">
        {[{
        name: "Payment Received",
        time: "2 hours ago",
        amount: "+$1,234.56",
        icon: <SecurePaymentIcon />
      }, {
        name: "Withdrawal",
        time: "5 hours ago",
        amount: "-$500.00",
        icon: <BanknotesIcon />
      }, {
        name: "Transfer",
        time: "1 day ago",
        amount: "-$250.00",
        icon: <SecurePaymentIcon />
      }, {
        name: "Payment Received",
        time: "2 days ago",
        amount: "+$3,456.78",
        icon: <SecurePaymentIcon />
      }].map((item, index) => <div key={index} className="px-6 py-3 hover:bg-surface-subtle transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon icon={item.icon} className="w-5 h-5 text-text-weak" />
                <div>
                  <Text variant="medium">{item.name}</Text>
                  <Text variant="regular" className="text-text-weak">{item.time}</Text>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Text variant="medium" className={item.amount.startsWith("+") ? "text-success" : ""}>
                  {item.amount}
                </Text>
                <Icon icon={<ChevronRightIcon />} className="w-4 h-4 text-text-weaker" />
              </div>
            </div>
          </div>)}
      </div>
      <div className="p-6 pt-3">
        <Button theme="neutral" variant="outline" size="sm" className="w-full">
          View All Activity
        </Button>
      </div>
    </Card>
}`,...(M=(F=g.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var _,E,W;N.parameters={...N.parameters,docs:{...(_=N.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Custom Styling",
  render: () => <div className="space-y-4">
      <Card className="bg-primary text-white border-primary">
        <Heading variant="titleSm" className="text-white">Primary Theme Card</Heading>
        <Text className="text-white/80">
          This card uses custom background and text colors to match the primary theme.
        </Text>
      </Card>

      <Card className="border-2 border-warning bg-warning/5">
        <div className="flex items-center gap-2 mb-2">
          <Icon icon={<ClockIcon />} className="w-5 h-5 text-warning" />
          <Heading variant="titleSm" className="text-warning">Warning Card</Heading>
        </div>
        <Text>
          This card has a warning theme with custom border and background.
        </Text>
      </Card>

      <Card className="shadow-none border-dashed border-2">
        <Heading variant="titleSm">Dashed Border Card</Heading>
        <Text className="text-text-weak">
          This card removes the shadow and uses a dashed border for a different visual style.
        </Text>
      </Card>
    </div>
}`,...(W=(E=N.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var J,O,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Nested Cards",
  render: () => <Card>
      <Heading variant="titleSm" className="mb-4">Payment Methods</Heading>
      <div className="space-y-3">
        <Card className="bg-surface-subtle border-0 shadow-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon icon={<SecurePaymentIcon />} className="w-5 h-5" />
              <div>
                <Text variant="medium">•••• •••• •••• 4242</Text>
                <Text variant="regular" className="text-text-weak">Expires 12/25</Text>
              </div>
            </div>
            <Badge theme="primary" variant="soft">Default</Badge>
          </div>
        </Card>
        
        <Card className="bg-surface-subtle border-0 shadow-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon icon={<SecurePaymentIcon />} className="w-5 h-5" />
              <div>
                <Text variant="medium">•••• •••• •••• 5555</Text>
                <Text variant="regular" className="text-text-weak">Expires 03/26</Text>
              </div>
            </div>
            <Button theme="neutral" variant="nude" size="sm">Set as default</Button>
          </div>
        </Card>
      </div>
    </Card>
}`,...(X=(O=p.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var Y,q,G;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Empty State",
  render: () => <Card className="text-center py-12">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-surface-subtle rounded-full flex items-center justify-center">
          <Icon icon={<UserIcon />} className="w-8 h-8 text-text-weaker" />
        </div>
      </div>
      <Heading variant="titleMd" className="mb-2">No Users Found</Heading>
      <Text className="text-text-weak mb-6 max-w-sm mx-auto">
        Start by inviting team members to collaborate on your projects.
      </Text>
      <Button theme="primary" size="sm">Invite Team Members</Button>
    </Card>
}`,...(G=(q=j.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Be=["Default","BatchDetails","StatsCard","LoadingCard","ActionCard","DetailsCard","ListCard","CustomStyling","NestedCards","EmptyStateCard"];export{h as ActionCard,o as BatchDetails,N as CustomStyling,l as Default,u as DetailsCard,j as EmptyStateCard,g as ListCard,v as LoadingCard,p as NestedCards,x as StatsCard,Be as __namedExportsOrder,Se as default};
