import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{F as Ie}from"./menu_vertical-BCfO1BaP.js";import{F as Ce}from"./edit-C2b6G_Uy.js";import{F as Be}from"./close-D2djoYoT.js";import{F as je}from"./trash-BK8eIFhG.js";import{F as ke,a as Ee,b as ze}from"./settings-BxF6hsiu.js";import{F as we}from"./download-8bUW3GqY.js";import{F as j}from"./forward-D4TzkHoG.js";import{r as Ne}from"./index-DRjF_FHU.js";import{B as n,E as Fe}from"./Button-DcdQGMoO.js";import{I as t}from"./Icon-CTnhpE1d.js";import{C as w}from"./CopyButton-DKWoW-0E.js";import{T as De}from"./Text-C8HBwI4b.js";import{C as Ae}from"./Card-C5rr-ZzX.js";import{h as Le}from"./Heading-DjlBwQyS.js";import"./cn-8RyR4BqC.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-x1yxmyQd.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";import"./check-C0C6JGvp.js";import"./copy-De8jvVXM.js";import"./Tooltip-D2ba4dcD.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";const hn={title:"Xenith UI/Components/Button",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
The Button component is a versatile and accessible UI element that supports multiple variants, themes, sizes, and states. 
It's built with flexibility in mind and includes support for icons, loading states, and various styling options.

## Key Features
- **Multiple variants**: solid, outline, nude, link, unstyled
- **Theme support**: primary, success, destructive, neutral
- **Sizes**: xs, sm, md
- **Icon support**: with left/right positioning
- **Icon-only buttons**: for compact UI elements
- **Loading state**: with spinner animation
- **Disabled state**: with proper accessibility
- **Special variants**: CopyButton and ExpandableButton
- **Compound component pattern**: works with Radix UI's Slot component via asChild prop

## Usage Guidelines
- Use **solid variant** for primary actions
- Use **outline variant** for secondary actions
- Use **nude variant** for tertiary actions or icon buttons
- Use **link variant** for navigation or text-based actions
- Use **destructive theme** for dangerous actions like delete
- Use **success theme** for positive actions like save or confirm
        `}}},argTypes:{variant:{control:"select",options:["solid","outline","nude","link","unstyled"],description:"Visual style variant of the button",table:{type:{summary:"solid | outline | nude | link | unstyled"},defaultValue:{summary:"solid"}}},theme:{control:"select",options:["primary","success","destructive","neutral"],description:"Color theme of the button",table:{type:{summary:"primary | success | destructive | neutral"},defaultValue:{summary:"primary"}}},size:{control:"select",options:["xs","sm","md"],description:"Size of the button",table:{type:{summary:"xs | sm | md"},defaultValue:{summary:"md"}}},children:{control:"text",description:"Button content",table:{type:{summary:"ReactNode"}}},icon:{control:!1,description:"Icon element to display in the button",table:{type:{summary:"ReactNode"}}},iconPosition:{control:"select",options:["left","right"],description:"Position of the icon relative to the text",table:{type:{summary:"left | right"},defaultValue:{summary:"left"}}},iconOnly:{control:"boolean",description:"Whether this is an icon-only button (no text)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Shows loading spinner and disables the button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disables the button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},asChild:{control:"boolean",description:"Merges props onto child element instead of rendering a button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS classes",table:{type:{summary:"string"}}}},args:{children:"Button",variant:"solid",theme:"primary",size:"md"}},r={},o={parameters:{docs:{description:{story:"Interactive playground to test all button props combinations"}}}},i={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(n,{variant:"solid",children:"Solid"}),e.jsx(n,{variant:"outline",children:"Outline"}),e.jsx(n,{variant:"nude",children:"Nude"}),e.jsx(n,{variant:"link",children:"Link"}),e.jsx(n,{variant:"unstyled",className:"px-4 py-2 bg-gray-100",children:"Unstyled"})]}),parameters:{docs:{description:{story:"All available button variants. The unstyled variant allows complete custom styling."}}}},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(n,{theme:"primary",children:"Primary"}),e.jsx(n,{theme:"success",children:"Success"}),e.jsx(n,{theme:"destructive",children:"Destructive"}),e.jsx(n,{theme:"neutral",children:"Neutral"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(n,{variant:"outline",theme:"primary",children:"Primary"}),e.jsx(n,{variant:"outline",theme:"destructive",children:"Destructive"}),e.jsx(n,{variant:"nude",theme:"primary",children:"Primary"}),e.jsx(n,{variant:"nude",theme:"destructive",children:"Destructive"})]})]}),parameters:{docs:{description:{story:"All available themes across different variants"}}}},l={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(n,{size:"xs",children:"Extra Small"}),e.jsx(n,{size:"sm",children:"Small"}),e.jsx(n,{size:"md",children:"Medium"})]}),parameters:{docs:{description:{story:"Available button sizes"}}}},d={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(n,{icon:e.jsx(t,{icon:e.jsx(j,{})}),iconPosition:"left",children:"Continue"}),e.jsx(n,{icon:e.jsx(t,{icon:e.jsx(j,{})}),iconPosition:"right",children:"Continue"}),e.jsx(n,{icon:e.jsx(t,{icon:e.jsx(we,{})}),children:"Download"}),e.jsx(n,{icon:e.jsx(t,{icon:e.jsx(ke,{})}),theme:"success",children:"Add Item"})]})}),parameters:{docs:{description:{story:"Buttons with icons in different positions"}}}},m={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(n,{icon:e.jsx(t,{icon:e.jsx(Ce,{}),size:"sm"}),iconOnly:!0}),e.jsx(n,{icon:e.jsx(t,{icon:e.jsx(je,{}),size:"sm"}),iconOnly:!0,theme:"destructive"}),e.jsx(n,{icon:e.jsx(t,{icon:e.jsx(Ee,{}),size:"sm"}),iconOnly:!0,variant:"outline"}),e.jsx(n,{icon:e.jsx(t,{icon:e.jsx(Be,{}),size:"sm"}),iconOnly:!0,variant:"nude",theme:"neutral"})]}),parameters:{docs:{description:{story:"Icon-only buttons for compact UI elements"}}}},u={render:()=>{const[s,a]=Ne.useState(!1),Se=()=>{a(!0),setTimeout(()=>a(!1),2e3)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(n,{loading:!0,children:"Loading..."}),e.jsx(n,{loading:!0,variant:"outline",children:"Loading..."}),e.jsx(n,{loading:!0,size:"sm",children:"Small Loading"})]}),e.jsx("div",{children:e.jsx(n,{onClick:Se,loading:s,children:s?"Processing...":"Click to Load"})})]})},parameters:{docs:{description:{story:"Loading state with spinner animation. Click the interactive button to see the loading state in action."}}}},p={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(n,{disabled:!0,children:"Disabled"}),e.jsx(n,{disabled:!0,variant:"outline",children:"Disabled"}),e.jsx(n,{disabled:!0,icon:e.jsx(t,{icon:e.jsx(Ie,{})}),iconOnly:!0,variant:"nude"})]}),parameters:{docs:{description:{story:"Disabled state across different variants"}}}},x={render:()=>e.jsxs("div",{className:"p-6 bg-bg-weaker rounded-lg space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Balance Actions"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(n,{icon:e.jsx(t,{icon:e.jsx(ze,{})}),iconOnly:!0,theme:"neutral",variant:"outline",className:"bg-bg-default"}),e.jsx(n,{icon:e.jsx(t,{icon:e.jsx(we,{})}),children:"Export CSV"})]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(n,{variant:"nude",theme:"neutral",children:"Back"}),e.jsx(n,{theme:"destructive",children:"Reject Payout"}),e.jsx(n,{theme:"success",children:"Approve Payout"})]})]}),parameters:{docs:{description:{story:"Common button patterns used in dashboard interfaces"}}}},h={render:()=>e.jsx("div",{className:"space-y-4 max-w-md",children:e.jsxs("div",{className:"p-6 border rounded-lg space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Form Example"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"email",placeholder:"Enter your email",className:"w-full px-3 py-2 border rounded-md"}),e.jsx("input",{type:"password",placeholder:"Enter your password",className:"w-full px-3 py-2 border rounded-md"})]}),e.jsx("div",{className:"flex gap-3",children:e.jsx(n,{variant:"link",theme:"primary",size:"sm",children:"Forgot password?"})}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(n,{variant:"outline",theme:"neutral",className:"flex-1",children:"Cancel"}),e.jsx(n,{className:"flex-1",children:"Submit"})]})]})}),parameters:{docs:{description:{story:"Common form button patterns"}}}},v={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("code",{className:"px-2 py-1 bg-bg-weak rounded",children:"npm install @xenithlabs/xenith-ui"}),e.jsx(w,{text:"npm install @xenithlabs/xenith-ui"})]}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsx(w,{text:"This text will be copied",withButtonText:!0,size:"sm",variant:"outline",theme:"neutral"})})]}),parameters:{docs:{description:{story:"CopyButton component with icon-only and text variants"}}}},y={render:()=>{const[s,a]=Ne.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(Fe,{"aria-expanded":s,onClick:()=>a(!s),variant:"nude",theme:"neutral",children:"User Settings"}),s&&e.jsx("div",{className:"p-4 bg-bg-weak rounded",children:e.jsx("p",{children:"Expanded content here..."})})]})},parameters:{docs:{description:{story:"ExpandableButton with automatic chevron icon that rotates based on aria-expanded"}}}},f={render:()=>e.jsxs("div",{className:"bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1",children:[e.jsx(De,{variant:"badge",children:"Environment"}),e.jsx(n,{size:"xs",variant:"nude",theme:"neutral",iconOnly:!0,icon:e.jsx(Be,{})})]}),parameters:{docs:{description:{story:"Button used with badge/label pattern"}}}},g={render:()=>e.jsxs(Ae,{className:Le({variant:"titleMd",className:"flex items-center justify-between w-[300px]"}),children:[e.jsx("span",{children:"Settings"}),e.jsx(n,{variant:"link",size:"sm",children:"Edit"})]}),parameters:{docs:{description:{story:"Link button used within heading styles"}}}},b={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[e.jsx(n,{className:"w-full sm:w-auto",children:"Save Changes"}),e.jsx(n,{variant:"outline",className:"w-full sm:w-auto",children:"Cancel"})]}),e.jsx("p",{className:"text-sm text-text-weak",children:"Resize your browser to see responsive behavior"})]}),parameters:{docs:{description:{story:"Buttons with responsive width behavior"}}}},B={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{"aria-label":"Delete item",icon:e.jsx(t,{icon:e.jsx(je,{})}),iconOnly:!0,theme:"destructive"}),e.jsx(n,{"aria-busy":"true",loading:!0,children:"Saving..."}),e.jsx(n,{"aria-pressed":"true",variant:"outline",children:"Toggle Active"})]}),parameters:{docs:{description:{story:"Buttons with proper ARIA attributes for accessibility"}}}};var N,S,I;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var C,k,E;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Interactive playground to test all button props combinations"
      }
    }
  }
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var z,F,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 items-center">
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="nude">Nude</Button>
      <Button variant="link">Link</Button>
      <Button variant="unstyled" className="px-4 py-2 bg-gray-100">
        Unstyled
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All available button variants. The unstyled variant allows complete custom styling."
      }
    }
  }
}`,...(D=(F=i.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var A,L,O;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex flex-wrap gap-4 items-center">
        <Button theme="primary">Primary</Button>
        <Button theme="success">Success</Button>
        <Button theme="destructive">Destructive</Button>
        <Button theme="neutral">Neutral</Button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="outline" theme="primary">Primary</Button>
        <Button variant="outline" theme="destructive">Destructive</Button>
        <Button variant="nude" theme="primary">Primary</Button>
        <Button variant="nude" theme="destructive">Destructive</Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All available themes across different variants"
      }
    }
  }
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var P,R,T;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 items-center">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Available button sizes"
      }
    }
  }
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var U,V,$;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex flex-wrap gap-4 items-center">
        <Button icon={<Icon icon={<ForwardIcon />} />} iconPosition="left">
          Continue
        </Button>
        <Button icon={<Icon icon={<ForwardIcon />} />} iconPosition="right">
          Continue
        </Button>
        <Button icon={<Icon icon={<DownloadIcon />} />}>Download</Button>
        <Button icon={<Icon icon={<PlusIcon />} />} theme="success">
          Add Item
        </Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Buttons with icons in different positions"
      }
    }
  }
}`,...($=(V=d.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var M,W,H;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 items-center">
      <Button icon={<Icon icon={<EditIcon />} size="sm" />} iconOnly />
      <Button icon={<Icon icon={<TrashIcon />} size="sm" />} iconOnly theme="destructive" />
      <Button icon={<Icon icon={<SettingsIcon />} size="sm" />} iconOnly variant="outline" />
      <Button icon={<Icon icon={<CloseIcon />} size="sm" />} iconOnly variant="nude" theme="neutral" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Icon-only buttons for compact UI elements"
      }
    }
  }
}`,...(H=(W=m.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var _,G,K;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return <div className="space-y-4">
        <div className="flex flex-wrap gap-4 items-center">
          <Button loading>Loading...</Button>
          <Button loading variant="outline">
            Loading...
          </Button>
          <Button loading size="sm">
            Small Loading
          </Button>
        </div>
        <div>
          <Button onClick={handleClick} loading={loading}>
            {loading ? "Processing..." : "Click to Load"}
          </Button>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Loading state with spinner animation. Click the interactive button to see the loading state in action."
      }
    }
  }
}`,...(K=(G=u.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var X,q,J;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 items-center">
      <Button disabled>Disabled</Button>
      <Button disabled variant="outline">
        Disabled
      </Button>
      <Button disabled icon={<Icon icon={<MenuVerticalIcon />} />} iconOnly variant="nude" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Disabled state across different variants"
      }
    }
  }
}`,...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,Y,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="p-6 bg-bg-weaker rounded-lg space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Balance Actions</h3>
        <div className="flex gap-4">
          <Button icon={<Icon icon={<UpdateIcon />} />} iconOnly theme="neutral" variant="outline" className="bg-bg-default" />
          <Button icon={<Icon icon={<DownloadIcon />} />}>
            Export CSV
          </Button>
        </div>
      </div>
      
      <div className="flex gap-3">
        <Button variant="nude" theme="neutral">
          Back
        </Button>
        <Button theme="destructive">
          Reject Payout
        </Button>
        <Button theme="success">
          Approve Payout
        </Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Common button patterns used in dashboard interfaces"
      }
    }
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <div className="p-6 border rounded-lg space-y-4">
        <h3 className="text-lg font-semibold">Form Example</h3>
        <div className="space-y-2">
          <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md" />
          <input type="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="flex gap-3">
          <Button variant="link" theme="primary" size="sm">
            Forgot password?
          </Button>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" theme="neutral" className="flex-1">
            Cancel
          </Button>
          <Button className="flex-1">Submit</Button>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Common form button patterns"
      }
    }
  }
}`,...(te=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,ae,re;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center gap-4">
        <code className="px-2 py-1 bg-bg-weak rounded">npm install @xenithlabs/xenith-ui</code>
        <CopyButton text="npm install @xenithlabs/xenith-ui" />
      </div>
      <div className="flex items-center gap-4">
        <CopyButton text="This text will be copied" withButtonText size="sm" variant="outline" theme="neutral" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "CopyButton component with icon-only and text variants"
      }
    }
  }
}`,...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,ie,ce;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [expanded, setExpanded] = useState(false);
    return <div className="space-y-4">
        <ExpandableButton aria-expanded={expanded} onClick={() => setExpanded(!expanded)} variant="nude" theme="neutral">
          User Settings
        </ExpandableButton>
        {expanded && <div className="p-4 bg-bg-weak rounded">
            <p>Expanded content here...</p>
          </div>}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "ExpandableButton with automatic chevron icon that rotates based on aria-expanded"
      }
    }
  }
}`,...(ce=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,me;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="bg-bg-weaker gap-1 w-fit flex items-center rounded-md pl-2 py-1 pr-1">
      <Text variant="badge">Environment</Text>
      <Button size="xs" variant="nude" theme="neutral" iconOnly icon={<CloseIcon />} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Button used with badge/label pattern"
      }
    }
  }
}`,...(me=(de=f.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,pe,xe;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <Card className={headingStyles({
    variant: "titleMd",
    className: "flex items-center justify-between w-[300px]"
  })}>
      <span>Settings</span>
      <Button variant="link" size="sm">
        Edit
      </Button>
    </Card>,
  parameters: {
    docs: {
      description: {
        story: "Link button used within heading styles"
      }
    }
  }
}`,...(xe=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};var he,ve,ye;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="w-full sm:w-auto">Save Changes</Button>
        <Button variant="outline" className="w-full sm:w-auto">
          Cancel
        </Button>
      </div>
      <p className="text-sm text-text-weak">
        Resize your browser to see responsive behavior
      </p>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Buttons with responsive width behavior"
      }
    }
  }
}`,...(ye=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var fe,ge,be;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Button aria-label="Delete item" icon={<Icon icon={<TrashIcon />} />} iconOnly theme="destructive" />
      <Button aria-busy="true" loading>
        Saving...
      </Button>
      <Button aria-pressed="true" variant="outline">
        Toggle Active
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Buttons with proper ARIA attributes for accessibility"
      }
    }
  }
}`,...(be=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};const vn=["Default","Playground","Variants","Themes","Sizes","WithIcons","IconOnlyButtons","LoadingState","DisabledState","DashboardActions","FormActions","CopyButtonExample","ExpandableButtonExample","WithLabelBadge","ButtonInHeading","ResponsiveButtons","AccessibilityFeatures"];export{B as AccessibilityFeatures,g as ButtonInHeading,v as CopyButtonExample,x as DashboardActions,r as Default,p as DisabledState,y as ExpandableButtonExample,h as FormActions,m as IconOnlyButtons,u as LoadingState,o as Playground,b as ResponsiveButtons,l as Sizes,c as Themes,i as Variants,d as WithIcons,f as WithLabelBadge,vn as __namedExportsOrder,hn as default};
