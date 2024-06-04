import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../../models/alumno.model';
import { Tutor } from '../../models/tutor.model';
import { Empresa } from '../../models/empresa.model';
import { HttpService } from '../../services/httpService';
import { CONSTANTES } from '../../config/Constants';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css'],
})
export class AddAlumnoComponent {
  alumno: Alumno = {
    nombre: '',
    apellido: '',
    dni: '',
    centroPracticas: '',
    empresa_id: undefined,
    tutor_centro_id: undefined,
  };

  empresas: Empresa[] = [
    {
      id: 1,
      razon_social: 'Tech Solutions',
      domicilio_social: 'Calle Falsa 123',
      cif: 'A12345678',
      fecha_firma: new Date(),
      direccion_practicas: 'Calle Practicas 123',
      tutor_laboral: 'Carlos López',
      dni_tutor_laboral: '12345678A',
      representante_legal: 'Ana García',
      dni_representante: '87654321B',
    },
    {
      id: 2,
      razon_social: 'Innovative Startups',
      domicilio_social: 'Avenida Siempre Viva 742',
      cif: 'B87654321',
      fecha_firma: new Date(),
      direccion_practicas: 'Avenida Practicas 742',
      tutor_laboral: 'María Sánchez',
      dni_tutor_laboral: '87654321B',
      representante_legal: 'Luis Pérez',
      dni_representante: '12345678A',
    },
  ];

  tutoresCentro: Tutor[] = [
    {
      id: 1,
      nombre: 'Carlos García',
      dni_responsable: '12345678A',
      tipo: 'centro',
    },
    {
      id: 2,
      nombre: 'María López',
      dni_responsable: '87654321B',
      tipo: 'centro',
    },
  ];

  constructor(private router: Router, private httpService: HttpService) {}

  async onSubmit() {
    // Lógica para guardar el alumno
    console.log('Nuevo alumno:', this.alumno);
    await this.httpService.post(
      CONSTANTES.apiUrl + CONSTANTES.alumnos,
      this.alumno
    );
    this.router.navigate(['/alumnos']);
  }
}
