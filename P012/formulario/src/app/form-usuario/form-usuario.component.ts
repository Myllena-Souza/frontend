import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormEventosService } from '../services/form-eventos.service';
import { MatDialog } from '@angular/material/dialog';
import { InformacoesUsuarioComponent } from '../informacoes-usuario/informacoes-usuario.component';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formEventService: FormEventosService,
    private dialog: MatDialog
  ) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      profession: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    this.formEventService.watchFormChanges(this.userForm);
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      console.log(user);
      this.openDialog(user);
    }
  }

  openDialog(user: any): void {
    const dialogRef = this.dialog.open(InformacoesUsuarioComponent, {
      width: '400px',
      data: user
    });
  }
}
