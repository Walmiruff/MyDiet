import { Injectable } from '@angular/core';

import { IObj } from '../../shared/models/obj.model';

@Injectable({
  providedIn: 'root'
})
export class CalcAdultoService {
  public obj: IObj;

  constructor() { }

  public imc(altura: number, peso: number): IObj {
    if (altura !== 0) {
      let imcAtual = peso / (altura * altura);
      if (imcAtual < 18.5) {
        return this.obj = { text: 'Baixo Peso', brush: 'red', imc: imcAtual };
      } else if (imcAtual < 24.9) {
        return this.obj = { text: 'Normal', brush: 'green', imc: imcAtual };
      } else if (imcAtual < 29.9) {
        return this.obj = { text: 'Sobrepeso', brush: 'yellow', imc: imcAtual };
      } else if (imcAtual < 34.9) {
        return this.obj = { text: 'Obesidade I', brush: 'red', imc: imcAtual };
      } else if (imcAtual < 39.9) {
        return this.obj = { text: 'Obesidade II', brush: 'red', imc: imcAtual };
      } else {
        return this.obj = { text: 'Obesidade III', brush: 'red', imc: imcAtual };
      }
    }
  }

  public percentGord(sexo: string, idade: number, percentMassaGorda): IObj {
    if (sexo == 'M') {
      if (idade < 29) {
        if (percentMassaGorda < 11) {
          return this.obj = { text: 'Excelente', brush: 'green' };
        } else if (percentMassaGorda < 13) {
          return this.obj = { text: 'Bom', brush: 'green' };
        } else if (percentMassaGorda < 20) {
          return this.obj = { text: 'Dentro de média', brush: 'green' };
        } else if (percentMassaGorda < 23) {
          return this.obj = { text: 'Regular', brush: 'yellow' };
        } else {
          return this.obj = { text: 'Alto', brush: 'red' };
        }
      } else if (idade < 39) {
        if (percentMassaGorda < 12) {
          return this.obj = { text: 'Excelente', brush: 'green' };
        } else if (percentMassaGorda < 14) {
          return this.obj = { text: 'Bom', brush: 'green' };
        } else if (percentMassaGorda < 21) {
          return this.obj = { text: 'Dentro de média', brush: 'green' };
        } else if (percentMassaGorda < 24) {
          return this.obj = { text: 'Regular', brush: 'yellow' };
        } else {
          return this.obj = { text: 'Alto', brush: 'red' };
        }
      } else if (idade < 49) {
        if (percentMassaGorda < 14) {
          return this.obj = { text: 'Excelente', brush: 'green' };
        } else if (percentMassaGorda < 16) {
          return this.obj = { text: 'Bom', brush: 'green' };
        } else if (percentMassaGorda < 23) {
          return this.obj = { text: 'Dentro de média', brush: 'green' };
        } else if (percentMassaGorda < 26) {
          return this.obj = { text: 'Regular', brush: 'yellow' };
        } else {
          return this.obj = { text: 'Alto', brush: 'red' };
        }
      } else if (idade < 59) {
        if (percentMassaGorda < 15) {
          return this.obj = { text: 'Excelente', brush: 'green' };
        } else if (percentMassaGorda < 17) {
          return this.obj = { text: 'Bom', brush: 'green' };
        } else if (percentMassaGorda < 24) {
          return this.obj = { text: 'Dentro de média', brush: 'green' };
        } else if (percentMassaGorda < 27) {
          return this.obj = { text: 'Regular', brush: 'yellow' };
        } else {
          return this.obj = { text: 'Alto', brush: 'red' };
        }
      } else if (idade < 69) {
        if (percentMassaGorda < 16) {
          return this.obj = { text: 'Excelente', brush: 'green' };
        } else if (percentMassaGorda < 18) {
          return this.obj = { text: 'Bom', brush: 'green' };
        } else if (percentMassaGorda < 25) {
          return this.obj = { text: 'Dentro de média', brush: 'green' };
        } else if (percentMassaGorda < 28) {
          return this.obj = { text: 'Regular', brush: 'yellow' };
        } else {
          return this.obj = { text: 'Alto', brush: 'red' };
        }
      }
    } else {
      if (idade < 29) {
        if (percentMassaGorda < 16) {
          return this.obj = { text: 'Excelente', brush: 'green' };
        } else if (percentMassaGorda < 19) {
          return this.obj = { text: 'Bom', brush: 'green' };
        } else if (percentMassaGorda < 28) {
          return this.obj = { text: 'Dentro de média', brush: 'green' };
        } else if (percentMassaGorda < 31) {
          return this.obj = { text: 'Regular', brush: 'yellow' };
        } else {
          return this.obj = { text: 'Alto', brush: 'red' };
        }
      } else if (idade < 39) {
        if (percentMassaGorda < 17) {
          return this.obj = { text: 'Excelente', brush: 'green' };
        } else if (percentMassaGorda < 20) {
          return this.obj = { text: 'Bom', brush: 'green' };
        } else if (percentMassaGorda < 29) {
          return this.obj = { text: 'Dentro de média', brush: 'green' };
        } else if (percentMassaGorda < 32) {
          return this.obj = { text: 'Regular', brush: 'yellow' };
        } else {
          return this.obj = { text: 'Alto', brush: 'red' };
        }
      } else if (idade < 49) {
        if (percentMassaGorda < 18) {
          return this.obj = { text: 'Excelente', brush: 'green' };
        } else if (percentMassaGorda < 21) {
          return this.obj = { text: 'Bom', brush: 'green' };
        } else if (percentMassaGorda < 30) {
          return this.obj = { text: 'Dentro de média', brush: 'green' };
        } else if (percentMassaGorda < 33) {
          return this.obj = { text: 'Regular', brush: 'yellow' };
        } else {
          return this.obj = { text: 'Alto', brush: 'red' };
        }
      } else if (idade < 59) {
        if (percentMassaGorda < 19) {
          return this.obj = { text: 'Excelente', brush: 'green' };
        } else if (percentMassaGorda < 22) {
          return this.obj = { text: 'Bom', brush: 'green' };
        } else if (percentMassaGorda < 31) {
          return this.obj = { text: 'Dentro de média', brush: 'green' };
        } else if (percentMassaGorda < 34) {
          return this.obj = { text: 'Regular', brush: 'yellow' };
        } else {
          return this.obj = { text: 'Alto', brush: 'red' };
        }
      } else if (idade < 69) {
        if (percentMassaGorda < 20) {
          return this.obj = { text: 'Excelente', brush: 'green' };
        } else if (percentMassaGorda < 23) {
          return this.obj = { text: 'Bom', brush: 'green' };
        } else if (percentMassaGorda < 32) {
          return this.obj = { text: 'Dentro de média', brush: 'green' };
        } else if (percentMassaGorda < 35) {
          return this.obj = { text: 'Regular', brush: 'yellow' };
        } else {
          return this.obj = { text: 'Alto', brush: 'red' };
        }
      }
    }
  }

