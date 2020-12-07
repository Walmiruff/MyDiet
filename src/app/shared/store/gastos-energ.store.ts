import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { IGastosEnerg } from '../models/gastos-energ.model';


@Injectable({
    providedIn: 'root'
})
export class GastosEnergStore {

    private gastosEnergSource = new BehaviorSubject<IGastosEnerg>(null);

    gastosEnerg$ = this.gastosEnergSource.asObservable().pipe(shareReplay(1));

    set(patiente: IGastosEnerg) {
        this.gastosEnergSource.next(patiente);
    }
}
