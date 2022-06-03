"use strict";
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 8716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ InputText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8102);


const InputText = ({ className , value , name , required =false , placeholder , onChange , label , type ="text" , minLength , maxLength  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `my-2 flex flex-col gap-1 ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `font-semibold ${_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.textColorLabel */ .r.textColorLabel}`,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                value: value,
                name: name,
                onChange: onChange,
                type: type,
                required: required,
                minLength: minLength,
                maxLength: maxLength,
                placeholder: placeholder,
                className: `rounded py-1 px-2 ${_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.input */ .r.input} ${_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.textColor */ .r.textColor}`
            })
        ]
    });
};


/***/ }),

/***/ 2362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d9": () => (/* binding */ alertError),
/* harmony export */   "iB": () => (/* binding */ alertSuccess)
/* harmony export */ });
/* unused harmony export alertWithConfirm */
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

const confirmButtonColor = "rgb(59 130 246)";
const alertError = (title, text)=>{
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        confirmButtonColor,
        icon: "error",
        title,
        text
    });
};
const alertSuccess = (text)=>{
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        text,
        confirmButtonColor
    });
};
const alertWithConfirm = (title, textButtonConfirm, textButtonDeny, callback)=>{
    Swal.fire({
        title,
        showDenyButton: true,
        confirmButtonText: textButtonConfirm,
        denyButtonText: textButtonDeny
    }).then((result)=>{
        if (result.isConfirmed) {
            callback();
        }
    });
};


/***/ }),

/***/ 2851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useForm = (initialState)=>{
    const { 0: form1 , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
    const onChange = (event)=>{
        const { value , name  } = event.target;
        setForm((form)=>({
                ...form,
                [name]: value
            })
        );
    };
    const onChangeWithParams = (name, value)=>{
        setForm((form)=>({
                ...form,
                [name]: value
            })
        );
    };
    const clear = ()=>{
        setForm(initialState);
    };
    const setFormValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValues)=>{
        setForm(newValues);
    }, []);
    return {
        ...form1,
        form: form1,
        onChange,
        clear,
        setFormValues,
        onChangeWithParams
    };
};


/***/ })

};
;