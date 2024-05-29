package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.repository;

import com.tuempresa.gestionalumnosempresas.application.port.out.AlumnoRepository;
import com.tuempresa.gestionalumnosempresas.domain.model.Alumno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaAlumnoRepository extends JpaRepository<Alumno, Long>, AlumnoRepository {
}
