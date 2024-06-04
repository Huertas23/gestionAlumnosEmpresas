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
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getRazonSocial() {
		return razonSocial;
	}
	public void setRazonSocial(String razonSocial) {
		this.razonSocial = razonSocial;
	}
	public String getDomicilioSocial() {
		return domicilioSocial;
	}
	public void setDomicilioSocial(String domicilioSocial) {
		this.domicilioSocial = domicilioSocial;
	}
	public String getCif() {
		return cif;
	}
	public void setCif(String cif) {
		this.cif = cif;
	}
	public Date getFechaFirma() {
		return fechaFirma;
	}
	public void setFechaFirma(Date fechaFirma) {
		this.fechaFirma = fechaFirma;
	}
	public String getDireccionPracticas() {
		return direccionPracticas;
	}
	public void setDireccionPracticas(String direccionPracticas) {
		this.direccionPracticas = direccionPracticas;
	}
	public String getTutorLaboral() {
		return tutorLaboral;
	}
	public void setTutorLaboral(String tutorLaboral) {
		this.tutorLaboral = tutorLaboral;
	}
	public String getDniTutorLaboral() {
		return dniTutorLaboral;
	}
	public void setDniTutorLaboral(String dniTutorLaboral) {
		this.dniTutorLaboral = dniTutorLaboral;
	}
	public String getRepresentanteLegal() {
		return representanteLegal;
	}
	public void setRepresentanteLegal(String representanteLegal) {
		this.representanteLegal = representanteLegal;
	}
	public String getDniRepresentante() {
		return dniRepresentante;
	}
	public void setDniRepresentante(String dniRepresentante) {
		this.dniRepresentante = dniRepresentante;
	}

    // Getters y Setters
}
