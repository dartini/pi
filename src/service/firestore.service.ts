import {DocumentReference, Firestore} from "@google-cloud/firestore";
import * as admin from 'firebase-admin';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {TargetStatus} from '../model/target-status.enum';
import DocumentSnapshot = admin.firestore.DocumentSnapshot;
import {filter, map, mergeMap, tap} from 'rxjs/operators';

export class FirestoreService {

    private docTarget: DocumentReference;

    private db: Firestore;

    private targetName: string;

    public constructor(databaseUrl: string, keyFileName: string, targetName: string) {
        this.db = admin
            .initializeApp({
                credential: admin.credential.cert(keyFileName),
                databaseURL: databaseUrl
            })
            .firestore();

        this.db.settings({timestampsInSnapshots: true});
        this.targetName = targetName;
    }

    public init(): Observable<any> {
        this.docTarget = this.db.collection('targets').doc(this.targetName);

        return fromPromise(this.docTarget.set({darts: [], status: TargetStatus.FREE}));
    }

    public insertDart(value: number, multiple: number): Observable<any> {
        return fromPromise(this.docTarget.get()).pipe(
            map((ds: DocumentSnapshot) => ds.data()),
            filter((data: any) => data.darts.length < data.dartMax),
            tap((data: any) => data.darts.push({value: value, multiple: multiple})),
            mergeMap((data: any) => this.docTarget.set(data))
        );
    }
}