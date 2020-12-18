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
          return this.obj = { ref: '1,10 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 6:
        if (altura < 1.01) {
          return this.obj = { ref: '1,16 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.06) {
          return this.obj = { ref: '1,16 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,16 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 7:
        if (altura < 1.05) {
          return this.obj = { ref: '1,21 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.11) {
          return this.obj = { ref: '1,21 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,21 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 8:
        if (altura < 1.1) {
          return this.obj = { ref: '1,27 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.16) {
          return this.obj = { ref: '1,27 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,27 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 9:
        if (altura < 1.14) {
          return this.obj = { ref: '1,32 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.2) {
          return this.obj = { ref: '1,32 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,32 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 10:
        if (altura < 1.18) {
          return this.obj = { ref: '1,37 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.25) {
          return this.obj = { ref: '1,37 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,37 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 11:
        if (altura < 1.22) {
          return this.obj = { ref: '1,43 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.29) {
          return this.obj = { ref: '1,43 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,43 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 12:
        if (altura < 1.27) {
          return this.obj = { ref: '1,49 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.34) {
          return this.obj = { ref: '1,49 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,49 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 13:
        if (altura < 1.33) {
          return this.obj = { ref: '1,56 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.41) {
          return this.obj = { ref: '1,56 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,56 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 14:
        if (altura < 1.4) {
          return this.obj = { ref: '1,63 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.47) {
          return this.obj = { ref: '1,63 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,63 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 15:
        if (altura < 1.45) {
          return this.obj = { ref: '1,69 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.53) {
          return this.obj = { ref: '1,69 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,69 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 16:
        if (altura < 1.49) {
          return this.obj = { ref: '1,72 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.57) {
          return this.obj = { ref: '1,72 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,72 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 17:
        if (altura < 1.52) {
          return this.obj = { ref: '1,75 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.59) {
          return this.obj = { ref: '1,75 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,75 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 18:
        if (altura < 1.53) {
          return this.obj = { ref: '1,76 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.61) {
          return this.obj = { ref: '1,76 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,76 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 19:
        if (altura < 1.54) {
          return this.obj = { ref: '1,76 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.61) {
          return this.obj = { ref: '1,76 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,76 m', text: 'Estatura Adequada', brush: 'green' };
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
          return this.obj = { ref: '1,09 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 6:
        if (altura < 0.99) {
          return this.obj = { ref: '1,15 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.04) {
          return this.obj = { ref: '1,15 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,15 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 7:
        if (altura < 1.04) {
          return this.obj = { ref: '1,20 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.09) {
          return this.obj = { ref: '1,20 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,20 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 8:
        if (altura < 1.09) {
          return this.obj = { ref: '1,26 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.15) {
          return this.obj = { ref: '1,26 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,26 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 9:
        if (altura < 1.14) {
          return this.obj = { ref: '1,32 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.2) {
          return this.obj = { ref: '1,32 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,32 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 10:
        if (altura < 1.19) {
          return this.obj = { ref: '1,38 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.25) {
          return this.obj = { ref: '1,38 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,38 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 11:
        if (altura < 1.25) {
          return this.obj = { ref: '1,45 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.31) {
          return this.obj = { ref: '1,45 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,45 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 12:
        if (altura < 1.3) {
          return this.obj = { ref: '1,51 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.37) {
          return this.obj = { ref: '1,51 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,51 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 13:
        if (altura < 1.35) {
          return this.obj = { ref: '1,56 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.42) {
          return this.obj = { ref: '1,56 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,56 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 14:
        if (altura < 1.39) {
          return this.obj = { ref: '1,59 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.45) {
          return this.obj = { ref: '1,59 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,59 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 15:
        if (altura < 1.41) {
          return this.obj = { ref: '1,61 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.47) {
          return this.obj = { ref: '1,61 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,61 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 16:
        if (altura < 1.42) {
          return this.obj = { ref: '1,62 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.48) {
          return this.obj = { ref: '1,62 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,62 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 17:
        if (altura < 1.42) {
          return this.obj = { ref: '1,63 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.49) {
          return this.obj = { ref: '1,63 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,63 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 18:
        if (altura < 1.43) {
          return this.obj = { ref: '1,63 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.49) {
          return this.obj = { ref: '1,63 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,63 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 19:
        if (altura < 1.43) {
          return this.obj = { ref: '1,63 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.50) {
          return this.obj = { ref: '1,63 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,63 m', text: 'Estatura Adequada', brush: 'green' };
        }


    }
  }

  public imcMenino(altura: number, peso: number, idade: number): IObj {
    if (altura !== 0) {
      let imcAtual = peso / (altura * altura);

      switch (idade) {
        case 5:
          if (imcAtual < 12) {
            return this.obj = { ref: '14,1', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.1) {
            return this.obj = { ref: '14,1', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 15.3) {
            return this.obj = { ref: '14,1', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 16.6) {
            return this.obj = { ref: '14,1', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 18.3) {
            return this.obj = { ref: '14,1', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '14,1', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 6:
          if (imcAtual < 12.1) {
            return this.obj = { ref: '14,1', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.1) {
            return this.obj = { ref: '14,1', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 15.3) {
            return this.obj = { ref: '14,1', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '14,1', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '14,1', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '14,1', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 7:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '14,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.3) {
            return this.obj = { ref: '14,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 15.5) {
            return this.obj = { ref: '14,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 17) {
            return this.obj = { ref: '14,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19) {
            return this.obj = { ref: '14,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '14,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 8:
          if (imcAtual < 12.3) {
            return this.obj = { ref: '14,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.4) {
            return this.obj = { ref: '14,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 15.7) {
            return this.obj = { ref: '14,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 17.4) {
            return this.obj = { ref: '14,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.7) {
            return this.obj = { ref: '14,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '14,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 9:
          if (imcAtual < 12.5) {
            return this.obj = { ref: '14,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.6) {
            return this.obj = { ref: '14,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16) {
            return this.obj = { ref: '14,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 17.9) {
            return this.obj = { ref: '14,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '14,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '14,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 10:
          if (imcAtual < 12.7) {
            return this.obj = { ref: '14,9', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.8) {
            return this.obj = { ref: '14,9', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.4) {
            return this.obj = { ref: '14,9', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '14,9', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.4) {
            return this.obj = { ref: '14,9', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '14,9', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 11:
          if (imcAtual < 13) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.2) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.5) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 12:
          if (imcAtual < 13.3) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.4) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.5) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 23.9) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 13:
          if (imcAtual < 13.7) {
            return this.obj = { ref: '16,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.8) {
            return this.obj = { ref: '16,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '16,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.8) {
            return this.obj = { ref: '16,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 24.9) {
            return this.obj = { ref: '16,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 14:
          if (imcAtual < 14.2) {
            return this.obj = { ref: '17', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.3) {
            return this.obj = { ref: '17', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 19) {
            return this.obj = { ref: '17', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 21.8) {
            return this.obj = { ref: '17', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 25.9) {
            return this.obj = { ref: '17', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '17', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 15:
          if (imcAtual < 14.6) {
            return this.obj = { ref: '17,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.7) {
            return this.obj = { ref: '17,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 19.8) {
            return this.obj = { ref: '17,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 22.7) {
            return this.obj = { ref: '17,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 27) {
            return this.obj = { ref: '17,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '17,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 16:
          if (imcAtual < 15) {
            return this.obj = { ref: '18.2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 15.1) {
            return this.obj = { ref: '18.2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '18.2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 23.5) {
            return this.obj = { ref: '18.2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 27.9) {
            return this.obj = { ref: '18.2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '18.2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 17:
          if (imcAtual < 15.3) {
            return this.obj = { ref: '18,8', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 15.4) {
            return this.obj = { ref: '18,8', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 21.1) {
            return this.obj = { ref: '18,8', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 24.3) {
            return this.obj = { ref: '18,8', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 28.6) {
            return this.obj = { ref: '18,8', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '18,8', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 18:
          if (imcAtual < 15.6) {
            return this.obj = { ref: '19,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 15.7) {
            return this.obj = { ref: '19,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 21.7) {
            return this.obj = { ref: '19,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 24.9) {
            return this.obj = { ref: '19,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 29.2) {
            return this.obj = { ref: '19,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '19,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 19:
          if (imcAtual < 15.7) {
            return this.obj = { ref: '19,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 15.9) {
            return this.obj = { ref: '19,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 22.2) {
            return this.obj = { ref: '19,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 25.4) {
            return this.obj = { ref: '19,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 29.7) {
            return this.obj = { ref: '19,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '19,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

      }
    }
  }
  
  public imcMenina(altura: number, peso: number, idade: number): IObj {
    if (altura !== 0) {
      let imcAtual = peso / (altura * altura);

      switch (idade) {
        case 5:
          if (imcAtual < 11.8) {
            return this.obj = { ref: '15,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.7) {
            return this.obj = { ref: '15,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.9) {
            return this.obj = { ref: '15,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.3) {
            return this.obj = { ref: '15,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 6:
          if (imcAtual < 11.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.2) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.1) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 7:
          if (imcAtual < 11.8) {
            return this.obj = { ref: '15,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.7) {
            return this.obj = { ref: '15,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.3) {
            return this.obj = { ref: '15,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.8) {
            return this.obj = { ref: '15,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 23.3) {
            return this.obj = { ref: '15,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 8:
          if (imcAtual < 11.9) {
            return this.obj = { ref: '15,7', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.9) {
            return this.obj = { ref: '15,7', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.7) {
            return this.obj = { ref: '15,7', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.6) {
            return this.obj = { ref: '15,7', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 24.8) {
            return this.obj = { ref: '15,7', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,7', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 9:
          if (imcAtual < 12.1) {
            return this.obj = { ref: '16,1', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '16,1', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.3) {
            return this.obj = { ref: '16,1', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 21.5) {
            return this.obj = { ref: '16,1', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 26.5) {
            return this.obj = { ref: '16,1', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,1', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 10:
          if (imcAtual < 12.4) {
            return this.obj = { ref: '16,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.5) {
            return this.obj = { ref: '16,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 19) {
            return this.obj = { ref: '16,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 22.6) {
            return this.obj = { ref: '16,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 28.4) {
            return this.obj = { ref: '16,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 11:
          if (imcAtual < 12.7) {
            return this.obj = { ref: '17,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.9) {
            return this.obj = { ref: '17,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '17,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 23.7) {
            return this.obj = { ref: '17,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 30.2) {
            return this.obj = { ref: '17,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '17,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 12:
          if (imcAtual < 13.2) {
            return this.obj = { ref: '18', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.4) {
            return this.obj = { ref: '18', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 20.8) {
            return this.obj = { ref: '18', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 25) {
            return this.obj = { ref: '18', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 31.9) {
            return this.obj = { ref: '18', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '18', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 13:
          if (imcAtual < 13.6) {
            return this.obj = { ref: '18,8', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.9) {
            return this.obj = { ref: '18,8', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 21.8) {
            return this.obj = { ref: '18,8', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 26.2) {
            return this.obj = { ref: '18,8', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 33.4) {
            return this.obj = { ref: '18,8', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '18,8', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 14:
          if (imcAtual < 14) {
            return this.obj = { ref: '19.6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 15.4) {
            return this.obj = { ref: '19.6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 22.7) {
            return this.obj = { ref: '19.6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 27.3) {
            return this.obj = { ref: '19.6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 34.7) {
            return this.obj = { ref: '19.6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '19.6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 15:
          if (imcAtual < 14.4) {
            return this.obj = { ref: '20,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 15.9) {
            return this.obj = { ref: '20,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 23.5) {
            return this.obj = { ref: '20,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 28.2) {
            return this.obj = { ref: '20,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 35.5) {
            return this.obj = { ref: '20,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '20,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 16:
          if (imcAtual < 14.6) {
            return this.obj = { ref: '20,7', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.2) {
            return this.obj = { ref: '20,7', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 24.1) {
            return this.obj = { ref: '20,7', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 28.9) {
            return this.obj = { ref: '20,7', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 36.1) {
            return this.obj = { ref: '20,7', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '20,7', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 17:
          if (imcAtual < 14.7) {
            return this.obj = { ref: '21', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.4) {
            return this.obj = { ref: '21', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 24.5) {
            return this.obj = { ref: '21', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 29.3) {
            return this.obj = { ref: '21', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 36.3) {
            return this.obj = { ref: '21', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '21', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 18:
          if (imcAtual < 14.7) {
            return this.obj = { ref: '21,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.4) {
            return this.obj = { ref: '21,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 24.8) {
            return this.obj = { ref: '21,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 24.9) {
            return this.obj = { ref: '21,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 36.3) {
            return this.obj = { ref: '21,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '21,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 19:
          if (imcAtual < 14.7) {
            return this.obj = { ref: '21,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.5) {
            return this.obj = { ref: '21,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 25) {
            return this.obj = { ref: '21,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 29.7) {
            return this.obj = { ref: '21,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 36.2) {
            return this.obj = { ref: '21,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '21,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

      }
    }
  }
}
