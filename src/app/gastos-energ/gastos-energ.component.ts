import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { filter, tap, take, switchMap } from 'rxjs/operators';

import { nivelAtivArray } from './const';
import { protocolos } from './const';
import { PatientStore } from '../shared/store/patiente.store';
import { GastosEnergStore } from '../shared/store/gastos-energ.store';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-gastos-energ',
  templateUrl: './gastos-energ.component.html',
  styleUrls: ['./gastos-energ.component.scss']
})
export class GastosEnergComponent implements OnInit, OnDestroy {

  public formularioPrincipal: FormGroup;
  public nivelAtivArray = nivelAtivArray[0];
  public protocolosArray = protocolos;
  public title: string;
  public mask: Array<string | RegExp>;
  public maskNumber: Array<string | RegExp>;
  public maskNumber2: Array<string | RegExp>;
  public maskNumber3: Array<string | RegExp>;
  public GET = 0;
  public TMB = 0;
  public nivelAtivDRI = '0';
  public classificacaoDRI: string = null;
  public id: string;
  public regraBolsoObj = {
    perdaPeso: '-',
    manutPeso: '-',
    ganhoPeso: '-',
  };

  constructor(
    private formBuilder: FormBuilder,
    private patienteStore: PatientStore,
    private gastoEnergStore: GastosEnergStore
  ) {
    this.mask = [/\d+/, ',', /\d+/, /\d+/];
    this.maskNumber = [/\d+/, /\d+/, /\d+/, ',', /\d+/, /\d+/];
    this.maskNumber2 = [/\d+/, /\d+/];
    this.maskNumber3 = [/\d+/, /\d+/, /\d+/, /\d+/, /\d+/];
    this.buildForm();
  }

