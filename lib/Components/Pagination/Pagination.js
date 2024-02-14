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
var getPagesArray_1 = require("../../utils/getPagesArray");
var LEFT_PAGE = -10;
var RIGHT_PAGE = -5;
function Pagination(_a) {
    var filteredData = _a.filteredData, pageNeighbours = _a.pageNeighbours, entries = _a.entries, currentPageCallBack = _a.currentPageCallBack, currentPage = _a.currentPage;
    var _b = (0, react_1.useState)(1), lastPage = _b[0], setLastPage = _b[1];
    var _c = (0, react_1.useState)(1), tempCurr = _c[0], setTempCurr = _c[1];
    (0, react_1.useEffect)(function () {
        setLastPage(entries ? Math.ceil(filteredData.length / entries) : 1);
    }, [entries, filteredData.length]);
    var handleClick = function (value) {
        currentPageCallBack(value);
    };
    var handleGoTo = function (e) {
        e.preventDefault();
        var goToForm = document.querySelector('.goToPage_container');
        if (tempCurr <= lastPage) {
            currentPageCallBack(tempCurr);
            goToForm === null || goToForm === void 0 ? void 0 : goToForm.reset();
        }
    };
    var handleChange = function (e) {
        e.preventDefault();
        setTempCurr(+e.target.value);
    };
    var pages = (0, getPagesArray_1.getPagesArray)(lastPage, currentPage, pageNeighbours);
    if (lastPage === 1)
        return null;
    return (react_1.default.createElement("div", { className: "pagination_container" },
        react_1.default.createElement("nav", { className: "pagination", "aria-label": "Pagination" }, pages.map(function (pageNum, idx) {
            return pageNum === LEFT_PAGE ? (react_1.default.createElement("button", { key: idx, disabled: isNaN(pageNum), className: "page-link ".concat(currentPage === pageNum ? 'active' : 'inactive'), onClick: function () { return handleClick(currentPage - 1); } },
                react_1.default.createElement("span", { "aria-describedby": "Previous" }, "\u00AB"))) : pageNum === RIGHT_PAGE ? (react_1.default.createElement("button", { key: idx, disabled: isNaN(pageNum), className: "page-link ".concat(currentPage === pageNum ? 'active' : 'inactive'), onClick: function () { return handleClick(currentPage + 1); } },
                react_1.default.createElement("span", { "aria-describedby": "Next" }, "\u00BB"))) : (react_1.default.createElement("button", { key: idx, disabled: isNaN(pageNum), className: "page-link ".concat(currentPage === pageNum ? 'active' : 'inactive'), onClick: function () { return handleClick(pageNum); } }, pageNum));
        })),
        react_1.default.createElement("form", { className: "goToPage_container", name: "goToPage", onSubmit: handleGoTo },
            react_1.default.createElement("label", { htmlFor: "goToPage_input" }, "Go to page: "),
            react_1.default.createElement("input", { className: "goToPage_input", name: "goToPage_input", id: "goToPage_input", type: "number", min: 1, max: lastPage, onChange: handleChange }),
            react_1.default.createElement("button", { onClick: handleGoTo }, "Go"))));
}
exports.default = Pagination;
