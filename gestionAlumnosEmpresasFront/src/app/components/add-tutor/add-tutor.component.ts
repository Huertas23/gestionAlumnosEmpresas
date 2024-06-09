import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tutor } from '../../models/tutor.model';
import { HttpService } from 'src/app/services/httpService';
import { CONSTANTES } from 'src/app/config/Constants';

@Component({
  selector: 'app-add-tutor',
  templateUrl: './add-tutor.component.html',
  styleUrls: ['./add-tutor.component.css'],
})
export class AddTutorComponent {
  tutor: Tutor = {
    nombre: '',
    dniResponsable: '',
    curso: '',
  };

  constructor(private router: Router, private httpService: HttpService) {}

  onSubmit() {
    // Guardar el tutor
    console.log('Nuevo tutor:', this.tutor);
    this.httpService.post(
      CONSTANTES.apiUrl + CONSTANTES.tutores,
      this.tutor
    );
    this.router.navigate(['/tutores']);
  }
}
