import { Component , OnInit} from '@angular/core';
import { AlimentosService } from './shared/services/alimentos.service';
import IBGE from '../assets/resources/alimentos/IBGE.json';
import TACO from '../assets/resources/alimentos/TACO.json';
import Tucunduva from '../assets/resources/alimentos/Tucunduva.json';
import Marcas from '../assets/resources/alimentos/Marcas.json';
import Suplementos from '../assets/resources/alimentos/Suplementos.json';
import Modelos from '../assets/resources/modelos/modelos.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-diet';

  constructor(private alimentosService: AlimentosService) { }

  ngOnInit(): void {
    this.alimentosService.load(IBGE, TACO, Tucunduva, Marcas, Suplementos);
    this.alimentosService.loadModelos(Modelos);
  }

  public showDonate(): void {
    var element = document.getElementById('donate');
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
  }
}
