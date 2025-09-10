import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as B}from"./index-DRjF_FHU.js";import{c as G}from"./cn-8RyR4BqC.js";import{c as Y}from"./index-Bb4qSo10.js";import{t as Z}from"./styles-x1yxmyQd.js";import{F as ee}from"./back-DRAOMeks.js";import{B as K}from"./Button-Dfa2Gn1g.js";import{T as ae}from"./Text-C8HBwI4b.js";import{I as g}from"./Icon-CTnhpE1d.js";import{F as te}from"./home-AXLP10u_.js";import{F as k}from"./chevron-right-D4FvqfWr.js";import"./index-HZDBD2ik.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";const se=Y(G(Z({variant:"medium"})," flex items-center"),{variants:{theme:{primary:"text-text-accent",neutral:"text-text-default"}},defaultVariants:{theme:"primary"}}),s=({children:n,className:t,theme:m})=>e.jsx("div",{className:G(se({theme:m}),t),children:n}),a=B.forwardRef((n,t)=>e.jsx(K,{...n,variant:"link",iconPosition:"right",className:"pr-0 text-text-weak",ref:t}));a.displayName="BreadcumbItem";const r=B.forwardRef((n,t)=>e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx(K,{...n,variant:"link",icon:e.jsx(g,{icon:e.jsx(ee,{}),size:"lg"}),iconPosition:"left",className:"pr-0",ref:t,children:"Back"}),e.jsx(ae,{className:"ml-1 mr-2 text-text-weak",variant:"medium",children:"/"})]}));r.displayName="BreadcumbBack";s.__docgenInfo={description:"",methods:[],displayName:"Breadcumb",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};a.__docgenInfo={description:"",methods:[],displayName:"BreadcumbItem"};r.__docgenInfo={description:"",methods:[],displayName:"BreadcumbBack"};const Be={title:"Xenith UI/Components/Breadcumb",tags:["autodocs"],component:s,parameters:{docs:{description:{component:`
## Overview
The Breadcumb component provides navigation context by showing the user's current location within the application hierarchy. It helps users understand where they are and provides easy navigation back to parent pages.

### Key Features
- **Navigation Context**: Shows hierarchical page structure
- **Back Navigation**: Built-in back button with history tracking support
- **Theme Support**: Primary and neutral color themes
- **Accessible**: Keyboard navigable with proper ARIA attributes
- **Flexible**: Supports custom click handlers and styling

### Usage
\`\`\`tsx
import { Breadcumb, BreadcumbBack, BreadcumbItem } from "@xenithlabs/xenith-ui";

// Basic breadcrumb
<Breadcumb>
  <BreadcumbBack onClick={() => navigate('/dashboard')} />
  <BreadcumbItem>Transaction Details</BreadcumbItem>
</Breadcumb>

// Multi-level breadcrumb
<Breadcumb>
  <BreadcumbItem onClick={() => navigate('/dashboard')}>
    Dashboard
  </BreadcumbItem>
  <BreadcumbItem onClick={() => navigate('/merchants')}>
    Merchants
  </BreadcumbItem>
  <BreadcumbItem>Merchant Details</BreadcumbItem>
</Breadcumb>
\`\`\`

### Component Props

#### Breadcumb Props
- **theme** ("primary" | "neutral"): Color theme. Default: "primary"
- **className** (string): Additional CSS classes
- **children** (ReactNode): Breadcrumb items

#### BreadcumbItem Props
- Extends all Button component props
- **onClick** (() => void): Click handler for navigation
- **children** (ReactNode): Item label

#### BreadcumbBack Props
- Extends all Button component props
- **onClick** (() => void): Click handler for back navigation
        `}}},argTypes:{theme:{control:{type:"select"},options:["primary","neutral"],description:"Color theme of the breadcrumb",table:{type:{summary:'"primary" | "neutral"'},defaultValue:{summary:'"primary"'}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}},children:{control:!1,description:"Breadcrumb items",table:{type:{summary:"ReactNode"}}}},args:{theme:"primary",children:null}},i={args:{theme:"primary",children:null},render:n=>e.jsxs(s,{...n,children:[e.jsx(r,{}),e.jsx(a,{children:"Transaction Details"})]})},l={args:{theme:"primary",children:null},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(s,{theme:"primary",children:[e.jsx(r,{}),e.jsx(a,{children:"Primary Theme"})]}),e.jsxs(s,{theme:"neutral",children:[e.jsx(r,{}),e.jsx(a,{children:"Neutral Theme"})]})]})},d={args:{theme:"primary",children:null},render:()=>e.jsxs(s,{children:[e.jsx(a,{onClick:()=>console.log("Navigate to Dashboard"),children:"Dashboard"}),e.jsx("span",{className:"mx-2 text-text-weak",children:"/"}),e.jsx(a,{onClick:()=>console.log("Navigate to Merchants"),children:"Merchants"}),e.jsx("span",{className:"mx-2 text-text-weak",children:"/"}),e.jsx(a,{children:"Merchant Details"})]})},u={args:{theme:"primary",children:null},render:()=>e.jsxs(s,{children:[e.jsx(a,{onClick:()=>console.log("Navigate to Home"),icon:e.jsx(g,{icon:e.jsx(te,{}),size:"sm"}),iconPosition:"left",children:"Home"}),e.jsx(g,{icon:e.jsx(k,{}),size:"sm",className:"mx-2 text-text-weak"}),e.jsx(a,{onClick:()=>console.log("Navigate to Settings"),children:"Settings"}),e.jsx(g,{icon:e.jsx(k,{}),size:"sm",className:"mx-2 text-text-weak"}),e.jsx(a,{children:"Security"})]})},h={name:"Real World Examples",args:{theme:"primary",children:null},render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Settlement Details Page"}),e.jsxs(s,{children:[e.jsx(r,{onClick:()=>console.log("Back to settlements")}),e.jsx(a,{children:"Transaction Details"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Payout Details Page"}),e.jsxs(s,{children:[e.jsx(r,{onClick:()=>console.log("Back to payouts")}),e.jsx(a,{children:"Payout #PO-123456"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"Merchant Management"}),e.jsxs(s,{children:[e.jsx(a,{onClick:()=>console.log("Navigate to Merchants"),children:"Merchants"}),e.jsx("span",{className:"mx-2 text-text-weak",children:"/"}),e.jsx(a,{onClick:()=>console.log("Navigate to Merchant"),children:"Acme Corporation"}),e.jsx("span",{className:"mx-2 text-text-weak",children:"/"}),e.jsx(a,{children:"Payment Settings"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-3",children:"User Management"}),e.jsxs(s,{children:[e.jsx(a,{onClick:()=>console.log("Navigate to Users"),children:"User Management"}),e.jsx("span",{className:"mx-2 text-text-weak",children:"/"}),e.jsx(a,{onClick:()=>console.log("Navigate to User"),children:"john.doe@example.com"}),e.jsx("span",{className:"mx-2 text-text-weak",children:"/"}),e.jsx(a,{children:"Edit Profile"})]})]})]})},x={name:"Interactive Example",args:{theme:"primary",children:null},render:function(){const[t,m]=B.useState(["Dashboard"]),q={Dashboard:["Merchants","Payouts","Settings","Users"],Merchants:["Acme Corp","Tech Inc","Global Ltd"],Payouts:["Pending","Completed","Failed"],Settings:["General","Security","API Keys"],Users:["Admins","Operators","Viewers"]},$=c=>{m(t.slice(0,c+1))},X=c=>{m([...t,c])},J=()=>{t.length>1&&m(t.slice(0,-1))},Q=t[t.length-1],N=q[Q]||[];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(s,{children:[t.length>1&&e.jsx(e.Fragment,{children:e.jsx(r,{onClick:J})}),t.map((c,o)=>e.jsxs(B.Fragment,{children:[o>0&&t.length===1&&null,o>0&&t.length>1&&e.jsx("span",{className:"mx-2 text-text-weak",children:"/"}),e.jsx(a,{onClick:o<t.length-1?()=>$(o):void 0,children:c})]},o))]}),N.length>0&&e.jsxs("div",{className:"mt-4 p-4 border rounded",children:[e.jsx("p",{className:"text-sm text-text-weak mb-2",children:"Navigate to:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:N.map(c=>e.jsx("button",{onClick:()=>X(c),className:"px-3 py-1 text-sm bg-surface-subtle hover:bg-surface-moderate rounded",children:c},c))})]}),e.jsxs("div",{className:"text-sm text-text-weak",children:["Current path: ",t.join(" / ")]})]})}},p={args:{theme:"primary",children:null},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(s,{className:"text-lg",children:[e.jsx(r,{}),e.jsx(a,{children:"Large Breadcrumb"})]}),e.jsxs(s,{className:"bg-surface-subtle p-3 rounded",children:[e.jsx(r,{}),e.jsx(a,{children:"With Background"})]}),e.jsxs(s,{children:[e.jsx(a,{className:"text-success",children:"Dashboard"}),e.jsx("span",{className:"mx-2 text-text-weak",children:"/"}),e.jsx(a,{className:"text-warning",children:"Pending"}),e.jsx("span",{className:"mx-2 text-text-weak",children:"/"}),e.jsx(a,{className:"text-destructive",children:"Failed Transaction"})]})]})},b={name:"Long Breadcrumb (Responsive)",args:{theme:"primary",children:null},render:()=>e.jsx("div",{className:"max-w-md overflow-hidden",children:e.jsxs(s,{className:"flex-wrap",children:[e.jsx(a,{onClick:()=>console.log("Home"),children:"Home"}),e.jsx("span",{className:"mx-2 text-text-weak",children:"/"}),e.jsx(a,{onClick:()=>console.log("Category"),children:"Category"}),e.jsx("span",{className:"mx-2 text-text-weak",children:"/"}),e.jsx(a,{onClick:()=>console.log("Subcategory"),children:"Subcategory"}),e.jsx("span",{className:"mx-2 text-text-weak",children:"/"}),e.jsx(a,{onClick:()=>console.log("Product"),children:"Product Name"}),e.jsx("span",{className:"mx-2 text-text-weak",children:"/"}),e.jsx(a,{children:"Very Long Product Variant Name That Might Wrap"})]})})};var y,j,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    theme: "primary",
    children: null as any
  },
  render: args => <Breadcumb {...args}>
      <BreadcumbBack />
      <BreadcumbItem>Transaction Details</BreadcumbItem>
    </Breadcumb>
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var I,f,C;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    theme: "primary",
    children: null as any
  },
  render: () => <div className="space-y-4">
      <Breadcumb theme="primary">
        <BreadcumbBack />
        <BreadcumbItem>Primary Theme</BreadcumbItem>
      </Breadcumb>
      
      <Breadcumb theme="neutral">
        <BreadcumbBack />
        <BreadcumbItem>Neutral Theme</BreadcumbItem>
      </Breadcumb>
    </div>
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var w,P,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    theme: "primary",
    children: null as any
  },
  render: () => <Breadcumb>
      <BreadcumbItem onClick={() => console.log('Navigate to Dashboard')}>
        Dashboard
      </BreadcumbItem>
      <span className="mx-2 text-text-weak">/</span>
      <BreadcumbItem onClick={() => console.log('Navigate to Merchants')}>
        Merchants
      </BreadcumbItem>
      <span className="mx-2 text-text-weak">/</span>
      <BreadcumbItem>Merchant Details</BreadcumbItem>
    </Breadcumb>
}`,...(S=(P=d.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var M,T,D;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    theme: "primary",
    children: null as any
  },
  render: () => <Breadcumb>
      <BreadcumbItem onClick={() => console.log('Navigate to Home')} icon={<Icon icon={<HomeIcon />} size="sm" />} iconPosition="left">
        Home
      </BreadcumbItem>
      <Icon icon={<ChevronRightIcon />} size="sm" className="mx-2 text-text-weak" />
      <BreadcumbItem onClick={() => console.log('Navigate to Settings')}>
        Settings
      </BreadcumbItem>
      <Icon icon={<ChevronRightIcon />} size="sm" className="mx-2 text-text-weak" />
      <BreadcumbItem>Security</BreadcumbItem>
    </Breadcumb>
}`,...(D=(T=u.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var R,F,U;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Real World Examples",
  args: {
    theme: "primary",
    children: null as any
  },
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Settlement Details Page</h3>
        <Breadcumb>
          <BreadcumbBack onClick={() => console.log('Back to settlements')} />
          <BreadcumbItem>Transaction Details</BreadcumbItem>
        </Breadcumb>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Payout Details Page</h3>
        <Breadcumb>
          <BreadcumbBack onClick={() => console.log('Back to payouts')} />
          <BreadcumbItem>Payout #PO-123456</BreadcumbItem>
        </Breadcumb>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Merchant Management</h3>
        <Breadcumb>
          <BreadcumbItem onClick={() => console.log('Navigate to Merchants')}>
            Merchants
          </BreadcumbItem>
          <span className="mx-2 text-text-weak">/</span>
          <BreadcumbItem onClick={() => console.log('Navigate to Merchant')}>
            Acme Corporation
          </BreadcumbItem>
          <span className="mx-2 text-text-weak">/</span>
          <BreadcumbItem>Payment Settings</BreadcumbItem>
        </Breadcumb>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">User Management</h3>
        <Breadcumb>
          <BreadcumbItem onClick={() => console.log('Navigate to Users')}>
            User Management
          </BreadcumbItem>
          <span className="mx-2 text-text-weak">/</span>
          <BreadcumbItem onClick={() => console.log('Navigate to User')}>
            john.doe@example.com
          </BreadcumbItem>
          <span className="mx-2 text-text-weak">/</span>
          <BreadcumbItem>Edit Profile</BreadcumbItem>
        </Breadcumb>
      </div>
    </div>
}`,...(U=(F=h.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var A,E,L;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Interactive Example",
  args: {
    theme: "primary",
    children: null as any
  },
  render: function InteractiveBreadcrumbStory() {
    const [path, setPath] = React.useState(['Dashboard']);
    const pages = {
      Dashboard: ['Merchants', 'Payouts', 'Settings', 'Users'],
      Merchants: ['Acme Corp', 'Tech Inc', 'Global Ltd'],
      Payouts: ['Pending', 'Completed', 'Failed'],
      Settings: ['General', 'Security', 'API Keys'],
      Users: ['Admins', 'Operators', 'Viewers']
    };
    const navigate = (index: number) => {
      setPath(path.slice(0, index + 1));
    };
    const goToChild = (child: string) => {
      setPath([...path, child]);
    };
    const goBack = () => {
      if (path.length > 1) {
        setPath(path.slice(0, -1));
      }
    };
    const currentPage = path[path.length - 1];
    const childPages = pages[currentPage as keyof typeof pages] || [];
    return <div className="space-y-4">
        <Breadcumb>
          {path.length > 1 && <>
              <BreadcumbBack onClick={goBack} />
            </>}
          {path.map((page, index) => <React.Fragment key={index}>
              {index > 0 && path.length === 1 && null}
              {index > 0 && path.length > 1 && <span className="mx-2 text-text-weak">/</span>}
              <BreadcumbItem onClick={index < path.length - 1 ? () => navigate(index) : undefined}>
                {page}
              </BreadcumbItem>
            </React.Fragment>)}
        </Breadcumb>

        {childPages.length > 0 && <div className="mt-4 p-4 border rounded">
            <p className="text-sm text-text-weak mb-2">Navigate to:</p>
            <div className="flex flex-wrap gap-2">
              {childPages.map(child => <button key={child} onClick={() => goToChild(child)} className="px-3 py-1 text-sm bg-surface-subtle hover:bg-surface-moderate rounded">
                  {child}
                </button>)}
            </div>
          </div>}

        <div className="text-sm text-text-weak">
          Current path: {path.join(' / ')}
        </div>
      </div>;
  }
}`,...(L=(E=x.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var W,H,V;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    theme: "primary",
    children: null as any
  },
  render: () => <div className="space-y-4">
      <Breadcumb className="text-lg">
        <BreadcumbBack />
        <BreadcumbItem>Large Breadcrumb</BreadcumbItem>
      </Breadcumb>

      <Breadcumb className="bg-surface-subtle p-3 rounded">
        <BreadcumbBack />
        <BreadcumbItem>With Background</BreadcumbItem>
      </Breadcumb>

      <Breadcumb>
        <BreadcumbItem className="text-success">Dashboard</BreadcumbItem>
        <span className="mx-2 text-text-weak">/</span>
        <BreadcumbItem className="text-warning">Pending</BreadcumbItem>
        <span className="mx-2 text-text-weak">/</span>
        <BreadcumbItem className="text-destructive">Failed Transaction</BreadcumbItem>
      </Breadcumb>
    </div>
}`,...(V=(H=p.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var _,z,O;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Long Breadcrumb (Responsive)",
  args: {
    theme: "primary",
    children: null as any
  },
  render: () => <div className="max-w-md overflow-hidden">
      <Breadcumb className="flex-wrap">
        <BreadcumbItem onClick={() => console.log('Home')}>
          Home
        </BreadcumbItem>
        <span className="mx-2 text-text-weak">/</span>
        <BreadcumbItem onClick={() => console.log('Category')}>
          Category
        </BreadcumbItem>
        <span className="mx-2 text-text-weak">/</span>
        <BreadcumbItem onClick={() => console.log('Subcategory')}>
          Subcategory
        </BreadcumbItem>
        <span className="mx-2 text-text-weak">/</span>
        <BreadcumbItem onClick={() => console.log('Product')}>
          Product Name
        </BreadcumbItem>
        <span className="mx-2 text-text-weak">/</span>
        <BreadcumbItem>
          Very Long Product Variant Name That Might Wrap
        </BreadcumbItem>
      </Breadcumb>
    </div>
}`,...(O=(z=b.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};const Ne=["Default","Themes","MultiLevel","WithIcons","RealWorldExamples","InteractiveBreadcrumb","CustomStyling","LongBreadcrumb"];export{p as CustomStyling,i as Default,x as InteractiveBreadcrumb,b as LongBreadcrumb,d as MultiLevel,h as RealWorldExamples,l as Themes,u as WithIcons,Ne as __namedExportsOrder,Be as default};
