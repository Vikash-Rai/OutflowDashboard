"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[5576],{18456:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(1413),i=n(45987),o=n(26769),a=n.n(o),c=n(64554),l=n(20890),s=n(23060),d=n(43504),u=n(93517),f=n(80184),h=["links","activeLast"];function p(e){var t=e.links,n=e.activeLast,o=void 0!==n&&n,a=(0,i.Z)(e,h),s=t[t.length-1].name,d=t.map((function(e){return(0,f.jsx)(x,{link:e},e.name)})),p=t.map((function(e){return(0,f.jsx)("div",{children:e.name!==s?(0,f.jsx)(x,{link:e}):(0,f.jsx)(l.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:s})},e.name)}));return(0,f.jsx)(u.Z,(0,r.Z)((0,r.Z)({separator:(0,f.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a),{},{children:o?d:p}))}function x(e){var t=e.link,n=t.href,r=t.name,i=t.icon;return(0,f.jsxs)(s.Z,{variant:"body2",component:d.rU,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&(0,f.jsx)(c.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),r]},r)}var v=["links","action","heading","moreLink","sx"];function g(e){var t=e.links,n=e.action,o=e.heading,d=e.moreLink,u=void 0===d?[]:d,h=e.sx,x=(0,i.Z)(e,v);return(0,f.jsxs)(c.Z,{sx:(0,r.Z)({mb:5},h),children:[(0,f.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,f.jsxs)(c.Z,{sx:{flexGrow:1},children:[(0,f.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,f.jsx)(p,(0,r.Z)({links:t},x))]}),n&&(0,f.jsx)(c.Z,{sx:{flexShrink:0},children:n})]}),(0,f.jsx)(c.Z,{sx:{mt:2},children:a()(u)?(0,f.jsx)(s.Z,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return(0,f.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},62196:function(e,t,n){n.d(t,{dS:function(){return g},ZQ:function(){return d},tR:function(){return w}});var r=n(47630),i=n(12065),o=n(64554),a=n(20890),c=n(80184),l=(0,r.ZP)(o.Z)((function(){return{display:"flex",alignItems:"center",justifyContent:"flex-end"}})),s=(0,r.ZP)("div")((function(e){var t=e.theme;return{marginLeft:-4,borderRadius:"50%",width:t.spacing(2),height:t.spacing(2),border:"solid 2px ".concat(t.palette.background.paper),boxShadow:"inset -1px 1px 2px ".concat((0,i.Fq)(t.palette.common.black,.24))}}));function d(e){var t=e.colors,n=e.limit,r=void 0===n?3:n,i=e.sx,o=t.slice(0,r),d=t.length-r;return(0,c.jsxs)(l,{component:"span",sx:i,children:[o.map((function(e,t){return(0,c.jsx)(s,{sx:{bgcolor:e}},e+t)})),t.length>r&&(0,c.jsx)(a.Z,{variant:"subtitle2",children:"+".concat(d)})]})}var u=n(1413),f=n(45987),h=n(94454),p=n(53026),x=["colors","onChangeColor","sx"],v=["sx"];function g(e){var t=e.colors,n=e.onChangeColor,r=e.sx,i=(0,f.Z)(e,x);return(0,c.jsx)(o.Z,{sx:r,children:t.map((function(e){var t="#FFFFFF"===e||"white"===e;return(0,c.jsx)(h.Z,(0,u.Z)({size:"small",value:e,color:"default",onChange:function(){return n(e)},icon:(0,c.jsx)(m,{sx:(0,u.Z)({},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)}})}),checkedIcon:(0,c.jsx)(m,{sx:(0,u.Z)({transform:"scale(1.4)","&:before":{opacity:.48,width:"100%",content:"''",height:"100%",borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"},"& svg":{width:12,height:12,color:"common.white"}},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat(e.palette.grey[50024])},"& svg":{width:12,height:12,color:"common.black"}})}),sx:{color:e,"&:hover":{opacity:.72}}},i),e)}))})}function m(e){var t=e.sx,n=(0,f.Z)(e,v);return(0,c.jsx)(o.Z,(0,u.Z)((0,u.Z)({sx:(0,u.Z)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},t)},n),{},{children:(0,c.jsx)(p.Z,{icon:"eva:checkmark-fill"})}))}var y=n(88970),Z=n(1503),b=["colors"];function w(e){var t=e.colors,n=(0,f.Z)(e,b);return(0,c.jsx)(y.Z,(0,u.Z)((0,u.Z)({row:!0},n),{},{children:t.map((function(e){var t="#FFFFFF"===e||"white"===e;return(0,c.jsx)(Z.Z,{value:e,color:"default",icon:(0,c.jsx)(j,{sx:(0,u.Z)({},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)}})}),checkedIcon:(0,c.jsx)(j,{sx:(0,u.Z)({transform:"scale(1.4)","&:before":{opacity:.48,width:"100%",content:"''",height:"100%",borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"},"& svg":{width:12,height:12,color:"common.white"}},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat(e.palette.grey[50024])},"& svg":{width:12,height:12,color:"common.black"}})}),sx:{color:e,"&:hover":{opacity:.72}}},e)}))}))}function j(e){var t=e.sx;return(0,c.jsx)(o.Z,{sx:(0,u.Z)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},t),children:(0,c.jsx)(p.Z,{icon:"eva:checkmark-fill"})})}},75576:function(e,t,n){n.r(t),n.d(t,{default:function(){return ae}});var r=n(15861),i=n(29439),o=n(87757),a=n.n(o),c=n(27805),l=n(53584),s=n(85747),d=n(95999),u=n(5595),f=n(68476),h=n(72791),p=n(26445),x=n(36151),v=n(57621),g=n(65661),m=n(20647),y=n(60466),Z=n(38072),b=n(85703),w=n(53861),j=n(25212),k=n(53026),C=n(78199),D=n(18456),F=n(1413),S=n(62797),R=n(79286),I=n.n(R),M=n(39579),A=n(98246),_=n(61134),E=n(61265),W=n(53767),P=n(27760),z=n(97123),L=n(20068),T=n(13400),B=n(64554),G=n(27451),V=n(39709),q=n(62196),O=n(38077),Q=n(80184),J=["#00AB55","#1890FF","#54D62C","#FFC107","#FF4842","#04297A","#7A0C2E"],N=function(e,t){var n={title:"",description:"",textColor:"#1890FF",allDay:!1,start:t?new Date(t.start):new Date,end:t?new Date(t.end):new Date};return e||t?I()({},n,e):n};function H(e){var t=e.event,n=e.range,i=e.onCancel,o=(0,A.Ds)().enqueueSnackbar,c=(0,m.I0)(),l=0===Object.keys(t).length,s=S.Ry().shape({title:S.Z_().max(255).required("Title is required"),description:S.Z_().max(5e3)}),d=(0,_.cI)({resolver:(0,E.X)(s),defaultValues:N(t,n)}),u=d.reset,f=d.watch,h=d.control,p=d.handleSubmit,v=d.formState.isSubmitting,g=function(){var e=(0,r.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{r={title:n.title,description:n.description,textColor:n.textColor,allDay:n.allDay,start:n.start,end:n.end},t.id?(c((0,y.eJ)(t.id,r)),o("Update success!")):(o("Create success!"),c((0,y.yM)(r))),i(),u()}catch(a){console.error(a)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id){e.next=2;break}return e.abrupt("return");case 2:try{i(),c((0,y.Bt)(t.id)),o("Delete success!")}catch(n){console.error(n)}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=f(),w=(0,M.Z)(new Date(b.end),new Date(b.start));return(0,Q.jsxs)(O.RV,{methods:d,onSubmit:p(g),children:[(0,Q.jsxs)(W.Z,{spacing:3,sx:{p:3},children:[(0,Q.jsx)(O.au,{name:"title",label:"Title"}),(0,Q.jsx)(O.au,{name:"description",label:"Description",multiline:!0,rows:4}),(0,Q.jsx)(O._e,{name:"allDay",label:"All day"}),(0,Q.jsx)(_.Qr,{name:"start",control:h,render:function(e){var t=e.field;return(0,Q.jsx)(G.Z,(0,F.Z)((0,F.Z)({},t),{},{label:"Start date",inputFormat:"dd/MM/yyyy hh:mm a",renderInput:function(e){return(0,Q.jsx)(P.Z,(0,F.Z)((0,F.Z)({},e),{},{fullWidth:!0}))}}))}}),(0,Q.jsx)(_.Qr,{name:"end",control:h,render:function(e){var t=e.field;return(0,Q.jsx)(G.Z,(0,F.Z)((0,F.Z)({},t),{},{label:"End date",inputFormat:"dd/MM/yyyy hh:mm a",renderInput:function(e){return(0,Q.jsx)(P.Z,(0,F.Z)((0,F.Z)({},e),{},{fullWidth:!0,error:!!w,helperText:w&&"End date must be later than start date"}))}}))}}),(0,Q.jsx)(_.Qr,{name:"textColor",control:h,render:function(e){var t=e.field;return(0,Q.jsx)(q.tR,{value:t.value,onChange:t.onChange,colors:J})}})]}),(0,Q.jsxs)(z.Z,{children:[!l&&(0,Q.jsx)(L.Z,{title:"Delete Event",children:(0,Q.jsx)(T.Z,{onClick:Z,children:(0,Q.jsx)(k.Z,{icon:"eva:trash-2-outline",width:20,height:20})})}),(0,Q.jsx)(B.Z,{sx:{flexGrow:1}}),(0,Q.jsx)(x.Z,{variant:"outlined",color:"inherit",onClick:i,children:"Cancel"}),(0,Q.jsx)(V.Z,{type:"submit",variant:"contained",loading:v,children:"Add"})]})]})}var U=n(47630),K=n(12065),X=(0,U.ZP)("div")((function(e){var t=e.theme;return{width:"calc(100% + 2px)",marginLeft:-1,marginBottom:-1,"& .fc":{"--fc-list-event-dot-width":"8px","--fc-border-color":t.palette.divider,"--fc-event-border-color":t.palette.info.light,"--fc-now-indicator-color":t.palette.error.main,"--fc-today-bg-color":t.palette.action.selected,"--fc-page-bg-color":t.palette.background.default,"--fc-neutral-bg-color":t.palette.background.neutral,"--fc-list-event-hover-bg-color":t.palette.action.hover,"--fc-highlight-color":(0,K.Fq)(t.palette.primary.main,.08)},"& .fc .fc-license-message":{display:"none"},"& .fc a":{color:t.palette.text.primary},"& .fc .fc-col-header ":{boxShadow:"inset 0 -1px 0 ".concat(t.palette.divider),"& th":{borderColor:"transparent"},"& .fc-col-header-cell-cushion":(0,F.Z)((0,F.Z)({},t.typography.subtitle2),{},{padding:"13px 0"})},"& .fc .fc-event":{borderColor:"transparent",backgroundColor:"transparent"},"& .fc .fc-event .fc-event-main":{padding:"2px 4px",borderRadius:4,backgroundColor:t.palette.common.white,transition:t.transitions.create("filter"),"&:hover":{filter:"brightness(0.92)"},"&:before,&:after":{top:0,left:0,width:"100%",height:"100%",content:"''",borderRadius:4,position:"absolute",boxSizing:"border-box"},"&:before":{zIndex:8,opacity:.32,border:"solid 1px currentColor"},"&:after":{zIndex:7,opacity:.24,backgroundColor:"currentColor"}},"& .fc .fc-event .fc-event-main-frame":{fontSize:13,lineHeight:"20px",filter:"brightness(0.24)"},"& .fc .fc-daygrid-event .fc-event-title":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},"& .fc .fc-event .fc-event-time":{padding:0,overflow:"unset",fontWeight:t.typography.fontWeightBold},"& .fc .fc-popover":{border:0,overflow:"hidden",boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper},"& .fc .fc-popover-header":(0,F.Z)((0,F.Z)({},t.typography.subtitle2),{},{padding:t.spacing(1),backgroundColor:t.palette.grey[50012],borderBottom:"solid 1px ".concat(t.palette.divider)}),"& .fc .fc-popover-close":{opacity:.48,transition:t.transitions.create("opacity"),"&:hover":{opacity:1}},"& .fc .fc-more-popover .fc-popover-body":{padding:t.spacing(1.5)},"& .fc .fc-popover-body":{"& .fc-daygrid-event.fc-event-start, & .fc-daygrid-event.fc-event-end":{margin:"2px 0"}},"& .fc .fc-day-other .fc-daygrid-day-top":{opacity:1,"& .fc-daygrid-day-number":{color:t.palette.text.disabled}},"& .fc .fc-daygrid-day-number":(0,F.Z)((0,F.Z)({},t.typography.body2),{},{padding:t.spacing(1,1,0)}),"& .fc .fc-daygrid-event":{marginTop:4},"& .fc .fc-daygrid-event.fc-event-start, & .fc .fc-daygrid-event.fc-event-end":{marginLeft:4,marginRight:4},"& .fc .fc-daygrid-more-link":(0,F.Z)((0,F.Z)({},t.typography.caption),{},{color:t.palette.text.secondary}),"& .fc .fc-timegrid-axis-cushion":(0,F.Z)((0,F.Z)({},t.typography.body2),{},{color:t.palette.text.secondary}),"& .fc .fc-timegrid-slot-label-cushion":(0,F.Z)({},t.typography.body2),"& .fc-direction-ltr .fc-list-day-text, .fc-direction-rtl .fc-list-day-side-text, .fc-direction-ltr .fc-list-day-side-text, .fc-direction-rtl .fc-list-day-text":(0,F.Z)({},t.typography.subtitle2),"& .fc .fc-list-event":(0,F.Z)((0,F.Z)({},t.typography.body2),{},{"& .fc-list-event-time":{color:t.palette.text.secondary}}),"& .fc .fc-list-table":{"& th, td":{borderColor:"transparent"}}}})),Y=n(4942),$=n(90388),ee=n(20890),te=n(96244),ne=[{value:"dayGridMonth",label:"Month",icon:"ic:round-view-module"},{value:"timeGridWeek",label:"Week",icon:"ic:round-view-week"},{value:"timeGridDay",label:"Day",icon:"ic:round-view-day"},{value:"listWeek",label:"Agenda",icon:"ic:round-view-agenda"}],re=(0,U.ZP)("div")((function(e){var t=e.theme;return(0,Y.Z)({display:"flex",alignItems:"center",flexDirection:"column",padding:t.spacing(2.5)},t.breakpoints.up("sm"),{flexDirection:"row",justifyContent:"space-between"})}));function ie(e){var t=e.date,n=e.view,r=e.onToday,i=e.onNextDate,o=e.onPrevDate,a=e.onChangeView,c=(0,w.Z)("up","sm");return(0,Q.jsxs)(re,{children:[c&&(0,Q.jsx)(W.Z,{direction:"row",spacing:.5,children:ne.map((function(e){return(0,Q.jsx)(L.Z,{title:e.label,children:(0,Q.jsx)($.Z,{value:n,selected:e.value===n,onChange:function(){return a(e.value)},sx:{width:32,height:32,padding:0,border:0},children:(0,Q.jsx)(k.Z,{icon:e.icon,width:20,height:20})})},e.value)}))}),(0,Q.jsxs)(W.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,Q.jsx)(T.Z,{onClick:o,children:(0,Q.jsx)(k.Z,{icon:"eva:arrow-ios-back-fill",width:20,height:20})}),(0,Q.jsx)(ee.Z,{variant:"h5",children:(0,te.Mu)(t)}),(0,Q.jsx)(T.Z,{onClick:i,children:(0,Q.jsx)(k.Z,{icon:"eva:arrow-ios-forward-fill",width:20,height:20})})]}),c&&(0,Q.jsx)(x.Z,{size:"small",color:"error",variant:"contained",onClick:r,children:"Today"})]})}var oe=function(e){var t=e.calendar,n=t.events,r=t.selectedEventId;return r?n.find((function(e){return e.id===r})):null};function ae(){var e=(0,b.Z)().themeStretch,t=(0,m.I0)(),n=(0,w.Z)("up","sm"),o=(0,h.useRef)(null),F=(0,h.useState)(new Date),S=(0,i.Z)(F,2),R=S[0],I=S[1],M=(0,h.useState)(n?"dayGridMonth":"listWeek"),A=(0,i.Z)(M,2),_=A[0],E=A[1],W=(0,m.v9)(oe),P=(0,m.v9)((function(e){return e.calendar})),z=P.events,L=P.isOpenModal,T=P.selectedRange;(0,h.useEffect)((function(){t((0,y.vw)())}),[t]),(0,h.useEffect)((function(){var e=o.current;if(e){var t=e.getApi(),r=n?"dayGridMonth":"listWeek";t.changeView(r),E(r)}}),[n]);var B=function(){var e=(0,r.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.event;try{t((0,y.eJ)(r.id,{allDay:r.allDay,start:r.start,end:r.end}))}catch(i){console.error(i)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=(0,r.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.event;try{t((0,y.eJ)(r.id,{allDay:r.allDay,start:r.start,end:r.end}))}catch(i){console.error(i)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){t((0,y.Mr)())};return(0,Q.jsx)(j.Z,{title:"Calendar",children:(0,Q.jsxs)(p.Z,{maxWidth:!e&&"xl",children:[(0,Q.jsx)(D.Z,{heading:"Calendar",links:[{name:"Dashboard",href:Z.vB.root},{name:"Calendar"}],moreLink:"https://fullcalendar.io/docs/react",action:(0,Q.jsx)(x.Z,{variant:"contained",startIcon:(0,Q.jsx)(k.Z,{icon:"eva:plus-fill",width:20,height:20}),onClick:function(){t((0,y.h7)())},children:"New Event"})}),(0,Q.jsx)(v.Z,{children:(0,Q.jsxs)(X,{children:[(0,Q.jsx)(ie,{date:R,view:_,onNextDate:function(){var e=o.current;if(e){var t=e.getApi();t.next(),I(t.getDate())}},onPrevDate:function(){var e=o.current;if(e){var t=e.getApi();t.prev(),I(t.getDate())}},onToday:function(){var e=o.current;if(e){var t=e.getApi();t.today(),I(t.getDate())}},onChangeView:function(e){var t=o.current;t&&(t.getApi().changeView(e),E(e))}}),(0,Q.jsx)(c.ZPm,{weekends:!0,editable:!0,droppable:!0,selectable:!0,events:z,ref:o,rerenderDelay:10,initialDate:R,initialView:_,dayMaxEventRows:3,eventDisplay:"block",headerToolbar:!1,allDayMaintainDuration:!0,eventResizableFromStart:!0,select:function(e){var n=o.current;n&&n.getApi().unselect();t((0,y.jh)(e.start,e.end))},eventDrop:G,eventClick:function(e){t((0,y.lz)(e.event.id))},eventResize:B,height:n?720:"auto",plugins:[l.Z,s.ZP,u.ZP,d.ZP,f.ZP]})]})}),(0,Q.jsxs)(C.Kl,{open:L,onClose:V,children:[(0,Q.jsx)(g.Z,{children:W?"Edit Event":"Add Event"}),(0,Q.jsx)(H,{event:W||{},range:T,onCancel:V})]})]})})}}}]);
//# sourceMappingURL=5576.3e7fa6ef.chunk.js.map