package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tuempresa.gestionalumnosempresas.application.port.in.TutorUseCase;
import com.tuempresa.gestionalumnosempresas.domain.model.Tutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/tutores")
public class TutorController {

    ObjectMapper mapper = new ObjectMapper();
    Map<String, Object> tutorMap;

    @Autowired
    private TutorUseCase tutorUseCase;

    @GetMapping
    public List<Tutor> getAllTutores() {
        return tutorUseCase.getAllTutores();
    }

    @PostMapping
    public void saveTutor(@RequestBody String tutor) throws JsonMappingException, JsonProcessingException, ParseException {
        tutorMap = mapper.readValue(tutor, Map.class);
        Tutor tut = mapperModel(tutorMap);
        tutorUseCase.saveTutor(tut);
    }

    @DeleteMapping("/{id}")
    public void deleteTutor(@PathVariable Long id) {
        tutorUseCase.deleteTutor(id);
    }

    public Tutor mapperModel(Map<String, Object> tutoresMap) throws ParseException {
        Tutor tutorObj = new Tutor();
        tutorObj.setCurso((String) tutoresMap.get("curso"));
        System.out.println("Hola"+tutoresMap.get("dniResponsable"));
        tutorObj.setDniResponsable((String) tutoresMap.get("dniResponsable"));
        tutorObj.setNombre((String) tutoresMap.get("nombre"));
        return tutorObj;
    }
}
