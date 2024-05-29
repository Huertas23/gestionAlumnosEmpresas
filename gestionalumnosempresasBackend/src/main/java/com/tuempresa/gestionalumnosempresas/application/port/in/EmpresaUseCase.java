package com.tuempresa.gestionalumnosempresas.application.port.in;

import com.tuempresa.gestionalumnosempresas.domain.model.Empresa;

import java.util.List;

public interface EmpresaUseCase {
    List<Empresa> getAllEmpresas();
    Empresa saveEmpresa(Empresa empresa);
    void deleteEmpresa(Long id);
}
