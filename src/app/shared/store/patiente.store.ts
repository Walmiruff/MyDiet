import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { IPatient } from '../models/patient.model';


@Injectable({
    providedIn: 'root'
})
export class PatientStore {

    private patienteSource = new BehaviorSubject<IPatient>(null);

    patiente$ = this.patienteSource.asObservable().pipe(shareReplay(1));

    set(patiente: IPatient) {
        this.patienteSource.next(patiente);
    }
}
