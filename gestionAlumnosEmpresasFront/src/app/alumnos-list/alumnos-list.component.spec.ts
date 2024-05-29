import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../models/alumno.model';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {
  alumnos: Alumno[] = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', dni: '12345678A', centro_practicas: 'Tech Solutions', empresa_id: 1 },
    { id: 2, nombre: 'Ana', apellido: 'Gomez', dni: '87654321B', centro_practicas: 'Innovative Startups', empresa_id: 2 }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Aquí podrías cargar los alumnos mediante una llamada a la API
  }

  agregarSeguimiento(alumnoId: number) {
    this.router.navigate(['/add-seguimiento'], { queryParams: { alumnoId: alumnoId } });
  }
}
