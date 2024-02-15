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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var useSortableTable_1 = require("../utils/useSortableTable");
var TableHead_1 = __importDefault(require("../Components/TableHead/TableHead"));
var TableShowEntries_1 = __importDefault(require("../Components/TableShowEntries/TableShowEntries"));
var TableSearch_1 = __importDefault(require("../Components/TableSearch/TableSearch"));
var Pagination_1 = __importDefault(require("../Components/Pagination/Pagination"));
var TableRow_1 = __importDefault(require("../Components/TableRow/TableRow"));
require("../Style/index.css");
function Table(_a) {
    var caption = _a.caption, data = _a.data, columns = _a.columns, showEntries = _a.showEntries, showSearch = _a.showSearch;
    var _b = (0, useSortableTable_1.useSortableTable)(data), tableData = _b[0], handleSorting = _b[1];
    var _c = (0, react_1.useState)(tableData || data), filteredData = _c[0], setFilteredData = _c[1];
    var _d = (0, react_1.useState)(10), entries = _d[0], setEntries = _d[1];
    var _e = (0, react_1.useState)(''), searchValue = _e[0], setSearchValue = _e[1];
    var _f = (0, react_1.useState)(1), currentPage = _f[0], setCurrentPage = _f[1];
    function entriesCallBack(value) {
        setEntries(value);
    }
    function searchValueCallBack(value) {
        if (value.length >= 2) {
            setSearchValue(value);
        }
        else {
            setSearchValue('');
        }
    }
    function currentPageCallBack(value) {
        setCurrentPage(value);
    }
    (0, react_1.useEffect)(function () {
        if (searchValue && showSearch && tableData) {
            setFilteredData(tableData.filter(function (item) {
                return Object.keys(item).some(function (key) {
                    return item[key]
                        .toLowerCase()
                        .includes(searchValue.toLowerCase());
                });
            }));
        }
        else if (tableData) {
            setFilteredData(tableData);
        }
    }, [showSearch, searchValue, setFilteredData, tableData]);
    return (react_1.default.createElement("div", { className: "dataTable_container" }, filteredData && (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "dataTable_infos" },
            react_1.default.createElement("h2", null, caption),
            react_1.default.createElement("div", { className: "dataTable_filter" },
                showEntries && (react_1.default.createElement(TableShowEntries_1.default, { entriesCallBack: entriesCallBack, currentPageCallBack: currentPageCallBack })),
                showSearch && (react_1.default.createElement(TableSearch_1.default, { searchValueCallBack: searchValueCallBack }))),
            searchValue && (react_1.default.createElement("span", null,
                filteredData.length,
                " results"))),
        react_1.default.createElement("table", { id: "employee-table", className: "dataTable", role: "grid", "aria-describedby": "employee-table_info", width: '100%' },
            react_1.default.createElement(TableHead_1.default, { columns: columns, handleSorting: handleSorting }),
            react_1.default.createElement("tbody", null,
                !filteredData && react_1.default.createElement("div", null, "no data to display"),
                showEntries &&
                    filteredData
                        .slice(currentPage * entries - entries, currentPage * entries)
                        .map(function (employee, idx) {
                        return (react_1.default.createElement(TableRow_1.default, { key: idx, idx: idx, employee: employee, columns: columns }));
                    }),
                !showEntries &&
                    filteredData.map(function (employee, idx) {
                        return (react_1.default.createElement(TableRow_1.default, { key: idx, idx: idx, employee: employee, columns: columns }));
                    }))),
        showEntries && (react_1.default.createElement(Pagination_1.default, { filteredData: filteredData, pageNeighbours: 2, entries: entries, currentPageCallBack: currentPageCallBack, currentPage: currentPage }))))));
}
exports.default = Table;
