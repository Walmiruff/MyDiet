import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }

  getTabelas() {
    return [
      {
        nome: 'Todas',
        valor: 'Todas'
      },
      {
        nome: 'IBGE',
        valor: 'IBGE'
      },
      {
        nome: 'TACO',
        valor: 'TACO'
      },
      {
        nome: 'Tucunduva',
        valor: 'Tucunduva'
      },
      {
        nome: 'Marcas',
        valor: 'Marcas'
      },
      {
        nome: 'Suplementos',
        valor: 'Suplementos'
      }
    ];
  }
}
