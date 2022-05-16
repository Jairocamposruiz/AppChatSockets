"use strict";
exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 9901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ ButtonOpenClose)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8102);
/* harmony import */ var _components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9650);



const ButtonOpenClose = ({ className , isOpen , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        className: `px-4 items-center ${_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.buttonPrimary */ .r.buttonPrimary} ${className}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_Icon__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .J, {
            className: "h-8",
            icon: isOpen ? "arrowLeft" : "arrowRight"
        })
    });
};


/***/ }),

/***/ 395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ Chat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_chat_Messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4904);
/* harmony import */ var _components_chat_SendMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8619);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8102);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_chat_SendMessage__WEBPACK_IMPORTED_MODULE_2__]);
_components_chat_SendMessage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




//TODO: Ocultar chat en tamaño sm si está abierta la lista
const Chat = ({ className , name , isPublic =false  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex flex-col flex-1 ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: `text-2xl sm:text-3xl font-bold my-5 ml-20 ${_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.textColor */ .r.textColor}`,
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chat_Messages__WEBPACK_IMPORTED_MODULE_1__/* .Messages */ .V, {
                isPublic: isPublic,
                className: `flex-1`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chat_SendMessage__WEBPACK_IMPORTED_MODULE_2__/* .SendMessage */ .u, {
                isPublic: isPublic
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ ChatUnselect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8102);


const ChatUnselect = ({ className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `grid place-content-center w-full ${className}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            className: `text-2xl font-bold ${_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.textColor */ .r.textColor}`,
            children: "Seleccione un Chat"
        })
    });
};


/***/ }),

