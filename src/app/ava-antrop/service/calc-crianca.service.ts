import { Injectable } from '@angular/core';

import { IObj } from '../../shared/models/obj.model';

@Injectable({
  providedIn: 'root'
})
export class CalcCriancaService {
  public obj: IObj;

  constructor() { }

  public estaturaIdadeMenino(idade: number, altura: number): IObj {
    switch (idade) {
      case 0:
        if (altura < 0.442) {
          return this.obj = { ref: '0,49 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.461) {
          return this.obj = { ref: '0,49 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,49 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 1:
        if (altura < 0.489) {
          return this.obj = { ref: '0,54 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.508) {
          return this.obj = { ref: '0,54 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,54 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 2:
        if (altura < 0.524) {
          return this.obj = { ref: '0,58 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.544) {
          return this.obj = { ref: '0,58 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,58 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 3:
        if (altura < 0.553) {
          return this.obj = { ref: '0,61 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.544) {
          return this.obj = { ref: '0,61 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,61 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 4:
        if (altura < 0.576) {
          return this.obj = { ref: '0,63 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.597) {
          return this.obj = { ref: '0,63 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,63 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 5:
        if (altura < 0.596) {
          return this.obj = { ref: '0,65 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.617) {
          return this.obj = { ref: '0,65 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,65 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 6:
        if (altura < 0.612) {
          return this.obj = { ref: '0,67 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.633) {
          return this.obj = { ref: '0,67 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,67 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 7:
        if (altura < 0.627) {
          return this.obj = { ref: '0,69 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.648) {
          return this.obj = { ref: '0,69 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,69 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 8:
        if (altura < 0.64) {
          return this.obj = { ref: '0,70 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.662) {
          return this.obj = { ref: '0,70 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,70 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 9:
        if (altura < 0.652) {
          return this.obj = { ref: '0,72 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.675) {
          return this.obj = { ref: '0,72 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,72 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 10:
        if (altura < 0.664) {
          return this.obj = { ref: '0,73 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.687) {
          return this.obj = { ref: '0,73 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,73 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 11:
        if (altura < 0.676) {
          return this.obj = { ref: '0,74 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.669) {
          return this.obj = { ref: '0,74 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,74 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 12:
        if (altura < 0.686) {
          return this.obj = { ref: '0,75 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.71) {
          return this.obj = { ref: '0,75 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,75 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 13:
        if (altura < 0.696) {
          return this.obj = { ref: '0,76 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.721) {
          return this.obj = { ref: '0,76 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,76 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 14:
        if (altura < 0.706) {
          return this.obj = { ref: '0,78 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.731) {
          return this.obj = { ref: '0,78 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,78 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 15:
        if (altura < 0.716) {
          return this.obj = { ref: '0,79 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.741) {
          return this.obj = { ref: '0,79 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,79 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 16:
        if (altura < 0.725) {
          return this.obj = { ref: '0,80 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.750) {
          return this.obj = { ref: '0,80 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,80 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 17:
        if (altura < 0.733) {
          return this.obj = { ref: '0,81 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.76) {
          return this.obj = { ref: '0,81 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,81 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 18:
        if (altura < 0.742) {
          return this.obj = { ref: '0,82 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.769) {
          return this.obj = { ref: '0,82 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,82 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 19:
        if (altura < 0.75) {
          return this.obj = { ref: '0,83 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.777) {
          return this.obj = { ref: '0,83 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,83 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 21:
        if (altura < 0.765) {
          return this.obj = { ref: '0,851 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.794) {
          return this.obj = { ref: '0,851 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,851 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

        case 20:
          if (altura < 0.758) {
            return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.786) {
            return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 20:
          if (altura < 0.758) {
            return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.786) {
            return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 20:
          if (altura < 0.758) {
            return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.786) {
            return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 20:
          if (altura < 0.758) {
            return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.786) {
            return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
  
        case 20:
          if (altura < 0.758) {
            return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.786) {
            return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 20:
          if (altura < 0.758) {
            return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.786) {
            return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
  
        case 20:
          if (altura < 0.758) {
            return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.786) {
            return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 20:
          if (altura < 0.758) {
            return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.786) {
            return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 20:
          if (altura < 0.758) {
            return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.786) {
            return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 20:
          if (altura < 0.758) {
            return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.786) {
            return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
          }
    }
  }

}
