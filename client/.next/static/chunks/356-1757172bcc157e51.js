"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{6893:function(e,t,n){n.d(t,{e:function(){return x}});var a=n(5893),c=n(7294),r=n(8102),s=function(e){var t=e.className,n=e.message,c=e.date;return(0,a.jsxs)("div",{className:"p-4 rounded w-message self-start flex flex-col ".concat(r.r.textColor," ").concat(r.r.incomingMessage," ").concat(t),children:[(0,a.jsx)("p",{className:"font-bold text-lg mb-2",children:n.from.name}),(0,a.jsx)("p",{className:"mb-1 whitespace-pre-wrap",children:n.message}),(0,a.jsx)("p",{className:"text-xs self-end ".concat(r.r.textColor),children:c.toLocaleString()})]})},o=function(e){var t=e.className,n=e.message,c=e.date;return(0,a.jsxs)("div",{className:"p-4 rounded w-message self-end flex flex-col ".concat(r.r.textColor," ").concat(r.r.outgoingMessage," ").concat(t),children:[(0,a.jsx)("p",{className:"font-bold text-lg mb-2",children:n.from.name}),(0,a.jsx)("p",{className:"mb-1 whitespace-pre-wrap",children:n.message}),(0,a.jsx)("p",{className:"text-xs self-end ".concat(r.r.textColorLabel),children:c.toLocaleString()})]})},l=n(7607),i=n(8058),u=function(e){var t=e.className,n=e.isPublic,r=(0,c.useContext)(i.p).chatState,u=(0,c.useContext)(l.V).uid,d=n?r.publicMessages:r.messages;return(0,a.jsx)("div",{id:"messages",className:"p-4 flex flex-col gap-4 overflow-y-scroll pb-40 ".concat(t),children:d.map((function(e){return e.from.uid===u?(0,a.jsx)(o,{message:e,date:new Date(e.createdAt)},e._id):(0,a.jsx)(s,{message:e,date:new Date(e.createdAt)},e._id)}))})},d=n(2851),m=n(2610),f=function(e){var t=e.className,n=e.isPublic,s=(0,d.c)({message:""}),o=s.message,u=s.onChange,f=s.setFormValues,x=(0,c.useContext)(l.V),h=x.uid,v=x.name,p=(0,c.useContext)(m.J).socket,b=(0,c.useContext)(i.p).chatState;return(0,a.jsxs)("form",{onSubmit:function(e){var t,a;(e.preventDefault(),0!==o.trim().length)&&(f({message:""}),n?null===p||void 0===p||p.emit("public-message",{from:{name:v,uid:h},chat:null===(t=b.publicActiveChat)||void 0===t?void 0:t.uid,message:o}):null===p||void 0===p||p.emit("private-message",{from:{name:v,uid:h},to:null===(a=b.activeChat)||void 0===a?void 0:a.uid,message:o}))},className:"border-t-4 w-full h-40 p-4 flex gap-2 ".concat(r.r.borderColor," ").concat(t),children:[(0,a.jsx)("textarea",{name:"message",value:o,onChange:u,placeholder:"Mensaje...",className:"w-full h-full rounded-lg p-2 font-semibold resize-none ".concat(r.r.input," ").concat(r.r.textColor)}),(0,a.jsx)("button",{type:"submit",className:"flex self-end rounded p-2 font-bold h-10 ".concat(r.r.buttonPrimary),children:(0,a.jsx)("p",{children:"Enviar"})})]})},x=function(e){var t=e.className,n=e.name,c=e.isPublic,s=void 0!==c&&c;return(0,a.jsxs)("div",{className:"flex flex-col flex-1 ".concat(t),children:[(0,a.jsx)("h2",{className:"text-2xl sm:text-3xl font-bold my-5 ml-20 ".concat(r.r.textColor),children:n}),(0,a.jsx)(u,{isPublic:s,className:"flex-1"}),(0,a.jsx)(f,{isPublic:s})]})}},1718:function(e,t,n){n.d(t,{r:function(){return r}});var a=n(5893),c=n(8102),r=function(e){var t=e.className;return(0,a.jsx)("div",{className:"grid place-content-center w-full ".concat(t),children:(0,a.jsx)("h2",{className:"text-2xl font-bold ".concat(c.r.textColor),children:"Seleccione un Chat"})})}},5648:function(e,t,n){n.d(t,{n:function(){return N}});var a=n(5893),c=n(8716),r=n(2362),s=n(2851),o=n(2610),l=n(8102),i=n(7294),u=n(8216),d=function(e){var t=e.className,n=e.isOpen,c=e.onClick;return(0,a.jsx)("button",{onClick:c,className:"px-4 items-center ".concat(l.r.buttonPrimary," ").concat(t),children:(0,a.jsx)(u.J,{className:"h-8",icon:n?"arrowLeft":"arrowRight"})})},m=n(4051),f=n.n(m),x=n(1167),h=n(5685),v=n(8058);function p(e,t,n,a,c,r,s){try{var o=e[r](s),l=o.value}catch(i){return void n(i)}o.done?t(l):Promise.resolve(l).then(a,c)}var b=function(e){var t,n=e.className,c=e.chat,r=e.isPublic,s=c.name,d=c.uid,m=c.online,b=(0,i.useContext)(v.p),g=b.activeChat,N=b.activePublicChat,j=b.chatState,C=b.addMessages,w=b.addPublicMessages,y=(0,i.useContext)(o.J).socket,k=function(){var e,t=(e=f().mark((function e(){var t,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=11;break}return N(c),null===y||void 0===y||y.emit("join-chat",c.uid),e.next=5,(0,h.H)("public_messages/".concat(d),{},"GET");case 5:if(null===(t=e.sent)||void 0===t?void 0:t.ok){e.next=8;break}return e.abrupt("return");case 8:w(t.messages),e.next=18;break;case 11:return g(c),e.next=14,(0,h.H)("messages/".concat(d),{},"GET");case 14:if(null===(n=e.sent)||void 0===n?void 0:n.ok){e.next=17;break}return e.abrupt("return");case 17:C(n.messages);case 18:setTimeout((function(){return(0,x.O)("messages")}),0);case 19:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,c){var r=e.apply(t,n);function s(e){p(r,a,c,s,o,"next",e)}function o(e){p(r,a,c,s,o,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,a.jsxs)("div",{onClick:k,className:"h-24 border-t-2 p-2 cursor-pointer flex ".concat(l.r.borderColor," ").concat((null===(t=j.activeChat)||void 0===t?void 0:t.uid)===d?l.r.chatListItemActive:l.r.chatListItem," ").concat(n),children:[(0,a.jsx)(u.J,{className:"h-full ".concat(l.r.chatItemIcon),icon:"user"}),(0,a.jsxs)("div",{className:"flex-1 ml-4",children:[(0,a.jsx)("p",{className:"text-xl font-medium ".concat(l.r.textColor),children:s}),!r&&(0,a.jsx)("p",{className:"mt-1 ".concat(m?"text-green-500 dark:text-green-300":"text-red-500 dark:text-red-400"," text-lg"),children:m?"Online":"Offline"})]})]})},g=n(6948),N=function(e){var t=e.className,n=e.title,u=e.chats,m=e.isPublic,f=void 0!==m&&m,x=(0,i.useState)(!0),h=x[0],v=x[1],p=function(){return v(!h)},N=(0,i.useContext)(o.J),j=N.socket,C=N.online,w=(0,s.c)({name:""}),y=w.name,k=w.onChange,P=w.clear;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"h-full sm:w-6/12 md:w-4/12 border-r-2 ".concat(l.r.borderColor," ").concat(h?"flex-col":"hidden"," ").concat(t),children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)(g.D,{className:"text-center",label:n}),(0,a.jsx)(d,{onClick:p,isOpen:h})]}),(0,a.jsxs)("div",{className:"h-full overflow-y-scroll pb-40",children:[u.map((function(e){return(0,a.jsx)(b,{isPublic:f,chat:e},e.uid)})),(0,a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(y.length<3)){if(C||(0,r.d9)("Error en la conexi\xf3n","Comprueba tu conexi\xf3n a internet"),u.find((function(e){return e.name===y})))return(0,r.d9)("Error","Ya existe un chat con ese nombre"),void P();null===j||void 0===j||j.emit("create-chat",{name:y,icon:"aaa"}),(0,r.iB)("La sala de chat se cre\xf3 correctamente"),P()}},className:"place-content-center mt-4 ".concat(f?"flex flex-col":"hidden"," ").concat(l.r.bgCard),children:[(0,a.jsx)(c.o,{onChange:k,placeholder:"Nombre del nuevo chat p\xfablico",className:"mx-2",name:"name",value:y,type:"text",required:!0,minLength:3,maxLength:24}),(0,a.jsx)("button",{type:"submit",className:"w-full text-center p-4 font-bold place-content-center ".concat(l.r.textColor," ").concat(l.r.buttonPrimary),children:"Nuevo Chat"})]})]})]}),(0,a.jsx)(d,{className:"h-20 absolute ".concat(h?"hidden":"flex"),onClick:p,isOpen:h})]})}},8716:function(e,t,n){n.d(t,{o:function(){return r}});var a=n(5893),c=n(8102),r=function(e){var t=e.className,n=e.value,r=e.name,s=e.required,o=void 0!==s&&s,l=e.placeholder,i=e.onChange,u=e.label,d=e.type,m=void 0===d?"text":d,f=e.minLength,x=e.maxLength;return(0,a.jsxs)("div",{className:"my-2 flex flex-col gap-1 ".concat(t),children:[(0,a.jsx)("label",{className:"font-semibold ".concat(c.r.textColorLabel),children:u}),(0,a.jsx)("input",{value:n,name:r,onChange:i,type:m,required:o,minLength:f,maxLength:x,placeholder:l,className:"rounded py-1 px-2 ".concat(c.r.input," ").concat(c.r.textColor)})]})}},7336:function(e,t,n){n.d(t,{s:function(){return c}});var a=n(5893),c=function(e){var t=e.className,n=e.children;return(0,a.jsx)("main",{className:"w-full h-full overflow-hidden grid ".concat(t),children:(0,a.jsx)("div",{className:"w-screen flex h-full h-content",children:n})})}},6948:function(e,t,n){n.d(t,{D:function(){return r}});var a=n(5893),c=n(8102),r=function(e){var t=e.className,n=e.label;return(0,a.jsxs)("div",{className:"group cursor-default w-fit flex flex-col my-4 mx-4 ".concat(t),children:[(0,a.jsx)("div",{className:"h-1 w-10 group-hover:w-full duration-500 self-end ".concat(c.r.bgActive)}),(0,a.jsx)("h1",{className:"text-3xl sm:text-4xl font-bold ".concat(c.r.textColor),children:n}),(0,a.jsx)("div",{className:"h-1 w-10 mt-1 group-hover:w-full duration-500 ".concat(c.r.bgActive)})]})}},2362:function(e,t,n){n.d(t,{d9:function(){return s},iB:function(){return o}});var a=n(6455),c=n.n(a),r="rgb(59 130 246)",s=function(e,t){c().fire({confirmButtonColor:r,icon:"error",title:e,text:t})},o=function(e){c().fire({text:e,confirmButtonColor:r})}},2851:function(e,t,n){n.d(t,{c:function(){return s}});var a=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){c(e,t,n[t])}))}return e}var s=function(e){var t=(0,a.useState)(e),n=t[0],s=t[1];return r({},n,{form:n,onChange:function(e){var t=e.target,n=t.value,a=t.name;s((function(e){return r({},e,c({},a,n))}))},clear:function(){s(e)},setFormValues:(0,a.useCallback)((function(e){s(e)}),[]),onChangeWithParams:function(e,t){s((function(n){return r({},n,c({},e,t))}))}})}}}]);