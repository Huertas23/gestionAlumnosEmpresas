package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.repository;

import com.tuempresa.gestionalumnosempresas.application.port.out.EmpresaRepository;
import com.tuempresa.gestionalumnosempresas.domain.model.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaEmpresaRepository extends JpaRepository<Empresa, Long>, EmpresaRepository {
}
