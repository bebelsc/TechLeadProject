package com.techlead.projeto.service;

import com.techlead.projeto.model.Livro;
import com.techlead.projeto.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LivroService {

    @Autowired
    private LivroRepository livroRepository;

    public Livro cadastrarLivro(Livro livro) {
        // Lógica de validação, se necessário
        return livroRepository.save(livro);
    }

    public Livro editarLivro(Long id, Livro livro) {
        // Lógica de validação, se necessário
        Livro livroExistente = livroRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Livro não encontrado"));

        // Atualizar os campos necessários
        livroExistente.setNome(livro.getNome());
        livroExistente.setAutor(livro.getAutor());

        return livroRepository.save(livroExistente);
    }

    public void excluirLivro(Long id) {
        // Lógica de validação, se necessário
        Livro livroExistente = livroRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Livro não encontrado"));

        livroRepository.delete(livroExistente);
    }
}