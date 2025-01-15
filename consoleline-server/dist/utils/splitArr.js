"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(list, size) {
    if (list.length <= size)
        return list;
    const count = Math.ceil(list.length / size);
    let groupNum = 1;
    const result = [];
    while (groupNum <= count) {
        result.push(list.slice((groupNum - 1) * size, groupNum * size));
        groupNum++;
    }
    return result;
}
//# sourceMappingURL=splitArr.js.map