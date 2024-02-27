package com.techlead.projeto.controller;

import com.techlead.projeto.model.Emprestimo;
import com.techlead.projeto.service.EmprestimoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class EmprestimoControllerTeste {

    @Mock
    private EmprestimoService emprestimoService;

    @InjectMocks
    private EmprestimoController emprestimoController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testCriarEmprestimo() throws Exception {
        Emprestimo emprestimo = new Emprestimo();
        when(emprestimoService.criarEmprestimo(emprestimo)).thenReturn(emprestimo);

        ResponseEntity<Emprestimo> response = emprestimoController.criarEmprestimo(emprestimo);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(emprestimo, response.getBody());
    }

    @Test
    void testDevolverEmprestimo() throws Exception {
        Long idEmprestimo = 1L;
        ResponseEntity<String> response = emprestimoController.devolverEmprestimo(idEmprestimo);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Empréstimo devolvido com sucesso.", response.getBody());
        verify(emprestimoService, times(1)).devolverEmprestimo(idEmprestimo);
    }

    @Test
    void testAprovarRejeitarEmprestimoAprovar() {
        Long idEmprestimo = 1L;
        ResponseEntity<String> response = emprestimoController.aprovarRejeitarEmprestimo(idEmprestimo, true);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Empréstimo Aprovado com sucesso.", response.getBody());
        verify(emprestimoService, times(1)).aprovarRejeitarEmprestimo(idEmprestimo, true);
    }

    @Test
    void testAprovarRejeitarEmprestimoRejeitar() {
        Long idEmprestimo = 1L;
        ResponseEntity<String> response = emprestimoController.aprovarRejeitarEmprestimo(idEmprestimo, false);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Empréstimo Rejeitado com sucesso.", response.getBody());
        verify(emprestimoService, times(1)).aprovarRejeitarEmprestimo(idEmprestimo, false);
    }

    @Test
    void testVerificarEmprestimosAtrasados() {
        ResponseEntity<String> response = emprestimoController.verificarEmprestimosAtrasados();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Verificação de empréstimos atrasados concluída.", response.getBody());
        verify(emprestimoService, times(1)).verificarEmprestimosAtrasados();
    }

    @Test
    void testBuscarEmprestimoPorIdFound() {
        Long idEmprestimo = 1L;
        Emprestimo emprestimo = new Emprestimo();
        when(emprestimoService.buscarEmprestimoPorId(idEmprestimo)).thenReturn(emprestimo);

        ResponseEntity<Emprestimo> response = emprestimoController.buscarEmprestimoPorId(idEmprestimo);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(emprestimo, response.getBody());
    }

    @Test
    void testBuscarEmprestimoPorIdNotFound() {
        Long idEmprestimo = 1L;
        when(emprestimoService.buscarEmprestimoPorId(idEmprestimo)).thenReturn(null);

        ResponseEntity<Emprestimo> response = emprestimoController.buscarEmprestimoPorId(idEmprestimo);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals(null, response.getBody());
    }
}

