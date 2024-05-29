package com.tuempresa.gestionalumnosempresas.application.port.in;

import com.tuempresa.gestionalumnosempresas.domain.model.Alumno;

import java.util.List;

public interface AlumnoUseCase {
    List<Alumno> getAllAlumnos();
    Alumno saveAlumno(Alumno alumno);
    void deleteAlumno(Long id);
}
