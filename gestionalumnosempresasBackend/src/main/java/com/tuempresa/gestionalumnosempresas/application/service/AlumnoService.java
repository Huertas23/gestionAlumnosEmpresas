package com.tuempresa.gestionalumnosempresas.application.service;

import com.tuempresa.gestionalumnosempresas.application.port.in.AlumnoUseCase;
import com.tuempresa.gestionalumnosempresas.application.port.out.AlumnoRepository;
import com.tuempresa.gestionalumnosempresas.domain.model.Alumno;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlumnoService implements AlumnoUseCase {

    @Autowired
    private AlumnoRepository alumnoRepository;

    @Override
    public List<Alumno> getAllAlumnos() {
        return alumnoRepository.findAll();
    }

    @Override
    public Alumno saveAlumno(Alumno alumno) {
        return alumnoRepository.save(alumno);
    }

    @Override
    public void deleteAlumno(Long id) {
        alumnoRepository.deleteById(id);
    }
}