/***/ 804:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ ListChat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_input_InputText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8716);
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2851);
/* harmony import */ var _store_Socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4448);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_buttons_ButtonOpenClose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9901);
/* harmony import */ var _components_chat_ListChatItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9381);
/* harmony import */ var _components_text_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6948);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_Socket__WEBPACK_IMPORTED_MODULE_3__, _components_chat_ListChatItem__WEBPACK_IMPORTED_MODULE_7__]);
([_store_Socket__WEBPACK_IMPORTED_MODULE_3__, _components_chat_ListChatItem__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ListChat = ({ className , title , chats , isPublic =false  })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
    const handleOpenClose = ()=>setIsOpen(!isOpen)
    ;
    const { socket  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_store_Socket__WEBPACK_IMPORTED_MODULE_3__/* .SocketContext */ .J);
    const { name , onChange , clear  } = (0,_hooks_useForm__WEBPACK_IMPORTED_MODULE_2__/* .useForm */ .c)({
        name: ""
    });
    const onSubmit = (event)=>{
        if (name.length < 3) return;
        event.preventDefault();
        socket?.emit("create-chat", {
            name,
            icon: "aaa" //TODO: Agregar opcion para cambiar icono
        });
        clear();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `h-full sm:w-6/12 md:w-4/12 border-r-2 ${_theme__WEBPACK_IMPORTED_MODULE_4__/* .theme.borderColor */ .r.borderColor} ${isOpen ? "flex-col" : "hidden"} ${className}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_text_Title__WEBPACK_IMPORTED_MODULE_8__/* .Title */ .D, {
                                className: "text-center",
                                label: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buttons_ButtonOpenClose__WEBPACK_IMPORTED_MODULE_6__/* .ButtonOpenClose */ .t, {
                                onClick: handleOpenClose,
                                isOpen: isOpen
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `h-full overflow-y-scroll pb-40`,
                        children: [
                            chats.map((chat)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chat_ListChatItem__WEBPACK_IMPORTED_MODULE_7__/* .ListChatItem */ .a, {
                                    isPublic: isPublic,
                                    chat: chat
                                }, chat.uid)
                            ),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: onSubmit,
                                className: `place-content-center mt-4 ${isPublic ? "flex flex-col" : "hidden"} ${_theme__WEBPACK_IMPORTED_MODULE_4__/* .theme.bgCard */ .r.bgCard}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input_InputText__WEBPACK_IMPORTED_MODULE_1__/* .InputText */ .o, {
                                        onChange: onChange,
                                        placeholder: "Nombre del nuevo chat p\xfablico",
                                        className: "mx-2",
                                        name: "name",
                                        value: name,
                                        type: "text",
                                        required: true,
                                        minLength: 3,
                                        maxLength: 24
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: `w-full text-center p-4 font-bold place-content-center ${_theme__WEBPACK_IMPORTED_MODULE_4__/* .theme.textColor */ .r.textColor} ${_theme__WEBPACK_IMPORTED_MODULE_4__/* .theme.buttonPrimary */ .r.buttonPrimary}`,
                                        children: "Nuevo Chat"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buttons_ButtonOpenClose__WEBPACK_IMPORTED_MODULE_6__/* .ButtonOpenClose */ .t, {
                className: `h-20 absolute ${isOpen ? "hidden" : "flex"}`,
                onClick: handleOpenClose,
                isOpen: isOpen
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9381:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ ListChatItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1167);
/* harmony import */ var _store_Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4448);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5685);
/* harmony import */ var _components_icons_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9650);
/* harmony import */ var _store_Chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8058);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8102);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_Socket__WEBPACK_IMPORTED_MODULE_2__]);
_store_Socket__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ListChatItem = ({ className , chat , isPublic  })=>{
    const { name , uid , online  } = chat;
    const { activeChat , activePublicChat , chatState , addMessages , addPublicMessages  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_store_Chat__WEBPACK_IMPORTED_MODULE_6__/* .ChatContext */ .p);
    const { socket  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_store_Socket__WEBPACK_IMPORTED_MODULE_2__/* .SocketContext */ .J);
    const onClick = async ()=>{
        if (isPublic) {
            activePublicChat(chat);
            socket?.emit("join-chat", chat.uid);
            const resp = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_4__/* .fetchWithToken */ .H)(`public_messages/${uid}`, {}, "GET");
            if (!resp?.ok) return;
            addPublicMessages(resp.messages);
        } else {
            activeChat(chat);
            const resp = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_4__/* .fetchWithToken */ .H)(`messages/${uid}`, {}, "GET");
            if (!resp?.ok) return;
            addMessages(resp.messages);
        }
        setTimeout(()=>(0,_helpers_scroll__WEBPACK_IMPORTED_MODULE_1__/* .scrollToBottom */ .O)("messages")
        , 0);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: onClick,
        className: `h-24 border-t-2 p-2 cursor-pointer flex ${_theme__WEBPACK_IMPORTED_MODULE_7__/* .theme.borderColor */ .r.borderColor} ${chatState.activeChat?.uid === uid ? _theme__WEBPACK_IMPORTED_MODULE_7__/* .theme.chatListItemActive */ .r.chatListItemActive : _theme__WEBPACK_IMPORTED_MODULE_7__/* .theme.chatListItem */ .r.chatListItem} ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_Icon__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .J, {
                className: `h-full ${_theme__WEBPACK_IMPORTED_MODULE_7__/* .theme.chatItemIcon */ .r.chatItemIcon}`,
                icon: "user"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `flex-1 ml-4`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `text-xl font-medium ${_theme__WEBPACK_IMPORTED_MODULE_7__/* .theme.textColor */ .r.textColor}`,
                        children: name
                    }),
                    !isPublic && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `mt-1 ${online ? "text-green-500 dark:text-green-300" : "text-red-500 dark:text-red-400"} text-lg`,
                        children: online ? "Online" : "Offline"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ Messages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(8102);
;// CONCATENATED MODULE: ./components/chat/IncomingMessage.tsx


const IncomingMessage = ({ className , message , date  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `p-4 rounded w-message self-start flex flex-col ${theme/* theme.textColor */.r.textColor} ${theme/* theme.incomingMessage */.r.incomingMessage} ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: `font-bold text-lg mb-2`,
                children: message.from.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: `mb-1 whitespace-pre-wrap`,
                children: message.message
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: `text-xs self-end ${theme/* theme.textColor */.r.textColor}`,
                children: date.toLocaleString()
            })
        ]
    });
}; // Exercise

;// CONCATENATED MODULE: ./components/chat/OutgoingMessage.tsx


