import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{F as t,u,a as F,b as f,c as h,d as g,e as x}from"./Form-Dj23DUEH.js";import{r as j}from"./index-DRjF_FHU.js";import{I as E,a as C,P as b}from"./useClickOutside-BWfn5bIc.js";import"./index-HZDBD2ik.js";import"./cn-8RyR4BqC.js";import"./Label-CfHWTmrj.js";import"./index-_lyfCmBZ.js";import"./index-CxRLcT2J.js";import"./index-Bb4qSo10.js";import"./styles-x1yxmyQd.js";import"./stringCase-DaZl3p-i.js";import"./close-D2djoYoT.js";import"./search-5X7N_xNn.js";import"./mini-FlV67GHA.js";import"./index-DuXoWBk8.js";import"./floating-ui.dom-BuxmzwbT.js";import"./check-C0C6JGvp.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";import"./clock-DRhx3Wks.js";import"./Button-BfTE6Gaa.js";import"./Icon-CTnhpE1d.js";import"./index-CAHntWCK.js";import"./Heading-DjlBwQyS.js";import"./Checkbox-LSeb53hr.js";import"./index-Bu1UD4WD.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./Text-C8HBwI4b.js";const rr={title:"Xenith UI/Components/Form",component:t,parameters:{docs:{description:{component:"Form component for handling user inputs."}}},args:{},render:n=>{const e=u();return j.useEffect(()=>{e.setError("username",{message:"This is an error message"})},[e]),r.jsx(t,{...n,...e,children:r.jsx(F,{control:e.control,name:"username",render:({field:m})=>r.jsxs(f,{children:[r.jsx(h,{htmlFor:"username",required:!0,children:"Username"}),r.jsx(g,{children:r.jsx(E,{placeholder:"shadcn",...m})}),r.jsx(x,{})]})})})}},o={args:{}},s={render:n=>{const e=u();return j.useEffect(()=>{e.setError("username",{message:"This is an error message"})},[e]),r.jsx("div",{className:"grid w-[180px]",children:r.jsx(t,{...n,...e,children:r.jsx(F,{control:e.control,name:"username",render:({field:m})=>r.jsxs(f,{children:[r.jsx(h,{required:!0,children:"Username"}),r.jsx(g,{children:r.jsx(E,{...m,placeholder:"Enter A number",leftComponent:r.jsx(C,{as:b,onChange:I=>console.log(I)})})}),r.jsx(x,{})]})})})})}};var a,i,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {}
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const form = useForm();
    useEffect(() => {
      form.setError("username", {
        message: "This is an error message"
      });
    }, [form]);
    return <div className="grid w-[180px]">
        <Form {...args} {...form}>
          <FormField control={form.control} name="username" render={({
          field
        }) => <FormItem>
                <FormLabel required>Username</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter A number" leftComponent={<InputSelectAddon as={PhoneSelect} onChange={v => console.log(v as string)} />} />
                </FormControl>
                <FormMessage />
              </FormItem>} />
        </Form>
      </div>;
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const er=["DefaultForm","PhoneInput"];export{o as DefaultForm,s as PhoneInput,er as __namedExportsOrder,rr as default};
