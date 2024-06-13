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
    if (!this.validateDni(this.tutor.dniResponsable)) {
      alert('DNI tutor no válido');
      return;
    }
    // Guardar el tutor
    console.log('Nuevo tutor:', this.tutor);
    this.httpService.post(
      CONSTANTES.apiUrl + CONSTANTES.tutores,
      this.tutor
    );
    this.router.navigate(['/tutores']);
  }

  validateDni(dni: string): boolean {
    const patronDni = /^[XYZ]?\d{5,8}[A-Z]$/;
    if (!patronDni.test(dni)) return false;

    const dniLetras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let number = dni.substring(0, dni.length - 1).toUpperCase();
    number = number.replace('X', '0').replace('Y', '1').replace('Z', '2');

    const numero = parseInt(number, 10);
    const letra = dni[dni.length - 1].toUpperCase();
    return dniLetras[numero % 23] === letra;
  }

}
