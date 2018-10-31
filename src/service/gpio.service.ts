// import {Gpio} from 'onoff';

export enum GPIOState {
    HIGH = 1,
    LOW = 0
}

export enum GPIOMode {
    BCM,
    BOARD
}

export enum GPIODirection {
    OUTPUT = 'out',
    INPUT = 'in'
}

export class GPIOService {

    public outputs: any[];

    public inputs: any[];

    public constructor() {
        this.outputs = [];
        this.inputs = [];
    }

    public setMode(mode: GPIOMode): void {

    }

    public setup(pin: number, direction: GPIODirection): void {
        const gpio = {
            pin: pin,
            direction: direction,
            write: () => void 0,
            readSync: () => 1
        };

        switch (direction) {
            case GPIODirection.INPUT:
                this.inputs[pin] = gpio;
                break;

            case GPIODirection.OUTPUT:
                this.outputs[pin] = gpio;
                break;
        }
    }

    public output(pin: number, state: GPIOState): void {
        if (!this.outputs[pin]) {
            throw new Error('No input GPIO initialized for pin ' + pin);
        }

        this.outputs[pin].write(pin, state);
    }

    public input(pin: number): GPIOState {
        if (!this.inputs[pin]) {
            throw new Error('No output GPIO initialized for pin ' + pin);
        }

        return this.inputs[pin].readSync() === 1 ? GPIOState.HIGH : GPIOState.LOW;
    }
}