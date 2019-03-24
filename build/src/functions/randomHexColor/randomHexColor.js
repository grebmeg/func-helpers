"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomHexColor = () => {
    const hex = Math.floor(Math.random() * 0xFFFFFF)
        .toString(16)
        .padStart(6, '0');
    return `#${hex}`;
};
//# sourceMappingURL=randomHexColor.js.map