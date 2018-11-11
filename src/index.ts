import {TargetService} from './service/target.service';
import {GPIOService} from './service/gpio.service';
import {Case} from './model/case.model';
import {FirestoreService} from './service/firestore.service';
import * as os from 'os';

const gpioService: GPIOService = new GPIOService();
const targetService: TargetService = new TargetService(gpioService);

const settings = require(process.env.FIRESTORE_PI_CONFIGURATION);
const firestoreService: FirestoreService = new FirestoreService(
    settings.databaseUrl,
    settings.keyFilename,
    os.hostname()
);

firestoreService.init().subscribe(
    () => {
        while (true) {
            const c: Case = targetService.detectDart();
            if (c) {
                console.log(c);
            }
        }
    }
);
