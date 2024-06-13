package com.tuempresa.gestionalumnosempresas.infrastructure.adapter.controller;

import com.tuempresa.gestionalumnosempresas.application.port.in.UsuarioUseCase;
import com.tuempresa.gestionalumnosempresas.domain.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class UsuarioController {

    @Autowired
    private UsuarioUseCase usuarioUseCase;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> credentials) {
        String nombre = credentials.get("nombre");
        String password = credentials.get("password");

        if (nombre == null || password == null) {
            return ResponseEntity.badRequest().body("Nombre y password son requeridos");
        }

        Usuario usuario = usuarioUseCase.findByNombre(nombre);

        if (usuario != null && usuario.getPassword().equals(password)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
