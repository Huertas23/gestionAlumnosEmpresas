package com.tuempresa.gestionalumnosempresas.application.port.in;

import com.tuempresa.gestionalumnosempresas.domain.model.Tutor;

import java.util.List;

public interface TutorUseCase {
    List<Tutor> getAllTutores();
    Tutor saveTutor(Tutor tutor);
    void deleteTutor(Long id);
}
