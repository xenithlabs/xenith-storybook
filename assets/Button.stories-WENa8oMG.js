import{j as o}from"./jsx-runtime-DWbWqHZ-.js";import{I as z}from"./Icon-BVoV0EQW.js";import{F as S}from"./edit-BuOM16EU.js";import{B as t}from"./Button-CSepLZLg.js";import"./index-l2PZgWEW.js";import"./cn-C-5SdYIA.js";import"./index-Bb4qSo10.js";import"./index-Cm6j2cFO.js";import"./styles-VqaES_xA.js";import"./spinner-DNNsglCv.js";const k={title:"Xenith UI/Components/Button",component:t,tags:["autodocs"],args:{},argTypes:{variant:{control:"select",options:["solid","outline","nude","link"]},icon:{},children:{},disabled:{control:"boolean"},iconPosition:{control:"select",options:["left","right"]},iconOnly:{control:"boolean"},size:{control:"select",options:["sm","md"]},theme:{control:"select",options:["neutral","destructive","primary"]}},render:r=>o.jsx(t,{...r,children:"Button"})},e={render:r=>o.jsx(t,{...r,icon:o.jsx(z,{icon:o.jsx(S,{})}),children:"Button"})},n={render:r=>o.jsx(t,{...r,icon:o.jsx(z,{icon:o.jsx(S,{}),size:"lg"}),size:"sm",iconOnly:!0})},s={render:r=>o.jsx(t,{...r,loading:!0,children:"Button"})},a={render:()=>o.jsx(t,{variant:"outline",children:"Button"})},c={};var i,d,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<Edit />} />}>
      Button
    </Button>
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Button {...args} icon={<Icon icon={<Edit />} size="lg" />} size="sm" iconOnly />
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,B,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Button {...args} loading>
      Button
    </Button>
}`,...(x=(B=s.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var j,h,f;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Button variant="outline">Button</Button>
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var I,y,O;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(O=(y=c.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};const w=["WithIcon","IconOnly","Loading","ButtonAccent","Default"];export{a as ButtonAccent,c as Default,n as IconOnly,s as Loading,e as WithIcon,w as __namedExportsOrder,k as default};
