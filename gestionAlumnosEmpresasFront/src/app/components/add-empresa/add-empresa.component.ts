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
    razonSocial: '',
    domicilioSocial: '',
    cif: '',
    fechaFirma: undefined,
    direccionPracticas: '',
    tutorLaboral: '',
    dniTutorLaboral: '',
    representanteLegal: '',
    dniRepresentante: '',
  };

  constructor(private router: Router, private httpService: HttpService) {}

  async onSubmit() {
    if (!this.validateDni(this.empresa.dniTutorLaboral)) {
      alert('DNI tutor no válido');
      return;
    }
    if (!this.validateDni(this.empresa.dniRepresentante)) {
      alert('DNI representante no válido');
      return;
    }

    if (!this.validateCif(this.empresa.cif)) {
      alert('CIF no válido');
      return;
    }
    // Guardar la empresa
    this.httpService.post(
      CONSTANTES.apiUrl + CONSTANTES.empresas,
      this.empresa
    );
    this.router.navigate(['/empresas']);
  }
  validateDni(dni: string): boolean {
    const patronDni = /^[XYZ]?\d{5,8}[A-Z]$/;
    if (!patronDni.test(dni)) return false;

    const dniLetras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let number = dni.substring(0, dni.length - 1).toUpperCase();
    number = number.replace('X', '0').replace('Y', '1').replace('Z', '2');

    const numero = parseInt(number, 10);
    const letra = dni[dni.length - 1].toUpperCase();
    return dniLetras[numero % 23] === letra;
  }

  validateCif(cif: string): boolean {
    const patronCif = /^[ABCDEFGHJKLMNPQRSUVW]\d{7}[0-9A-J]$/;
    if (!patronCif.test(cif)) return false;

    const control = cif[cif.length - 1];
    const digits = cif.slice(1, -1);
    const letras = 'JABCDEFGHI';
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
      let n = parseInt(digits[i], 10);
      if (i % 2 === 0) {
        n *= 2;
        if (n > 9) n -= 9;
      }
      sum += n;
    }

    const digitoControl = (10 - (sum % 10)) % 10;
    const letra = letras[digitoControl];

    if (/[ABEH]/.test(cif[0])) {
      return control === digitoControl.toString();
    }
    if (/[KPQS]/.test(cif[0])) {
      return control === letra;
    }
    return control === digitoControl.toString() || control === letra;
  }
}
