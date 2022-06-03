"use strict";
exports.id = 499;
exports.ids = [499];
exports.modules = {

/***/ 9499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8102);


const Button = ({ className , text , onClick , type ="button"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `px-4 py-2 rounded-md text-center cursor-pointer transition active:translate-y-0.5 shadow-lg font-bold text-black ${_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.buttonPrimary */ .r.buttonPrimary} ${className}`,
        onClick: onClick,
        type: type,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            children: text
        })
    });
};


/***/ })

};
;