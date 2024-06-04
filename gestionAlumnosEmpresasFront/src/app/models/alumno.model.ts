export interface Alumno {
  id?: number;
  nombre: string;
  apellido: string;
  dni: string;
  centroPracticas: string;
  empresa_id?: number;
  tutor_centro_id?: number;
}
