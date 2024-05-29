package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.controller;

import com.tuempresa.gestionalumnosempresas.application.port.in.SeguimientoUseCase;
import com.tuempresa.gestionalumnosempresas.domain.model.Seguimiento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/seguimientos")
public class SeguimientoController {

    @Autowired
    private SeguimientoUseCase seguimientoUseCase;

    @GetMapping
    public List<Seguimiento> getAllSeguimientos() {
        return seguimientoUseCase.getAllSeguimientos();
    }

    @PostMapping
    public Seguimiento saveSeguimiento(@RequestBody Seguimiento seguimiento) {
        return seguimientoUseCase.saveSeguimiento(seguimiento);
    }

    @DeleteMapping("/{id}")
    public void deleteSeguimiento(@PathVariable Long id) {
        seguimientoUseCase.deleteSeguimiento(id);
    }
}