  public cintura(cintura: number, sexo: string): IObj {
    if (sexo == 'F') {
      if (cintura < 80) {
        return this.obj = { text: 'Sem Risco', brush: 'green' };
      } else if (cintura < 87) {
        return this.obj = { text: 'Risco Metabólico', brush: 'yellow' };
      } else {
        return this.obj = { text: 'Risco Metabólico', brush: 'red' };
      }
    } else {
      if (cintura < 94) {
        return this.obj = { text: 'Sem Risco', brush: 'green' };
      } else if (cintura < 101) {
        return this.obj = { text: 'Risco Metabólico', brush: 'yellow' };
      } else {
        return this.obj = { text: 'Risco Metabólico', brush: 'red' };
      }
    }
  }

  public relCintQuadril(cintura: number, quadril: number, sexo: string, idade: number): IObj {
    if (quadril !== 0) {
      let RCQ = cintura / quadril;
      if (sexo == 'M') {
        if (idade < 20) {
          return this.obj = null;
        } else if (idade < 29) {
          if (RCQ < 0.83) {
            return this.obj = { text: 'Sem Risco', brush: 'green' };
          } else if (RCQ < 0.88) {
            return this.obj = { text:'Moderado', brush: 'yellow' };
          } else if (RCQ < 0.94) {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          } else {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          }
        } else if (idade < 39) {
          if (RCQ < 0.84) {
            return this.obj = { text: 'Sem Risco', brush: 'green' };
          } else if (RCQ < 0.91) {
            return this.obj = { text:'Moderado', brush: 'yellow' };
          } else if (RCQ < 0.96) {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          } else {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          } 
        } else if (idade < 49) {
          if (RCQ < 0.88) {
            return this.obj = { text: 'Sem Risco', brush: 'green' };
          } else if (RCQ < 0.95) {
            return this.obj = { text:'Moderado', brush: 'yellow' };
          } else if (RCQ < 1) {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          } else {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          }
        } else if (idade < 59) {
          if (RCQ < 0.9) {
            return this.obj = { text: 'Sem Risco', brush: 'green' };
          } else if (RCQ < 0.96) {
            return this.obj = { text:'Moderado', brush: 'yellow' };
          } else if (RCQ < 1.02) {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          } else {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          }
        } else if (idade < 69) {
          if (RCQ < 0.91) {
            return this.obj = { text: 'Sem Risco', brush: 'green' };
          } else if (RCQ < 0.98) {
            return this.obj = { text:'Moderado', brush: 'yellow' };
          } else if (RCQ < 1.03) {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          } else {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          }
        }
      } else {
        if (idade < 20) {
          return this.obj = null;
        } else if (idade < 29) {
          if (RCQ < 0.71) {
            return this.obj = { text: 'Sem Risco', brush: 'green' };
          } else if (RCQ < 0.77) {
            return this.obj = { text:'Moderado', brush: 'yellow' };
          } else if (RCQ < 0.82) {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          } else {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          }
        } else if (idade < 39) {
          if (RCQ < 0.72) {
            return this.obj = { text: 'Sem Risco', brush: 'green' };
          } else if (RCQ < 0.78) {
            return this.obj = { text:'Moderado', brush: 'yellow' };
          } else if (RCQ < 0.84) {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          } else {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          } 
        } else if (idade < 49) {
          if (RCQ < 0.73) {
            return this.obj = { text: 'Sem Risco', brush: 'green' };
          } else if (RCQ < 0.79) {
            return this.obj = { text:'Moderado', brush: 'yellow' };
          } else if (RCQ < 0.87) {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          } else {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          }
        } else if (idade < 59) {
          if (RCQ < 0.74) {
            return this.obj = { text: 'Sem Risco', brush: 'green' };
          } else if (RCQ < 0.81) {
            return this.obj = { text:'Moderado', brush: 'yellow' };
          } else if (RCQ < 0.88) {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          } else {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          }
        } else if (idade < 69) {
          if (RCQ < 0.76) {
            return this.obj = { text: 'Sem Risco', brush: 'green' };
          } else if (RCQ < 0.83) {
            return this.obj = { text:'Moderado', brush: 'yellow' };
          } else if (RCQ < 0.9) {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          } else {
            return this.obj = { text:'Alto Risco Cardiovascular', brush: 'red' };
          }
        }
      }
    }
  }

}
