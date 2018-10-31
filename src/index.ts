import {TargetService} from './service/target.service';
import {GPIOService} from './service/gpio.service';

const gpioService: GPIOService = new GPIOService();
const targetService: TargetService = new TargetService(gpioService);

let i: number = 1000;

while (i > 0) {
    console.log('tick ' + i, targetService.detectDart());
    i--;
}