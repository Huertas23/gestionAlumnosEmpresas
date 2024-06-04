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
    tutorCentroId: undefined,
  };

  empresas: Empresa[] = [
    {
      id: 1,
      razonSocial: 'Tech Solutions',
      domicilioSocial: 'Calle Falsa 123',
      cif: 'A12345678',
      fechaFirma: new Date(),
      direccionPracticas: 'Calle Practicas 123',
      tutorLaboral: 'Carlos López',
      dniTutorLaboral: '12345678A',
      representanteLegal: 'Ana García',
      dniRepresentante: '87654321B',
    },
    {
      id: 2,
      razonSocial: 'Innovative Startups',
      domicilioSocial: 'Avenida Siempre Viva 742',
      cif: 'B87654321',
      fechaFirma: new Date(),
      direccionPracticas: 'Avenida Practicas 742',
      tutorLaboral: 'María Sánchez',
      dniTutorLaboral: '87654321B',
      representanteLegal: 'Luis Pérez',
      dniRepresentante: '12345678A',
    },
  ];

  tutoresCentro: Tutor[] = [
    {
      id: 1,
      nombre: 'Carlos García',
      dni_responsable: '12345678A',
    },
    {
      id: 2,
      nombre: 'María López',
      dni_responsable: '87654321B',

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
  async ngOnInit(): Promise<void> {
    // Aquí podrías cargar las empresas mediante una llamada a la API
    const empresasList = await this.getEmpresas();
    empresasList.forEach((element: Empresa) => {
      this.empresas.push(element);
    });
  }

  async getEmpresas() {
    const empresas = await this.httpService.get(
      CONSTANTES.apiUrl + CONSTANTES.empresas
    );
    console.log(empresas);
    return empresas;
  }

  async getTutores() {
    const empresas = await this.httpService.get(
      CONSTANTES.apiUrl + CONSTANTES.empresas
    );
    console.log(empresas);
    return empresas;
  }
}
