export interface Seguimiento {
  id?: number;
  alumno_id: number | undefined;
  tutor_id: number | undefined;
  fecha_seguimiento: Date | undefined;
  informe_final: string;
  archivo_pdf?: File; // Añadimos el campo para el archivo PDF
}
