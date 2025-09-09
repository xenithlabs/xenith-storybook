import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as v}from"./index-DRjF_FHU.js";import{B as s,b as V,a,P as U}from"./BankImage-DCYL0Mm5.js";import{T as i,a as l,b as o,c as m}from"./Tooltip-D2ba4dcD.js";import{C as I}from"./Card-C5rr-ZzX.js";import{T as t}from"./Text-C8HBwI4b.js";import{B as u}from"./Badge-CQf0SPqP.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-DdILnG7L.js";import"./index-qtGI3euC.js";import"./index-CxZrjbHI.js";import"./floating-ui.dom-BuxmzwbT.js";import"./index-KY2xTor3.js";import"./index-BhXpUKZt.js";import"./index-BXQDTo2X.js";import"./cn-8RyR4BqC.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./index-HZDBD2ik.js";const de={title:"Xenith UI/Components/BankImage",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{bank:{control:{type:"select"},options:V,description:"The bank identifier to display",table:{type:{summary:"BankImage constant"},defaultValue:{summary:"BANK_IMAGE.BCA"}}},alt:{control:{type:"text"},description:"Alternative text for the image",table:{type:{summary:"string"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}},style:{control:{type:"object"},description:"Inline styles",table:{type:{summary:"CSSProperties"}}}},args:{bank:a.BCA}},d={},A={name:"All Available Banks",render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Indonesian Banks"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:[a.BCA,a.BNI,a.BRI,a.MANDIRI,a.CIMB,a.PERMATA,a.BTN,a.BSI,a.DANAMON,a.SINARMAS,a.MAYBANK,a.ARTHA_GRAHA,a.BUMI_ARTA,a.CAPITAL,a.MAYAPADA,a.MUAMALAT,a.MULTIARTA_SENTOSA,a.BNC,a.SBI,a.JTRUST,a.MNC,a.OCBC_NISP].map(n=>e.jsx(i,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("div",{className:"border rounded p-4 hover:bg-surface-subtle",children:e.jsx(s,{bank:n})})}),e.jsx(m,{children:n.toUpperCase()})]})},n))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"E-Wallets & QR Payments"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:[a.OVO,a.DANA,a.QRIS,a.DUITNOW,a.THAIQR,a.VIETQR,a.UPI,a.ALIPAY,a.SHOPEEPAY,a.TOUCHNGO,a.LINKAJA,a.EASYPAISA,a.JAZZCASH].map(n=>e.jsx(i,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("div",{className:"border rounded p-4 hover:bg-surface-subtle",children:e.jsx(s,{bank:n})})}),e.jsx(m,{children:n.toUpperCase()})]})},n))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Vietnamese Banks"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:[a.VIETCOMBANK,a.VIETINBANK,a.SACOMBANK,a.ACB,a.BIDV,a.DONGABANK,a.TECHCOMBANK,a.AGRIBANK].map(n=>e.jsx(i,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("div",{className:"border rounded p-4 hover:bg-surface-subtle",children:e.jsx(s,{bank:n})})}),e.jsx(m,{children:n.toUpperCase()})]})},n))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Malaysian Banks"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:[a.AFFIN,a.AGROBANK,a.ALLIANCE,a.AMBANK,a.BANK_ISLAM,a.HONG_LEONG,a.KUWAIT_FINANCE,a.PUBLIC,a.RHB,a.BSN].map(n=>e.jsx(i,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("div",{className:"border rounded p-4 hover:bg-surface-subtle",children:e.jsx(s,{bank:n})})}),e.jsx(m,{children:n.toUpperCase()})]})},n))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"International Banks"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:[a.BANK_OF_CHINA,a.CCB,a.CITIBANK,a.CTBC,a.DBS,a.HSBC,a.IBK,a.OCBC_BANK,a.RAKYAT,a.STANDARD_CHARTERED,a.UOB].map(n=>e.jsx(i,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("div",{className:"border rounded p-4 hover:bg-surface-subtle",children:e.jsx(s,{bank:n})})}),e.jsx(m,{children:n.toUpperCase()})]})},n))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Other Banks"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:[a.INA,a.BSS,a.WIGCKHPP,a.ABAAKHPP,a.ACLBKHPP].map(n=>e.jsx(i,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("div",{className:"border rounded p-4 hover:bg-surface-subtle",children:e.jsx(s,{bank:n})})}),e.jsx(m,{children:n.toUpperCase()})]})},n))})]})]})},c={name:"Payment Method Card Example",render:()=>e.jsxs("div",{className:"max-w-md space-y-3",children:[e.jsx(I,{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{bank:a.BCA}),e.jsxs("div",{children:[e.jsx(t,{variant:"semiBold",children:"BCA Virtual Account"}),e.jsx(t,{variant:"regular",className:"text-text-weak",children:"1234567890"})]})]}),e.jsx(u,{theme:"success",variant:"soft",size:"sm",children:"Active"})]})}),e.jsx(I,{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{bank:a.MANDIRI}),e.jsxs("div",{children:[e.jsx(t,{variant:"semiBold",children:"Mandiri Virtual Account"}),e.jsx(t,{variant:"regular",className:"text-text-weak",children:"8890123456"})]})]}),e.jsx(u,{theme:"success",variant:"soft",size:"sm",children:"Active"})]})}),e.jsx(I,{className:"p-4 opacity-60",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{bank:a.BNI}),e.jsxs("div",{children:[e.jsx(t,{variant:"semiBold",children:"BNI Virtual Account"}),e.jsx(t,{variant:"regular",className:"text-text-weak",children:"Not configured"})]})]}),e.jsx(u,{theme:"neutral",variant:"soft",size:"sm",children:"Inactive"})]})})]})},N={name:"Payment Options Grid",render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-3 max-w-lg",children:[{bank:a.BCA,name:"BCA"},{bank:a.MANDIRI,name:"Mandiri"},{bank:a.BNI,name:"BNI"},{bank:a.BRI,name:"BRI"},{bank:a.CIMB,name:"CIMB Niaga"},{bank:a.PERMATA,name:"Permata"}].map(n=>e.jsxs("button",{className:"border rounded-lg p-4 hover:border-primary hover:bg-surface-subtle transition-colors",children:[e.jsx(s,{bank:n.bank,className:"mx-auto mb-2"}),e.jsx(t,{variant:"regular",children:n.name})]},n.bank))})},p={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"regular",className:"mb-2",children:"Default"}),e.jsx(s,{bank:a.BCA})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"regular",className:"mb-2",children:"With opacity"}),e.jsx(s,{bank:a.BCA,className:"opacity-50"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"regular",className:"mb-2",children:"With filter"}),e.jsx(s,{bank:a.BCA,className:"grayscale"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"regular",className:"mb-2",children:"Custom size"}),e.jsx(s,{bank:a.BCA,style:{height:40}})]})]})},B={name:"Payment Channel Mapping",render:()=>{const n=[{channel:"BCA.VA",label:"BCA Virtual Account"},{channel:"MDR.VA",label:"Mandiri Virtual Account"},{channel:"BNI.VA",label:"BNI Virtual Account"},{channel:"QRIS",label:"QRIS"},{channel:"DUITNOW_QR",label:"DuitNow QR"}];return e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{variant:"semiBold",className:"mb-4",children:"Payment Channel to Bank Logo Mapping"}),n.map(r=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("code",{className:"text-xs bg-muted px-2 py-1 rounded w-32",children:r.channel}),e.jsx("span",{className:"text-text-weak",children:"→"}),e.jsx(s,{bank:U[r.channel]}),e.jsx(t,{variant:"regular",className:"text-text-weak",children:r.label})]},r.channel))]})}},x={name:"Loading States",render:()=>{const[n,r]=v.useState(!0);return v.useEffect(()=>{const L=setTimeout(()=>r(!1),2e3);return()=>clearTimeout(L)},[]),e.jsx("div",{className:"space-y-4",children:e.jsx(I,{className:"p-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[n?e.jsx("div",{className:"w-24 h-6 bg-muted animate-pulse rounded"}):e.jsx(s,{bank:a.BCA}),e.jsxs("div",{children:[e.jsx(t,{variant:"semiBold",children:"Bank Central Asia"}),e.jsx(t,{variant:"regular",className:"text-text-weak",children:"Loading simulation"})]})]})})})}};var h,g,b;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(b=(g=d.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var T,M,C;A.parameters={...A.parameters,docs:{...(T=A.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "All Available Banks",
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Indonesian Banks</h3>
        <div className="flex flex-wrap gap-4">
          {[BANK_IMAGE.BCA, BANK_IMAGE.BNI, BANK_IMAGE.BRI, BANK_IMAGE.MANDIRI, BANK_IMAGE.CIMB, BANK_IMAGE.PERMATA, BANK_IMAGE.BTN, BANK_IMAGE.BSI, BANK_IMAGE.DANAMON, BANK_IMAGE.SINARMAS, BANK_IMAGE.MAYBANK, BANK_IMAGE.ARTHA_GRAHA, BANK_IMAGE.BUMI_ARTA, BANK_IMAGE.CAPITAL, BANK_IMAGE.MAYAPADA, BANK_IMAGE.MUAMALAT, BANK_IMAGE.MULTIARTA_SENTOSA, BANK_IMAGE.BNC, BANK_IMAGE.SBI, BANK_IMAGE.JTRUST, BANK_IMAGE.MNC, BANK_IMAGE.OCBC_NISP].map(bank => <TooltipProvider key={bank}>
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
          {[BANK_IMAGE.OVO, BANK_IMAGE.DANA, BANK_IMAGE.QRIS, BANK_IMAGE.DUITNOW, BANK_IMAGE.THAIQR, BANK_IMAGE.VIETQR, BANK_IMAGE.UPI, BANK_IMAGE.ALIPAY, BANK_IMAGE.SHOPEEPAY, BANK_IMAGE.TOUCHNGO, BANK_IMAGE.LINKAJA, BANK_IMAGE.EASYPAISA, BANK_IMAGE.JAZZCASH].map(bank => <TooltipProvider key={bank}>
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
          {[BANK_IMAGE.VIETCOMBANK, BANK_IMAGE.VIETINBANK, BANK_IMAGE.SACOMBANK, BANK_IMAGE.ACB, BANK_IMAGE.BIDV, BANK_IMAGE.DONGABANK, BANK_IMAGE.TECHCOMBANK, BANK_IMAGE.AGRIBANK].map(bank => <TooltipProvider key={bank}>
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
        <h3 className="text-sm font-medium mb-4">Malaysian Banks</h3>
        <div className="flex flex-wrap gap-4">
          {[BANK_IMAGE.AFFIN, BANK_IMAGE.AGROBANK, BANK_IMAGE.ALLIANCE, BANK_IMAGE.AMBANK, BANK_IMAGE.BANK_ISLAM, BANK_IMAGE.HONG_LEONG, BANK_IMAGE.KUWAIT_FINANCE, BANK_IMAGE.PUBLIC, BANK_IMAGE.RHB, BANK_IMAGE.BSN].map(bank => <TooltipProvider key={bank}>
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
        <h3 className="text-sm font-medium mb-4">International Banks</h3>
        <div className="flex flex-wrap gap-4">
          {[BANK_IMAGE.BANK_OF_CHINA, BANK_IMAGE.CCB, BANK_IMAGE.CITIBANK, BANK_IMAGE.CTBC, BANK_IMAGE.DBS, BANK_IMAGE.HSBC, BANK_IMAGE.IBK, BANK_IMAGE.OCBC_BANK, BANK_IMAGE.RAKYAT, BANK_IMAGE.STANDARD_CHARTERED, BANK_IMAGE.UOB].map(bank => <TooltipProvider key={bank}>
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
          {[BANK_IMAGE.INA, BANK_IMAGE.BSS, BANK_IMAGE.WIGCKHPP, BANK_IMAGE.ABAAKHPP, BANK_IMAGE.ACLBKHPP].map(bank => <TooltipProvider key={bank}>
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
}`,...(C=(M=A.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var E,k,K;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(K=(k=c.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};var _,j,f;N.parameters={...N.parameters,docs:{...(_=N.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(f=(j=N.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var G,y,P;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(P=(y=p.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var R,S,O;B.parameters={...B.parameters,docs:{...(R=B.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(S=B.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var w,D,H;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(H=(D=x.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const Ae=["Default","AllBankImages","PaymentMethodCard","PaymentOptions","WithCustomStyling","PaymentChannelMapping","ErrorHandling"];export{A as AllBankImages,d as Default,x as ErrorHandling,B as PaymentChannelMapping,c as PaymentMethodCard,N as PaymentOptions,p as WithCustomStyling,Ae as __namedExportsOrder,de as default};
