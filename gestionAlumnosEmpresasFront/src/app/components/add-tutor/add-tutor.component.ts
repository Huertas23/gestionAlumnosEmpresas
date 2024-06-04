import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tutor } from '../../models/tutor.model';

@Component({
  selector: 'app-add-tutor',
  templateUrl: './add-tutor.component.html',
  styleUrls: ['./add-tutor.component.css'],
})
export class AddTutorComponent {
  tutor: Tutor = {
    nombre: '',
    dni_responsable: '',
    tipo: 'centro', // o 'empresa', según el caso
    curso: '',
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Lógica para guardar el tutor
    console.log('Nuevo tutor:', this.tutor);
    this.router.navigate(['/tutores']);
  }
}
