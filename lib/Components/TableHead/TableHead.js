"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
function TableHead(_a) {
    var columns = _a.columns, handleSorting = _a.handleSorting;
    var _b = (0, react_1.useState)(''), sortField = _b[0], setSortField = _b[1];
    var _c = (0, react_1.useState)('asc'), order = _c[0], setOrder = _c[1];
    var handleSortingChange = function (accessor, sortable) {
        if (sortable) {
            var sortOrder = accessor === sortField && order === 'asc' ? 'desc' : 'asc';
            setSortField(accessor);
            setOrder(sortOrder);
            handleSorting(accessor, sortOrder);
        }
        else {
            null;
        }
    };
    return (react_1.default.createElement("thead", null,
        react_1.default.createElement("tr", { role: "row" }, columns.map(function (_a) {
            var label = _a.label, accessor = _a.accessor, sortable = _a.sortable;
            var className = sortable
                ? sortField === accessor && order === 'asc'
                    ? 'up'
                    : sortField === accessor && order === 'desc'
                        ? 'down'
                        : 'default'
                : '';
            return (react_1.default.createElement("th", { key: accessor, tabIndex: 0, "aria-controls": "employee-table", rowSpan: 1, colSpan: 1, className: className, "aria-label": "".concat(label, ": activate to sort column"), onClick: function () {
                    return handleSortingChange(accessor, sortable);
                } }, label));
        }))));
}
exports.default = TableHead;
