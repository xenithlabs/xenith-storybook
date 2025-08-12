import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{C as a,a as r}from"./Countdown-C2nUTuDH.js";import{r as c,R as ie}from"./index-DRjF_FHU.js";import{F as j}from"./warning-Dq-lGsKU.js";import{t as S}from"./toDate-SX-ecmdR.js";import{C as d}from"./Card-C5rr-ZzX.js";import{I as b}from"./Icon-CTnhpE1d.js";import{H as l}from"./Heading-DjlBwQyS.js";import{T as n}from"./Text-C8HBwI4b.js";import{B as u}from"./Button-DcdQGMoO.js";import{B as se}from"./Badge-C8WRcReV.js";import"./cn-8RyR4BqC.js";import"./clock-DRhx3Wks.js";import"./index-Bb4qSo10.js";import"./index-HZDBD2ik.js";import"./styles-x1yxmyQd.js";import"./spinner-ojW7ALd7.js";import"./chevron-down-CyV3wpL8.js";function oe(t,s){return+S(t)-+S(s)}const be={title:"Xenith UI/Components/Countdown",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The Countdown component provides a flexible timer that counts down from a specified duration to zero. It uses React Context to share the countdown state with child components, making it perfect for payment timeouts, session expiry warnings, and other time-sensitive operations.

### Key Features
- **Context-Based Architecture**: Uses React Context for flexible child component access
- **Customizable Duration**: Set any initial duration in milliseconds
- **Automatic Cleanup**: Handles timer cleanup on unmount
- **Flexible Display**: Render countdown using custom child components
- **Callback Support**: Execute functions when countdown reaches zero
- **Format Options**: Display hours, minutes, and seconds as needed
- **Custom Icons**: Customizable icons for different contexts

### Usage
\`\`\`tsx
import { Countdown, CountdownText } from "@xenithlabs/xenith-ui";

// Basic countdown
<Countdown
  initialDuration={5 * 60 * 1000} // 5 minutes
  onCountdownEnd={() => alert('Time up!')}
>
  <CountdownText />
</Countdown>

// Payment expiration countdown
const expirationTime = "2024-01-15T15:30:00Z";
const timeLeft = differenceInMilliseconds(new Date(expirationTime), new Date());

<Countdown
  initialDuration={timeLeft}
  onCountdownEnd={() => window.location.reload()}
>
  <CountdownText />
</Countdown>

// Custom display
<Countdown initialDuration={60000} onCountdownEnd={handleTimeout}>
  <div className="text-red-500">
    <CountdownText icon={<WarningIcon />} className="font-bold" />
    <p>Payment will expire soon!</p>
  </div>
</Countdown>
\`\`\`

### Component Props

**Countdown Props:**
- **initialDuration** (number, required): Duration in milliseconds
- **onCountdownEnd** (() => void, required): Callback when countdown reaches zero
- **step** (number): Update interval in milliseconds. Default: 1000
- **children** (ReactNode): Child components that consume countdown context

**CountdownText Props:**
- **icon** (ReactNode): Icon to display. Default: ClockIcon
- **className** (string): Additional CSS classes
- **...props**: All HTML paragraph element attributes

### Countdown Context

The countdown context provides:
- **hours** (number): Remaining hours
- **minutes** (number): Remaining minutes (0-59)
- **seconds** (number): Remaining seconds (0-59)

### Display Formats

- **Less than 1 hour**: MM:SS (e.g., "05:30")
- **1 hour or more**: HH:MM:SS (e.g., "1:05:30")
- **Zero-padded**: All values are zero-padded ("05" not "5")

### Common Use Cases

1. **Payment Timeouts**: Show payment expiration time
2. **Session Management**: Warn users of session expiry
3. **OTP Timeouts**: Display OTP code validity period
4. **Auction Timers**: Show time remaining in auction
5. **Download Links**: Show temporary link expiry
6. **Maintenance Windows**: Display maintenance countdown
        `}}},argTypes:{initialDuration:{control:{type:"number",min:1e3,max:864e5,step:1e3},description:"Initial countdown duration in milliseconds",table:{type:{summary:"number"}}},onCountdownEnd:{action:"onCountdownEnd",description:"Callback function when countdown reaches zero",table:{type:{summary:"() => void"}}},step:{control:{type:"number",min:100,max:5e3,step:100},description:"Update interval in milliseconds",table:{type:{summary:"number"},defaultValue:{summary:"1000"}}},children:{control:!1,description:"Child components that can access countdown context",table:{type:{summary:"ReactNode"}}}},args:{initialDuration:3e5,step:1e3}},x={args:{initialDuration:3e5,onCountdownEnd:()=>alert("Countdown finished!")},render:t=>e.jsx(a,{...t,children:e.jsx(r,{})})},p={name:"Payment Timeout (Real Example)",args:{initialDuration:12e4,onCountdownEnd:()=>{}},render:()=>{const[t,s]=c.useState(!1),i=new Date(Date.now()+2*60*1e3).toISOString(),m=oe(new Date(i),new Date);return t?e.jsxs(d,{className:"p-6 text-center border-danger",children:[e.jsx(b,{icon:e.jsx(j,{}),className:"w-12 h-12 mx-auto mb-4 text-destructive"}),e.jsx(l,{variant:"titleMd",className:"text-destructive mb-2",children:"Payment Expired"}),e.jsx(n,{className:"text-text-weak mb-4",children:"This payment link has expired. Please request a new payment link."}),e.jsx(u,{theme:"primary",onClick:()=>window.location.reload(),children:"Request New Payment"})]}):e.jsxs(d,{className:"p-6",children:[e.jsx(l,{variant:"titleSm",className:"mb-4",children:"Complete Your Payment"}),e.jsx(n,{className:"mb-4",children:"Please complete your payment before the time expires."}),e.jsx("div",{className:"bg-warning/10 border border-warning rounded p-4 mb-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(n,{variant:"medium",className:"text-warning",children:"Payment expires in:"}),e.jsx(a,{initialDuration:m,onCountdownEnd:()=>s(!0),children:e.jsx(r,{className:"text-warning"})})]})}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(n,{children:"Amount:"}),e.jsx(n,{variant:"semiBold",children:"$1,234.56"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(n,{children:"Transaction ID:"}),e.jsx(n,{children:"TXN_123456789"})]})]}),e.jsx(u,{theme:"primary",className:"w-full mt-6",children:"Pay Now"})]})}},w={name:"Short Duration (30 seconds)",args:{initialDuration:3e4,onCountdownEnd:()=>console.log("30 second countdown finished")},render:t=>{const[s,i]=c.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{...t,initialDuration:3e4,onCountdownEnd:()=>i("Time's up!"),children:e.jsx(r,{})}),s&&e.jsx(se,{theme:"destructive",variant:"solid",children:s})]})}},h={name:"Long Duration (2 hours)",args:{initialDuration:2*60*60*1e3,onCountdownEnd:()=>console.log("2 hour countdown finished")},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{variant:"medium",children:"Session expires in:"}),e.jsx(a,{initialDuration:2*60*60*1e3,onCountdownEnd:()=>console.log("Session expired"),children:e.jsx(r,{})})]})},g={name:"Custom Icon & Styling",args:{initialDuration:6e4,onCountdownEnd:()=>{}},render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(n,{variant:"medium",className:"mb-2",children:"With Warning Icon"}),e.jsx(a,{initialDuration:6e4,onCountdownEnd:()=>{},children:e.jsx(r,{icon:e.jsx(b,{icon:e.jsx(j,{}),className:"text-warning"}),className:"text-warning"})})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"medium",className:"mb-2",children:"No Icon"}),e.jsx(a,{initialDuration:9e4,onCountdownEnd:()=>{},children:e.jsx(r,{icon:null,className:"text-primary font-mono text-lg"})})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"medium",className:"mb-2",children:"Large Size"}),e.jsx(a,{initialDuration:45e3,onCountdownEnd:()=>{},children:e.jsx(r,{className:"text-2xl font-bold text-danger"})})]})]})},C={name:"OTP Code Timeout",args:{initialDuration:18e4,onCountdownEnd:()=>{}},render:()=>{const[t,s]=c.useState(!1),[i]=c.useState("123456");return e.jsxs(d,{className:"p-6 max-w-sm",children:[e.jsx(l,{variant:"titleSm",className:"mb-4",children:"Enter Verification Code"}),e.jsx(n,{className:"mb-4",children:"We sent a 6-digit code to your phone number."}),e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("div",{className:"text-3xl font-mono font-bold tracking-wider text-primary mb-2",children:i}),e.jsx(n,{variant:"regular",className:"text-text-weak",children:"(For demo purposes)"})]}),e.jsx("div",{className:"text-center mb-4",children:t?e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{variant:"regular",className:"text-danger",children:"Code has expired"}),e.jsx(u,{variant:"link",theme:"primary",size:"sm",onClick:()=>s(!1),children:"Resend Code"})]}):e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{variant:"regular",className:"text-text-weak",children:"Code expires in:"}),e.jsx(a,{initialDuration:12e4,onCountdownEnd:()=>s(!0),children:e.jsx(r,{className:"text-warning"})})]})}),e.jsx(u,{theme:"primary",className:"w-full",disabled:t,children:"Verify Code"})]})}},v={name:"Multiple Countdowns",args:{initialDuration:6e4,onCountdownEnd:()=>{}},render:()=>{const[t,s]=c.useState([]),i=[{name:"Task 1",duration:15e3,id:"task1"},{name:"Task 2",duration:25e3,id:"task2"},{name:"Task 3",duration:35e3,id:"task3"}],m=o=>{s(f=>[...f,o])};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{variant:"titleSm",children:"Multiple Task Timers"}),i.map(o=>e.jsx(d,{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(n,{variant:"medium",children:o.name}),t.includes(o.id)&&e.jsx(se,{theme:"success",variant:"soft",children:"Completed"})]}),t.includes(o.id)?e.jsx(n,{variant:"regular",className:"text-success",children:"✓ Done"}):e.jsx(a,{initialDuration:o.duration,onCountdownEnd:()=>m(o.id),children:e.jsx(r,{className:"text-sm"})})]})},o.id)),e.jsx("div",{className:"mt-4",children:e.jsxs(n,{variant:"regular",className:"text-text-weak",children:["Completed: ",t.length," / ",i.length]})})]})}},N={name:"Session Expiry Warning",args:{initialDuration:3e5,onCountdownEnd:()=>{}},render:()=>{const[t,s]=c.useState(!1),[i,m]=c.useState(!1),o=3e4,f=6e4;return ie.useEffect(()=>{const ae=setTimeout(()=>{s(!0)},f-o);return()=>clearTimeout(ae)},[]),i?e.jsxs(d,{className:"p-6 text-center border-danger",children:[e.jsx(l,{variant:"titleMd",className:"text-danger mb-2",children:"Session Expired"}),e.jsx(n,{className:"mb-4",children:"Your session has expired for security reasons."}),e.jsx(u,{theme:"primary",onClick:()=>window.location.reload(),children:"Login Again"})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs(d,{className:"p-6",children:[e.jsx(l,{variant:"titleSm",className:"mb-2",children:"Dashboard"}),e.jsx(n,{children:"Welcome to your account dashboard."})]}),t&&e.jsx(d,{className:"p-4 border-warning bg-warning/5",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{icon:e.jsx(j,{}),className:"w-5 h-5 text-warning"}),e.jsxs("div",{children:[e.jsx(n,{variant:"medium",className:"text-warning",children:"Session expires in:"}),e.jsx(n,{variant:"regular",className:"text-text-weak",children:'Click "Extend Session" to continue'})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{initialDuration:o,onCountdownEnd:()=>m(!0),children:e.jsx(r,{className:"text-warning"})}),e.jsx(u,{size:"sm",theme:"primary",children:"Extend Session"})]})]})})]})}},T={name:"Custom Context Usage",args:{initialDuration:3661e3,onCountdownEnd:()=>{}},render:()=>{const t=()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-center",children:[e.jsxs("div",{className:"bg-primary text-white p-4 rounded",children:[e.jsx("div",{className:"text-2xl font-bold",children:String(1).padStart(2,"0")}),e.jsx("div",{className:"text-sm opacity-80",children:"Hours"})]}),e.jsxs("div",{className:"bg-primary text-white p-4 rounded",children:[e.jsx("div",{className:"text-2xl font-bold",children:String(1).padStart(2,"0")}),e.jsx("div",{className:"text-sm opacity-80",children:"Minutes"})]}),e.jsxs("div",{className:"bg-primary text-white p-4 rounded",children:[e.jsx("div",{className:"text-2xl font-bold",children:String(1).padStart(2,"0")}),e.jsx("div",{className:"text-sm opacity-80",children:"Seconds"})]})]});return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{variant:"medium",children:"Event starts in:"}),e.jsx(a,{initialDuration:3665e3,onCountdownEnd:()=>alert("Event started!"),children:e.jsx(t,{})})]})}},y={name:"Fast Update (100ms intervals)",args:{initialDuration:1e4,onCountdownEnd:()=>console.log("Fast countdown finished"),step:100},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{variant:"medium",children:"High-precision countdown (updates every 100ms):"}),e.jsx(a,{initialDuration:1e4,step:100,onCountdownEnd:()=>console.log("Fast countdown finished"),children:e.jsx(r,{className:"font-mono text-lg"})}),e.jsx(n,{variant:"regular",className:"text-text-weak",children:"Notice the smooth updates compared to standard 1-second intervals"})]})};var D,E,k;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    initialDuration: 300000,
    // 5 minutes
    onCountdownEnd: () => alert('Countdown finished!')
  },
  render: args => <Countdown {...args}>
      <CountdownText />
    </Countdown>
}`,...(k=(E=x.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var I,P,R;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Payment Timeout (Real Example)",
  args: {
    initialDuration: 120000,
    onCountdownEnd: () => {}
  },
  render: () => {
    const [isExpired, setIsExpired] = useState(false);

    // Simulate payment expiration in 2 minutes
    const expirationTime = new Date(Date.now() + 2 * 60 * 1000).toISOString();
    const timeLeft = differenceInMilliseconds(new Date(expirationTime), new Date());
    if (isExpired) {
      return <Card className="p-6 text-center border-danger">
          <Icon icon={<WarningIcon />} className="w-12 h-12 mx-auto mb-4 text-destructive" />
          <Heading variant="titleMd" className="text-destructive mb-2">Payment Expired</Heading>
          <Text className="text-text-weak mb-4">
            This payment link has expired. Please request a new payment link.
          </Text>
          <Button theme="primary" onClick={() => window.location.reload()}>
            Request New Payment
          </Button>
        </Card>;
    }
    return <Card className="p-6">
        <Heading variant="titleSm" className="mb-4">Complete Your Payment</Heading>
        <Text className="mb-4">
          Please complete your payment before the time expires.
        </Text>
        
        <div className="bg-warning/10 border border-warning rounded p-4 mb-4">
          <div className="flex items-center gap-2">
            <Text variant="medium" className="text-warning">Payment expires in:</Text>
            <Countdown initialDuration={timeLeft} onCountdownEnd={() => setIsExpired(true)}>
              <CountdownText className="text-warning" />
            </Countdown>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <Text>Amount:</Text>
            <Text variant="semiBold">$1,234.56</Text>
          </div>
          <div className="flex justify-between">
            <Text>Transaction ID:</Text>
            <Text>TXN_123456789</Text>
          </div>
        </div>
        
        <Button theme="primary" className="w-full mt-6">
          Pay Now
        </Button>
      </Card>;
  }
}`,...(R=(P=p.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var M,B,W;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Short Duration (30 seconds)",
  args: {
    initialDuration: 30000,
    onCountdownEnd: () => console.log('30 second countdown finished')
  },
  render: args => {
    const [message, setMessage] = useState("");
    return <div className="space-y-4">
        <Countdown {...args} initialDuration={30000} // 30 seconds
      onCountdownEnd={() => setMessage("Time's up!")}>
          <CountdownText />
        </Countdown>
        {message && <Badge theme="destructive" variant="solid">{message}</Badge>}
      </div>;
  }
}`,...(W=(B=w.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var H,F,L;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Long Duration (2 hours)",
  args: {
    initialDuration: 2 * 60 * 60 * 1000,
    onCountdownEnd: () => console.log('2 hour countdown finished')
  },
  render: () => <div className="space-y-4">
      <Text variant="medium">Session expires in:</Text>
      <Countdown initialDuration={2 * 60 * 60 * 1000} // 2 hours
    onCountdownEnd={() => console.log('Session expired')}>
        <CountdownText />
      </Countdown>
    </div>
}`,...(L=(F=h.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var z,U,O;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Custom Icon & Styling",
  args: {
    initialDuration: 60000,
    onCountdownEnd: () => {}
  },
  render: () => <div className="space-y-6">
      <div>
        <Text variant="medium" className="mb-2">With Warning Icon</Text>
        <Countdown initialDuration={60000} // 1 minute
      onCountdownEnd={() => {}}>
          <CountdownText icon={<Icon icon={<WarningIcon />} className="text-warning" />} className="text-warning" />
        </Countdown>
      </div>
      
      <div>
        <Text variant="medium" className="mb-2">No Icon</Text>
        <Countdown initialDuration={90000} // 1.5 minutes
      onCountdownEnd={() => {}}>
          <CountdownText icon={null} className="text-primary font-mono text-lg" />
        </Countdown>
      </div>
      
      <div>
        <Text variant="medium" className="mb-2">Large Size</Text>
        <Countdown initialDuration={45000} // 45 seconds
      onCountdownEnd={() => {}}>
          <CountdownText className="text-2xl font-bold text-danger" />
        </Countdown>
      </div>
    </div>
}`,...(O=(U=g.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var A,q,V;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "OTP Code Timeout",
  args: {
    initialDuration: 180000,
    onCountdownEnd: () => {}
  },
  render: () => {
    const [canResend, setCanResend] = useState(false);
    const [otpCode] = useState("123456");
    return <Card className="p-6 max-w-sm">
        <Heading variant="titleSm" className="mb-4">Enter Verification Code</Heading>
        <Text className="mb-4">
          We sent a 6-digit code to your phone number.
        </Text>
        
        <div className="text-center mb-4">
          <div className="text-3xl font-mono font-bold tracking-wider text-primary mb-2">
            {otpCode}
          </div>
          <Text variant="regular" className="text-text-weak">
            (For demo purposes)
          </Text>
        </div>
        
        <div className="text-center mb-4">
          {!canResend ? <div className="space-y-2">
              <Text variant="regular" className="text-text-weak">
                Code expires in:
              </Text>
              <Countdown initialDuration={120000} // 2 minutes
          onCountdownEnd={() => setCanResend(true)}>
                <CountdownText className="text-warning" />
              </Countdown>
            </div> : <div className="space-y-2">
              <Text variant="regular" className="text-danger">
                Code has expired
              </Text>
              <Button variant="link" theme="primary" size="sm" onClick={() => setCanResend(false)}>
                Resend Code
              </Button>
            </div>}
        </div>
        
        <Button theme="primary" className="w-full" disabled={canResend}>
          Verify Code
        </Button>
      </Card>;
  }
}`,...(V=(q=C.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var Y,_,X;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Multiple Countdowns",
  args: {
    initialDuration: 60000,
    onCountdownEnd: () => {}
  },
  render: () => {
    const [completedTasks, setCompletedTasks] = useState<string[]>([]);
    const tasks = [{
      name: "Task 1",
      duration: 15000,
      id: "task1"
    }, {
      name: "Task 2",
      duration: 25000,
      id: "task2"
    }, {
      name: "Task 3",
      duration: 35000,
      id: "task3"
    }];
    const handleTaskComplete = (taskId: string) => {
      setCompletedTasks(prev => [...prev, taskId]);
    };
    return <div className="space-y-4">
        <Heading variant="titleSm">Multiple Task Timers</Heading>
        {tasks.map(task => <Card key={task.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Text variant="medium">{task.name}</Text>
                {completedTasks.includes(task.id) && <Badge theme="success" variant="soft">Completed</Badge>}
              </div>
              
              {!completedTasks.includes(task.id) ? <Countdown initialDuration={task.duration} onCountdownEnd={() => handleTaskComplete(task.id)}>
                  <CountdownText className="text-sm" />
                </Countdown> : <Text variant="regular" className="text-success">
                  ✓ Done
                </Text>}
            </div>
          </Card>)}
        
        <div className="mt-4">
          <Text variant="regular" className="text-text-weak">
            Completed: {completedTasks.length} / {tasks.length}
          </Text>
        </div>
      </div>;
  }
}`,...(X=(_=v.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var Z,$,K;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Session Expiry Warning",
  args: {
    initialDuration: 300000,
    onCountdownEnd: () => {}
  },
  render: () => {
    const [showWarning, setShowWarning] = useState(false);
    const [sessionExpired, setSessionExpired] = useState(false);

    // Show warning at 30 seconds
    const warningTime = 30000;
    const sessionTime = 60000; // 1 minute total

    React.useEffect(() => {
      const warningTimer = setTimeout(() => {
        setShowWarning(true);
      }, sessionTime - warningTime);
      return () => clearTimeout(warningTimer);
    }, []);
    if (sessionExpired) {
      return <Card className="p-6 text-center border-danger">
          <Heading variant="titleMd" className="text-danger mb-2">
            Session Expired
          </Heading>
          <Text className="mb-4">
            Your session has expired for security reasons.
          </Text>
          <Button theme="primary" onClick={() => window.location.reload()}>
            Login Again
          </Button>
        </Card>;
    }
    return <div className="space-y-4">
        <Card className="p-6">
          <Heading variant="titleSm" className="mb-2">Dashboard</Heading>
          <Text>Welcome to your account dashboard.</Text>
        </Card>
        
        {showWarning && <Card className="p-4 border-warning bg-warning/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon icon={<WarningIcon />} className="w-5 h-5 text-warning" />
                <div>
                  <Text variant="medium" className="text-warning">
                    Session expires in:
                  </Text>
                  <Text variant="regular" className="text-text-weak">
                    Click "Extend Session" to continue
                  </Text>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Countdown initialDuration={warningTime} onCountdownEnd={() => setSessionExpired(true)}>
                  <CountdownText className="text-warning" />
                </Countdown>
                <Button size="sm" theme="primary">
                  Extend Session
                </Button>
              </div>
            </div>
          </Card>}
      </div>;
  }
}`,...(K=($=N.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var G,J,Q;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Custom Context Usage",
  args: {
    initialDuration: 3661000,
    onCountdownEnd: () => {}
  },
  render: () => {
    const CustomCountdownDisplay = () => {
      // This component would need to be inside a Countdown to access the context
      const hours = 1,
        minutes = 1,
        seconds = 1;
      return <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-primary text-white p-4 rounded">
            <div className="text-2xl font-bold">{String(hours).padStart(2, '0')}</div>
            <div className="text-sm opacity-80">Hours</div>
          </div>
          <div className="bg-primary text-white p-4 rounded">
            <div className="text-2xl font-bold">{String(minutes).padStart(2, '0')}</div>
            <div className="text-sm opacity-80">Minutes</div>
          </div>
          <div className="bg-primary text-white p-4 rounded">
            <div className="text-2xl font-bold">{String(seconds).padStart(2, '0')}</div>
            <div className="text-sm opacity-80">Seconds</div>
          </div>
        </div>;
    };
    return <div className="space-y-4">
        <Text variant="medium">Event starts in:</Text>
        <Countdown initialDuration={3665000} // 1 hour, 1 minute, 5 seconds
      onCountdownEnd={() => alert('Event started!')}>
          <CustomCountdownDisplay />
        </Countdown>
      </div>;
  }
}`,...(Q=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,ne,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Fast Update (100ms intervals)",
  args: {
    initialDuration: 10000,
    onCountdownEnd: () => console.log('Fast countdown finished'),
    step: 100
  },
  render: () => <div className="space-y-4">
      <Text variant="medium">High-precision countdown (updates every 100ms):</Text>
      <Countdown initialDuration={10000} // 10 seconds
    step={100} // Update every 100ms
    onCountdownEnd={() => console.log('Fast countdown finished')}>
        <CountdownText className="font-mono text-lg" />
      </Countdown>
      <Text variant="regular" className="text-text-weak">
        Notice the smooth updates compared to standard 1-second intervals
      </Text>
    </div>
}`,...(te=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const Se=["Default","PaymentTimeout","ShortCountdown","LongCountdown","CustomIcon","OTPTimeout","MultipleCountdowns","SessionWarning","CustomDisplay","FastUpdate"];export{T as CustomDisplay,g as CustomIcon,x as Default,y as FastUpdate,h as LongCountdown,v as MultipleCountdowns,C as OTPTimeout,p as PaymentTimeout,N as SessionWarning,w as ShortCountdown,Se as __namedExportsOrder,be as default};
