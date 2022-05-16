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
const messages_1 = require("../services/messages");
const validateFields_1 = require("../middlewares/validateFields");
const validateJWT_1 = require("../middlewares/validateJWT");
const router = (0, express_1.Router)();
//Get Messages by User
router.get('/:from', [
    validateJWT_1.validateJWT,
    (0, express_validator_1.param)('from', 'The param from need to be a mongoID').isMongoId(),
    validateFields_1.validateFields,
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const idUser = req.payloadToken.id;
    const messagesFrom = req.params.from;
    try {
        const messages = yield (0, messages_1.getMessagesByUser)(idUser, messagesFrom);
        res.json({
            ok: true,
            messages,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal Error',
        });
    }
}));
exports.default = router;
//# sourceMappingURL=messages.js.map