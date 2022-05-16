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
const chats_1 = require("./services/chats");
const publicMessages_1 = require("./services/publicMessages");
const users_1 = require("./services/users");
const messages_1 = require("./services/messages");
const jwt_1 = require("./helpers/jwt");
class Sockets {
    constructor(io) {
        this.io = io;
        this.socketEvents();
    }
    socketEvents() {
        this.io.on('connection', (socket) => __awaiter(this, void 0, void 0, function* () {
            //Connect
            const token = socket.handshake.query['x-token'];
            if (!token || typeof token === 'object') {
                console.log('Unidentified socket');
                return socket.disconnect;
            }
            const [valid, id] = (0, jwt_1.verifyJWT)(token);
            if (!valid) {
                console.log('Unidentified socket');
                return socket.disconnect;
            }
            const user = yield (0, users_1.connectUser)(id);
            if (!user) {
                console.log('Unidentified socket');
                return socket.disconnect;
            }
            console.log(`Se conecto ${user.name}`);
            this.io.emit('users-list', yield (0, users_1.getUsers)());
            socket.join(id);
            //Private Chats
            socket.on('private-message', (payload) => __awaiter(this, void 0, void 0, function* () {
                const message = yield (0, messages_1.saveMessage)(payload);
                if (!message)
                    return;
                this.io.to(payload.to).emit('private-message', message);
                this.io.to(payload.from.uid).emit('private-message', message);
            }));
            //Public Chats
            this.io.emit('chats-list', yield (0, chats_1.getChats)());
            socket.on('create-chat', (payload) => __awaiter(this, void 0, void 0, function* () {
                const chat = yield (0, chats_1.createChat)(payload);
                if (!chat)
                    return;
                this.io.emit('chats-list', yield (0, chats_1.getChats)());
            }));
            socket.on('join-chat', (payload) => __awaiter(this, void 0, void 0, function* () {
                socket.join(payload);
            }));
            socket.on('public-message', (payload) => __awaiter(this, void 0, void 0, function* () {
                const message = yield (0, publicMessages_1.savePublicMessage)(payload);
                if (!message)
                    return;
                this.io.to(payload.chat).emit('public-message', message);
            }));
            //Disconnect
            socket.on('disconnect', () => __awaiter(this, void 0, void 0, function* () {
                yield (0, users_1.disconnectUser)(id);
                this.io.emit('users-list', yield (0, users_1.getUsers)());
                console.log(`Se desconecto ${user.name}`);
            }));
        }));
    }
}
exports.default = Sockets;
//# sourceMappingURL=Sockets.js.map