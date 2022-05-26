"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[1291],{62720:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(1413),i=n(45987),a=n(47630),s=n(20890),o=n(5977),l=n(80184),c=["title","description","img"],u=(0,a.ZP)("div")((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function d(e){var t=e.title,n=e.description,a=e.img,d=(0,i.Z)(e,c);return(0,l.jsxs)(u,(0,r.Z)((0,r.Z)({},d),{},{children:[(0,l.jsx)(o.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:a||"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,l.jsx)(s.Z,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,l.jsx)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:n})]}))}},18456:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(1413),i=n(45987),a=n(26769),s=n.n(a),o=n(64554),l=n(20890),c=n(23060),u=n(43504),d=n(93517),h=n(80184),p=["links","activeLast"];function x(e){var t=e.links,n=e.activeLast,a=void 0!==n&&n,s=(0,i.Z)(e,p),c=t[t.length-1].name,u=t.map((function(e){return(0,h.jsx)(m,{link:e},e.name)})),x=t.map((function(e){return(0,h.jsx)("div",{children:e.name!==c?(0,h.jsx)(m,{link:e}):(0,h.jsx)(l.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:c})},e.name)}));return(0,h.jsx)(d.Z,(0,r.Z)((0,r.Z)({separator:(0,h.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},s),{},{children:a?u:x}))}function m(e){var t=e.link,n=t.href,r=t.name,i=t.icon;return(0,h.jsxs)(c.Z,{variant:"body2",component:u.rU,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&(0,h.jsx)(o.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),r]},r)}var Z=["links","action","heading","moreLink","sx"];function f(e){var t=e.links,n=e.action,a=e.heading,u=e.moreLink,d=void 0===u?[]:u,p=e.sx,m=(0,i.Z)(e,Z);return(0,h.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},p),children:[(0,h.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,h.jsxs)(o.Z,{sx:{flexGrow:1},children:[(0,h.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:a}),(0,h.jsx)(x,(0,r.Z)({links:t},m))]}),n&&(0,h.jsx)(o.Z,{sx:{flexShrink:0},children:n})]}),(0,h.jsx)(o.Z,{sx:{mt:2},children:s()(d)?(0,h.jsx)(c.Z,{href:d,target:"_blank",rel:"noopener",variant:"body2",children:d}):d.map((function(e){return(0,h.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},80645:function(e,t,n){var r=n(4942),i=n(1413),a=n(47630),s=n(27760),o=(0,a.ZP)(s.Z,{shouldForwardProp:function(e){return"stretchStart"!==e}})((function(e){var t=e.stretchStart,n=e.theme;return{"& .MuiOutlinedInput-root":(0,i.Z)({transition:n.transitions.create(["box-shadow","width"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:n.customShadows.z12}},t&&{width:t,"&.Mui-focused":(0,r.Z)({boxShadow:n.customShadows.z12},n.breakpoints.up("sm"),{width:t+60})}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(n.palette.grey[50032]," !important")}}}));t.Z=o},27147:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(4942),i=n(1413),a=n(42378),s=n(49868),o=n(47630),l=n(20890),c=n(94721),u=n(23060),d=n(5977),h=n(80184),p=(0,o.ZP)("div")((function(e){var t,n=e.theme,a="light"===n.palette.mode;return{"& ul, & ol":(0,i.Z)((0,i.Z)({},n.typography.body1),{},{paddingLeft:n.spacing(5),"& li":{lineHeight:2}}),"& blockquote":(t={lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:n.spacing(3,3,3,8),borderRadius:2*Number(n.shape.borderRadius),backgroundColor:n.palette.background.neutral,color:"".concat(n.palette.text.secondary," !important")},(0,r.Z)(t,n.breakpoints.up("md"),{width:"80%"}),(0,r.Z)(t,"& p, & span",{marginBottom:"0 !important",fontSize:"inherit !important",fontFamily:"Georgia, serif !important",color:"".concat(n.palette.text.secondary," !important")}),(0,r.Z)(t,"&:before",{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:n.palette.text.disabled}),t),"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:n.spacing(2),color:n.palette.common.white,borderRadius:n.shape.borderRadius,backgroundColor:a?n.palette.grey[900]:n.palette.grey[50016]},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:n.spacing(.2,.5),color:n.palette.warning[a?"darker":"lighter"],backgroundColor:n.palette.warning[a?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}}}}));function x(e){var t=Object.assign({},e);return(0,h.jsx)(p,{children:(0,h.jsx)(a.D,(0,i.Z)({rehypePlugins:[s.Z],components:m},t))})}var m={h1:function(e){var t=Object.assign({},e);return(0,h.jsx)(l.Z,(0,i.Z)({variant:"h1"},t))},h2:function(e){var t=Object.assign({},e);return(0,h.jsx)(l.Z,(0,i.Z)({variant:"h2"},t))},h3:function(e){var t=Object.assign({},e);return(0,h.jsx)(l.Z,(0,i.Z)({variant:"h3"},t))},h4:function(e){var t=Object.assign({},e);return(0,h.jsx)(l.Z,(0,i.Z)({variant:"h4"},t))},h5:function(e){var t=Object.assign({},e);return(0,h.jsx)(l.Z,(0,i.Z)({variant:"h5"},t))},h6:function(e){var t=Object.assign({},e);return(0,h.jsx)(l.Z,(0,i.Z)({variant:"h6"},t))},hr:function(e){var t=Object.assign({},e);return(0,h.jsx)(c.Z,(0,i.Z)({sx:{my:3}},t))},img:function(e){var t=Object.assign({},e);return(0,h.jsx)(d.Z,(0,i.Z)({alt:t.alt,ratio:"16/9",sx:{borderRadius:2,my:5}},t))},a:function(e){var t=Object.assign({},e);return t.href.includes("http")?(0,h.jsx)(u.Z,(0,i.Z)({target:"_blank",rel:"noopener"},t)):(0,h.jsx)(u.Z,(0,i.Z)({},t))}}},78770:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(1413),i=n(45987),a=n(10703),s=n(20890),o=n(80184),l=["searchQuery"];function c(e){var t=e.searchQuery,n=void 0===t?"":t,c=(0,i.Z)(e,l);return n?(0,o.jsxs)(a.Z,(0,r.Z)((0,r.Z)({},c),{},{children:[(0,o.jsx)(s.Z,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),(0,o.jsxs)(s.Z,{variant:"body2",align:"center",children:["No results found for \xa0",(0,o.jsxs)("strong",{children:['"',n,'"']}),". Try checking for typos or using complete words."]})]})):(0,o.jsx)(s.Z,{variant:"body2",children:" Please enter keywords"})}},42035:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(1413),i=n(45987),a=n(53767),s=n(80184),o=["icon","value","endIcon","sx"];function l(e){var t=e.icon,n=e.value,l=e.endIcon,c=void 0!==l&&l,u=e.sx,d=(0,i.Z)(e,o);return(0,s.jsxs)(a.Z,(0,r.Z)((0,r.Z)({direction:"row",alignItems:"center",sx:(0,r.Z)({typography:"body2"},u)},d),{},{children:[!c&&t,n,c&&t]}))}},26405:function(e,t,n){n.d(t,{Ge:function(){return W},Gg:function(){return ae},fV:function(){return le},bt:function(){return me},pi:function(){return we},_Y:function(){return ke},j6:function(){return We},x5:function(){return Ue},cO:function(){return Be}});var r=n(15861),i=n(29439),a=n(1413),s=n(87757),o=n.n(s),l=n(62797),c=n(72791),u=n(98246),d=n(16871),h=n(61265),p=n(61134),x=n(39709),m=n(47630),Z=n(20890),f=n(61889),v=n(57621),g=n(53767),j=n(94198),b=n(81918),y=n(27760),w=n(36151),k=n(38072),S=n(38077),C=n(26769),P=n.n(C),I=n(12065),z=n(97123),O=n(26445),R=n(64554),q=n(5977),_=n(27147),T=n(27578),L=n(62720),U=n(78199),A=n(80184);function B(e){var t,n=e.values,r=e.isValid,i=e.isSubmitting,a=e.isOpen,s=e.onClose,o=e.onSubmit,l=n.title,c=n.content,u=n.description,d=P()(n.cover)?n.cover:null===(t=n.cover)||void 0===t?void 0:t.preview,h=l||u||c||d,p=l||d;return(0,A.jsxs)(U.Kl,{fullScreen:!0,open:a,onClose:s,children:[(0,A.jsxs)(z.Z,{sx:{py:2,px:3},children:[(0,A.jsx)(Z.Z,{variant:"subtitle1",sx:{flexGrow:1},children:"Preview Post"}),(0,A.jsx)(w.Z,{onClick:s,children:"Cancel"}),(0,A.jsx)(x.Z,{type:"submit",variant:"contained",disabled:!r,loading:i,onClick:o,children:"Post"})]}),h?(0,A.jsxs)(T.Z,{children:[p&&(0,A.jsx)(F,{title:l||"",cover:d}),(0,A.jsx)(O.Z,{children:(0,A.jsxs)(R.Z,{sx:{mt:5,mb:10},children:[(0,A.jsx)(Z.Z,{variant:"h6",sx:{mb:5},children:u}),(0,A.jsx)(_.Z,{children:c||""})]})})]}):(0,A.jsx)(L.Z,{title:"Empty content"})]})}function F(e){var t=e.title,n=e.cover;return(0,A.jsxs)(R.Z,{sx:{position:"relative"},children:[(0,A.jsx)(O.Z,{sx:{top:0,left:0,right:0,zIndex:9,position:"absolute",color:"common.white",pt:{xs:3,lg:10}},children:(0,A.jsx)(Z.Z,{variant:"h2",component:"h1",children:t})}),(0,A.jsx)(R.Z,{sx:{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute",bgcolor:function(e){return(0,I.Fq)(e.palette.grey[900],.8)}}}),(0,A.jsx)(q.Z,{alt:"cover",src:n,ratio:"16/9"})]})}var D=["Toy Story 3","Logan","Full Metal Jacket","Dangal","The Sting","2001: A Space Odyssey","Singin' in the Rain","Toy Story","Bicycle Thieves","The Kid","Inglourious Basterds","Snatch","3 Idiots"],M=(0,m.ZP)(Z.Z)((function(e){var t=e.theme;return(0,a.Z)((0,a.Z)({},t.typography.subtitle2),{},{color:t.palette.text.secondary,marginBottom:t.spacing(1)})}));function W(){var e=(0,d.s0)(),t=(0,c.useState)(!1),n=(0,i.Z)(t,2),s=n[0],m=n[1],Z=(0,u.Ds)().enqueueSnackbar,C=function(){m(!1)},P=l.Ry().shape({title:l.Z_().required("Title is required"),description:l.Z_().required("Description is required"),content:l.Z_().min(1e3).required("Content is required"),cover:l.nK().required("Cover is required")}),I=(0,p.cI)({resolver:(0,h.X)(P),defaultValues:{title:"",description:"",content:"",cover:null,tags:["Logan"],publish:!0,comments:!0,metaTitle:"",metaDescription:"",metaKeywords:["Logan"]}}),z=I.reset,O=I.watch,R=I.control,q=I.setValue,_=I.handleSubmit,T=I.formState,L=T.isSubmitting,U=T.isValid,F=O(),W=function(){var t=(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:z(),C(),Z("Post success!"),e(k.vB.blog.posts),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),E=(0,c.useCallback)((function(e){var t=e[0];t&&q("cover",Object.assign(t,{preview:URL.createObjectURL(t)}))}),[q]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(S.RV,{methods:I,onSubmit:_(W),children:(0,A.jsxs)(f.ZP,{container:!0,spacing:3,children:[(0,A.jsx)(f.ZP,{item:!0,xs:12,md:8,children:(0,A.jsx)(v.Z,{sx:{p:3},children:(0,A.jsxs)(g.Z,{spacing:3,children:[(0,A.jsx)(S.au,{name:"title",label:"Post Title"}),(0,A.jsx)(S.au,{name:"description",label:"Description",multiline:!0,rows:3}),(0,A.jsxs)("div",{children:[(0,A.jsx)(M,{children:"Content"}),(0,A.jsx)(S.LM,{name:"content"})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(M,{children:"Cover"}),(0,A.jsx)(S.Uo,{name:"cover",accept:"image/*",maxSize:3145728,onDrop:E})]})]})})}),(0,A.jsxs)(f.ZP,{item:!0,xs:12,md:4,children:[(0,A.jsx)(v.Z,{sx:{p:3},children:(0,A.jsxs)(g.Z,{spacing:3,children:[(0,A.jsxs)("div",{children:[(0,A.jsx)(S._e,{name:"publish",label:"Publish",labelPlacement:"start",sx:{mb:1,mx:0,width:1,justifyContent:"space-between"}}),(0,A.jsx)(S._e,{name:"comments",label:"Enable comments",labelPlacement:"start",sx:{mx:0,width:1,justifyContent:"space-between"}})]}),(0,A.jsx)(p.Qr,{name:"tags",control:R,render:function(e){var t=e.field;return(0,A.jsx)(j.Z,{multiple:!0,freeSolo:!0,onChange:function(e,n){return t.onChange(n)},options:D.map((function(e){return e})),renderTags:function(e,t){return e.map((function(e,n){return(0,c.createElement)(b.Z,(0,a.Z)((0,a.Z)({},t({index:n})),{},{key:e,size:"small",label:e}))}))},renderInput:function(e){return(0,A.jsx)(y.Z,(0,a.Z)({label:"Tags"},e))}})}}),(0,A.jsx)(S.au,{name:"metaTitle",label:"Meta title"}),(0,A.jsx)(S.au,{name:"metaDescription",label:"Meta description",fullWidth:!0,multiline:!0,rows:3}),(0,A.jsx)(p.Qr,{name:"metaKeywords",control:R,render:function(e){var t=e.field;return(0,A.jsx)(j.Z,{multiple:!0,freeSolo:!0,onChange:function(e,n){return t.onChange(n)},options:D.map((function(e){return e})),renderTags:function(e,t){return e.map((function(e,n){return(0,c.createElement)(b.Z,(0,a.Z)((0,a.Z)({},t({index:n})),{},{key:e,size:"small",label:e}))}))},renderInput:function(e){return(0,A.jsx)(y.Z,(0,a.Z)({label:"Meta keywords"},e))}})}})]})}),(0,A.jsxs)(g.Z,{direction:"row",spacing:1.5,sx:{mt:3},children:[(0,A.jsx)(w.Z,{fullWidth:!0,color:"inherit",variant:"outlined",size:"large",onClick:function(){m(!0)},children:"Preview"}),(0,A.jsx)(x.Z,{fullWidth:!0,type:"submit",variant:"contained",size:"large",loading:L,children:"Post"})]})]})]})}),(0,A.jsx)(B,{values:F,isOpen:s,isValid:U,isSubmitting:L,onClose:C,onSubmit:_(W)})]})}var E=n(53305),V=n(43504),G=n(60220),K=n(39504),N=n(23060),H=n(53861),Q=n(96244),X=n(7870),J=n(53026),Y=n(45987),$=n(39450),ee=["asLink","variant","line","persistent","children","sx"],te=(0,c.forwardRef)((function(e,t){var n=e.asLink,r=e.variant,i=void 0===r?"body1":r,s=e.line,o=void 0===s?2:s,l=e.persistent,c=void 0!==l&&l,u=e.children,d=e.sx,h=(0,Y.Z)(e,ee),p=(0,$.ZP)(i).lineHeight,x=(0,a.Z)((0,a.Z)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:o,WebkitBoxOrient:"vertical"},c&&{height:p*o}),d);return n?(0,A.jsx)(N.Z,(0,a.Z)((0,a.Z)({color:"inherit",ref:t,variant:i,sx:(0,a.Z)({},x)},h),{},{children:u})):(0,A.jsx)(Z.Z,(0,a.Z)((0,a.Z)({ref:t,variant:i,sx:(0,a.Z)({},x)},h),{},{children:u}))})),ne=n(42035),re=n(37835),ie=(0,m.ZP)("div")((function(e){var t=e.theme;return{top:0,zIndex:1,width:"100%",height:"100%",position:"absolute",backgroundColor:(0,I.Fq)(t.palette.grey[900],.8)}}));function ae(e){var t=e.post,n=e.index,r=(0,H.Z)("up","md"),i=t.cover,a=t.title,s=t.view,o=t.comment,l=t.share,c=t.author,u=t.createdAt;return r&&(0===n||1===n||2===n)?(0,A.jsxs)(v.Z,{children:[(0,A.jsx)(G.Z,{alt:c.name,src:c.avatarUrl,sx:{zIndex:9,top:24,left:24,width:40,height:40,position:"absolute"}}),(0,A.jsx)(se,{title:a,view:s,comment:o,share:l,createdAt:u,index:n}),(0,A.jsx)(ie,{}),(0,A.jsx)(q.Z,{alt:"cover",src:i,sx:{height:360}})]}):(0,A.jsxs)(v.Z,{children:[(0,A.jsxs)(R.Z,{sx:{position:"relative"},children:[(0,A.jsx)(re.Z,{src:"https://minimal-assets-api.vercel.app/assets/icons/shape-avatar.svg",sx:{width:80,height:36,zIndex:9,bottom:-15,position:"absolute",color:"background.paper"}}),(0,A.jsx)(G.Z,{alt:c.name,src:c.avatarUrl,sx:{left:24,zIndex:9,width:32,height:32,bottom:-16,position:"absolute"}}),(0,A.jsx)(q.Z,{alt:"cover",src:i,ratio:"4/3"})]}),(0,A.jsx)(se,{title:a,view:s,comment:o,share:l,createdAt:u})]})}function se(e){var t=e.title,n=e.view,r=e.comment,i=e.share,s=e.createdAt,o=e.index,l=(0,H.Z)("up","md"),c=k.vB.blog.view((0,E.o)(t)),u=0===o,d=1===o||2===o,h=[{number:r,icon:"eva:message-circle-fill"},{number:n,icon:"eva:eye-fill"},{number:i,icon:"eva:share-fill"}];return(0,A.jsxs)(K.Z,{sx:(0,a.Z)({pt:4.5,width:1},(u||d)&&{pt:0,zIndex:9,bottom:0,position:"absolute",color:"common.white"}),children:[(0,A.jsx)(Z.Z,{gutterBottom:!0,variant:"caption",component:"div",sx:(0,a.Z)({color:"text.disabled"},(u||d)&&{opacity:.64,color:"common.white"}),children:(0,Q.Mu)(s)}),(0,A.jsx)(N.Z,{to:c,color:"inherit",component:V.rU,children:(0,A.jsx)(te,{variant:l&&u?"h5":"subtitle2",line:2,persistent:!0,children:t})}),(0,A.jsx)(g.Z,{flexWrap:"wrap",direction:"row",justifyContent:"flex-end",sx:(0,a.Z)({mt:3,color:"text.disabled"},(u||d)&&{opacity:.64,color:"common.white"}),children:h.map((function(e,t){return(0,A.jsx)(ne.Z,{icon:(0,A.jsx)(J.Z,{icon:e.icon,sx:{width:16,height:16,mr:.5}}),value:(0,X.v1)(e.number),sx:{typography:"caption",ml:0===t?0:1.5}},t)}))})]})}var oe=(0,m.ZP)("div")((function(e){var t=e.theme;return{padding:t.spacing(3),borderRadius:2*Number(t.shape.borderRadius),backgroundColor:t.palette.background.neutral}}));function le(){var e=l.Ry().shape({comment:l.Z_().required("Comment is required"),name:l.Z_().required("Name is required"),email:l.Z_().email("Email must be a valid email address").required("Email is required")}),t=(0,p.cI)({resolver:(0,h.X)(e),defaultValues:{comment:"",name:"",email:""}}),n=t.reset,i=t.handleSubmit,a=t.formState.isSubmitting,s=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:n(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return(0,A.jsxs)(oe,{children:[(0,A.jsx)(Z.Z,{variant:"subtitle1",sx:{mb:3},children:"Add Comment"}),(0,A.jsx)(S.RV,{methods:t,onSubmit:i(s),children:(0,A.jsxs)(g.Z,{spacing:3,alignItems:"flex-end",children:[(0,A.jsx)(S.au,{name:"comment",label:"Comment *",multiline:!0,rows:3}),(0,A.jsx)(S.au,{name:"name",label:"Name *"}),(0,A.jsx)(S.au,{name:"email",label:"Email *"}),(0,A.jsx)(x.Z,{type:"submit",variant:"contained",loading:a,children:"Post comment"})]})})]})}var ce=n(15021),ue=n(20653),de=n(49900),he=n(94721);function pe(e){var t=e.name,n=e.avatarUrl,r=e.message,s=e.tagUser,o=e.postedAt,l=e.hasReply,u=(0,c.useState)(!1),d=(0,i.Z)(u,2),h=d[0],p=d[1];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(ce.ZP,{disableGutters:!0,sx:(0,a.Z)({alignItems:"flex-start",py:3},l&&{ml:"auto",width:function(e){return"calc(100% - ".concat(e.spacing(7),")")}}),children:[(0,A.jsx)(ue.Z,{children:(0,A.jsx)(G.Z,{alt:t,src:n,sx:{width:48,height:48}})}),(0,A.jsx)(de.Z,{primary:t,primaryTypographyProps:{variant:"subtitle1"},secondary:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Z.Z,{gutterBottom:!0,variant:"caption",sx:{display:"block",color:"text.disabled"},children:(0,Q.Mu)(o)}),(0,A.jsxs)(Z.Z,{component:"span",variant:"body2",children:[(0,A.jsx)("strong",{children:s})," ",r]})]})}),!l&&(0,A.jsx)(w.Z,{size:"small",onClick:function(){p(!0)},sx:{position:"absolute",right:0},children:"Reply"})]}),!l&&h&&(0,A.jsx)(R.Z,{sx:{mb:3,ml:"auto",width:function(e){return"calc(100% - ".concat(e.spacing(7),")")}},children:(0,A.jsx)(y.Z,{fullWidth:!0,size:"small",placeholder:"Write comment",sx:{"& fieldset":{borderWidth:"1px !important",borderColor:function(e){return"".concat(e.palette.grey[50032]," !important")}}}})}),(0,A.jsx)(he.Z,{sx:{ml:"auto",width:function(e){return"calc(100% - ".concat(e.spacing(7),")")}}})]})}var xe=n(90493);function me(e){var t=e.post.comments;return(0,A.jsx)(xe.Z,{disablePadding:!0,children:t.map((function(e){var t=e.id,n=e.replyComment,r=e.users,i=n.length>0;return(0,A.jsxs)(R.Z,{sx:{},children:[(0,A.jsx)(pe,{name:e.name,avatarUrl:e.avatarUrl,postedAt:e.postedAt,message:e.message}),i&&n.map((function(e){var t=r.find((function(t){return t.id===e.userId}));return(0,A.jsx)(pe,{message:e.message,tagUser:e.tagUser,postedAt:e.postedAt,name:t.name,avatarUrl:t.avatarUrl,hasReply:!0},e.id)}))]},t)}))})}var Ze=n(4942),fe=n(84557),ve=n(62633),ge=[{name:"Facebook",icon:(0,A.jsx)(J.Z,{icon:"eva:facebook-fill",width:20,height:20,color:"#1877F2"})},{name:"Instagram",icon:(0,A.jsx)(J.Z,{icon:"ant-design:instagram-filled",width:20,height:20,color:"#D7336D"})},{name:"Linkedin",icon:(0,A.jsx)(J.Z,{icon:"eva:linkedin-fill",width:20,height:20,color:"#006097"})},{name:"Twitter",icon:(0,A.jsx)(J.Z,{icon:"eva:twitter-fill",width:20,height:20,color:"#1C9CEA"})}],je=(0,m.ZP)("h1")((function(e){var t=e.theme;return{top:0,right:0,bottom:0,left:0,zIndex:9,position:"absolute",backgroundColor:(0,I.Fq)(t.palette.grey[900],.72)}})),be=(0,m.ZP)("h1")((function(e){var t=e.theme;return(0,a.Z)((0,a.Z)({},t.typography.h2),{},(0,Ze.Z)({top:0,zIndex:10,width:"100%",position:"absolute",padding:t.spacing(3),color:t.palette.common.white},t.breakpoints.up("lg"),{padding:t.spacing(10)}))})),ye=(0,m.ZP)("div")((function(e){var t,n=e.theme;return t={bottom:0,zIndex:10,width:"100%",display:"flex",position:"absolute",alignItems:"flex-end",paddingLeft:n.spacing(3),paddingRight:n.spacing(2),paddingBottom:n.spacing(3),justifyContent:"space-between"},(0,Ze.Z)(t,n.breakpoints.up("sm"),{alignItems:"center",paddingRight:n.spacing(3)}),(0,Ze.Z)(t,n.breakpoints.up("lg"),{padding:n.spacing(10)}),t}));function we(e){var t=e.post,n=t.cover,r=t.title,i=t.author,a=t.createdAt,s=(0,H.Z)("up","sm");return(0,A.jsxs)(R.Z,{sx:{position:"relative"},children:[(0,A.jsx)(be,{children:r}),(0,A.jsxs)(ye,{children:[(0,A.jsxs)(R.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,A.jsx)(G.Z,{alt:i.name,src:i.avatarUrl,sx:{width:48,height:48}}),(0,A.jsxs)(R.Z,{sx:{ml:2},children:[(0,A.jsx)(Z.Z,{variant:"subtitle1",sx:{color:"common.white"},children:i.name}),(0,A.jsx)(Z.Z,{variant:"body2",sx:{color:"grey.500"},children:(0,Q.Mu)(a)})]})]}),(0,A.jsx)(fe.Z,{direction:s?"left":"up",ariaLabel:"Share post",icon:(0,A.jsx)(J.Z,{icon:"eva:share-fill",sx:{width:20,height:20}}),sx:{"& .MuiSpeedDial-fab":{width:48,height:48}},children:ge.map((function(e){return(0,A.jsx)(ve.Z,{icon:e.icon,tooltipTitle:e.name,tooltipPlacement:"top",FabProps:{color:"default"}},e.name)}))})]}),(0,A.jsx)(je,{}),(0,A.jsx)(q.Z,{alt:"post cover",src:n,ratio:"16/9"})]})}function ke(e){var t=e.posts;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Z.Z,{variant:"h4",sx:{mt:10,mb:5},children:"Recent posts"}),(0,A.jsx)(f.ZP,{container:!0,spacing:3,children:t.map((function(e){return(0,A.jsx)(f.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,A.jsx)(ae,{post:e})},e.id)}))})]})}var Se=n(34004),Ce=n.n(Se),Pe=n(79085),Ie=n.n(Pe),ze=n(95892),Oe=n(63466),Re=n(22175),qe=n(89731),_e=n(80645),Te=n(78770),Le=(0,m.ZP)((function(e){return(0,A.jsx)(ze.Z,(0,a.Z)({placement:"bottom-start"},e))}))({width:"280px !important"});function Ue(){var e=(0,d.s0)(),t=(0,Re.Z)(),n=(0,c.useState)(""),s=(0,i.Z)(n,2),l=s[0],u=s[1],h=(0,c.useState)([]),p=(0,i.Z)(h,2),x=p[0],m=p[1],f=function(){var e=(0,r.Z)(o().mark((function e(n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u(n),!n){e.next=7;break}return e.next=5,qe.Z.get("/api/blog/posts/search",{params:{query:n}});case 5:r=e.sent,t.current&&m(r.data.results);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(t){e(k.vB.blog.view((0,E.o)(t)))},g=function(e){"Enter"===e.key&&v(l)};return(0,A.jsx)(j.Z,{size:"small",autoHighlight:!0,popupIcon:null,PopperComponent:Le,options:x,onInputChange:function(e,t){return f(t)},getOptionLabel:function(e){return e.title},noOptionsText:(0,A.jsx)(Te.Z,{searchQuery:l}),isOptionEqualToValue:function(e,t){return e.id===t.id},renderInput:function(e){return(0,A.jsx)(_e.Z,(0,a.Z)((0,a.Z)({},e),{},{stretchStart:200,placeholder:"Search post...",onKeyUp:g,InputProps:(0,a.Z)((0,a.Z)({},e.InputProps),{},{startAdornment:(0,A.jsx)(Oe.Z,{position:"start",children:(0,A.jsx)(J.Z,{icon:"eva:search-fill",sx:{ml:1,width:20,height:20,color:"text.disabled"}})})})}))},renderOption:function(e,t,n){var r=n.inputValue,i=t.title,s=t.cover,o=Ie()(i,r),l=Ce()(i,o);return(0,A.jsxs)("li",(0,a.Z)((0,a.Z)({},e),{},{children:[(0,A.jsx)(q.Z,{alt:s,src:s,sx:{width:48,height:48,borderRadius:1,flexShrink:0,mr:1.5}}),(0,A.jsx)(N.Z,{underline:"none",onClick:function(){return v(i)},children:l.map((function(e,t){return(0,A.jsx)(Z.Z,{component:"span",variant:"subtitle2",color:e.highlight?"primary":"textPrimary",children:e.text},t)}))})]}))}})}var Ae=n(23786);function Be(e){var t=e.query,n=e.options,r=e.onSort;return(0,A.jsx)(y.Z,{select:!0,size:"small",value:t,onChange:function(e){return r(e.target.value)},children:n.map((function(e){return(0,A.jsx)(Ae.Z,{value:e.value,sx:{mx:1,my:.5,borderRadius:1},children:e.label},e.value)}))})}var Fe=n(85523),De=n(94454),Me=n(89861);function We(e){var t=e.post,n=t.favorite,r=t.tags,i=t.favoritePerson;return(0,A.jsxs)(R.Z,{sx:{py:3},children:[r.map((function(e){return(0,A.jsx)(b.Z,{label:e,sx:{m:.5}},e)})),(0,A.jsxs)(R.Z,{sx:{display:"flex",alignItems:"center",mt:3},children:[(0,A.jsx)(Fe.Z,{control:(0,A.jsx)(De.Z,{defaultChecked:!0,size:"small",color:"error",icon:(0,A.jsx)(J.Z,{icon:"eva:heart-fill"}),checkedIcon:(0,A.jsx)(J.Z,{icon:"eva:heart-fill"})}),label:(0,X.v1)(n)}),(0,A.jsx)(Me.Z,{max:4,sx:{"& .MuiAvatar-root":{width:32,height:32}},children:i.map((function(e){return(0,A.jsx)(G.Z,{alt:e.name,src:e.avatarUrl},e.name)}))})]})]})}}}]);
//# sourceMappingURL=1291.a330d0e7.chunk.js.map