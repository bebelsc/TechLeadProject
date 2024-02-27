package com.techlead.projeto.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.techlead.projeto.model.Livro;
import com.techlead.projeto.service.LivroService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.sql.Date;
import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class LivroControllerTeste {

    @Mock
    private LivroService livroService;

    @InjectMocks
    private LivroController livroController;

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCadastrarLivro() throws Exception {
        Livro livro = new Livro();
        livro.setNome("Livro Teste");
        livro.setAutor("Autor Teste");
        livro.setDataCadastro(Date.valueOf("2022-02-23"));
        livro.setQuantidadeLivros(10);

        when(livroService.cadastrarLivro(any(Livro.class))).thenReturn(livro);

        mockMvc.perform(MockMvcRequestBuilders.post("/api/livro/cadastrar")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(livro)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.idLivro").value(1L))
                .andExpect(jsonPath("$.nome").value("Livro Teste"))
                .andExpect(jsonPath("$.autor").value("Autor Teste"))
                .andExpect(jsonPath("$.dataCadastro").value("2022-02-23"))
                .andExpect(jsonPath("$.quantidadeLivros").value(10));

        verify(livroService, times(1)).cadastrarLivro(any(Livro.class));
    }

    @Test
    public void testListarLivros() throws Exception {
        Livro livro1 = new Livro();
        livro1.setNome("Livro 1");
        livro1.setAutor("Autor 1");
        livro1.setDataCadastro(Date.valueOf("2022-02-23"));
        livro1.setQuantidadeLivros(5);

        Livro livro2 = new Livro();
        livro2.setNome("Livro 2");
        livro2.setAutor("Autor 2");
        livro2.setDataCadastro(Date.valueOf("2022-02-24"));
        livro2.setQuantidadeLivros(8);

        List<Livro> livros = Arrays.asList(livro1, livro2);

        when(livroService.listarLivros()).thenReturn(livros);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/livro/listar"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].idLivro").value(1L))
                .andExpect(jsonPath("$[0].nome").value("Livro 1"))
                .andExpect(jsonPath("$[0].autor").value("Autor 1"))
                .andExpect(jsonPath("$[0].dataCadastro").value("2024-02-23"))
                .andExpect(jsonPath("$[0].quantidadeLivros").value(5))
                .andExpect(jsonPath("$[1].idLivro").value(2L))
                .andExpect(jsonPath("$[1].nome").value("Livro 2"))
                .andExpect(jsonPath("$[1].autor").value("Autor 2"))
                .andExpect(jsonPath("$[1].dataCadastro").value("2022-02-24"))
                .andExpect(jsonPath("$[1].quantidadeLivros").value(8));

        verify(livroService, times(1)).listarLivros();
    }

    private static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
