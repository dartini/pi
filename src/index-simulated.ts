import {Target} from './model/target.model';
import * as readline from 'readline';
import * as os from 'os';
import {FirestoreService} from './service/firestore.service';
import {green, yellow} from 'colors/safe';

const target: Target = new Target();
let value: number = 0;
let multiple: number = 1;

let rl = null;

const settings = require(process.env.FIRESTORE_PI_CONFIGURATION);
const firestoreService: FirestoreService = new FirestoreService(
    settings.databaseUrl,
    settings.keyFilename,
    os.hostname()
);

firestoreService.init().subscribe(
    () => init()
);


function init() {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    tapeCase();
}

function tapeCase() {
    rl.question(green('Tap a case to simulate between 1 and 20, 25, 50 or exit : '), (c: string) => {
        if (c === 'exit') {
            rl.close();
            process.exit(0);
        }

        const caseNumber = parseInt(c, 10);
        if ((caseNumber > 0 && caseNumber < 21) || caseNumber === 25 || caseNumber === 50) {
            value = caseNumber;
            if (value !== 25 && value !== 50) {
              tapeMultiple();
            } else {
                if (value === 50) {
                    value = 25;
                    multiple = 2;
                }
                processCase();
            }
        } else {
            console.warn(yellow('Bad case !!'));
            tapeCase();
        }
    });
}

function tapeMultiple() {
    rl.question(green('Tap a multiple to simulate between 1 and 3 : '), (m: string) => {
        const multipleNumber = parseInt(m, 10);
        if ((multipleNumber > 0 && multipleNumber < 4)) {
            multiple = multipleNumber;
            processCase();
        } else {
            console.warn(yellow('Bad multiple !!'));
            tapeMultiple();
        }
    });
}

function processCase() {
    firestoreService.insertDart(value, multiple).subscribe(
        () => void 0,
        () => void 0,
        () => tapeCase()
    );
}
