package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.controller;

import com.tuempresa.gestionalumnosempresas.application.port.in.AlumnoUseCase;
import com.tuempresa.gestionalumnosempresas.domain.model.Alumno;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alumnos")
public class AlumnoController {

    @Autowired
    private AlumnoUseCase alumnoUseCase;

    @GetMapping
    public List<Alumno> getAllAlumnos() {
        return alumnoUseCase.getAllAlumnos();
    }

    @PostMapping
    public Alumno saveAlumno(@RequestBody Alumno alumno) {
        return alumnoUseCase.saveAlumno(alumno);
    }

    @DeleteMapping("/{id}")
    public void deleteAlumno(@PathVariable Long id) {
        alumnoUseCase.deleteAlumno(id);
    }
}

