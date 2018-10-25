import {Case} from './case.model';

const PIN_IN_0: number = 0;
const PIN_IN_1: number = 1;
const PIN_IN_2: number = 2;
const PIN_IN_3: number = 3;
const PIN_IN_4: number = 4;
const PIN_IN_5: number = 5;
const PIN_IN_6: number = 6;
const PIN_IN_7: number = 7;
const PIN_IN_8: number = 8;
const PIN_IN_9: number = 9;

const PIN_OUT_0: number = 0;
const PIN_OUT_1: number = 1;
const PIN_OUT_2: number = 2;
const PIN_OUT_3: number = 4;
const PIN_OUT_4: number = 5;
const PIN_OUT_5: number = 6;
const PIN_OUT_6: number = 7;

export const outs: number[] = [
    PIN_OUT_0, PIN_OUT_1, PIN_OUT_2, PIN_OUT_3, PIN_OUT_4, PIN_OUT_5, PIN_OUT_6
];
export const ins: number[] = [
    PIN_IN_0, PIN_IN_1, PIN_IN_2, PIN_IN_3, PIN_IN_4, PIN_IN_5, PIN_IN_6, PIN_IN_7, PIN_IN_8, PIN_IN_9
];

export class Target {

    public cases: {[number]: Case[]} = {};

    public constructor() {
        this.cases[PIN_OUT_0] = [
            new Case(PIN_IN_0, PIN_OUT_0, 9,    3),
            new Case(PIN_IN_1, PIN_OUT_0, 12,   3),
            new Case(PIN_IN_2, PIN_OUT_0, 5,    3),
            new Case(PIN_IN_3, PIN_OUT_0, 20,   3),
            new Case(PIN_IN_4, PIN_OUT_0, 10,   3),
            new Case(PIN_IN_5, PIN_OUT_0, 2,    3),
            new Case(PIN_IN_6, PIN_OUT_0, 17,   3),
            new Case(PIN_IN_7, PIN_OUT_0, 3,    3),
            new Case(PIN_IN_8, PIN_OUT_0, 19,   3),
            new Case(PIN_IN_9, PIN_OUT_0, 7,    3)
        ];
        this.cases[PIN_OUT_1] = [
            new Case(PIN_IN_0, PIN_OUT_1, 9,    2),
            new Case(PIN_IN_1, PIN_OUT_1, 12,   2),
            new Case(PIN_IN_2, PIN_OUT_1, 5,    2),
            new Case(PIN_IN_3, PIN_OUT_1, 20,   2),
            new Case(PIN_IN_4, PIN_OUT_1, 10,   2),
            new Case(PIN_IN_5, PIN_OUT_1, 2,    2),
            new Case(PIN_IN_6, PIN_OUT_1, 17,   2),
            new Case(PIN_IN_7, PIN_OUT_1, 3,    2),
            new Case(PIN_IN_8, PIN_OUT_1, 19,   2),
            new Case(PIN_IN_9, PIN_OUT_1, 7,    2)
        ];
        this.cases[PIN_OUT_2] = [
            new Case(PIN_IN_0, PIN_OUT_2, 9,    1),
            new Case(PIN_IN_1, PIN_OUT_2, 12,   1),
            new Case(PIN_IN_2, PIN_OUT_2, 5,    1),
            new Case(PIN_IN_3, PIN_OUT_2, 20,   1),
            new Case(PIN_IN_4, PIN_OUT_2, 10,   1),
            new Case(PIN_IN_5, PIN_OUT_2, 2,    1),
            new Case(PIN_IN_6, PIN_OUT_2, 17,   1),
            new Case(PIN_IN_7, PIN_OUT_2, 3,    1),
            new Case(PIN_IN_8, PIN_OUT_2, 19,   1),
            new Case(PIN_IN_9, PIN_OUT_2, 7,    1)
        ];
        this.cases[PIN_OUT_3] = [
            new Case(PIN_IN_0, PIN_OUT_3, 25,    2),
            new Case(PIN_IN_1, PIN_OUT_3, 25,   1),
        ];
        this.cases[PIN_OUT_4] = [
            new Case(PIN_IN_0, PIN_OUT_4, 14,   1),
            new Case(PIN_IN_1, PIN_OUT_4, 11,   1),
            new Case(PIN_IN_2, PIN_OUT_4, 8,    1),
            new Case(PIN_IN_3, PIN_OUT_4, 16,   1),
            new Case(PIN_IN_4, PIN_OUT_4, 15,   1),
            new Case(PIN_IN_5, PIN_OUT_4, 6,    1),
            new Case(PIN_IN_6, PIN_OUT_4, 13,   1),
            new Case(PIN_IN_7, PIN_OUT_4, 4,    1),
            new Case(PIN_IN_8, PIN_OUT_4, 18,   1),
            new Case(PIN_IN_9, PIN_OUT_4, 1,    1)
        ];
        this.cases[PIN_OUT_5] = [
            new Case(PIN_IN_0, PIN_OUT_5, 14,   2),
            new Case(PIN_IN_1, PIN_OUT_5, 11,   2),
            new Case(PIN_IN_2, PIN_OUT_5, 8,    2),
            new Case(PIN_IN_3, PIN_OUT_5, 16,   2),
            new Case(PIN_IN_4, PIN_OUT_5, 15,   2),
            new Case(PIN_IN_5, PIN_OUT_5, 6,    2),
            new Case(PIN_IN_6, PIN_OUT_5, 13,   2),
            new Case(PIN_IN_7, PIN_OUT_5, 4,    2),
            new Case(PIN_IN_8, PIN_OUT_5, 18,   2),
            new Case(PIN_IN_9, PIN_OUT_5, 1,    2)
        ];
        this.cases[PIN_OUT_6] = [
            new Case(PIN_IN_0, PIN_OUT_6, 14,   3),
            new Case(PIN_IN_1, PIN_OUT_6, 11,   3),
            new Case(PIN_IN_2, PIN_OUT_6, 8,    3),
            new Case(PIN_IN_3, PIN_OUT_6, 16,   3),
            new Case(PIN_IN_4, PIN_OUT_6, 15,   3),
            new Case(PIN_IN_5, PIN_OUT_6, 6,    3),
            new Case(PIN_IN_6, PIN_OUT_6, 13,   3),
            new Case(PIN_IN_7, PIN_OUT_6, 4,    3),
            new Case(PIN_IN_8, PIN_OUT_6, 18,   3),
            new Case(PIN_IN_9, PIN_OUT_6, 1,    3)
        ];
    }
}