import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logsenha',
  templateUrl: './logsenha.component.html',
  styleUrl: './logsenha.component.css'
})
export class LogsenhaComponent {
  exemploForm: FormGroup;
  labelLogs = ['Data:', 'Origem:', 'Destino:']; 
  y: number = 0;

  constructor() { 
    this.exemploForm = new FormGroup({
      'login': new FormControl(null, Validators.required),
      'senha': new FormControl(null),
    });
  }
  onSubmit(){
    console.log(this.exemploForm);
    console.log(this.exemploForm.value);
  }
}
