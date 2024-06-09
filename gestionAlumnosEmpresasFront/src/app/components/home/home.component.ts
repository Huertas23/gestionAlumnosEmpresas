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
  alumnos: Alumno[] = [];

  empresas: Empresa[] = [];


  constructor(private router: Router, private httpService: HttpService) {}

  async ngOnInit(): Promise<void> {
    // Cargamos los alumnos
    const empresasList = await this.getAlumnos();
    empresasList.forEach((element: Alumno) => {
      this.alumnos.push(element);
    });
    this.ordenarAlumnos();
  }


  async getAlumnos() {
    // Obetener alumnos
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
