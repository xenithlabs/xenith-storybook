import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as me}from"./cn-8RyR4BqC.js";import{r as pe}from"./index-DRjF_FHU.js";import{T as de,a as le,b as o,c as ue}from"./Tabs-DLoTAfRY.js";import{C as ie}from"./Card-C5rr-ZzX.js";import{H as ce}from"./Heading-DjlBwQyS.js";import{T as t}from"./Text-C8HBwI4b.js";import"./index-DuXoWBk8.js";import"./index-CxRLcT2J.js";import"./index-ab-r6Yn4.js";import"./index-CYnergnF.js";import"./index-qtGI3euC.js";import"./index-BhXpUKZt.js";import"./styles-x1yxmyQd.js";import"./index-Bb4qSo10.js";import"./index-HZDBD2ik.js";const n=({children:C,className:x})=>{const r=C.split(`
`);return e.jsx("div",{className:me("font-mono text-sm bg-bg-weaker rounded-radius-sm overflow-hidden border border-default text-text-weak",x),children:e.jsx("pre",{className:"relative",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"py-4 leading-[26px] pl-4 pr-4 text-text-weak select-none bg-bg-weaker border-r border-border-default",children:r.map((s,a)=>e.jsx("div",{className:"text-center text-text-weak ",children:a+1},a+1))}),e.jsx("div",{className:"py-4 px-4 overflow-auto ",children:r.map((s,a)=>e.jsx("div",{className:"whitespace-pre leading-[26px] text-text-weak",children:s||" "},a))})]})})})};n.__docgenInfo={description:"",methods:[],displayName:"Code",props:{children:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Ne={title:"Xenith UI/Components/Code",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
## Overview
The Code component provides a syntax-highlighted code block display with line numbers and horizontal scrolling. Perfect for displaying API responses, configuration files, code snippets, and technical documentation.

### Key Features
- **Line Numbers**: Automatic line numbering for easy reference
- **Horizontal Scrolling**: Handles long lines without breaking layout
- **Monospace Font**: Uses monospace font for proper code alignment
- **Copy-friendly**: Preserves formatting when copying
- **Multi-line Support**: Handles code blocks with multiple lines
- **Responsive Design**: Adapts to container width with scrolling
- **Theme Integration**: Uses semantic color tokens for consistency

### Usage
\`\`\`tsx
import { Code } from "@xenithlabs/xenith-ui";

// Basic code block
<Code>
{\`const greeting = "Hello World";
console.log(greeting);\`}
</Code>

// API response example
<Code>
{JSON.stringify(apiResponse, null, 2)}
</Code>

// Configuration file
<Code>
{\`# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp\`}
</Code>
\`\`\`

### Component Props

- **children** (string, required): The code content to display
- **className** (string): Additional CSS classes

### Design Guidelines

- Use for code snippets, API examples, configuration files
- Keep content readable - consider line length for better UX
- Use consistent indentation in multi-line code
- Consider providing context or description above code blocks

### Common Use Cases

1. **API Documentation**: Request/response examples
2. **Configuration Files**: Environment variables, config files
3. **Code Examples**: Implementation snippets
4. **Error Messages**: Stack traces, error logs
5. **Webhooks**: Payload examples
6. **CLI Commands**: Terminal commands and outputs
        `}}},argTypes:{children:{control:{type:"text"},description:"The code content to display",table:{type:{summary:"string"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}}},i={args:{children:`const greeting = "Hello World";
console.log(greeting);`}},c={name:"Webhook Request",args:{children:`POST /webhook-endpoint HTTP/1.1
Host: merchantswebsite.com
Content-Type: application/json
Authorization: Bearer your-webhook-token
User-Agent: Payment-Aggregator/1.0
X-Webhook-Event: transaction.created
X-Webhook-Signature: sha256=af3f9c17c8bb6bfc89cf8dd782a497

{
  "event_type": "transaction.created",
  "transaction_id": "txn_1234567890",
  "amount": 1000.00,
  "currency": "USD",
  "status": "completed",
  "created_at": "2024-01-15T10:30:00Z"
}`}},m={name:"API Response",args:{children:`HTTP/1.1 200 OK
Content-Type: application/json
X-Request-ID: req_abc123

{
  "success": true,
  "data": {
    "transaction_id": "txn_9876543210",
    "amount": 2500.00,
    "currency": "USD",
    "status": "pending",
    "payment_method": {
      "type": "bank_transfer",
      "bank_code": "BCA",
      "account_number": "1234567890"
    },
    "created_at": "2024-01-15T14:22:35Z",
    "updated_at": "2024-01-15T14:22:35Z"
  },
  "message": "Transaction created successfully"
}`}},p={name:"Configuration File",args:{children:`# Payment Gateway Configuration
API_BASE_URL=https://api.paymentgateway.com/v1
API_KEY=pk_live_abcdef123456789
API_SECRET=sk_live_987654321abcdef

# Webhook Configuration
WEBHOOK_URL=https://merchant.com/webhooks/payment
WEBHOOK_SECRET=whsec_random_secret_key

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=payments_db
DB_USER=payment_user
DB_PASSWORD=secure_password

# Feature Flags
ENABLE_SANDBOX_MODE=false
ENABLE_LOGGING=true
LOG_LEVEL=info`}},d={name:"CLI Commands",args:{children:`# Install the payment CLI
npm install -g @payment/cli

# Initialize a new project
payment init my-payment-app

# Configure API credentials
payment config set api-key pk_live_abcdef123456789

# Create a new payment
payment create-payment --amount 1000 --currency USD --method card

# List all transactions
payment list-transactions --status completed --limit 10

# Generate webhook signature
payment webhook sign --payload '{"amount": 1000}' --secret whsec_abc123`}},l={name:"JavaScript Implementation",args:{children:`// Payment processing implementation
class PaymentProcessor {
  constructor(apiKey, apiSecret) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.baseUrl = 'https://api.paymentgateway.com/v1';
  }

  async createPayment(paymentData) {
    try {
      const response = await fetch(\`\${this.baseUrl}/payments\`, {
        method: 'POST',
        headers: {
          'Authorization': \`Bearer \${this.apiKey}\`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Payment failed');
      }
      
      return result;
    } catch (error) {
      console.error('Payment processing error:', error);
      throw error;
    }
  }

  validateWebhook(payload, signature) {
    const crypto = require('crypto');
    const expectedSignature = crypto
      .createHmac('sha256', this.apiSecret)
      .update(payload)
      .digest('hex');
    
    return signature === \`sha256=\${expectedSignature}\`;
  }
}`}},u={name:"Error Log",args:{children:`[2024-01-15 14:30:22] ERROR: Payment processing failed
Transaction ID: txn_1234567890
Error Code: INSUFFICIENT_FUNDS
Error Message: The account does not have sufficient funds for this transaction

Stack Trace:
  at PaymentProcessor.processPayment (/app/src/payment.js:42:15)
  at PaymentController.createPayment (/app/src/controllers/payment.js:28:23)
  at Router.handle (/app/node_modules/express/lib/router/layer.js:95:5)
  at next (/app/node_modules/express/lib/router/route.js:137:13)
  at Route.dispatch (/app/node_modules/express/lib/router/route.js:112:3)

Request Details:
  Method: POST
  URL: /api/v1/payments
  User-Agent: Payment-SDK/1.2.0
  IP Address: 192.168.1.100
  
Payload:
{
  "amount": 5000.00,
  "currency": "USD",
  "payment_method": "bank_transfer",
  "account_id": "acc_987654321"
}`}},y={name:"SQL Query",args:{children:`-- Get transaction summary by status
SELECT 
  status,
  COUNT(*) as transaction_count,
  SUM(amount) as total_amount,
  AVG(amount) as average_amount,
  MIN(created_at) as earliest_transaction,
  MAX(created_at) as latest_transaction
FROM transactions 
WHERE 
  created_at >= '2024-01-01'
  AND created_at < '2024-02-01'
  AND currency = 'USD'
GROUP BY status
ORDER BY total_amount DESC;

-- Update transaction status
UPDATE transactions 
SET 
  status = 'completed',
  completed_at = NOW(),
  updated_at = NOW()
WHERE 
  transaction_id = 'txn_1234567890'
  AND status = 'pending';`}},h={name:"API Documentation",render:()=>e.jsx("div",{className:"space-y-6",children:e.jsxs(ie,{className:"p-6",children:[e.jsx(ce,{variant:"titleSm",className:"mb-4",children:"Create Payment"}),e.jsx(t,{className:"mb-4",children:"Creates a new payment transaction with the specified amount and payment method."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"medium",className:"mb-2",children:"Request"}),e.jsx(n,{children:`POST /api/v1/payments
Content-Type: application/json
Authorization: Bearer pk_live_abcdef123456789

{
  "amount": 1000.00,
  "currency": "USD",
  "payment_method": {
    "type": "bank_transfer",
    "bank_code": "BCA",
    "account_number": "1234567890"
  },
  "description": "Order payment #12345",
  "reference_id": "order_12345"
}`})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"medium",className:"mb-2",children:"Response"}),e.jsx(n,{children:`HTTP/1.1 201 Created
Content-Type: application/json

{
  "success": true,
  "data": {
    "transaction_id": "txn_9876543210",
    "status": "pending",
    "amount": 1000.00,
    "currency": "USD",
    "payment_url": "https://checkout.payment.com/pay/txn_9876543210",
    "expires_at": "2024-01-15T15:30:00Z",
    "created_at": "2024-01-15T14:30:00Z"
  }
}`})]})]})]})})},g={name:"Multiple Code Examples",render:()=>{const[C,x]=pe.useState("curl"),r={curl:`curl -X POST https://api.paymentgateway.com/v1/payments \\
  -H "Authorization: Bearer pk_live_abcdef123456789" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000.00,
    "currency": "USD",
    "payment_method": {
      "type": "bank_transfer",
      "bank_code": "BCA"
    }
  }'`,javascript:`const payment = await fetch('https://api.paymentgateway.com/v1/payments', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer pk_live_abcdef123456789',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 1000.00,
    currency: 'USD',
    payment_method: {
      type: 'bank_transfer',
      bank_code: 'BCA'
    }
  })
});

const result = await payment.json();
console.log(result);`,python:`import requests

url = "https://api.paymentgateway.com/v1/payments"
headers = {
    "Authorization": "Bearer pk_live_abcdef123456789",
    "Content-Type": "application/json"
}
data = {
    "amount": 1000.00,
    "currency": "USD",
    "payment_method": {
        "type": "bank_transfer",
        "bank_code": "BCA"
    }
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`,php:`<?php
$url = 'https://api.paymentgateway.com/v1/payments';
$headers = [
    'Authorization: Bearer pk_live_abcdef123456789',
    'Content-Type: application/json'
];
$data = [
    'amount' => 1000.00,
    'currency' => 'USD',
    'payment_method' => [
        'type' => 'bank_transfer',
        'bank_code' => 'BCA'
    ]
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$result = json_decode($response, true);
curl_close($ch);

print_r($result);
?>`};return e.jsxs(ie,{className:"p-6",children:[e.jsx(ce,{variant:"titleSm",className:"mb-4",children:"Create Payment - Code Examples"}),e.jsxs(de,{value:C,onValueChange:x,className:"mb-4",children:[e.jsxs(le,{children:[e.jsx(o,{value:"curl",children:"cURL"}),e.jsx(o,{value:"javascript",children:"JavaScript"}),e.jsx(o,{value:"python",children:"Python"}),e.jsx(o,{value:"php",children:"PHP"})]}),Object.entries(r).map(([s,a])=>e.jsx(ue,{value:s,children:e.jsx(n,{children:a})},s))]})]})}},_={name:"Horizontal Scrolling",args:{children:`// This demonstrates horizontal scrolling for very long lines
const veryLongVariableName = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"].map((item, index) => ({ id: index, value: item, timestamp: new Date().toISOString(), metadata: { category: "test", subcategory: "example", tags: ["sample", "demonstration", "horizontal-scroll"], description: "This is a very long line of code that demonstrates how the Code component handles horizontal overflow with proper scrolling functionality. The text should continue beyond the container width and allow horizontal scrolling." } }));

// Regular line for comparison
console.log('This is a normal length line');`}},b={name:"Edge Cases",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"medium",className:"mb-2",children:"Single Line"}),e.jsx(n,{children:'const greeting = "Hello World!";'})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"medium",className:"mb-2",children:"Empty Line Handling"}),e.jsx(n,{children:`function example() {
  const first = 1;

  const second = 2;


  return first + second;
}`})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"medium",className:"mb-2",children:"Minimal Content"}),e.jsx(n,{children:"200"})]})]})},T={name:"Custom Styling",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"medium",className:"mb-2",children:"Default Styling"}),e.jsx(n,{children:`{
  "status": "success",
  "message": "Payment processed"
}`})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"medium",className:"mb-2",children:"Compact Version"}),e.jsx(n,{className:"text-xs",children:`{
  "status": "success",
  "message": "Payment processed",
  "transaction_id": "txn_1234567890",
  "timestamp": "2024-01-15T14:30:00Z"
}`})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"medium",className:"mb-2",children:"With Border Accent"}),e.jsx(n,{className:"border-l-4 border-l-primary",children:`# Important Configuration
API_KEY=your_api_key_here
API_SECRET=your_secret_here`})]})]})};var v,S,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: \`const greeting = "Hello World";
console.log(greeting);\`
  }
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var P,E,j;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Webhook Request",
  args: {
    children: \`POST /webhook-endpoint HTTP/1.1
Host: merchantswebsite.com
Content-Type: application/json
Authorization: Bearer your-webhook-token
User-Agent: Payment-Aggregator/1.0
X-Webhook-Event: transaction.created
X-Webhook-Signature: sha256=af3f9c17c8bb6bfc89cf8dd782a497

{
  "event_type": "transaction.created",
  "transaction_id": "txn_1234567890",
  "amount": 1000.00,
  "currency": "USD",
  "status": "completed",
  "created_at": "2024-01-15T10:30:00Z"
}\`
  }
}`,...(j=(E=c.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var k,A,N;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "API Response",
  args: {
    children: \`HTTP/1.1 200 OK
Content-Type: application/json
X-Request-ID: req_abc123

{
  "success": true,
  "data": {
    "transaction_id": "txn_9876543210",
    "amount": 2500.00,
    "currency": "USD",
    "status": "pending",
    "payment_method": {
      "type": "bank_transfer",
      "bank_code": "BCA",
      "account_number": "1234567890"
    },
    "created_at": "2024-01-15T14:22:35Z",
    "updated_at": "2024-01-15T14:22:35Z"
  },
  "message": "Transaction created successfully"
}\`
  }
}`,...(N=(A=m.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var D,R,w;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Configuration File",
  args: {
    children: \`# Payment Gateway Configuration
API_BASE_URL=https://api.paymentgateway.com/v1
API_KEY=pk_live_abcdef123456789
API_SECRET=sk_live_987654321abcdef

# Webhook Configuration
WEBHOOK_URL=https://merchant.com/webhooks/payment
WEBHOOK_SECRET=whsec_random_secret_key

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=payments_db
DB_USER=payment_user
DB_PASSWORD=secure_password

# Feature Flags
ENABLE_SANDBOX_MODE=false
ENABLE_LOGGING=true
LOG_LEVEL=info\`
  }
}`,...(w=(R=p.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var O,U,L;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "CLI Commands",
  args: {
    children: \`# Install the payment CLI
npm install -g @payment/cli

# Initialize a new project
payment init my-payment-app

# Configure API credentials
payment config set api-key pk_live_abcdef123456789

# Create a new payment
payment create-payment --amount 1000 --currency USD --method card

# List all transactions
payment list-transactions --status completed --limit 10

# Generate webhook signature
payment webhook sign --payload '{"amount": 1000}' --secret whsec_abc123\`
  }
}`,...(L=(U=d.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var I,B,H;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "JavaScript Implementation",
  args: {
    children: \`// Payment processing implementation
class PaymentProcessor {
  constructor(apiKey, apiSecret) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.baseUrl = 'https://api.paymentgateway.com/v1';
  }

  async createPayment(paymentData) {
    try {
      const response = await fetch(\\\`\\\${this.baseUrl}/payments\\\`, {
        method: 'POST',
        headers: {
          'Authorization': \\\`Bearer \\\${this.apiKey}\\\`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Payment failed');
      }
      
      return result;
    } catch (error) {
      console.error('Payment processing error:', error);
      throw error;
    }
  }

  validateWebhook(payload, signature) {
    const crypto = require('crypto');
    const expectedSignature = crypto
      .createHmac('sha256', this.apiSecret)
      .update(payload)
      .digest('hex');
    
    return signature === \\\`sha256=\\\${expectedSignature}\\\`;
  }
}\`
  }
}`,...(H=(B=l.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var $,W,z;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Error Log",
  args: {
    children: \`[2024-01-15 14:30:22] ERROR: Payment processing failed
Transaction ID: txn_1234567890
Error Code: INSUFFICIENT_FUNDS
Error Message: The account does not have sufficient funds for this transaction

Stack Trace:
  at PaymentProcessor.processPayment (/app/src/payment.js:42:15)
  at PaymentController.createPayment (/app/src/controllers/payment.js:28:23)
  at Router.handle (/app/node_modules/express/lib/router/layer.js:95:5)
  at next (/app/node_modules/express/lib/router/route.js:137:13)
  at Route.dispatch (/app/node_modules/express/lib/router/route.js:112:3)

Request Details:
  Method: POST
  URL: /api/v1/payments
  User-Agent: Payment-SDK/1.2.0
  IP Address: 192.168.1.100
  
Payload:
{
  "amount": 5000.00,
  "currency": "USD",
  "payment_method": "bank_transfer",
  "account_id": "acc_987654321"
}\`
  }
}`,...(z=(W=u.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var M,F,K;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "SQL Query",
  args: {
    children: \`-- Get transaction summary by status
SELECT 
  status,
  COUNT(*) as transaction_count,
  SUM(amount) as total_amount,
  AVG(amount) as average_amount,
  MIN(created_at) as earliest_transaction,
  MAX(created_at) as latest_transaction
FROM transactions 
WHERE 
  created_at >= '2024-01-01'
  AND created_at < '2024-02-01'
  AND currency = 'USD'
GROUP BY status
ORDER BY total_amount DESC;

-- Update transaction status
UPDATE transactions 
SET 
  status = 'completed',
  completed_at = NOW(),
  updated_at = NOW()
WHERE 
  transaction_id = 'txn_1234567890'
  AND status = 'pending';\`
  }
}`,...(K=(F=y.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var q,G,X;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "API Documentation",
  render: () => <div className="space-y-6">
      <Card className="p-6">
        <Heading variant="titleSm" className="mb-4">Create Payment</Heading>
        <Text className="mb-4">Creates a new payment transaction with the specified amount and payment method.</Text>
        
        <div className="space-y-4">
          <div>
            <Text variant="medium" className="mb-2">Request</Text>
            <Code>
            {\`POST /api/v1/payments
Content-Type: application/json
Authorization: Bearer pk_live_abcdef123456789

{
  "amount": 1000.00,
  "currency": "USD",
  "payment_method": {
    "type": "bank_transfer",
    "bank_code": "BCA",
    "account_number": "1234567890"
  },
  "description": "Order payment #12345",
  "reference_id": "order_12345"
}\`}
            </Code>
          </div>
          
          <div>
            <Text variant="medium" className="mb-2">Response</Text>
            <Code>
            {\`HTTP/1.1 201 Created
Content-Type: application/json

{
  "success": true,
  "data": {
    "transaction_id": "txn_9876543210",
    "status": "pending",
    "amount": 1000.00,
    "currency": "USD",
    "payment_url": "https://checkout.payment.com/pay/txn_9876543210",
    "expires_at": "2024-01-15T15:30:00Z",
    "created_at": "2024-01-15T14:30:00Z"
  }
}\`}
            </Code>
          </div>
        </div>
      </Card>
    </div>
}`,...(X=(G=h.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Z,J,V;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Multiple Code Examples",
  render: () => {
    const [activeTab, setActiveTab] = useState("curl");
    const codeExamples = {
      curl: \`curl -X POST https://api.paymentgateway.com/v1/payments \\\\
  -H "Authorization: Bearer pk_live_abcdef123456789" \\\\
  -H "Content-Type: application/json" \\\\
  -d '{
    "amount": 1000.00,
    "currency": "USD",
    "payment_method": {
      "type": "bank_transfer",
      "bank_code": "BCA"
    }
  }'\`,
      javascript: \`const payment = await fetch('https://api.paymentgateway.com/v1/payments', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer pk_live_abcdef123456789',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 1000.00,
    currency: 'USD',
    payment_method: {
      type: 'bank_transfer',
      bank_code: 'BCA'
    }
  })
});

const result = await payment.json();
console.log(result);\`,
      python: \`import requests

url = "https://api.paymentgateway.com/v1/payments"
headers = {
    "Authorization": "Bearer pk_live_abcdef123456789",
    "Content-Type": "application/json"
}
data = {
    "amount": 1000.00,
    "currency": "USD",
    "payment_method": {
        "type": "bank_transfer",
        "bank_code": "BCA"
    }
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)\`,
      php: \`<?php
$url = 'https://api.paymentgateway.com/v1/payments';
$headers = [
    'Authorization: Bearer pk_live_abcdef123456789',
    'Content-Type: application/json'
];
$data = [
    'amount' => 1000.00,
    'currency' => 'USD',
    'payment_method' => [
        'type' => 'bank_transfer',
        'bank_code' => 'BCA'
    ]
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$result = json_decode($response, true);
curl_close($ch);

print_r($result);
?>\`
    };
    return <Card className="p-6">
        <Heading variant="titleSm" className="mb-4">Create Payment - Code Examples</Heading>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
          <TabsList>
            <TabsTrigger value="curl">cURL</TabsTrigger>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="php">PHP</TabsTrigger>
          </TabsList>
          
          {Object.entries(codeExamples).map(([key, code]) => <TabsContent key={key} value={key}>
              <Code>{code}</Code>
            </TabsContent>)}
        </Tabs>
      </Card>;
  }
}`,...(V=(J=g.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var Y,Q,ee;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Horizontal Scrolling",
  args: {
    children: \`// This demonstrates horizontal scrolling for very long lines
const veryLongVariableName = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"].map((item, index) => ({ id: index, value: item, timestamp: new Date().toISOString(), metadata: { category: "test", subcategory: "example", tags: ["sample", "demonstration", "horizontal-scroll"], description: "This is a very long line of code that demonstrates how the Code component handles horizontal overflow with proper scrolling functionality. The text should continue beyond the container width and allow horizontal scrolling." } }));

// Regular line for comparison
console.log('This is a normal length line');\`
  }
}`,...(ee=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ne,te,ae;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "Edge Cases",
  render: () => <div className="space-y-4">
      <div>
        <Text variant="medium" className="mb-2">Single Line</Text>
        <Code>const greeting = "Hello World!";</Code>
      </div>
      
      <div>
        <Text variant="medium" className="mb-2">Empty Line Handling</Text>
        <Code>
        {\`function example() {
  const first = 1;

  const second = 2;


  return first + second;
}\`}
        </Code>
      </div>
      
      <div>
        <Text variant="medium" className="mb-2">Minimal Content</Text>
        <Code>200</Code>
      </div>
    </div>
}`,...(ae=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,re,oe;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "Custom Styling",
  render: () => <div className="space-y-4">
      <div>
        <Text variant="medium" className="mb-2">Default Styling</Text>
        <Code>
        {\`{
  "status": "success",
  "message": "Payment processed"
}\`}
        </Code>
      </div>
      
      <div>
        <Text variant="medium" className="mb-2">Compact Version</Text>
        <Code className="text-xs">
        {\`{
  "status": "success",
  "message": "Payment processed",
  "transaction_id": "txn_1234567890",
  "timestamp": "2024-01-15T14:30:00Z"
}\`}
        </Code>
      </div>
      
      <div>
        <Text variant="medium" className="mb-2">With Border Accent</Text>
        <Code className="border-l-4 border-l-primary">
        {\`# Important Configuration
API_KEY=your_api_key_here
API_SECRET=your_secret_here\`}
        </Code>
      </div>
    </div>
}`,...(oe=(re=T.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const De=["Default","WebhookExample","APIResponse","ConfigurationFile","CLICommands","JavaScriptCode","ErrorLog","DatabaseQuery","DocuementationExample","MultipleCodeBlocks","LongLineScrolling","EmptyAndSingleLine","WithCustomStyling"];export{m as APIResponse,d as CLICommands,p as ConfigurationFile,y as DatabaseQuery,i as Default,h as DocuementationExample,b as EmptyAndSingleLine,u as ErrorLog,l as JavaScriptCode,_ as LongLineScrolling,g as MultipleCodeBlocks,c as WebhookExample,T as WithCustomStyling,De as __namedExportsOrder,Ne as default};
