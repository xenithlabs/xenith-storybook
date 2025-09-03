import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as ge}from"./cn-8RyR4BqC.js";import{h as xe,H as s}from"./Heading-DjlBwQyS.js";import{S as n}from"./Skeletonize-DZPbcDcL.js";import{r as E}from"./index-DRjF_FHU.js";import{T as a}from"./Text-C8HBwI4b.js";import{C as t}from"./Card-C5rr-ZzX.js";import{B as b}from"./Button-DAgrt3Vy.js";import{B as S}from"./Badge-CQf0SPqP.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./Skeleton-CBnrsDVZ.js";import"./styles-x1yxmyQd.js";import"./spinner-ojW7ALd7.js";import"./Icon-CTnhpE1d.js";import"./chevron-down-CyV3wpL8.js";function r({max:c=100,min:i=0,value:o=0,width:d=100,height:P=100,radius:m=45,gaugePrimaryColor:w="#3E63DD",gaugeSecondaryColor:u="#F0F0F0",strokeWidth:T=6,className:de}){const B=2*Math.PI*m,me=B/100,ue=(o-i)/(c-i)*100,l=parseFloat(ue.toPrecision(15));return e.jsx("div",{className:"grid",style:{width:d,height:P},children:e.jsxs("div",{className:ge("relative ",xe({variant:"h2"}),de),style:{"--circle-size":"100px","--circumference":B,"--percent-to-px":`${me}px`,"--gap-percent":"0","--offset-factor":"0","--transition-length":"1s","--transition-step":"200ms","--delay":"0s","--percent-to-deg":"3.6deg",transform:"translateZ(0)"},children:[e.jsxs("svg",{fill:"none",className:"w-full",strokeWidth:T,viewBox:"0 0 100 100",children:[l<=90&&l>=0&&e.jsx("circle",{cx:"50",cy:"50",r:m,strokeWidth:T,strokeDashoffset:"0",strokeLinecap:"round",strokeLinejoin:"round",className:" opacity-100",style:{stroke:u,"--stroke-percent":100-l,"--offset-factor-secondary":"calc(1 - var(--offset-factor))",strokeDasharray:"calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",transform:"rotate(calc(1turn - 90deg - (var(--gap-percent) * var(--percent-to-deg) * var(--offset-factor-secondary)))) scaleY(-1)",transition:"all var(--transition-length) ease var(--delay)",transformOrigin:"calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)"}}),e.jsx("circle",{cx:"50",cy:"50",r:m,strokeWidth:T,strokeDashoffset:"0",strokeLinecap:"round",strokeLinejoin:"round",className:"opacity-100",style:{stroke:w,"--stroke-percent":l,strokeDasharray:"calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",transition:"var(--transition-length) ease var(--delay),stroke var(--transition-length) ease var(--delay)",transitionProperty:"stroke-dasharray,transform",transform:"rotate(calc(-90deg + var(--gap-percent) * var(--offset-factor) * var(--percent-to-deg)))",transformOrigin:"calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)"}})]}),e.jsx("span",{"data-current-value":l,className:"duration-[var(--transition-length)] delay-[var(--delay)] absolute grid items-center justify-center inset-0 m-auto size-fit ease-linear animate-in fade-in",children:`${l}%`})]})})}r.__docgenInfo={description:"",methods:[],displayName:"CircularProgressBar",props:{max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},radius:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"45",computed:!1}},gaugePrimaryColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#3E63DD"',computed:!1}},gaugeSecondaryColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#F0F0F0"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},strokeWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}}}};const Fe={title:"Xenith UI/Components/CircularProgressBar",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The CircularProgressBar component displays progress in a circular format with customizable styling and smooth animations. It's perfect for showing completion percentages, capacity utilization, or any metric that can be represented as a percentage.

### Key Features
- **Customizable Size**: Adjustable width, height, and radius
- **Color Themes**: Configurable primary and secondary colors
- **Smooth Animations**: CSS transitions for value changes
- **Percentage Display**: Shows current percentage in the center
- **Flexible Range**: Support for custom min/max values
- **Stroke Width**: Adjustable thickness of the progress ring
- **Performance Optimized**: Uses SVG for crisp rendering at any size

