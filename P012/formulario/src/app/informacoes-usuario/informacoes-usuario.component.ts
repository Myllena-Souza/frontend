import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-informacoes-usuario',
  templateUrl: './informacoes-usuario.component.html',
  styleUrl: './informacoes-usuario.component.css'
})
export class InformacoesUsuarioComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
