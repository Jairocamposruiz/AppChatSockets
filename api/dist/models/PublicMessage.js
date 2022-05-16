"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PublicMessageSchema = new mongoose_1.Schema({
    from: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    to: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Chat', required: true },
    message: { type: String, required: true }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('PublicMessage', PublicMessageSchema);
//# sourceMappingURL=PublicMessage.js.map