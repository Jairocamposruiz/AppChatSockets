"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const jwt_1 = require("../helpers/jwt");
const auth_1 = require("../services/auth");
const validateFields_1 = require("../middlewares/validateFields");
const validateJWT_1 = require("../middlewares/validateJWT");
const router = (0, express_1.Router)();
//New Users
router.post('/new', [
    (0, express_validator_1.body)('name', 'Name is required and need to be more than 2 characters').isString().isLength({ min: 2 }),
    (0, express_validator_1.body)('password', 'Password is required and need to be more than 6 characters').isString().isLength({ min: 6 }),
    validateFields_1.validateFields,
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, name } = req.body;
    try {
        const nameAlreadyExist = yield (0, auth_1.existName)(name);
        if (nameAlreadyExist) {
            return res.status(400).json({
                ok: false,
                msg: 'Name already exist',
            });
        }
        const user = yield (0, auth_1.createUser)({ password, name });
        const token = yield (0, jwt_1.generateJWT)({
            id: user.id,
        });
        res.status(201).json({
            ok: true,
            user,
            token,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Internal error',
        });
    }
}));
//Login
router.post('/login', [
    (0, express_validator_1.body)('name', 'Name is required').isString(),
    (0, express_validator_1.body)('password', 'Password is required').isString(),
    validateFields_1.validateFields,
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = req.body;
    try {
        const user = yield (0, auth_1.login)(name, password);
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'Name or password incorrect',
            });
        }
        const token = yield (0, jwt_1.generateJWT)({
            id: user.id,
        });
        res.json({
            ok: true,
            user,
            token,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal error',
        });
    }
}));
//Revalidate Token
router.get('/renew', [
    validateJWT_1.validateJWT,
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const payloadToken = req.payloadToken;
    try {
        const { user, token } = yield (0, auth_1.revalidateToken)(payloadToken.id);
        res.json({
            ok: true,
            user,
            token,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal error',
        });
    }
}));
exports.default = router;
//# sourceMappingURL=auth.js.map