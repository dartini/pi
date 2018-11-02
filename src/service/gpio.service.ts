import {Gpio} from 'pigpio';

export enum GPIOState {
    HIGH = 1,
    LOW = 0
}

export enum GPIODirection {
    OUTPUT = Gpio.OUTPUT,
    INPUT = Gpio.INPUT
}

export class GPIOService {

    public outputs: Gpio[];

    public inputs: Gpio[];

    public constructor() {
        this.outputs = [];
        this.inputs = [];
    }

    public setup(pin: number, direction: GPIODirection): void {
        const gpio = new Gpio(
            pin,
            {
                mode: direction,
                pullUpDown: Gpio.PUD_DOWN
            }
        );

        switch (direction) {
            case GPIODirection.INPUT:
                this.inputs[pin] = gpio;
                break;

            case GPIODirection.OUTPUT:
                this.outputs[pin] = gpio;
                gpio.digitalWrite(GPIOState.LOW);
                break;
        }
    }

    public output(pin: number, state: GPIOState): void {
        if (!this.outputs[pin]) {
            throw new Error('No output GPIO initialized for pin ' + pin);
        }

        this.outputs[pin].digitalWrite(state);
    }

    public input(pin: number): GPIOState {
        if (!this.inputs[pin]) {
            throw new Error('No input GPIO initialized for pin ' + pin);
        }

        return this.inputs[pin].digitalRead();
    }
}
