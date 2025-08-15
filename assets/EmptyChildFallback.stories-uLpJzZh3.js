import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as i}from"./index-DRjF_FHU.js";import{C as r}from"./Card-C5rr-ZzX.js";import{H as C}from"./Heading-DjlBwQyS.js";import{T as s}from"./Text-C8HBwI4b.js";import{B as ne}from"./Badge-TrTt3KrN.js";import{B as se}from"./Button-DAgrt3Vy.js";import"./cn-8RyR4BqC.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-x1yxmyQd.js";import"./spinner-ojW7ALd7.js";import"./Icon-CTnhpE1d.js";import"./chevron-down-CyV3wpL8.js";const t=({children:a,fallback:n})=>{const l=i.useRef(null),[re,le]=i.useState(!1),[ie,ce]=i.useState(!0);return i.useLayoutEffect(()=>{if(l.current){const oe=(l.current.innerText||l.current.textContent||"").trim().length>0;le(!oe),ce(!1)}},[a]),ie?e.jsx("div",{ref:l,style:{position:"absolute",visibility:"hidden",pointerEvents:"none",left:"-9999px"},children:a}):re?e.jsx(e.Fragment,{children:n}):e.jsx(e.Fragment,{children:a})};t.__docgenInfo={description:"",methods:[],displayName:"EmptyChildFallback",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},fallback:{required:!0,tsType:{name:"ReactNode"},description:""}}};const We={title:"Xenith UI/Components/EmptyChildFallback",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{children:{control:!1,description:"Content to check and potentially render"},fallback:{control:!1,description:"Content to display when children are empty"}}},de=()=>null,me=()=>e.jsx("div",{}),pe=()=>e.jsx("div",{children:e.jsx("div",{children:e.jsx("div",{})})}),he=()=>e.jsx("div",{children:"   "}),xe=()=>e.jsx("div",{children:"I have content!"}),c={render:()=>e.jsx(t,{fallback:e.jsxs(r,{className:"text-center p-8",children:[e.jsx(C,{variant:"titleMd",children:"No Content Available"}),e.jsx(s,{className:"text-text-weak mt-2",children:"This is the fallback content shown when children are empty"})]}),children:e.jsx(de,{})})},o={name:"Empty Div (Shows Fallback)",render:()=>e.jsx(t,{fallback:e.jsx(r,{className:"bg-warning/10 border-warning",children:e.jsx(s,{className:"text-warning",children:"Fallback shown because child is an empty div"})}),children:e.jsx(me,{})})},d={name:"Nested Empty Divs (Shows Fallback)",render:()=>e.jsx(t,{fallback:e.jsx(r,{className:"bg-critical/10 border-critical",children:e.jsx(s,{className:"text-critical",children:"Fallback shown - nested divs with no text content"})}),children:e.jsx(pe,{})})},m={name:"Whitespace Only (Shows Fallback)",render:()=>e.jsx(t,{fallback:e.jsx(ne,{theme:"warning",variant:"soft",children:"Whitespace is considered empty"}),children:e.jsx(he,{})})},p={name:"Has Content (Shows Children)",render:()=>e.jsx(t,{fallback:e.jsx(r,{children:e.jsx(s,{children:"This fallback won't be shown"})}),children:e.jsx(xe,{})})},h={name:"Array All Null (Shows Fallback)",render:()=>{const a=[];return e.jsx(t,{fallback:e.jsxs(r,{className:"text-center p-6",children:[e.jsx(C,{variant:"titleSm",children:"No Items Found"}),e.jsx(s,{className:"text-text-weak mt-2",children:"All array items rendered null"})]}),children:a.map((n,l)=>n!=null&&n.visible?e.jsx("div",{children:n.content},l):null)})}},x={name:"Array of Empty Divs (Shows Fallback)",render:()=>{const a=[1,2,3];return e.jsx(t,{fallback:e.jsx(r,{className:"text-center p-6",children:e.jsx(s,{className:"text-text-weak",children:"All items rendered empty divs"})}),children:a.map((n,l)=>e.jsx("div",{},l))})}},u={name:"Mixed Empty and Content (Shows Children)",render:()=>e.jsxs(t,{fallback:e.jsx(r,{children:e.jsx(s,{children:"This won't show because there's some content"})}),children:[e.jsx("div",{}),e.jsx("div",{children:"Some actual content here"}),e.jsx("div",{})]})},b={name:"Interactive Toggle Example",render:()=>{const[a,n]=i.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(se,{onClick:()=>n(!a),theme:"primary",size:"sm",children:["Toggle Content (",a?"Hide":"Show",")"]}),e.jsx(t,{fallback:e.jsx(r,{className:"bg-surface-subtle",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-12 h-12 bg-bg-weak rounded-full animate-pulse"}),e.jsxs("div",{children:[e.jsx("div",{className:"h-4 w-32 bg-bg-weak rounded animate-pulse mb-2"}),e.jsx("div",{className:"h-3 w-24 bg-bg-weak rounded animate-pulse"})]})]})}),children:a&&e.jsxs(r,{children:[e.jsx(C,{variant:"titleSm",children:"Dynamic Content"}),e.jsx(s,{className:"text-text-weak mt-2",children:"This content appears when toggled on"})]})})]})}},y={name:"Real World - User List",render:()=>{const a=[];return e.jsx(t,{fallback:e.jsxs(r,{className:"text-center py-12",children:[e.jsx("div",{className:"w-16 h-16 bg-surface-subtle rounded-full mx-auto mb-4 flex items-center justify-center",children:e.jsx(s,{className:"text-2xl",children:"👥"})}),e.jsx(C,{variant:"titleMd",children:"No Users Found"}),e.jsx(s,{className:"text-text-weak mt-2 mb-6",children:"Start by inviting team members to your workspace"}),e.jsx(se,{theme:"primary",size:"sm",children:"Invite Team Members"})]}),children:a.map(n=>e.jsx(r,{className:"mb-2",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-accent rounded-full"}),e.jsxs("div",{children:[e.jsx(s,{variant:"medium",children:n.name}),e.jsx(s,{variant:"regular",className:"text-text-weak",children:n.email})]})]})},n.id))})}},k={name:"Complex Empty Structure (Shows Fallback)",render:()=>e.jsx(t,{fallback:e.jsx(ne,{theme:"destructive",variant:"soft",children:"Complex nested structure was empty"}),children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col",children:[e.jsx("span",{}),e.jsx("div",{children:e.jsx("p",{})})]})})})})},v={name:"HTML Entities Only (Shows Fallback)",render:()=>e.jsx(t,{fallback:e.jsx(s,{className:"text-text-weak",children:"Non-breaking spaces and entities are considered empty"}),children:e.jsx("div",{children:"   "})})};var w,f,g;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <EmptyChildFallback fallback={<Card className="text-center p-8">
          <Heading variant="titleMd">No Content Available</Heading>
          <Text className="text-text-weak mt-2">
            This is the fallback content shown when children are empty
          </Text>
        </Card>}>
      <NullComponent />
    </EmptyChildFallback>
}`,...(g=(f=c.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var N,j,E;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Empty Div (Shows Fallback)",
  render: () => <EmptyChildFallback fallback={<Card className="bg-warning/10 border-warning">
          <Text className="text-warning">
            Fallback shown because child is an empty div
          </Text>
        </Card>}>
      <EmptyDivComponent />
    </EmptyChildFallback>
}`,...(E=(j=o.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var F,T,S;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Nested Empty Divs (Shows Fallback)",
  render: () => <EmptyChildFallback fallback={<Card className="bg-critical/10 border-critical">
          <Text className="text-critical">
            Fallback shown - nested divs with no text content
          </Text>
        </Card>}>
      <NestedEmptyDivComponent />
    </EmptyChildFallback>
}`,...(S=(T=d.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var W,D,H;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Whitespace Only (Shows Fallback)",
  render: () => <EmptyChildFallback fallback={<Badge theme="warning" variant="soft">
          Whitespace is considered empty
        </Badge>}>
      <WhitespaceComponent />
    </EmptyChildFallback>
}`,...(H=(D=m.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var A,M,R;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Has Content (Shows Children)",
  render: () => <EmptyChildFallback fallback={<Card>
          <Text>This fallback won't be shown</Text>
        </Card>}>
      <ContentComponent />
    </EmptyChildFallback>
}`,...(R=(M=p.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var B,I,L;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Array All Null (Shows Fallback)",
  render: () => {
    const items: any[] = [];
    return <EmptyChildFallback fallback={<Card className="text-center p-6">
            <Heading variant="titleSm">No Items Found</Heading>
            <Text className="text-text-weak mt-2">
              All array items rendered null
            </Text>
          </Card>}>
        {items.map((item, i) => item?.visible ? <div key={i}>{item.content}</div> : null)}
      </EmptyChildFallback>;
  }
}`,...(L=(I=h.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var O,U,_;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Array of Empty Divs (Shows Fallback)",
  render: () => {
    const items = [1, 2, 3];
    return <EmptyChildFallback fallback={<Card className="text-center p-6">
            <Text className="text-text-weak">
              All items rendered empty divs
            </Text>
          </Card>}>
        {items.map((_, i) => <div key={i}></div>)}
      </EmptyChildFallback>;
  }
}`,...(_=(U=x.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var z,q,K;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Mixed Empty and Content (Shows Children)",
  render: () => <EmptyChildFallback fallback={<Card>
          <Text>This won't show because there's some content</Text>
        </Card>}>
      <div></div>
      <div>Some actual content here</div>
      <div></div>
    </EmptyChildFallback>
}`,...(K=(q=u.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var P,X,G;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Interactive Toggle Example",
  render: () => {
    const [showContent, setShowContent] = useState(false);
    return <div className="space-y-4">
        <Button onClick={() => setShowContent(!showContent)} theme="primary" size="sm">
          Toggle Content ({showContent ? "Hide" : "Show"})
        </Button>
        
        <EmptyChildFallback fallback={<Card className="bg-surface-subtle">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-bg-weak rounded-full animate-pulse" />
                <div>
                  <div className="h-4 w-32 bg-bg-weak rounded animate-pulse mb-2" />
                  <div className="h-3 w-24 bg-bg-weak rounded animate-pulse" />
                </div>
              </div>
            </Card>}>
          {showContent && <Card>
              <Heading variant="titleSm">Dynamic Content</Heading>
              <Text className="text-text-weak mt-2">
                This content appears when toggled on
              </Text>
            </Card>}
        </EmptyChildFallback>
      </div>;
  }
}`,...(G=(X=b.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,Q,V;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Real World - User List",
  render: () => {
    const users: any[] = [];
    return <EmptyChildFallback fallback={<Card className="text-center py-12">
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
          </Card>}>
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
}`,...(V=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var Y,Z,$;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Complex Empty Structure (Shows Fallback)",
  render: () => <EmptyChildFallback fallback={<Badge theme="destructive" variant="soft">
          Complex nested structure was empty
        </Badge>}>
      <div className="container">
        <div className="row">
          <div className="col">
            <span></span>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </EmptyChildFallback>
}`,...($=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "HTML Entities Only (Shows Fallback)",
  render: () => <EmptyChildFallback fallback={<Text className="text-text-weak">
          Non-breaking spaces and entities are considered empty
        </Text>}>
      <div>&nbsp;&nbsp;&nbsp;</div>
    </EmptyChildFallback>
}`,...(ae=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const De=["Default","WithEmptyDiv","WithNestedEmptyDivs","WithWhitespace","WithContent","ArrayOfNullComponents","ArrayWithEmptyDivs","MixedContent","ConditionalRendering","RealWorldExample","ComplexNestedStructure","WithHTMLEntities"];export{h as ArrayOfNullComponents,x as ArrayWithEmptyDivs,k as ComplexNestedStructure,b as ConditionalRendering,c as Default,u as MixedContent,y as RealWorldExample,p as WithContent,o as WithEmptyDiv,v as WithHTMLEntities,d as WithNestedEmptyDivs,m as WithWhitespace,De as __namedExportsOrder,We as default};
