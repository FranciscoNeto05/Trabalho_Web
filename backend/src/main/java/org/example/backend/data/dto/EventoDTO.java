package org.example.backend.data.dto;

import java.time.LocalDate;

public record EventoDTO(String nome, LocalDate data, String descricao, String imagem) { }