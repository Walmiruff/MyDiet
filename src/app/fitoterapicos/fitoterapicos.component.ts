import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fitoterapicos',
  templateUrl: './fitoterapicos.component.html',
  styleUrls: ['./fitoterapicos.component.scss']
})
export class FitoterapicosComponent implements OnInit {

  public fito;

  constructor() { }

  ngOnInit(): void {
    this.fito = [
      {
        class: 'label-verde',
        routeParam: 0,
        label: 'Abacateiro',
      },
      {
        class: 'label-verde',
        routeParam: 1,
        label: 'Alcachofra',
      },
      {
        class: 'label-verde',
        routeParam: 2,
        label: 'Alcaçuz',
      },
      {
        class: 'label-verde',
        routeParam: 3,
        label: 'Alecrim',
      },
      {
        class: 'label-verde',
        routeParam: 4,
        label: 'Alecrim-pimenta',
      },
      {
        class: 'label-verde',
        routeParam: 5,
        label: 'Alho',
      },
      {
        class: 'label-verde',
        routeParam: 6,
        label: 'Anis estrelado',
      },
      {
        class: 'label-verde',
        routeParam: 7,
        label: 'Anis, Erva doce',
      },
      {
        class: 'label-verde',
        routeParam: 8,
        label: 'Arnica',
      },
      {
        class: 'label-verde',
        routeParam: 9,
        label: 'Aroeira-da-praia',
      },
      {
        class: 'label-verde',
        routeParam: 10,
        label: 'Assa-peixe',
      },
      {
        class: 'label-verde',
        routeParam: 11,
        label: 'Babosa ou Áloe',
      },
      {
        class: 'label-verde',
        routeParam: 12,
        label: 'Barbatimão',
      },
      {
        class: 'label-verde',
        routeParam: 13,
        label: 'Bardana',
      },
      {
        class: 'label-verde',
        routeParam: 14,
        label: 'Boldo-baiano',
      },
      {
        class: 'label-verde',
        routeParam: 15,
        label: 'Boldo-do-chile',
      },
      {
        class: 'label-verde',
        routeParam: 16,
        label: 'Boldo-nacional, Hortelã-homem, Falso-boldo, Boldoafricano',
      },
      {
        class: 'label-verde',
        routeParam: 17,
        label: 'Cajueiro',
      },
      {
        class: 'label-verde',
        routeParam: 18,
        label: 'Calêndula',
      },
      {
        class: 'label-verde',
        routeParam: 19,
        label: 'Camomila',
      },
      {
        class: 'label-verde',
        routeParam: 20,
        label: 'Canela, Canela-do-Ceilão',
      },
      {
        class: 'label-verde',
        routeParam: 21,
        label: 'Capim santo, Capim limão, Capim cidró, Capim cidreira, Cidreira',
      },
       {
        class: 'label-verde',
        routeParam: 22,
        label: 'Caralluma',
      },
      {
        class: 'label-verde',
        routeParam: 23,
        label: 'Cardo Mariano',
      },
      {
        class: 'label-verde',
        routeParam: 24,
        label: 'Carqueja; Carqueja amarga',
      },
      {
        class: 'label-verde',
        routeParam: 25,
        label: 'Cáscara sagrada',
      },
      {
        class: 'label-verde',
        routeParam: 26,
        label: 'Castanha-da-índia',
      },
       {
        class: 'label-verde',
        routeParam: 27,
        label: 'Catuaba',
      },
      {
        class: 'label-verde',
        routeParam: 28,
        label: 'Cavalinha',
      },
      {
        class: 'label-verde',
        routeParam: 29,
        label: 'Centela, Centela-asiática',
      },
      {
        class: 'label-verde',
        routeParam: 30,
        label: 'Chá Verde',
      },
      {
        class: 'label-verde',
        routeParam: 31,
        label: 'Chambá, Chachambá, Trevo-cumaru',
      },
      {
        class: 'label-verde',
        routeParam: 32,
        label: 'Chapéu de couro',
      },
      {
        class: 'label-vermelho',
        routeParam: 33,
        label: 'Cimicífuga',
      },
      {
        class: 'label-verde',
        routeParam: 34,
        label: 'Confrei',
      },
      {
        class: 'label-verde',
        routeParam: 35,
        label: 'Curcuma, Açafroa, Açafrão da Terra',
      },
      {
        class: 'label-verde',
        routeParam: 36,
        label: 'Dente de leão',
      },
      {
        class: 'label-vermelho',
        routeParam: 37,
        label: 'Equinácea',
      },
      {
        class: 'label-verde',
        routeParam: 38,
        label: 'Erva-baleeira',
      },
      {
        class: 'label-verde',
        routeParam: 39,
        label: 'Erva-cidreira, Falsa erva- cidreira, Falsamelissa',
      },
      {
        class: 'label-verde',
        routeParam: 40,
        label: 'Erva-de- bicho, Pimenteira-dágua',
      },
      {
        class: 'label-verde',
        routeParam: 41,
        label: 'Espinheira santa',
      },
      {
        class: 'label-verde',
        routeParam: 42,
        label: 'Eucalipto',
      },
      {
        class: 'label-verde',
        routeParam: 43,
        label: 'Fucus, alface do mar, cavalo marinho, alga vesiculosa',
      },
      {
        class: 'label-verde',
        routeParam: 44,
        label: 'Garcinia',
      },
      {
        class: 'label-verde',
        routeParam: 45,
        label: 'Garra do diabo',
      },
      {
        class: 'label-verde',
        routeParam: 46,
        label: 'Gengibre',
      },
      {
        class: 'label-vermelho',
        routeParam: 47,
        label: 'Ginkgo',
      },
       {
        class: 'label-verde',
        routeParam: 48,
        label: 'Ginseng',
      },
      {
        class: 'label-verde',
        routeParam: 49,
        label: 'Goiabeira',
      },
      {
        class: 'label-verde',
        routeParam: 50,
        label: 'Guaçatonga, Erva-de-bugre, Erva-de-lagarto',
      },
      {
        class: 'label-verde',
        routeParam: 51,
        label: 'Guaco',
      },
      {
        class: 'label-verde',
        routeParam: 52,
        label: 'Guaraná',
      },
      {
        class: 'label-verde',
        routeParam: 53,
        label: 'Hamamélis',
      },
      {
        class: 'label-vermelho',
        routeParam: 54,
        label: 'Hipérico',
      },
      {
        class: 'label-verde',
        routeParam: 55,
        label: 'Hortelã-pimenta',
      },
      {
        class: 'label-verde',
        routeParam: 56,
        label: 'Jucá, Pau-ferro',
      },
      {
        class: 'label-verde',
        routeParam: 57,
        label: 'Jurubeba',
      },
      {
        class: 'label-vermelho',
        routeParam: 58,
        label: 'Kava kava',
      },
      {
        class: 'label-verde',
        routeParam: 59,
        label: 'Laranja-amarga',
      },
      {
        class: 'label-verde',
        routeParam: 60,
        label: 'Marcela do campo',
      },
      {
        class: 'label-verde',
        routeParam: 61,
        label: 'Malva',
      },
      {
        class: 'label-verde',
        routeParam: 62,
        label: 'Maracujá, Passiflora',
      },
      {
        class: 'label-verde',
        routeParam: 63,
        label: 'Melão-de-São-Caetano',
      },
      {
        class: 'label-verde',
        routeParam: 64,
        label: 'Melissa, Erva-cidreira',
      },
       {
        class: 'label-verde',
        routeParam: 65,
        label: 'Mentrasto, Catinga de bode',
      },
      {
        class: 'label-verde',
        routeParam: 66,
        label: 'Mil folhas',
      },
      {
        class: 'label-verde',
        routeParam: 67,
        label: 'Mulungu',
      },
      {
        class: 'label-verde',
        routeParam: 68,
        label: 'Pata de Vaca',
      },
       {
        class: 'label-verde',
        routeParam: 69,
        label: 'Pfaffia, paratudo, ginseng brasileiro',
      },
      {
        class: 'label-verde',
        routeParam: 70,
        label: 'Picão',
      },
      {
        class: 'label-verde',
        routeParam: 71,
        label: 'Pitangueira',
      },
       {
        class: 'label-verde',
        routeParam: 72,
        label: 'Poejo',
      },
      {
        class: 'label-verde',
        routeParam: 73,
        label: 'Polígala',
      },
      {
        class: 'label-verde',
        routeParam: 74,
        label: 'Quebra-pedra',
      },
      {
        class: 'label-verde',
        routeParam: 75,
        label: 'Romã',
      },
       {
        class: 'label-verde',
        routeParam: 76,
        label: 'Sabugueiro',
      },
      {
        class: 'label-verde',
        routeParam: 77,
        label: 'Salgueiro, Salgueiro Branco',
      },
       {
        class: 'label-verde',
        routeParam: 78,
        label: 'Sálvia',
      },
      {
        class: 'label-vermelho',
        routeParam: 79,
        label: 'Saw Palmetto',
      },
      {
        class: 'label-verde',
        routeParam: 80,
        label: 'Sene',
      },
       {
        class: 'label-vermelho',
        routeParam: 81,
        label: 'Tanaceto',
      },
       {
        class: 'label-verde',
        routeParam: 82,
        label: 'Tanchagem; Tansagem, Tranchagem',
      },
      {
        class: 'label-verde',
        routeParam: 83,
        label: 'Unha-de-gato',
      },
      {
        class: 'label-vermelho',
        routeParam: 84,
        label: 'Uva-Ursi',
      },
      {
        class: 'label-vermelho',
        routeParam: 85,
        label: 'Valeriana',
      },
      {
        class: 'label-verde',
        routeParam: 86,
        label: 'Zedoária',
      },
    ]
  }

}
