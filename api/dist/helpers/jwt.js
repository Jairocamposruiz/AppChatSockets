"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const generateJWT = (payload) => {
    const secret = config_1.config.app.secretJWT;
    if (!secret)
        throw new Error('There is not SECRET_JWT environment variable');
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, secret, {
            expiresIn: '24h',
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject('Error JWT can not be generated');
            }
            resolve(token);
        });
    });
};
exports.generateJWT = generateJWT;
const verifyJWT = (token) => {
    const secret = config_1.config.app.secretJWT;
    if (!secret)
        throw new Error('There is not SECRET_JWT environment variable');
    try {
        // @ts-ignore
        const { id } = jsonwebtoken_1.default.verify(token, secret);
        return [true, id];
    }
    catch (error) {
        return [false, null];
    }
};
exports.verifyJWT = verifyJWT;
//# sourceMappingURL=jwt.js.map