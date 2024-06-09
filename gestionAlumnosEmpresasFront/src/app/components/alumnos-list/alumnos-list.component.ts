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
  alumnos: Alumno[] = [];
  empresas: Empresa[] = [];

  constructor(private router: Router, private httpService: HttpService) {}

  async ngOnInit(): Promise<void> {
    // Cargamos los alumnos y ordenamos alfabeticamente
    const empresasList = await this.getAlumnos();
    empresasList.forEach((element: Alumno) => {
      this.alumnos.push(element);
    });
    //console.log(empresasList);
    //console.log(this.alumnos);
    this.ordenarAlumnos();
  }


  async getAlumnos() {
    // Cargar los alumnos
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

  agregarSeguimiento(alumnoId: number | undefined) {
    if (alumnoId !== undefined) {
      this.router.navigate(['/add-seguimiento'], {
        queryParams: { alumnoId: alumnoId },
      });
    }
  }

    verSeguimientos(alumnoId: number | undefined) {
      if (alumnoId !== undefined) {
        this.router.navigate(['/seguimientos-list'], {
          queryParams: { alumnoId: alumnoId },
        });
      }
  }
}