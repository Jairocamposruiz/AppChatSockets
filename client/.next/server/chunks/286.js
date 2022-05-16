"use strict";
exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 8286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ UIProvider),
/* harmony export */   "Q": () => (/* binding */ UIContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const uiReducer = (state, action)=>{
    switch(action.type){
        case "setLightTheme":
            return {
                ...state,
                theme: "light"
            };
        case "setDarkTheme":
            return {
                ...state,
                theme: "dark"
            };
        default:
            return state;
    }
};
const UIContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const initialState = {
    theme: "light"
};
const UIProvider = ({ children  })=>{
    const { 0: UIState , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(uiReducer, initialState);
    const setLightTheme = ()=>{
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        dispatch({
            type: "setLightTheme"
        });
    };
    const setDarkTheme = ()=>{
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        dispatch({
            type: "setDarkTheme"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const theme = localStorage.getItem("theme") || "light";
        if (theme === "light") {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UIContext.Provider, {
        value: {
            ...UIState,
            setLightTheme,
            setDarkTheme
        },
        children: children
    });
};


/***/ })

};
;