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

      case 22:
        if (altura < 0.772) {
          return this.obj = { ref: '0,86 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.802) {
          return this.obj = { ref: '0,86 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,86 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 23:
        if (altura < 0.787) {
          return this.obj = { ref: '0,86 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.817) {
          return this.obj = { ref: '0,86 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,86 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 24:
        if (altura < 0.758) {
          return this.obj = { ref: '0,87 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,87 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,87 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 25:
        if (altura < 0.786) {
          return this.obj = { ref: '0,88 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.817) {
          return this.obj = { ref: '0,88 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,88 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 26:
        if (altura < 0.793) {
          return this.obj = { ref: '0,88 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.825) {
          return this.obj = { ref: '0,88 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,88 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 27:
        if (altura < 0.799) {
          return this.obj = { ref: '0,89 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.831) {
          return this.obj = { ref: '0,89 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,89 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 28:
        if (altura < 0.805) {
          return this.obj = { ref: '0,904 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.838) {
          return this.obj = { ref: '0,904 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,904 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 29:
        if (altura < 0.811) {
          return this.obj = { ref: '0,91 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.845) {
          return this.obj = { ref: '0,91 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,91 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 30:
        if (altura < 0.817) {
          return this.obj = { ref: '0,91 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.851) {
          return this.obj = { ref: '0,91 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,91 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 31:
        if (altura < 0.823) {
          return this.obj = { ref: '0,92 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.857) {
          return this.obj = { ref: '0,92 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,92 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 32:
        if (altura < 0.828) {
          return this.obj = { ref: '0,93 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.864) {
          return this.obj = { ref: '0,93 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,93 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 33:
        if (altura < 0.834) {
          return this.obj = { ref: '0,94 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.869) {
          return this.obj = { ref: '0,94 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,94 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 34:
        if (altura < 0.839) {
          return this.obj = { ref: '0,94 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.875) {
          return this.obj = { ref: '0,94 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,94 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 35:
        if (altura < 0.844) {
          return this.obj = { ref: '0,95 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.881) {
          return this.obj = { ref: '0,95 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,95 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 36:
        if (altura < 0.85) {
          return this.obj = { ref: '0,96 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.887) {
          return this.obj = { ref: '0,96 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,96 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 37:
        if (altura < 0.855) {
          return this.obj = { ref: '0,96 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.892) {
          return this.obj = { ref: '0,96 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,96 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 38:
        if (altura < 0.86) {
          return this.obj = { ref: '0,97 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.898) {
          return this.obj = { ref: '0,97 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,97 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 39:
        if (altura < 0.865) {
          return this.obj = { ref: '0,98 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.903) {
          return this.obj = { ref: '0,98 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,98 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 40:
        if (altura < 0.87) {
          return this.obj = { ref: '0,98 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.909) {
          return this.obj = { ref: '0,98 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,98 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 41:
        if (altura < 0.875) {
          return this.obj = { ref: '0,99 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.914) {
          return this.obj = { ref: '0,99 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,99 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 42:
        if (altura < 0.88) {
          return this.obj = { ref: '0,99 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.919) {
          return this.obj = { ref: '0,99 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,99 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 43:
        if (altura < 0.884) {
          return this.obj = { ref: '1,00 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.924) {
          return this.obj = { ref: '1,00 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,00 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 44:
        if (altura < 0.889) {
          return this.obj = { ref: '1,01 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.93) {
          return this.obj = { ref: '1,01 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,01 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 45:
        if (altura < 0.894) {
          return this.obj = { ref: '1,01 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.935) {
          return this.obj = { ref: '1,01 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,01 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 46:
        if (altura < 0.898) {
          return this.obj = { ref: '1,02 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.94) {
          return this.obj = { ref: '1,02 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,02 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 47:
        if (altura < 0.903) {
          return this.obj = { ref: '1,02 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.944) {
          return this.obj = { ref: '1,02 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,02 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 48:
        if (altura < 0.907) {
          return this.obj = { ref: '1,03 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.949) {
          return this.obj = { ref: '1,03 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,03 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 49:
        if (altura < 0.912) {
          return this.obj = { ref: '1,03 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.954) {
          return this.obj = { ref: '1,03 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,03 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 50:
        if (altura < 0.916) {
          return this.obj = { ref: '1,04 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.959) {
          return this.obj = { ref: '1,04 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,04 m', text: 'Estatura Adequada', brush: 'green' };
        }

        case 51:
          if (altura < 0.925) {
            return this.obj = { ref: '1,05 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.969) {
            return this.obj = { ref: '1,05 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '1,05 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 52:
          if (altura < 0.925) {
            return this.obj = { ref: '1,05 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.969) {
            return this.obj = { ref: '1,05 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '1,05 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 53:
          if (altura < 0.93) {
            return this.obj = { ref: '1,06 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.974) {
            return this.obj = { ref: '1,06 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '1,06 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 54:
          if (altura < 0.934) {
            return this.obj = { ref: '1,06 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.978) {
            return this.obj = { ref: '1,06 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '1,06 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
  
        case 55:
          if (altura < 0.939) {
            return this.obj = { ref: '1,07 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.983) {
            return this.obj = { ref: '1,07 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '1,07 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 56:
          if (altura < 0.943) {
            return this.obj = { ref: '1,07 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.988) {
            return this.obj = { ref: '1,07 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '1,07 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
  
        case 57:
          if (altura < 0.947) {
            return this.obj = { ref: '1,08 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.993) {
            return this.obj = { ref: '1,08 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '1,08 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 58:
          if (altura < 0.952) {
            return this.obj = { ref: '1,08 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 0.997) {
            return this.obj = { ref: '1,08 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '1,08 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 59:
          if (altura < 0.956) {
            return this.obj = { ref: '1,09 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 1.0) {
            return this.obj = { ref: '1,09 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '1,09 m', text: 'Estatura Adequada', brush: 'green' };
          }
  
        case 60:
          if (altura < 0.961) {
            return this.obj = { ref: '1,10 m', text: 'Muito baixa estatura para idade', brush: 'red' };
          } else if (altura < 1.0) {
            return this.obj = { ref: '1,10 m', text: 'Baixa Estatura', brush: 'red' };
          } else {
            return this.obj = { ref: '1,10 m', text: 'Estatura Adequada', brush: 'green' };
          }
    }
  }

}
