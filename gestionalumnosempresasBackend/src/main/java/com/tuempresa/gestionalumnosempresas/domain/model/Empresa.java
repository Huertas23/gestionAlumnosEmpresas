package com.tuempresa.gestionalumnosempresas.domain.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Empresa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String razonSocial;
    private String domicilioSocial;
    private String cif;
    private Date fechaFirma;
    private String direccionPracticas;
    private String tutorLaboral;
    private String dniTutorLaboral;
    private String representanteLegal;
    private String dniRepresentante;

    // Getters y Setters
}
