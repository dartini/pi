import {GPIODirection, GPIOService, GPIOState} from './gpio.service';
import {ins, outs, Target} from '../model/target.model';
import {Case} from '../model/case.model';
import {sleep}  from 'sleep';

export class TargetService {

    public target: Target = new Target();

    public constructor(private gpioService: GPIOService) {
        outs.forEach((out: number) => {
            this.gpioService.setup(out, GPIODirection.OUTPUT);
        });

        ins.forEach((input: number) =>{
            this.gpioService.setup(input, GPIODirection.INPUT);
        });
    }

    public detectDart(): Case {
        let casee: Case = null;

        outs.forEach((out: number) => {
            this.gpioService.output(out, GPIOState.HIGH);

            this.target.cases[out].forEach((c: Case) => {
               if (this.gpioService.input(c.pinIn) === GPIOState.HIGH) {
                   casee = c;
                   sleep.msleep(800);
               }
            });

            this.gpioService.output(out, GPIOState.LOW);
        });

        return casee
    }
}