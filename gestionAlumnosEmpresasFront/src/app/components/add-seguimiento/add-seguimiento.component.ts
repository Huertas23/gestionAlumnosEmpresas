import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seguimiento } from '../../models/seguimiento.model';
import { Alumno } from '../../models/alumno.model';
import { Empresa } from '../../models/empresa.model';

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
  alumno?: Alumno;
  empresa?: Empresa;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Aquí cargarías los alumnos y empresas mediante una llamada a la API
    const alumnos: Alumno[] = [
      {
        id: 1,
        nombre: 'Juan',
        apellido: 'Perez',
        dni: '12345678A',
        centroPracticas: 'Tech Solutions',
        empresa_id: 1,
        tutorCentroId: 1,
      },
      {
        id: 2,
        nombre: 'Ana',
        apellido: 'Gomez',
        dni: '87654321B',
        centroPracticas: 'Innovative Startups',
        empresa_id: 2,
        tutorCentroId: 2,
      },
    ];
    const empresas: Empresa[] = [
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

    this.route.queryParams.subscribe((params) => {
      const alumnoId = params['alumnoId'];
      if (alumnoId) {
        this.alumno = alumnos.find((a) => a.id === +alumnoId);
        if (this.alumno) {
          this.empresa = empresas.find((e) => e.id === this.alumno!.empresa_id);
          this.seguimiento.alumno_id = this.alumno.id;
          this.seguimiento.tutor_id = this.empresa?.tutorLaboral
            ? this.getTutorIdByNombre(this.empresa.tutorLaboral)
            : undefined;
        }
      }
    });
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
