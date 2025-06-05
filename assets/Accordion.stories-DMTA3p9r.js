import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{A as c,a as o,b as s,c as n}from"./Accordion-ahtTqz6h.js";import{F as u}from"./secure_payment-C3BVKMEA.js";import{I}from"./Icon-CTnhpE1d.js";import"./index-DRjF_FHU.js";import"./index-HZDBD2ik.js";import"./index-CxRLcT2J.js";import"./index-CAHntWCK.js";import"./cn-8RyR4BqC.js";import"./chevron-down-CqDGuCdo.js";import"./styles-CmMnSVhX.js";import"./index-Bb4qSo10.js";const w={title:"Xenith UI/Components/Accordion",component:c,args:{type:"single",collapsible:!0},render:(...i)=>e.jsxs(c,{...i,type:"single",children:[e.jsxs(o,{value:"item-1",children:[e.jsx(s,{children:"Is it accessible?"}),e.jsx(n,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(o,{value:"item-2",children:[e.jsx(s,{children:"Is it styled?"}),e.jsx(n,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),e.jsxs(o,{value:"item-3",children:[e.jsx(s,{children:"Is it animated?"}),e.jsx(n,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})},r={},t={render:(...i)=>e.jsx(c,{...i,type:"single",collapsible:!0,children:e.jsxs(o,{value:"item-1",showBorder:!1,children:[e.jsx(s,{rightComponent:e.jsx(I,{icon:e.jsx(u,{})}),children:"Is it accessible?"}),e.jsx(n,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]})})};var a,d,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (...args) => {
    return <Accordion {...args} type="single" collapsible>
        <AccordionItem value="item-1" showBorder={false}>
          <AccordionTrigger rightComponent={<Icon icon={<SecurePaymentIcon />} />}>
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>;
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const S=["Default","WithRightComponent"];export{r as Default,t as WithRightComponent,S as __namedExportsOrder,w as default};
