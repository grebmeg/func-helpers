"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeProperty = (object, excludedProperty, options = {}) => {
    const _a = excludedProperty, property = object[_a], rest = __rest(object, [typeof _a === "symbol" ? _a : _a + ""]);
    const { immutable } = options;
    let result = object;
    if (immutable) {
        delete object[excludedProperty];
    }
    else {
        result = rest;
    }
    return result;
};
//# sourceMappingURL=excludeProperty.js.map