package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.controller;

import com.fasterxml.jackson.databind.JsonMappingException;
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

    @Autowired
    private AlumnoUseCase alumnoUseCase;

    @GetMapping
    public List<Alumno> getAllAlumnos() {
        return alumnoUseCase.getAllAlumnos();
    }

    @PostMapping
    public ResponseEntity<?> saveAlumno(@RequestBody Map<String, Object> alumnoMap) {
        try {
            Alumno alum = mapperModel(alumnoMap);
            alumnoUseCase.saveAlumno(alum);
            return ResponseEntity.ok("Alumno guardado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error guardando el alumno: " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public void deleteAlumno(@PathVariable Long id) {
        alumnoUseCase.deleteAlumno(id);
    }

    private Alumno mapperModel(Map<String, Object> alumnoMap) {
        Long empresaId = Long.valueOf(alumnoMap.get("empresa_id").toString());
        Long tutorCentroId = Long.valueOf(alumnoMap.get("tutorCentroId").toString());
        Alumno alumnoObj = new Alumno();
        alumnoObj.setNombre(alumnoMap.get("nombre").toString());
        alumnoObj.setApellido(alumnoMap.get("apellido").toString());
        alumnoObj.setDni(alumnoMap.get("dni").toString());
        alumnoObj.setCentroPracticas(alumnoMap.get("centroPracticas").toString());
        Empresa empresa = new Empresa();
        empresa.setId(empresaId);
        alumnoObj.setEmpresa(empresa);
        Tutor tutorCentro = new Tutor();
        tutorCentro.setId(tutorCentroId);
        alumnoObj.setTutorCentro(tutorCentro);

        return alumnoObj;
    }
}


