package com.tuempresa.gestionalumnosempresas.application.port.out;

import com.tuempresa.gestionalumnosempresas.domain.model.Tutor;
import java.util.List;

public interface TutorRepository {
    List<Tutor> findAll();
    Tutor save(Tutor tutor);
    void deleteById(Long id);
}
