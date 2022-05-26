"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[7753],{37753:function(e,n,i){i.r(n),i.d(n,{default:function(){return V}});var r=i(47630),s=i(26445),t=i(64554),a=i(20890),l=i(61889),c=i(53861),d=i(25212),o=i(53767),x=i(27760),h=i(80184);function u(){return(0,h.jsxs)("div",{children:[(0,h.jsx)(a.Z,{variant:"subtitle1",children:"Billing Address"}),(0,h.jsxs)(o.Z,{spacing:3,mt:5,children:[(0,h.jsx)(x.Z,{fullWidth:!0,label:"Person name"}),(0,h.jsx)(x.Z,{fullWidth:!0,label:"Phone number"}),(0,h.jsx)(x.Z,{fullWidth:!0,label:"Email"}),(0,h.jsx)(x.Z,{fullWidth:!0,label:"Address"})]})]})}var p=i(1413),m=i(29439),j=i(72791),Z=i(10703),v=i(88970),b=i(85523),g=i(1503),f=i(56125),y=i(36151),C=i(5977),w=i(53026),P=i(63466),k=i(13400),S=i(15473);function _(e){var n=e.onCancel,i=(0,j.useState)(null),r=(0,m.Z)(i,2),s=r[0],t=r[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Z.Z,{sx:{p:2.5,mb:2.5,bgcolor:"background.neutral"},children:(0,h.jsxs)(o.Z,{spacing:2,children:[(0,h.jsx)(a.Z,{variant:"subtitle1",children:"Add new card"}),(0,h.jsx)(x.Z,{fullWidth:!0,size:"small",label:"Name on card"}),(0,h.jsx)(x.Z,{fullWidth:!0,size:"small",label:"Card number"}),(0,h.jsxs)(o.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,h.jsx)(x.Z,{size:"small",label:"MM/YY"}),(0,h.jsx)(x.Z,{size:"small",label:"CVV",InputProps:{endAdornment:(0,h.jsx)(P.Z,{position:"end",children:(0,h.jsx)(k.Z,{size:"small",edge:"end",onClick:function(e){return t(e.currentTarget)},children:(0,h.jsx)(w.Z,{icon:"eva:info-fill"})})})}})]}),(0,h.jsxs)(o.Z,{direction:"row",spacing:2,children:[(0,h.jsx)(y.Z,{fullWidth:!0,onClick:n,children:"Cancel"}),(0,h.jsx)(y.Z,{fullWidth:!0,variant:"contained",onClick:n,children:"Create"})]})]})}),(0,h.jsx)(S.ZP,{open:Boolean(s),anchorEl:s,onClose:function(){return t(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},PaperProps:{sx:{p:1,maxWidth:200}},children:(0,h.jsx)(a.Z,{variant:"body2",align:"center",children:"Three-digit number on the back of your VISA card"})})]})}var W=[{value:"paypal",title:"Pay with Paypal",icons:["https://minimal-assets-api.vercel.app/assets/icons/ic_paypal.svg"]},{value:"credit_card",title:"Credit / Debit Card",icons:["https://minimal-assets-api.vercel.app/assets/icons/ic_mastercard.svg","https://minimal-assets-api.vercel.app/assets/icons/ic_visa.svg"]}],z=[{value:"visa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"visa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"mastercard",label:"**** **** **** 4545 - Cole Armstrong"}],I=(0,r.ZP)(Z.Z)((function(e){var n=e.theme;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:n.spacing(2.5),paddingRight:n.spacing(2),transition:n.transitions.create("all"),border:"solid 1px ".concat(n.palette.divider),borderRadius:1.5*Number(n.shape.borderRadius)}}));function A(){var e=(0,j.useState)(!1),n=(0,m.Z)(e,2),i=n[0],r=n[1],s=(0,j.useState)("paypal"),t=(0,m.Z)(s,2),l=t[0],c=t[1],d=function(){"paypal"!==l&&r(!i)},u=function(){r(!1)};return(0,h.jsxs)("div",{children:[(0,h.jsx)(a.Z,{variant:"subtitle1",sx:{mb:5},children:"Payment Method"}),(0,h.jsx)(v.Z,{value:l,onChange:function(e){"paypal"===l&&r(!1),c(e.target.value)},children:(0,h.jsx)(o.Z,{spacing:3,children:W.map((function(e){var n=e.value,r=e.title,s=e.icons,t="credit_card"===n,c=l===n;return(0,h.jsxs)(I,{sx:(0,p.Z)((0,p.Z)({},c&&{boxShadow:function(e){return e.customShadows.z20}}),t&&{flexWrap:"wrap"}),children:[(0,h.jsx)(b.Z,{value:n,control:(0,h.jsx)(g.Z,{checkedIcon:(0,h.jsx)(w.Z,{icon:"eva:checkmark-circle-2-fill"})}),label:(0,h.jsx)(a.Z,{variant:"subtitle2",sx:{ml:1},children:r}),sx:{py:3,mx:0}}),(0,h.jsx)(o.Z,{spacing:1,direction:"row",alignItems:"center",sx:{position:"absolute",right:20,top:32},children:s.map((function(e){return(0,h.jsx)(C.Z,{alt:"logo card",src:e},e)}))}),t&&(0,h.jsxs)(f.Z,{in:"credit_card"===l,sx:{width:1},children:[(0,h.jsx)(x.Z,{select:!0,fullWidth:!0,label:"Card",SelectProps:{native:!0},children:z.map((function(e){return(0,h.jsx)("option",{value:e.value,children:e.label},e.value)}))}),(0,h.jsx)(y.Z,{size:"small",startIcon:(0,h.jsx)(w.Z,{icon:"eva:plus-fill",width:20,height:20}),onClick:d,sx:{my:3},children:"Add new card"}),(0,h.jsx)(f.Z,{in:i,children:(0,h.jsx)(_,{onCancel:u})})]})]},r)}))})})]})}var M=i(9955),R=i(94721),T=i(39709),B=i(41758),E=(0,r.ZP)("div")((function(e){var n=e.theme;return{padding:n.spacing(5),backgroundColor:n.palette.background.neutral,borderRadius:2*Number(n.shape.borderRadius)}}));function L(){return(0,h.jsxs)(E,{children:[(0,h.jsx)(a.Z,{variant:"subtitle1",sx:{mb:5},children:"Summary"}),(0,h.jsxs)(o.Z,{spacing:2.5,children:[(0,h.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",children:[(0,h.jsx)(a.Z,{variant:"subtitle2",component:"p",sx:{color:"text.secondary"},children:"Subscription"}),(0,h.jsx)(B.Z,{color:"error",variant:"filled",children:"PREMIUM"})]}),(0,h.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",children:[(0,h.jsx)(a.Z,{component:"p",variant:"subtitle2",sx:{color:"text.secondary"},children:"Billed Monthly"}),(0,h.jsx)(M.Z,{defaultChecked:!0})]}),(0,h.jsxs)(o.Z,{direction:"row",justifyContent:"flex-end",children:[(0,h.jsx)(a.Z,{sx:{color:"text.secondary"},children:"$"}),(0,h.jsx)(a.Z,{variant:"h2",sx:{mx:1},children:"9.99"}),(0,h.jsx)(a.Z,{component:"span",variant:"body2",sx:{mb:1,alignSelf:"flex-end",color:"text.secondary"},children:"/mo"})]}),(0,h.jsx)(R.Z,{sx:{borderStyle:"dashed"}}),(0,h.jsxs)(o.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,h.jsx)(a.Z,{variant:"h6",component:"p",children:"Total Billed"}),(0,h.jsx)(a.Z,{variant:"h6",component:"p",children:"$9.99*"})]}),(0,h.jsx)(R.Z,{sx:{borderStyle:"dashed",mb:1}})]}),(0,h.jsx)(a.Z,{variant:"caption",sx:{color:"text.secondary",mt:1},children:"* Plus applicable taxes"}),(0,h.jsx)(T.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mt:5,mb:3},children:"Upgrade My Plan"}),(0,h.jsxs)(o.Z,{alignItems:"center",spacing:1,children:[(0,h.jsxs)(o.Z,{direction:"row",alignItems:"center",spacing:1.5,children:[(0,h.jsx)(w.Z,{icon:"eva:shield-fill",sx:{width:20,height:20,color:"primary.main"}}),(0,h.jsx)(a.Z,{variant:"subtitle2",children:"Secure credit card payment"})]}),(0,h.jsx)(a.Z,{variant:"caption",sx:{color:"text.secondary",textAlign:"center"},children:"This is a secure 128-bit SSL encrypted payment"})]})]})}var N=(0,r.ZP)("div")((function(e){var n=e.theme;return{minHeight:"100%",paddingTop:n.spacing(15),paddingBottom:n.spacing(10)}}));function V(){var e=(0,c.Z)("up","md");return(0,h.jsx)(d.Z,{title:"Payment",children:(0,h.jsx)(N,{children:(0,h.jsxs)(s.Z,{children:[(0,h.jsxs)(t.Z,{sx:{mb:5},children:[(0,h.jsx)(a.Z,{variant:"h3",align:"center",paragraph:!0,children:"Let's finish powering you up!"}),(0,h.jsx)(a.Z,{align:"center",sx:{color:"text.secondary"},children:"Professional plan is right for you."})]}),(0,h.jsxs)(l.ZP,{container:!0,spacing:e?3:5,children:[(0,h.jsx)(l.ZP,{item:!0,xs:12,md:8,children:(0,h.jsxs)(t.Z,{sx:{display:"grid",gap:5,p:{md:5},borderRadius:2,border:function(e){return{md:"dashed 1px ".concat(e.palette.divider)}},gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[(0,h.jsx)(u,{}),(0,h.jsx)(A,{})]})}),(0,h.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,h.jsx)(L,{})})]})]})})})}}}]);
//# sourceMappingURL=7753.cd4bc335.chunk.js.map