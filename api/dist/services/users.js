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
exports.getUsers = exports.disconnectUser = exports.connectUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const connectUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findById(id);
        if (!user)
            return;
        user.online = true;
        yield user.save();
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
exports.connectUser = connectUser;
const disconnectUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findById(id);
        if (!user)
            return;
        user.online = false;
        yield user.save();
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
exports.disconnectUser = disconnectUser;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default
        .find()
        .sort('-online');
    return users;
});
exports.getUsers = getUsers;
//# sourceMappingURL=users.js.map