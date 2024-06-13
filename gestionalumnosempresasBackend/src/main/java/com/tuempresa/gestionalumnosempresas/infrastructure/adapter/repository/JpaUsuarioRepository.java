package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tuempresa.gestionalumnosempresas.application.port.out.UsuarioRepository;
import com.tuempresa.gestionalumnosempresas.domain.model.Usuario;

public interface JpaUsuarioRepository extends JpaRepository<Usuario, Long>,UsuarioRepository {
}
