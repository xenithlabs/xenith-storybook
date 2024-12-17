import{j as e}from"./jsx-runtime-BhBAkL08.js";import{T as g,a as T,b as I,c as A}from"./Tooltip-C8FBoUVo.js";import"./index-caxmlYbZ.js";import"./index-d7ziAqdJ.js";import"./index-DIE_uK0V.js";import"./index-CoQPK225.js";import"./index-9ELtA30B.js";import"./index-CEEY2n4j.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-BPrjlVTu.js";import"./index-D1_gb_Tp.js";import"./index-CIZp6xOi.js";import"./cn-C-5SdYIA.js";const d={BNI:"bni",BCA:"bca",ARTHA_GRAHA:"artha_graha",MAYBANK:"maybank",MANDIRI:"mandiri",PERMATA:"permata",BRI:"bri",CIMB:"cimb",QRIS:"qris",INA:"ina",OVO:"ovo",BSS:"bss",DANA:"dana",VIENTIN:"vientin",SACOMBANK:"sacombank",VIETCOMBANK:"vietcom",VIETQR:"vietqr",ACB:"acb",BIDV:"bidv",DONGA:"donga",TECHOM:"techom"},u=Object.values(d),t=({bank:n,...o})=>e.jsx("img",{src:`https://d3jlvns71gs4om.cloudfront.net/images/${n}.png`,...o});t.__docgenInfo={description:"",methods:[],displayName:"BankImage",props:{bank:{required:!0,tsType:{name:"unknown[number]",raw:"(typeof bankImages)[number]"},description:""}},composes:["ImgHTMLAttributes"]};const M={title:"Xenith UI/Components/BankImage",component:t,tags:["autodocs"],args:{bank:d.BCA}},r={render:n=>e.jsx("div",{className:"flex flex-wrap max-w-full gap-4",children:u.map(o=>e.jsx(g,{children:e.jsxs(T,{children:[e.jsx(I,{children:e.jsx(t,{...n,bank:o})}),e.jsx(A,{children:o})]})},o))})},a={};var s,i,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const O=["AllBankImage","SingleImage"];export{r as AllBankImage,a as SingleImage,O as __namedExportsOrder,M as default};
