import {TargetService} from './service/target.service';
import {GPIOService} from './service/gpio.service';
import {Case} from './model/case.model';

const gpioService: GPIOService = new GPIOService();
const targetService: TargetService = new TargetService(gpioService);

while (true) {
    const c: Case = targetService.detectDart();
    if (c) {
        console.log(c);
    }
}
