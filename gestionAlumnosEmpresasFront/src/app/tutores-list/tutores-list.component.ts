import { Component, OnInit } from '@angular/core';
import { Tutor } from '../models/tutor.model';

@Component({
  selector: 'app-tutores-list',
  templateUrl: './tutores-list.component.html',
  styleUrls: ['./tutores-list.component.css']
})
export class TutoresListComponent implements OnInit {
  tutores: Tutor[] = [
    { id: 1, curso: '1A', nombre: 'Carlos García', dni_responsable: '12345678A', tipo: 'centro' },
    { id: 2, curso: '2B', nombre: 'María López', dni_responsable: '87654321B', tipo: 'centro' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Aquí podrías cargar los tutores mediante una llamada a la API
  }
}

