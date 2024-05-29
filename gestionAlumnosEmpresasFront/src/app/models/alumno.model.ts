export interface Alumno {
  id?: number;
  nombre: string;
  apellido: string;
  dni: string;
  centro_practicas: string;
  empresa_id?: number;
  tutor_centro_id?: number;
}
