import {Target} from './model/target.model';
import * as admin from 'firebase-admin';

const readline = require('readline');
const os = require('os');

const settings = require(process.env.FIRESTORE_PI_CONFIGURATION);
admin.initializeApp({
  credential: admin.credential.cert(settings.keyFilename),
  databaseURL: 'https://dartini-5eb20.firebaseio.com'
});
const db = admin.firestore();
db.settings({timestampsInSnapshots: true});

db.collection('users').doc('EQ5mAwOe1taa4VITGtISrmZnwgF3').get().then((r) => console.log(r)).catch((err) => console.log(err));

const target: Target = new Target();
let value: number = 0;
let multiple: number = 1;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tapeCase() {
    rl.question('Tap a case to simulate between 1 and 20 or 25 or 50 : ', (c: string) => {
        const caseNumber = parseInt(c, 10);
        if ((caseNumber > 0 && caseNumber < 21) || caseNumber === 25 || caseNumber === 50) {
            value = caseNumber;
            if (caseNumber !== 25 && caseNumber !== 50) {
              tapeMultiple();
            }
        } else {
            console.log('Bad case !!');
            tapeCase();
        }
    });
}

function tapeMultiple() {
    rl.question('Tap a multiple to simulate between 1 and 3 : ', (m: string) => {
        const multipleNumber = parseInt(m, 10);
        if ((multipleNumber > 0 && multipleNumber < 4)) {
            multiple = multipleNumber;
        } else {
            console.log('Bad case !!');
            tapeCase();
        }
    });
}

function processCase() {

}

tapeCase();

process.exit(0);
