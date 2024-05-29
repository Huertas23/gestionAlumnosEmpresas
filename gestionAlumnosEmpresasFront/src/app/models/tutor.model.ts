export interface Tutor {
  id?: number;
  nombre: string;
  curso?: string;  // Solo aplica a tutores del centro
  dni_responsable: string;
  tipo?: 'centro' | 'empresa';
}
