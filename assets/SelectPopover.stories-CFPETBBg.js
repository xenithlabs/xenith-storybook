import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as n}from"./index-DRjF_FHU.js";import{c as u}from"./cn-8RyR4BqC.js";import{F as q}from"./chevron-up-4gJfOMpE.js";import{F as B}from"./chevron-down-CqDGuCdo.js";import{F as W}from"./check-rKbD1QKS.js";import{P as A,a as D,b as k}from"./Popover-A4hNnO1p.js";import{B as N}from"./Button-uM_naRi2.js";import{I as w}from"./Icon-CTnhpE1d.js";import{T as E}from"./Text-AJQ9L6gA.js";import{D as $}from"./Divider-CIm89-oy.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-Bq6ilrdN.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-HZDBD2ik.js";import"./index-Bb4qSo10.js";import"./styles-CmMnSVhX.js";import"./spinner-jGAO5kda.js";const V=n.createContext(void 0),m=()=>{const t=n.useContext(V);return t||(console.warn("SelectPopover.Option must be used within a SelectPopover"),{})},v=({value:t,onChange:o,placeholder:r="Select an option",children:c})=>{const[i,l]=n.useState(!1),[C,I]=n.useState(t),x=n.useRef(null),[_,R]=n.useState(200);n.useEffect(()=>{x.current&&R(x.current.offsetWidth)},[]);const F=P=>{I(P),o==null||o(P),l(!1)};return e.jsx(V.Provider,{value:{open:i,setOpen:l,selectedValue:C,onSelect:F,placeholder:r,buttonRef:x,buttonWidth:_},children:e.jsx(A,{open:i,onOpenChange:l,children:c})})},S=n.forwardRef(({className:t,children:o,innerClassName:r,...c},i)=>{const{buttonRef:l}=m();return e.jsx(D,{ref:i,asChild:!0,children:e.jsx(N,{ref:l,variant:"outline",theme:"neutral",innerClassName:u("w-full flex justify-between",r),className:u("w-full ",t),...c,children:o})})});S.displayName="SelectPopoverTrigger";const O=()=>{const{open:t,selectedValue:o,placeholder:r}=m();return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:(o==null?void 0:o.label)||r}),e.jsx(w,{icon:t?e.jsx(q,{}):e.jsx(B,{}),className:"text-text-weak"})]})},f=({children:t,className:o})=>{const{buttonWidth:r}=m();return e.jsx(k,{className:u(" px-1  text-left rounded-radius-container shadow-md bg-bg-default border border-border-default",o),style:{width:r},children:t})};f.displayName="SelectPopoverContent";const s=({label:t,value:o})=>{const{selectedValue:r,onSelect:c,setOpen:i}=m(),l=r===o;return e.jsxs(N,{variant:"unstyled",innerClassName:"w-full justify-between p-0 m-0",className:u("w-full justify-between rounded-radius-container m-0 hover:bg-accent-weak px-3 py-2 text-left",l&&"bg-accent-weaker"),onClick:()=>{c(o),i(!1)},children:[e.jsx(E,{variant:"regular",children:t}),l&&e.jsx(w,{icon:e.jsx(W,{}),className:"text-text-accent"})]})};v.__docgenInfo={description:"",methods:[],displayName:"SelectPopover",props:{value:{required:!1,tsType:{name:"SelectPopoverOptionType"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: SelectPopoverOptionType<any>) => void",signature:{arguments:[{type:{name:"SelectPopoverOptionType",elements:[{name:"any"}],raw:"SelectPopoverOptionType<any>"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select an option"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};S.__docgenInfo={description:"",methods:[],displayName:"SelectPopoverTrigger"};O.__docgenInfo={description:"",methods:[],displayName:"SelectPopoverValue"};f.__docgenInfo={description:"",methods:[],displayName:"SelectPopoverContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"SelectPopoverOption",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"SelectPopoverOptionType"},description:""}}};const ue={title:"Xenith UI/Components/SelectPopover",component:v,tags:["autodocs"],decorators:[t=>e.jsx("div",{className:"py-10 w-[300px] bg-bg-secondary",children:e.jsx(t,{})})],argTypes:{placeholder:{control:"text",description:"Placeholder text for the select"}}},a=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}],p={args:{placeholder:"Select an option",children:e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx(O,{})}),e.jsxs(f,{children:[e.jsx(s,{label:"Option A",value:a[0]}),e.jsx(s,{label:"Option B",value:a[1]}),e.jsx(s,{label:"Option C",value:a[2]})]})]})},render:t=>{const[o,r]=n.useState(void 0);return e.jsx(v,{...t,value:o,onChange:r})}},d={args:{placeholder:"Select an option",children:e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx(O,{})}),e.jsxs(f,{children:[e.jsx(s,{label:"Option A",value:a[0]}),e.jsx(s,{label:"Option B",value:a[1]}),e.jsx($,{}),e.jsx(s,{label:"Option C",value:a[2]})]})]})},render:t=>{const[o,r]=n.useState(a[1]);return e.jsx(v,{...t,value:o,onChange:r})}};var g,h,j;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: "Select an option",
    children: <>
        <SelectPopoverTrigger>
          <SelectPopoverValue />
        </SelectPopoverTrigger>
        <SelectPopoverOptions>
          <SelectPopoverOption label="Option A" value={OPTIONS[0]} />
          <SelectPopoverOption label="Option B" value={OPTIONS[1]} />
          <SelectPopoverOption label="Option C" value={OPTIONS[2]} />
        </SelectPopoverOptions>
      </>
  },
  render: args => {
    const [selectedValue, setSelectedValue] = useState<OptionType | undefined>(undefined);
    return <SelectPopover {...args} value={selectedValue} onChange={setSelectedValue} />;
  }
}`,...(j=(h=p.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var b,y,T;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: "Select an option",
    children: <>
        <SelectPopoverTrigger>
          <SelectPopoverValue />
        </SelectPopoverTrigger>
        <SelectPopoverOptions>
          <SelectPopoverOption label="Option A" value={OPTIONS[0]} />
          <SelectPopoverOption label="Option B" value={OPTIONS[1]} />
          <Divider />
          <SelectPopoverOption label="Option C" value={OPTIONS[2]} />
        </SelectPopoverOptions>
      </>
  },
  render: args => {
    const [selectedValue, setSelectedValue] = useState<OptionType | undefined>(OPTIONS[1]);
    return <SelectPopover {...args} value={selectedValue} onChange={setSelectedValue} />;
  }
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const me=["Default","WithInitialValue"];export{p as Default,d as WithInitialValue,me as __namedExportsOrder,ue as default};
