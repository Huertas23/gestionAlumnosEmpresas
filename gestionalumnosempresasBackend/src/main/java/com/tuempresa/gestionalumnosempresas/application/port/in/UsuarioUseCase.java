package com.tuempresa.gestionalumnosempresas.application.port.in;

import com.tuempresa.gestionalumnosempresas.domain.model.Usuario;

public interface UsuarioUseCase {
    Usuario findByNombre(String nombre);
    boolean validateUsuario(String nombre, String password);
}
