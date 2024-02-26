package com.techlead.projeto.model;

import java.sql.Date;

import javax.validation.constraints.NotNull;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;
@Entity
@Table(name = "livro")
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

    @Column(name = "quantidade_livros")
    private int quantidadeLivros;

    public int getQuantidadeLivros() {
        return quantidadeLivros;
    }

    public void setQuantidadeLivros(int quantidadeLivros) {
        this.quantidadeLivros = quantidadeLivros;
    }

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

