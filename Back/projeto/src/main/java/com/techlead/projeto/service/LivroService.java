package com.techlead.projeto.service;

import com.techlead.projeto.model.Livro;
import com.techlead.projeto.repository.LivroRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LivroService {

    @Autowired
    private LivroRepository livroRepository;

    public Livro cadastrarLivro(Livro livro) {
        return livroRepository.save(livro);
    }

    public Livro editarLivro(Long id, Livro livro) {
        Livro livroExistente = livroRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Livro não encontrado"));

        livroExistente.setNome(livro.getNome());
        livroExistente.setAutor(livro.getAutor());
        livroExistente.setQuantidadeLivros(livro.getQuantidadeLivros());

        return livroRepository.save(livroExistente);
    }

    public void excluirLivro(Long id) {
        Livro livroExistente = livroRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Livro não encontrado"));

        livroRepository.delete(livroExistente);
    }

    public List<Livro> listarLivros() {
        return livroRepository.findAll();
    }

    public Livro buscarLivroPorId(Long id) {
        Optional<Livro> optionalLivro = livroRepository.findById(id);
        return optionalLivro.orElse(null);
    }
}