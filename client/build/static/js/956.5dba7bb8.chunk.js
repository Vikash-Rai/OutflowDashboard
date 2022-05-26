"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[956],{62720:function(e,n,i){i.d(n,{Z:function(){return u}});var t=i(1413),r=i(45987),s=i(47630),a=i(20890),l=i(5977),o=i(80184),c=["title","description","img"],d=(0,s.ZP)("div")((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function u(e){var n=e.title,i=e.description,s=e.img,u=(0,r.Z)(e,c);return(0,o.jsxs)(d,(0,t.Z)((0,t.Z)({},u),{},{children:[(0,o.jsx)(l.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:s||"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,o.jsx)(a.Z,{variant:"h5",gutterBottom:!0,children:n}),i&&(0,o.jsx)(a.Z,{variant:"body2",sx:{color:"text.secondary"},children:i})]}))}},18456:function(e,n,i){i.d(n,{Z:function(){return Z}});var t=i(1413),r=i(45987),s=i(26769),a=i.n(s),l=i(64554),o=i(20890),c=i(23060),d=i(43504),u=i(93517),x=i(80184),h=["links","activeLast"];function p(e){var n=e.links,i=e.activeLast,s=void 0!==i&&i,a=(0,r.Z)(e,h),c=n[n.length-1].name,d=n.map((function(e){return(0,x.jsx)(m,{link:e},e.name)})),p=n.map((function(e){return(0,x.jsx)("div",{children:e.name!==c?(0,x.jsx)(m,{link:e}):(0,x.jsx)(o.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:c})},e.name)}));return(0,x.jsx)(u.Z,(0,t.Z)((0,t.Z)({separator:(0,x.jsx)(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a),{},{children:s?d:p}))}function m(e){var n=e.link,i=n.href,t=n.name,r=n.icon;return(0,x.jsxs)(c.Z,{variant:"body2",component:d.rU,to:i||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[r&&(0,x.jsx)(l.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:r}),t]},t)}var j=["links","action","heading","moreLink","sx"];function Z(e){var n=e.links,i=e.action,s=e.heading,d=e.moreLink,u=void 0===d?[]:d,h=e.sx,m=(0,r.Z)(e,j);return(0,x.jsxs)(l.Z,{sx:(0,t.Z)({mb:5},h),children:[(0,x.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,x.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,x.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:s}),(0,x.jsx)(p,(0,t.Z)({links:n},m))]}),i&&(0,x.jsx)(l.Z,{sx:{flexShrink:0},children:i})]}),(0,x.jsx)(l.Z,{sx:{mt:2},children:a()(u)?(0,x.jsx)(c.Z,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return(0,x.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},40956:function(e,n,i){i.r(n),i.d(n,{default:function(){return Re}});var t=i(72791),r=i(47630),s=i(44674),a=i(64554),l=i(26445),o=i(61889),c=i(63875),d=i(74512),u=i(15825),x=i(20647),h=i(18829),p=i(38072),m=i(22175),j=i(85703),Z=i(25212),v=i(53026),f=i(18456),b=i(29439),y=i(36151),g=i(57621),k=i(20890),C=i(32988),w=i(41758),S=i(9585),I=i(39504),D=i(53767),P=i(94721),_=i(27760),A=i(63466),B=i(7870),F=i(80184);function z(e){var n=e.total,i=e.onEdit,t=e.discount,r=e.subtotal,s=e.shipping,l=e.onApplyDiscount,o=e.enableEdit,c=void 0!==o&&o,d=e.enableDiscount,u=void 0!==d&&d,x=null!==s?"Free":"-";return(0,F.jsxs)(g.Z,{sx:{mb:3},children:[(0,F.jsx)(S.Z,{title:"Order Summary",action:c&&(0,F.jsx)(y.Z,{size:"small",onClick:i,startIcon:(0,F.jsx)(v.Z,{icon:"eva:edit-fill"}),children:"Edit"})}),(0,F.jsx)(I.Z,{children:(0,F.jsxs)(D.Z,{spacing:2,children:[(0,F.jsxs)(D.Z,{direction:"row",justifyContent:"space-between",children:[(0,F.jsx)(k.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),(0,F.jsx)(k.Z,{variant:"subtitle2",children:(0,B.e_)(r)})]}),(0,F.jsxs)(D.Z,{direction:"row",justifyContent:"space-between",children:[(0,F.jsx)(k.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),(0,F.jsx)(k.Z,{variant:"subtitle2",children:t?(0,B.e_)(-t):"-"})]}),(0,F.jsxs)(D.Z,{direction:"row",justifyContent:"space-between",children:[(0,F.jsx)(k.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),(0,F.jsx)(k.Z,{variant:"subtitle2",children:s?(0,B.e_)(s):x})]}),(0,F.jsx)(P.Z,{}),(0,F.jsxs)(D.Z,{direction:"row",justifyContent:"space-between",children:[(0,F.jsx)(k.Z,{variant:"subtitle1",children:"Total"}),(0,F.jsxs)(a.Z,{sx:{textAlign:"right"},children:[(0,F.jsx)(k.Z,{variant:"subtitle1",sx:{color:"error.main"},children:(0,B.e_)(n)}),(0,F.jsx)(k.Z,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),u&&l&&(0,F.jsx)(_.Z,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:(0,F.jsx)(A.Z,{position:"end",children:(0,F.jsx)(y.Z,{onClick:function(){return l(5)},sx:{mr:-.5},children:"Apply"})})}})]})})]})}var W=i(15861),q=i(87757),T=i.n(q),N=i(62797),O=i(61134),R=i(61265),G=i(5574),E=i(65661),M=i(39157),Q=i(97123),V=i(39709),L=i(38077);function X(e){var n=e.open,i=e.onClose,t=e.onNextStep,r=e.onCreateBilling,s=N.Ry().shape({receiver:N.Z_().required("Fullname is required"),phone:N.Z_().required("Phone is required"),address:N.Z_().required("Address is required"),city:N.Z_().required("City is required"),state:N.Z_().required("State is required")}),l={addressType:"Home",receiver:"",phone:"",address:"",city:"",state:"",country:C.hW[0].label,zipcode:"",isDefault:!0},o=(0,O.cI)({resolver:(0,R.X)(s),defaultValues:l}),c=o.handleSubmit,d=o.formState.isSubmitting,u=function(){var e=(0,W.Z)(T().mark((function e(n){return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t(),r({receiver:n.receiver,phone:n.phone,fullAddress:"".concat(n.address,", ").concat(n.city,", ").concat(n.state,", ").concat(n.country,", ").concat(n.zipcode),addressType:n.addressType,isDefault:n.isDefault})}catch(i){console.error(i)}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,F.jsxs)(G.Z,{fullWidth:!0,maxWidth:"sm",open:n,onClose:i,children:[(0,F.jsx)(E.Z,{children:"Add new address"}),(0,F.jsxs)(L.RV,{methods:o,onSubmit:c(u),children:[(0,F.jsx)(M.Z,{children:(0,F.jsxs)(D.Z,{spacing:3,children:[(0,F.jsx)(L.km,{name:"addressType",options:["Home","Office"]}),(0,F.jsxs)(a.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,F.jsx)(L.au,{name:"receiver",label:"Full Name"}),(0,F.jsx)(L.au,{name:"phone",label:"Phone Number"})]}),(0,F.jsx)(L.au,{name:"address",label:"Address"}),(0,F.jsxs)(a.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"}},children:[(0,F.jsx)(L.au,{name:"city",label:"Town / City"}),(0,F.jsx)(L.au,{name:"state",label:"State"}),(0,F.jsx)(L.au,{name:"zipcode",label:"Zip / Postal Code"})]}),(0,F.jsx)(L.Cc,{name:"country",label:"Country",children:C.hW.map((function(e){return(0,F.jsx)("option",{value:e.label,children:e.label},e.code)}))}),(0,F.jsx)(L.jb,{name:"isDefault",label:"Use this address as default.",sx:{mt:3}})]})}),(0,F.jsx)(P.Z,{}),(0,F.jsxs)(Q.Z,{children:[(0,F.jsx)(V.Z,{type:"submit",variant:"contained",loading:d,children:"Deliver to this Address"}),(0,F.jsx)(y.Z,{color:"inherit",variant:"outlined",onClick:i,children:"Cancel"})]})]})]})}function H(){var e=(0,x.I0)(),n=(0,x.v9)((function(e){return e.product})).checkout,i=n.total,r=n.discount,s=n.subtotal,l=(0,t.useState)(!1),c=(0,b.Z)(l,2),d=c[0],u=c[1],p=function(){e((0,h.NX)())},m=function(n){e((0,h.YN)(n))};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,F.jsxs)(o.ZP,{item:!0,xs:12,md:8,children:[C.PX.map((function(e,n){return(0,F.jsx)(U,{address:e,onNextStep:p,onCreateBilling:m},n)})),(0,F.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,F.jsx)(y.Z,{size:"small",color:"inherit",onClick:function(){e((0,h.Fs)())},startIcon:(0,F.jsx)(v.Z,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),(0,F.jsx)(y.Z,{size:"small",onClick:function(){u(!0)},startIcon:(0,F.jsx)(v.Z,{icon:"eva:plus-fill"}),children:"Add new address"})]})]}),(0,F.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,F.jsx)(z,{subtotal:s,total:i,discount:r})})]}),(0,F.jsx)(X,{open:d,onClose:function(){u(!1)},onNextStep:p,onCreateBilling:m})]})}function U(e){var n=e.address,i=e.onNextStep,t=e.onCreateBilling,r=n.receiver,s=n.fullAddress,l=n.addressType,o=n.phone,c=n.isDefault;return(0,F.jsxs)(g.Z,{sx:{p:3,mb:3,position:"relative"},children:[(0,F.jsxs)(a.Z,{sx:{mb:1,display:"flex",alignItems:"center"},children:[(0,F.jsx)(k.Z,{variant:"subtitle1",children:r}),(0,F.jsxs)(k.Z,{variant:"body2",sx:{color:"text.secondary"},children:["\xa0(",l,")"]}),c&&(0,F.jsx)(w.Z,{color:"info",sx:{ml:1},children:"Default"})]}),(0,F.jsx)(k.Z,{variant:"body2",gutterBottom:!0,children:s}),(0,F.jsx)(k.Z,{variant:"body2",sx:{color:"text.secondary"},children:o}),(0,F.jsxs)(a.Z,{sx:{mt:3,display:"flex",position:{sm:"absolute"},right:{sm:24},bottom:{sm:24}},children:[!c&&(0,F.jsx)(y.Z,{variant:"outlined",size:"small",color:"inherit",children:"Delete"}),(0,F.jsx)(a.Z,{sx:{mx:.5}}),(0,F.jsx)(y.Z,{variant:"outlined",size:"small",onClick:function(){t(n),i()},children:"Deliver to this Address"})]})]})}function Y(e){var n=e.onBackStep,i=(0,x.v9)((function(e){return e.product})).checkout.billing;return(0,F.jsxs)(g.Z,{sx:{mb:3},children:[(0,F.jsx)(S.Z,{title:"Billing Address",action:(0,F.jsx)(y.Z,{size:"small",startIcon:(0,F.jsx)(v.Z,{icon:"eva:edit-fill"}),onClick:n,children:"Edit"})}),(0,F.jsxs)(I.Z,{children:[(0,F.jsxs)(k.Z,{variant:"subtitle2",gutterBottom:!0,children:[null===i||void 0===i?void 0:i.receiver,"\xa0",(0,F.jsxs)(k.Z,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["(",null===i||void 0===i?void 0:i.addressType,")"]})]}),(0,F.jsx)(k.Z,{variant:"body2",gutterBottom:!0,children:null===i||void 0===i?void 0:i.fullAddress}),(0,F.jsx)(k.Z,{variant:"body2",sx:{color:"text.secondary"},children:null===i||void 0===i?void 0:i.phone})]})]})}var $=i(87151),J=i.n($),K=i(43504),ee=i(27578),ne=i(62720),ie=i(39281),te=i(79836),re=i(56890),se=i(35855),ae=i(53994),le=i(53382),oe=i(13400),ce=i(89095),de=i(5977),ue=(0,r.ZP)("div")((function(e){var n=e.theme;return{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:n.spacing(.5),padding:n.spacing(.5,.75),borderRadius:n.shape.borderRadius,border:"solid 1px ".concat(n.palette.grey[50032])}}));function xe(e){var n=e.products,i=e.onDelete,t=e.onIncreaseQuantity,r=e.onDecreaseQuantity;return(0,F.jsx)(ie.Z,{sx:{minWidth:720},children:(0,F.jsxs)(te.Z,{children:[(0,F.jsx)(re.Z,{children:(0,F.jsxs)(se.Z,{children:[(0,F.jsx)(ae.Z,{children:"Product"}),(0,F.jsx)(ae.Z,{align:"left",children:"Price"}),(0,F.jsx)(ae.Z,{align:"left",children:"Quantity"}),(0,F.jsx)(ae.Z,{align:"right",children:"Total Price"}),(0,F.jsx)(ae.Z,{align:"right"})]})}),(0,F.jsx)(le.Z,{children:n.map((function(e){var n=e.id,s=e.name,l=e.size,o=e.price,c=e.color,d=e.cover,u=e.quantity,x=e.available;return(0,F.jsxs)(se.Z,{children:[(0,F.jsx)(ae.Z,{children:(0,F.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,F.jsx)(de.Z,{alt:"product image",src:d,sx:{width:64,height:64,borderRadius:1.5,mr:2}}),(0,F.jsxs)(a.Z,{children:[(0,F.jsx)(k.Z,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:s}),(0,F.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,F.jsxs)(k.Z,{variant:"body2",children:[(0,F.jsx)(k.Z,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:"size:\xa0"}),l]}),(0,F.jsx)(P.Z,{orientation:"vertical",sx:{mx:1,height:16}}),(0,F.jsxs)(k.Z,{variant:"body2",children:[(0,F.jsx)(k.Z,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:"color:\xa0"}),(0,ce.Z)(c)]})]})]})]})}),(0,F.jsx)(ae.Z,{align:"left",children:(0,B.e_)(o)}),(0,F.jsx)(ae.Z,{align:"left",children:(0,F.jsx)(he,{quantity:u,available:x,onDecrease:function(){return r(n)},onIncrease:function(){return t(n)}})}),(0,F.jsx)(ae.Z,{align:"right",children:(0,B.e_)(o*u)}),(0,F.jsx)(ae.Z,{align:"right",children:(0,F.jsx)(oe.Z,{onClick:function(){return i(n)},children:(0,F.jsx)(v.Z,{icon:"eva:trash-2-outline",width:20,height:20})})})]},n)}))})]})})}function he(e){var n=e.available,i=e.quantity,t=e.onIncrease,r=e.onDecrease;return(0,F.jsxs)(a.Z,{sx:{width:96,textAlign:"right"},children:[(0,F.jsxs)(ue,{children:[(0,F.jsx)(oe.Z,{size:"small",color:"inherit",onClick:r,disabled:i<=1,children:(0,F.jsx)(v.Z,{icon:"eva:minus-fill",width:16,height:16})}),i,(0,F.jsx)(oe.Z,{size:"small",color:"inherit",onClick:t,disabled:i>=n,children:(0,F.jsx)(v.Z,{icon:"eva:plus-fill",width:16,height:16})})]}),(0,F.jsxs)(k.Z,{variant:"caption",sx:{color:"text.secondary"},children:["available: ",n]})]})}function pe(){var e=(0,x.I0)(),n=(0,x.v9)((function(e){return e.product})).checkout,i=n.cart,t=n.total,r=n.discount,s=n.subtotal,a=J()(i.map((function(e){return e.quantity}))),l=0===i.length;return(0,F.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,F.jsxs)(o.ZP,{item:!0,xs:12,md:8,children:[(0,F.jsxs)(g.Z,{sx:{mb:3},children:[(0,F.jsx)(S.Z,{title:(0,F.jsxs)(k.Z,{variant:"h6",children:["Card",(0,F.jsxs)(k.Z,{component:"span",sx:{color:"text.secondary"},children:["\xa0(",a," item)"]})]}),sx:{mb:3}}),l?(0,F.jsx)(ne.Z,{title:"Cart is empty",description:"Look like you have no items in your shopping cart.",img:"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_empty_cart.svg"}):(0,F.jsx)(ee.Z,{children:(0,F.jsx)(xe,{products:i,onDelete:function(n){e((0,h.al)(n))},onIncreaseQuantity:function(n){e((0,h.Qd)(n))},onDecreaseQuantity:function(n){e((0,h.a3)(n))}})})]}),(0,F.jsx)(y.Z,{color:"inherit",component:K.rU,to:p.vB.eCommerce.root,startIcon:(0,F.jsx)(v.Z,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})]}),(0,F.jsxs)(o.ZP,{item:!0,xs:12,md:4,children:[(0,F.jsx)(z,{enableDiscount:!0,total:t,discount:r,subtotal:s,onApplyDiscount:function(n){e((0,h.b6)(n))}}),(0,F.jsx)(y.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:0===i.length,onClick:function(){e((0,h.NX)())},children:"Check Out"})]})]})}var me=i(1413),je=i(88970),Ze=i(85523),ve=i(1503),fe=(0,r.ZP)("div")((function(e){var n=e.theme;return{width:"100%",display:"flex",alignItems:"center",padding:n.spacing(0,2.5),justifyContent:"space-between",transition:n.transitions.create("all"),border:"solid 1px ".concat(n.palette.divider),borderRadius:1.5*Number(n.shape.borderRadius)}}));function be(e){var n=e.deliveryOptions,i=e.onApplyShipping,t=(0,O.Gc)().control;return(0,F.jsxs)(g.Z,{children:[(0,F.jsx)(S.Z,{title:"Delivery options"}),(0,F.jsx)(I.Z,{children:(0,F.jsx)(O.Qr,{name:"delivery",control:t,render:function(e){var t=e.field;return(0,F.jsx)(je.Z,(0,me.Z)((0,me.Z)({},t),{},{onChange:function(e){var n=e.target.value;t.onChange(Number(n)),i(Number(n))},children:(0,F.jsx)(D.Z,{spacing:2,alignItems:"center",direction:{xs:"column",md:"row"},children:n.map((function(e){var n=t.value===e.value;return(0,F.jsx)(fe,{sx:(0,me.Z)({},n&&{boxShadow:function(e){return e.customShadows.z20}}),children:(0,F.jsx)(Ze.Z,{value:e.value,control:(0,F.jsx)(ve.Z,{checkedIcon:(0,F.jsx)(v.Z,{icon:"eva:checkmark-circle-2-fill"})}),label:(0,F.jsxs)(a.Z,{sx:{ml:1},children:[(0,F.jsx)(k.Z,{variant:"subtitle2",children:e.title}),(0,F.jsx)(k.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.description})]}),sx:{py:3,flexGrow:1,mr:0}})},e.value)}))})}))}})})]})}var ye=i(4942),ge=i(16871),ke=i(23060),Ce=i(78199),we=i(49751),Se=(0,r.ZP)(Ce.Kl)((function(e){var n=e.theme;return{"& .MuiDialog-paper":(0,ye.Z)({margin:0},n.breakpoints.up("md"),{maxWidth:"calc(100% - 48px)",maxHeight:"calc(100% - 48px)"})}}));function Ie(e){var n=Object.assign({},e),i=(0,ge.s0)(),t=(0,x.I0)(),r=function(){t((0,h.s9)()),i(p.vB.eCommerce.shop)};return(0,F.jsx)(Se,(0,me.Z)((0,me.Z)({fullScreen:!0},n),{},{children:(0,F.jsxs)(a.Z,{sx:{p:4,maxWidth:480,margin:"auto"},children:[(0,F.jsxs)(a.Z,{sx:{textAlign:"center"},children:[(0,F.jsx)(k.Z,{variant:"h4",paragraph:!0,children:"Thank you for your purchase!"}),(0,F.jsx)(we.mn,{sx:{height:260,my:10}}),(0,F.jsxs)(k.Z,{align:"left",paragraph:!0,children:["Thanks for placing order \xa0",(0,F.jsx)(ke.Z,{href:"#",children:"01dc1370-3df6-11eb-b378-0242ac130002"})]}),(0,F.jsxs)(k.Z,{align:"left",sx:{color:"text.secondary"},children:["We will send you a notification within 5 days when it ships.",(0,F.jsx)("br",{})," ",(0,F.jsx)("br",{})," If you have any question or queries then fell to get in contact us. ",(0,F.jsx)("br",{})," ",(0,F.jsx)("br",{})," All the best,"]})]}),(0,F.jsx)(P.Z,{sx:{my:3}}),(0,F.jsxs)(D.Z,{direction:{xs:"column-reverse",sm:"row"},justifyContent:"space-between",spacing:2,children:[(0,F.jsx)(y.Z,{color:"inherit",onClick:r,startIcon:(0,F.jsx)(v.Z,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),(0,F.jsx)(y.Z,{variant:"contained",startIcon:(0,F.jsx)(v.Z,{icon:"ant-design:file-pdf-filled"}),onClick:r,children:"Download as PDF"})]})]})}))}var De=i(56125),Pe=i(47071),_e=i(53861),Ae=(0,r.ZP)("div")((function(e){var n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing(0,2.5),justifyContent:"space-between",transition:n.transitions.create("all"),border:"solid 1px ".concat(n.palette.divider),borderRadius:1.5*Number(n.shape.borderRadius)}}));function Be(e){var n=e.paymentOptions,i=e.cardOptions,t=(0,O.Gc)().control,r=(0,_e.Z)("up","sm");return(0,F.jsxs)(g.Z,{sx:{my:3},children:[(0,F.jsx)(S.Z,{title:"Payment options"}),(0,F.jsx)(I.Z,{children:(0,F.jsx)(O.Qr,{name:"payment",control:t,render:function(e){var t=e.field,s=e.fieldState.error;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(je.Z,(0,me.Z)((0,me.Z)({row:!0},t),{},{children:(0,F.jsx)(D.Z,{spacing:2,children:n.map((function(e){var n=e.value,s=e.title,l=e.icons,o=e.description,c="credit_card"===n,d=t.value===n;return(0,F.jsxs)(Ae,{sx:(0,me.Z)((0,me.Z)({},d&&{boxShadow:function(e){return e.customShadows.z20}}),c&&{flexWrap:"wrap"}),children:[(0,F.jsx)(Ze.Z,{value:n,control:(0,F.jsx)(ve.Z,{checkedIcon:(0,F.jsx)(v.Z,{icon:"eva:checkmark-circle-2-fill"})}),label:(0,F.jsxs)(a.Z,{sx:{ml:1},children:[(0,F.jsx)(k.Z,{variant:"subtitle2",children:s}),(0,F.jsx)(k.Z,{variant:"body2",sx:{color:"text.secondary"},children:o})]}),sx:{flexGrow:1,py:3}}),r&&(0,F.jsx)(D.Z,{direction:"row",spacing:1,flexShrink:0,children:l.map((function(e){return(0,F.jsx)(de.Z,{alt:"logo card",src:e},e)}))}),c&&(0,F.jsxs)(De.Z,{in:"credit_card"===t.value,sx:{width:1},children:[(0,F.jsx)(_.Z,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:i.map((function(e){return(0,F.jsx)("option",{value:e.value,children:e.label},e.value)}))}),(0,F.jsx)(y.Z,{size:"small",startIcon:(0,F.jsx)(v.Z,{icon:"eva:plus-fill",width:20,height:20}),sx:{my:3},children:"Add new card"})]})]},s)}))})})),!!s&&(0,F.jsx)(Pe.Z,{error:!0,sx:{pt:1,px:2},children:s.message})]})}})})]})}var Fe=[{value:0,title:"Standard delivery (Free)",description:"Delivered on Monday, August 12"},{value:2,title:"Fast delivery ($2,00)",description:"Delivered on Monday, August 5"}],ze=[{value:"paypal",title:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely.",icons:["https://minimal-assets-api.vercel.app/assets/icons/ic_paypal.svg"]},{value:"credit_card",title:"Credit / Debit Card",description:"We support Mastercard, Visa, Discover and Stripe.",icons:["https://minimal-assets-api.vercel.app/assets/icons/ic_mastercard.svg","https://minimal-assets-api.vercel.app/assets/icons/ic_visa.svg"]},{value:"cash",title:"Cash on CheckoutDelivery",description:"Pay with cash when your order is delivered.",icons:[]}],We=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function qe(){var e=(0,x.I0)(),n=(0,x.v9)((function(e){return e.product})).checkout,i=n.total,t=n.discount,r=n.subtotal,s=n.shipping,a=function(){e((0,h.Fs)())},l=N.Ry().shape({payment:N.Z_().required("Payment is required!")}),c={delivery:s,payment:""},d=(0,O.cI)({resolver:(0,R.X)(l),defaultValues:c}),u=d.handleSubmit,p=d.formState.isSubmitting,m=function(){var n=(0,W.Z)(T().mark((function n(){return T().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{e((0,h.NX)())}catch(i){console.error(i)}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,F.jsx)(L.RV,{methods:d,onSubmit:u(m),children:(0,F.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,F.jsxs)(o.ZP,{item:!0,xs:12,md:8,children:[(0,F.jsx)(be,{onApplyShipping:function(n){e((0,h.SY)(n))},deliveryOptions:Fe}),(0,F.jsx)(Be,{cardOptions:We,paymentOptions:ze}),(0,F.jsx)(y.Z,{size:"small",color:"inherit",onClick:a,startIcon:(0,F.jsx)(v.Z,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),(0,F.jsxs)(o.ZP,{item:!0,xs:12,md:4,children:[(0,F.jsx)(Y,{onBackStep:a}),(0,F.jsx)(z,{enableEdit:!0,total:i,subtotal:r,discount:t,shipping:s,onEdit:function(){return n=0,void e((0,h.$w)(n));var n}}),(0,F.jsx)(V.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:p,children:"Complete Order"})]})]})})}var Te=["Cart","Billing & address","Payment"],Ne=(0,r.ZP)(s.Z)((function(e){var n=e.theme;return{top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)","& .MuiStepConnector-line":{borderTopWidth:2,borderColor:n.palette.divider},"&.Mui-active, &.Mui-completed":{"& .MuiStepConnector-line":{borderColor:n.palette.primary.main}}}}));function Oe(e){var n=e.active,i=e.completed;return(0,F.jsx)(a.Z,{sx:{zIndex:9,width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",color:n?"primary.main":"text.disabled"},children:i?(0,F.jsx)(v.Z,{icon:"eva:checkmark-fill",sx:{zIndex:1,width:20,height:20,color:"primary.main"}}):(0,F.jsx)(a.Z,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}function Re(){var e=(0,j.Z)().themeStretch,n=(0,x.I0)(),i=(0,m.Z)(),r=(0,x.v9)((function(e){return e.product})).checkout,s=r.cart,a=r.billing,v=r.activeStep,b=v===Te.length;return(0,t.useEffect)((function(){i.current&&n((0,h.dv)(s))}),[n,i,s]),(0,t.useEffect)((function(){1===v&&n((0,h.YN)(null))}),[n,v]),(0,F.jsx)(Z.Z,{title:"Ecommerce: Checkout",children:(0,F.jsxs)(l.Z,{maxWidth:!e&&"lg",children:[(0,F.jsx)(f.Z,{heading:"Checkout",links:[{name:"Dashboard",href:p.vB.root},{name:"E-Commerce",href:p.vB.eCommerce.root},{name:"Checkout"}]}),(0,F.jsx)(o.ZP,{container:!0,justifyContent:b?"center":"flex-start",children:(0,F.jsx)(o.ZP,{item:!0,xs:12,md:8,sx:{mb:5},children:(0,F.jsx)(c.Z,{alternativeLabel:!0,activeStep:v,connector:(0,F.jsx)(Ne,{}),children:Te.map((function(e){return(0,F.jsx)(d.Z,{children:(0,F.jsx)(u.Z,{StepIconComponent:Oe,sx:{"& .MuiStepLabel-label":{typography:"subtitle2",color:"text.disabled"}},children:e})},e)}))})})}),b?(0,F.jsx)(Ie,{open:b}):(0,F.jsxs)(F.Fragment,{children:[0===v&&(0,F.jsx)(pe,{}),1===v&&(0,F.jsx)(H,{}),2===v&&a&&(0,F.jsx)(qe,{})]})]})})}},89095:function(e,n,i){function t(e){var n;switch(e){case"#00AB55":n="Green";break;case"#000000":n="Black";break;case"#FFFFFF":n="White";break;case"#FFC0CB":n="Pink";break;case"#FF4842":n="Red";break;case"#1890FF":n="Blue";break;case"#94D82D":n="Greenyellow";break;case"#FFC107":n="Orange";break;default:n=e}return n}i.d(n,{Z:function(){return t}})}}]);
//# sourceMappingURL=956.5dba7bb8.chunk.js.map