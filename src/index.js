"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomId = void 0;
const crypto_js_1 = require("crypto-js");
const constants_1 = require("./constants");
function randomId(length = 10, type = ["letter", "number"]) {
    let data = [];
    if (!Array.isArray(type)) {
        throw new TypeError("Expected a string or an array");
    }
    if (typeof type === "string") {
        switch (type) {
            case "number":
                data.push(...constants_1.NUMBER);
                break;
            case "letter":
                data.push(...constants_1.STRING);
                break;
            case "symbol":
                data.push(...constants_1.SYMBOLS);
                break;
            default:
                throw new Error("Type should be either 'number' or 'letter', 'symbol' otherwise a array which contains these strings, but we got " + JSON.stringify(type));
        }
    }
    else {
        for (const t of type) {
            switch (t) {
                case "number":
                    if (!data.includes("0"))
                        data.push(...constants_1.NUMBER);
                    break;
                case "letter":
                    if (!data.includes("A"))
                        data.push(...constants_1.STRING);
                    break;
                case "symbol":
                    if (!data.includes("!"))
                        data.push(...constants_1.SYMBOLS);
                    break;
                default:
                    throw new Error(`Array of type should contain string equal to either 'number' or 'letter', 'symbol' but we got ${JSON.stringify(t)}`);
            }
        }
    }
    return [...crypto_js_1.lib.WordArray.random(length * 4).words].reduce((a, b) => a + data[Math.floor(b % data.length)], "");
}
exports.randomId = randomId;
exports.default = randomId;
