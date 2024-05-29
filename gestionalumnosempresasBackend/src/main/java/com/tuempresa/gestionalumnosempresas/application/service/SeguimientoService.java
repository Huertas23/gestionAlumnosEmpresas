package com.tuempresa.gestionalumnosempresas.application.service;

import com.tuempresa.gestionalumnosempresas.application.port.in.SeguimientoUseCase;
import com.tuempresa.gestionalumnosempresas.application.port.out.SeguimientoRepository;
import com.tuempresa.gestionalumnosempresas.domain.model.Seguimiento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeguimientoService implements SeguimientoUseCase {

    @Autowired
    private SeguimientoRepository seguimientoRepository;

    @Override
    public List<Seguimiento> getAllSeguimientos() {
        return seguimientoRepository.findAll();
    }

    @Override
    public Seguimiento saveSeguimiento(Seguimiento seguimiento) {
        return seguimientoRepository.save(seguimiento);
    }

    @Override
    public void deleteSeguimiento(Long id) {
        seguimientoRepository.deleteById(id);
    }
}
