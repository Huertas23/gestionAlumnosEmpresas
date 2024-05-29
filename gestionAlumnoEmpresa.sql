CREATE TABLE empresas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    razon_social VARCHAR(255) NOT NULL,
    domicilio_social VARCHAR(255),
    cif VARCHAR(50),
    fecha_firma DATE,
    direccion_practicas VARCHAR(255),
    tutor_laboral VARCHAR(255),
    dni_tutor_laboral VARCHAR(50),
    representante_legal VARCHAR(255),
    dni_representante VARCHAR(50)
);

CREATE TABLE alumnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    dni VARCHAR(50),
    centro_practicas VARCHAR(255),
    empresa_id INT,
    FOREIGN KEY (empresa_id) REFERENCES empresas(id)
);

ALTER TABLE alumnos ADD COLUMN tutor_centro_id INT;
ALTER TABLE alumnos ADD FOREIGN KEY (tutor_centro_id) REFERENCES tutores(id);



CREATE TABLE tutores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    curso VARCHAR(50),
    nombre VARCHAR(255) NOT NULL,
    dni_responsable VARCHAR(50)
);


CREATE TABLE seguimiento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    alumno_id INT,
    tutor_id INT,
    fecha_seguimiento DATE,
    informe_final TEXT,
    archivo_pdf VARCHAR(255),  -- Nueva columna para almacenar la ruta del archivo PDF
    FOREIGN KEY (alumno_id) REFERENCES alumnos(id),
    FOREIGN KEY (tutor_id) REFERENCES tutores(id)
);
