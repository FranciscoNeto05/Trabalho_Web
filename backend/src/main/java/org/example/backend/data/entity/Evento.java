package org.example.backend.data.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;

@Document(collection = "evento")
public class Evento {
    @Id
    private String id;

    public String getNome() {
        return nome;
    }

    public LocalDate getData() {
        return data;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getImagem() {
        return imagem;
    }

    private String nome;
    private LocalDate data;
    private String descricao;
    private String imagem;

    public Evento(String nome, LocalDate data, String descricao, String imagem) {
        this.nome = nome;
        this.data = data;
        this.descricao = descricao;
        this.imagem = imagem;
    }

    public String getId() {
        return id;
    }
}