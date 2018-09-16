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
exports.schema.statics.createDoc = function (body, cb) {
    return this.create(body, cb);
};
exports.schema.statics.findAll = function (cb) {
    return this.find({}, cb);
};
exports.schema.statics.findByUrl = function (url, cb) {
    return this.findOne({ name: this.convertName(url) }, cb);
};
exports.schema.statics.convertToName = function (url) {
    return this.properCase(url.slice(1, url.length - 1));
};
exports.schema.statics.properCase = function (url) {
    if (url === undefined) {
        return '';
    }
    return url.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};
exports.default = mongoose_1.model(exports.schemaName, exports.schema);
//# sourceMappingURL=Schema.js.map