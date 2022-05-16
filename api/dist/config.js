"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envFound = dotenv_1.default.config();
if (envFound.error) {
    throw new Error('⚠️  No se pudo encontrar el archivo .env  ⚠️');
}
exports.config = {
    app: {
        env: process.env.NODE_ENV,
        port: process.env.PORT || 3000,
        secretJWT: process.env.SECRET_JWT,
    },
    db: {
        connection: process.env.CONNECTION_DB,
    },
};
//# sourceMappingURL=config.js.map