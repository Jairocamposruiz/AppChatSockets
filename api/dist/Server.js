"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const config_2 = require("./database/config");
const Sockets_1 = __importDefault(require("./Sockets"));
const auth_1 = __importDefault(require("./controllers/auth"));
const messages_1 = __importDefault(require("./controllers/messages"));
const publicMessages_1 = __importDefault(require("./controllers/publicMessages"));
class Server {
    constructor() {
        //Express
        this.app = (0, express_1.default)();
        this.port = config_1.config.app.port;
        //Connection DB
        (0, config_2.dbConnection)();
        //SocketIO
        this.httpServer = (0, http_1.createServer)(this.app);
        this.io = new socket_io_1.Server(this.httpServer, {
            path: '/socket.io'
        });
        this.sockets = new Sockets_1.default(this.io);
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/api/v1/auth', auth_1.default);
        this.app.use('/api/v1/messages', messages_1.default);
        this.app.use('/api/v1/public_messages', publicMessages_1.default);
    }
    listen() {
        this.httpServer.listen(this.port, () => {
            console.log(`App is running in http://localhost:${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map