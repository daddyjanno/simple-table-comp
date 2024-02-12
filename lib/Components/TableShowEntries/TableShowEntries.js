"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function TableShowEntries(_a) {
    var entriesCallBack = _a.entriesCallBack, currentPageCallBack = _a.currentPageCallBack;
    return (react_1.default.createElement("div", { className: "dataTable_length" },
        react_1.default.createElement("label", null,
            'Show  ',
            react_1.default.createElement("select", { name: "employee-table_length", "aria-controls": "employee-table", onChange: function (e) {
                    entriesCallBack(+e.target.value);
                    currentPageCallBack(1);
                } },
                react_1.default.createElement("option", { defaultChecked: true, value: 10 }, "10"),
                react_1.default.createElement("option", { value: 25 }, "25"),
                react_1.default.createElement("option", { value: 100 }, "100")),
            '  entries')));
}
exports.default = TableShowEntries;
