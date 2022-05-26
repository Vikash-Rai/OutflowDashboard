"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[269],{80269:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var i=r(4942),n=r(75952),s=r(43504),a=r(47630),l=r(57621),c=r(20890),o=r(23060),d=r(26445),u=r(64554),m=r(20068),x=r(17834),h=r(53861),f=r(38072),p=r(25212),Z=r(7986),g=r(5977),j=r(1413),v=r(15861),b=r(29439),y=r(87757),w=r.n(y),_=r(62797),k=r(72791),E=r(61134),I=r(61265),N=r(53767),P=r(94070),S=r(63466),q=r(13400),C=r(39709),A=r(22175),L=r(53026),B=r(38077),F=r(80184);function R(){var e=(0,x.Z)().register,t=(0,A.Z)(),r=(0,k.useState)(!1),i=(0,b.Z)(r,2),n=i[0],s=i[1],a=_.Ry().shape({firstName:_.Z_().required("First name required"),lastName:_.Z_().required("Last name required"),email:_.Z_().email("Email must be a valid email address").required("Email is required"),password:_.Z_().required("Password is required")}),l=(0,E.cI)({resolver:(0,I.X)(a),defaultValues:{firstName:"",lastName:"",email:"",password:""}}),c=l.reset,o=l.setError,d=l.handleSubmit,u=l.formState,m=u.errors,h=u.isSubmitting,f=function(){var r=(0,v.Z)(w().mark((function r(i){return w().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e(i.email,i.password,i.firstName,i.lastName);case 3:r.next=10;break;case 5:r.prev=5,r.t0=r.catch(0),console.error(r.t0),c(),t.current&&o("afterSubmit",(0,j.Z)((0,j.Z)({},r.t0),{},{message:r.t0.message}));case 10:case"end":return r.stop()}}),r,null,[[0,5]])})));return function(e){return r.apply(this,arguments)}}();return(0,F.jsx)(B.RV,{methods:l,onSubmit:d(f),children:(0,F.jsxs)(N.Z,{spacing:3,children:[!!m.afterSubmit&&(0,F.jsx)(P.Z,{severity:"error",children:m.afterSubmit.message}),(0,F.jsxs)(N.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,F.jsx)(B.au,{name:"firstName",label:"First name"}),(0,F.jsx)(B.au,{name:"lastName",label:"Last name"})]}),(0,F.jsx)(B.au,{name:"email",label:"Email address"}),(0,F.jsx)(B.au,{name:"password",label:"Password",type:n?"text":"password",InputProps:{endAdornment:(0,F.jsx)(S.Z,{position:"end",children:(0,F.jsx)(q.Z,{edge:"end",onClick:function(){return s(!n)},children:(0,F.jsx)(L.Z,{icon:n?"eva:eye-fill":"eva:eye-off-fill"})})})}}),(0,F.jsx)(C.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:h,children:"Register"})]})})}var D=(0,a.ZP)("div")((function(e){var t=e.theme;return(0,i.Z)({},t.breakpoints.up("md"),{display:"flex"})})),M=(0,a.ZP)("header")((function(e){var t=e.theme;return(0,i.Z)({top:0,zIndex:9,lineHeight:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",padding:t.spacing(3),justifyContent:"space-between"},t.breakpoints.up("md"),{alignItems:"flex-start",padding:t.spacing(7,5,0,7)})})),U=(0,a.ZP)(l.Z)((function(e){return{width:"100%",maxWidth:464,display:"flex",flexDirection:"column",justifyContent:"center",margin:e.theme.spacing(2,0,2,2)}})),W=(0,a.ZP)("div")((function(e){return{maxWidth:480,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(12,0)}}));function z(){var e=(0,x.Z)().method,t=(0,h.Z)("up","sm"),r=(0,h.Z)("up","md");return(0,F.jsx)(p.Z,{title:"Register",children:(0,F.jsxs)(D,{children:[(0,F.jsxs)(M,{children:[(0,F.jsx)(Z.Z,{}),t&&(0,F.jsxs)(c.Z,{variant:"body2",sx:{mt:{md:-2}},children:["Already have an account?"," ",(0,F.jsx)(o.Z,{variant:"subtitle2",component:s.rU,to:f.EE.login,children:"Login"})]})]}),r&&(0,F.jsxs)(U,{children:[(0,F.jsx)(c.Z,{variant:"h3",sx:{px:5,mt:10,mb:5},children:"Manage the job more effectively with Minimal"}),(0,F.jsx)(g.Z,{visibleByDefault:!0,disabledEffect:!0,alt:"register",src:"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_register.png"})]}),(0,F.jsx)(d.Z,{children:(0,F.jsxs)(W,{children:[(0,F.jsxs)(u.Z,{sx:{mb:5,display:"flex",alignItems:"center"},children:[(0,F.jsxs)(u.Z,{sx:{flexGrow:1},children:[(0,F.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:"Get started absolutely free."}),(0,F.jsx)(c.Z,{sx:{color:"text.secondary"},children:"Free forever. No credit card needed."})]}),(0,F.jsx)(m.Z,{title:(0,n.I)(e),children:(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(g.Z,{disabledEffect:!0,src:"https://minimal-assets-api.vercel.app/assets/icons/auth/ic_".concat(e,".png"),sx:{width:32,height:32}})})})]}),(0,F.jsx)(R,{}),(0,F.jsxs)(c.Z,{variant:"body2",align:"center",sx:{color:"text.secondary",mt:3},children:["By registering, I agree to Minimal\xa0",(0,F.jsx)(o.Z,{underline:"always",color:"text.primary",href:"#",children:"Terms of Service"}),"and",(0,F.jsx)(o.Z,{underline:"always",color:"text.primary",href:"#",children:"Privacy Policy"}),"."]}),!t&&(0,F.jsxs)(c.Z,{variant:"body2",sx:{mt:3,textAlign:"center"},children:["Already have an account?"," ",(0,F.jsx)(o.Z,{variant:"subtitle2",to:f.EE.login,component:s.rU,children:"Login"})]})]})})]})})}},75952:function(e,t,r){r.d(t,{I:function(){return l}});var i=r(3431),n=r(17254),s=r(48652);function a(e){return(0,s.l)(e.toLowerCase())}function l(e,t){return void 0===t&&(t={}),(0,n.B)(e,(0,i.pi)({delimiter:" ",transform:a},t))}},48652:function(e,t,r){function i(e){return e.charAt(0).toUpperCase()+e.substr(1)}r.d(t,{l:function(){return i}})}}]);
//# sourceMappingURL=269.ab9885c5.chunk.js.map