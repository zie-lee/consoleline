"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function jsonToString(obj) {
    if (!obj)
        return '';
    if (typeof obj === 'string')
        return obj;
    try {
        return JSON.stringify(obj);
    }
    catch (err) {
        console.log(err);
        return obj || '';
    }
}
exports.default = jsonToString;
//# sourceMappingURL=jsonToString.js.map