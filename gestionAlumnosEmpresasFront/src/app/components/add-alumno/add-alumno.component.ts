import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../../models/alumno.model';
import { Tutor } from '../../models/tutor.model';
import { Empresa } from '../../models/empresa.model';
import { HttpService } from '../../services/httpService';
import { CONSTANTES } from '../../config/Constants';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css'],
})
export class AddAlumnoComponent implements OnInit {
  alumno: Alumno = {
    nombre: '',
    apellido: '',
    dni: '',
    centroPracticas: '',
    empresa_id: undefined,
    tutorCentroId: undefined,
  };

  empresas: Empresa[] = [];
  tutoresCentro: Tutor[] = [];
  selectedEmpresa: Empresa | undefined;

  constructor(private router: Router, private httpService: HttpService) {}

  async ngOnInit(): Promise<void> {
    //Cargar las empresas desde la API
    this.empresas = await this.getEmpresas();

    //Cargar los tutores del centro
    this.tutoresCentro = await this.getTutores();
  }

  async onSubmit() {
      if (!this.validateDni(this.alumno.dni)) {
        alert('DNI no válido');
        return;
      }
    // Guardar el alumno
    console.log('Nuevo alumno:', this.alumno);
    await this.httpService.post(
      CONSTANTES.apiUrl + CONSTANTES.alumnos,
      this.alumno
    );
    this.router.navigate(['/alumnos']);
  }

  async getEmpresas() {
    //Cargar las empresas
    const empresas = await this.httpService.get(
      CONSTANTES.apiUrl + CONSTANTES.empresas
    );
    return empresas;
  }

  async getTutores() {
    //cargar los tutores
    const tutores = await this.httpService.get(
      CONSTANTES.apiUrl + CONSTANTES.tutores
    );
    return tutores;
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

  

  onEmpresaChange(event: any) {
    // Seleccionar la empresa para el alumno
    const empresaId = event.target.value;
    if (empresaId !== undefined) {
      this.selectedEmpresa = this.empresas.find((empresa) => empresa.id == empresaId);
      if (this.selectedEmpresa) {
        this.alumno.centroPracticas = this.selectedEmpresa.razonSocial;
      } else {
        this.alumno.centroPracticas = ''; // Establecer en vacío si no se encuentra la empresa
      }
    } else {
      this.selectedEmpresa = undefined;
      this.alumno.centroPracticas = ''; // Establecer en vacío si no se selecciona ninguna empresa
    }
  }
}

