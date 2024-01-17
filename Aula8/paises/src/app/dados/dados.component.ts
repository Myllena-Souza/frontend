import { Component } from '@angular/core';
import { TesteservicoService } from '../testeservico.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent {
  constructor (private testando:TesteservicoService){
    // 
  }

}
