import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-suplementos',
  templateUrl: './suplementos.component.html',
  styleUrls: ['./suplementos.component.scss']
})
export class SuplementosComponent implements OnInit {

  public suplementos;
  public supl;
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      filterSupl: [0],
    })
  }

  ngOnInit(): void {
    this.suplementos = [
      {
        class: 'label-laranja',
        routeParam: 0,
        label: 'Ácido Alfa Lipóico',
      },
      {
        class: 'label-vermelho',
        routeParam: 1,
        label: 'Albumina',
      },
      {
        class: 'label-vermelho',
        routeParam: 2,
        label: 'BCAA (leucina, isoleucina, valina)',
      },
      {
        class: 'label-roxo',
        routeParam: 3,
        label: 'Betacaroteno',
      },
      {
        class: 'label-azul',
        routeParam: 4,
        label: 'Boro',
      },
      {
        class: 'label-laranja',
        routeParam: 5,
        label: 'Cafeína',
      },
      {
        class: 'label-azul',
        routeParam: 6,
        label: 'Cálcio',
      },
      {
        class: 'label-laranja',
        routeParam: 7,
        label: 'Coenzima Q10',
      },
      {
        class: 'label-laranja',
        routeParam: 8,
        label: 'Condroitina (sulfato de condroitina)',
      },
      {
        class: 'label-vermelho',
        routeParam: 9,
        label: 'Creatina',
      },
      {
        class: 'label-azul',
        routeParam: 10,
        label: 'Cromo',
      },
      {
        class: 'label-rosa',
        routeParam: 11,
        label: 'EXSYNUTRIMENT®',
      },
      {
        class: 'label-laranja',
        routeParam: 12,
        label: 'Fabuless®',
      },
      {
        class: 'label-azul',
        routeParam: 13,
        label: 'Ferro',
      },
      {
        class: 'label-amarelo',
        routeParam: 14,
        label: 'Glicina',
      },
      {
        class: 'label-verde',
        routeParam: 15,
        label: 'Gluconamam®',
      },
      {
        class: 'label-laranja',
        routeParam: 16,
        label: 'Glucosamina',
      },
      {
        class: 'label-laranja',
        routeParam: 17,
        label: 'HMB (beta-hidroxi-beta-metilbutirato)',
      },
      {
        class: 'label-laranja',
        routeParam: 18,
        label: 'Inositol',
      },
      {
        class: 'label-azul',
        routeParam: 19,
        label: 'Iodo',
      },
      {
        class: 'label-amarelo',
        routeParam: 20,
        label: 'L-Taurina',
      },
      {
        class: 'label-amarelo',
        routeParam: 21,
        label: 'L-arginina',
      },
      {
        class: 'label-amarelo',
        routeParam: 22,
        label: 'L-carnitina',
      },
      {
        class: 'label-amarelo',
        routeParam: 23,
        label: 'L-Cisteína',
      },
      {
        class: 'label-amarelo',
        routeParam: 24,
        label: 'L-Glutamina',
      },
      {
        class: 'label-amarelo',
        routeParam: 25,
        label: 'L-Lisina',
      },
      {
        class: 'label-amarelo',
        routeParam: 26,
        label: 'L-Tirosina',
      },
      {
        class: 'label-amarelo',
        routeParam: 27,
        label: 'L-Triptofano',
      },
      {
        class: 'label-azul',
        routeParam: 28,
        label: 'Magnésio',
      },
      {
        class: 'label-vermelho',
        routeParam: 29,
        label: 'Maltodextrina',
      },
      {
        class: 'label-azul',
        routeParam: 30,
        label: 'Manganês',
      },
      {
        class: 'label-azul',
        routeParam: 31,
        label: 'Molibdênio',
      },
      {
        class: 'label-laranja',
        routeParam: 32,
        label: 'MSM (Metilsulfonilmetano)',
      },
      {
        class: 'label-laranja',
        routeParam: 33,
        label: 'Ômega 3',
      },
      {
        class: 'label-azul',
        routeParam: 34,
        label: 'Potássio',
      },
      {
        class: 'label-verde',
        routeParam: 35,
        label: 'Prebióticos',
      },
      {
        class: 'label-verde',
        routeParam: 36,
        label: 'Probióticos',
      },
      {
        class: 'label-laranja',
        routeParam: 37,
        label: 'Pycnogenol (Picnogenol)',
      },
      {
        class: 'label-laranja',
        routeParam: 38,
        label: 'SAMe (S-adenosil metionina)',
      },
      {
        class: 'label-azul',
        routeParam: 39,
        label: 'Selênio',
      },
      {
        class: 'label-azul',
        routeParam: 40,
        label: 'Silício',
      },
      {
        class: 'label-verde',
        routeParam: 41,
        label: 'Simbióticos',
      },
      {
        class: 'label-azul',
        routeParam: 42,
        label: 'Vanádio',
      },
      {
        class: 'label-roxo',
        routeParam: 43,
        label: 'Vitamina A',
      },
      {
        class: 'label-roxo',
        routeParam: 44,
        label: 'Vitamina B1 (Cloridato de Tiamina)',
      },
      {
        class: 'label-roxo',
        routeParam: 45,
        label: 'Vitamina B12 (Cobalamina)',
      },
      {
        class: 'label-roxo',
        routeParam: 46,
        label: 'Vitamina B2 (Riboflavina)',
      },
      {
        class: 'label-roxo',
        routeParam: 47,
        label: 'Vitamina B2 (Riboflavina)',
      },
      {
        class: 'label-roxo',
        routeParam: 48,
        label: 'Vitamina B3 (Niacina, Nicotinamida, Ácido Nicotínico)',
      },
      {
        class: 'label-roxo',
        routeParam: 49,
        label: 'Vitamina B5 (Ácido Pantotênico)',
      },
      {
        class: 'label-roxo',
        routeParam: 50,
        label: 'Vitamina B6 (Piridoxina)',
      },
      {
        class: 'label-roxo',
        routeParam: 51,
        label: 'Vitamina B9 (Ácido Fólico)',
      },
      {
        class: 'label-roxo',
        routeParam: 52,
        label: 'Vitamina C (ácido ascórbico)',
      },
      {
        class: 'label-roxo',
        routeParam: 53,
        label: 'Vitamina D',
      },
      {
        class: 'label-roxo',
        routeParam: 54,
        label: 'Vitamina E (Tocoferol)',
      },
      {
        class: 'label-roxo',
        routeParam: 55,
        label: 'Vitamina K',
      },
      {
        class: 'label-vermelho',
        routeParam: 56,
        label: 'Whey Protein',
      },
      {
        class: 'label-azul',
        routeParam: 57,
        label: 'Zinco',
      },
    ]

    this.supl = this.suplementos;
    this.triggers();
  }

  public triggers(): void {
    this.form.controls.filterSupl.valueChanges.subscribe(v => {
      if (v == 0) {
        this.supl = this.suplementos;
      } else if (v == 1) {
        this.supl = this.suplementos.filter((s => s.class === 'label-amarelo'))
      } else if (v == 2) {
        this.supl = this.suplementos.filter((s => s.class === 'label-vermelho'))
      } else if (v == 3) {
        this.supl = this.suplementos.filter((s => s.class === 'label-rosa'))
      } else if (v == 4) {
        this.supl = this.suplementos.filter((s => s.class === 'label-verde'))
      } else if (v == 5) {
        this.supl = this.suplementos.filter((s => s.class === 'label-azul'))
      } else if (v == 6) {
        this.supl = this.suplementos.filter((s => s.class === 'label-roxo'))
      } else {
        this.supl = this.suplementos.filter((s => s.class === 'label-laranja'))
      }
    })
  }

}
