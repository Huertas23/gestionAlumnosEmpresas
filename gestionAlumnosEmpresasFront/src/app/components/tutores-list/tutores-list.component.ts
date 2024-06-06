import { Component, OnInit } from '@angular/core';
import { Tutor } from '../../models/tutor.model';
import { HttpService } from 'src/app/services/httpService';
import { CONSTANTES } from 'src/app/config/Constants';

@Component({
  selector: 'app-tutores-list',
  templateUrl: './tutores-list.component.html',
  styleUrls: ['./tutores-list.component.css'],
})
export class TutoresListComponent implements OnInit {
  tutores: Tutor[] = [
    {
      id: 1,
      curso: '1A',
      nombre: 'Carlos García',
      dni_responsable: '12345678A',
    },
    {
      id: 2,
      curso: '2B',
      nombre: 'María López',
      dni_responsable: '87654321B',
    },
  ];

  constructor(private httpService: HttpService) {}

  async ngOnInit(): Promise<void> {
    // Aquí podrías cargar las empresas mediante una llamada a la API
    const tutoresList = await this.getTutores();
    tutoresList.forEach((element: Tutor) => {
      this.tutores.push(element);
    });
  }

  async getTutores() {
    const tutores = await this.httpService.get(
      CONSTANTES.apiUrl + CONSTANTES.tutores
    );
    console.log(tutores);
    return tutores;
  }
}
