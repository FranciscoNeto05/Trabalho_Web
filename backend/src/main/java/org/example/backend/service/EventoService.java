package org.example.backend.service;

import org.example.backend.data.dto.EventoDTO;
import org.example.backend.data.entity.Evento;
import org.example.backend.repository.EventoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventoService {
    private final EventoRepository eventoRepository;

    public EventoService (EventoRepository eventoRepository) {
        this.eventoRepository = eventoRepository;
    }

    public List<EventoDTO> listarTodos() {
        return eventoRepository.findAll()
                .stream()
                .map(evento -> new EventoDTO(evento.getNome(), evento.getData(), evento.getDescricao(), evento.getImagem()))
                .collect(Collectors.toList());
    }

    public EventoDTO salvar(EventoDTO eventoDTO) {
        Evento evento = new Evento(eventoDTO.nome(), eventoDTO.data(), eventoDTO.descricao(), eventoDTO.imagem());
        Evento eventoSalvo = eventoRepository.save(evento);
        return new EventoDTO(eventoSalvo.getNome(), eventoSalvo.getData(), eventoSalvo.getDescricao(), eventoSalvo.getImagem());
    }
}