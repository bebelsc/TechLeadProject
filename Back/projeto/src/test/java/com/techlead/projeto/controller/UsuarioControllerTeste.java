package com.techlead.projeto.controller;

import com.techlead.projeto.model.LoginRequest;
import com.techlead.projeto.model.TipoUsuario;
import com.techlead.projeto.model.Usuario;
import com.techlead.projeto.service.UsuarioService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UsuarioControllerTeste {

    @Mock
    private UsuarioService usuarioService;

    @InjectMocks
    private UsuarioController usuarioController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testCriarUsuario() {
        Usuario usuario = new Usuario();
        when(usuarioService.criarUsuario(usuario)).thenReturn(usuario);

        ResponseEntity<Usuario> response = usuarioController.criarUsuario(usuario);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(usuario, response.getBody());
    }

    @Test
    void testLoginSuccess() {
        String email = "test@example.com";
        String senha = "password";
        LoginRequest loginRequest = new LoginRequest(email, senha);

        Usuario usuario = new Usuario();
        when(usuarioService.findByEmailAndSenha(email, senha)).thenReturn(Optional.of(usuario));

        ResponseEntity<Usuario> response = usuarioController.login(loginRequest);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(usuario, response.getBody());
    }

    @Test
    void testLoginUnauthorized() {
        String email = "test@example.com";
        String senha = "wrongpassword";
        LoginRequest loginRequest = new LoginRequest(email, senha);

        when(usuarioService.findByEmailAndSenha(email, senha)).thenReturn(Optional.empty());

        ResponseEntity<Usuario> response = usuarioController.login(loginRequest);

        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
        assertEquals(null, response.getBody());
    }

    @Test
    void testBuscarUsuarioPorIdFound() {
        Long idUsuario = 1L;
        Usuario usuario = new Usuario();
        when(usuarioService.buscarUsuarioPorId(idUsuario)).thenReturn(Optional.of(usuario));

        ResponseEntity<Usuario> response = usuarioController.buscarUsuarioPorId(idUsuario);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(usuario, response.getBody());
    }

    @Test
    void testBuscarUsuarioPorIdNotFound() {
        Long idUsuario = 1L;
        when(usuarioService.buscarUsuarioPorId(idUsuario)).thenReturn(Optional.empty());

        ResponseEntity<Usuario> response = usuarioController.buscarUsuarioPorId(idUsuario);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals(null, response.getBody());
    }
}

