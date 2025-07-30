import{j as a}from"./jsx-runtime-DR9Q75dM.js";import{r as b}from"./index-DRjF_FHU.js";import{A as r,a as s,b as e}from"./Avatar-BW7BzErr.js";import{F as Y}from"./user-COLMXspT.js";import"./index-CxRLcT2J.js";import"./index-HZDBD2ik.js";import"./cn-8RyR4BqC.js";const ca={title:"Xenith UI/Components/Avatar",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The Avatar component is used to represent a user or entity. It displays an image when available and falls back to initials or an icon when the image is unavailable or still loading. Built on top of Radix UI's Avatar primitive.

### Key Features
- **Image Support**: Displays user profile images with lazy loading
- **Fallback Content**: Shows initials or icons when image is unavailable
- **Accessible**: Includes proper alt text support
- **Customizable**: Supports different sizes and styles through className
- **Loading States**: Gracefully handles image loading with fallback

### Usage
\`\`\`tsx
import { Avatar, AvatarImage, AvatarFallback } from "@xenithlabs/xenith-ui";

<Avatar>
  <AvatarImage src="profile.jpg" alt="User Name" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
\`\`\`

### Component Props

#### Avatar Props
- **className** (string): Additional CSS classes for sizing and styling
- **asChild** (boolean): Merge props onto child element

#### AvatarImage Props
- **src** (string): The image URL
- **alt** (string): Alternative text for the image
- **onLoadingStatusChange** ((status: "idle" | "loading" | "loaded" | "error") => void): Loading status callback

#### AvatarFallback Props
- **className** (string): Additional CSS classes
- **delayMs** (number): Delay before showing fallback (default: 600ms)
        `}}},argTypes:{className:{control:{type:"text"},description:"Additional CSS classes for custom styling",table:{type:{summary:"string"}}}},decorators:[c=>a.jsx("div",{className:"flex items-center justify-center p-6",children:a.jsx(c,{})})]},l={render:()=>a.jsxs(r,{children:[a.jsx(s,{src:"https://i.pravatar.cc/300",alt:"User profile"}),a.jsx(e,{children:"U"})]})},i={name:"With Fallback (No Image)",render:()=>a.jsxs(r,{children:[a.jsx(s,{src:"",alt:"User profile"}),a.jsx(e,{children:"JD"})]})},o={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs(r,{className:"h-6 w-6",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=1",alt:"Small avatar"}),a.jsx(e,{className:"text-xs",children:"S"})]}),a.jsxs(r,{className:"h-8 w-8",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=2",alt:"Medium avatar"}),a.jsx(e,{className:"text-sm",children:"M"})]}),a.jsxs(r,{className:"h-10 w-10",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=3",alt:"Default avatar"}),a.jsx(e,{children:"D"})]}),a.jsxs(r,{className:"h-12 w-12",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=4",alt:"Large avatar"}),a.jsx(e,{className:"text-lg",children:"L"})]}),a.jsxs(r,{className:"h-16 w-16",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=5",alt:"Extra large avatar"}),a.jsx(e,{className:"text-xl",children:"XL"})]})]})},m={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs(r,{className:"rounded-md",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=6",alt:"Square avatar"}),a.jsx(e,{children:"SQ"})]}),a.jsxs(r,{className:"rounded-lg",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=7",alt:"Rounded avatar"}),a.jsx(e,{children:"RD"})]}),a.jsxs(r,{className:"rounded-full",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=8",alt:"Circle avatar"}),a.jsx(e,{children:"CR"})]})]})},d={name:"With Icon Fallback",render:()=>a.jsxs(r,{className:"h-10 w-10",children:[a.jsx(s,{src:"",alt:"User profile"}),a.jsx(e,{children:a.jsx(Y,{className:"h-5 w-5"})})]})},v={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs(r,{className:"h-10 w-10",children:[a.jsx(s,{src:""}),a.jsx(e,{className:"bg-primary text-primary-foreground",children:"AB"})]}),a.jsxs(r,{className:"h-10 w-10",children:[a.jsx(s,{src:""}),a.jsx(e,{className:"bg-secondary text-secondary-foreground",children:"CD"})]}),a.jsxs(r,{className:"h-10 w-10",children:[a.jsx(s,{src:""}),a.jsx(e,{className:"bg-destructive text-destructive-foreground",children:"EF"})]}),a.jsxs(r,{className:"h-10 w-10",children:[a.jsx(s,{src:""}),a.jsx(e,{className:"bg-success text-white",children:"GH"})]})]})},p={name:"User Profile Example",render:()=>{const c=[{name:"John Doe",email:"john@example.com",avatar:"https://i.pravatar.cc/300?img=10"},{name:"Jane Smith",email:"jane@example.com",avatar:""},{name:"Robert Johnson",email:"robert@example.com",avatar:"https://i.pravatar.cc/300?img=12"}],x=t=>t.split(" ").map(n=>n[0]).join("").toUpperCase().slice(0,2);return a.jsx("div",{className:"space-y-4",children:c.map((t,n)=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs(r,{className:"h-10 w-10",children:[a.jsx(s,{src:t.avatar,alt:t.name}),a.jsx(e,{children:x(t.name)})]}),a.jsxs("div",{children:[a.jsx("div",{className:"font-medium",children:t.name}),a.jsx("div",{className:"text-sm text-text-weak",children:t.email})]})]},n))})}},g={name:"Loading State Demo",render:function(){const[x,t]=b.useState(""),[n,A]=b.useState(!1),K=()=>{A(!0),t(""),setTimeout(()=>{t(`https://i.pravatar.cc/300?img=${Math.floor(Math.random()*70)}`),A(!1)},2e3)};return a.jsxs("div",{className:"flex flex-col items-center gap-4",children:[a.jsxs(r,{className:"h-20 w-20",children:[a.jsx(s,{src:x,alt:"Demo avatar",onLoadingStatusChange:V=>console.log("Loading status:",V)}),a.jsx(e,{children:n?"...":"DM"})]}),a.jsx("button",{onClick:K,className:"px-4 py-2 bg-primary text-white rounded hover:bg-primary/90",children:"Load New Avatar"})]})}},h={name:"Avatar Group",render:()=>a.jsxs("div",{className:"flex -space-x-2",children:[a.jsxs(r,{className:"h-8 w-8 border-2 border-background",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=20",alt:"User 1"}),a.jsx(e,{children:"U1"})]}),a.jsxs(r,{className:"h-8 w-8 border-2 border-background",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=21",alt:"User 2"}),a.jsx(e,{children:"U2"})]}),a.jsxs(r,{className:"h-8 w-8 border-2 border-background",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=22",alt:"User 3"}),a.jsx(e,{children:"U3"})]}),a.jsx(r,{className:"h-8 w-8 border-2 border-background",children:a.jsx(e,{className:"bg-muted text-xs",children:"+5"})})]})},u={name:"With Status Indicator",render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("div",{className:"relative",children:[a.jsxs(r,{className:"h-10 w-10",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=30",alt:"Online user"}),a.jsx(e,{children:"ON"})]}),a.jsx("span",{className:"absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-success ring-2 ring-background"})]}),a.jsxs("div",{className:"relative",children:[a.jsxs(r,{className:"h-10 w-10",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=31",alt:"Away user"}),a.jsx(e,{children:"AW"})]}),a.jsx("span",{className:"absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-warning ring-2 ring-background"})]}),a.jsxs("div",{className:"relative",children:[a.jsxs(r,{className:"h-10 w-10",children:[a.jsx(s,{src:"https://i.pravatar.cc/300?img=32",alt:"Offline user"}),a.jsx(e,{children:"OF"})]}),a.jsx("span",{className:"absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-muted ring-2 ring-background"})]})]})};var N,j,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="https://i.pravatar.cc/300" alt="User profile" />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var f,F,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "With Fallback (No Image)",
  render: () => <Avatar>
      <AvatarImage src="" alt="User profile" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
}`,...(w=(F=i.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var I,S,U;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar className="h-6 w-6">
        <AvatarImage src="https://i.pravatar.cc/300?img=1" alt="Small avatar" />
        <AvatarFallback className="text-xs">S</AvatarFallback>
      </Avatar>
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://i.pravatar.cc/300?img=2" alt="Medium avatar" />
        <AvatarFallback className="text-sm">M</AvatarFallback>
      </Avatar>
      <Avatar className="h-10 w-10">
        <AvatarImage src="https://i.pravatar.cc/300?img=3" alt="Default avatar" />
        <AvatarFallback>D</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://i.pravatar.cc/300?img=4" alt="Large avatar" />
        <AvatarFallback className="text-lg">L</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://i.pravatar.cc/300?img=5" alt="Extra large avatar" />
        <AvatarFallback className="text-xl">XL</AvatarFallback>
      </Avatar>
    </div>
}`,...(U=(S=o.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var y,L,D;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar className="rounded-md">
        <AvatarImage src="https://i.pravatar.cc/300?img=6" alt="Square avatar" />
        <AvatarFallback>SQ</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg">
        <AvatarImage src="https://i.pravatar.cc/300?img=7" alt="Rounded avatar" />
        <AvatarFallback>RD</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-full">
        <AvatarImage src="https://i.pravatar.cc/300?img=8" alt="Circle avatar" />
        <AvatarFallback>CR</AvatarFallback>
      </Avatar>
    </div>
}`,...(D=(L=m.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var C,R,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "With Icon Fallback",
  render: () => <Avatar className="h-10 w-10">
      <AvatarImage src="" alt="User profile" />
      <AvatarFallback>
        <UserIcon className="h-5 w-5" />
      </AvatarFallback>
    </Avatar>
}`,...(M=(R=d.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var W,O,E;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar className="h-10 w-10">
        <AvatarImage src="" />
        <AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback>
      </Avatar>
      <Avatar className="h-10 w-10">
        <AvatarImage src="" />
        <AvatarFallback className="bg-secondary text-secondary-foreground">CD</AvatarFallback>
      </Avatar>
      <Avatar className="h-10 w-10">
        <AvatarImage src="" />
        <AvatarFallback className="bg-destructive text-destructive-foreground">EF</AvatarFallback>
      </Avatar>
      <Avatar className="h-10 w-10">
        <AvatarImage src="" />
        <AvatarFallback className="bg-success text-white">GH</AvatarFallback>
      </Avatar>
    </div>
}`,...(E=(O=v.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var J,P,G;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "User Profile Example",
  render: () => {
    const users = [{
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://i.pravatar.cc/300?img=10"
    }, {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: ""
    }, {
      name: "Robert Johnson",
      email: "robert@example.com",
      avatar: "https://i.pravatar.cc/300?img=12"
    }];
    const getInitials = (name: string) => {
      return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
    };
    return <div className="space-y-4">
        {users.map((user, index) => <div key={index} className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-text-weak">{user.email}</div>
            </div>
          </div>)}
      </div>;
  }
}`,...(G=(P=p.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var z,T,B;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Loading State Demo",
  render: function LoadingDemo() {
    const [imageUrl, setImageUrl] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const loadImage = () => {
      setLoading(true);
      setImageUrl("");
      // Simulate loading delay
      setTimeout(() => {
        setImageUrl(\`https://i.pravatar.cc/300?img=\${Math.floor(Math.random() * 70)}\`);
        setLoading(false);
      }, 2000);
    };
    return <div className="flex flex-col items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={imageUrl} alt="Demo avatar" onLoadingStatusChange={status => console.log("Loading status:", status)} />
          <AvatarFallback>
            {loading ? "..." : "DM"}
          </AvatarFallback>
        </Avatar>
        <button onClick={loadImage} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
          Load New Avatar
        </button>
      </div>;
  }
}`,...(B=(T=g.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var X,q,H;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Avatar Group",
  render: () => <div className="flex -space-x-2">
      <Avatar className="h-8 w-8 border-2 border-background">
        <AvatarImage src="https://i.pravatar.cc/300?img=20" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="h-8 w-8 border-2 border-background">
        <AvatarImage src="https://i.pravatar.cc/300?img=21" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="h-8 w-8 border-2 border-background">
        <AvatarImage src="https://i.pravatar.cc/300?img=22" alt="User 3" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar className="h-8 w-8 border-2 border-background">
        <AvatarFallback className="bg-muted text-xs">+5</AvatarFallback>
      </Avatar>
    </div>
}`,...(H=(q=h.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var Q,_,$;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "With Status Indicator",
  render: () => <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://i.pravatar.cc/300?img=30" alt="Online user" />
          <AvatarFallback>ON</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-success ring-2 ring-background" />
      </div>
      <div className="relative">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://i.pravatar.cc/300?img=31" alt="Away user" />
          <AvatarFallback>AW</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-warning ring-2 ring-background" />
      </div>
      <div className="relative">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://i.pravatar.cc/300?img=32" alt="Offline user" />
          <AvatarFallback>OF</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-muted ring-2 ring-background" />
      </div>
    </div>
}`,...($=(_=u.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const la=["Default","WithFallback","Sizes","Shapes","WithIcon","ColoredFallbacks","UserProfile","LoadingState","AvatarGroup","StatusIndicator"];export{h as AvatarGroup,v as ColoredFallbacks,l as Default,g as LoadingState,m as Shapes,o as Sizes,u as StatusIndicator,p as UserProfile,i as WithFallback,d as WithIcon,la as __namedExportsOrder,ca as default};
