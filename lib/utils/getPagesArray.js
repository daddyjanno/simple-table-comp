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
exports.getPagesArray = void 0;
var LEFT_PAGE = -10;
var RIGHT_PAGE = -5;
var range = function (from, to, step) {
    if (step === void 0) { step = 1; }
    var i = from;
    var range = [];
    while (i <= to) {
        range.push(i);
        i += step;
    }
    return range;
};
function getPagesArray(lastPage, currentPage, pageNeighbours) {
    var totalNumbers = pageNeighbours * +2;
    var totalBlocks = totalNumbers + 2;
    if (lastPage > totalBlocks) {
        var pages = [];
        var leftBound = currentPage - pageNeighbours;
        var rightBound = currentPage + pageNeighbours;
        var beforeLastPage = lastPage - 1;
        var startPage = leftBound > 2 ? leftBound : 2;
        var endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;
        pages = range(startPage, endPage);
        var pagesCount = pages.length;
        var singleSpillOffset = totalNumbers - pagesCount - 1;
        var leftSpill = startPage > 2;
        var rightSpill = endPage < beforeLastPage;
        var leftSpillPage = LEFT_PAGE;
        var rightSpillPage = RIGHT_PAGE;
        if (leftSpill && !rightSpill) {
            var extraPages = range(startPage - singleSpillOffset, startPage - 1);
            pages = __spreadArray(__spreadArray([leftSpillPage], extraPages, true), pages, true);
        }
        else if (!leftSpill && rightSpill) {
            var extraPages = range(endPage + 1, endPage + singleSpillOffset);
            pages = __spreadArray(__spreadArray(__spreadArray([], pages, true), extraPages, true), [rightSpillPage], false);
        }
        else if (leftSpill && rightSpill) {
            pages = __spreadArray(__spreadArray([leftSpillPage], pages, true), [rightSpillPage], false);
        }
        return __spreadArray(__spreadArray([1], pages, true), [lastPage], false);
    }
    return range(1, lastPage);
}
exports.getPagesArray = getPagesArray;
