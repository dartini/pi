const Gpio = require('onoff').Gpio;

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

    public outputs: Gpio[];

    public inputs: Gpio[];

    public constructor() {

    }

    public setMode(mode: GPIOMode): void {

    }

    public setup(pin: number, direction: GPIODirection): void {
        const gpio = new Gpio(pin, direction);

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
        if (this.outputs[pin]) {
            throw new Error('No GPIO initialized');
        }

        this.outputs[pin].write(pin, state);
    }

    public input(pin: number): GPIOState {
        if (this.inputs[pin]) {
            throw new Error('No GPIO initialized');
        }

        return this.inputs[pin].readSync() === 1 ? GPIOState.HIGH : GPIOState.LOW;
    }
}