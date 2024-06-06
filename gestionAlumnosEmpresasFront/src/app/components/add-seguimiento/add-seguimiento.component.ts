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
  empresa?: any;
  alumnos: any;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    // Aquí cargarías los alumnos y empresas mediante una llamada a la API
    const empresasList = await this.getAlumnos();
    empresasList.forEach((element: Alumno) => {
      this.alumnos.push(element);
    });

    this.route.queryParams.subscribe((params) => {
      const alumnoId = params['alumnoId'];
      if (alumnoId) {
        this.alumno = this.alumnos.find((a) => a.id === +alumnoId);
        if (this.alumno) {
          this.empresa = this.alumno.empresas.find(
            (e) => e.id === this.alumno!.empresa_id
          );
          this.seguimiento.alumno_id = this.alumno.id;
          this.seguimiento.tutor_id = this.empresa?.tutorLaboral
            ? this.getTutorIdByNombre(this.empresa.tutorLaboral)
            : undefined;
        }
      }
    });
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

  getTutorIdByNombre(nombre: string): number | undefined {
    const tutoresLaborales = [
      {
        id: 1,
        nombre: 'Carlos López',
        dniResponsable: '12345678A',
        tipo: 'empresa',
      },
      {
        id: 2,
        nombre: 'María Sánchez',
        dniResponsable: '87654321B',
        tipo: 'empresa',
      },
    ];
    const tutor = tutoresLaborales.find((t) => t.nombre === nombre);
    return tutor ? tutor.id : undefined;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.seguimiento.archivo_pdf = file;
    }
  }

  onSubmit() {
    // Aquí añadirías la lógica para guardar el seguimiento, por ejemplo, llamar a un servicio de API
    const formData = new FormData();
    formData.append('alumno_id', this.seguimiento.alumno_id!.toString());
    formData.append('tutor_id', this.seguimiento.tutor_id!.toString());
    formData.append(
      'fecha_seguimiento',
      this.seguimiento.fecha_seguimiento!.toISOString()
    );
    formData.append('informe_final', this.seguimiento.informe_final);
    if (this.seguimiento.archivo_pdf) {
      formData.append('archivo_pdf', this.seguimiento.archivo_pdf);
    }

    // Aquí deberías enviar formData a tu servicio de API
    console.log('Nuevo seguimiento:', formData);

    // Después de guardar, redirigir a otra página si es necesario
    this.router.navigate(['/seguimientos']);
  }
}
