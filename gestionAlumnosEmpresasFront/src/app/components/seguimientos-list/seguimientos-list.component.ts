// src/app/components/seguimientos-list/seguimientos-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seguimiento } from '../../models/seguimiento.model';
import { HttpService } from '../../services/httpService';
import { CONSTANTES } from '../../config/Constants';

@Component({
  selector: 'app-seguimientos-list',
  templateUrl: './seguimientos-list.component.html',
  styleUrls: ['./seguimientos-list.component.css']
})
export class SeguimientosListComponent implements OnInit {
  seguimientos: Seguimiento[] = [];
  alumnoId!: number;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    this.alumnoId = +this.route.snapshot.queryParamMap.get('alumnoId')!;
    const seguimientosList = await this.getSeguimientos();
    this.seguimientos = seguimientosList.filter((seguimiento: { alumno_id: number; }) => seguimiento.alumno_id === this.alumnoId);
  }

  async getSeguimientos() {
    const seguimientos = await this.httpService.get(
      CONSTANTES.apiUrl + CONSTANTES.seguimientos
    );
    console.log(seguimientos);
    return seguimientos;
  }
}
