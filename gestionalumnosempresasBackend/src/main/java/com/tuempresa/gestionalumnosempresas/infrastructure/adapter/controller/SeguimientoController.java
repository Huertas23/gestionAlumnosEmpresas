package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tuempresa.gestionalumnosempresas.application.port.in.SeguimientoUseCase;
import com.tuempresa.gestionalumnosempresas.domain.model.Alumno;
import com.tuempresa.gestionalumnosempresas.domain.model.Empresa;
import com.tuempresa.gestionalumnosempresas.domain.model.Seguimiento;
import com.tuempresa.gestionalumnosempresas.domain.model.Tutor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/seguimientos")
public class SeguimientoController {
	
	ObjectMapper mapper = new ObjectMapper();
	  Map<String, Object> seguimientoMap;

    @Autowired
    private SeguimientoUseCase seguimientoUseCase;

    @GetMapping
    public List<Seguimiento> getAllSeguimientos() {
        return seguimientoUseCase.getAllSeguimientos();
    }

    @PostMapping
    public void saveSeguimiento(@RequestBody String seguimiento) throws JsonMappingException, JsonProcessingException, ParseException {
    	seguimientoMap = mapper.readValue(seguimiento, Map.class);
    	Seguimiento segui = mapperModel(seguimientoMap);
        seguimientoUseCase.saveSeguimiento(seguimiento);
    }

    @DeleteMapping("/{id}")
    public void deleteSeguimiento(@PathVariable Long id) {
        seguimientoUseCase.deleteSeguimiento(id);
    }
    
    private Seguimiento mapperModel(Map<String, Object> seguientoMap) {
   
        Seguimiento nuevo= new Seguimiento();
        nuevo.setAlumno(Long.parseLong(seguientoMap.get("id").toString()))
        nuevo.setAlumno(Long.parseLong(seguientoMap.get("id").toString()));

        return alumnoObj;
    }
}
