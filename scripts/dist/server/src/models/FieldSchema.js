"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.schemaName = 'FieldSchema';
exports.schema = new mongoose_1.Schema({
    Id: Number,
    Title: String,
    name: String,
    label: String,
    description: String,
    options: [{ idx: Number, key: String, value: String }],
    type: String,
    required: Boolean,
    visible: Boolean,
    Created: { type: Date, default: () => Date.now() },
    Modified: { type: Date, default: () => Date.now() }
});
exports.default = mongoose_1.model(exports.schemaName, exports.schema);
//# sourceMappingURL=FieldSchema.js.map