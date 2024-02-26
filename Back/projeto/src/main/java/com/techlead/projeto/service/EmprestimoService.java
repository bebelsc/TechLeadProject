package com.techlead.projeto.service;

import com.techlead.projeto.model.Emprestimo;
import com.techlead.projeto.model.StatusEmprestimo;
import com.techlead.projeto.repository.EmprestimoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class EmprestimoService {

    private final EmprestimoRepository emprestimoRepository;

    @Autowired
    public EmprestimoService(EmprestimoRepository emprestimoRepository) {
        this.emprestimoRepository = emprestimoRepository;
    }

    public Emprestimo criarEmprestimo(Emprestimo emprestimo) {
        emprestimo.setStatus(StatusEmprestimo.Criado);
        return emprestimoRepository.save(emprestimo);
    }

    public void devolverEmprestimo(Long idEmprestimo) {
        Emprestimo emprestimo = buscarEmprestimo(idEmprestimo);
        emprestimo.setStatus(StatusEmprestimo.Devolvido);
        emprestimoRepository.save(emprestimo);
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
}

