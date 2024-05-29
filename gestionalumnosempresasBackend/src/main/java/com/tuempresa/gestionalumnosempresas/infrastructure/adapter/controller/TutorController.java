package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.controller;

import com.tuempresa.gestionalumnosempresas.application.port.in.TutorUseCase;
import com.tuempresa.gestionalumnosempresas.domain.model.Tutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tutores")
public class TutorController {

    @Autowired
    private TutorUseCase tutorUseCase;

    @GetMapping
    public List<Tutor> getAllTutores() {
        return tutorUseCase.getAllTutores();
    }

    @PostMapping
    public Tutor saveTutor(@RequestBody Tutor tutor) {
        return tutorUseCase.saveTutor(tutor);
    }

    @DeleteMapping("/{id}")
    public void deleteTutor(@PathVariable Long id) {
        tutorUseCase.deleteTutor(id);
    }
}
