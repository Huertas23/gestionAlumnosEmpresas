package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.controller;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tuempresa.gestionalumnosempresas.application.port.in.AlumnoUseCase;
import com.tuempresa.gestionalumnosempresas.domain.model.Alumno;
import com.tuempresa.gestionalumnosempresas.domain.model.Empresa;
import com.tuempresa.gestionalumnosempresas.domain.model.Tutor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/alumnos")
public class AlumnoController {
	
	ObjectMapper mapper = new ObjectMapper();
	  Map<String, Object> alumnoMap;

    @Autowired
    private AlumnoUseCase alumnoUseCase;

    @GetMapping
    public List<Alumno> getAllAlumnos() {
        return alumnoUseCase.getAllAlumnos();
    }

    @PostMapping
    public void saveAlumno(@RequestBody String alumno) throws Exception {
        try {
			alumnoMap = mapper.readValue(alumno, Map.class);
			Alumno alum = mapperModel(alumnoMap);
			alumnoUseCase.saveAlumno(alum);
		} catch (JsonMappingException e) {
			throw new Exception(e.getMessage());    }
    }

    @DeleteMapping("/{id}")
    public void deleteAlumno(@PathVariable Long id) {
        alumnoUseCase.deleteAlumno(id);
    }
    
    public Alumno mapperModel( Map<String, Object> alumnoMap ) {
    	Long empresaId = Long.valueOf((String) alumnoMap.get("empresa_id"));
    	  Long tutorCentroId = Long.valueOf((String) alumnoMap.get("tutor_centro_id"));

    	  // Crear el objeto Alumno con los datos convertidos
    	  Alumno alumnoObj = new Alumno();
    	  alumnoObj.setNombre((String) alumnoMap.get("nombre"));
    	  alumnoObj.setApellido((String) alumnoMap.get("apellido"));
    	  alumnoObj.setDni((String) alumnoMap.get("dni"));
    	  alumnoObj.setCentroPracticas((String) alumnoMap.get("centroPracticas"));
    	  Empresa empresa = new Empresa(); // Buscar la empresa por id (logica adicional)
    	  empresa.setId(empresaId);
    	  alumnoObj.setEmpresa(empresa);
    	  Tutor tutorCentro = new Tutor(); // Buscar el tutor por id (logica adicional)
    	  tutorCentro.setId(tutorCentroId);
    	  alumnoObj.setTutorCentro(tutorCentro);
    	  return alumnoObj;
    }
}

