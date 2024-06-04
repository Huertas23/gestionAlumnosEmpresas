package com.tuempresa.gestionalumnosempresas.domain.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Seguimiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "alumno_id")
    private Alumno alumno;

    @ManyToOne
    @JoinColumn(name = "tutor_id")
    private Tutor tutor;

    private Date fechaSeguimiento;
    private String informeFinal;
    private String archivoPdf;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Alumno getAlumno() {
		return alumno;
	}
	public void setAlumno(Alumno alumno) {
		this.alumno = alumno;
	}
	public Tutor getTutor() {
		return tutor;
	}
	public void setTutor(Tutor tutor) {
		this.tutor = tutor;
	}
	public Date getFechaSeguimiento() {
		return fechaSeguimiento;
	}
	public void setFechaSeguimiento(Date fechaSeguimiento) {
		this.fechaSeguimiento = fechaSeguimiento;
	}
	public String getInformeFinal() {
		return informeFinal;
	}
	public void setInformeFinal(String informeFinal) {
		this.informeFinal = informeFinal;
	}
	public String getArchivoPdf() {
		return archivoPdf;
	}
	public void setArchivoPdf(String archivoPdf) {
		this.archivoPdf = archivoPdf;
	}

    // Getters y Setters
}
