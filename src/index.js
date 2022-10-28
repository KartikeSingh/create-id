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
exports.__esModule = true;
exports.randomID = void 0;
// @ts-ignore
var node_crypto_1 = require("node:crypto");
var STRING = [
    'Q', 'W', 'E', 'R', 'T', 'Y',
    'U', 'I', 'O', 'P', 'A', 'S',
    'D', 'F', 'G', 'H', 'J', 'K',
    'L', 'Z', 'X', 'C', 'V', 'B',
    'N', 'M',
    'q', 'w', 'e', 'r', 't', 'y',
    'u', 'i', 'o', 'p', 'a', 's',
    'd', 'f', 'g', 'h', 'j', 'k',
    'l', 'z', 'x', 'c', 'v', 'b',
    'n', 'm'
];
var NUMBER = [
    '0', '1', '2', '3',
    '4', '5', '6', '7',
    '8', '9'
];
var SYMBOLS = [
    '!', '@', '#',
    '$', '%', '^',
    '&', '*'
];
function randomID(length, type) {
    if (length === void 0) { length = 10; }
    if (type === void 0) { type = ["letter", "number"]; }
    var data = [];
    if (typeof type === "string") {
        switch (type) {
            case "number":
                data.push.apply(data, NUMBER);
                break;
            case "letter":
                data.push.apply(data, STRING);
                break;
            case "symbol":
                data.push.apply(data, SYMBOLS);
                break;
            default:
                throw new Error("Type should be either 'number' or 'letter', 'symbol' otherwise a array which contains these strings, but we got " + JSON.stringify(type));
        }
    }
    else if (!Array.isArray(type)) {
        throw new TypeError("Expected a string or an array");
    }
    else {
        for (var _i = 0, type_1 = type; _i < type_1.length; _i++) {
            var t = type_1[_i];
            switch (t) {
                case "number":
                    if (!data.includes("0"))
                        data.push.apply(data, NUMBER);
                    break;
                case "letter":
                    if (!data.includes("A"))
                        data.push.apply(data, STRING);
                    break;
                case "symbol":
                    if (!data.includes("!"))
                        data.push.apply(data, SYMBOLS);
                    break;
                default:
                    throw new Error("Array of type should contain string equal to either 'number' or 'letter', 'symbol' but we got ".concat(JSON.stringify(t)));
            }
        }
    }
    return __spreadArray([], (0, node_crypto_1.randomBytes)(length), true).reduce(function (a, b) { return a + data[Math.floor(b % data.length)]; }, "");
}
exports.randomID = randomID;
