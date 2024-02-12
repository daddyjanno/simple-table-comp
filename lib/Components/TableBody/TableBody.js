"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function TableBody(props) {
    var reduceData = props.tableData.filter(function (item) {
        return Object.keys(item).some(function (key) {
            return item[key].toLowerCase().includes(props.searchValue.toLowerCase());
        });
    });
    return (react_1.default.createElement("tbody", null, reduceData.map(function (employee, idx) {
        return (react_1.default.createElement("tr", { key: idx, role: "row", className: idx % 2 === 0 ? 'odd' : 'even' }, props.columns.map(function (_a) {
            var accessor = _a.accessor;
            var tData = employee[accessor]
                ? employee[accessor]
                : '--';
            return react_1.default.createElement("td", { key: accessor }, tData);
        })));
    })));
}
exports.default = TableBody;
