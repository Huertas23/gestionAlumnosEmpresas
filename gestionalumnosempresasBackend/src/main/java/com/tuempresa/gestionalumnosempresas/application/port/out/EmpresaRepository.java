package com.tuempresa.gestionalumnosempresas.application.port.out;

import com.tuempresa.gestionalumnosempresas.domain.model.Empresa;
import java.util.List;

public interface EmpresaRepository {
    List<Empresa> findAll();
    Empresa save(Empresa empresa);
    void deleteById(Long id);
}
