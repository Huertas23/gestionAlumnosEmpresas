package com.tuempresa.gestionalumnosempresas.application.port.out;

import com.tuempresa.gestionalumnosempresas.domain.model.Alumno;
import java.util.List;

public interface AlumnoRepository {
    List<Alumno> findAll();
    Alumno save(Alumno alumno);
    void deleteById(Long id);
}
