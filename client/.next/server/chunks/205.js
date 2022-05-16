"use strict";
exports.id = 205;
exports.ids = [205];
exports.modules = {

/***/ 9650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);



const icons = {
    moon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faMoon,
    sun: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSun,
    message: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faMessage,
    user: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUser,
    users: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUsers,
    chat: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faComments,
    settings: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faGear,
    arrowLeft: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faAngleLeft,
    arrowRight: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faAngleRight,
    logout: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowRightFromBracket
};
const Icon = ({ className , icon , onClick  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        onClick: onClick,
        className: `${className}`,
        icon: icons[icon]
    });
};


/***/ }),

/***/ 1167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ scrollToBottom),
/* harmony export */   "Z": () => (/* binding */ scrollToBottomAnimated)
/* harmony export */ });
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_0__);

const scrollToBottom = (id)=>{
    react_scroll__WEBPACK_IMPORTED_MODULE_0__.animateScroll.scrollToBottom({
        containerId: id,
        duration: 0
    });
};
const scrollToBottomAnimated = (id)=>{
    react_scroll__WEBPACK_IMPORTED_MODULE_0__.animateScroll.scrollToBottom({
        containerId: id,
        duration: 250
    });
};


/***/ }),

/***/ 6558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ useSocket)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4612);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_0__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useSocket = (serverPath)=>{
    //Si lo pongo asi es para conectar automaticamente cuando entramos a la app sin necesidad de llamar a una funcion y setearlo en el state
    // const socket: Socket = useMemo(() => io(serverPath, {
    //   transports: [ 'websocket' ],
    // }), [serverPath]);
    const { 0: socket , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: online , 1: setOnline  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const connectSocket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const token = localStorage.getItem("token");
        const socketTemp = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(serverPath, {
            transports: [
                "websocket"
            ],
            autoConnect: true,
            forceNew: true,
            query: {
                "x-token": token
            }
        });
        setSocket(socketTemp);
    }, [
        serverPath
    ]);
    console.log(socket);
    const disconnectSocket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        socket?.disconnect();
    }, [
        socket
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!socket) return;
        setOnline(socket.connected);
    }, [
        socket
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!socket) return;
        socket.on("connect", ()=>{
            setOnline(true);
        });
    }, [
        socket
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!socket) return;
        socket.on("disconnect", ()=>{
            setOnline(false);
        });
    }, [
        socket
    ]);
    return {
        socket,
        online,
        connectSocket,
        disconnectSocket
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ ChatProvider),
/* harmony export */   "p": () => (/* binding */ ChatContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const chatReducer = (state, action)=>{
    switch(action.type){
        case "load-users":
            return {
                ...state,
                users: [
                    ...action.payload
                ]
            };
        case "load-chats":
            return {
                ...state,
                chats: [
                    ...action.payload
                ]
            };
        case "active-chat":
            if (state.activeChat === action.payload) return state;
            return {
                ...state,
                activeChat: action.payload,
                messages: []
            };
        case "active-public-chat":
            if (state.publicActiveChat === action.payload) return state;
            return {
                ...state,
                publicActiveChat: action.payload,
                publicMessages: []
            };
        case "new-message":
            if (state.activeChat?.uid === action.payload.from.uid || state.activeChat?.uid === action.payload.to || true) {
                return {
                    ...state,
                    messages: [
                        ...state.messages,
                        action.payload
                    ]
                };
            } else {}
        case "new-public-message":
            if (state.publicActiveChat?.uid === action.payload.from.uid || state.publicActiveChat?.uid === action.payload.to) {
                return {
                    ...state,
                    publicMessages: [
                        ...state.publicMessages,
                        action.payload
                    ]
                };
            } else {
                return state;
            }
        case "add-messages":
            return {
                ...state,
                messages: [
                    ...action.payload
                ]
            };
        case "add-public-messages":
            return {
                ...state,
                publicMessages: [
                    ...action.payload
                ]
            };
        case "clean":
            return {
                uid: "",
                activeChat: null,
                publicActiveChat: null,
                users: [],
                chats: [],
                messages: [],
                publicMessages: []
            };
        default:
            return state;
    }
};
const ChatContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const initialState = {
    uid: "",
    activeChat: null,
    publicActiveChat: null,
    users: [],
    chats: [],
    messages: [],
    publicMessages: []
};
const ChatProvider = ({ children  })=>{
    const { 0: chatState , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(chatReducer, initialState);
    const loadUsers = (users)=>{
        dispatch({
            type: "load-users",
            payload: users
        });
    };
    const loadChats = (chats)=>{
        dispatch({
            type: "load-chats",
            payload: chats
        });
    };
    const activeChat = (chat)=>{
        dispatch({
            type: "active-chat",
            payload: chat
        });
    };
    const activePublicChat = (chat)=>{
        dispatch({
            type: "active-public-chat",
            payload: chat
        });
    };
    const newMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((message)=>{
        dispatch({
            type: "new-message",
            payload: message
        });
    }, []);
    const newPublicMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((message)=>{
        dispatch({
            type: "new-public-message",
            payload: message
        });
    }, []);
    const addMessages = (messages)=>{
        dispatch({
            type: "add-messages",
            payload: messages
        });
    };
    const addPublicMessages = (messages)=>{
        dispatch({
            type: "add-public-messages",
            payload: messages
        });
    };
    const clean = ()=>{
        dispatch({
            type: "clean"
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatContext.Provider, {
        value: {
            chatState,
            loadUsers,
            loadChats,
            activeChat,
            activePublicChat,
            newMessage,
            newPublicMessage,
            addMessages,
            addPublicMessages,
            clean
        },
        children: children
    });
};


/***/ }),

/***/ 4448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SocketContext),
/* harmony export */   "w": () => (/* binding */ SocketProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1167);
/* harmony import */ var _hooks_useSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6558);
/* harmony import */ var _store_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7607);
/* harmony import */ var _store_Chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8058);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useSocket__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_useSocket__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const socketUrl = "http://localhost:4000";
if (!socketUrl) {
    throw new Error("\u26A0\uFE0F The variable of environment NEXT_PUBLIC_SOCKET_URL is required \u26A0\uFE0F");
}
const SocketProvider = ({ children  })=>{
    const { socket , online , connectSocket , disconnectSocket  } = (0,_hooks_useSocket__WEBPACK_IMPORTED_MODULE_3__/* .useSocket */ .s)(socketUrl);
    const { logged  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_Auth__WEBPACK_IMPORTED_MODULE_4__/* .AuthContext */ .V);
    const { loadUsers , loadChats , newMessage , newPublicMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_Chat__WEBPACK_IMPORTED_MODULE_5__/* .ChatContext */ .p);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (logged) {
            connectSocket();
        }
    }, [
        logged,
        connectSocket
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!logged) {
            disconnectSocket();
        }
    }, [
        logged,
        disconnectSocket
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        socket?.on("users-list", (users)=>{
            loadUsers(users);
        });
    }, [
        socket
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        socket?.on("chats-list", (chats)=>{
            loadChats(chats);
        });
    }, [
        socket
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        socket?.on("private-message", (message)=>{
            newMessage(message);
            (0,_helpers_scroll__WEBPACK_IMPORTED_MODULE_2__/* .scrollToBottomAnimated */ .Z)("messages");
        });
    }, [
        socket,
        newMessage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        socket?.on("public-message", (message)=>{
            newPublicMessage(message);
            (0,_helpers_scroll__WEBPACK_IMPORTED_MODULE_2__/* .scrollToBottomAnimated */ .Z)("messages");
        });
    }, [
        socket,
        newPublicMessage
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocketContext.Provider, {
        value: {
            socket,
            online
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;