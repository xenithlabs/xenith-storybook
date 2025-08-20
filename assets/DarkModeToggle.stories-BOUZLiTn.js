import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{D as r}from"./DarkModeToggle-D2uZ1q-q.js";import{r as i}from"./index-DRjF_FHU.js";import{I as b}from"./Icon-CTnhpE1d.js";import{F as J}from"./light-oSLeDn5p.js";import{F as Q}from"./system-color-CRaU_Q6g.js";import{F as Z}from"./desktop-g2rK8Km6.js";import{T as a}from"./Text-C8HBwI4b.js";import{B as ee}from"./Badge-TrTt3KrN.js";import{C as m}from"./Card-C5rr-ZzX.js";import{H as d}from"./Heading-DjlBwQyS.js";import{B as o}from"./Button-CHcYOyT5.js";import{D as j}from"./Divider-CIm89-oy.js";import"./ToggleGroup-DQTyiiy5.js";import"./index-CxRLcT2J.js";import"./cn-8RyR4BqC.js";import"./index-Bb4qSo10.js";import"./index-HZDBD2ik.js";import"./styles-x1yxmyQd.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";const Ne={title:"Xenith UI/Components/DarkModeToggle",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The DarkModeToggle component provides a three-way toggle for theme selection: system, light, and dark modes. Built on top of the ToggleGroup component, it offers a compact, accessible way for users to control their theme preference.

### Key Features
- **Three Modes**: System (auto), Light, and Dark theme options
- **Icon-Based UI**: Clear visual indicators for each mode
- **Controlled Component**: Full control over selected value
- **System Preference**: Respects system/OS theme preference
- **Compact Design**: Small footprint perfect for headers/toolbars
- **Accessible**: Keyboard navigation and ARIA support
- **Smooth Transitions**: Animated toggle between states

### Usage
\`\`\`tsx
import { DarkModeToggle } from "@xenithlabs/xenith-ui";

// Basic usage
<DarkModeToggle />

// Controlled with state
const [theme, setTheme] = useState("system");
<DarkModeToggle
  defaultValue={theme}
  onValueChange={setTheme}
/>

// With theme provider integration
const { theme, setTheme } = useTheme();
<DarkModeToggle
  defaultValue={theme}
  onValueChange={(value) => setTheme(value)}
/>

// In a header/navbar
<header className="flex justify-between items-center">
  <Logo />
  <div className="flex gap-4">
    <DarkModeToggle />
    <UserMenu />
  </div>
</header>
\`\`\`

### Component Props

- **defaultValue** (string): Initial selected value. Default: "system"
  - "system": Use OS/browser preference
  - "light": Force light theme
  - "dark": Force dark theme
- **onValueChange** ((value: string) => void): Callback when selection changes

### Theme Values

1. **System**: Automatically follows OS/browser theme preference
2. **Light**: Forces light theme regardless of system preference
3. **Dark**: Forces dark theme regardless of system preference

### Integration Guide

1. **Basic Integration**:
   - Add component to your UI
   - Handle onValueChange to update theme
   - Apply theme class to document root

2. **With Theme Provider**:
   - Use context/provider for global theme state
   - Connect toggle to theme setter
   - Persist preference in localStorage/cookies

3. **CSS Variables**:
   - Update CSS custom properties based on theme
   - Use semantic color tokens
   - Support both light and dark color schemes

### Common Use Cases

1. **Application Headers**: Primary theme control in navigation
2. **Settings Pages**: Part of appearance/display settings
3. **User Preferences**: Save theme choice per user
4. **Documentation Sites**: Reader preference for docs
5. **Developer Tools**: IDE-like theme switching
        `}}},argTypes:{defaultValue:{control:{type:"select"},options:["system","light","dark"],description:"Initial theme selection",table:{type:{summary:'"system" | "light" | "dark"'},defaultValue:{summary:'"system"'}}},onValueChange:{action:"onValueChange",description:"Callback when theme selection changes",table:{type:{summary:"(value: string) => void"}}}}},h={args:{defaultValue:"system"}},u={name:"Controlled Example",render:()=>{const[t,s]=i.useState("system");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{defaultValue:t,onValueChange:s}),e.jsxs(a,{variant:"regular",className:"text-text-weak",children:["Current theme: ",e.jsx(ee,{variant:"soft",children:t})]})]})}},x={name:"With Theme Preview",render:()=>{const[t,s]=i.useState("system"),[n,l]=i.useState("light");return i.useEffect(()=>{if(t==="system"){const c=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";l(c)}else l(t)},[t]),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(a,{variant:"medium",children:"Choose your theme:"}),e.jsx(r,{defaultValue:t,onValueChange:s})]}),e.jsxs(m,{className:`p-6 transition-colors duration-300 ${n==="dark"?"bg-gray-900 text-white":"bg-white text-gray-900"}`,children:[e.jsx(d,{variant:"titleSm",className:"mb-2",children:"Preview Content"}),e.jsxs(a,{className:n==="dark"?"text-gray-300":"text-gray-600",children:["This card demonstrates how content would appear in ",n," mode.",t==="system"&&" (following system preference)"]}),e.jsxs("div",{className:"mt-4 flex gap-2",children:[e.jsx(o,{theme:"primary",className:n==="dark"?"!bg-blue-600":"",children:"Primary Action"}),e.jsx(o,{variant:"outline",theme:"neutral",className:n==="dark"?"!border-gray-600 !text-gray-300":"",children:"Secondary"})]})]}),e.jsxs("div",{className:"text-sm text-text-weak space-y-1",children:[e.jsxs(a,{children:["Selected: ",t]}),e.jsxs(a,{children:["Effective theme: ",n]})]})]})}},g={name:"In Header Layout",render:()=>{const[t,s]=i.useState("system");return e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("header",{className:"bg-surface-subtle border-b px-6 py-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(d,{variant:"titleMd",children:"My Application"}),e.jsxs("nav",{className:"flex gap-6",children:[e.jsx(a,{variant:"medium",className:"text-primary cursor-pointer",children:"Dashboard"}),e.jsx(a,{variant:"medium",className:"cursor-pointer hover:text-primary",children:"Settings"}),e.jsx(a,{variant:"medium",className:"cursor-pointer hover:text-primary",children:"Help"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{defaultValue:t,onValueChange:s}),e.jsx("div",{className:"w-8 h-8 rounded-full bg-primary"})]})]})}),e.jsx("div",{className:"p-6",children:e.jsx(a,{children:"Main content area"})})]})}},v={name:"Settings Page Integration",render:()=>{const[t,s]=i.useState("system"),[n,l]=i.useState("system"),c=()=>{l(t),alert(`Theme preference saved: ${t}`)};return e.jsxs(m,{className:"max-w-2xl",children:[e.jsxs("div",{className:"p-6",children:[e.jsx(d,{variant:"titleMd",className:"mb-6",children:"Appearance Settings"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"medium",className:"mb-2",children:"Theme"}),e.jsx(a,{variant:"regular",className:"text-text-weak mb-4",children:'Choose how the application appears. Select "System" to automatically switch between light and dark themes based on your device settings.'}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(r,{defaultValue:t,onValueChange:s}),e.jsxs("div",{className:"flex items-center gap-4 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{icon:e.jsx(Z,{}),className:"w-4 h-4"}),e.jsx(a,{variant:"regular",children:"System"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{icon:e.jsx(J,{}),className:"w-4 h-4"}),e.jsx(a,{variant:"regular",children:"Light"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{icon:e.jsx(Q,{}),className:"w-4 h-4"}),e.jsx(a,{variant:"regular",children:"Dark"})]})]})]})]}),e.jsx(j,{}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"medium",children:"High Contrast Mode"}),e.jsx(a,{variant:"regular",className:"text-text-weak",children:"Increase contrast for better visibility"})]}),e.jsx(ee,{variant:"soft",theme:"neutral",children:"Coming Soon"})]}),e.jsx(j,{}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx(o,{variant:"outline",theme:"neutral",onClick:()=>s(n),disabled:t===n,children:"Cancel"}),e.jsx(o,{theme:"primary",onClick:c,disabled:t===n,children:"Save Changes"})]})]})]}),t!==n&&e.jsx("div",{className:"bg-warning/10 border-t border-warning/20 px-6 py-3",children:e.jsx(a,{variant:"regular",className:"text-warning",children:"You have unsaved changes"})})]})}},p={name:"With Mode Explanations",render:()=>{const[t,s]=i.useState("system"),n={system:"Automatically switches between light and dark based on your device settings.",light:"Always use light theme with dark text on light backgrounds.",dark:"Always use dark theme with light text on dark backgrounds."};return e.jsxs(m,{className:"p-6 max-w-md",children:[e.jsx(d,{variant:"titleSm",className:"mb-4",children:"Display Mode"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{defaultValue:t,onValueChange:s}),e.jsx("div",{className:"p-3 bg-surface-subtle rounded",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(b,{icon:t==="system"?e.jsx(Z,{}):t==="light"?e.jsx(J,{}):e.jsx(Q,{}),className:"w-5 h-5 mt-0.5 text-primary"}),e.jsxs("div",{children:[e.jsxs(a,{variant:"medium",className:"capitalize mb-1",children:[t," Mode"]}),e.jsx(a,{variant:"regular",className:"text-text-weak",children:n[t]})]})]})})]})]})}},f={name:"Multiple Synchronized Toggles",render:()=>{const[t,s]=i.useState("system");return e.jsxs("div",{className:"space-y-6",children:[e.jsx(m,{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(a,{variant:"medium",children:"Header Toggle"}),e.jsx(r,{defaultValue:t,onValueChange:s})]})}),e.jsx(m,{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(a,{variant:"medium",children:"Sidebar Toggle"}),e.jsx(r,{defaultValue:t,onValueChange:s})]})}),e.jsx(m,{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(a,{variant:"medium",children:"Settings Toggle"}),e.jsx(r,{defaultValue:t,onValueChange:s})]})}),e.jsx(a,{variant:"regular",className:"text-text-weak text-center",children:"All toggles are synchronized - changing one updates all"})]})}},T={name:"Size Comparison",render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"medium",className:"mb-3",children:"Default Size (xs)"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"medium",className:"mb-3",children:"In Toolbar Context"}),e.jsxs("div",{className:"flex items-center gap-4 p-2 bg-surface-subtle rounded",children:[e.jsx(o,{size:"sm",variant:"outline",children:"Edit"}),e.jsx(o,{size:"sm",variant:"outline",children:"Share"}),e.jsx("div",{className:"ml-auto",children:e.jsx(r,{})})]})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"medium",className:"mb-3",children:"Mobile Friendly"}),e.jsxs("div",{className:"max-w-[320px] border rounded p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx(a,{variant:"regular",children:"Settings"}),e.jsx(r,{})]}),e.jsx(a,{variant:"regular",className:"text-text-weak",children:"The compact size works well on mobile devices"})]})]})]})},y={name:"Accessibility Features",render:()=>{const[t,s]=i.useState("system"),[n,l]=i.useState(""),c=N=>{s(N),l(`Theme changed to ${N} mode`),setTimeout(()=>l(""),3e3)};return e.jsx("div",{className:"space-y-6",children:e.jsxs(m,{className:"p-6",children:[e.jsx(d,{variant:"titleSm",className:"mb-4",children:"Accessibility Demo"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"medium",className:"mb-2",children:"Keyboard Navigation"}),e.jsx(a,{variant:"regular",className:"text-text-weak mb-3",children:"Use Tab to focus, Arrow keys to navigate, Space/Enter to select"}),e.jsx(r,{defaultValue:t,onValueChange:c})]}),n&&e.jsx("div",{className:"p-3 bg-success/10 border border-success/20 rounded",role:"status",children:e.jsx(a,{variant:"regular",className:"text-success",children:n})}),e.jsxs("div",{className:"text-sm text-text-weak space-y-1",children:[e.jsx(a,{children:"✓ Full keyboard support"}),e.jsx(a,{children:"✓ ARIA labels for screen readers"}),e.jsx(a,{children:"✓ Focus indicators"}),e.jsx(a,{children:"✓ Status announcements"})]})]})]})})}};var w,S,k;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    defaultValue: "system"
  }
}`,...(k=(S=h.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,V,D;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Controlled Example",
  render: () => {
    const [theme, setTheme] = useState("system");
    return <div className="space-y-4">
        <DarkModeToggle defaultValue={theme} onValueChange={setTheme} />
        <Text variant="regular" className="text-text-weak">
          Current theme: <Badge variant="soft">{theme}</Badge>
        </Text>
      </div>;
  }
}`,...(D=(V=u.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var M,A,I;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "With Theme Preview",
  render: () => {
    const [theme, setTheme] = useState("system");
    const [effectiveTheme, setEffectiveTheme] = useState("light");
    useEffect(() => {
      if (theme === "system") {
        // Simulate system preference detection
        const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        setEffectiveTheme(systemPreference);
      } else {
        setEffectiveTheme(theme);
      }
    }, [theme]);
    return <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Text variant="medium">Choose your theme:</Text>
          <DarkModeToggle defaultValue={theme} onValueChange={setTheme} />
        </div>
        
        <Card className={\`p-6 transition-colors duration-300 \${effectiveTheme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}\`}>
          <Heading variant="titleSm" className="mb-2">
            Preview Content
          </Heading>
          <Text className={effectiveTheme === "dark" ? "text-gray-300" : "text-gray-600"}>
            This card demonstrates how content would appear in {effectiveTheme} mode.
            {theme === "system" && " (following system preference)"}
          </Text>
          
          <div className="mt-4 flex gap-2">
            <Button theme="primary" className={effectiveTheme === "dark" ? "!bg-blue-600" : ""}>
              Primary Action
            </Button>
            <Button variant="outline" theme="neutral" className={effectiveTheme === "dark" ? "!border-gray-600 !text-gray-300" : ""}>
              Secondary
            </Button>
          </div>
        </Card>
        
        <div className="text-sm text-text-weak space-y-1">
          <Text>Selected: {theme}</Text>
          <Text>Effective theme: {effectiveTheme}</Text>
        </div>
      </div>;
  }
}`,...(I=(A=x.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var B,H,P;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "In Header Layout",
  render: () => {
    const [theme, setTheme] = useState("system");
    return <div className="border rounded-lg overflow-hidden">
        <header className="bg-surface-subtle border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Heading variant="titleMd">My Application</Heading>
              <nav className="flex gap-6">
                <Text variant="medium" className="text-primary cursor-pointer">Dashboard</Text>
                <Text variant="medium" className="cursor-pointer hover:text-primary">Settings</Text>
                <Text variant="medium" className="cursor-pointer hover:text-primary">Help</Text>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <DarkModeToggle defaultValue={theme} onValueChange={setTheme} />
              <div className="w-8 h-8 rounded-full bg-primary" />
            </div>
          </div>
        </header>
        
        <div className="p-6">
          <Text>Main content area</Text>
        </div>
      </div>;
  }
}`,...(P=(H=g.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var E,F,z;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Settings Page Integration",
  render: () => {
    const [theme, setTheme] = useState("system");
    const [savedTheme, setSavedTheme] = useState("system");
    const handleSave = () => {
      setSavedTheme(theme);
      // In real app, save to localStorage or backend
      alert(\`Theme preference saved: \${theme}\`);
    };
    return <Card className="max-w-2xl">
        <div className="p-6">
          <Heading variant="titleMd" className="mb-6">Appearance Settings</Heading>
          
          <div className="space-y-6">
            <div>
              <Text variant="medium" className="mb-2">Theme</Text>
              <Text variant="regular" className="text-text-weak mb-4">
                Choose how the application appears. Select "System" to automatically 
                switch between light and dark themes based on your device settings.
              </Text>
              
              <div className="flex items-center gap-6">
                <DarkModeToggle defaultValue={theme} onValueChange={setTheme} />
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon icon={<ComputerDesktopIcon />} className="w-4 h-4" />
                    <Text variant="regular">System</Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon={<SunIcon />} className="w-4 h-4" />
                    <Text variant="regular">Light</Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon={<MoonIcon />} className="w-4 h-4" />
                    <Text variant="regular">Dark</Text>
                  </div>
                </div>
              </div>
            </div>
            
            <Divider />
            
            <div className="flex items-center justify-between">
              <div>
                <Text variant="medium">High Contrast Mode</Text>
                <Text variant="regular" className="text-text-weak">
                  Increase contrast for better visibility
                </Text>
              </div>
              <Badge variant="soft" theme="neutral">Coming Soon</Badge>
            </div>
            
            <Divider />
            
            <div className="flex justify-end gap-3">
              <Button variant="outline" theme="neutral" onClick={() => setTheme(savedTheme)} disabled={theme === savedTheme}>
                Cancel
              </Button>
              <Button theme="primary" onClick={handleSave} disabled={theme === savedTheme}>
                Save Changes
              </Button>
            </div>
          </div>
        </div>
        
        {theme !== savedTheme && <div className="bg-warning/10 border-t border-warning/20 px-6 py-3">
            <Text variant="regular" className="text-warning">
              You have unsaved changes
            </Text>
          </div>}
      </Card>;
  }
}`,...(z=(F=v.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var U,W,R;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "With Mode Explanations",
  render: () => {
    const [theme, setTheme] = useState("system");
    const explanations = {
      system: "Automatically switches between light and dark based on your device settings.",
      light: "Always use light theme with dark text on light backgrounds.",
      dark: "Always use dark theme with light text on dark backgrounds."
    };
    return <Card className="p-6 max-w-md">
        <Heading variant="titleSm" className="mb-4">Display Mode</Heading>
        
        <div className="space-y-4">
          <DarkModeToggle defaultValue={theme} onValueChange={setTheme} />
          
          <div className="p-3 bg-surface-subtle rounded">
            <div className="flex items-start gap-2">
              <Icon icon={theme === "system" ? <ComputerDesktopIcon /> : theme === "light" ? <SunIcon /> : <MoonIcon />} className="w-5 h-5 mt-0.5 text-primary" />
              <div>
                <Text variant="medium" className="capitalize mb-1">
                  {theme} Mode
                </Text>
                <Text variant="regular" className="text-text-weak">
                  {explanations[theme as keyof typeof explanations]}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Card>;
  }
}`,...(R=(W=p.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var $,G,L;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Multiple Synchronized Toggles",
  render: () => {
    const [globalTheme, setGlobalTheme] = useState("system");
    return <div className="space-y-6">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <Text variant="medium">Header Toggle</Text>
            <DarkModeToggle defaultValue={globalTheme} onValueChange={setGlobalTheme} />
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <Text variant="medium">Sidebar Toggle</Text>
            <DarkModeToggle defaultValue={globalTheme} onValueChange={setGlobalTheme} />
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <Text variant="medium">Settings Toggle</Text>
            <DarkModeToggle defaultValue={globalTheme} onValueChange={setGlobalTheme} />
          </div>
        </Card>
        
        <Text variant="regular" className="text-text-weak text-center">
          All toggles are synchronized - changing one updates all
        </Text>
      </div>;
  }
}`,...(L=(G=f.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var O,K,Y;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Size Comparison",
  render: () => {
    return <div className="space-y-6">
        <div>
          <Text variant="medium" className="mb-3">Default Size (xs)</Text>
          <DarkModeToggle />
        </div>
        
        <div>
          <Text variant="medium" className="mb-3">In Toolbar Context</Text>
          <div className="flex items-center gap-4 p-2 bg-surface-subtle rounded">
            <Button size="sm" variant="outline">Edit</Button>
            <Button size="sm" variant="outline">Share</Button>
            <div className="ml-auto">
              <DarkModeToggle />
            </div>
          </div>
        </div>
        
        <div>
          <Text variant="medium" className="mb-3">Mobile Friendly</Text>
          <div className="max-w-[320px] border rounded p-4">
            <div className="flex items-center justify-between mb-4">
              <Text variant="regular">Settings</Text>
              <DarkModeToggle />
            </div>
            <Text variant="regular" className="text-text-weak">
              The compact size works well on mobile devices
            </Text>
          </div>
        </div>
      </div>;
  }
}`,...(Y=(K=T.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var _,X,q;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Accessibility Features",
  render: () => {
    const [theme, setTheme] = useState("system");
    const [announcement, setAnnouncement] = useState("");
    const handleChange = (value: string) => {
      setTheme(value);
      setAnnouncement(\`Theme changed to \${value} mode\`);
      setTimeout(() => setAnnouncement(""), 3000);
    };
    return <div className="space-y-6">
        <Card className="p-6">
          <Heading variant="titleSm" className="mb-4">Accessibility Demo</Heading>
          
          <div className="space-y-4">
            <div>
              <Text variant="medium" className="mb-2">Keyboard Navigation</Text>
              <Text variant="regular" className="text-text-weak mb-3">
                Use Tab to focus, Arrow keys to navigate, Space/Enter to select
              </Text>
              <DarkModeToggle defaultValue={theme} onValueChange={handleChange} />
            </div>
            
            {announcement && <div className="p-3 bg-success/10 border border-success/20 rounded" role="status">
                <Text variant="regular" className="text-success">
                  {announcement}
                </Text>
              </div>}
            
            <div className="text-sm text-text-weak space-y-1">
              <Text>✓ Full keyboard support</Text>
              <Text>✓ ARIA labels for screen readers</Text>
              <Text>✓ Focus indicators</Text>
              <Text>✓ Status announcements</Text>
            </div>
          </div>
        </Card>
      </div>;
  }
}`,...(q=(X=y.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};const je=["Default","Controlled","WithThemePreview","InHeader","SettingsPage","WithExplanation","MultipleInstances","CompactVariation","AccessibilityDemo"];export{y as AccessibilityDemo,T as CompactVariation,u as Controlled,h as Default,g as InHeader,f as MultipleInstances,v as SettingsPage,p as WithExplanation,x as WithThemePreview,je as __namedExportsOrder,Ne as default};
