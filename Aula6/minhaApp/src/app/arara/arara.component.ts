import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})
export class AraraComponent {
  nome: string = 'Arara';
  imagem:string = 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/arara-azul.jpg';
  public onClick(): void{
    alert('Clicou no botão miseraaaa');
  }


}
