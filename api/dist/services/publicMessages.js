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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.savePublicMessage = exports.getMessagesByChat = void 0;
const PublicMessage_1 = __importDefault(require("../models/PublicMessage"));
const getMessagesByChat = (chatId) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield PublicMessage_1.default.find({ to: chatId })
        .sort({ createAt: 'asc' })
        .populate('from', ['name']);
    return messages;
});
exports.getMessagesByChat = getMessagesByChat;
const savePublicMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMessage = new PublicMessage_1.default({
            from: message.from.uid,
            to: message.chat,
            message: message.message
        });
        yield newMessage.save();
        return {
            to: newMessage.to,
            from: {
                uid: message.from.uid,
                name: message.from.name
            },
            message: newMessage.message,
            _id: newMessage._id,
            createdAt: new Date(),
        };
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.savePublicMessage = savePublicMessage;
//# sourceMappingURL=publicMessages.js.map