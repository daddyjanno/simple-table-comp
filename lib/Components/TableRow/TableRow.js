"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function TableRow(_a) {
    var idx = _a.idx, employee = _a.employee, columns = _a.columns;
    return (react_1.default.createElement("tr", { role: "row", className: idx % 2 === 0 ? 'odd' : 'even' }, columns.map(function (column) {
        var tData = employee[column.accessor]
            ? employee[column.accessor]
            : '--';
        return (react_1.default.createElement("td", { key: column.accessor }, tData));
    })));
}
exports.default = TableRow;