### Usage
\`\`\`tsx
import { CircularProgressBar } from "@xenithlabs/xenith-ui";

// Basic usage
<CircularProgressBar value={75} />

// Custom colors and size
<CircularProgressBar
  value={65}
  width={120}
  height={120}
  gaugePrimaryColor="#10B981"
  gaugeSecondaryColor="#E5E7EB"
/>

// Custom range
<CircularProgressBar
  value={150}
  min={0}
  max={200}
  gaugePrimaryColor="#EF4444"
/>
\`\`\`

### Component Props

- **value** (number, required): Current progress value
- **max** (number): Maximum value. Default: 100
- **min** (number): Minimum value. Default: 0
- **width** (number): Width in pixels. Default: 100
- **height** (number): Height in pixels. Default: 100
- **radius** (number): Circle radius. Default: 45
- **strokeWidth** (number): Stroke width of the circle. Default: 6
- **gaugePrimaryColor** (string): Color of the progress arc. Default: "#3E63DD"
- **gaugeSecondaryColor** (string): Color of the background arc. Default: "#F0F0F0"
- **className** (string): Additional CSS classes

### Design Guidelines

- Use consistent colors that match your theme
- Keep the size appropriate for the context (100px for cards, 120px+ for dashboards)
- Consider the stroke width - thicker strokes work better for larger circles
- The percentage text automatically scales with the heading styles

### Common Use Cases

1. **Financial Metrics**: Utilization rates, allocation percentages
2. **Progress Tracking**: Task completion, goal achievement
3. **Capacity Monitoring**: Storage usage, resource allocation
4. **Performance Indicators**: Efficiency ratings, score displays
5. **Dashboard KPIs**: Key metrics visualization
        `}}},argTypes:{value:{control:{type:"number",min:0,max:100,step:1},description:"Current progress value",table:{type:{summary:"number"}}},max:{control:{type:"number",min:1,max:1e3},description:"Maximum value for the progress bar",table:{type:{summary:"number"},defaultValue:{summary:"100"}}},min:{control:{type:"number",min:0,max:50},description:"Minimum value for the progress bar",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},width:{control:{type:"number",min:50,max:300,step:10},description:"Width of the progress bar in pixels",table:{type:{summary:"number"},defaultValue:{summary:"100"}}},height:{control:{type:"number",min:50,max:300,step:10},description:"Height of the progress bar in pixels",table:{type:{summary:"number"},defaultValue:{summary:"100"}}},radius:{control:{type:"number",min:20,max:80,step:5},description:"Radius of the circular progress bar",table:{type:{summary:"number"},defaultValue:{summary:"45"}}},strokeWidth:{control:{type:"number",min:2,max:15,step:1},description:"Width of the stroke",table:{type:{summary:"number"},defaultValue:{summary:"6"}}},gaugePrimaryColor:{control:{type:"color"},description:"Color of the progress arc",table:{type:{summary:"string"},defaultValue:{summary:'"#3E63DD"'}}},gaugeSecondaryColor:{control:{type:"color"},description:"Color of the background arc",table:{type:{summary:"string"},defaultValue:{summary:'"#F0F0F0"'}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}},args:{value:65,max:100,min:0,width:100,height:100,radius:45,strokeWidth:6,gaugePrimaryColor:"#3E63DD",gaugeSecondaryColor:"#F0F0F0"}},g={args:{value:65}},x={name:"Different Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:75,width:80,height:80,radius:35,strokeWidth:5}),e.jsx(a,{variant:"regular",className:"mt-2 text-text-weak",children:"Small (80px)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:75,width:100,height:100,radius:45,strokeWidth:6}),e.jsx(a,{variant:"regular",className:"mt-2 text-text-weak",children:"Medium (100px)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:75,width:120,height:120,radius:55,strokeWidth:7}),e.jsx(a,{variant:"regular",className:"mt-2 text-text-weak",children:"Large (120px)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:75,width:150,height:150,radius:70,strokeWidth:8}),e.jsx(a,{variant:"regular",className:"mt-2 text-text-weak",children:"Extra Large (150px)"})]})]})},h={name:"Color Variations",render:()=>e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:85,gaugePrimaryColor:"#10B981",gaugeSecondaryColor:"#D1FAE5"}),e.jsx(a,{variant:"regular",className:"mt-2",children:"Success"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:60,gaugePrimaryColor:"#F59E0B",gaugeSecondaryColor:"#FEF3C7"}),e.jsx(a,{variant:"regular",className:"mt-2",children:"Warning"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:30,gaugePrimaryColor:"#EF4444",gaugeSecondaryColor:"#FEE2E2"}),e.jsx(a,{variant:"regular",className:"mt-2",children:"Danger"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:45,gaugePrimaryColor:"#8B5CF6",gaugeSecondaryColor:"#EDE9FE"}),e.jsx(a,{variant:"regular",className:"mt-2",children:"Purple"})]})]})},v={name:"Custom Range",render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:150,min:0,max:200}),e.jsx(a,{variant:"regular",className:"mt-2",children:"150/200 (75%)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:7.5,min:0,max:10,gaugePrimaryColor:"#06B6D4"}),e.jsx(a,{variant:"regular",className:"mt-2",children:"7.5/10 Rating"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:850,min:500,max:1e3,gaugePrimaryColor:"#EC4899"}),e.jsx(a,{variant:"regular",className:"mt-2",children:"850/1000 Points"})]})]})},p={name:"Overdraft Facility (Real Example)",render:()=>e.jsxs("div",{className:"flex gap-6",children:[e.jsxs(t,{className:"flex-1 p-6 h-[184px]",children:[e.jsxs("div",{className:"flex gap-4 items-center mb-4",children:[e.jsx(s,{variant:"h2",children:"Overdraft Pool"}),e.jsx(b,{variant:"link",children:e.jsx(a,{variant:"regular",className:"underline",children:"View History"})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(n,{loading:!1,className:"w-[278px] h-[24px]",children:e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(s,{variant:"titleMd",children:"$2,195,843.21"}),e.jsx(s,{variant:"titleMd",className:"text-text-weak",children:"utilised /"})]})}),e.jsx(n,{loading:!1,className:"w-[207px] h-[20px]",children:e.jsx(a,{variant:"subtitle",className:"text-text-weak",children:"$3,000,000.00"})})]}),e.jsx(n,{loading:!1,className:"w-[100px] h-[100px] rounded-full",children:e.jsx(r,{value:73.2})})]})]}),e.jsxs(t,{className:"flex-1 p-6 h-[184px]",children:[e.jsx("div",{className:"flex gap-4 items-center mb-4",children:e.jsx(s,{variant:"h2",children:"Overdraft Limit Allocated"})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"grid gap-1",children:[e.jsx(n,{loading:!1,className:"w-[278px] h-[24px]",children:e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(s,{variant:"titleMd",children:"$1,375,000.00"}),e.jsx(s,{variant:"titleMd",className:"text-text-weak",children:"allocated /"})]})}),e.jsx(n,{loading:!1,className:"w-[207px] h-[20px]",children:e.jsx(a,{variant:"subtitle",className:"text-text-weak",children:"$3,000,000.00"})})]}),e.jsx(n,{loading:!1,className:"w-[100px] h-[100px] rounded-full",children:e.jsx(r,{value:45.8,gaugePrimaryColor:"#10B981"})})]})]})]})},N={name:"Dashboard Metrics",render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs(t,{className:"p-6 text-center",children:[e.jsx(s,{variant:"titleSm",className:"mb-4",children:"Server Performance"}),e.jsx(r,{value:92,width:120,height:120,gaugePrimaryColor:"#10B981",strokeWidth:8}),e.jsxs("div",{className:"mt-4",children:[e.jsx(a,{variant:"regular",className:"text-text-weak",children:"CPU Usage"}),e.jsx(S,{theme:"success",variant:"soft",className:"ml-2",children:"Excellent"})]})]}),e.jsxs(t,{className:"p-6 text-center",children:[e.jsx(s,{variant:"titleSm",className:"mb-4",children:"Storage Usage"}),e.jsx(r,{value:68,width:120,height:120,gaugePrimaryColor:"#F59E0B",strokeWidth:8}),e.jsxs("div",{className:"mt-4",children:[e.jsx(a,{variant:"regular",className:"text-text-weak",children:"1.36 TB / 2 TB"}),e.jsx(S,{theme:"warning",variant:"soft",className:"ml-2",children:"Moderate"})]})]}),e.jsxs(t,{className:"p-6 text-center",children:[e.jsx(s,{variant:"titleSm",className:"mb-4",children:"Goal Progress"}),e.jsx(r,{value:34,width:120,height:120,gaugePrimaryColor:"#3B82F6",strokeWidth:8}),e.jsxs("div",{className:"mt-4",children:[e.jsx(a,{variant:"regular",className:"text-text-weak",children:"$34k / $100k"}),e.jsx(S,{theme:"primary",variant:"soft",className:"ml-2",children:"In Progress"})]})]})]})},f={name:"Animated Progress",render:()=>{const[c,i]=E.useState(0),[o,d]=E.useState(!1),P=()=>{d(!0),i(0);const w=setInterval(()=>{i(u=>u>=100?(clearInterval(w),d(!1),100):u+2)},100)},m=()=>{i(0),d(!1)};return e.jsxs("div",{className:"text-center space-y-6",children:[e.jsx(r,{value:c,width:150,height:150,strokeWidth:10,gaugePrimaryColor:"#8B5CF6"}),e.jsxs("div",{className:"space-x-4",children:[e.jsx(b,{onClick:P,disabled:o,theme:"primary",children:o?"Running...":"Start Animation"}),e.jsx(b,{onClick:m,variant:"outline",theme:"neutral",children:"Reset"})]}),e.jsxs(a,{variant:"regular",className:"text-text-weak",children:["Progress: ",c.toFixed(0),"%"]})]})}},j={name:"Thick Stroke Variations",render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:75,strokeWidth:4,width:120,height:120}),e.jsx(a,{variant:"regular",className:"mt-2",children:"Thin (4px)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:75,strokeWidth:8,width:120,height:120}),e.jsx(a,{variant:"regular",className:"mt-2",children:"Medium (8px)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:75,strokeWidth:12,width:120,height:120}),e.jsx(a,{variant:"regular",className:"mt-2",children:"Thick (12px)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{value:75,strokeWidth:16,width:120,height:120,radius:40}),e.jsx(a,{variant:"regular",className:"mt-2",children:"Extra Thick (16px)"})]})]})},y={name:"Performance Scores",render:()=>e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs(t,{className:"p-4 text-center",children:[e.jsx(a,{variant:"regular",className:"mb-2 text-text-weak",children:"Performance"}),e.jsx(r,{value:96,width:80,height:80,gaugePrimaryColor:"#10B981",strokeWidth:6}),e.jsx(a,{variant:"regular",className:"mt-2",children:"96/100"})]}),e.jsxs(t,{className:"p-4 text-center",children:[e.jsx(a,{variant:"regular",className:"mb-2 text-text-weak",children:"Accessibility"}),e.jsx(r,{value:89,width:80,height:80,gaugePrimaryColor:"#10B981",strokeWidth:6}),e.jsx(a,{variant:"regular",className:"mt-2",children:"89/100"})]}),e.jsxs(t,{className:"p-4 text-center",children:[e.jsx(a,{variant:"regular",className:"mb-2 text-text-weak",children:"Best Practices"}),e.jsx(r,{value:77,width:80,height:80,gaugePrimaryColor:"#F59E0B",strokeWidth:6}),e.jsx(a,{variant:"regular",className:"mt-2",children:"77/100"})]}),e.jsxs(t,{className:"p-4 text-center",children:[e.jsx(a,{variant:"regular",className:"mb-2 text-text-weak",children:"SEO"}),e.jsx(r,{value:63,width:80,height:80,gaugePrimaryColor:"#EF4444",strokeWidth:6}),e.jsx(a,{variant:"regular",className:"mt-2",children:"63/100"})]})]})},C={name:"Loading State",render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs(t,{className:"p-6",children:[e.jsx(s,{variant:"titleSm",className:"mb-4",children:"Memory Usage"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(n,{loading:!0,className:"w-24 h-5 mb-1",children:e.jsx("div",{className:"w-24 h-5"})}),e.jsx(n,{loading:!0,className:"w-16 h-4",children:e.jsx("div",{className:"w-16 h-4"})})]}),e.jsx(n,{loading:!0,className:"w-[100px] h-[100px] rounded-full",children:e.jsx("div",{className:"w-[100px] h-[100px] rounded-full"})})]})]}),e.jsxs(t,{className:"p-6",children:[e.jsx(s,{variant:"titleSm",className:"mb-4",children:"Loaded State"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"medium",children:"6.4 GB used"}),e.jsx(a,{variant:"regular",className:"text-text-weak",children:"of 16 GB"})]}),e.jsx(r,{value:40,gaugePrimaryColor:"#3B82F6"})]})]})]})},k={name:"Edge Cases",render:()=>e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-center",children:[e.jsxs("div",{children:[e.jsx(r,{value:0}),e.jsx(a,{variant:"regular",className:"mt-2",children:"0% (Empty)"})]}),e.jsxs("div",{children:[e.jsx(r,{value:100,gaugePrimaryColor:"#10B981"}),e.jsx(a,{variant:"regular",className:"mt-2",children:"100% (Full)"})]}),e.jsxs("div",{children:[e.jsx(r,{value:100.5,max:101}),e.jsx(a,{variant:"regular",className:"mt-2",children:"Over 100%"})]}),e.jsxs("div",{children:[e.jsx(r,{value:33.333333}),e.jsx(a,{variant:"regular",className:"mt-2",children:"Decimal Values"})]})]})};var F,D,z;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: 65
  }
}`,...(z=(D=g.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var W,L,H;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Different Sizes",
  render: () => <div className="flex items-center gap-6">
      <div className="text-center">
        <CircularProgressBar value={75} width={80} height={80} radius={35} strokeWidth={5} />
        <Text variant="regular" className="mt-2 text-text-weak">Small (80px)</Text>
      </div>
      
      <div className="text-center">
        <CircularProgressBar value={75} width={100} height={100} radius={45} strokeWidth={6} />
        <Text variant="regular" className="mt-2 text-text-weak">Medium (100px)</Text>
      </div>
      
      <div className="text-center">
        <CircularProgressBar value={75} width={120} height={120} radius={55} strokeWidth={7} />
        <Text variant="regular" className="mt-2 text-text-weak">Large (120px)</Text>
      </div>
      
      <div className="text-center">
        <CircularProgressBar value={75} width={150} height={150} radius={70} strokeWidth={8} />
        <Text variant="regular" className="mt-2 text-text-weak">Extra Large (150px)</Text>
      </div>
    </div>
}`,...(H=(L=x.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var V,M,R;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Color Variations",
  render: () => <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center">
        <CircularProgressBar value={85} gaugePrimaryColor="#10B981" gaugeSecondaryColor="#D1FAE5" />
        <Text variant="regular" className="mt-2">Success</Text>
      </div>
      
      <div className="text-center">
        <CircularProgressBar value={60} gaugePrimaryColor="#F59E0B" gaugeSecondaryColor="#FEF3C7" />
        <Text variant="regular" className="mt-2">Warning</Text>
      </div>
      
      <div className="text-center">
        <CircularProgressBar value={30} gaugePrimaryColor="#EF4444" gaugeSecondaryColor="#FEE2E2" />
        <Text variant="regular" className="mt-2">Danger</Text>
      </div>
      
      <div className="text-center">
        <CircularProgressBar value={45} gaugePrimaryColor="#8B5CF6" gaugeSecondaryColor="#EDE9FE" />
        <Text variant="regular" className="mt-2">Purple</Text>
      </div>
    </div>
}`,...(R=(M=h.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var A,I,O;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Custom Range",
  render: () => <div className="flex items-center gap-8">
      <div className="text-center">
        <CircularProgressBar value={150} min={0} max={200} />
        <Text variant="regular" className="mt-2">150/200 (75%)</Text>
      </div>
      
      <div className="text-center">
        <CircularProgressBar value={7.5} min={0} max={10} gaugePrimaryColor="#06B6D4" />
        <Text variant="regular" className="mt-2">7.5/10 Rating</Text>
      </div>
      
      <div className="text-center">
        <CircularProgressBar value={850} min={500} max={1000} gaugePrimaryColor="#EC4899" />
        <Text variant="regular" className="mt-2">850/1000 Points</Text>
      </div>
    </div>
}`,...(O=(I=v.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var U,$,q;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Overdraft Facility (Real Example)",
  render: () => {
    const utilizedPercentage = 73.2;
    const allocatedPercentage = 45.8;
    const isLoading = false;
    return <div className="flex gap-6">
        <Card className="flex-1 p-6 h-[184px]">
          <div className="flex gap-4 items-center mb-4">
            <Heading variant="h2">Overdraft Pool</Heading>
            <Button variant="link">
              <Text variant="regular" className="underline">
                View History
              </Text>
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="grid gap-1">
              <Skeletonize loading={isLoading} className="w-[278px] h-[24px]">
                <div className="flex gap-2 items-center">
                  <Heading variant="titleMd">$2,195,843.21</Heading>
                  <Heading variant="titleMd" className="text-text-weak">
                    utilised /
                  </Heading>
                </div>
              </Skeletonize>
              
              <Skeletonize loading={isLoading} className="w-[207px] h-[20px]">
                <Text variant="subtitle" className="text-text-weak">
                  $3,000,000.00
                </Text>
              </Skeletonize>
            </div>
            
            <Skeletonize loading={isLoading} className="w-[100px] h-[100px] rounded-full">
              <CircularProgressBar value={utilizedPercentage} />
            </Skeletonize>
          </div>
        </Card>
        
        <Card className="flex-1 p-6 h-[184px]">
          <div className="flex gap-4 items-center mb-4">
            <Heading variant="h2">Overdraft Limit Allocated</Heading>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="grid gap-1">
              <Skeletonize loading={isLoading} className="w-[278px] h-[24px]">
                <div className="flex gap-2 items-center">
                  <Heading variant="titleMd">$1,375,000.00</Heading>
                  <Heading variant="titleMd" className="text-text-weak">
                    allocated /
                  </Heading>
                </div>
              </Skeletonize>
              
              <Skeletonize loading={isLoading} className="w-[207px] h-[20px]">
                <Text variant="subtitle" className="text-text-weak">
                  $3,000,000.00
                </Text>
              </Skeletonize>
            </div>
            
            <Skeletonize loading={isLoading} className="w-[100px] h-[100px] rounded-full">
              <CircularProgressBar value={allocatedPercentage} gaugePrimaryColor="#10B981" />
            </Skeletonize>
          </div>
        </Card>
      </div>;
  }
}`,...(q=($=p.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var G,K,_;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Dashboard Metrics",
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-6 text-center">
        <Heading variant="titleSm" className="mb-4">Server Performance</Heading>
        <CircularProgressBar value={92} width={120} height={120} gaugePrimaryColor="#10B981" strokeWidth={8} />
        <div className="mt-4">
          <Text variant="regular" className="text-text-weak">CPU Usage</Text>
          <Badge theme="success" variant="soft" className="ml-2">Excellent</Badge>
        </div>
      </Card>
      
      <Card className="p-6 text-center">
        <Heading variant="titleSm" className="mb-4">Storage Usage</Heading>
        <CircularProgressBar value={68} width={120} height={120} gaugePrimaryColor="#F59E0B" strokeWidth={8} />
        <div className="mt-4">
          <Text variant="regular" className="text-text-weak">1.36 TB / 2 TB</Text>
          <Badge theme="warning" variant="soft" className="ml-2">Moderate</Badge>
        </div>
      </Card>
      
      <Card className="p-6 text-center">
        <Heading variant="titleSm" className="mb-4">Goal Progress</Heading>
        <CircularProgressBar value={34} width={120} height={120} gaugePrimaryColor="#3B82F6" strokeWidth={8} />
        <div className="mt-4">
          <Text variant="regular" className="text-text-weak">$34k / $100k</Text>
          <Badge theme="primary" variant="soft" className="ml-2">In Progress</Badge>
        </div>
      </Card>
    </div>
}`,...(_=(K=N.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Animated Progress",
  render: () => {
    const [progress, setProgress] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const startAnimation = () => {
      setIsRunning(true);
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(current => {
          if (current >= 100) {
            clearInterval(interval);
            setIsRunning(false);
            return 100;
          }
          return current + 2;
        });
      }, 100);
    };
    const resetAnimation = () => {
      setProgress(0);
      setIsRunning(false);
    };
    return <div className="text-center space-y-6">
        <CircularProgressBar value={progress} width={150} height={150} strokeWidth={10} gaugePrimaryColor="#8B5CF6" />
        
        <div className="space-x-4">
          <Button onClick={startAnimation} disabled={isRunning} theme="primary">
            {isRunning ? "Running..." : "Start Animation"}
          </Button>
          <Button onClick={resetAnimation} variant="outline" theme="neutral">
            Reset
          </Button>
        </div>
        
        <Text variant="regular" className="text-text-weak">
          Progress: {progress.toFixed(0)}%
        </Text>
      </div>;
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var J,Q,ee;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Thick Stroke Variations",
  render: () => <div className="flex items-center gap-8">
      <div className="text-center">
        <CircularProgressBar value={75} strokeWidth={4} width={120} height={120} />
        <Text variant="regular" className="mt-2">Thin (4px)</Text>
      </div>
      
      <div className="text-center">
        <CircularProgressBar value={75} strokeWidth={8} width={120} height={120} />
        <Text variant="regular" className="mt-2">Medium (8px)</Text>
      </div>
      
      <div className="text-center">
        <CircularProgressBar value={75} strokeWidth={12} width={120} height={120} />
        <Text variant="regular" className="mt-2">Thick (12px)</Text>
      </div>
      
      <div className="text-center">
        <CircularProgressBar value={75} strokeWidth={16} width={120} height={120} radius={40} />
        <Text variant="regular" className="mt-2">Extra Thick (16px)</Text>
      </div>
    </div>
}`,...(ee=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ae,re,se;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "Performance Scores",
  render: () => <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="p-4 text-center">
        <Text variant="regular" className="mb-2 text-text-weak">Performance</Text>
        <CircularProgressBar value={96} width={80} height={80} gaugePrimaryColor="#10B981" strokeWidth={6} />
        <Text variant="regular" className="mt-2">96/100</Text>
      </Card>
      
      <Card className="p-4 text-center">
        <Text variant="regular" className="mb-2 text-text-weak">Accessibility</Text>
        <CircularProgressBar value={89} width={80} height={80} gaugePrimaryColor="#10B981" strokeWidth={6} />
        <Text variant="regular" className="mt-2">89/100</Text>
      </Card>
      
      <Card className="p-4 text-center">
        <Text variant="regular" className="mb-2 text-text-weak">Best Practices</Text>
        <CircularProgressBar value={77} width={80} height={80} gaugePrimaryColor="#F59E0B" strokeWidth={6} />
        <Text variant="regular" className="mt-2">77/100</Text>
      </Card>
      
      <Card className="p-4 text-center">
        <Text variant="regular" className="mb-2 text-text-weak">SEO</Text>
        <CircularProgressBar value={63} width={80} height={80} gaugePrimaryColor="#EF4444" strokeWidth={6} />
        <Text variant="regular" className="mt-2">63/100</Text>
      </Card>
    </div>
}`,...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ne,ie;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Loading State",
  render: () => <div className="flex items-center gap-6">
      <Card className="p-6">
        <Heading variant="titleSm" className="mb-4">Memory Usage</Heading>
        <div className="flex items-center justify-between">
          <div>
            <Skeletonize loading className="w-24 h-5 mb-1">
              <div className="w-24 h-5" />
            </Skeletonize>
            <Skeletonize loading className="w-16 h-4">
              <div className="w-16 h-4" />
            </Skeletonize>
          </div>
          <Skeletonize loading className="w-[100px] h-[100px] rounded-full">
            <div className="w-[100px] h-[100px] rounded-full" />
          </Skeletonize>
        </div>
      </Card>
      
      <Card className="p-6">
        <Heading variant="titleSm" className="mb-4">Loaded State</Heading>
        <div className="flex items-center justify-between">
          <div>
            <Text variant="medium">6.4 GB used</Text>
            <Text variant="regular" className="text-text-weak">of 16 GB</Text>
          </div>
          <CircularProgressBar value={40} gaugePrimaryColor="#3B82F6" />
        </div>
      </Card>
    </div>
}`,...(ie=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,ce,oe;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "Edge Cases",
  render: () => <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div>
        <CircularProgressBar value={0} />
        <Text variant="regular" className="mt-2">0% (Empty)</Text>
      </div>
      
      <div>
        <CircularProgressBar value={100} gaugePrimaryColor="#10B981" />
        <Text variant="regular" className="mt-2">100% (Full)</Text>
      </div>
      
      <div>
        <CircularProgressBar value={100.5} max={101} />
        <Text variant="regular" className="mt-2">Over 100%</Text>
      </div>
      
      <div>
        <CircularProgressBar value={33.333333} />
        <Text variant="regular" className="mt-2">Decimal Values</Text>
      </div>
    </div>
}`,...(oe=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:oe.source}}};const De=["Default","DifferentSizes","ColorVariations","CustomRange","OverdraftFacility","DashboardMetrics","AnimatedProgress","ThickStroke","PerformanceScores","LoadingState","EdgeCases"];export{f as AnimatedProgress,h as ColorVariations,v as CustomRange,N as DashboardMetrics,g as Default,x as DifferentSizes,k as EdgeCases,C as LoadingState,p as OverdraftFacility,y as PerformanceScores,j as ThickStroke,De as __namedExportsOrder,Fe as default};
