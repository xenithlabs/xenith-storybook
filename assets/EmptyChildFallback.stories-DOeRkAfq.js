import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as c}from"./index-DRjF_FHU.js";import{C as r}from"./Card-C5rr-ZzX.js";import{H as f}from"./Heading-DjlBwQyS.js";import{T as a}from"./Text-C8HBwI4b.js";import{B as se}from"./Badge-CQf0SPqP.js";import{B as re}from"./Button-47JPF8V9.js";import"./cn-8RyR4BqC.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-x1yxmyQd.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";import"./Icon-CTnhpE1d.js";const l=({children:n,fallback:s})=>{const t=c.useRef(null),[i,le]=c.useState(!1),[ie,ce]=c.useState(!0);return c.useLayoutEffect(()=>{if(t.current){const oe=(t.current.innerText||t.current.textContent||"").trim().length>0;le(!oe),ce(!1)}},[n]),ie?e.jsx("div",{ref:t,style:{position:"absolute",visibility:"hidden",pointerEvents:"none",left:"-9999px"},children:n}):i?e.jsx(e.Fragment,{children:s}):e.jsx(e.Fragment,{children:n})};l.__docgenInfo={description:"",methods:[],displayName:"EmptyChildFallback",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},fallback:{required:!0,tsType:{name:"ReactNode"},description:""}}};const We={title:"Xenith UI/Components/EmptyChildFallback",component:l,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The EmptyChildFallback component displays a fallback when all children render empty content (no text). It checks the actual rendered HTML innerText to determine if content is truly empty, making it work even with nested empty divs or complex component structures.

### Key Features
- **Smart Empty Detection**: Checks actual rendered innerText, not just null/undefined children
- **Works with Nested Elements**: Detects empty nested divs and complex structures
- **Array Support**: Handles arrays of components that might all be empty
- **No Flicker**: Uses useLayoutEffect for checking before paint
- **Flexible Fallback**: Any ReactNode can be used as fallback content

### Usage
\`\`\`tsx
import { EmptyChildFallback } from "@xenithlabs/xenith-ui";

// Basic usage with null children
<EmptyChildFallback fallback={<div>No content available</div>}>
  {items.map(item => item.visible && <div>{item.content}</div>)}
</EmptyChildFallback>

// With components that might render empty
<EmptyChildFallback fallback={<EmptyState />}>
  <UserList users={users} />
</EmptyChildFallback>
\`\`\`

### Component Props

- **children** (ReactNode): The content to render if not empty
- **fallback** (ReactNode): Content to display when children are empty

### Important Notes
- The component checks for text content using innerText
- Empty divs, spans, or other HTML elements with no text will trigger the fallback
- Whitespace-only content is considered empty
        `}}},argTypes:{children:{control:!1,description:"Content to check and potentially render"},fallback:{control:!1,description:"Content to display when children are empty"}}},de=()=>null,me=()=>e.jsx("div",{}),pe=()=>e.jsx("div",{children:e.jsx("div",{children:e.jsx("div",{})})}),he=()=>e.jsx("div",{children:"   "}),xe=()=>e.jsx("div",{children:"I have content!"}),o={args:{children:e.jsx(de,{}),fallback:e.jsxs(r,{className:"text-center p-8",children:[e.jsx(f,{variant:"titleMd",children:"No Content Available"}),e.jsx(a,{className:"text-text-weak mt-2",children:"This is the fallback content shown when children are empty"})]})}},d={name:"Empty Div (Shows Fallback)",args:{children:e.jsx(me,{}),fallback:e.jsx(r,{className:"bg-warning/10 border-warning",children:e.jsx(a,{className:"text-warning",children:"Fallback shown because child is an empty div"})})}},m={name:"Nested Empty Divs (Shows Fallback)",args:{children:e.jsx(pe,{}),fallback:e.jsx(r,{className:"bg-critical/10 border-critical",children:e.jsx(a,{className:"text-critical",children:"Fallback shown - nested divs with no text content"})})}},p={name:"Whitespace Only (Shows Fallback)",args:{children:e.jsx(he,{}),fallback:e.jsx(se,{theme:"warning",variant:"soft",children:"Whitespace is considered empty"})}},h={name:"Has Content (Shows Children)",args:{children:e.jsx(xe,{}),fallback:e.jsx(r,{children:e.jsx(a,{children:"This fallback won't be shown"})})}},x={name:"Array All Null (Shows Fallback)",args:{children:null,fallback:e.jsxs(r,{className:"text-center p-6",children:[e.jsx(f,{variant:"titleSm",children:"No Items Found"}),e.jsx(a,{className:"text-text-weak mt-2",children:"All array items rendered null"})]})},render:({fallback:n})=>{const s=[];return e.jsx(l,{fallback:n,children:s.map((t,i)=>t!=null&&t.visible?e.jsx("div",{children:t.content},i):null)})}},u={name:"Array of Empty Divs (Shows Fallback)",args:{children:null,fallback:e.jsx(r,{className:"text-center p-6",children:e.jsx(a,{className:"text-text-weak",children:"All items rendered empty divs"})})},render:({fallback:n})=>{const s=[1,2,3];return e.jsx(l,{fallback:n,children:s.map((t,i)=>e.jsx("div",{},i))})}},b={name:"Mixed Empty and Content (Shows Children)",args:{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{}),e.jsx("div",{children:"Some actual content here"}),e.jsx("div",{})]}),fallback:e.jsx(r,{children:e.jsx(a,{children:"This won't show because there's some content"})})}},v={name:"Interactive Toggle Example",args:{children:null,fallback:e.jsx(r,{className:"bg-surface-subtle",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-12 h-12 bg-bg-weak rounded-full animate-pulse"}),e.jsxs("div",{children:[e.jsx("div",{className:"h-4 w-32 bg-bg-weak rounded animate-pulse mb-2"}),e.jsx("div",{className:"h-3 w-24 bg-bg-weak rounded animate-pulse"})]})]})})},render:({fallback:n})=>{const[s,t]=c.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(re,{onClick:()=>t(!s),theme:"primary",size:"sm",children:["Toggle Content (",s?"Hide":"Show",")"]}),e.jsx(l,{fallback:n,children:s&&e.jsxs(r,{children:[e.jsx(f,{variant:"titleSm",children:"Dynamic Content"}),e.jsx(a,{className:"text-text-weak mt-2",children:"This content appears when toggled on"})]})})]})}},k={name:"Real World - User List",args:{children:null,fallback:e.jsxs(r,{className:"text-center py-12",children:[e.jsx("div",{className:"w-16 h-16 bg-surface-subtle rounded-full mx-auto mb-4 flex items-center justify-center",children:e.jsx(a,{className:"text-2xl",children:"👥"})}),e.jsx(f,{variant:"titleMd",children:"No Users Found"}),e.jsx(a,{className:"text-text-weak mt-2 mb-6",children:"Start by inviting team members to your workspace"}),e.jsx(re,{theme:"primary",size:"sm",children:"Invite Team Members"})]})},render:({fallback:n})=>{const s=[];return e.jsx(l,{fallback:n,children:s.map(t=>e.jsx(r,{className:"mb-2",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-accent rounded-full"}),e.jsxs("div",{children:[e.jsx(a,{variant:"medium",children:t.name}),e.jsx(a,{variant:"regular",className:"text-text-weak",children:t.email})]})]})},t.id))})}},g={name:"Complex Empty Structure (Shows Fallback)",args:{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col",children:[e.jsx("span",{}),e.jsx("div",{children:e.jsx("p",{})})]})})}),fallback:e.jsx(se,{theme:"destructive",variant:"soft",children:"Complex nested structure was empty"})}},y={name:"HTML Entities Only (Shows Fallback)",args:{children:e.jsx("div",{children:"   "}),fallback:e.jsx(a,{className:"text-text-weak",children:"Non-breaking spaces and entities are considered empty"})}};var w,C,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: <NullComponent />,
    fallback: <Card className="text-center p-8">
        <Heading variant="titleMd">No Content Available</Heading>
        <Text className="text-text-weak mt-2">
          This is the fallback content shown when children are empty
        </Text>
      </Card>
  }
}`,...(N=(C=o.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var j,T,E;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Empty Div (Shows Fallback)",
  args: {
    children: <EmptyDivComponent />,
    fallback: <Card className="bg-warning/10 border-warning">
        <Text className="text-warning">
          Fallback shown because child is an empty div
        </Text>
      </Card>
  }
}`,...(E=(T=d.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var S,F,W;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Nested Empty Divs (Shows Fallback)",
  args: {
    children: <NestedEmptyDivComponent />,
    fallback: <Card className="bg-critical/10 border-critical">
        <Text className="text-critical">
          Fallback shown - nested divs with no text content
        </Text>
      </Card>
  }
}`,...(W=(F=m.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var D,H,A;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Whitespace Only (Shows Fallback)",
  args: {
    children: <WhitespaceComponent />,
    fallback: <Badge theme="warning" variant="soft">
        Whitespace is considered empty
      </Badge>
  }
}`,...(A=(H=p.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var M,R,B;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Has Content (Shows Children)",
  args: {
    children: <ContentComponent />,
    fallback: <Card>
        <Text>This fallback won't be shown</Text>
      </Card>
  }
}`,...(B=(R=h.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var I,L,O;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Array All Null (Shows Fallback)",
  args: {
    children: null,
    fallback: <Card className="text-center p-6">
        <Heading variant="titleSm">No Items Found</Heading>
        <Text className="text-text-weak mt-2">
          All array items rendered null
        </Text>
      </Card>
  },
  render: ({
    fallback
  }) => {
    const items: any[] = [];
    return <EmptyChildFallback fallback={fallback}>
        {items.map((item, i) => item?.visible ? <div key={i}>{item.content}</div> : null)}
      </EmptyChildFallback>;
  }
}`,...(O=(L=x.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var U,_,z;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Array of Empty Divs (Shows Fallback)",
  args: {
    children: null,
    fallback: <Card className="text-center p-6">
        <Text className="text-text-weak">
          All items rendered empty divs
        </Text>
      </Card>
  },
  render: ({
    fallback
  }) => {
    const items = [1, 2, 3];
    return <EmptyChildFallback fallback={fallback}>
        {items.map((_, i) => <div key={i}></div>)}
      </EmptyChildFallback>;
  }
}`,...(z=(_=u.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var q,K,P;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Mixed Empty and Content (Shows Children)",
  args: {
    children: <>
        <div></div>
        <div>Some actual content here</div>
        <div></div>
      </>,
    fallback: <Card>
        <Text>This won't show because there's some content</Text>
      </Card>
  }
}`,...(P=(K=b.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var X,G,J;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Interactive Toggle Example",
  args: {
    children: null,
    fallback: <Card className="bg-surface-subtle">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-bg-weak rounded-full animate-pulse" />
          <div>
            <div className="h-4 w-32 bg-bg-weak rounded animate-pulse mb-2" />
            <div className="h-3 w-24 bg-bg-weak rounded animate-pulse" />
          </div>
        </div>
      </Card>
  },
  render: ({
    fallback
  }) => {
    const [showContent, setShowContent] = useState(false);
    return <div className="space-y-4">
        <Button onClick={() => setShowContent(!showContent)} theme="primary" size="sm">
          Toggle Content ({showContent ? "Hide" : "Show"})
        </Button>
        
        <EmptyChildFallback fallback={fallback}>
          {showContent && <Card>
              <Heading variant="titleSm">Dynamic Content</Heading>
              <Text className="text-text-weak mt-2">
                This content appears when toggled on
              </Text>
            </Card>}
        </EmptyChildFallback>
      </div>;
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,V,Y;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Real World - User List",
  args: {
    children: null,
    fallback: <Card className="text-center py-12">
        <div className="w-16 h-16 bg-surface-subtle rounded-full mx-auto mb-4 flex items-center justify-center">
          <Text className="text-2xl">👥</Text>
        </div>
        <Heading variant="titleMd">No Users Found</Heading>
        <Text className="text-text-weak mt-2 mb-6">
          Start by inviting team members to your workspace
        </Text>
        <Button theme="primary" size="sm">
          Invite Team Members
        </Button>
      </Card>
  },
  render: ({
    fallback
  }) => {
    const users: any[] = [];
    return <EmptyChildFallback fallback={fallback}>
        {users.map(user => <Card key={user.id} className="mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full" />
              <div>
                <Text variant="medium">{user.name}</Text>
                <Text variant="regular" className="text-text-weak">
                  {user.email}
                </Text>
              </div>
            </div>
          </Card>)}
      </EmptyChildFallback>;
  }
}`,...(Y=(V=k.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Complex Empty Structure (Shows Fallback)",
  args: {
    children: <div className="container">
        <div className="row">
          <div className="col">
            <span></span>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>,
    fallback: <Badge theme="destructive" variant="soft">
        Complex nested structure was empty
      </Badge>
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,ne;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "HTML Entities Only (Shows Fallback)",
  args: {
    children: <div>&nbsp;&nbsp;&nbsp;</div>,
    fallback: <Text className="text-text-weak">
        Non-breaking spaces and entities are considered empty
      </Text>
  }
}`,...(ne=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const De=["Default","WithEmptyDiv","WithNestedEmptyDivs","WithWhitespace","WithContent","ArrayOfNullComponents","ArrayWithEmptyDivs","MixedContent","ConditionalRendering","RealWorldExample","ComplexNestedStructure","WithHTMLEntities"];export{x as ArrayOfNullComponents,u as ArrayWithEmptyDivs,g as ComplexNestedStructure,v as ConditionalRendering,o as Default,b as MixedContent,k as RealWorldExample,h as WithContent,d as WithEmptyDiv,y as WithHTMLEntities,m as WithNestedEmptyDivs,p as WithWhitespace,De as __namedExportsOrder,We as default};
