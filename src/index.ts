import {TargetService} from './service/target.service';
import {GPIOService} from './service/gpio.service';

const gpioService: GPIOService = new GPIOService();
const targetService: TargetService = new TargetService(gpioService);

while (true) {
    targetService.detectDart();
}