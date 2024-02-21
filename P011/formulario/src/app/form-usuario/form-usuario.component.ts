import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css'
})
export class FormUsuarioComponent {
  exemploForm: FormGroup;

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
