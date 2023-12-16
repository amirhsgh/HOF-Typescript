"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oddNumberFilter = exports.evenNumberFilter = exports.filter = void 0;
function evenNumberFilter(even) {
    if (even % 2 === 0) {
        return true;
    }
    return false;
}
exports.evenNumberFilter = evenNumberFilter;
function oddNumberFilter(odd) {
    if (odd % 2 != 0) {
        return true;
    }
    return false;
}
exports.oddNumberFilter = oddNumberFilter;
function filter(evenOrodd) {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    var result = [];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        if (evenOrodd(number)) {
            result.push(number);
        }
    }
    return result;
}
exports.filter = filter;
console.log(filter(oddNumberFilter));
