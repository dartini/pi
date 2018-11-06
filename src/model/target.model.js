"use strict";
exports.__esModule = true;
var case_model_1 = require("./case.model");
var PIN_IN_0 = 2;
var PIN_IN_1 = 3;
var PIN_IN_2 = 4;
var PIN_IN_3 = 17;
var PIN_IN_4 = 27;
var PIN_IN_5 = 22;
var PIN_IN_6 = 10;
var PIN_IN_7 = 9;
var PIN_IN_8 = 11;
var PIN_IN_9 = 7;
var PIN_OUT_0 = 14;
var PIN_OUT_1 = 15;
var PIN_OUT_2 = 18;
var PIN_OUT_3 = 23;
var PIN_OUT_4 = 24;
var PIN_OUT_5 = 25;
var PIN_OUT_6 = 8;
exports.outs = [
    PIN_OUT_0, PIN_OUT_1, PIN_OUT_2, PIN_OUT_3, PIN_OUT_4, PIN_OUT_5, PIN_OUT_6
];
exports.ins = [
    PIN_IN_0, PIN_IN_1, PIN_IN_2, PIN_IN_3, PIN_IN_4, PIN_IN_5, PIN_IN_6, PIN_IN_7, PIN_IN_8, PIN_IN_9
];
var Target = /** @class */ (function () {
    function Target() {
        this.cases = [];
        this.cases[PIN_OUT_0] = [
            new case_model_1.Case(PIN_IN_0, PIN_OUT_0, 9, 3),
            new case_model_1.Case(PIN_IN_1, PIN_OUT_0, 12, 3),
            new case_model_1.Case(PIN_IN_2, PIN_OUT_0, 5, 3),
            new case_model_1.Case(PIN_IN_3, PIN_OUT_0, 20, 3),
            new case_model_1.Case(PIN_IN_4, PIN_OUT_0, 10, 3),
            new case_model_1.Case(PIN_IN_5, PIN_OUT_0, 6, 3),
            new case_model_1.Case(PIN_IN_6, PIN_OUT_0, 13, 3),
            new case_model_1.Case(PIN_IN_7, PIN_OUT_0, 4, 3),
            new case_model_1.Case(PIN_IN_8, PIN_OUT_0, 18, 3),
            new case_model_1.Case(PIN_IN_9, PIN_OUT_0, 1, 3)
        ];
        this.cases[PIN_OUT_1] = [
            new case_model_1.Case(PIN_IN_0, PIN_OUT_1, 9, 2),
            new case_model_1.Case(PIN_IN_1, PIN_OUT_1, 12, 2),
            new case_model_1.Case(PIN_IN_2, PIN_OUT_1, 5, 2),
            new case_model_1.Case(PIN_IN_3, PIN_OUT_1, 20, 2),
            new case_model_1.Case(PIN_IN_4, PIN_OUT_1, 10, 2),
            new case_model_1.Case(PIN_IN_5, PIN_OUT_1, 6, 2),
            new case_model_1.Case(PIN_IN_6, PIN_OUT_1, 13, 2),
            new case_model_1.Case(PIN_IN_7, PIN_OUT_1, 4, 2),
            new case_model_1.Case(PIN_IN_8, PIN_OUT_1, 18, 2),
            new case_model_1.Case(PIN_IN_9, PIN_OUT_1, 1, 2)
        ];
        this.cases[PIN_OUT_2] = [
            new case_model_1.Case(PIN_IN_0, PIN_OUT_2, 9, 1),
            new case_model_1.Case(PIN_IN_1, PIN_OUT_2, 12, 1),
            new case_model_1.Case(PIN_IN_2, PIN_OUT_2, 5, 1),
            new case_model_1.Case(PIN_IN_3, PIN_OUT_2, 20, 1),
            new case_model_1.Case(PIN_IN_4, PIN_OUT_2, 10, 1),
            new case_model_1.Case(PIN_IN_5, PIN_OUT_2, 6, 1),
            new case_model_1.Case(PIN_IN_6, PIN_OUT_2, 13, 1),
            new case_model_1.Case(PIN_IN_7, PIN_OUT_2, 4, 1),
            new case_model_1.Case(PIN_IN_8, PIN_OUT_2, 18, 1),
            new case_model_1.Case(PIN_IN_9, PIN_OUT_2, 1, 1)
        ];
        this.cases[PIN_OUT_3] = [
            new case_model_1.Case(PIN_IN_0, PIN_OUT_3, 25, 2),
            new case_model_1.Case(PIN_IN_1, PIN_OUT_3, 25, 1),
        ];
        this.cases[PIN_OUT_4] = [
            new case_model_1.Case(PIN_IN_0, PIN_OUT_4, 14, 1),
            new case_model_1.Case(PIN_IN_1, PIN_OUT_4, 11, 1),
            new case_model_1.Case(PIN_IN_2, PIN_OUT_4, 8, 1),
            new case_model_1.Case(PIN_IN_3, PIN_OUT_4, 16, 1),
            new case_model_1.Case(PIN_IN_4, PIN_OUT_4, 15, 1),
            new case_model_1.Case(PIN_IN_5, PIN_OUT_4, 2, 1),
            new case_model_1.Case(PIN_IN_6, PIN_OUT_4, 17, 1),
            new case_model_1.Case(PIN_IN_7, PIN_OUT_4, 3, 1),
            new case_model_1.Case(PIN_IN_8, PIN_OUT_4, 19, 1),
            new case_model_1.Case(PIN_IN_9, PIN_OUT_4, 7, 1)
        ];
        this.cases[PIN_OUT_5] = [
            new case_model_1.Case(PIN_IN_0, PIN_OUT_5, 14, 2),
            new case_model_1.Case(PIN_IN_1, PIN_OUT_5, 11, 2),
            new case_model_1.Case(PIN_IN_2, PIN_OUT_5, 8, 2),
            new case_model_1.Case(PIN_IN_3, PIN_OUT_5, 16, 2),
            new case_model_1.Case(PIN_IN_4, PIN_OUT_5, 15, 2),
            new case_model_1.Case(PIN_IN_5, PIN_OUT_5, 2, 2),
            new case_model_1.Case(PIN_IN_6, PIN_OUT_5, 17, 2),
            new case_model_1.Case(PIN_IN_7, PIN_OUT_5, 3, 2),
            new case_model_1.Case(PIN_IN_8, PIN_OUT_5, 19, 2),
            new case_model_1.Case(PIN_IN_9, PIN_OUT_5, 7, 2)
        ];
        this.cases[PIN_OUT_6] = [
            new case_model_1.Case(PIN_IN_0, PIN_OUT_6, 14, 3),
            new case_model_1.Case(PIN_IN_1, PIN_OUT_6, 11, 3),
            new case_model_1.Case(PIN_IN_2, PIN_OUT_6, 8, 3),
            new case_model_1.Case(PIN_IN_3, PIN_OUT_6, 16, 3),
            new case_model_1.Case(PIN_IN_4, PIN_OUT_6, 15, 3),
            new case_model_1.Case(PIN_IN_5, PIN_OUT_6, 2, 3),
            new case_model_1.Case(PIN_IN_6, PIN_OUT_6, 17, 3),
            new case_model_1.Case(PIN_IN_7, PIN_OUT_6, 3, 3),
            new case_model_1.Case(PIN_IN_8, PIN_OUT_6, 19, 3),
            new case_model_1.Case(PIN_IN_9, PIN_OUT_6, 7, 3)
        ];
    }
    return Target;
}());
exports.Target = Target;
