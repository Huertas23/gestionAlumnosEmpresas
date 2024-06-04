package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tuempresa.gestionalumnosempresas.application.port.in.TutorUseCase;
import com.tuempresa.gestionalumnosempresas.domain.model.Empresa;
import com.tuempresa.gestionalumnosempresas.domain.model.Tutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tutores")
public class TutorController {

	
	ObjectMapper mapper = new ObjectMapper();
	  Map<String, Object> tutoresMap;
	  
    @Autowired
    private TutorUseCase tutorUseCase;

    @GetMapping
    public List<Tutor> getAllTutores() {
        return tutorUseCase.getAllTutores();
    }

    @PostMapping
    public void saveTutor(@RequestBody String tutor) throws JsonMappingException, JsonProcessingException, ParseException {
    	tutoresMap = mapper.readValue(tutor, Map.class);
    	Tutor tut = mapperModel(tutoresMap);
        tutorUseCase.saveTutor(tut);
    }

    @DeleteMapping("/{id}")
    public void deleteTutor(@PathVariable Long id) {
        tutorUseCase.deleteTutor(id);
    }
    
    public Tutor mapperModel( Map<String, Object> tutoresMap ) throws ParseException {
    	  // Crear el objeto Alumno con los datos convertidos
    	  Tutor tutorObj = new Tutor();
    	  tutorObj.setNombre((String) tutoresMap.get("nombre"));
    	  tutorObj.setDniResponsable((String) tutoresMap.get("dni"));
    	  tutorObj.setCurso((String) tutoresMap.get("domicilioSocial"));
    	  return tutorObj;
    }
}
