import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonComponent } from 'src/app/components/boton/boton.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, BotonComponent],
  templateUrl: './login.component.html',
})
export default class LoginComponent {}
