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
const publicMessages_1 = require("../services/publicMessages");
const validateFields_1 = require("../middlewares/validateFields");
const validateJWT_1 = require("../middlewares/validateJWT");
const router = (0, express_1.Router)();
router.get('/:chat', [
    validateJWT_1.validateJWT,
    (0, express_validator_1.param)('chat', 'The param chat need to be a mongoId').isMongoId(),
    validateFields_1.validateFields,
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const chat = req.params.chat;
    try {
        const messages = yield (0, publicMessages_1.getMessagesByChat)(chat);
        res.json({
            ok: true,
            messages,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Internal Error',
        });
    }
}));
exports.default = router;
//# sourceMappingURL=publicMessages.js.map