import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{r as a}from"./index-DRjF_FHU.js";import{_ as c,c as W,d as Y,a as M,e as ee}from"./index-DuXoWBk8.js";import{h as k,$ as te,a as ae,b as oe,i as re,c as ne,e as le,f as se,d as z,g as ce}from"./index-COysi2iU.js";import{b as q,B as w}from"./Button-Gcg0sGoa.js";import{c as f}from"./cn-C-5SdYIA.js";import{h as ie}from"./Heading-BbwmavmP.js";import{t as de}from"./styles-BNEhTmYy.js";import"./index-CxRLcT2J.js";import"./index-qtGI3euC.js";import"./index-DdILnG7L.js";import"./index-CWbDPhO_.js";import"./index-BhXpUKZt.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./spinner-fxOeMmbK.js";import"./chevron-down-DqISSPB-.js";import"./Icon-Bs9G1Rwk.js";const fe=a.forwardRef((e,o)=>{const{children:t,...n}=e,l=a.Children.toArray(t),s=l.find(pe);if(s){const i=s.props.children,p=l.map(u=>u===s?a.Children.count(i)>1?a.Children.only(null):a.isValidElement(i)?i.props.children:null:u);return a.createElement(N,c({},n,{ref:o}),a.isValidElement(i)?a.cloneElement(i,void 0,p):null)}return a.createElement(N,c({},n,{ref:o}),t)});fe.displayName="Slot";const N=a.forwardRef((e,o)=>{const{children:t,...n}=e;return a.isValidElement(t)?a.cloneElement(t,{...ue(n,t.props),ref:o?W(o,t.ref):t.ref}):a.Children.count(t)>1?a.Children.only(null):null});N.displayName="SlotClone";const L=({children:e})=>a.createElement(a.Fragment,null,e);function pe(e){return a.isValidElement(e)&&e.type===L}function ue(e,o){const t={...o};for(const n in o){const l=e[n],s=o[n];/^on[A-Z]/.test(n)?l&&s?t[n]=(...p)=>{s(...p),l(...p)}:l&&(t[n]=l):n==="style"?t[n]={...l,...s}:n==="className"&&(t[n]=[l,s].filter(Boolean).join(" "))}return{...e,...t}}const ge="AlertDialog",[me,Qe]=Y(ge,[k]),d=k(),$e=e=>{const{__scopeAlertDialog:o,...t}=e,n=d(o);return a.createElement(te,c({},n,t,{modal:!0}))},Ae=a.forwardRef((e,o)=>{const{__scopeAlertDialog:t,...n}=e,l=d(t);return a.createElement(ae,c({},l,n,{ref:o}))}),De=e=>{const{__scopeAlertDialog:o,...t}=e,n=d(o);return a.createElement(ce,c({},n,t))},xe=a.forwardRef((e,o)=>{const{__scopeAlertDialog:t,...n}=e,l=d(t);return a.createElement(oe,c({},l,n,{ref:o}))}),U="AlertDialogContent",[be,he]=me(U),_e=a.forwardRef((e,o)=>{const{__scopeAlertDialog:t,children:n,...l}=e,s=d(t),i=a.useRef(null),p=M(o,i),u=a.useRef(null);return a.createElement(re,{contentName:U,titleName:ye,docsSlug:"alert-dialog"},a.createElement(be,{scope:t,cancelRef:u},a.createElement(ne,c({role:"alertdialog"},s,l,{ref:p,onOpenAutoFocus:ee(l.onOpenAutoFocus,g=>{var j;g.preventDefault(),(j=u.current)===null||j===void 0||j.focus({preventScroll:!0})}),onPointerDownOutside:g=>g.preventDefault(),onInteractOutside:g=>g.preventDefault()}),a.createElement(L,null,n),!1)))}),ye="AlertDialogTitle",ve=a.forwardRef((e,o)=>{const{__scopeAlertDialog:t,...n}=e,l=d(t);return a.createElement(le,c({},l,n,{ref:o}))}),Ce=a.forwardRef((e,o)=>{const{__scopeAlertDialog:t,...n}=e,l=d(t);return a.createElement(se,c({},l,n,{ref:o}))}),je=a.forwardRef((e,o)=>{const{__scopeAlertDialog:t,...n}=e,l=d(t);return a.createElement(z,c({},l,n,{ref:o}))}),Ne="AlertDialogCancel",we=a.forwardRef((e,o)=>{const{__scopeAlertDialog:t,...n}=e,{cancelRef:l}=he(Ne,t),s=d(t),i=M(o,l);return a.createElement(z,c({},s,n,{ref:i}))}),Ee=$e,Te=Ae,Se=De,X=xe,Z=_e,G=je,J=we,K=ve,Q=Ce,C=Ee,E=Te,Re=Se,T=a.forwardRef(({className:e,...o},t)=>r.jsx(X,{className:f("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...o,ref:t}));T.displayName=X.displayName;const m=a.forwardRef(({className:e,...o},t)=>r.jsxs(Re,{children:[r.jsx(T,{}),r.jsx(Z,{ref:t,className:f("fixed left-[50%] top-[50%] min-w-[400px] flex flex-col justify-between z-50 max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border bg-bg-default p-6 shadow-modal duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg divide-y",e),...o})]}));m.displayName=Z.displayName;const $=({className:e,...o})=>r.jsx("div",{className:f("flex flex-col space-y-3 text-center sm:text-left",e),...o});$.displayName="AlertDialogHeader";const A=({className:e,...o})=>r.jsx("div",{className:f("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4 ",e),...o});A.displayName="AlertDialogFooter";const D=a.forwardRef(({className:e,...o},t)=>r.jsx(K,{ref:t,className:f(ie({variant:"titleMd"}),e),...o}));D.displayName=K.displayName;const x=a.forwardRef(({className:e,...o},t)=>r.jsx(Q,{ref:t,className:f(de({variant:"medium"}),"text-text-weak font-sans mt-3",e),...o}));x.displayName=Q.displayName;const b=a.forwardRef(({className:e,variant:o,theme:t,size:n,...l},s)=>r.jsx(G,{ref:s,className:f(q({variant:o,theme:t,size:n}),e),...l}));b.displayName=G.displayName;const h=a.forwardRef(({className:e,variant:o="outline",theme:t="neutral",size:n,...l},s)=>r.jsx(J,{ref:s,className:f(q({variant:o,theme:t,size:n}),"mt-2 sm:mt-0",e),...l}));h.displayName=J.displayName;T.__docgenInfo={description:"",methods:[]};m.__docgenInfo={description:"",methods:[]};$.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};A.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};D.__docgenInfo={description:"",methods:[]};x.__docgenInfo={description:"",methods:[]};b.__docgenInfo={description:"",methods:[]};h.__docgenInfo={description:"",methods:[],props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},theme:{defaultValue:{value:'"neutral"',computed:!1},required:!1}}};const We={title:"Xenith UI/Components/Alert Dialog",component:C,tags:["autodocs"]},_={render:e=>r.jsxs(C,{...e,children:[r.jsx(E,{asChild:!0,children:r.jsx(w,{variant:"outline",children:"Show Dialog"})}),r.jsxs(m,{children:[r.jsxs($,{children:[r.jsx(D,{children:"Are you absolutely sure?"}),r.jsx(x,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),r.jsxs(A,{children:[r.jsx(h,{children:"Cancel"}),r.jsx(b,{children:"Continue"})]})]})]})},y={render:e=>r.jsxs(C,{...e,children:[r.jsx(E,{asChild:!0,children:r.jsx(w,{variant:"outline",children:"Show Dialog"})}),r.jsxs(m,{children:[r.jsxs($,{children:[r.jsx(D,{children:"Are you absolutely sure?"}),r.jsx(x,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),r.jsxs(A,{children:[r.jsx(h,{children:"Cancel"}),r.jsx(b,{variant:"outline",children:"Continue"})]})]})]})},v={render:e=>r.jsxs(C,{...e,children:[r.jsx(E,{asChild:!0,children:r.jsx(w,{theme:"destructive",variant:"link",children:"Delete Item"})}),r.jsxs(m,{children:[r.jsxs($,{children:[r.jsx(D,{children:"Delete Overdraft"}),r.jsx(x,{children:"Are you sure you want to delete this overdraft?"})]}),r.jsxs(A,{children:[r.jsx(h,{children:"Cancel"}),r.jsx(b,{theme:"destructive",children:"Delete"})]})]})]})};var S,R,P;_.parameters={..._.parameters,docs:{...(S=_.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(R=_.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var B,I,F;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(I=y.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var H,O,V;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(V=(O=v.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const Ye=["Default","ChangeActionButtonVariant","ChangeActionButtonTheme"];export{v as ChangeActionButtonTheme,y as ChangeActionButtonVariant,_ as Default,Ye as __namedExportsOrder,We as default};
