import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{C as i}from"./Checkbox-CMdwPcui.js";import{L as l}from"./index-_lyfCmBZ.js";import{r as h}from"./index-DRjF_FHU.js";import{T as de,a as me,b as L,c as x,d as ue,e as b}from"./Table-D4eohHNc.js";import{T as m}from"./Text-C8HBwI4b.js";import{B as p}from"./Button-DAgrt3Vy.js";import{C as F}from"./Card-C5rr-ZzX.js";import{H as A}from"./Heading-DjlBwQyS.js";import{D as le}from"./Divider-CIm89-oy.js";import{B as he}from"./Badge-C8WRcReV.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./cn-8RyR4BqC.js";import"./check-C0C6JGvp.js";import"./Icon-CTnhpE1d.js";import"./index-Bb4qSo10.js";import"./index-HZDBD2ik.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";import"./styles-x1yxmyQd.js";import"./reset-m4jX0AX_.js";const $e={title:"Xenith UI/Components/Checkbox",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The Checkbox component provides a customizable checkbox input with support for checked, unchecked, and indeterminate states. Built on Radix UI, it offers full accessibility support and seamless integration with form libraries.

### Key Features
- **Three States**: Supports checked, unchecked, and indeterminate states
- **Fully Accessible**: Built with ARIA attributes and keyboard navigation
- **Controlled & Uncontrolled**: Works in both controlled and uncontrolled modes
- **Custom Styling**: Tailwind-based styling with hover and focus states
- **Disabled State**: Clear visual feedback for disabled checkboxes
- **Form Integration**: Works seamlessly with React Hook Form and other libraries
- **Indeterminate Support**: Perfect for parent checkboxes in tree structures

### Usage
\`\`\`tsx
import { Checkbox } from "@xenithlabs/xenith-ui";

// Basic checkbox
<Checkbox />

// With label
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>

// Controlled checkbox
<Checkbox
  checked={isChecked}
  onCheckedChange={setIsChecked}
/>

// Indeterminate state
<Checkbox
  indeterminate
  checked={parentChecked}
  onCheckedChange={handleParentChange}
/>
\`\`\`

### Component Props

- **checked** (boolean | "indeterminate"): Controlled checked state
- **defaultChecked** (boolean): Default checked state for uncontrolled mode
- **onCheckedChange** ((checked: boolean | "indeterminate") => void): Change handler
- **indeterminate** (boolean): Enable indeterminate state support
- **disabled** (boolean): Disable the checkbox
- **required** (boolean): Mark as required for forms
- **name** (string): Form field name
- **value** (string): Form field value
- **id** (string): HTML id attribute
- **className** (string): Additional CSS classes
- **...props**: All other button HTML attributes

### Accessibility

- Full keyboard navigation support
- ARIA attributes for screen readers
- Focus indicators for keyboard users
- Proper label association with htmlFor

### Common Patterns

1. **Form Fields**: Single checkboxes for boolean options
2. **Terms & Conditions**: Agreement checkboxes
3. **Table Selection**: Row selection in data tables
4. **Settings**: Toggle features on/off
5. **Tree Selection**: Parent/child checkbox hierarchies
        `}}},argTypes:{checked:{control:{type:"select"},options:[!0,!1,"indeterminate",void 0],description:"Controlled checked state",table:{type:{summary:'boolean | "indeterminate"'}}},defaultChecked:{control:{type:"boolean"},description:"Default checked state for uncontrolled mode",table:{type:{summary:"boolean"}}},onCheckedChange:{action:"onCheckedChange",description:"Called when the checked state changes",table:{type:{summary:'(checked: boolean | "indeterminate") => void'}}},indeterminate:{control:{type:"boolean"},description:"Enable indeterminate state support",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Disable the checkbox",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{control:{type:"boolean"},description:"Mark as required for forms",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},name:{control:{type:"text"},description:"Form field name",table:{type:{summary:"string"}}},value:{control:{type:"text"},description:"Form field value",table:{type:{summary:"string"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}}},v={args:{defaultChecked:!1}},g={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"terms"}),e.jsx(l,{htmlFor:"terms",className:"cursor-pointer",children:"I agree to the terms and conditions"})]})},f={render:()=>{const[t,r]=h.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"controlled",checked:t,onCheckedChange:n=>r(!!n)}),e.jsx(l,{htmlFor:"controlled",className:"cursor-pointer",children:"Controlled checkbox"})]}),e.jsxs(m,{variant:"regular",className:"text-text-weak",children:["Current state: ",t?"Checked":"Unchecked"]})]})}},k={name:"Indeterminate State",render:()=>{const[t,r]=h.useState("indeterminate"),[n,c]=h.useState([!0,!1,!0]),a=d=>{const s=d===!0;r(s),c([s,s,s])},o=(d,s)=>{const u=[...n];u[d]=s,c(u);const ce=u.every(T=>T),oe=u.every(T=>!T);r(ce?!0:oe?!1:"indeterminate")};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"parent",indeterminate:!0,checked:t,onCheckedChange:a}),e.jsx(l,{htmlFor:"parent",className:"cursor-pointer font-medium",children:"Select All Features"})]}),e.jsx("div",{className:"ml-6 space-y-2",children:["Analytics Dashboard","API Access","Priority Support"].map((d,s)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:`child-${s}`,checked:n[s],onCheckedChange:u=>o(s,!!u)}),e.jsx(l,{htmlFor:`child-${s}`,className:"cursor-pointer",children:d})]},d))})]})}},C={name:"Disabled States",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{disabled:!0}),e.jsx(l,{className:"text-text-weak",children:"Disabled unchecked"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{disabled:!0,checked:!0}),e.jsx(l,{className:"text-text-weak",children:"Disabled checked"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{disabled:!0,indeterminate:!0,checked:"indeterminate"}),e.jsx(l,{className:"text-text-weak",children:"Disabled indeterminate"})]})]})},N={name:"Table Selection (Real Example)",render:()=>{const[t,r]=h.useState(new Set),n=[{id:1,name:"John Doe",account:"1234567890",amount:"$1,234.56"},{id:2,name:"Jane Smith",account:"0987654321",amount:"$2,345.67"},{id:3,name:"Bob Johnson",account:"5555555555",amount:"$3,456.78"}],c=t.size===n.length&&n.length>0,a=t.size>0&&t.size<n.length,o=()=>{r(c?new Set:new Set(n.map(s=>s.id)))},d=s=>{const u=new Set(t);u.has(s)?u.delete(s):u.add(s),r(u)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(de,{children:[e.jsx(me,{children:e.jsxs(L,{children:[e.jsx(x,{className:"w-12",children:e.jsx(i,{checked:c?!0:a?"indeterminate":!1,onCheckedChange:o,indeterminate:!0})}),e.jsx(x,{children:"Name"}),e.jsx(x,{children:"Account"}),e.jsx(x,{children:"Amount"})]})}),e.jsx(ue,{children:n.map(s=>e.jsxs(L,{children:[e.jsx(b,{children:e.jsx(i,{checked:t.has(s.id),onCheckedChange:()=>d(s.id)})}),e.jsx(b,{children:s.name}),e.jsx(b,{children:s.account}),e.jsx(b,{children:s.amount})]},s.id))})]}),t.size>0&&e.jsxs("div",{className:"flex items-center justify-between p-4 bg-surface-subtle rounded",children:[e.jsxs(m,{variant:"regular",children:[t.size," row",t.size!==1?"s":""," selected"]}),e.jsx(p,{size:"sm",variant:"outline",theme:"destructive",children:"Delete Selected"})]})]})}},y={name:"Settings Form",render:()=>{const[t,r]=h.useState({emailNotifications:!0,smsNotifications:!1,pushNotifications:!0,marketingEmails:!1,securityAlerts:!0}),n=c=>{r(a=>({...a,[c]:!a[c]}))};return e.jsxs(F,{className:"max-w-md",children:[e.jsx(A,{variant:"titleSm",className:"mb-4",children:"Notification Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx(m,{variant:"medium",className:"font-medium",children:"Communication Preferences"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(i,{id:"email",checked:t.emailNotifications,onCheckedChange:()=>n("emailNotifications"),className:"mt-0.5"}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"email",className:"cursor-pointer font-medium",children:"Email Notifications"}),e.jsx(m,{variant:"regular",className:"text-text-weak",children:"Receive transaction updates via email"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(i,{id:"sms",checked:t.smsNotifications,onCheckedChange:()=>n("smsNotifications"),className:"mt-0.5"}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"sms",className:"cursor-pointer font-medium",children:"SMS Notifications"}),e.jsx(m,{variant:"regular",className:"text-text-weak",children:"Get alerts sent to your phone"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(i,{id:"push",checked:t.pushNotifications,onCheckedChange:()=>n("pushNotifications"),className:"mt-0.5"}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"push",className:"cursor-pointer font-medium",children:"Push Notifications"}),e.jsx(m,{variant:"regular",className:"text-text-weak",children:"Browser and mobile app notifications"})]})]})]})]}),e.jsx(le,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(m,{variant:"medium",className:"font-medium",children:"Other Preferences"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"marketing",checked:t.marketingEmails,onCheckedChange:()=>n("marketingEmails")}),e.jsx(l,{htmlFor:"marketing",className:"cursor-pointer",children:"Marketing emails and promotions"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:"security",checked:t.securityAlerts,onCheckedChange:()=>n("securityAlerts")}),e.jsx(l,{htmlFor:"security",className:"cursor-pointer",children:"Security alerts and warnings"})]})]})]})]}),e.jsxs("div",{className:"mt-6 flex gap-2",children:[e.jsx(p,{theme:"primary",size:"sm",children:"Save Settings"}),e.jsx(p,{theme:"neutral",variant:"outline",size:"sm",children:"Cancel"})]})]})}},S={name:"Terms & Conditions",render:()=>{const[t,r]=h.useState(!1),[n,c]=h.useState(!1);return e.jsxs(F,{className:"max-w-lg",children:[e.jsx(A,{variant:"titleSm",className:"mb-4",children:"Complete Registration"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"bg-surface-subtle p-4 rounded mb-4 max-h-40 overflow-y-auto",children:e.jsxs(m,{variant:"regular",className:"text-text-weak",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",e.jsx("br",{}),e.jsx("br",{}),"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]})}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(i,{id:"agree",checked:t,onCheckedChange:a=>r(!!a),className:"mt-0.5",required:!0}),e.jsxs(l,{htmlFor:"agree",className:"cursor-pointer text-sm",children:["I have read and agree to the ",e.jsx("span",{className:"text-primary underline",children:"Terms of Service"})," and"," ",e.jsx("span",{className:"text-primary underline",children:"Privacy Policy"})]})]})]}),e.jsx(p,{theme:"primary",className:"w-full",disabled:!t,onClick:()=>c(!0),children:"Continue"}),n&&!t&&e.jsx(m,{variant:"regular",className:"text-danger mt-2",children:"You must agree to the terms to continue"})]})}},j={name:"Filter Options",render:()=>{const[t,r]=h.useState({status:{active:!0,pending:!0,inactive:!1},type:{personal:!0,business:!1,enterprise:!0}}),n=(a,o)=>{r(d=>({...d,[a]:{...d[a],[o]:!d[a][o]}}))},c=Object.values(t).reduce((a,o)=>a+Object.values(o).filter(Boolean).length,0);return e.jsxs(F,{className:"max-w-sm",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx(A,{variant:"titleSm",children:"Filters"}),c>0&&e.jsxs(he,{theme:"primary",variant:"soft",children:[c," active"]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(m,{variant:"medium",className:"font-medium mb-2",children:"Status"}),e.jsx("div",{className:"space-y-2",children:Object.entries(t.status).map(([a,o])=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:`status-${a}`,checked:o,onCheckedChange:()=>n("status",a)}),e.jsx(l,{htmlFor:`status-${a}`,className:"cursor-pointer capitalize",children:a})]},a))})]}),e.jsx(le,{}),e.jsxs("div",{children:[e.jsx(m,{variant:"medium",className:"font-medium mb-2",children:"Account Type"}),e.jsx("div",{className:"space-y-2",children:Object.entries(t.type).map(([a,o])=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{id:`type-${a}`,checked:o,onCheckedChange:()=>n("type",a)}),e.jsx(l,{htmlFor:`type-${a}`,className:"cursor-pointer capitalize",children:a})]},a))})]})]}),e.jsxs("div",{className:"mt-6 flex gap-2",children:[e.jsx(p,{size:"sm",theme:"primary",className:"flex-1",children:"Apply Filters"}),e.jsx(p,{size:"sm",variant:"outline",theme:"neutral",onClick:()=>r({status:{active:!1,pending:!1,inactive:!1},type:{personal:!1,business:!1,enterprise:!1}}),children:"Clear"})]})]})}},w={name:"Required Field",render:()=>e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(i,{id:"required",required:!0,name:"agreement"}),e.jsxs("div",{children:[e.jsxs(l,{htmlFor:"required",className:"cursor-pointer",children:["I confirm this information is accurate ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx(m,{variant:"regular",className:"text-text-weak",children:"This field is required"})]})]}),e.jsx(p,{type:"submit",theme:"primary",size:"sm",children:"Submit Form"})]})};var R,B,z;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    defaultChecked: false
  }
}`,...(z=(B=v.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var D,P,q;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="cursor-pointer">
        I agree to the terms and conditions
      </Label>
    </div>
}`,...(q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var H,I,$;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Checkbox id="controlled" checked={checked} onCheckedChange={value => setChecked(Boolean(value))} />
          <Label htmlFor="controlled" className="cursor-pointer">
            Controlled checkbox
          </Label>
        </div>
        <Text variant="regular" className="text-text-weak">
          Current state: {checked ? "Checked" : "Unchecked"}
        </Text>
      </div>;
  }
}`,...($=(I=f.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var E,O,U;k.parameters={...k.parameters,docs:{...(E=k.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Indeterminate State",
  render: () => {
    const [parentChecked, setParentChecked] = useState<boolean | "indeterminate">("indeterminate");
    const [childStates, setChildStates] = useState([true, false, true]);
    const handleParentChange = (checked: boolean | "indeterminate") => {
      const newValue = checked === true;
      setParentChecked(newValue);
      setChildStates([newValue, newValue, newValue]);
    };
    const handleChildChange = (index: number, checked: boolean) => {
      const newStates = [...childStates];
      newStates[index] = checked;
      setChildStates(newStates);
      const allChecked = newStates.every(state => state);
      const allUnchecked = newStates.every(state => !state);
      if (allChecked) {
        setParentChecked(true);
      } else if (allUnchecked) {
        setParentChecked(false);
      } else {
        setParentChecked("indeterminate");
      }
    };
    return <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Checkbox id="parent" indeterminate checked={parentChecked} onCheckedChange={handleParentChange} />
          <Label htmlFor="parent" className="cursor-pointer font-medium">
            Select All Features
          </Label>
        </div>
        <div className="ml-6 space-y-2">
          {["Analytics Dashboard", "API Access", "Priority Support"].map((feature, index) => <div key={feature} className="flex items-center gap-2">
              <Checkbox id={\`child-\${index}\`} checked={childStates[index]} onCheckedChange={checked => handleChildChange(index, Boolean(checked))} />
              <Label htmlFor={\`child-\${index}\`} className="cursor-pointer">
                {feature}
              </Label>
            </div>)}
        </div>
      </div>;
  }
}`,...(U=(O=k.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var V,M,J;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Disabled States",
  render: () => <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Checkbox disabled />
        <Label className="text-text-weak">Disabled unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox disabled checked />
        <Label className="text-text-weak">Disabled checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox disabled indeterminate checked="indeterminate" />
        <Label className="text-text-weak">Disabled indeterminate</Label>
      </div>
    </div>
}`,...(J=(M=C.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var W,G,Y;N.parameters={...N.parameters,docs:{...(W=N.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Table Selection (Real Example)",
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
    const rows = [{
      id: 1,
      name: "John Doe",
      account: "1234567890",
      amount: "$1,234.56"
    }, {
      id: 2,
      name: "Jane Smith",
      account: "0987654321",
      amount: "$2,345.67"
    }, {
      id: 3,
      name: "Bob Johnson",
      account: "5555555555",
      amount: "$3,456.78"
    }];
    const isAllSelected = selectedRows.size === rows.length && rows.length > 0;
    const isIndeterminate = selectedRows.size > 0 && selectedRows.size < rows.length;
    const handleSelectAll = () => {
      if (isAllSelected) {
        setSelectedRows(new Set());
      } else {
        setSelectedRows(new Set(rows.map(row => row.id)));
      }
    };
    const handleSelectRow = (id: number) => {
      const newSelection = new Set(selectedRows);
      if (newSelection.has(id)) {
        newSelection.delete(id);
      } else {
        newSelection.add(id);
      }
      setSelectedRows(newSelection);
    };
    return <div className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox checked={isAllSelected ? true : isIndeterminate ? "indeterminate" : false} onCheckedChange={handleSelectAll} indeterminate />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Account</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map(row => <TableRow key={row.id}>
                <TableCell>
                  <Checkbox checked={selectedRows.has(row.id)} onCheckedChange={() => handleSelectRow(row.id)} />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.account}</TableCell>
                <TableCell>{row.amount}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
        
        {selectedRows.size > 0 && <div className="flex items-center justify-between p-4 bg-surface-subtle rounded">
            <Text variant="regular">
              {selectedRows.size} row{selectedRows.size !== 1 ? "s" : ""} selected
            </Text>
            <Button size="sm" variant="outline" theme="destructive">
              Delete Selected
            </Button>
          </div>}
      </div>;
  }
}`,...(Y=(G=N.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var _,K,X;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Settings Form",
  render: () => {
    const [settings, setSettings] = useState({
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      marketingEmails: false,
      securityAlerts: true
    });
    const handleChange = (key: keyof typeof settings) => {
      setSettings(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };
    return <Card className="max-w-md">
        <Heading variant="titleSm" className="mb-4">Notification Settings</Heading>
        <div className="space-y-4">
          <div className="space-y-3">
            <Text variant="medium" className="font-medium">Communication Preferences</Text>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Checkbox id="email" checked={settings.emailNotifications} onCheckedChange={() => handleChange("emailNotifications")} className="mt-0.5" />
                <div>
                  <Label htmlFor="email" className="cursor-pointer font-medium">
                    Email Notifications
                  </Label>
                  <Text variant="regular" className="text-text-weak">
                    Receive transaction updates via email
                  </Text>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Checkbox id="sms" checked={settings.smsNotifications} onCheckedChange={() => handleChange("smsNotifications")} className="mt-0.5" />
                <div>
                  <Label htmlFor="sms" className="cursor-pointer font-medium">
                    SMS Notifications
                  </Label>
                  <Text variant="regular" className="text-text-weak">
                    Get alerts sent to your phone
                  </Text>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Checkbox id="push" checked={settings.pushNotifications} onCheckedChange={() => handleChange("pushNotifications")} className="mt-0.5" />
                <div>
                  <Label htmlFor="push" className="cursor-pointer font-medium">
                    Push Notifications
                  </Label>
                  <Text variant="regular" className="text-text-weak">
                    Browser and mobile app notifications
                  </Text>
                </div>
              </div>
            </div>
          </div>
          
          <Divider />
          
          <div className="space-y-3">
            <Text variant="medium" className="font-medium">Other Preferences</Text>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Checkbox id="marketing" checked={settings.marketingEmails} onCheckedChange={() => handleChange("marketingEmails")} />
                <Label htmlFor="marketing" className="cursor-pointer">
                  Marketing emails and promotions
                </Label>
              </div>
              
              <div className="flex items-center gap-2">
                <Checkbox id="security" checked={settings.securityAlerts} onCheckedChange={() => handleChange("securityAlerts")} />
                <Label htmlFor="security" className="cursor-pointer">
                  Security alerts and warnings
                </Label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex gap-2">
          <Button theme="primary" size="sm">Save Settings</Button>
          <Button theme="neutral" variant="outline" size="sm">Cancel</Button>
        </div>
      </Card>;
  }
}`,...(X=(K=y.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Q,Z,ee;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Terms & Conditions",
  render: () => {
    const [agreed, setAgreed] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    return <Card className="max-w-lg">
        <Heading variant="titleSm" className="mb-4">Complete Registration</Heading>
        
        <div className="mb-6">
          <div className="bg-surface-subtle p-4 rounded mb-4 max-h-40 overflow-y-auto">
            <Text variant="regular" className="text-text-weak">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br /><br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </div>
          
          <div className="flex items-start gap-2">
            <Checkbox id="agree" checked={agreed} onCheckedChange={value => setAgreed(Boolean(value))} className="mt-0.5" required />
            <Label htmlFor="agree" className="cursor-pointer text-sm">
              I have read and agree to the <span className="text-primary underline">Terms of Service</span> and{" "}
              <span className="text-primary underline">Privacy Policy</span>
            </Label>
          </div>
        </div>
        
        <Button theme="primary" className="w-full" disabled={!agreed} onClick={() => setSubmitted(true)}>
          Continue
        </Button>
        
        {submitted && !agreed && <Text variant="regular" className="text-danger mt-2">
            You must agree to the terms to continue
          </Text>}
      </Card>;
  }
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,se;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Filter Options",
  render: () => {
    const [filters, setFilters] = useState({
      status: {
        active: true,
        pending: true,
        inactive: false
      },
      type: {
        personal: true,
        business: false,
        enterprise: true
      }
    });
    const handleFilterChange = (category: keyof typeof filters, key: string) => {
      setFilters(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [key]: !prev[category][key as keyof typeof prev[typeof category]]
        }
      }));
    };
    const activeFilterCount = Object.values(filters).reduce((count, category) => count + Object.values(category).filter(Boolean).length, 0);
    return <Card className="max-w-sm">
        <div className="flex items-center justify-between mb-4">
          <Heading variant="titleSm">Filters</Heading>
          {activeFilterCount > 0 && <Badge theme="primary" variant="soft">{activeFilterCount} active</Badge>}
        </div>
        
        <div className="space-y-4">
          <div>
            <Text variant="medium" className="font-medium mb-2">Status</Text>
            <div className="space-y-2">
              {Object.entries(filters.status).map(([key, value]) => <div key={key} className="flex items-center gap-2">
                  <Checkbox id={\`status-\${key}\`} checked={value} onCheckedChange={() => handleFilterChange("status", key)} />
                  <Label htmlFor={\`status-\${key}\`} className="cursor-pointer capitalize">
                    {key}
                  </Label>
                </div>)}
            </div>
          </div>
          
          <Divider />
          
          <div>
            <Text variant="medium" className="font-medium mb-2">Account Type</Text>
            <div className="space-y-2">
              {Object.entries(filters.type).map(([key, value]) => <div key={key} className="flex items-center gap-2">
                  <Checkbox id={\`type-\${key}\`} checked={value} onCheckedChange={() => handleFilterChange("type", key)} />
                  <Label htmlFor={\`type-\${key}\`} className="cursor-pointer capitalize">
                    {key}
                  </Label>
                </div>)}
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex gap-2">
          <Button size="sm" theme="primary" className="flex-1">
            Apply Filters
          </Button>
          <Button size="sm" variant="outline" theme="neutral" onClick={() => setFilters({
          status: {
            active: false,
            pending: false,
            inactive: false
          },
          type: {
            personal: false,
            business: false,
            enterprise: false
          }
        })}>
            Clear
          </Button>
        </div>
      </Card>;
  }
}`,...(se=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,ie,re;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "Required Field",
  render: () => <form className="space-y-4">
      <div className="flex items-start gap-2">
        <Checkbox id="required" required name="agreement" />
        <div>
          <Label htmlFor="required" className="cursor-pointer">
            I confirm this information is accurate <span className="text-danger">*</span>
          </Label>
          <Text variant="regular" className="text-text-weak">
            This field is required
          </Text>
        </div>
      </div>
      <Button type="submit" theme="primary" size="sm">
        Submit Form
      </Button>
    </form>
}`,...(re=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};const Ee=["Default","WithLabel","Controlled","IndeterminateState","DisabledStates","TableSelection","SettingsForm","TermsAndConditions","FilterOptions","RequiredField"];export{f as Controlled,v as Default,C as DisabledStates,j as FilterOptions,k as IndeterminateState,w as RequiredField,y as SettingsForm,N as TableSelection,S as TermsAndConditions,g as WithLabel,Ee as __namedExportsOrder,$e as default};
