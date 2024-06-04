export interface Alumno {
  id?: number;
  nombre: string;
  apellido: string;
  dni: string;
  centroPracticas: string;
  empresa_id?: number;
  tutorCentroId?: number;
}
