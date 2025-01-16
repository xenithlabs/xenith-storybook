import{j as e}from"./jsx-runtime-BhBAkL08.js";import{T as g,a as A,b as I,c as T}from"./Tooltip-BRwrPIl0.js";import"./index-caxmlYbZ.js";import"./index-d7ziAqdJ.js";import"./index-DIE_uK0V.js";import"./index-CoQPK225.js";import"./index-9ELtA30B.js";import"./index-CYGPaFfr.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-BPrjlVTu.js";import"./index-D1_gb_Tp.js";import"./index-CIZp6xOi.js";import"./cn-C-5SdYIA.js";const d={BNI:"bni",BCA:"bca",ARTHA_GRAHA:"artha_graha",MAYBANK:"maybank",MANDIRI:"mandiri",PERMATA:"permata",BRI:"bri",CIMB:"cimb",QRIS:"qris",INA:"ina",OVO:"ovo",BSS:"bss",DANA:"dana",VIENTIN:"vientin",SACOMBANK:"sacombank",VIETCOMBANK:"vietcom",VIETQR:"vietqr",ACB:"acb",BIDV:"bidv",DONGA:"donga",TECHOM:"techom",BSI:"bsi",BTN:"btn",DANAMON:"danamon",SINARMAS:"sinarmas"},b=Object.values(d),t=({bank:n,...a})=>e.jsx("img",{src:`https://d3jlvns71gs4om.cloudfront.net/images/${n}.png`,...a});t.__docgenInfo={description:"",methods:[],displayName:"BankImage",props:{bank:{required:!0,tsType:{name:"unknown[number]",raw:"(typeof bankImages)[number]"},description:""}},composes:["ImgHTMLAttributes"]};const E={title:"Xenith UI/Components/BankImage",component:t,tags:["autodocs"],args:{bank:d.BCA}},o={render:n=>e.jsx("div",{className:"flex flex-wrap max-w-full gap-4",children:b.map(a=>e.jsx(g,{children:e.jsxs(A,{children:[e.jsx(I,{children:e.jsx(t,{...n,bank:a})}),e.jsx(T,{children:a})]})},a))})},r={};var s,i,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap max-w-full gap-4">
      {bankImages.map(name => {
      return <TooltipProvider key={name}>
            <Tooltip>
              <TooltipTrigger>
                <BankImage {...args} bank={name} />
              </TooltipTrigger>
              <TooltipContent>{name}</TooltipContent>
            </Tooltip>
          </TooltipProvider>;
    })}
    </div>
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,c,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const O=["AllBankImage","SingleImage"];export{o as AllBankImage,r as SingleImage,O as __namedExportsOrder,E as default};
