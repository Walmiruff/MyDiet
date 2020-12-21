import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { IAvaAntrop } from '../models/ava-antrop.model';


@Injectable({
    providedIn: 'root'
})
export class AvaAntropStore {

    private avaAntropSource = new BehaviorSubject<IAvaAntrop>(null);

    avaAntrop$ = this.avaAntropSource.asObservable().pipe(shareReplay(1));

    set(avaAntrop: IAvaAntrop) {
        this.avaAntropSource.next(avaAntrop);
    }
}