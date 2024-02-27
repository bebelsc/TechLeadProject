package com.techlead.projeto.service;

import com.techlead.projeto.model.Emprestimo;
import com.techlead.projeto.model.Livro;
import com.techlead.projeto.model.StatusEmprestimo;
import com.techlead.projeto.repository.EmprestimoRepository;
import com.techlead.projeto.repository.LivroRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class EmprestimoServiceTeste {

    @Mock
    private EmprestimoRepository emprestimoRepository;

    @Mock
    private LivroRepository livroRepository;

    @InjectMocks
    private EmprestimoService emprestimoService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCriarEmprestimo() throws Exception {
        Livro livro = new Livro();
        livro.setQuantidadeLivros(2);

        Emprestimo emprestimo = new Emprestimo();
        emprestimo.setLivro(livro);

        when(livroRepository.findById(1L)).thenReturn(Optional.of(livro));
        when(livroRepository.save(any(Livro.class))).thenReturn(livro);
        when(emprestimoRepository.save(any(Emprestimo.class))).thenReturn(emprestimo);

        Emprestimo result = emprestimoService.criarEmprestimo(emprestimo);

        assertEquals(StatusEmprestimo.Criado, result.getStatus());
        assertEquals(1, livro.getQuantidadeLivros());

        verify(livroRepository, times(1)).findById(1L);
        verify(livroRepository, times(1)).save(any(Livro.class));
        verify(emprestimoRepository, times(1)).save(any(Emprestimo.class));
    }

    @Test
    void testCriarEmprestimoLivroIndisponivel() {
        Livro livro = new Livro();
        livro.setQuantidadeLivros(0);

        Emprestimo emprestimo = new Emprestimo();
        emprestimo.setLivro(livro);

        when(livroRepository.findById(1L)).thenReturn(Optional.of(livro));

        assertThrows(Exception.class, () -> emprestimoService.criarEmprestimo(emprestimo));

        verify(livroRepository, times(1)).findById(1L);
        verify(livroRepository, never()).save(any(Livro.class));
        verify(emprestimoRepository, never()).save(any(Emprestimo.class));
    }

    @Test
    void testDevolverEmprestimo() throws Exception {
        Emprestimo emprestimo = new Emprestimo();
        emprestimo.setStatus(StatusEmprestimo.Aceito);

        Livro livro = new Livro();
        livro.setQuantidadeLivros(1);

        emprestimo.setLivro(livro);

        when(emprestimoRepository.findById(1L)).thenReturn(Optional.of(emprestimo));
        when(livroRepository.save(any(Livro.class))).thenReturn(livro);
        when(emprestimoRepository.save(any(Emprestimo.class))).thenReturn(emprestimo);

        emprestimoService.devolverEmprestimo(1L);

        assertEquals(StatusEmprestimo.Devolvido, emprestimo.getStatus());
        assertEquals(2, livro.getQuantidadeLivros());

        verify(emprestimoRepository, times(1)).findById(1L);
        verify(livroRepository, times(1)).save(any(Livro.class));
        verify(emprestimoRepository, times(1)).save(any(Emprestimo.class));
    }

    @Test
    void testDevolverEmprestimoStatusDevolvido() {
        Emprestimo emprestimo = new Emprestimo();
        emprestimo.setStatus(StatusEmprestimo.Devolvido);

        when(emprestimoRepository.findById(1L)).thenReturn(Optional.of(emprestimo));

        assertThrows(Exception.class, () -> emprestimoService.devolverEmprestimo(1L));

        verify(emprestimoRepository, times(1)).findById(1L);
        verify(livroRepository, never()).save(any(Livro.class));
        verify(emprestimoRepository, never()).save(any(Emprestimo.class));
    }

    @Test
    void testAprovarRejeitarEmprestimoAprovar() {
        Emprestimo emprestimo = new Emprestimo();

        emprestimoService.aprovarRejeitarEmprestimo(1L, true);

        assertEquals(StatusEmprestimo.Aceito, emprestimo.getStatus());
        assertNotNull(emprestimo.getDataInicioEmprestimo());
    }

    @Test
    void testAprovarRejeitarEmprestimoRejeitar() {
        Emprestimo emprestimo = new Emprestimo();

        emprestimoService.aprovarRejeitarEmprestimo(1L, false);

        assertEquals(StatusEmprestimo.Recusado, emprestimo.getStatus());
        assertNull(emprestimo.getDataInicioEmprestimo());
    }

    @Test
    void testVerificarEmprestimosAtrasados() {
        Emprestimo emprestimo1 = new Emprestimo();
        emprestimo1.setStatus(StatusEmprestimo.Criado);
        emprestimo1.setDataInicioEmprestimo(Date.valueOf("2022-02-20"));
        emprestimo1.setQuantidadeDias(5L);

        Emprestimo emprestimo2 = new Emprestimo();
        emprestimo2.setStatus(StatusEmprestimo.Criado);
        emprestimo2.setDataInicioEmprestimo(Date.valueOf("2022-02-15"));
        emprestimo2.setQuantidadeDias(5L);

        List<Emprestimo> emprestimos = new ArrayList<>();
        emprestimos.add(emprestimo1);
        emprestimos.add(emprestimo2);

        when(emprestimoRepository.findAll()).thenReturn(emprestimos);

        emprestimoService.verificarEmprestimosAtrasados();

        assertEquals(StatusEmprestimo.Atraso, emprestimo1.getStatus());
        assertEquals(StatusEmprestimo.Atraso, emprestimo2.getStatus());

        verify(emprestimoRepository, times(1)).save(emprestimo1);
        verify(emprestimoRepository, times(1)).save(emprestimo2);
    }

    @Test
    void testBuscarEmprestimoPorId() {
        Emprestimo emprestimo = new Emprestimo();

        when(emprestimoRepository.findById(1L)).thenReturn(Optional.of(emprestimo));

        Emprestimo result = emprestimoService.buscarEmprestimoPorId(1L);

        assertNotNull(result);
        assertEquals(1L, result.getIdEmprestimo());

        verify(emprestimoRepository, times(1)).findById(1L);
    }

    @Test
    void testBuscarEmprestimoPorIdNaoEncontrado() {
        when(emprestimoRepository.findById(1L)).thenReturn(Optional.empty());

        Emprestimo result = emprestimoService.buscarEmprestimoPorId(1L);

        assertNull(result);

        verify(emprestimoRepository, times(1)).findById(1L);
    }
}

