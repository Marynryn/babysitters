"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[859],{2143:function(e,t,n){n(2791);t.Z=n.p+"static/media/symbol-defs.655dd4efcaaa696c59eed757047d665f.svg"},2609:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.children,n=e.onClick,s=e.type;return(0,r.jsx)("button",{type:s,onClick:n,className:" bg-teal-900  rounded-full ",style:{border:"solid 1px",borderColor:"rgba(251, 251, 251, 0.40)"},children:t})}},4859:function(e,t,n){n.d(t,{Z:function(){return q}});var r=n(9439),s=n(7689),a=n(1087),l=n(2104),i=n(2791),c=n(184),o=function(){var e=(0,s.TH)(),t=(0,i.useState)(""),n=(0,r.Z)(t,2),o=n[0],u=n[1];return(0,i.useEffect)((function(){u(e.pathname)}),[e]),(0,c.jsx)("nav",{className:"lg:items-center  text-center",children:(0,c.jsxs)("ul",{className:"block lg:h-10 lg:flex text-center mb-4 lg:mb-0 lg:justify-center  lg:items-center lg:mr-16 xl:mr-24",children:[(0,c.jsx)("li",{id:"1",className:"font-normal mb-3 lg:mb-0 text-base lg:mr-8 xl:mr-10 ",children:(0,c.jsx)(a.OL,{to:"/",children:"Home"})}),(0,c.jsx)("li",{id:"2",className:"font-normal text-base ".concat("/nannies"===o?' relative after:content-[" "] after:w-2 after:h-2 after:bg-white after:rounded-full after:top-6 after:right-6  after:absolute':""),children:(0,c.jsx)(a.OL,{to:"/nannies",children:"Nannies"})}),(0,c.jsxs)("li",{id:"3",className:"font-normal text-base lg:ml-8 ".concat("/favorites"===o?' relative after:content-[" "] after:w-2 after:h-2 after:bg-white after:rounded-full after:top-6 after:right-6  after:absolute':""),children:["  ",(0,l.r)()&&(0,c.jsx)(a.OL,{className:"",to:"/favorites",children:"Favorites"})]})]})})},u=function(){return(0,c.jsx)(o,{})},m=n(2143),d=n(3638),f=n(5861),h=n(4687),x=n.n(h),g=n(2609),p=n(4813),b=function(){var e=(0,l.r)(),t=function(){var e=(0,f.Z)(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.w7)(d.I8).then((function(){console.log("Log Out is successful")})).catch((function(e){console.error("Error",e)}));case 2:(0,l.r)();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.jsxs)("div",{className:"lg:flex  items-center text-center",children:[(0,c.jsxs)("div",{className:"hidden lg:flex",children:[(0,c.jsx)("div",{className:"w-10 h-10 bg-white rounded-xl flex items-center justify-center  ",children:(0,c.jsx)("svg",{className:"",width:16,height:16,children:(0,c.jsx)("use",{href:"".concat(m.Z,"#icon-avatar")})})}),(0,c.jsx)("p",{className:"ml-4 mr-6 flex items-center ",children:e.displayName})]}),(0,c.jsx)(g.Z,{type:"button",onClick:t,children:(0,c.jsx)("span",{className:"flex text-base",style:{padding:"14px 38px",height:"48px"},children:"Log Out"})})]})},j=n(5488),v=n(1413),w=n(1134),N=n(5218),y=n(6066),Z=n(4695),k=n(901),C=function(e){var t=e.type,n=e.onClose,r=(0,w.cI)({resolver:(0,Z.X)(k.Z)}),s=r.handleSubmit,a=r.formState.errors,l=r.handleSubmit(function(){var e=(0,f.Z)(x().mark((function e(r){var s,l,i,c,o;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(r),s=r.email,l=r.password,i=r.name,c=[],a&&Object.values(a).forEach((function(e){e.message&&c.push(e.message)})),e.prev=4,!(c.length>0)){e.next=9;break}c.forEach((function(e){return N.Am.error(e)})),e.next=22;break;case 9:if("login"!==t){e.next=14;break}return e.next=12,(0,p.e5)(d.I8,s,l);case 12:e.next=21;break;case 14:return e.next=16,(0,p.Xb)(d.I8,s,l);case 16:if(o=e.sent,console.log(o),!i){e.next=21;break}return e.next=21,(0,p.ck)(o.user,{displayName:i});case 21:n();case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(4),N.Am.error(e.t0.message);case 27:case"end":return e.stop()}}),e,null,[[4,24]])})));return function(t){return e.apply(this,arguments)}}()),i=Object.values(a).map((function(e){return e.message}));return i.length>0&&i.map((function(e,t){return N.Am.error(e)})),(0,c.jsx)(w.RV,(0,v.Z)((0,v.Z)({},r),{},{children:(0,c.jsxs)("form",{onSubmit:s(l),className:"block gap-10",children:[(0,c.jsx)("p",{className:"mb-5 text-4xl font-medium",children:"".concat("register"===t?"Registration":"Log In")}),(0,c.jsxs)("p",{className:"mb-10 text-s font-base",style:{color:"rgba(17, 16, 28, 0.50)"},children:["".concat("register"===t?"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.":"Welcome back! Please enter your credentials to access your account and continue your babysitter search."),"   "]}),(0,c.jsxs)("div",{className:"w-full relative",children:["register"===t&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(y.Z,{name:"name",placeholder:"Name"})}),(0,c.jsx)(y.Z,{name:"email",placeholder:"Email"}),(0,c.jsx)(y.Z,{name:"password",placeholder:"Password"})]}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{className:" bg-teal-900  border  border-stone-200 rounded-full w-full py-3 text-center mt-8",type:"submit",children:(0,c.jsx)("span",{className:"text-white",children:"".concat("login"===t?"Log In":"Sign Up")})})})]})}))},A=function(){var e=(0,i.useState)(!1),t=(0,r.Z)(e,2),n=t[0],s=t[1],a=(0,i.useState)(""),l=(0,r.Z)(a,2),o=l[0],u=l[1],m=function(e){u(e),s(!n)};return(0,c.jsxs)("div",{children:[(0,c.jsxs)("ul",{className:"lg:flex  lg:items-center justify-center lg:justify-between ",children:[(0,c.jsx)("li",{className:" mb-4 lg:mb-0 lg:mr-4",children:(0,c.jsx)("button",{className:"border  border-stone-200 rounded-full ",type:"button",onClick:function(){return m("login")},children:(0,c.jsx)("span",{className:"bg-transparent flex px-6 py-2 text-base lg:px-10",children:"Log In"})})},"login"),(0,c.jsx)("li",{children:(0,c.jsx)(g.Z,{type:"button",onClick:function(){return m("register")},children:(0,c.jsx)("span",{className:" flex px-6 py-2 text-base lg:px-10",children:"Registration"})})},"register")]}),(0,c.jsx)(j.Z,{isOpen:n,onClose:s,children:(0,c.jsx)(C,{type:o,onClose:s})})]})},E=n(4164),_=function(e){var t=e.isOpen,n=e.onClose,r=e.isLog,s=(0,i.useCallback)((function(){n(!1)}),[n]);return(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&s()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[s]),t?E.createPortal((0,c.jsxs)("div",{className:"fixed inset-0  flex justify-center items-center lg:hidden",onClick:function(e){e.currentTarget===e.target&&s()},children:[(0,c.jsx)("div",{className:"fixed inset-0 bg-black opacity-50"}),(0,c.jsxs)("div",{className:"absolute right-0 top-0 h-full bg-teal-900 text-white w-80 shadow-lg p-4",children:[(0,c.jsx)("button",{type:"button",className:" flex mr-0 ml-auto  ",onClick:s,children:(0,c.jsx)("svg",{className:"w-4 h-4 fill-white",children:(0,c.jsx)("use",{href:"".concat(m.Z,"#icon-x"),width:16,height:16})})}),(0,c.jsxs)("div",{className:"text-center mt-24",children:[(0,c.jsx)(u,{}),r?(0,c.jsx)(b,{}):(0,c.jsx)(A,{})]})]})]}),document.getElementById("modal-root")):null},q=function(){var e=(0,i.useState)(!1),t=(0,r.Z)(e,2),n=t[0],s=t[1],a=(0,i.useState)((0,l.r)()),o=(0,r.Z)(a,2),f=o[0],h=o[1];return(0,i.useEffect)((function(){return d.I8.onAuthStateChanged((function(e){h(!!e)}))}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:" flex m:flex-wrap  m:justify-between items-center gap-4",children:[(0,c.jsx)("p",{className:"font-medium text-2xl flex items-start ",children:"Nanny.Services"}),(0,c.jsx)("div",{className:"mr-0 ml-auto lg:hidden w-6 h-6",children:(0,c.jsx)("button",{type:"button",onClick:function(){s(!n)},children:(0,c.jsx)("svg",{className:" stroke-white",width:24,height:24,children:(0,c.jsx)("use",{href:"".concat(m.Z,"#icon-menu-hamburger")})})})}),(0,c.jsxs)("div",{className:"hidden lg:flex lg:flex-wrap items-center lg:justify-between gap-4",children:[(0,c.jsx)(u,{}),f?(0,c.jsx)(b,{}):(0,c.jsx)(A,{})]})]}),(0,c.jsx)(_,{isOpen:n,onClose:s,isLog:f})]})}},6066:function(e,t,n){var r=n(1413),s=(n(2791),n(1134)),a=n(184);t.Z=function(e){var t=e.name,n=e.placeholder,l=(0,s.Gc)().register;return(0,a.jsx)("div",{className:"border border-border-gray w-full h-12 mb-4 flex items-center rounded-xl relative",children:(0,a.jsx)("input",(0,r.Z)((0,r.Z)({className:" bg-white pl-4 focus:border-teal-900 w-full h-full rounded-xl placeholder-black text-base font-normal text-black",type:"text"},l(t)),{},{placeholder:n}))})}},5488:function(e,t,n){var r=n(2791),s=n(2143),a=n(4164),l=n(184);t.Z=function(e){var t=e.isOpen,n=e.onClose,i=e.children,c=(0,r.useCallback)((function(){n(!1)}),[n]);return(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&c()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[c]),t?a.createPortal((0,l.jsx)("div",{className:"h-full w-full fixed bg-slate-600 z-99 top-0 left-0",onClick:function(e){e.currentTarget===e.target&&c()},children:(0,l.jsxs)("div",{className:"top-2/4 left-1/2 relative  absolute z-70 bg-white rounded-2xl -translate-x-1/2 -translate-y-2/4 w-72 p-10 pt-12 m:w-96 m:p-10 lg:w-5/12 lg:p-12  xl:p-16",children:[(0,l.jsx)("button",{type:"button",className:" flex mr-0 ml-auto absolute top-4 right-4",onClick:c,children:(0,l.jsx)("svg",{className:"w-8 h-8   ",children:(0,l.jsx)("use",{href:"".concat(s.Z,"#icon-x"),width:32,height:32})})}),i]})}),document.getElementById("modal-root")):null}},901:function(e,t,n){n.d(t,{Z:function(){return s},f:function(){return a}});var r=n(8007),s=r.Ry({name:r.Z_().trim().min(2,"Name must be at least 2 characters").max(32,"Name must be no more than 32 characters").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9\s]*$/,"Name can only contain letters, numbers, and spaces"),email:r.Z_().trim().email().required("Email is required").matches(/^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,"Invalid email format"),password:r.Z_().trim().required("Password is required").matches(/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*()-_=+[\]{}|;:',.<>?/~`]+$/,"Invalid password format").min(6,"Password must be at least 8 characters").max(64,"Password must be no more than 64 characters").test("no-spaces","Password cannot contain spaces",(function(e){return!/\s/.test(e)}))}),a=r.Ry().shape({address:r.Z_().required("Address is required"),phone:r.Z_().matches(/^[0-9]{5,15}$/,"Phone number must be between 5 and 15 digits").required("Phone is required"),age:r.Rx().min(1,"Age must be at least 1").max(18,"Age must be less than 100").required("Age is required"),email:r.Z_().email().required("Email is required").matches(/^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,"Invalid email format"),name:r.Z_().required().trim().min(2,"Name must be at least 2 characters").max(32,"Name must be no more than 32 characters").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9\s]*$/,"Name can only contain letters, numbers, and spaces"),comment:r.Z_(),meetingTime:r.Ry().required("please, choose a meeting")})}}]);
//# sourceMappingURL=859.076204ff.chunk.js.map