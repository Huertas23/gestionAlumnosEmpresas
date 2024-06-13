package com.tuempresa.gestionalumnosempresas.application.service;

import com.tuempresa.gestionalumnosempresas.application.port.in.UsuarioUseCase;
import com.tuempresa.gestionalumnosempresas.application.port.out.UsuarioRepository;
import com.tuempresa.gestionalumnosempresas.domain.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements UsuarioUseCase {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Usuario findByNombre(String nombre) {
        return usuarioRepository.findByNombre(nombre);
    }

    public boolean validateUsuario(String nombre, String password) {
        Usuario usuario = findByNombre(nombre);
        return usuario != null && usuario.getPassword().equals(password);
    }

}
