"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
exports.convertBytes = (bytes) => {
    if (bytes === 0) {
        return '0 Byte';
    }
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const convertedBytes = Math.round(bytes / Math.pow(1024, i));
    return `${convertedBytes} ${constants_1.UNIT_BYTES_PREFIX[i]}`;
};
//# sourceMappingURL=convertBytes.js.map