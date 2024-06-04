import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno.model';
import { Empresa } from '../../models/empresa.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      dni: '12345678A',
      centroPracticas: 'Tech Solutions',
      empresa_id: 1,
      tutorCentroId: 1,
    },
    {
      id: 2,
      nombre: 'Ana',
      apellido: 'Gomez',
      dni: '87654321B',
      centroPracticas: 'Innovative Startups',
      empresa_id: 2,
      tutorCentroId: 2,
    },
  ];

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

  constructor() {}

  ngOnInit(): void {
    // Aquí podrías cargar los alumnos y empresas mediante una llamada a la API
  }

  getEmpresaNombre(empresaId: number | undefined): string {
    if (empresaId === undefined) {
      return 'No asignada';
    }
    const empresa = this.empresas.find((e) => e.id === empresaId);
    return empresa ? empresa.razonSocial : 'No asignada';
  }

  getTutorLaboral(empresaId: number | undefined): string {
    if (empresaId === undefined) {
      return 'No asignado';
    }
    const empresa = this.empresas.find((e) => e.id === empresaId);
    return empresa ? empresa.tutorLaboral : 'No asignado';
  }
}
