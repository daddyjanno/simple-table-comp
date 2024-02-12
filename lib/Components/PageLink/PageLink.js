"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function PageLink(_a) {
    var active = _a.active, disabled = _a.disabled, children = _a.children, otherProps = __rest(_a, ["active", "disabled", "children"]);
    var customClassName = active ? 'active' : 'inactive';
    if (disabled) {
        return (react_1.default.createElement("span", { className: 'page-link disabled', "aria-disabled": "true" }, children));
    }
    return (react_1.default.createElement("a", __assign({ className: "page-link ".concat(customClassName), "aria-current": active ? 'page' : undefined }, otherProps), children));
}
exports.default = PageLink;
