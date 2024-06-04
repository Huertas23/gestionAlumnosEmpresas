import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../../models/alumno.model';
import { Empresa } from '../../models/empresa.model';
import { CONSTANTES } from 'src/app/config/Constants';
import { HttpService } from 'src/app/services/httpService';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css'],
})
export class AlumnosListComponent implements OnInit {
  alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      dni: '12345678A',
      centroPracticas: 'Tech Solutions',
      empresa_id: 1,
      tutor_centro_id: 1,
    },
    {
      id: 2,
      nombre: 'Ana',
      apellido: 'Gomez',
      dni: '87654321B',
      centroPracticas: 'Innovative Startups',
      empresa_id: 2,
      tutor_centro_id: 2,
    },
  ];

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

  constructor(private router: Router, private httpService: HttpService) {}

  ngOnInit(): void {
    // Aquí podrías cargar los alumnos y empresas mediante una llamada a la API
    this.getAlumnos();
    this.ordenarAlumnos();
  }

  async getAlumnos() {
    const alumns = await this.httpService.get(
      CONSTANTES.apiUrl + CONSTANTES.alumnos
    );
    console.log(alumns);
    this.alumnos.push(alumns);
    console.log(this.alumnos);
  }

  ordenarAlumnos() {
    this.alumnos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  getEmpresaNombre(empresaId: number | undefined): string {
    if (empresaId === undefined) {
      return 'No asignada';
    }
    const empresa = this.empresas.find((e) => e.id === empresaId);
    return empresa ? empresa.razon_social : 'No asignada';
  }

  agregarSeguimiento(alumnoId: number | undefined) {
    if (alumnoId !== undefined) {
      this.router.navigate(['/add-seguimiento'], {
        queryParams: { alumnoId: alumnoId },
      });
    }
  }
}
