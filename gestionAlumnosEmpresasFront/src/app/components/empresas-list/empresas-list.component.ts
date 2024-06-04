import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../models/empresa.model';
import { HttpService } from 'src/app/services/httpService';
import { CONSTANTES } from 'src/app/config/Constants';

@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css'],
})
export class EmpresasListComponent implements OnInit {
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

  constructor(private httpService: HttpService) {}

  async ngOnInit(): Promise<void> {
    // Aquí podrías cargar las empresas mediante una llamada a la API
    const empresasList = await this.getEmpresas();
    this.empresas.push(empresasList);
  }

  async getEmpresas() {
    const empresas = await this.httpService.get(
      CONSTANTES.apiUrl + CONSTANTES.empresas
    );
    return empresas;
  }
}
