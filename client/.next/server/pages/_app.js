"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(8102);
;// CONCATENATED MODULE: ./components/footer/Footer.tsx


//TODO: Cambiar los links del footer
const Footer = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: `px-4 py-8 flex flex-col sm:flex-row sm:items-center justify-around ${theme/* theme.bgFooter */.r.bgFooter}  ${theme/* theme.textColor */.r.textColor} ${className}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `sm:w-1/4 mb-4 sm:mb-0`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: `font-bold mb-2`,
                        children: "Informaci\xf3n"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Este es un ejemplo de un chat implementado con sockets en NextJS"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `sm:w-1/4 mb-4 sm:mb-0`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: `font-bold mb-2`,
                        children: "Creador"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Creada por Jairo para la p\xe1gina"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://blog.jcoder.es",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `text-blue-500`,
                        children: "JCodeR.es"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `sm:w-1/4 mb-4 sm:mb-0`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: `font-bold mb-2`,
                        children: "Links"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://blog.jcoder.es",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: `text-blue-500`,
                            children: "JCodeR.es"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://github.com/Jairocamposruiz/AppChatSockets.git",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: `text-blue-500`,
                            children: "Repositorio en GitHub"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://blog.jcoder.es",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: `text-blue-500`,
                            children: "Descripci\xf3n del proyecto"
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./store/Auth.tsx
var Auth = __webpack_require__(7607);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/icons/Icon.tsx
var Icon = __webpack_require__(9650);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/navbar/NavLink.tsx




const NavLink = ({ children , exact =false , href  })=>{
    const { pathname  } = (0,router_.useRouter)();
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `relative flex justify-center`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `
              ${isActive ? theme/* theme.navLinkActive */.r.navLinkActive : theme/* theme.navLink */.r.navLink} 
              z-10 px-6 md:w-40 h-14 flex items-center justify-center font-bold
            `,
                        children: children
                    }),
                    isActive && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${isActive ? theme/* theme.navLinkActive */.r.navLinkActive : theme/* theme.navLink */.r.navLink} w-4 h-4 absolute top-12 rotate-45`
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/navbar/Navbar.tsx







const listOfLinks = [
    {
        href: "/chats",
        label: "Chats",
        icon: "chat",
        isNeededLogin: true
    },
    {
        href: "/users",
        label: "Usuarios",
        icon: "users",
        isNeededLogin: true
    },
    {
        href: "/settings",
        label: "Ajustes",
        icon: "settings",
        isNeededLogin: true
    },
    {
        href: "/auth/login",
        label: "Login",
        icon: "user",
        isNeededLogin: false
    }, 
];
const Navbar = ({ className  })=>{
    const { logged , logout  } = (0,external_react_.useContext)(Auth/* AuthContext */.V);
    const { 0: links , 1: setLinks  } = (0,external_react_.useState)(listOfLinks);
    (0,external_react_.useEffect)(()=>{
        if (logged) {
            const filteredLinks = listOfLinks.filter((link)=>link.href !== "/auth/login"
            );
            setLinks(filteredLinks);
        } else {
            const filteredLinks = listOfLinks.filter((link)=>!link.isNeededLogin
            );
            setLinks(filteredLinks);
        }
    }, [
        logged
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: `flex w-full justify-between items-center  ${theme/* theme.bgNavbar */.r.bgNavbar} ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink, {
                    exact: true,
                    href: "/",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/logo.svg",
                            alt: "JCodeR Logo",
                            width: 40,
                            height: 40
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: `ml-3 hidden md:flex `,
                            children: "JChat"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `flex`,
                children: [
                    links.map(({ href , label , icon  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink, {
                            exact: true,
                            href: href,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Icon/* Icon */.J, {
                                    icon: icon,
                                    className: `sm:w-8 sm:h-8 w-6 h-6`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: `ml-3 hidden md:flex `,
                                    children: label
                                })
                            ]
                        }, href)
                    ),
                    logged && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: `z-10 px-6 md:w-40 h-14 flex items-center justify-center font-bold ${theme/* theme.navLogout */.r.navLogout}`,
                        onClick: logout,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Icon/* Icon */.J, {
                                icon: "logout",
                                className: `sm:w-8 sm:h-8 w-6 h-6`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: `ml-3 hidden md:flex`,
                                children: "Logout"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/layout/Layout.tsx





const Layout = ({ className , children  })=>{
    const { pathname  } = (0,router_.useRouter)();
    const withoutFooter = [
        "/chats",
        "/users"
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex w-full flex-col min-h-screen max-w-screen overflow-y-hidden overflow-x-hidden justify-between ${theme/* theme.bgPage */.r.bgPage} ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `flex-1 flex`,
                children: children
            }),
            !withoutFooter.includes(pathname) && /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};


/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "reportWebVitals": () => (/* binding */ reportWebVitals)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8286);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1863);
/* harmony import */ var _store_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7607);
/* harmony import */ var _store_Chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8058);
/* harmony import */ var _store_Socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4448);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_Socket__WEBPACK_IMPORTED_MODULE_5__]);
_store_Socket__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const reportWebVitals = (metric)=>{
// console.log(metric);
//Report to analytics
};
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_store_Chat__WEBPACK_IMPORTED_MODULE_4__/* .ChatProvider */ .a, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_store_Auth__WEBPACK_IMPORTED_MODULE_3__/* .AuthProvider */ .H, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_store_Socket__WEBPACK_IMPORTED_MODULE_5__/* .SocketProvider */ .w, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_store_UI__WEBPACK_IMPORTED_MODULE_1__/* .UIProvider */ .J, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .A, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,260,102,607,205,286], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();