  ngOnInit(): void {
    this.triggersControls();
    this.gastoEnergStore.gastosEnerg$
      .pipe(
        take(1),
        tap(r => r === null ? null : this.formularioPrincipal.patchValue(r)),
        switchMap(() => {
          return this.patienteStore.patiente$
            .pipe(
              filter((resp) => resp !== null),
              tap((resp) => {
                this.formularioPrincipal.patchValue({
                  idade: resp.idade,
                  altura: resp.altura,
                  peso: resp.peso,
                  sexo: resp.sexo,
                });
              })
            );
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.setStore()
  }

  public buildForm(): void {
    this.formularioPrincipal = this.formBuilder.group({
      id: [null],
      desc: [null],
      dataAtend: [null],
      idade: [null, Validators.required],
      sexo: [null],
      altura: [null, Validators.required],
      peso: [null, Validators.required],
      protocolo: ['0'],
      nivelAtiv: ['5'],
      gastoEnergFinal: [null],
      classificacao: [null],
      massaMagra: [null],
    });
  }

  public triggersControls(): void {
    this.formularioPrincipal.get(['idade']).valueChanges.subscribe(() => this.validarControles());
    this.formularioPrincipal.get(['altura']).valueChanges.subscribe(() => this.validarControles());
    this.formularioPrincipal.get(['peso']).valueChanges.subscribe(() => this.validarControles());
    this.formularioPrincipal.get(['sexo']).valueChanges.subscribe(() => this.validarControles());
    this.formularioPrincipal.get(['protocolo']).valueChanges.subscribe(() => {
      this.formularioPrincipal.patchValue({
        nivelAtiv: '5',
        gastoEnergFinal: null,
        classificacao: null,
        massaMagra: null,
      });
      this.TMB = 0;
      this.GET = 0;
      this.validarControles();
    });
    this.formularioPrincipal.get(['nivelAtiv']).valueChanges.subscribe((value) => {
      this.nivelAtivDRI = value.split('-')[0];
      this.calcProtocolos();
    });

    this.formularioPrincipal.get('classificacao').valueChanges.subscribe(value => {
      this.classificacaoDRI = value;
      this.calcProtocolos();
    });

    this.formularioPrincipal.get(['massaMagra']).valueChanges.subscribe(() => this.validarControles());

  }

  public validarControles(): void {

    const value = this.formularioPrincipal.get('protocolo').value;

    this.validarControlesAoEnviar(value);

    this.nivelAtivArray = nivelAtivArray[value];

    this.title = this.protocolosArray[value].title;

    this.formularioPrincipal.updateValueAndValidity();

    this.calcProtocolos();
  }

  public validarControlesAoEnviar(value) {
    value === '4' ? this.formularioPrincipal.controls['nivelAtiv'].clearValidators :
      this.formularioPrincipal.controls['nivelAtiv'].setValidators([Validators.required]);

    value === '3' ? this.formularioPrincipal.controls['massaMagra'].setValidators([Validators.required]) :
      this.formularioPrincipal.controls['massaMagra'].clearValidators;

    value === '2' ? this.formularioPrincipal.controls['classificacao'].setValidators([Validators.required]) :
      this.formularioPrincipal.controls['classificacao'].clearValidators;

    this.formularioPrincipal.updateValueAndValidity({ onlySelf: true });
  }


  public calcProtocolos(): void {

    // Harris Benedict
    if (this.formularioPrincipal.get('protocolo').value === '0') {
      const value = this.formularioPrincipal.get('nivelAtiv').value.split('-')[0];

      // Sedentário
      if (value === '0') {
        if (this.formularioPrincipal.get('sexo').value === 'F') {
          this.GET = this.TMB_HBfem() * 1.2;
        };
        if (this.formularioPrincipal.get('sexo').value === 'M') {
          this.GET = this.TMB_HBmasc() * 1.2;
        };
      };

      // Pouca
      if (value === '1') {
        if (this.formularioPrincipal.get('sexo').value === 'F') {
          this.GET = this.TMB_HBfem() * 1.56;
        };
        if (this.formularioPrincipal.get('sexo').value === 'M') {
          this.GET = this.TMB_HBmasc() * 1.55;
        };
      };

      //Moderada
      if (value === '2') {
        if (this.formularioPrincipal.get('sexo').value === 'F') {
          this.GET = this.TMB_HBfem() * 1.64;
        };
        if (this.formularioPrincipal.get('sexo').value === 'M') {
          this.GET = this.TMB_HBmasc() * 1.8;
        };
      };

      //Intensa
      if (value === '3') {
        if (this.formularioPrincipal.get('sexo').value === 'F') {
          this.GET = this.TMB_HBfem() * 1.82;
        };
        if (this.formularioPrincipal.get('sexo').value === 'M') {
          this.GET = this.TMB_HBmasc() * 2.1;
        };
      };

      //Muito Intensa
      if (value === '4') {
        if (this.formularioPrincipal.get('sexo').value === 'F') {
          this.GET = this.TMB_HBfem() * 1.98;
        };
        if (this.formularioPrincipal.get('sexo').value === 'M') {
          this.GET = this.TMB_HBmasc() * 2.4;
        };
      };
    }

    // Fao OMS (2001)
    if (this.formularioPrincipal.get('protocolo').value === '1') {
      const value = this.formularioPrincipal.get('nivelAtiv').value.split('-')[0];
      const idade = Number(this.formularioPrincipal.get('idade').value);
      // Leve
      if (value === '0') {
        if (this.formularioPrincipal.get('sexo').value === 'M') {
          if (idade < 10) {
            this.GET = this.TMB_Faomasc();
          } else if (idade < 18) {
            this.GET = this.TMB_Faomasc() * 1.6;
          } else if (idade < 65) {
            this.GET = this.TMB_Faomasc() * 1.55;
          } else {
            this.GET = this.TMB_Faomasc() * 1.4;
          }
        }

        if (this.formularioPrincipal.get('sexo').value === 'F') {
          if (idade < 10) {
            this.GET = this.TMB_Faofem();
          } else if (idade < 18) {
            this.GET = this.TMB_Faofem() * 1.6;
          } else if (idade < 65) {
            this.GET = this.TMB_Faofem() * 1.55;
          } else {
            this.GET = this.TMB_Faofem() * 1.4;
          }
        }
      };

      // Moderada
      if (value === '1') {
        if (this.formularioPrincipal.get('sexo').value === 'M') {
          if (idade < 10) {
            this.GET = this.TMB_Faomasc();
          } else if (idade < 18) {
            this.GET = this.TMB_Faomasc() * 2.5;
          } else if (idade < 65) {
            this.GET = this.TMB_Faomasc() * 1.78;
          } else {
            this.GET = this.TMB_Faomasc() * 1.6;
          }
        }
        if (this.formularioPrincipal.get('sexo').value === 'F') {
          if (idade < 10) {
            this.GET = this.TMB_Faofem();
          } else if (idade < 18) {
            this.GET = this.TMB_Faofem() * 2.2;
          } else if (idade < 65) {
            this.GET = this.TMB_Faofem() * 1.65;
          } else {
            this.GET = this.TMB_Faofem() * 1.6;
          }
        }
      };

      // Pesada
      if (value === '2') {
        if (this.formularioPrincipal.get('sexo').value === 'M') {
          if (idade < 10) {
            this.GET = this.TMB_Faomasc();
          } else if (idade < 18) {
            this.GET = this.TMB_Faomasc() * 6;
          } else if (idade < 65) {
            this.GET = this.TMB_Faomasc() * 2.1;
          } else {
            this.GET = this.TMB_Faomasc() * 1.9;
          }
        }
        if (this.formularioPrincipal.get('sexo').value === 'F') {
          if (idade < 10) {
            this.GET = this.TMB_Faofem();
          } else if (idade < 18) {
            this.GET = this.TMB_Faofem() * 6;
          } else if (idade < 65) {
            this.GET = this.TMB_Faofem() * 1.82;
          } else {
            this.GET = this.TMB_Faofem() * 1.8;
          }
        }
      };

    }

    // DRI/IOM (2001)
    if (this.formularioPrincipal.get('protocolo').value === '2') {
      this.TMB = 0;
      if (this.classificacaoDRI !== null) {
        const idade = Number(this.formularioPrincipal.get('idade').value);
        const sexo = this.formularioPrincipal.get('sexo').value;
        /* Eutrofico */
        if (this.classificacaoDRI === '0') {
          // Sedentário
          if (this.nivelAtivDRI === '0') {
            return this.DRIeer(1);
          };
          // Pouco Ativo
          if (this.nivelAtivDRI === '1') {
            if (idade < 19) {
              sexo === 'M' ? this.DRIeer(1.13) : this.DRIeer(1.16);
            } else {
              sexo === 'F' ? this.DRIeer(1.11) : this.DRIeer(1.12);
            }
          };
          //Ativo
          if (this.nivelAtivDRI === '2') {
            if (idade < 19) {
              sexo === 'M' ? this.DRIeer(1.26) : this.DRIeer(1.31);
            } else {
              sexo === 'F' ? this.DRIeer(1.25) : this.DRIeer(1.27);
            }
          };
          // Muito Ativo
          if (this.nivelAtivDRI === '3') {
            if (idade < 19) {
              sexo === 'M' ? this.DRIeer(1.42) : this.DRIeer(1.56);
            } else {
              sexo === 'F' ? this.DRIeer(1.48) : this.DRIeer(1.45);
            }
          };
        }

        /* SobrePeso/Obeso */
        if (this.classificacaoDRI === '1') {
          // Sedentário
          if (this.nivelAtivDRI === '0') {
            return this.DRItee(1);
          };
          // Pouco Ativo
          if (this.nivelAtivDRI === '1') {
            if (idade < 19) {
              sexo === 'M' ? this.DRItee(1.12) : this.DRItee(1.18);
            } else {
              sexo === 'F' ? this.DRItee(1.12) : this.DRItee(1.16);
            }
          };
          //Ativo
          if (this.nivelAtivDRI === '2') {
            if (idade < 19) {
              sexo === 'M' ? this.DRItee(1.24) : this.DRItee(1.35);
            } else {
              sexo === 'F' ? this.DRItee(1.29) : this.DRItee(1.27);
            }
          };
          // Muito Ativo
          if (this.nivelAtivDRI === '3') {
            if (idade < 19) {
              sexo === 'M' ? this.DRItee(1.45) : this.DRItee(1.6);
            } else {
              sexo === 'F' ? this.DRItee(1.59) : this.DRItee(1.44);
            }
          };
        }
      }
    }

    // Cunningham
    if (this.formularioPrincipal.get('protocolo').value === '3') {
      // Atleta
      if (this.formularioPrincipal.get('nivelAtiv').value.split('-')[0] === '0') {
        this.Cunningham();
      }
    }

    // Regra de Bolso
    if (this.formularioPrincipal.get('protocolo').value === '4') {
      this.regraBolso();
    }

    // Limpa TMB GET nivel ativ null
    if (this.formularioPrincipal.get('nivelAtiv').value.split('-')[0] === '5') {
      this.TMB = 0;
      this.GET = 0;
    }
  }


  public TMB_HBfem(): number {
    const peso = this.formularioPrincipal.controls.peso.value;
    const altura = this.formularioPrincipal.get('altura').value !== null ? this.formularioPrincipal.get('altura').value.toString().replace(',', '.') : '0,00';
    const idade = Number(this.formularioPrincipal.get('idade').value);
    return this.TMB = 655.1 + (9.563 * peso) + (1.85 * altura * 100) - (4.676 * idade);
  }

  public TMB_HBmasc(): number {
    const peso = this.formularioPrincipal.controls.peso.value;
    const altura = this.formularioPrincipal.get('altura').value !== null ? this.formularioPrincipal.get('altura').value.toString().replace(',', '.') : '0,00';
    const idade = Number(this.formularioPrincipal.get('idade').value);
    return this.TMB = 66.47 + (13.75 * peso) + (5 * altura * 100) - (6.755 * idade);
  }

  public TMB_Faomasc(): number {
    const peso = this.formularioPrincipal.controls.peso.value;
    const idade = Number(this.formularioPrincipal.get('idade').value);
    if (idade < 3) {
      return this.TMB = (60.9 * peso - 54);
    } else if (idade < 10) {
      return this.TMB = (22.7 * peso + 495);
    } else if (idade < 18) {
      return this.TMB = (22.7 * peso + 495);
    } else if (idade < 30) {
      return this.TMB = (22.7 * peso + 495);
    } else if (idade < 60) {
      return this.TMB = (11.6 * peso + 879);
    } else {
      return this.TMB = (11.6 * peso + 879);
    }
  }

  public TMB_Faofem(): number {
    const peso = this.formularioPrincipal.controls.peso.value;
    const idade = Number(this.formularioPrincipal.get('idade').value);
    if (idade < 3) {
      return this.TMB = (61.0 * peso - 51);
    } else if (idade < 10) {
      return this.TMB = (22.5 * peso + 499);
    } else if (idade < 18) {
      return this.TMB = (12.2 * peso + 746);
    } else if (idade < 30) {
      return this.TMB = (14.7 * peso + 496);
    } else if (idade < 60) {
      return this.TMB = (8.7 * peso + 829);
    } else {
      return this.TMB = (8.7 * peso + 829);
    }
  }

  public DRIeer(af: number) {
    const peso = this.formularioPrincipal.controls.peso.value;
    const idade = Number(this.formularioPrincipal.get('idade').value);
    const altura = this.formularioPrincipal.get('altura').value !== null ? this.formularioPrincipal.get('altura').value.toString().replace(',', '.') : '0,00';
    const sexo = this.formularioPrincipal.get('sexo').value;
    if (idade < 1) {
      this.GET = (89 * peso - 100) + 56;
    } else if (idade < 2) {
      this.GET = (89 * peso - 100) + 22;
    } else if (idade < 3) {
      this.GET = (89 * peso - 100) + 20;
    } else if (idade < 9) {
      if (sexo === 'M') {
        this.GET = 88.5 - (61.9 * idade) + af * (26.7 * peso) + ((903 * altura) + 20);
      } else {
        this.GET = 135.3 - (30.8 * idade) + af * (10 * peso) + ((934 * altura) + 20);
      }
    } else if (idade < 19) {
      if (sexo === 'M') {
        this.GET = 88.5 - (61.9 * idade) + af * (26.7 * peso) + ((903 * altura) + 25);
      } else {
        this.GET = 135.3 - (30.8 * idade) + af * (10 * peso) + ((934 * altura) + 25);
      }
    } else {
      if (sexo === 'M') {
        this.GET = 662 - (9.53 * idade) + af * (15.91 * peso) + ((539.6 * altura));
      } else {
        this.GET = 354 - (6.91 * idade) + af * (9.36 * peso) + ((726 * altura));
      }
    }
  }

  public DRItee(af: number) {
    const peso = this.formularioPrincipal.controls.peso.value;
    const idade = Number(this.formularioPrincipal.get('idade').value);
    const altura = this.formularioPrincipal.get('altura').value !== null ? this.formularioPrincipal.get('altura').value.toString().replace(',', '.') : '0,00';
    const sexo = this.formularioPrincipal.get('sexo').value;

    if (idade < 1) {
      this.GET = (89 * peso - 100) + 56;
    } else if (idade < 2) {
      this.GET = (89 * peso - 100) + 22;
    } else if (idade < 3) {
      this.GET = (89 * peso - 100) + 20;
    } else if (idade < 19) {
      if (sexo === 'M') {
        this.GET = 114 - (50.9 * idade) + af * (19.5 * peso) + ((1161.4 * altura));
      } else {
        this.GET = 389 - (41.2 * idade) + af * (15 * peso) + ((701.6 * altura));
      }
    } else {
      if (sexo === 'M') {
        this.GET = 1086 - (10.1 * idade) + af * (13.7 * peso) + ((416 * altura));
      } else {
        this.GET = 448 - (7.95 * idade) + af * (11.4 * peso) + ((619 * altura));
      }
    }
  }

  public Cunningham(): void {
    const massaMagra = this.formularioPrincipal.get('massaMagra').value;
    this.GET = 370 + 21.6 * massaMagra;
    this.TMB = 0;
  }

  public regraBolso(): void {
    const peso = this.formularioPrincipal.controls.peso.value;
    if (peso !== null && peso !== '0') {
      this.regraBolsoObj.perdaPeso = `${peso * 20} kcal - ${peso * 25} kcal`;
      this.regraBolsoObj.manutPeso = `${peso * 25} kcal - ${peso * 30} kcal`;
      this.regraBolsoObj.ganhoPeso = `${peso * 30} kcal - ${peso * 35} kcal`;
    }
  }

  public setStore(): void {
    const patiente = {
      idade: this.formularioPrincipal.get('idade').value,
      altura: this.formularioPrincipal.get('altura').value,
      peso: this.formularioPrincipal.get('peso').value,
      sexo: this.formularioPrincipal.get('sexo').value,
    };
    this.patienteStore.set(patiente);
    this.gastoEnergStore.set(this.formularioPrincipal.value);
  }

  public downloadPdf(): void { 
    let dataAtend = this.formularioPrincipal.controls.dataAtend.value === null ? '0000-00-00' : (this.formularioPrincipal.controls.dataAtend.value).toString().split('-');
    let resultado = [
      {
       text:  `Protocolo: ${this.formularioPrincipal.controls.protocolo.value == 0 ? 'Harris & Benedict (1919)': this.formularioPrincipal.controls.protocolo.value == 1 ? 'FAO/OMS (2001)' : this.formularioPrincipal.controls.protocolo.value == 2 ? 'DRI/IOM (2001)' : this.formularioPrincipal.controls.protocolo.value == 3 ? 'Cunningham (1991)' : this.formularioPrincipal.controls.protocolo.value == 4 ? 'Regra de Bolso' : '-' }`
      },
      {
        text: this.formularioPrincipal.controls.protocolo.value != 4 ? `Nível de Atividade: ${this.formularioPrincipal.get('nivelAtiv').value.split('-')[1]}` : ''
      },
      {
        text: this.formularioPrincipal.controls.protocolo.value == 2 ? `Classificação: ${this.formularioPrincipal.controls.classificacao.value == '0' ? 'Eutrófico' : 'Sobrepeso / Obeso'}` : ''
      },
      {
        text: this.formularioPrincipal.controls.protocolo.value == 3 ? `Massa Magra: ${this.formularioPrincipal.controls.massaMagra.value}` : ''
      },
      {
        text:  this.formularioPrincipal.controls.protocolo.value != 4 ? this.TMB < 0 ? '-' : this.TMB === null ? '-' : this.TMB === undefined ? '-' : `TMB: ${this.TMB.toFixed(2).replace('.', ',')} kcal` :  ''
      },
      {
        text:  this.formularioPrincipal.controls.protocolo.value != 4 ? this.GET < 0 ? '-' : this.GET === null ? '-' : this.GET === undefined ? '-' : `GET: ${this.GET.toFixed(2).replace('.', ',')} kcal`:  ''
      },
      {
        text:  this.formularioPrincipal.controls.protocolo.value == 4 ? `Perda de Peso: ${this.regraBolsoObj.perdaPeso}` : ''
      },
      {
        text:  this.formularioPrincipal.controls.protocolo.value == 4 ? `Manutenção de Peso: ${this.regraBolsoObj.manutPeso}` : ''
      },
      {
        text:  this.formularioPrincipal.controls.protocolo.value == 4 ? `Ganho de Peso: ${this.regraBolsoObj.ganhoPeso}` : ''
      }
    ];
    let docDefinition = {
      header: 'MyDiet One - Gastos Energéticos',
      content: [
        {
          columns: [
            [
              {text : `Altura: ${this.formularioPrincipal.controls.altura.value} m  |  Peso: ${this.formularioPrincipal.controls.peso.value} kg  |  Idade: ${this.formularioPrincipal.controls.idade.value} anos`},
              {text: `Sexo: ${this.formularioPrincipal.controls.sexo.value === 'M' ? 'Masculino' : this.formularioPrincipal.controls.sexo.value === 'Feminino' ? 'F' : '-'}`}
            ],
            [
              {
                text: `Data: ${dataAtend[2]}/${dataAtend[1]}/${dataAtend[0]}`,
                alignment: 'right'
              }
            ]
           ]
        },
        {
          text: 'Descrição',
          style: 'sectionHeader'
        },
        {
          text: this.formularioPrincipal.controls.desc.value
        },
        {
          text: 'Resultado',
          style: 'sectionHeader'
        },
        resultado,
        {
          text: 'Gasto Energético Final',
          style: 'sectionHeader'
        },
        {
          text: `${this.formularioPrincipal.controls.gastoEnergFinal.value} kcal`
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          fontSize: 14,
          margin: [0, 15, 0, 15]
        },
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        },
      }
    };
    pdfMake.createPdf(docDefinition).download(`gastos-energeticos - ${dataAtend[2]}/${dataAtend[1]}/${dataAtend[0]}.pdf`);
  }

}
