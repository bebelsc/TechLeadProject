package com.techlead.projeto.model;

import java.sql.Date;

import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "emprestimo")
public class Emprestimo {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idemprestimo")
    private Long idEmprestimo;

    @ManyToOne
    @JoinColumn(name = "idlivro")
    @NotNull(message = "Campo Obrigatório")
    private Livro livro;

    @ManyToOne
    @JoinColumn(name = "idusuario")
    @NotNull(message = "Campo Obrigatório")
    private Usuario usuario;
    
    @Column(name = "quantidade_dias")
    @NotNull(message = "Campo Obrigatório")
    private Long quantidadeDias;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private StatusEmprestimo status;

    @Column(name = "data_inicio_emprestimo")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dataInicioEmprestimo;

    public Long getIdEmprestimo() {
        return idEmprestimo;
    }

    public Livro getLivro() {
        return livro;
    }

    public void setLivro(Livro livro) {
        this.livro = livro;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Long getQuantidadeDias() {
        return quantidadeDias;
    }

    public void setQuantidadeDias(Long quantidadeDias) {
        this.quantidadeDias = quantidadeDias;
    }

    public StatusEmprestimo getStatus() {
        return status;
    }

    public void setStatus(StatusEmprestimo status) {
        this.status = status;
    }

    public Date getDataInicioEmprestimo() {
        return dataInicioEmprestimo;
    }

    public void setDataInicioEmprestimo(Date dataInicioEmprestimo) {
        this.dataInicioEmprestimo = dataInicioEmprestimo;
    }

   
}
