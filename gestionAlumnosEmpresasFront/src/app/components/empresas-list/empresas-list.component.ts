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
  empresas: Empresa[] = [];

  constructor(private httpService: HttpService) {}

  async ngOnInit(): Promise<void> {
    // Cargar empresas
    const empresasList = await this.getEmpresas();
    empresasList.forEach((element: Empresa) => {
      this.empresas.push(element);
    });
  }

  async getEmpresas() {
    //Obtener empresas
    const empresas = await this.httpService.get(
      CONSTANTES.apiUrl + CONSTANTES.empresas
    );
    console.log(empresas);
    return empresas;
  }
}
