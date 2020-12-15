import { Injectable } from '@angular/core';

import { IObj } from '../../shared/models/obj.model';

@Injectable({
  providedIn: 'root'
})
export class CalcService {
  public obj: IObj;

  constructor() { }

  public estaturaIdadeMenino(idade: number, altura: number): IObj {
    switch (idade) {
      case 0:
        this.obj.ref = '0.49 m'
          switch (altura) {
            case < 0.442:
              this.obj = { text: 'Muito baixa estatura para idade' , brush: 'red'}
              return;
          
            default:
              break;
          }
        return;

      default:
        return;
    }
  }
}
