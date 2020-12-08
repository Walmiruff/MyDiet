import { Component , OnInit} from '@angular/core';
import { AlimentosService } from './shared/services/alimentos.service';
import IBGE from '../assets/resources/alimentos/IBGE.json';
import TACO from '../assets/resources/alimentos/TACO.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-diet';

  constructor(private alimentosService: AlimentosService) { }

  ngOnInit(): void {
    this.alimentosService.load(IBGE, TACO);
  }
}
