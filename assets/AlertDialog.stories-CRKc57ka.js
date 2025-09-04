import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as n}from"./index-DRjF_FHU.js";import{_ as s,c as xe,d as Ce,a as ie,e as $e}from"./index-DuXoWBk8.js";import{h as se,$ as be,a as ve,b as ye,i as je,c as Te,e as we,f as _e,d as ce,g as Ne}from"./index-BoPx_Bfl.js";import{b as de,B as f}from"./Button-CTdNiJsS.js";import{c as C}from"./cn-8RyR4BqC.js";import{h as Ee}from"./Heading-DjlBwQyS.js";import{t as Se}from"./styles-x1yxmyQd.js";import{t as B}from"./useToast-ChPQLukk.js";import"./index-CxRLcT2J.js";import"./index-qtGI3euC.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-BhXpUKZt.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./spinner-ojW7ALd7.js";import"./Icon-CTnhpE1d.js";import"./chevron-down-CyV3wpL8.js";const Pe=n.forwardRef((t,a)=>{const{children:o,...l}=t,r=n.Children.toArray(o),i=r.find(Oe);if(i){const c=i.props.children,b=r.map(v=>v===i?n.Children.count(c)>1?n.Children.only(null):n.isValidElement(c)?c.props.children:null:v);return n.createElement(R,s({},l,{ref:a}),n.isValidElement(c)?n.cloneElement(c,void 0,b):null)}return n.createElement(R,s({},l,{ref:a}),o)});Pe.displayName="Slot";const R=n.forwardRef((t,a)=>{const{children:o,...l}=t;return n.isValidElement(o)?n.cloneElement(o,{...Re(l,o.props),ref:a?xe(a,o.ref):o.ref}):n.Children.count(o)>1?n.Children.only(null):null});R.displayName="SlotClone";const ge=({children:t})=>n.createElement(n.Fragment,null,t);function Oe(t){return n.isValidElement(t)&&t.type===ge}function Re(t,a){const o={...a};for(const l in a){const r=t[l],i=a[l];/^on[A-Z]/.test(l)?r&&i?o[l]=(...b)=>{i(...b),r(...b)}:r&&(o[l]=r):l==="style"?o[l]={...r,...i}:l==="className"&&(o[l]=[r,i].filter(Boolean).join(" "))}return{...t,...o}}const Be="AlertDialog",[Fe,xt]=Ce(Be,[se]),h=se(),He=t=>{const{__scopeAlertDialog:a,...o}=t,l=h(a);return n.createElement(be,s({},l,o,{modal:!0}))},ke=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,...l}=t,r=h(o);return n.createElement(ve,s({},r,l,{ref:a}))}),Ie=t=>{const{__scopeAlertDialog:a,...o}=t,l=h(a);return n.createElement(Ne,s({},l,o))},Ue=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,...l}=t,r=h(o);return n.createElement(ye,s({},r,l,{ref:a}))}),pe="AlertDialogContent",[Le,qe]=Fe(pe),ze=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,children:l,...r}=t,i=h(o),c=n.useRef(null),b=ie(a,c),v=n.useRef(null);return n.createElement(je,{contentName:pe,titleName:Ve,docsSlug:"alert-dialog"},n.createElement(Le,{scope:o,cancelRef:v},n.createElement(Te,s({role:"alertdialog"},i,r,{ref:b,onOpenAutoFocus:$e(r.onOpenAutoFocus,y=>{var O;y.preventDefault(),(O=v.current)===null||O===void 0||O.focus({preventScroll:!0})}),onPointerDownOutside:y=>y.preventDefault(),onInteractOutside:y=>y.preventDefault()}),n.createElement(ge,null,l),!1)))}),Ve="AlertDialogTitle",Me=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,...l}=t,r=h(o);return n.createElement(we,s({},r,l,{ref:a}))}),Ke=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,...l}=t,r=h(o);return n.createElement(_e,s({},r,l,{ref:a}))}),We=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,...l}=t,r=h(o);return n.createElement(ce,s({},r,l,{ref:a}))}),Xe="AlertDialogCancel",Ze=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,...l}=t,{cancelRef:r}=qe(Xe,o),i=h(o),c=ie(a,r);return n.createElement(ce,s({},i,l,{ref:c}))}),Ge=He,Je=ke,Qe=Ie,ue=Ue,me=ze,Ae=We,De=Ze,fe=Me,he=Ke,x=Ge,$=Je,Ye=Qe,F=n.forwardRef(({className:t,...a},o)=>e.jsx(ue,{className:C("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...a,ref:o}));F.displayName=ue.displayName;const d=n.forwardRef(({className:t,...a},o)=>e.jsxs(Ye,{children:[e.jsx(F,{}),e.jsx(me,{ref:o,className:C("fixed left-[50%] top-[50%] min-w-[400px] flex flex-col justify-between z-50 max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border bg-bg-default p-6 shadow-modal duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg divide-y",t),...a})]}));d.displayName=me.displayName;const g=({className:t,...a})=>e.jsx("div",{className:C("flex flex-col space-y-3 text-center sm:text-left",t),...a});g.displayName="AlertDialogHeader";const p=({className:t,...a})=>e.jsx("div",{className:C("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4 ",t),...a});p.displayName="AlertDialogFooter";const u=n.forwardRef(({className:t,...a},o)=>e.jsx(fe,{ref:o,className:C(Ee({variant:"titleMd"}),t),...a}));u.displayName=fe.displayName;const m=n.forwardRef(({className:t,...a},o)=>e.jsx(he,{ref:o,className:C(Se({variant:"medium"}),"text-text-weak font-sans mt-3",t),...a}));m.displayName=he.displayName;const A=n.forwardRef(({className:t,variant:a,theme:o,size:l,...r},i)=>e.jsx(Ae,{ref:i,className:C(de({variant:a,theme:o,size:l}),t),...r}));A.displayName=Ae.displayName;const D=n.forwardRef(({className:t,variant:a="outline",theme:o="neutral",size:l,...r},i)=>e.jsx(De,{ref:i,className:C(de({variant:a,theme:o,size:l}),"mt-2 sm:mt-0",t),...r}));D.displayName=De.displayName;F.__docgenInfo={description:"",methods:[]};d.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};p.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};u.__docgenInfo={description:"",methods:[]};m.__docgenInfo={description:"",methods:[]};A.__docgenInfo={description:"",methods:[]};D.__docgenInfo={description:"",methods:[],props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},theme:{defaultValue:{value:'"neutral"',computed:!1},required:!1}}};const Ct={title:"Xenith UI/Components/Alert Dialog",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The AlertDialog component is a modal dialog that interrupts the user with important content and expects a response. It's built on top of Radix UI's AlertDialog primitive, providing accessibility and focus management out of the box.

### Key Features
- **Accessible**: Follows WAI-ARIA dialog pattern with proper focus management
- **Customizable**: Action buttons support all Button component variants and themes
- **Composable**: Built with separate trigger, content, and action components
- **Focus Trap**: Keeps focus within the dialog when open
- **Portal Rendering**: Renders in a portal to avoid z-index issues

### Usage
\`\`\`tsx
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@xenithlabs/xenith-ui";

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Open Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Dialog Title</AlertDialogTitle>
      <AlertDialogDescription>
        Dialog description text
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
\`\`\`

### Component Props

#### AlertDialog Props
- **defaultOpen** (boolean): The open state when initially rendered (uncontrolled)
- **open** (boolean): The controlled open state
- **onOpenChange** ((open: boolean) => void): Event handler called when the open state changes

#### AlertDialogContent Props
- **className** (string): Additional CSS classes
- **onOpenAutoFocus** ((event: Event) => void): Event handler called when focus moves to the dialog
- **onCloseAutoFocus** ((event: Event) => void): Event handler called when focus moves back to trigger
- **onEscapeKeyDown** ((event: KeyboardEvent) => void): Event handler for escape key press

#### AlertDialogAction & AlertDialogCancel Props
- **variant** ("solid" | "outline" | "soft" | "ghost" | "link"): Button variant
- **theme** ("primary" | "secondary" | "destructive" | "neutral"): Button theme
- **size** ("sm" | "md" | "lg"): Button size
- **className** (string): Additional CSS classes
        `}}},argTypes:{defaultOpen:{control:{type:"boolean"},description:"The open state of the dialog when it is initially rendered (uncontrolled)",table:{type:{summary:"boolean"}}},open:{control:{type:"boolean"},description:"The controlled open state of the dialog",table:{type:{summary:"boolean"}}},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state of the dialog changes",table:{type:{summary:"(open: boolean) => void"}}}}},j={render:t=>e.jsxs(x,{...t,children:[e.jsx($,{asChild:!0,children:e.jsx(f,{variant:"outline",children:"Show Dialog"})}),e.jsxs(d,{children:[e.jsxs(g,{children:[e.jsx(u,{children:"Are you absolutely sure?"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(p,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(A,{children:"Continue"})]})]})]})},T={render:t=>e.jsxs(x,{...t,children:[e.jsx($,{asChild:!0,children:e.jsx(f,{variant:"outline",children:"Show Dialog"})}),e.jsxs(d,{children:[e.jsxs(g,{children:[e.jsx(u,{children:"Are you absolutely sure?"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(p,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(A,{variant:"outline",children:"Continue"})]})]})]})},w={render:t=>e.jsxs(x,{...t,children:[e.jsx($,{asChild:!0,children:e.jsx(f,{theme:"destructive",variant:"link",children:"Delete Item"})}),e.jsxs(d,{children:[e.jsxs(g,{children:[e.jsx(u,{children:"Delete Overdraft"}),e.jsx(m,{children:"Are you sure you want to delete this overdraft?"})]}),e.jsxs(p,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(A,{theme:"destructive",children:"Delete"})]})]})]})},_={name:"Controlled Dialog",render:function(a){const[o,l]=n.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(f,{onClick:()=>l(!0),children:"Open Dialog"}),e.jsx(f,{variant:"outline",onClick:()=>l(!1),children:"Close Dialog"})]}),e.jsx(x,{...a,open:o,onOpenChange:l,children:e.jsxs(d,{children:[e.jsxs(g,{children:[e.jsx(u,{children:"Controlled Dialog"}),e.jsx(m,{children:"This dialog is controlled externally. Use the buttons above to open/close it."})]}),e.jsxs(p,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(A,{children:"Continue"})]})]})})]})}},N={name:"Approval Dialog (Real Example)",render:t=>e.jsxs(x,{...t,children:[e.jsx($,{asChild:!0,children:e.jsx(f,{theme:"primary",children:"Approve Payout"})}),e.jsxs(d,{children:[e.jsxs(g,{children:[e.jsx(u,{children:"Approve Pay Out"}),e.jsx(m,{children:"Are you sure you want to approve this payout?"})]}),e.jsxs(p,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(A,{theme:"primary",onClick:()=>{B({title:"Pay Out successfully approved",theme:"success"})},children:"Approve"})]})]})]})},E={name:"Delete User Dialog (Real Example)",render:t=>e.jsxs(x,{...t,children:[e.jsx($,{asChild:!0,children:e.jsx(f,{theme:"destructive",variant:"outline",size:"sm",children:"Delete User"})}),e.jsxs(d,{children:[e.jsxs(g,{children:[e.jsx(u,{children:"Delete User"}),e.jsx(m,{children:"Are you sure you want to delete this user? This action cannot be undone."})]}),e.jsxs(p,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(A,{theme:"destructive",onClick:()=>{B({title:"User deleted successfully",theme:"success"})},children:"Delete User"})]})]})]})},S={name:"Custom Content",render:t=>e.jsxs(x,{...t,children:[e.jsx($,{asChild:!0,children:e.jsx(f,{variant:"outline",children:"Open Custom Dialog"})}),e.jsxs(d,{className:"max-w-2xl",children:[e.jsxs(g,{children:[e.jsx(u,{children:"Terms and Conditions"}),e.jsx(m,{children:"Please review and accept our terms and conditions to continue."})]}),e.jsxs("div",{className:"max-h-96 overflow-y-auto border rounded p-4 my-4",children:[e.jsx("p",{className:"text-sm text-text-weak",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{className:"text-sm text-text-weak mt-3",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),e.jsxs(p,{children:[e.jsx(D,{children:"Decline"}),e.jsx(A,{theme:"primary",children:"Accept"})]})]})]})},P={name:"Async Action",render:function(a){const[o,l]=n.useState(!1),r=async()=>{l(!0),await new Promise(i=>setTimeout(i,2e3)),l(!1),B({title:"Operation completed successfully",theme:"success"})};return e.jsxs(x,{...a,children:[e.jsx($,{asChild:!0,children:e.jsx(f,{children:"Process Action"})}),e.jsxs(d,{children:[e.jsxs(g,{children:[e.jsx(u,{children:"Process Action"}),e.jsx(m,{children:"This will process the action. The operation may take a few seconds."})]}),e.jsxs(p,{children:[e.jsx(D,{disabled:o,children:"Cancel"}),e.jsx(A,{onClick:r,disabled:o,children:o?"Processing...":"Process"})]})]})]})}};var H,k,I;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(I=(k=j.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var U,L,q;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="outline">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(q=(L=T.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var z,V,M;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button theme="destructive" variant="link">
          Delete Item
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Overdraft</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this overdraft?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction theme="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(M=(V=w.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var K,W,X;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Controlled Dialog",
  render: function ControlledDialog(args) {
    const [open, setOpen] = React.useState(false);
    return <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => setOpen(true)}>Open Dialog</Button>
          <Button variant="outline" onClick={() => setOpen(false)}>Close Dialog</Button>
        </div>
        <AlertDialog {...args} open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Controlled Dialog</AlertDialogTitle>
              <AlertDialogDescription>
                This dialog is controlled externally. Use the buttons above to open/close it.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>;
  }
}`,...(X=(W=_.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,G,J;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Approval Dialog (Real Example)",
  render: args => <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button theme="primary">Approve Payout</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Approve Pay Out</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to approve this payout?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction theme="primary" onClick={() => {
          toast({
            title: "Pay Out successfully approved",
            theme: "success"
          });
        }}>
            Approve
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(J=(G=N.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Y,ee;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Delete User Dialog (Real Example)",
  render: args => <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button theme="destructive" variant="outline" size="sm">
          Delete User
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete User</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this user? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction theme="destructive" onClick={() => {
          toast({
            title: "User deleted successfully",
            theme: "success"
          });
        }}>
            Delete User
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(ee=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,oe,ae;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Custom Content",
  render: args => <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open Custom Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
          <AlertDialogDescription>
            Please review and accept our terms and conditions to continue.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="max-h-96 overflow-y-auto border rounded p-4 my-4">
          <p className="text-sm text-text-weak">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-sm text-text-weak mt-3">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Decline</AlertDialogCancel>
          <AlertDialogAction theme="primary">Accept</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(ae=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ne,le,re;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "Async Action",
  render: function AsyncActionDialog(args) {
    const [isLoading, setIsLoading] = React.useState(false);
    const handleAction = async () => {
      setIsLoading(true);
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
      toast({
        title: "Operation completed successfully",
        theme: "success"
      });
    };
    return <AlertDialog {...args}>
        <AlertDialogTrigger asChild>
          <Button>Process Action</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Process Action</AlertDialogTitle>
            <AlertDialogDescription>
              This will process the action. The operation may take a few seconds.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleAction} disabled={isLoading}>
              {isLoading ? "Processing..." : "Process"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>;
  }
}`,...(re=(le=P.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};const $t=["Default","ChangeActionButtonVariant","ChangeActionButtonTheme","ControlledExample","ApprovalDialog","DeleteUserDialog","CustomContent","AsyncAction"];export{N as ApprovalDialog,P as AsyncAction,w as ChangeActionButtonTheme,T as ChangeActionButtonVariant,_ as ControlledExample,S as CustomContent,j as Default,E as DeleteUserDialog,$t as __namedExportsOrder,Ct as default};
