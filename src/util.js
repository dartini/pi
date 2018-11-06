"use strict";
exports.__esModule = true;
function sleep(ms) {
    var start = Date.now();
    while (true) {
        var clock = (Date.now() - start);
        if (clock >= ms) {
            break;
        }
    }
}
exports.sleep = sleep;
