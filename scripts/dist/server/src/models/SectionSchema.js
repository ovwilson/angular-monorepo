"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FieldSchema_1 = require("./FieldSchema");
exports.schemaName = 'SectionSchema';
exports.schema = new mongoose_1.Schema({
    name: String,
    label: String,
    url: String,
    description: String,
    active: Boolean,
    fields: [FieldSchema_1.schema]
});
exports.default = mongoose_1.model(exports.schemaName, exports.schema);
//# sourceMappingURL=SectionSchema.js.map