const OutgoingMessage = ({ className , message , date  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `p-4 rounded w-message self-end flex flex-col ${theme/* theme.textColor */.r.textColor} ${theme/* theme.outgoingMessage */.r.outgoingMessage} ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: `font-bold text-lg mb-2`,
                children: message.from.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: `mb-1 whitespace-pre-wrap`,
                children: message.message
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: `text-xs self-end ${theme/* theme.textColorLabel */.r.textColorLabel}`,
                children: date.toLocaleString()
            })
        ]
    });
};

// EXTERNAL MODULE: ./store/Auth.tsx
var Auth = __webpack_require__(7607);
// EXTERNAL MODULE: ./store/Chat.tsx
var Chat = __webpack_require__(8058);
;// CONCATENATED MODULE: ./components/chat/Messages.tsx






const Messages = ({ className , isPublic  })=>{
    const { chatState  } = (0,external_react_.useContext)(Chat/* ChatContext */.p);
    const { uid  } = (0,external_react_.useContext)(Auth/* AuthContext */.V);
    const messagesToShow = isPublic ? chatState.publicMessages : chatState.messages;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "messages",
        className: `p-4 flex flex-col gap-4 overflow-y-scroll pb-40 ${className}`,
        children: messagesToShow.map((msg)=>msg.from.uid === uid ? /*#__PURE__*/ jsx_runtime_.jsx(OutgoingMessage, {
                message: msg,
                date: new Date(msg.createdAt)
            }, msg._id) : /*#__PURE__*/ jsx_runtime_.jsx(IncomingMessage, {
                message: msg,
                date: new Date(msg.createdAt)
            }, msg._id)
        )
    });
};


/***/ }),

/***/ 8619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ SendMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2851);
/* harmony import */ var _store_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7607);
/* harmony import */ var _store_Chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8058);
/* harmony import */ var _store_Socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4448);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8102);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_Socket__WEBPACK_IMPORTED_MODULE_5__]);
_store_Socket__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const SendMessage = ({ className , isPublic  })=>{
    const { message , onChange , setFormValues  } = (0,_hooks_useForm__WEBPACK_IMPORTED_MODULE_2__/* .useForm */ .c)({
        message: ""
    });
    const { uid , name  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_Auth__WEBPACK_IMPORTED_MODULE_3__/* .AuthContext */ .V);
    const { socket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_Socket__WEBPACK_IMPORTED_MODULE_5__/* .SocketContext */ .J);
    const { chatState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_Chat__WEBPACK_IMPORTED_MODULE_4__/* .ChatContext */ .p);
    const onSubmit = (event)=>{
        event.preventDefault();
        if (message.trim().length === 0) return;
        setFormValues({
            message: ""
        });
        if (isPublic) {
            socket?.emit("public-message", {
                from: {
                    name,
                    uid
                },
                chat: chatState.publicActiveChat?.uid,
                message
            });
        } else {
            socket?.emit("private-message", {
                from: {
                    name,
                    uid
                },
                to: chatState.activeChat?.uid,
                message
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: onSubmit,
        className: `border-t-4 w-full h-40 p-4 flex gap-2 ${_theme__WEBPACK_IMPORTED_MODULE_6__/* .theme.borderColor */ .r.borderColor} ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                name: "message",
                value: message,
                onChange: onChange,
                placeholder: "Mensaje...",
                className: `w-full h-full rounded-lg p-2 font-semibold resize-none ${_theme__WEBPACK_IMPORTED_MODULE_6__/* .theme.input */ .r.input} ${_theme__WEBPACK_IMPORTED_MODULE_6__/* .theme.textColor */ .r.textColor}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                className: `flex self-end rounded p-2 font-bold h-10 ${_theme__WEBPACK_IMPORTED_MODULE_6__/* .theme.buttonPrimary */ .r.buttonPrimary}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Enviar"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ ContainerScreen)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ContainerScreen = ({ className , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: `w-full h-full overflow-hidden grid ${className}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-screen flex h-full h-content",
            children: children
        })
    });
};


/***/ }),

/***/ 6948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8102);


const Title = ({ className , label  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `group cursor-default w-fit flex flex-col my-4 mx-4 ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `h-1 w-10 group-hover:w-full duration-500 self-end ${_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.bgActive */ .r.bgActive}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: `text-3xl sm:text-4xl font-bold ${_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.textColor */ .r.textColor}`,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `h-1 w-10 mt-1 group-hover:w-full duration-500 ${_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.bgActive */ .r.bgActive}`
            })
        ]
    });
};


/***/ })

};
;