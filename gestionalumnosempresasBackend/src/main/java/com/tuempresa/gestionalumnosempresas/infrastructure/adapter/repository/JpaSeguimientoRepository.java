package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.repository;

import com.tuempresa.gestionalumnosempresas.application.port.out.SeguimientoRepository;
import com.tuempresa.gestionalumnosempresas.domain.model.Seguimiento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaSeguimientoRepository extends JpaRepository<Seguimiento, Long>, SeguimientoRepository {
}
