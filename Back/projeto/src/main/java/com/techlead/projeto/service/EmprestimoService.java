package com.techlead.projeto.service;

import com.techlead.projeto.model.Emprestimo;
import com.techlead.projeto.model.Livro;
import com.techlead.projeto.model.StatusEmprestimo;
import com.techlead.projeto.repository.EmprestimoRepository;
import com.techlead.projeto.repository.LivroRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class EmprestimoService {

    private final EmprestimoRepository emprestimoRepository;
    @Autowired
    private LivroService livroService;
    @Autowired
    private LivroRepository livroRepository;

    @Autowired
    public EmprestimoService(EmprestimoRepository emprestimoRepository) {
        this.emprestimoRepository = emprestimoRepository;
    }

    public Emprestimo criarEmprestimo(Emprestimo emprestimo) throws Exception {
    Livro livro = livroService.buscarLivroPorId(emprestimo.getLivro().getIdLivro());
    if (livro.getQuantidadeLivros() > 0) {
        livro.setQuantidadeLivros(livro.getQuantidadeLivros() - 1);
        livroService.editarLivro(livro.getIdLivro(),livro); 

        emprestimo.setStatus(StatusEmprestimo.Criado);
        return emprestimoRepository.save(emprestimo);
    } else {
        throw new Exception("Não há livros disponíveis para empréstimo.");
    }
}

    public void devolverEmprestimo(Long idEmprestimo) throws Exception {
        Emprestimo emprestimo = buscarEmprestimo(idEmprestimo);

    if (emprestimo.getStatus() != StatusEmprestimo.Devolvido) {
        emprestimo.setStatus(StatusEmprestimo.Devolvido);

        Livro livro = emprestimo.getLivro();
        livro.setQuantidadeLivros(livro.getQuantidadeLivros()+ 1);

        livroRepository.save(livro);
        emprestimoRepository.save(emprestimo);
    } else {
        throw new Exception("Este empréstimo já foi marcado como devolvido.");
    }
    }

    public void aprovarRejeitarEmprestimo(Long idEmprestimo, boolean aprovar) {
        Emprestimo emprestimo = buscarEmprestimo(idEmprestimo);

        if (aprovar) {
            emprestimo.setStatus(StatusEmprestimo.Aceito);
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            String dataFormatada = LocalDate.now().format(formatter);
            emprestimo.setDataInicioEmprestimo(Date.valueOf(dataFormatada));
        } else {
            emprestimo.setStatus(StatusEmprestimo.Recusado);
        }

        emprestimoRepository.save(emprestimo);
    }

    @SuppressWarnings("null")
    private Emprestimo buscarEmprestimo(Long idEmprestimo) {
        return emprestimoRepository.findById(idEmprestimo)
                .orElseThrow(() -> new RuntimeException("Empréstimo não encontrado com o ID: " + idEmprestimo));
    }

    public void verificarEmprestimosAtrasados() {
        List<Emprestimo> emprestimos = emprestimoRepository.findAll();

        LocalDate dataAtual = LocalDate.now();

        for (Emprestimo emprestimo : emprestimos) {
            if (emprestimo.getDataInicioEmprestimo() != null && emprestimo.getQuantidadeDias() != null) {
                LocalDate dataDevolucaoEsperada = emprestimo.getDataInicioEmprestimo().toLocalDate().plusDays(emprestimo.getQuantidadeDias());

                if (dataAtual.isAfter(dataDevolucaoEsperada) && !emprestimo.getStatus().equals(StatusEmprestimo.Devolvido)) {
                    emprestimo.setStatus(StatusEmprestimo.Atraso);
                    emprestimoRepository.save(emprestimo);
                }
            }
        }
    }

    public Emprestimo buscarEmprestimoPorId(Long id) {
        Optional<Emprestimo> emprestimoOptional = emprestimoRepository.findById(id);
        return emprestimoOptional.orElse(null);
    }
}

