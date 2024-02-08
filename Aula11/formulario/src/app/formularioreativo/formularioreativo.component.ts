import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reativo',
  templateUrl: './formularioreativo.component.html',
  styleUrls: ['./formularioreativo.component.css']
})
export class FormReativoComponent implements OnInit{
  exemploForm: FormGroup;
  labelLogs = ['Data:', 'Origem:', 'Destino:']; 
  y: number = 0;
  emailValidator: any;

  constructor() { 
    this.exemploForm = new FormGroup({
      'estacaoClimatica': new FormControl(null, Validators.required),
      'modelo': new FormControl(null,  [Validators.required, 
                                        Validators.minLength(3),
                                        Validators.maxLength(10)]),
      'localizacao': new FormControl(null),
      'email': new FormControl('FAB',[this.emailValidator.bind(this)]),
      
    });
  }
  onSubmit(){
    console.log(this.exemploForm);
    console.log(this.exemploForm.value);
  }

  incY(){
    this.y++;
    if(this.y > 2){
      this.y = 0;
    }
  }  

  empresaValidator(control: AbstractControl): 
  { [key: string]: boolean } | null {
    
    const value = control.value;
    if (value !== 'FAB' && value !== 'AZUL') {
      return { 'invalidEmpresa': true };
    }
    return null;
  }


  ngOnInit(){
  
  }
}

