import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as g}from"./index-DRjF_FHU.js";import{B as t,b as H,a,P as L}from"./BankImage-BzRdofQI.js";import{T as i,a as l,b as o,c as m}from"./Tooltip-D2ba4dcD.js";import{C as u}from"./Card-C5rr-ZzX.js";import{T as s}from"./Text-C8HBwI4b.js";import{B as v}from"./Badge-C8WRcReV.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./cn-8RyR4BqC.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./index-HZDBD2ik.js";const ce={title:"Xenith UI/Components/BankImage",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The BankImage component displays bank and payment provider logos consistently across the application. It handles various bank logos with proper sizing and maintains a consistent visual appearance.

### Key Features
- **Pre-configured Bank Logos**: Includes logos for major banks and payment providers
- **Automatic Sizing**: Handles different logo aspect ratios automatically
- **CDN Hosted**: Logos are served from a CDN for optimal performance
- **Payment Channel Mapping**: Maps payment channels to appropriate bank logos
- **Extensible**: Easy to add new bank logos

### Usage
\`\`\`tsx
import { BankImage, BANK_IMAGE } from "@xenithlabs/xenith-ui";

// Direct usage with bank constant
<BankImage bank={BANK_IMAGE.BCA} />

// With payment channel mapping
import { PAYMENT_CHANNEL_TO_BANK_IMAGE } from "@xenithlabs/xenith-ui";
<BankImage bank={PAYMENT_CHANNEL_TO_BANK_IMAGE["BCA.VA"]} />

// With custom attributes
<BankImage 
  bank={BANK_IMAGE.MANDIRI} 
  alt="Mandiri Bank"
  className="custom-class"
/>
\`\`\`

### Component Props

- **bank** (required): One of the predefined bank image constants
- **...imageProps**: All standard HTML img attributes are supported (alt, className, style, etc.)

### Available Banks
The component supports logos for:
- Indonesian Banks: BCA, BNI, BRI, Mandiri, CIMB, Permata, BTN, BSI, Danamon, Sinarmas, Maybank, Artha Graha
- E-Wallets: OVO, DANA
- QR Payment Systems: QRIS, VietQR, DuitNow, ThaiQR
- Vietnamese Banks: Vietcombank, VietinBank, Sacombank, ACB, BIDV, Dong A, Techcombank
- And more...
        `}}},argTypes:{bank:{control:{type:"select"},options:H,description:"The bank identifier to display",table:{type:{summary:"BankImage constant"},defaultValue:{summary:"BANK_IMAGE.BCA"}}},alt:{control:{type:"text"},description:"Alternative text for the image",table:{type:{summary:"string"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}},style:{control:{type:"object"},description:"Inline styles",table:{type:{summary:"CSSProperties"}}}},args:{bank:a.BCA}},c={},d={name:"All Available Banks",render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Indonesian Banks"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:[a.BCA,a.BNI,a.BRI,a.MANDIRI,a.CIMB,a.PERMATA,a.BTN,a.BSI,a.DANAMON,a.SINARMAS,a.MAYBANK,a.ARTHA_GRAHA].map(n=>e.jsx(i,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("div",{className:"border rounded p-4 hover:bg-surface-subtle",children:e.jsx(t,{bank:n})})}),e.jsx(m,{children:n.toUpperCase()})]})},n))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"E-Wallets & QR Payments"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:[a.OVO,a.DANA,a.QRIS,a.DUITNOW,a.THAIQR,a.VIETQR].map(n=>e.jsx(i,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("div",{className:"border rounded p-4 hover:bg-surface-subtle",children:e.jsx(t,{bank:n})})}),e.jsx(m,{children:n.toUpperCase()})]})},n))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Vietnamese Banks"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:[a.VIETCOMBANK,a.VIENTIN,a.SACOMBANK,a.ACB,a.BIDV,a.DONGA,a.TECHOM].map(n=>e.jsx(i,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("div",{className:"border rounded p-4 hover:bg-surface-subtle",children:e.jsx(t,{bank:n})})}),e.jsx(m,{children:n.toUpperCase()})]})},n))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Other Banks"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:[a.INA,a.BSS].map(n=>e.jsx(i,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("div",{className:"border rounded p-4 hover:bg-surface-subtle",children:e.jsx(t,{bank:n})})}),e.jsx(m,{children:n.toUpperCase()})]})},n))})]})]})},p={name:"Payment Method Card Example",render:()=>e.jsxs("div",{className:"max-w-md space-y-3",children:[e.jsx(u,{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(t,{bank:a.BCA}),e.jsxs("div",{children:[e.jsx(s,{variant:"semiBold",children:"BCA Virtual Account"}),e.jsx(s,{variant:"regular",className:"text-text-weak",children:"1234567890"})]})]}),e.jsx(v,{theme:"success",variant:"soft",size:"sm",children:"Active"})]})}),e.jsx(u,{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(t,{bank:a.MANDIRI}),e.jsxs("div",{children:[e.jsx(s,{variant:"semiBold",children:"Mandiri Virtual Account"}),e.jsx(s,{variant:"regular",className:"text-text-weak",children:"8890123456"})]})]}),e.jsx(v,{theme:"success",variant:"soft",size:"sm",children:"Active"})]})}),e.jsx(u,{className:"p-4 opacity-60",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(t,{bank:a.BNI}),e.jsxs("div",{children:[e.jsx(s,{variant:"semiBold",children:"BNI Virtual Account"}),e.jsx(s,{variant:"regular",className:"text-text-weak",children:"Not configured"})]})]}),e.jsx(v,{theme:"neutral",variant:"soft",size:"sm",children:"Inactive"})]})})]})},A={name:"Payment Options Grid",render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-3 max-w-lg",children:[{bank:a.BCA,name:"BCA"},{bank:a.MANDIRI,name:"Mandiri"},{bank:a.BNI,name:"BNI"},{bank:a.BRI,name:"BRI"},{bank:a.CIMB,name:"CIMB Niaga"},{bank:a.PERMATA,name:"Permata"}].map(n=>e.jsxs("button",{className:"border rounded-lg p-4 hover:border-primary hover:bg-surface-subtle transition-colors",children:[e.jsx(t,{bank:n.bank,className:"mx-auto mb-2"}),e.jsx(s,{variant:"regular",children:n.name})]},n.bank))})},N={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"regular",className:"mb-2",children:"Default"}),e.jsx(t,{bank:a.BCA})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"regular",className:"mb-2",children:"With opacity"}),e.jsx(t,{bank:a.BCA,className:"opacity-50"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"regular",className:"mb-2",children:"With filter"}),e.jsx(t,{bank:a.BCA,className:"grayscale"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"regular",className:"mb-2",children:"Custom size"}),e.jsx(t,{bank:a.BCA,style:{height:40}})]})]})},x={name:"Payment Channel Mapping",render:()=>{const n=[{channel:"BCA.VA",label:"BCA Virtual Account"},{channel:"MDR.VA",label:"Mandiri Virtual Account"},{channel:"BNI.VA",label:"BNI Virtual Account"},{channel:"QRIS",label:"QRIS"},{channel:"DUITNOW_QR",label:"DuitNow QR"}];return e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{variant:"semiBold",className:"mb-4",children:"Payment Channel to Bank Logo Mapping"}),n.map(r=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("code",{className:"text-xs bg-muted px-2 py-1 rounded w-32",children:r.channel}),e.jsx("span",{className:"text-text-weak",children:"→"}),e.jsx(t,{bank:L[r.channel]}),e.jsx(s,{variant:"regular",className:"text-text-weak",children:r.label})]},r.channel))]})}},B={name:"Loading States",render:()=>{const[n,r]=g.useState(!0);return g.useEffect(()=>{const Q=setTimeout(()=>r(!1),2e3);return()=>clearTimeout(Q)},[]),e.jsx("div",{className:"space-y-4",children:e.jsx(u,{className:"p-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[n?e.jsx("div",{className:"w-24 h-6 bg-muted animate-pulse rounded"}):e.jsx(t,{bank:a.BCA}),e.jsxs("div",{children:[e.jsx(s,{variant:"semiBold",children:"Bank Central Asia"}),e.jsx(s,{variant:"regular",className:"text-text-weak",children:"Loading simulation"})]})]})})})}};var h,b,I;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(I=(b=c.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var k,T,M;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "All Available Banks",
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Indonesian Banks</h3>
        <div className="flex flex-wrap gap-4">
          {[BANK_IMAGE.BCA, BANK_IMAGE.BNI, BANK_IMAGE.BRI, BANK_IMAGE.MANDIRI, BANK_IMAGE.CIMB, BANK_IMAGE.PERMATA, BANK_IMAGE.BTN, BANK_IMAGE.BSI, BANK_IMAGE.DANAMON, BANK_IMAGE.SINARMAS, BANK_IMAGE.MAYBANK, BANK_IMAGE.ARTHA_GRAHA].map(bank => <TooltipProvider key={bank}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="border rounded p-4 hover:bg-surface-subtle">
                    <BankImage bank={bank} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>{bank.toUpperCase()}</TooltipContent>
              </Tooltip>
            </TooltipProvider>)}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">E-Wallets & QR Payments</h3>
        <div className="flex flex-wrap gap-4">
          {[BANK_IMAGE.OVO, BANK_IMAGE.DANA, BANK_IMAGE.QRIS, BANK_IMAGE.DUITNOW, BANK_IMAGE.THAIQR, BANK_IMAGE.VIETQR].map(bank => <TooltipProvider key={bank}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="border rounded p-4 hover:bg-surface-subtle">
                    <BankImage bank={bank} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>{bank.toUpperCase()}</TooltipContent>
              </Tooltip>
            </TooltipProvider>)}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Vietnamese Banks</h3>
        <div className="flex flex-wrap gap-4">
          {[BANK_IMAGE.VIETCOMBANK, BANK_IMAGE.VIENTIN, BANK_IMAGE.SACOMBANK, BANK_IMAGE.ACB, BANK_IMAGE.BIDV, BANK_IMAGE.DONGA, BANK_IMAGE.TECHOM].map(bank => <TooltipProvider key={bank}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="border rounded p-4 hover:bg-surface-subtle">
                    <BankImage bank={bank} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>{bank.toUpperCase()}</TooltipContent>
              </Tooltip>
            </TooltipProvider>)}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Other Banks</h3>
        <div className="flex flex-wrap gap-4">
          {[BANK_IMAGE.INA, BANK_IMAGE.BSS].map(bank => <TooltipProvider key={bank}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="border rounded p-4 hover:bg-surface-subtle">
                    <BankImage bank={bank} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>{bank.toUpperCase()}</TooltipContent>
              </Tooltip>
            </TooltipProvider>)}
        </div>
      </div>
    </div>
}`,...(M=(T=d.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var j,f,C;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Payment Method Card Example",
  render: () => <div className="max-w-md space-y-3">
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BankImage bank={BANK_IMAGE.BCA} />
            <div>
              <Text variant="semiBold">BCA Virtual Account</Text>
              <Text variant="regular" className="text-text-weak">
                1234567890
              </Text>
            </div>
          </div>
          <Badge theme="success" variant="soft" size="sm">
            Active
          </Badge>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BankImage bank={BANK_IMAGE.MANDIRI} />
            <div>
              <Text variant="semiBold">Mandiri Virtual Account</Text>
              <Text variant="regular" className="text-text-weak">
                8890123456
              </Text>
            </div>
          </div>
          <Badge theme="success" variant="soft" size="sm">
            Active
          </Badge>
        </div>
      </Card>

      <Card className="p-4 opacity-60">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BankImage bank={BANK_IMAGE.BNI} />
            <div>
              <Text variant="semiBold">BNI Virtual Account</Text>
              <Text variant="regular" className="text-text-weak">
                Not configured
              </Text>
            </div>
          </div>
          <Badge theme="neutral" variant="soft" size="sm">
            Inactive
          </Badge>
        </div>
      </Card>
    </div>
}`,...(C=(f=p.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var y,E,_;A.parameters={...A.parameters,docs:{...(y=A.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Payment Options Grid",
  render: () => <div className="grid grid-cols-3 gap-3 max-w-lg">
      {[{
      bank: BANK_IMAGE.BCA,
      name: "BCA"
    }, {
      bank: BANK_IMAGE.MANDIRI,
      name: "Mandiri"
    }, {
      bank: BANK_IMAGE.BNI,
      name: "BNI"
    }, {
      bank: BANK_IMAGE.BRI,
      name: "BRI"
    }, {
      bank: BANK_IMAGE.CIMB,
      name: "CIMB Niaga"
    }, {
      bank: BANK_IMAGE.PERMATA,
      name: "Permata"
    }].map(item => <button key={item.bank} className="border rounded-lg p-4 hover:border-primary hover:bg-surface-subtle transition-colors">
          <BankImage bank={item.bank} className="mx-auto mb-2" />
          <Text variant="regular">{item.name}</Text>
        </button>)}
    </div>
}`,...(_=(E=A.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var G,K,R;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <div>
        <Text variant="regular" className="mb-2">
          Default
        </Text>
        <BankImage bank={BANK_IMAGE.BCA} />
      </div>
      <div>
        <Text variant="regular" className="mb-2">
          With opacity
        </Text>
        <BankImage bank={BANK_IMAGE.BCA} className="opacity-50" />
      </div>
      <div>
        <Text variant="regular" className="mb-2">
          With filter
        </Text>
        <BankImage bank={BANK_IMAGE.BCA} className="grayscale" />
      </div>
      <div>
        <Text variant="regular" className="mb-2">
          Custom size
        </Text>
        <BankImage bank={BANK_IMAGE.BCA} style={{
        height: 40
      }} />
      </div>
    </div>
}`,...(R=(K=N.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var P,w,S;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Payment Channel Mapping",
  render: () => {
    const paymentChannels = [{
      channel: "BCA.VA",
      label: "BCA Virtual Account"
    }, {
      channel: "MDR.VA",
      label: "Mandiri Virtual Account"
    }, {
      channel: "BNI.VA",
      label: "BNI Virtual Account"
    }, {
      channel: "QRIS",
      label: "QRIS"
    }, {
      channel: "DUITNOW_QR",
      label: "DuitNow QR"
    }];
    return <div className="space-y-3">
        <Text variant="semiBold" className="mb-4">
          Payment Channel to Bank Logo Mapping
        </Text>
        {paymentChannels.map(item => <div key={item.channel} className="flex items-center gap-3">
            <code className="text-xs bg-muted px-2 py-1 rounded w-32">
              {item.channel}
            </code>
            <span className="text-text-weak">→</span>
            <BankImage bank={PAYMENT_CHANNEL_TO_BANK_IMAGE[item.channel as keyof typeof PAYMENT_CHANNEL_TO_BANK_IMAGE]} />
            <Text variant="regular" className="text-text-weak">
              {item.label}
            </Text>
          </div>)}
      </div>;
  }
}`,...(S=(w=x.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var V,D,O;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Loading States",
  render: () => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);
    return <div className="space-y-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            {loading ? <div className="w-24 h-6 bg-muted animate-pulse rounded" /> : <BankImage bank={BANK_IMAGE.BCA} />}
            <div>
              <Text variant="semiBold">Bank Central Asia</Text>
              <Text variant="regular" className="text-text-weak">
                Loading simulation
              </Text>
            </div>
          </div>
        </Card>
      </div>;
  }
}`,...(O=(D=B.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const de=["Default","AllBankImages","PaymentMethodCard","PaymentOptions","WithCustomStyling","PaymentChannelMapping","ErrorHandling"];export{d as AllBankImages,c as Default,B as ErrorHandling,x as PaymentChannelMapping,p as PaymentMethodCard,A as PaymentOptions,N as WithCustomStyling,de as __namedExportsOrder,ce as default};
