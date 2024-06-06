import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Seguimiento } from '../../models/seguimiento.model';
import { Alumno } from '../../models/alumno.model';
import { Empresa } from '../../models/empresa.model';
import { CONSTANTES } from 'src/app/config/Constants';
import { HttpService } from 'src/app/services/httpService';

@Component({
  selector: 'app-add-seguimiento',
  templateUrl: './add-seguimiento.component.html',
  styleUrls: ['./add-seguimiento.component.css'],
})
export class AddSeguimientoComponent implements OnInit {
  seguimiento: Seguimiento = {
    alumno_id: undefined,
    tutor_id: undefined,
    fecha_seguimiento: undefined,
    informe_final: '',
  };
  alumno?: any;
  empresa?: any = [];
  alumnos: any = [];
  alumnoId: any;
  tutoresLaborales: any = [];

  constructor(
    private router: Router,
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.alumnoId = params['alumnoId'];
    });
  }

  async ngOnInit(): Promise<void> {
    // Aquí cargarías los alumnos y empresas mediante una llamada a la API
    const empresasList = await this.getAlumnos();
    empresasList.forEach((element: Alumno) => {
      this.alumnos.push(element);
    });

    if (this.alumnoId) {
      this.alumno = this.alumnos.find((a: any) => {
        console.log(a.id == this.alumnoId);
        if (a.id == this.alumnoId) {
          return a;
        }
      });
      if (this.alumno) {
        this.empresa = this.alumno.empresa;
        this.seguimiento.alumno_id = this.alumno.id;
        this.seguimiento.tutor_id = this.empresa?.tutorLaboral;
      }
    }
  }

  async getAlumnos() {
    const alumnos = await this.httpService.get(
      CONSTANTES.apiUrl + CONSTANTES.alumnos
    );
    console.log(alumnos);
    return alumnos;
  }

  getEmpresaNombre(alumno: any | undefined): string {
    if (alumno === undefined) {
      return 'No asignada';
    }
    return alumno.empresa ? alumno.empresa.razonSocial : 'No asignada';
  }

  getTutorLaboral(alumno: any | undefined): string {
    if (alumno === undefined) {
      return 'No asignado';
    }
    return alumno.empresa ? alumno.empresa.tutorLaboral : 'No asignado';
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.seguimiento.archivo_pdf = file;
    }
  }

  async onSubmit() {
    // Aquí añadirías la lógica para guardar el seguimiento, por ejemplo, llamar a un servicio de API

    const fecha = this.seguimiento.fecha_seguimiento?.toString();
    const body = {
      alumno_id: this.alumnoId,
      tutor_id: this.alumno.empresa.id,
      fecha_seguimiento: fecha,
      informe_final: this.seguimiento.informe_final,
      archivo_pdf: this.seguimiento.archivo_pdf,
    };

    // Aquí deberías enviar formData a tu servicio de API
    console.log('Nuevo seguimiento:', body);
    const alumnos = await this.httpService.post(
      CONSTANTES.apiUrl + CONSTANTES.seguimientos,
      body
    );

    // Después de guardar, redirigir a otra página si es necesario
    this.router.navigate(['/seguimientos']);
  }
}
