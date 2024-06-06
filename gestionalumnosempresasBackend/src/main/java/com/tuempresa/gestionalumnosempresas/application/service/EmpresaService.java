package com.tuempresa.gestionalumnosempresas.application.service;

import com.tuempresa.gestionalumnosempresas.application.port.in.EmpresaUseCase;
import com.tuempresa.gestionalumnosempresas.application.port.out.EmpresaRepository;
import com.tuempresa.gestionalumnosempresas.domain.model.Empresa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpresaService implements EmpresaUseCase {

    @Autowired
    private EmpresaRepository empresaRepository;

    @Override
    public List<Empresa> getAllEmpresas() {
        return empresaRepository.findAll();
    }

    @Override
    public Empresa saveEmpresa(Empresa empresa) {
        return empresaRepository.save(empresa);
    }

    @Override
    public void deleteEmpresa(Long id) {
        empresaRepository.deleteById(id);
    }

	@Override
	public Empresa getEmpresaById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}
}
