package com.tuempresa.gestionalumnosempresas.application.port.out;

import com.tuempresa.gestionalumnosempresas.domain.model.Seguimiento;
import java.util.List;

public interface SeguimientoRepository {
    List<Seguimiento> findAll();
    Seguimiento save(Seguimiento seguimiento);
    void deleteById(Long id);
}
