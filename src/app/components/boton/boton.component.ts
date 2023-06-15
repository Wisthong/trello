import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton.component.html',
})
export class BotonComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
}
