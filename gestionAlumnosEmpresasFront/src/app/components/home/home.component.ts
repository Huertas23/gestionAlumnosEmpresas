import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno.model';
import { Empresa } from '../../models/empresa.model';
import { CONSTANTES } from 'src/app/config/Constants';
import { HttpService } from 'src/app/services/httpService';
import { Router } from '@angular/router';

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


  constructor(private router: Router, private httpService: HttpService) {}

  async ngOnInit(): Promise<void> {
    // Aquí podrías cargar los alumnos y empresas mediante una llamada a la API
    const empresasList = await this.getAlumnos();
    empresasList.forEach((element: Alumno) => {
      this.alumnos.push(element);
    });
    this.ordenarAlumnos();
  }


  async getAlumnos() {
    const alumnos = await this.httpService.get(
      CONSTANTES.apiUrl + CONSTANTES.alumnos
    );
    console.log(alumnos);
    return alumnos
  }

  ordenarAlumnos() {
    this.alumnos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  getEmpresaNombre(alumno: any | undefined): string {
    if (alumno === undefined) {
      return 'No asignada';
    }
    return alumno.empresa ? alumno.empresa.razonSocial : 'No asignada';
  }

  getTutorLaboral(alumno: any | undefined): string {
    if (alumno === undefined) {
      return 'No asignado';
    }
    return alumno.empresa ? alumno.empresa.tutorLaboral : 'No asignado';
  }
}
