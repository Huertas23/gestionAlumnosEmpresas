import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../../models/empresa.model';
import { HttpService } from 'src/app/services/httpService';
import { CONSTANTES } from 'src/app/config/Constants';

@Component({
  selector: 'app-add-empresa',
  templateUrl: './add-empresa.component.html',
  styleUrls: ['./add-empresa.component.css'],
})
export class AddEmpresaComponent {
  empresa: Empresa = {
    razon_social: '',
    domicilio_social: '',
    cif: '',
    fecha_firma: undefined,
    direccion_practicas: '',
    tutor_laboral: '',
    dni_tutor_laboral: '',
    representante_legal: '',
    dni_representante: '',
  };

  constructor(private router: Router, private httpService: HttpService) {}

  onSubmit() {
    // Lógica para guardar la empresa
    this.httpService.post(
      CONSTANTES.apiUrl + CONSTANTES.empresas,
      this.empresa
    );
    this.router.navigate(['/empresas']);
  }
}
