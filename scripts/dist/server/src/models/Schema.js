"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FieldSchema_1 = require("./FieldSchema");
exports.schemaName = 'Schema';
exports.schema = new mongoose_1.Schema({
    Id: Number,
    Title: String,
    name: String,
    url: String,
    tags: [String],
    description: String,
    fields: [FieldSchema_1.schema],
    Created: { type: Date, default: () => Date.now() },
    Modified: { type: Date, default: () => Date.now() }
});
exports.default = mongoose_1.model(exports.schemaName, exports.schema);
//# sourceMappingURL=Schema.js.map