"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[9034],{62720:function(e,n,t){t.d(n,{Z:function(){return h}});var i=t(1413),r=t(45987),a=t(47630),s=t(20890),o=t(5977),l=t(80184),c=["title","description","img"],d=(0,a.ZP)("div")((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function h(e){var n=e.title,t=e.description,a=e.img,h=(0,r.Z)(e,c);return(0,l.jsxs)(d,(0,i.Z)((0,i.Z)({},h),{},{children:[(0,l.jsx)(o.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:a||"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,l.jsx)(s.Z,{variant:"h5",gutterBottom:!0,children:n}),t&&(0,l.jsx)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:t})]}))}},18456:function(e,n,t){t.d(n,{Z:function(){return Z}});var i=t(1413),r=t(45987),a=t(26769),s=t.n(a),o=t(64554),l=t(20890),c=t(23060),d=t(43504),h=t(93517),x=t(80184),u=["links","activeLast"];function p(e){var n=e.links,t=e.activeLast,a=void 0!==t&&t,s=(0,r.Z)(e,u),c=n[n.length-1].name,d=n.map((function(e){return(0,x.jsx)(m,{link:e},e.name)})),p=n.map((function(e){return(0,x.jsx)("div",{children:e.name!==c?(0,x.jsx)(m,{link:e}):(0,x.jsx)(l.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:c})},e.name)}));return(0,x.jsx)(h.Z,(0,i.Z)((0,i.Z)({separator:(0,x.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},s),{},{children:a?d:p}))}function m(e){var n=e.link,t=n.href,i=n.name,r=n.icon;return(0,x.jsxs)(c.Z,{variant:"body2",component:d.rU,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[r&&(0,x.jsx)(o.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:r}),i]},i)}var f=["links","action","heading","moreLink","sx"];function Z(e){var n=e.links,t=e.action,a=e.heading,d=e.moreLink,h=void 0===d?[]:d,u=e.sx,m=(0,r.Z)(e,f);return(0,x.jsxs)(o.Z,{sx:(0,i.Z)({mb:5},u),children:[(0,x.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,x.jsxs)(o.Z,{sx:{flexGrow:1},children:[(0,x.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:a}),(0,x.jsx)(p,(0,i.Z)({links:n},m))]}),t&&(0,x.jsx)(o.Z,{sx:{flexShrink:0},children:t})]}),(0,x.jsx)(o.Z,{sx:{mt:2},children:s()(h)?(0,x.jsx)(c.Z,{href:h,target:"_blank",rel:"noopener",variant:"body2",children:h}):h.map((function(e){return(0,x.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},80645:function(e,n,t){var i=t(4942),r=t(1413),a=t(47630),s=t(27760),o=(0,a.ZP)(s.Z,{shouldForwardProp:function(e){return"stretchStart"!==e}})((function(e){var n=e.stretchStart,t=e.theme;return{"& .MuiOutlinedInput-root":(0,r.Z)({transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:t.customShadows.z12}},n&&{width:n,"&.Mui-focused":(0,i.Z)({boxShadow:t.customShadows.z12},t.breakpoints.up("sm"),{width:n+60})}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));n.Z=o},27147:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(4942),r=t(1413),a=t(42378),s=t(49868),o=t(47630),l=t(20890),c=t(94721),d=t(23060),h=t(5977),x=t(80184),u=(0,o.ZP)("div")((function(e){var n,t=e.theme,a="light"===t.palette.mode;return{"& ul, & ol":(0,r.Z)((0,r.Z)({},t.typography.body1),{},{paddingLeft:t.spacing(5),"& li":{lineHeight:2}}),"& blockquote":(n={lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:t.spacing(3,3,3,8),borderRadius:2*Number(t.shape.borderRadius),backgroundColor:t.palette.background.neutral,color:"".concat(t.palette.text.secondary," !important")},(0,i.Z)(n,t.breakpoints.up("md"),{width:"80%"}),(0,i.Z)(n,"& p, & span",{marginBottom:"0 !important",fontSize:"inherit !important",fontFamily:"Georgia, serif !important",color:"".concat(t.palette.text.secondary," !important")}),(0,i.Z)(n,"&:before",{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:t.palette.text.disabled}),n),"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:a?t.palette.grey[900]:t.palette.grey[50016]},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:t.spacing(.2,.5),color:t.palette.warning[a?"darker":"lighter"],backgroundColor:t.palette.warning[a?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}}}}));function p(e){var n=Object.assign({},e);return(0,x.jsx)(u,{children:(0,x.jsx)(a.D,(0,r.Z)({rehypePlugins:[s.Z],components:m},n))})}var m={h1:function(e){var n=Object.assign({},e);return(0,x.jsx)(l.Z,(0,r.Z)({variant:"h1"},n))},h2:function(e){var n=Object.assign({},e);return(0,x.jsx)(l.Z,(0,r.Z)({variant:"h2"},n))},h3:function(e){var n=Object.assign({},e);return(0,x.jsx)(l.Z,(0,r.Z)({variant:"h3"},n))},h4:function(e){var n=Object.assign({},e);return(0,x.jsx)(l.Z,(0,r.Z)({variant:"h4"},n))},h5:function(e){var n=Object.assign({},e);return(0,x.jsx)(l.Z,(0,r.Z)({variant:"h5"},n))},h6:function(e){var n=Object.assign({},e);return(0,x.jsx)(l.Z,(0,r.Z)({variant:"h6"},n))},hr:function(e){var n=Object.assign({},e);return(0,x.jsx)(c.Z,(0,r.Z)({sx:{my:3}},n))},img:function(e){var n=Object.assign({},e);return(0,x.jsx)(h.Z,(0,r.Z)({alt:n.alt,ratio:"16/9",sx:{borderRadius:2,my:5}},n))},a:function(e){var n=Object.assign({},e);return n.href.includes("http")?(0,x.jsx)(d.Z,(0,r.Z)({target:"_blank",rel:"noopener"},n)):(0,x.jsx)(d.Z,(0,r.Z)({},n))}}},29811:function(e,n,t){t.d(n,{i4:function(){return Z},Ml:function(){return m},bB:function(){return f},VJ:function(){return s},M2:function(){return c},Ti:function(){return l},JJ:function(){return x}});var i=t(80184);var r=t(47047),a=t(64554);function s(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{width:"100%",height:560,variant:"rectangular",sx:{borderRadius:2}}),(0,i.jsxs)(a.Z,{sx:{mt:3,display:"flex",alignItems:"center"},children:[(0,i.jsx)(r.Z,{variant:"circular",width:64,height:64}),(0,i.jsxs)(a.Z,{sx:{flexGrow:1,ml:2},children:[(0,i.jsx)(r.Z,{variant:"text",height:20}),(0,i.jsx)(r.Z,{variant:"text",height:20}),(0,i.jsx)(r.Z,{variant:"text",height:20})]})]})]})}var o=t(61889);function l(){return(0,i.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:7,children:(0,i.jsx)(r.Z,{variant:"rectangular",width:"100%",sx:{paddingTop:"100%",borderRadius:2}})}),(0,i.jsxs)(o.ZP,{item:!0,xs:12,md:6,lg:5,children:[(0,i.jsx)(r.Z,{variant:"circular",width:80,height:80}),(0,i.jsx)(r.Z,{variant:"text",height:240}),(0,i.jsx)(r.Z,{variant:"text",height:40}),(0,i.jsx)(r.Z,{variant:"text",height:40}),(0,i.jsx)(r.Z,{variant:"text",height:40})]})]})}function c(){return(0,i.jsxs)(o.ZP,{item:!0,xs:12,sm:6,md:3,children:[(0,i.jsx)(r.Z,{variant:"rectangular",width:"100%",sx:{height:200,borderRadius:2}}),(0,i.jsxs)(a.Z,{sx:{display:"flex",mt:1.5},children:[(0,i.jsx)(r.Z,{variant:"circular",sx:{width:40,height:40}}),(0,i.jsx)(r.Z,{variant:"text",sx:{mx:1,flexGrow:1}})]})]})}var d=t(57621),h=t(53767);function x(){return(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(r.Z,{variant:"rectangular",sx:{paddingTop:"100%"}}),(0,i.jsxs)(h.Z,{spacing:2,sx:{p:3},children:[(0,i.jsx)(r.Z,{variant:"text",sx:{width:.5}}),(0,i.jsxs)(h.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,i.jsxs)(h.Z,{direction:"row",children:[(0,i.jsx)(r.Z,{variant:"circular",sx:{width:16,height:16}}),(0,i.jsx)(r.Z,{variant:"circular",sx:{width:16,height:16}}),(0,i.jsx)(r.Z,{variant:"circular",sx:{width:16,height:16}})]}),(0,i.jsx)(r.Z,{variant:"text",sx:{width:40}})]})]})]})}var u=t(93433),p=t(10703);function m(){return(0,i.jsx)(a.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:"repeat(4, 1fr)"},children:(0,u.Z)(Array(3)).map((function(e,n){return(0,i.jsx)(p.Z,{variant:"outlined",sx:{p:2.5,width:310},children:(0,i.jsxs)(h.Z,{spacing:2,children:[(0,i.jsx)(r.Z,{variant:"rectangular",sx:{paddingTop:"75%",borderRadius:1.5}}),0===n&&(0,i.jsx)(r.Z,{variant:"rectangular",sx:{paddingTop:"25%",borderRadius:1.5}}),2!==n&&(0,i.jsx)(r.Z,{variant:"rectangular",sx:{paddingTop:"25%",borderRadius:1.5}})]})},n)}))})}function f(){return(0,i.jsxs)(h.Z,{spacing:1,direction:"row",alignItems:"center",sx:{px:3,py:1},children:[(0,i.jsx)(r.Z,{variant:"circular",width:32,height:32}),(0,i.jsx)(r.Z,{variant:"text",sx:{width:.25,height:16}})]})}function Z(){return(0,i.jsxs)(h.Z,{spacing:1,direction:"row",alignItems:"center",sx:{px:3,py:1.5},children:[(0,i.jsx)(r.Z,{variant:"circular",width:48,height:48}),(0,i.jsxs)(h.Z,{spacing:.5,sx:{flexGrow:1},children:[(0,i.jsx)(r.Z,{variant:"text",sx:{width:.5,height:16}}),(0,i.jsx)(r.Z,{variant:"text",sx:{width:.25,height:12}})]})]})}},69034:function(e,n,t){t.r(n),t.d(n,{default:function(){return ze}});var i=t(29439),r=t(72791),a=t(16871),s=t(26445),o=t(57621),l=t(20647),c=t(15987),d=t(38072),h=t(85703),x=t(25212),u=t(18456),p=t(1413),m=t(47630),f=t(4110),Z=t(96174),g=t(81489),j=t(64554),v=t(20890),b=t(13400),w=t(94721),y=t(36151),k=t(53861),S=t(53026),C=t(51947),I=t(80184),P=(0,m.ZP)("div")((function(e){var n=e.theme;return{right:0,bottom:0,zIndex:1999,minHeight:440,outline:"none",display:"flex",position:"fixed",overflow:"hidden",flexDirection:"column",margin:n.spacing(3),boxShadow:n.customShadows.z20,borderRadius:2*Number(n.shape.borderRadius),backgroundColor:n.palette.background.paper}})),O=(0,m.ZP)(f.Z)((function(e){var n=e.theme;return{padding:n.spacing(.5,3),borderBottom:"solid 1px ".concat(n.palette.divider)}}));function R(e){var n=e.isOpenCompose,t=e.onCloseCompose,a=(0,r.useState)(!1),s=(0,i.Z)(a,2),o=s[0],l=s[1],c=(0,r.useState)(""),d=(0,i.Z)(c,2),h=d[0],x=d[1],u=(0,k.Z)("up","sm");return n?(0,I.jsxs)(Z.Z,{children:[(0,I.jsx)(g.Z,{open:o||!u,sx:{zIndex:1998}}),(0,I.jsxs)(P,{sx:(0,p.Z)({},o&&{top:0,left:0,zIndex:1999,margin:"auto",width:{xs:"calc(100% - 24px)",md:"calc(100% - 80px)"},height:{xs:"calc(100% - 24px)",md:"calc(100% - 80px)"}}),children:[(0,I.jsxs)(j.Z,{sx:{pl:3,pr:1,height:60,display:"flex",alignItems:"center"},children:[(0,I.jsx)(v.Z,{variant:"h6",children:"New Message"}),(0,I.jsx)(j.Z,{sx:{flexGrow:1}}),(0,I.jsx)(b.Z,{onClick:o?function(){l(!1)}:function(){l(!0)},children:(0,I.jsx)(S.Z,{icon:o?"eva:collapse-fill":"eva:expand-fill",width:20,height:20})}),(0,I.jsx)(b.Z,{onClick:function(){t(),l(!1)},children:(0,I.jsx)(S.Z,{icon:"eva:close-fill",width:20,height:20})})]}),(0,I.jsx)(w.Z,{}),(0,I.jsx)(O,{disableUnderline:!0,placeholder:"To"}),(0,I.jsx)(O,{disableUnderline:!0,placeholder:"Subject"}),(0,I.jsx)(C.Z,{simple:!0,id:"compose-mail",value:h,onChange:function(e){x(e)},placeholder:"Type a message",sx:{borderColor:"transparent",flexGrow:1}}),(0,I.jsx)(w.Z,{}),(0,I.jsxs)(j.Z,{sx:{py:2,px:3,display:"flex",alignItems:"center"},children:[(0,I.jsx)(y.Z,{variant:"contained",children:"Send"}),(0,I.jsx)(b.Z,{size:"small",sx:{ml:2,mr:1},children:(0,I.jsx)(S.Z,{icon:"ic:round-add-photo-alternate",width:24,height:24})}),(0,I.jsx)(b.Z,{size:"small",children:(0,I.jsx)(S.Z,{icon:"eva:attach-2-fill",width:24,height:24})})]})]})]}):null}var _=t(27147),W=t(27578),D=t(45987),z=t(20068),B=t(23060),T=t(39954),A=t(96244),M=t(67307),U=["mail"],G=(0,m.ZP)("div")((function(e){return{height:84,flexShrink:0,display:"flex",alignItems:"center",padding:e.theme.spacing(0,2),justifyContent:"space-between"}}));function F(e){var n=e.mail,t=(0,D.Z)(e,U),i=(0,a.s0)(),r=(0,a.UO)(),s=r.systemLabel,o=r.customLabel,l=(0,k.Z)("up","sm"),c=d.vB.mail.root;return(0,I.jsxs)(G,(0,p.Z)((0,p.Z)({},t),{},{children:[(0,I.jsxs)(j.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,I.jsx)(z.Z,{title:"Back",children:(0,I.jsx)(b.Z,{onClick:function(){return i(s?"".concat(c,"/").concat(s):o?"".concat(c,"/label/").concat(o):"".concat(c,"/inbox"))},children:(0,I.jsx)(S.Z,{icon:"eva:arrow-ios-back-fill",width:20,height:20})})}),(0,I.jsx)(M.Z,{alt:n.from.name,src:n.from.avatar||"",color:(0,T.Z)(n.from.name).color,children:(0,T.Z)(n.from.name).name}),(0,I.jsxs)(j.Z,{sx:{ml:2},children:[(0,I.jsx)(v.Z,{display:"inline",variant:"subtitle2",children:n.from.name}),(0,I.jsxs)(B.Z,{variant:"caption",sx:{color:"text.secondary"},children:["\xa0 ","<".concat(n.from.email,">")]}),(0,I.jsxs)(v.Z,{variant:"caption",sx:{color:"text.secondary",display:"block"},children:["To:\xa0",n.to.map((function(e){return(0,I.jsx)(B.Z,{color:"inherit",children:e.email},e.email)}))]})]})]}),(0,I.jsxs)(j.Z,{sx:{display:"flex",alignItems:"center"},children:[l&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(v.Z,{variant:"caption",sx:{color:"text.secondary"},children:(0,A.Pp)(n.createdAt)}),(0,I.jsx)(z.Z,{title:"Reply",children:(0,I.jsx)(b.Z,{children:(0,I.jsx)(S.Z,{icon:"ic:round-reply",width:20,height:20})})})]}),(0,I.jsx)(z.Z,{title:"More options",children:(0,I.jsx)(b.Z,{children:(0,I.jsx)(S.Z,{icon:"eva:more-vertical-fill",width:20,height:20})})})]})]}))}var H=t(27760);function L(){var e=(0,r.useRef)(null),n=(0,r.useState)(""),t=(0,i.Z)(n,2),a=t[0],s=t[1],o=function(){var n;null===(n=e.current)||void 0===n||n.click()};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(H.Z,{fullWidth:!0,multiline:!0,minRows:2,maxRows:8,value:a,placeholder:"Type a message",onChange:function(e){s(e.target.value)},sx:{"& fieldset":{border:"none !important"}}}),(0,I.jsxs)(j.Z,{sx:{mr:3,mb:3,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:[(0,I.jsx)(b.Z,{size:"small",onClick:o,children:(0,I.jsx)(S.Z,{icon:"ic:round-add-photo-alternate",width:24,height:24})}),(0,I.jsx)(b.Z,{size:"small",onClick:o,sx:{ml:1,mr:2},children:(0,I.jsx)(S.Z,{icon:"eva:attach-2-fill",width:24,height:24})}),(0,I.jsx)(y.Z,{variant:"contained",children:"Send"})]}),(0,I.jsx)("input",{type:"file",ref:e,style:{display:"none"}})]})}var E=t(12065),N=t(63402),J=t(26655),q=(0,m.ZP)("div")((function(e){var n=e.theme;return{padding:n.spacing(2),borderTop:"solid 1px ".concat(n.palette.divider),backgroundColor:n.palette.background.neutral}})),V=(0,m.ZP)("div")((function(e){var n=e.theme;return{width:48,height:48,display:"flex",cursor:"pointer",overflow:"hidden",position:"relative",alignItems:"center",justifyContent:"center",color:n.palette.text.disabled,border:"solid 1px ".concat(n.palette.divider),backgroundColor:n.palette.background.paper,borderRadius:1.5*Number(n.shape.borderRadius)}})),X=(0,m.ZP)("div")((function(e){var n=e.theme;return(0,p.Z)((0,p.Z)({},(0,N.Z)().bgBlur({color:n.palette.grey[900],opacity:.64})),{},{opacity:0,width:"100%",height:"100%",display:"flex",position:"absolute",alignItems:"center",justifyContent:"center",borderRadius:1.5*Number(n.shape.borderRadius),transition:n.transitions.create("opacity"),"&:hover":{opacity:1},"& svg":{transition:n.transitions.create("color"),color:(0,E.Fq)(n.palette.common.white,.64),"&:hover":{color:n.palette.common.white}}})}));function Y(e){var n=e.mail;return(0,I.jsx)(q,{children:(0,I.jsx)(W.Z,{children:(0,I.jsx)(j.Z,{sx:{display:"flex"},children:n.files.map((function(e){return(0,I.jsx)($,{fileUrl:e},e)}))})})})}function $(e){var n=e.fileUrl;return(0,I.jsxs)(j.Z,{sx:{mx:.75},children:[(0,I.jsxs)(V,{children:[(0,J.PF)(n),(0,I.jsx)(X,{children:(0,I.jsx)(b.Z,{children:(0,I.jsx)(S.Z,{icon:"eva:arrow-circle-down-fill"})})})]}),(0,I.jsxs)(j.Z,{sx:{mt:.5,maxWidth:56,display:"flex",justifyContent:"center"},children:[(0,I.jsx)(v.Z,{noWrap:!0,variant:"caption",children:(0,J.UO)(n)}),(0,I.jsxs)(v.Z,{variant:"caption",children:[".",(0,J.JB)(n)]})]})]},n)}var K=(0,m.ZP)("div")({flexGrow:1,display:"flex",flexDirection:"column"}),Q=(0,m.ZP)("div")((function(e){var n=e.theme;return{"& > p":(0,p.Z)((0,p.Z)({},n.typography.body1),{},{marginBottom:n.spacing(2)})}}));function ee(){var e=(0,a.UO)().mailId,n=(0,l.I0)(),t=(0,l.v9)((function(n){return n.mail.mails.byId[e]})),i=t&&t.files.length>0;return(0,r.useEffect)((function(){n((0,c.ci)(e))}),[n,e]),t?(0,I.jsxs)(K,{children:[(0,I.jsx)(F,{mail:t}),(0,I.jsx)(w.Z,{}),(0,I.jsx)(W.Z,{sx:{flexGrow:1},children:(0,I.jsxs)(j.Z,{sx:{p:{xs:3,md:5}},children:[(0,I.jsx)(v.Z,{variant:"h3",gutterBottom:!0,children:t.subject}),(0,I.jsx)(Q,{children:(0,I.jsx)(_.Z,{children:t.message})})]})}),i&&(0,I.jsx)(Y,{mail:t}),(0,I.jsx)(w.Z,{}),(0,I.jsx)(L,{})]}):null}var ne=t(93433),te=t(62720),ie=t(4942),re=t(43504),ae=t(94454),se=t(41758),oe=["handleArchive","handleDelete","handleMarkRead","handleHidden"],le=(0,m.ZP)("div")((function(e){var n=e.theme;return{height:40,zIndex:99,opacity:0,margin:"auto",display:"flex",position:"absolute",alignItems:"center",top:n.spacing(1),right:n.spacing(1),bottom:n.spacing(1),justifyContent:"center",padding:n.spacing(0,.75),boxShadow:n.customShadows.z12,borderRadius:n.shape.borderRadius,backgroundColor:n.palette.background.paper,transition:n.transitions.create("opacity")}}));function ce(e){var n=e.handleArchive,t=e.handleDelete,i=e.handleMarkRead,r=e.handleHidden,a=(0,D.Z)(e,oe),s=[{name:"Archive",icon:"eva:archive-fill",action:n},{name:"Delete",icon:"eva:trash-2-outline",action:t},{name:"Mark Email Read",icon:"ic:round-mark-email-read",action:i},{name:"Hidden Email",icon:"eva:eye-off-fill",action:r}];return(0,I.jsx)(le,(0,p.Z)((0,p.Z)({},a),{},{children:s.map((function(e){return(0,I.jsx)(z.Z,{title:e.name,children:(0,I.jsx)(b.Z,{size:"small",onClick:e.action,sx:{mx:.75,"&:hover":{color:"text.primary"}},children:(0,I.jsx)(S.Z,{icon:e.icon,width:24,height:24})})},e.name)}))}))}var de=["mail","isDense","isSelected","onSelect","onDeselect"],he=(0,m.ZP)("div")((function(e){var n,t=e.theme;return n={position:"relative",padding:t.spacing(0,2),color:t.palette.text.secondary,backgroundColor:t.palette.background.neutral,borderBottom:"1px solid ".concat(t.palette.divider)},(0,ie.Z)(n,t.breakpoints.up("md"),{display:"flex",alignItems:"center"}),(0,ie.Z)(n,"&:hover",{zIndex:999,position:"relative",boxShadow:t.customShadows.z24,"& .showActions":{opacity:1}}),n})),xe=(0,m.ZP)(B.Z)((function(e){var n=e.theme;return{minWidth:0,display:"flex",padding:n.spacing(2,0),transition:n.transitions.create("padding")}})),ue=function(e,n){var t=e.systemLabel,i=e.customLabel,r=d.vB.mail.root;return t?"".concat(r,"/").concat(t,"/").concat(n):i?"".concat(r,"/label/").concat(i,"/").concat(n):r};function pe(e){var n=e.mail,t=e.isDense,i=e.isSelected,r=e.onSelect,s=e.onDeselect,o=(0,D.Z)(e,de),c=(0,a.UO)(),d=(0,l.v9)((function(e){return e.mail})).labels,h=(0,k.Z)("up","md"),x=n.files.length>0;return(0,I.jsxs)(he,(0,p.Z)((0,p.Z)({sx:(0,p.Z)((0,p.Z)({},!n.isUnread&&{color:"text.primary",backgroundColor:"background.paper"}),i&&{bgcolor:"action.selected"})},o),{},{children:[h&&(0,I.jsxs)(j.Z,{sx:{mr:2,display:"flex"},children:[(0,I.jsx)(ae.Z,{checked:i,onChange:function(e){return e.target.checked?r():s()}}),(0,I.jsx)(z.Z,{title:"Starred",children:(0,I.jsx)(ae.Z,{color:"warning",defaultChecked:n.isStarred,icon:(0,I.jsx)(S.Z,{icon:"eva:star-outline"}),checkedIcon:(0,I.jsx)(S.Z,{icon:"eva:star-fill"})})}),(0,I.jsx)(z.Z,{title:"Important",children:(0,I.jsx)(ae.Z,{color:"warning",defaultChecked:n.isImportant,checkedIcon:(0,I.jsx)(S.Z,{icon:"ic:round-label-important"}),icon:(0,I.jsx)(S.Z,{icon:"ic:round-label-important"})})})]}),(0,I.jsxs)(xe,{color:"inherit",underline:"none",component:re.rU,to:ue(c,n.id),sx:(0,p.Z)({},t&&{py:1}),children:[(0,I.jsx)(M.Z,{alt:n.from.name,src:n.from.avatar||"",color:(0,T.Z)(n.from.name).color,sx:{width:32,height:32},children:(0,T.Z)(n.from.name).name}),(0,I.jsxs)(j.Z,{sx:{ml:2,minWidth:0,alignItems:"center",display:{md:"flex"}},children:[(0,I.jsx)(v.Z,{variant:"body2",noWrap:!0,sx:(0,p.Z)({pr:2,minWidth:200},!n.isUnread&&{fontWeight:"fontWeightBold"}),children:n.from.name}),(0,I.jsxs)(v.Z,{noWrap:!0,variant:"body2",sx:{pr:2},children:[(0,I.jsx)(j.Z,{component:"span",sx:(0,p.Z)({},!n.isUnread&&{fontWeight:"fontWeightBold"}),children:n.subject}),"\xa0-\xa0",(0,I.jsx)(j.Z,{component:"span",sx:(0,p.Z)({},!n.isUnread&&{color:"text.secondary"}),children:n.message})]}),h&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(j.Z,{sx:{display:"flex"},children:n.labelIds.map((function(e){var n=d.find((function(n){return n.id===e}));return n?(0,I.jsx)(se.Z,{sx:{mx:.5,textTransform:"capitalize",bgcolor:n.color,color:function(e){return e.palette.getContrastText(n.color||"")}},children:n.name},n.id):null}))}),x&&(0,I.jsx)(S.Z,{icon:"eva:link-fill",sx:{mx:2,width:20,height:20,flexShrink:0}})]}),(0,I.jsx)(v.Z,{variant:"caption",sx:(0,p.Z)({flexShrink:0,minWidth:120,textAlign:"right"},!n.isUnread&&{fontWeight:"fontWeightBold"}),children:(0,A.Mu)(n.createdAt)})]})]}),(0,I.jsx)(ce,{className:"showActions"})]}))}var me=t(63466),fe=t(80645),Ze=["mails","selectedMails","onOpenSidebar","onToggleDense","onSelectAll","onDeselectAll"],ge=(0,m.ZP)("div")((function(e){return{height:84,flexShrink:0,display:"flex",alignItems:"center",padding:e.theme.spacing(0,2)}}));function je(e){var n=e.mails,t=e.selectedMails,i=e.onOpenSidebar,r=e.onToggleDense,a=e.onSelectAll,s=e.onDeselectAll,o=(0,D.Z)(e,Ze),l=(0,k.Z)("up","sm"),c=(0,k.Z)("up","md"),d=t===n&&n>0,h=t>0&&t<n;return(0,I.jsxs)(ge,(0,p.Z)((0,p.Z)({},o),{},{children:[!c&&(0,I.jsx)(b.Z,{onClick:i,children:(0,I.jsx)(S.Z,{icon:"eva:menu-fill"})}),l&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ae.Z,{checked:d,indeterminate:h,onChange:function(e){return e.target.checked?a():s()}}),(0,I.jsx)(z.Z,{title:"Refresh",children:(0,I.jsx)(b.Z,{children:(0,I.jsx)(S.Z,{icon:"eva:refresh-fill",width:20,height:20})})}),(0,I.jsx)(z.Z,{title:"Dense",children:(0,I.jsx)(b.Z,{onClick:r,children:(0,I.jsx)(S.Z,{icon:"eva:collapse-fill",width:20,height:20})})}),(0,I.jsx)(z.Z,{title:"More",children:(0,I.jsx)(b.Z,{children:(0,I.jsx)(S.Z,{icon:"eva:more-vertical-fill",width:20,height:20})})})]}),(0,I.jsx)(j.Z,{sx:{flexGrow:1}}),(0,I.jsx)(fe.Z,{stretchStart:180,size:"small",placeholder:"Search mail\u2026",InputProps:{startAdornment:(0,I.jsx)(me.Z,{position:"start",children:(0,I.jsx)(S.Z,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}}),l&&(0,I.jsxs)(j.Z,{sx:{display:"flex",alignItems:"center",flexShrink:0},children:[(0,I.jsxs)(v.Z,{variant:"body2",sx:{mx:2,color:"text.secondary"},children:["1 - ",n," of ",n]}),(0,I.jsx)(z.Z,{title:"Next page",children:(0,I.jsx)(b.Z,{children:(0,I.jsx)(S.Z,{icon:"eva:arrow-ios-back-fill",width:20,height:20})})}),(0,I.jsx)(z.Z,{title:"Previous page",children:(0,I.jsx)(b.Z,{children:(0,I.jsx)(S.Z,{icon:"eva:arrow-ios-forward-fill",width:20,height:20})})})]})]}))}var ve=(0,m.ZP)("div")({flexGrow:1,display:"flex",overflow:"hidden",flexDirection:"column"});function be(e){var n=e.onOpenSidebar,t=(0,a.UO)(),s=(0,l.I0)(),o=(0,l.v9)((function(e){return e.mail})).mails,d=(0,r.useState)([]),h=(0,i.Z)(d,2),x=h[0],u=h[1],p=(0,r.useState)(!1),m=(0,i.Z)(p,2),f=m[0],Z=m[1],g=o.allIds.length<1;(0,r.useEffect)((function(){s((0,c.Y9)(t))}),[s,t]);return(0,I.jsxs)(ve,{children:[(0,I.jsx)(je,{mails:o.allIds.length,selectedMails:x.length,onSelectAll:function(){u(o.allIds.map((function(e){return e})))},onOpenSidebar:n,onDeselectAll:function(){u([])},onToggleDense:function(){Z((function(e){return!e}))}}),(0,I.jsx)(w.Z,{}),g?(0,I.jsx)(te.Z,{title:"There is no conversation",img:"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_empty_mail.svg",sx:{flexGrow:1,height:"auto"}}):(0,I.jsx)(W.Z,{children:(0,I.jsx)(j.Z,{sx:{minWidth:{md:800}},children:o.allIds.map((function(e){return(0,I.jsx)(pe,{isDense:f,mail:o.byId[e],isSelected:x.includes(e),onSelect:function(){return function(e){u((function(n){return n.includes(e)?n:[].concat((0,ne.Z)(n),[e])}))}(e)},onDeselect:function(){return function(e){u((function(n){return n.filter((function(n){return n!==e}))}))}(e)}},e)}))})})]})}var we=t(90493),ye=t(73974),ke=t(23197),Se=t(29811),Ce=t(76278),Ie=t(57064),Pe=t(49900),Oe=["label"],Re={all:"eva:email-fill",inbox:"eva:inbox-fill",trash:"eva:trash-2-outline",drafts:"eva:file-fill",spam:"ic:round-report",sent:"ic:round-send",starred:"eva:star-fill",important:"ic:round-label-important",id_social:"eva:share-fill",id_promotions:"ic:round-label",id_forums:"ic:round-forum"},_e=function(e){var n=d.vB.mail.root;return"system"===e.type?"".concat(n,"/").concat(e.id):"custom"===e.type?"".concat(n,"/label/").concat(e.name):n};function We(e){var n=e.label,t=(0,D.Z)(e,Oe),i=n.unreadCount>0;return(0,I.jsxs)(Ce.Z,(0,p.Z)((0,p.Z)({to:_e(n),component:re.OL,sx:{px:3,height:48,typography:"body2",color:"text.secondary",textTransform:"capitalize","&.active":{color:"text.primary",fontWeight:"fontWeightMedium",bgcolor:"action.selected"}}},t),{},{children:[(0,I.jsx)(Ie.Z,{children:(0,I.jsx)(S.Z,{icon:Re[n.id],style:{color:n.color},width:24,height:24})}),(0,I.jsx)(Pe.Z,{disableTypography:!0,primary:n.name}),i&&(0,I.jsx)(v.Z,{variant:"caption",children:n.unreadCount})]}))}function De(e){var n=e.isOpenSidebar,t=e.onOpenCompose,i=e.onCloseSidebar,s=(0,a.TH)().pathname,o=(0,l.v9)((function(e){return e.mail})).labels,c=(0,k.Z)("up","md"),d=!o.length;(0,r.useEffect)((function(){n&&i()}),[s]);var h=(0,I.jsxs)(W.Z,{children:[(0,I.jsx)(j.Z,{sx:{p:3},children:(0,I.jsx)(y.Z,{fullWidth:!0,variant:"contained",startIcon:(0,I.jsx)(S.Z,{icon:"eva:plus-fill"}),onClick:function(){i(),t()},children:"Compose"})}),(0,I.jsx)(w.Z,{}),(0,I.jsx)(we.Z,{disablePadding:!0,children:(d?(0,ne.Z)(Array(8)):o).map((function(e,n){return e?(0,I.jsx)(We,{label:e},e.id):(0,I.jsx)(Se.bB,{},n)}))})]});return(0,I.jsx)(I.Fragment,{children:c?(0,I.jsx)(ye.ZP,{variant:"permanent",PaperProps:{sx:{width:ke.Au.BASE_WIDTH,position:"relative"}},children:h}):(0,I.jsx)(ye.ZP,{open:n,onClose:i,ModalProps:{keepMounted:!0},PaperProps:{sx:{width:ke.Au.BASE_WIDTH}},children:h})})}function ze(){var e=(0,h.Z)().themeStretch,n=(0,l.I0)(),t=(0,a.UO)().mailId,p=(0,r.useState)(!1),m=(0,i.Z)(p,2),f=m[0],Z=m[1],g=(0,r.useState)(!1),j=(0,i.Z)(g,2),v=j[0],b=j[1];return(0,r.useEffect)((function(){n((0,c.g7)())}),[n]),(0,I.jsx)(x.Z,{title:"Mail",children:(0,I.jsxs)(s.Z,{maxWidth:!e&&"xl",children:[(0,I.jsx)(u.Z,{heading:"Mail",links:[{name:"Dashboard",href:d.vB.root},{name:"Mail"}]}),(0,I.jsxs)(o.Z,{sx:{height:{md:"72vh"},display:{md:"flex"}},children:[(0,I.jsx)(De,{isOpenSidebar:f,onCloseSidebar:function(){return Z(!1)},onOpenCompose:function(){return b(!0)}}),t?(0,I.jsx)(ee,{}):(0,I.jsx)(be,{onOpenSidebar:function(){return Z(!0)}}),(0,I.jsx)(R,{isOpenCompose:v,onCloseCompose:function(){return b(!1)}})]})]})})}},26655:function(e,n,t){t.d(n,{JB:function(){return p},PF:function(){return g},UO:function(){return m},lW:function(){return f}});var i=t(5977),r=t(53026),a=t(80184),s=["jpg","jpeg","gif","bmp","png"],o=["m4v","avi","mpg","mp4","webm"],l=["doc","docx"],c=["xls","xlsx"],d=["ppt","pptx"],h=["pdf"],x=["psd"],u=["ai","esp"];function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e&&e.split(".").pop()||""}function m(e){return e.substring(e.lastIndexOf("/")+1).replace(/\.[^/.]+$/,"")}function f(e){return e.split("/").pop()}var Z=function(e){return(0,a.jsx)(i.Z,{src:"https://minimal-assets-api.vercel.app/assets/icons/file/".concat(e,".svg"),alt:e,sx:{width:28,height:28}})};function g(e){var n;switch(function(e){var n;switch(e.includes(p(e))){case s.includes(p(e)):n="image";break;case o.includes(p(e)):n="video";break;case l.includes(p(e)):n="word";break;case c.includes(p(e)):n="excel";break;case d.includes(p(e)):n="powerpoint";break;case h.includes(p(e)):n="pdf";break;case x.includes(p(e)):n="photoshop";break;case u.includes(p(e)):n="illustrator";break;default:n=p(e)}return n}(e)){case"video":n=Z("format_video");break;case"word":n=Z("format_word");break;case"excel":n=Z("format_excel");break;case"powerpoint":n=Z("format_powerpoint");break;case"pdf":n=Z("format_pdf");break;case"photoshop":n=Z("format_photoshop");break;case"illustrator":n=Z("format_ai");break;case"image":n=(0,a.jsx)(i.Z,{src:e,alt:e,sx:{height:1}});break;default:n=(0,a.jsx)(r.Z,{icon:"eva:file-fill",sx:{width:28,height:28}})}return n}}}]);
//# sourceMappingURL=9034.611179f7.chunk.js.map