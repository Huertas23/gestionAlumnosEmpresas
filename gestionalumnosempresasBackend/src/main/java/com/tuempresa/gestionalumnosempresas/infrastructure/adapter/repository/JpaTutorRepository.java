package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.repository;

import com.tuempresa.gestionalumnosempresas.application.port.out.TutorRepository;
import com.tuempresa.gestionalumnosempresas.domain.model.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaTutorRepository extends JpaRepository<Tutor, Long>, TutorRepository {
}
