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
exports.revalidateToken = exports.login = exports.createUser = exports.existName = exports.existEmail = void 0;
const encrypt_1 = require("../helpers/encrypt");
const jwt_1 = require("../helpers/jwt");
const User_1 = __importDefault(require("../models/User"));
const existEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const userByEmail = yield User_1.default.findOne({ email });
    return !!userByEmail;
});
exports.existEmail = existEmail;
const existName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const userByName = yield User_1.default.findOne({ name });
    return !!userByName;
});
exports.existName = existName;
const createUser = ({ password, name, }) => __awaiter(void 0, void 0, void 0, function* () {
    const passwordEncrypted = (0, encrypt_1.encryptPassword)(password);
    const newUser = new User_1.default({
        password: passwordEncrypted,
        name: name,
    });
    yield newUser.save();
    return newUser;
});
exports.createUser = createUser;
const login = (name, password) => __awaiter(void 0, void 0, void 0, function* () {
    const userByName = yield User_1.default.findOne({ name: name });
    if (!userByName)
        return null;
    const isPasswordValid = (0, encrypt_1.verifyPassword)(userByName.password, password);
    if (!isPasswordValid)
        return null;
    return userByName;
});
exports.login = login;
const revalidateToken = (payloadToken) => __awaiter(void 0, void 0, void 0, function* () {
    const newToken = yield (0, jwt_1.generateJWT)({ id: payloadToken.id });
    const user = yield User_1.default.findById(payloadToken.id);
    return { user, token: newToken };
});
exports.revalidateToken = revalidateToken;
//# sourceMappingURL=auth.js.map