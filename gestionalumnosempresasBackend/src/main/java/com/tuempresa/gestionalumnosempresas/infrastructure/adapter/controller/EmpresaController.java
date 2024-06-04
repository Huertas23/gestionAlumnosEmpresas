package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tuempresa.gestionalumnosempresas.application.port.in.EmpresaUseCase;
import com.tuempresa.gestionalumnosempresas.domain.model.Alumno;
import com.tuempresa.gestionalumnosempresas.domain.model.Empresa;
import com.tuempresa.gestionalumnosempresas.domain.model.Tutor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/empresas")
public class EmpresaController {
	
	ObjectMapper mapper = new ObjectMapper();
	  Map<String, Object> empresaMap;

    @Autowired
    private EmpresaUseCase empresaUseCase;

    @GetMapping
    public List<Empresa> getAllEmpresas() {
        return empresaUseCase.getAllEmpresas();
    }

    @PostMapping
    public void saveEmpresa(@RequestBody String empresa) throws JsonMappingException, JsonProcessingException, ParseException {
    	empresaMap = mapper.readValue(empresa, Map.class);
    	Empresa emp = mapperModel(empresaMap);
      empresaUseCase.saveEmpresa(emp);
    }

    @DeleteMapping("/{id}")
    public void deleteEmpresa(@PathVariable Long id) {
        empresaUseCase.deleteEmpresa(id);
    }
    
    
    public Empresa mapperModel( Map<String, Object> empresaMap ) throws ParseException {
    	SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd"); // Specify the date format
    	  // Crear el objeto Alumno con los datos convertidos
    	  Empresa empresaObj = new Empresa();
    	  empresaObj.setCif((String) empresaMap.get("cif"));
    	  empresaObj.setRazonSocial((String) empresaMap.get("razon_social"));
    	  empresaObj.setDomicilioSocial((String) empresaMap.get("domicilio_social"));
    	  String fechaFirmaString = (String) empresaMap.get("fecha_firma");
    	  empresaObj.setFechaFirma(formatter.parse(fechaFirmaString));
    	  empresaObj.setDireccionPracticas((String) empresaMap.get("direccion_practicas"));
    	  empresaObj.setTutorLaboral((String) empresaMap.get("tutor_laboral"));
    	  empresaObj.setDniTutorLaboral((String) empresaMap.get("dni_tutor_laboral"));
    	  empresaObj.setRepresentanteLegal((String) empresaMap.get("representante_legal"));
     	  empresaObj.setDniRepresentante((String) empresaMap.get("dni_representante"));
    	  return empresaObj;
    }
}
