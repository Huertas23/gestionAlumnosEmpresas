package com.tuempresa.gestionalumnosempresas.application.service;

import com.tuempresa.gestionalumnosempresas.application.port.in.TutorUseCase;
import com.tuempresa.gestionalumnosempresas.application.port.out.TutorRepository;
import com.tuempresa.gestionalumnosempresas.domain.model.Tutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TutorService implements TutorUseCase {

    @Autowired
    private TutorRepository tutorRepository;

    @Override
    public List<Tutor> getAllTutores() {
        return tutorRepository.findAll();
    }

    @Override
    public Tutor saveTutor(Tutor tutor) {
        return tutorRepository.save(tutor);
    }

    @Override
    public void deleteTutor(Long id) {
        tutorRepository.deleteById(id);
    }
}
