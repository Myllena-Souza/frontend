import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { ExemplosObservableService } from '../services/exemplos-observable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: any;
  valores:any[] = [];
  valores2:any[] = [];
  somaDeValores: number = 0;
  numeros:number = 10;
  paisPopulacao: {pais: string, populacao: number}[] = [];

  constructor(private githubService: GithubService, private valService: ExemplosObservableService) { }
  
  ngOnInit(): void {
    this.githubService.getUsuarios().subscribe((data: any) => {
      this.usuarios = data;
    });
  }

  getValores(){
    this.valService.getValores().subscribe((valor: any) => {
      this.valores.push(valor);
    })
  }
}