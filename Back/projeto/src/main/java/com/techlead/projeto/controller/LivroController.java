package com.techlead.projeto.controller;

import com.techlead.projeto.model.Livro;
import com.techlead.projeto.service.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/livro")
public class LivroController {

    @Autowired
    private LivroService livroService;

    @PostMapping("/cadastrar")
    public ResponseEntity<Livro> cadastrarLivro(@RequestBody Livro livro) {
        Livro novoLivro = livroService.cadastrarLivro(livro);
        return new ResponseEntity<>(novoLivro, HttpStatus.CREATED);
    }

    @PutMapping("/editar/{id}")
    public ResponseEntity<Livro> editarLivro(@PathVariable Long id, @RequestBody Livro livro) {
        Livro livroEditado = livroService.editarLivro(id, livro);
        return new ResponseEntity<>(livroEditado, HttpStatus.OK);
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity<Void> excluirLivro(@PathVariable Long id) {
        livroService.excluirLivro(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
