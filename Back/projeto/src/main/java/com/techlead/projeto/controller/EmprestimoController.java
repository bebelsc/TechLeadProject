package com.techlead.projeto.controller;

import com.techlead.projeto.model.Emprestimo;
import com.techlead.projeto.service.EmprestimoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/emprestimos")
public class EmprestimoController {

    private final EmprestimoService emprestimoService;

    @Autowired
    public EmprestimoController(EmprestimoService emprestimoService) {
        this.emprestimoService = emprestimoService;
    }

    @PostMapping("/criar-emprestimo")
    public ResponseEntity<Emprestimo> criarEmprestimo(@RequestBody Emprestimo emprestimo) {
        Emprestimo novoEmprestimo = emprestimoService.criarEmprestimo(emprestimo);
        return new ResponseEntity<>(novoEmprestimo, HttpStatus.CREATED);
    }

    @PostMapping("/devolver-emprestimo/{idEmprestimo}")
    public ResponseEntity<String> devolverEmprestimo(@PathVariable Long idEmprestimo) {
        emprestimoService.devolverEmprestimo(idEmprestimo);
        return new ResponseEntity<>("Empréstimo devolvido com sucesso.", HttpStatus.OK);
    }

    @PostMapping("/aprovar-rejeitar-emprestimo/{idEmprestimo}")
    public ResponseEntity<String> aprovarRejeitarEmprestimo(@PathVariable Long idEmprestimo,
                                                            @RequestParam boolean aprovar) {
        emprestimoService.aprovarRejeitarEmprestimo(idEmprestimo, aprovar);
        String status = aprovar ? "Aprovado" : "Rejeitado";
        return new ResponseEntity<>("Empréstimo " + status + " com sucesso.", HttpStatus.OK);
    }

    @PostMapping("/verificar-emprestimos-atrasados")
    public ResponseEntity<String> verificarEmprestimosAtrasados() {
        emprestimoService.verificarEmprestimosAtrasados();
        return new ResponseEntity<>("Verificação de empréstimos atrasados concluída.", HttpStatus.OK);
    }
}
