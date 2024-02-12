"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSortableTable = void 0;
var react_1 = require("react");
function useSortableTable(data) {
    var _a = (0, react_1.useState)(data), tableData = _a[0], setTableData = _a[1];
    var handleSorting = function (sortField, sortOrder) {
        if (sortField) {
            var sorted = __spreadArray([], tableData, true).sort(function (a, b) {
                if (a[sortField] === null)
                    return 1;
                if (b[sortField] === null)
                    return -1;
                if (a[sortField] === null && b[sortField] === null)
                    return 0;
                return (a[sortField]
                    .toString()
                    .localeCompare(b[sortField].toString(), 'en', {
                    numeric: true
                }) * (sortOrder === 'asc' ? 1 : -1));
            });
            setTableData(sorted);
        }
    };
    return [tableData, handleSorting];
}
exports.useSortableTable = useSortableTable;
