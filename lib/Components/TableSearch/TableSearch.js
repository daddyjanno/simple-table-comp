"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function TableSearch(_a) {
    var searchValueCallBack = _a.searchValueCallBack;
    return (react_1.default.createElement("div", { className: "dataTable_search" },
        react_1.default.createElement("label", null,
            'Search: ',
            react_1.default.createElement("input", { type: "search", "aria-controls": "employee-table", autoFocus: true, placeholder: "Search...", onChange: function (e) { return searchValueCallBack(e.target.value); } }))));
}
exports.default = TableSearch;
