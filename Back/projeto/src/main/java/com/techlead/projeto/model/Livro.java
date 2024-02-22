package com.techlead.projeto.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;
@Entity
@Table(name = "livros")
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idlivro")
    private Long idLivro;

    @Column(name = "nome")
    @NotNull(message = "Campo Obrigatório")
    private String nome;

    @Column(name = "autor")
    @NotNull(message = "Campo Obrigatório")
    private String autor;

    @Column(name = "data_cadastro")
    @NotNull(message = "Campo Obrigatório")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dataCadastro;

    @ManyToOne
    @JoinColumn(name = "idusuario_cadastrou")
    private Usuario usuario;

    public Long getIdLivro() {
        return idLivro;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public Date getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Date dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

}

