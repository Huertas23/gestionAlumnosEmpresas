-- Crear tabla empresa
CREATE TABLE empresa (
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

-- Crear tabla tutor
CREATE TABLE tutor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    curso VARCHAR(50),
    nombre VARCHAR(255) NOT NULL,
    dni_responsable VARCHAR(50)
);

-- Crear tabla alumno
CREATE TABLE alumno (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    dni VARCHAR(50),
    centro_practicas VARCHAR(255),
    empresa_id INT,
    tutor_centro_id INT,
    FOREIGN KEY (tutor_centro_id) REFERENCES tutor(id)
);

CREATE TABLE seguimiento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    alumno_id INT,
    id_empresa INT,  -- Asegurar longitud coincide con empresa
    fecha_seguimiento DATE,
    informe_final TEXT,
    archivo_pdf VARCHAR(255)  -- Nueva columna para almacenar la ruta del archivo PDF
);

-- Agregar clave foránea para alumno_id
ALTER TABLE seguimiento
ADD CONSTRAINT fk_alumno
FOREIGN KEY (alumno_id) REFERENCES alumno(id);

-- Agregar clave foránea para dni_tutor_laboral
ALTER TABLE seguimiento
ADD CONSTRAINT fk_id_empresa
FOREIGN KEY (id_empresa) REFERENCES empresa(id);

-- Crear tabla usuario
CREATE TABLE usuario (
    nombre VARCHAR(50),
    password VARCHAR(50)
);

