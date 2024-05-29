package com.tuempresa.gestionalumnosempresas.application.port.in;

import com.tuempresa.gestionalumnosempresas.domain.model.Seguimiento;

import java.util.List;

public interface SeguimientoUseCase {
    List<Seguimiento> getAllSeguimientos();
    Seguimiento saveSeguimiento(Seguimiento seguimiento);
    void deleteSeguimiento(Long id);
}
