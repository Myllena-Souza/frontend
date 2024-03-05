import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../services/data-base.service';
import { Atendimento } from '../atendimento.model';
@Component({
  selector: 'app-listar-atendimento',
  templateUrl: './listar-atendimento.component.html',
  styleUrl: './listar-atendimento.component.css'
})
export class ListarAtendimentosComponent implements OnInit {

  loadedAtendimentos: Atendimento[] = [];
  constructor(private dataBaseService:DataBaseService) { }

  ngOnInit():void{
    this.getAtendimentos();
  }

  getAtendimentos(){
    this.dataBaseService.getAtendimentos().subscribe((responseData : Atendimento[]) => {
      console.log(responseData);
      this.loadedAtendimentos = responseData;
      console.log(this.loadedAtendimentos);     
    });
  }
  apagarTudo(){
    this.dataBaseService.deleteAllAtendimentos().subscribe( () => {
      console.log('Apagou tudo');
      this.loadedAtendimentos = [];
    });
  }


}