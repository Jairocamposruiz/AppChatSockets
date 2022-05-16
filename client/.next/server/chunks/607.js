"use strict";
exports.id = 607;
exports.ids = [607];
exports.modules = {

/***/ 5685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ fetchWithToken),
/* harmony export */   "x": () => (/* binding */ fetchWithoutToken)
/* harmony export */ });
const baseUrl = "http://localhost:4000/api/v1";
if (!baseUrl) {
    throw new Error("\u26A0\uFE0F The variable of environment NEXT_PUBLIC_API_URL is required \u26A0\uFE0F");
}
const fetchWithoutToken = async (endpoint, data, method = "GET")=>{
    const url = `${baseUrl}/${endpoint}`;
    let responseData;
    try {
        if (method === "GET") {
            const resp = await fetch(url);
            responseData = await resp.json();
        } else {
            const resp = await fetch(url, {
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            responseData = await resp.json();
        }
        if (!responseData) {
            throw new Error("Error no data response");
        }
        return responseData;
    } catch (error) {
        console.log(error);
    }
};
const fetchWithToken = async (endpoint, data, method = "GET")=>{
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem("token") || "";
    let responseData;
    try {
        if (method === "GET") {
            const resp = await fetch(url, {
                headers: {
                    "x-token": token
                }
            });
            responseData = await resp.json();
        } else {
            const resp = await fetch(url, {
                method,
                headers: {
                    "Content-type": "application/json",
                    "x-token": token
                },
                body: JSON.stringify(data)
            });
            responseData = await resp.json();
        }
        if (!responseData) {
            throw new Error("Error no data response");
        }
        return responseData;
    } catch (error) {
        console.log(error);
    }
};


/***/ }),

/***/ 7607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "V": () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5685);



const authReducer = (state, action)=>{
    const { type , payload  } = action;
    switch(type){
        case "login":
            return {
                ...state,
                uid: payload.uid,
                checking: false,
                logged: true,
                name: payload.name,
                email: payload.email
            };
        case "logout":
            return {
                ...state,
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null
            };
        default:
            return state;
    }
};
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null
};
const AuthProvider = ({ children  })=>{
    const { 0: authState , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(authReducer, initialState);
    const login = async (name, password)=>{
        const resp = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_2__/* .fetchWithoutToken */ .x)("auth/login", {
            name,
            password
        }, "POST");
        if (resp?.ok) {
            const { user , token  } = resp;
            localStorage.setItem("token", token);
            dispatch({
                type: "login",
                payload: user
            });
        } else {
            return false;
        }
        return true;
    };
    const register = async (name, password)=>{
        const resp = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_2__/* .fetchWithoutToken */ .x)("auth/new", {
            password,
            name
        }, "POST");
        if (resp?.ok) {
            const { user , token  } = resp;
            localStorage.setItem("token", token);
            dispatch({
                type: "login",
                payload: user
            });
        } else {
            return false;
        }
        return true;
    };
    const verifyToken = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const token = localStorage.getItem("token");
        if (!token) {
            dispatch({
                type: "logout",
                payload: null
            });
            return false;
        }
        const resp = await (0,_helpers_fetch__WEBPACK_IMPORTED_MODULE_2__/* .fetchWithToken */ .H)("auth/renew", {}, "GET");
        if (resp?.ok) {
            const { user , token  } = resp;
            localStorage.setItem("token", token);
            dispatch({
                type: "login",
                payload: user
            });
        } else {
            dispatch({
                type: "logout",
                payload: null
            });
            return false;
        }
        return true;
    }, []);
    const logout = ()=>{
        dispatch({
            type: "logout",
            payload: null
        });
        localStorage.removeItem("token");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            ...authState,
            login,
            register,
            verifyToken,
            logout
        },
        children: children
    });
};


/***/ })

};
;