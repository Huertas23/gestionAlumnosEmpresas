package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.controller;

import com.tuempresa.gestionalumnosempresas.application.port.in.EmpresaUseCase;
import com.tuempresa.gestionalumnosempresas.domain.model.Empresa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/empresas")
public class EmpresaController {

    @Autowired
    private EmpresaUseCase empresaUseCase;

    @GetMapping
    public List<Empresa> getAllEmpresas() {
        return empresaUseCase.getAllEmpresas();
    }

    @PostMapping
    public Empresa saveEmpresa(@RequestBody Empresa empresa) {
        return empresaUseCase.saveEmpresa(empresa);
    }

    @DeleteMapping("/{id}")
    public void deleteEmpresa(@PathVariable Long id) {
        empresaUseCase.deleteEmpresa(id);
    }
}
