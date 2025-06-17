import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{P as a,a as r,b as o,c,d as p}from"./Pagination-Cq4bYUU2.js";import{r as g}from"./index-DRjF_FHU.js";import"./cn-8RyR4BqC.js";import"./chevron-left-D0P6BdMN.js";import"./chevron-right-D4FvqfWr.js";import"./Button-C-jt4Opy.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-x1yxmyQd.js";import"./chevron-up-Dp-rU9It.js";import"./chevron-down-CyV3wpL8.js";import"./spinner-ZMRwnkYw.js";import"./Icon-CTnhpE1d.js";import"./useClickOutside-Bx7J1K8K.js";import"./search-CRI6LAtg.js";import"./close-D2djoYoT.js";import"./stringCase-DaZl3p-i.js";import"./check-C0C6JGvp.js";import"./clock-DRhx3Wks.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-CAHntWCK.js";import"./Heading-DjlBwQyS.js";import"./Checkbox-CAdLyoQE.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./Text-C8HBwI4b.js";const se={title:"Xenith UI/Components/Pagination",component:a,tags:["autodocs"],decorators:m=>e.jsx("div",{className:"h-[300px]",children:e.jsx(m,{})}),render:()=>e.jsxs(a,{total:113,children:[e.jsx(r,{}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(o,{}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx(c,{}),e.jsx(p,{})]})]})]})},t={},s={render:()=>e.jsxs(a,{pageSize:50,children:[e.jsx(r,{}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(o,{}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx(c,{}),e.jsx(p,{})]})]})]})},n={render:()=>e.jsxs(a,{pageSize:50,children:[e.jsx(r,{selectProps:{readonly:!0,checkIcon:null}}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(o,{}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx(c,{}),e.jsx(p,{})]})]})]})},i={render:()=>{const[m,W]=g.useState(1),[C,y]=g.useState(50);return e.jsxs(a,{page:m,pageSize:C,onPageChange:W,onPageSizeChange:y,total:113,children:[e.jsx(r,{}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(o,{}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx(c,{}),e.jsx(p,{})]})]})]})}};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var P,S,j;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Pagination pageSize={50}>
      <PaginationSizeSetter />
      <div className="flex gap-2 items-center">
        <PaginationTotal />
        <div className="flex gap-1">
          <PaginationPrev />
          <PaginationNext />
        </div>
      </div>
    </Pagination>
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var u,h,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Pagination pageSize={50}>
      <PaginationSizeSetter selectProps={{
      readonly: true,
      checkIcon: null
    }} />
      <div className="flex gap-2 items-center">
        <PaginationTotal />
        <div className="flex gap-1">
          <PaginationPrev />
          <PaginationNext />
        </div>
      </div>
    </Pagination>
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,N,z;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(50);
    return <Pagination page={page} pageSize={pageSize} onPageChange={setPage} onPageSizeChange={setPageSize} total={113}>
        <PaginationSizeSetter />
        <div className="flex gap-2 items-center">
          <PaginationTotal />
          <div className="flex gap-1">
            <PaginationPrev />
            <PaginationNext />
          </div>
        </div>
      </Pagination>;
  }
}`,...(z=(N=i.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};const ne=["Default","WithPredefinedProps","WithReadonlySelect","WithOuterState"];export{t as Default,i as WithOuterState,s as WithPredefinedProps,n as WithReadonlySelect,ne as __namedExportsOrder,se as default};
