import { Injectable } from '@angular/core';

import { IObj } from '../../shared/models/obj.model';

@Injectable({
  providedIn: 'root'
})
export class CalcAdolService {
  public obj: IObj;

  constructor() { }

  public estaturaIdadeMenino(idade: number, altura: number): IObj {
    switch (idade) {
      case 5:
        if (altura < 0.96) {
          return this.obj = { ref: '1,10 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.01) {
          return this.obj = { ref: '1,10 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,10 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 6:
        if (altura < 1.01) {
          return this.obj = { ref: '1,16 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.06) {
          return this.obj = { ref: '1,16 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,16 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 7:
        if (altura < 1.05) {
          return this.obj = { ref: '1,21 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.11) {
          return this.obj = { ref: '1,21 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,21 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 8:
        if (altura < 1.1) {
          return this.obj = { ref: '1,27 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.16) {
          return this.obj = { ref: '1,27 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,27 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 9:
        if (altura < 1.14) {
          return this.obj = { ref: '1,32 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.2) {
          return this.obj = { ref: '1,32 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,32 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 10:
        if (altura < 1.18) {
          return this.obj = { ref: '1,37 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.25) {
          return this.obj = { ref: '1,37 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,37 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 11:
        if (altura < 1.22) {
          return this.obj = { ref: '1,43 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.29) {
          return this.obj = { ref: '1,43 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,43 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 12:
        if (altura < 1.27) {
          return this.obj = { ref: '1,49 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.34) {
          return this.obj = { ref: '1,49 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,49 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 13:
        if (altura < 1.33) {
          return this.obj = { ref: '1,56 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.41) {
          return this.obj = { ref: '1,56 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,56 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 14:
        if (altura < 1.4) {
          return this.obj = { ref: '1,63 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.47) {
          return this.obj = { ref: '1,63 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,63 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 15:
        if (altura < 1.45) {
          return this.obj = { ref: '1,69 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.53) {
          return this.obj = { ref: '1,69 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,69 m', text: 'Estatura Adequada', brush: 'red' };
        }


      case 16:
        if (altura < 1.49) {
          return this.obj = { ref: '1,72 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.57) {
          return this.obj = { ref: '1,72 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,72 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 17:
        if (altura < 1.52) {
          return this.obj = { ref: '1,75 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.59) {
          return this.obj = { ref: '1,75 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,75 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 18:
        if (altura < 1.53) {
          return this.obj = { ref: '1,76 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.61) {
          return this.obj = { ref: '1,76 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,76 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 19:
        if (altura < 1.54) {
          return this.obj = { ref: '1,76 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.61) {
          return this.obj = { ref: '1,76 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,76 m', text: 'Estatura Adequada', brush: 'red' };
        }


    }
  }

  
  public estaturaIdadeMenina(idade: number, altura: number): IObj {
    switch (idade) {
      case 5:
        if (altura < 0.95) {
          return this.obj = { ref: '1,09 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.0) {
          return this.obj = { ref: '1,09 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,09 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 6:
        if (altura < 0.99) {
          return this.obj = { ref: '1,15 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.04) {
          return this.obj = { ref: '1,15 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,15 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 7:
        if (altura < 1.04) {
          return this.obj = { ref: '1,20 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.09) {
          return this.obj = { ref: '1,20 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,20 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 8:
        if (altura < 1.09) {
          return this.obj = { ref: '1,26 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.15) {
          return this.obj = { ref: '1,26 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,26 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 9:
        if (altura < 1.14) {
          return this.obj = { ref: '1,32 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.2) {
          return this.obj = { ref: '1,32 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,32 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 10:
        if (altura < 1.19) {
          return this.obj = { ref: '1,38 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.25) {
          return this.obj = { ref: '1,38 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,38 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 11:
        if (altura < 1.25) {
          return this.obj = { ref: '1,45 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.31) {
          return this.obj = { ref: '1,45 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,45 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 12:
        if (altura < 1.3) {
          return this.obj = { ref: '1,51 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.37) {
          return this.obj = { ref: '1,51 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,51 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 13:
        if (altura < 1.35) {
          return this.obj = { ref: '1,56 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.42) {
          return this.obj = { ref: '1,56 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,56 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 14:
        if (altura < 1.39) {
          return this.obj = { ref: '1,59 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.45) {
          return this.obj = { ref: '1,59 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,59 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 15:
        if (altura < 1.41) {
          return this.obj = { ref: '1,61 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.47) {
          return this.obj = { ref: '1,61 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,61 m', text: 'Estatura Adequada', brush: 'red' };
        }


      case 16:
        if (altura < 1.42) {
          return this.obj = { ref: '1,62 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.48) {
          return this.obj = { ref: '1,62 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,62 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 17:
        if (altura < 1.42) {
          return this.obj = { ref: '1,63 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.49) {
          return this.obj = { ref: '1,63 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,63 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 18:
        if (altura < 1.43) {
          return this.obj = { ref: '1,63 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.49) {
          return this.obj = { ref: '1,63 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,63 m', text: 'Estatura Adequada', brush: 'red' };
        }

      case 19:
        if (altura < 1.43) {
          return this.obj = { ref: '1,63 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.50) {
          return this.obj = { ref: '1,63 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,63 m', text: 'Estatura Adequada', brush: 'red' };
        }


    }
  }
}
