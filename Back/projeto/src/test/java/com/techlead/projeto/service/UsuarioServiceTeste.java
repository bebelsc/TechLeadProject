package com.techlead.projeto.service;

import com.techlead.projeto.model.Usuario;
import com.techlead.projeto.repository.UsuarioRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UsuarioServiceTest {

    @Mock
    private UsuarioRepository usuarioRepository;

    @InjectMocks
    private UsuarioService usuarioService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCriarUsuario() {
        Usuario usuario = new Usuario();

        when(usuarioRepository.save(any(Usuario.class))).thenReturn(usuario);

        Usuario result = usuarioService.criarUsuario(usuario);

        assertNotNull(result);
        assertEquals(1L, result.getIdUsuario());

        verify(usuarioRepository, times(1)).save(any(Usuario.class));
    }

    @Test
    void testFindByEmailAndSenha() {
        String email = "test@example.com";
        String senha = "password";

        Usuario usuario = new Usuario();
        usuario.setEmail(email);
        usuario.setSenha(senha);

        when(usuarioRepository.findByEmailAndSenha(email, senha)).thenReturn(Optional.of(usuario));

        Optional<Usuario> result = usuarioService.findByEmailAndSenha(email, senha);

        assertTrue(result.isPresent());
        assertEquals(1L, result.get().getIdUsuario());
        assertEquals(email, result.get().getEmail());
        assertEquals(senha, result.get().getSenha());

        verify(usuarioRepository, times(1)).findByEmailAndSenha(email, senha);
    }

    @Test
    void testFindByEmailAndSenhaUsuarioNaoEncontrado() {
        String email = "test@example.com";
        String senha = "password";

        when(usuarioRepository.findByEmailAndSenha(email, senha)).thenReturn(Optional.empty());

        Optional<Usuario> result = usuarioService.findByEmailAndSenha(email, senha);

        assertFalse(result.isPresent());

        verify(usuarioRepository, times(1)).findByEmailAndSenha(email, senha);
    }

    @Test
    void testBuscarUsuarioPorId() {
        Long userId = 1L;

        Usuario usuario = new Usuario();

        when(usuarioRepository.findById(userId)).thenReturn(Optional.of(usuario));

        Optional<Usuario> result = usuarioService.buscarUsuarioPorId(userId);

        assertTrue(result.isPresent());
        assertEquals(userId, result.get().getIdUsuario());

        verify(usuarioRepository, times(1)).findById(userId);
    }

    @Test
    void testBuscarUsuarioPorIdNaoEncontrado() {
        Long userId = 1L;

        when(usuarioRepository.findById(userId)).thenReturn(Optional.empty());

        Optional<Usuario> result = usuarioService.buscarUsuarioPorId(userId);

        assertFalse(result.isPresent());

        verify(usuarioRepository, times(1)).findById(userId);
    }
}

