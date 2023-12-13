import { Component } from '@angular/core';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrl: './gato.component.css'
})
export class GatoComponent {
  nome: string = 'Gato';
  imagem:string = 'https://www.hospitalveterinariolevet.com.br/site/wp-content/uploads/2021/02/2020-10-16-problemas-de-pele-em-gatos-802x506-1.jpg';
}
