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

  constructor(private httpService: HttpService) {}

  async ngOnInit(): Promise<void> {
    // Aquí podrías cargar las empresas mediante una llamada a la API
    const empresasList = await this.getEmpresas();
    empresasList.forEach((element: Empresa) => {
      this.empresas.push(element);
    });
  }

  async getEmpresas() {
    const empresas = await this.httpService.get(
      CONSTANTES.apiUrl + CONSTANTES.empresas
    );
    console.log(empresas);
    return empresas;
  }
}
