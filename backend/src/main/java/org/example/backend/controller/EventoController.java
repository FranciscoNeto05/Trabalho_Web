package org.example.backend.controller;

import org.example.backend.data.dto.EventoDTO;
import org.example.backend.service.EventoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/eventos")
public class EventoController {
    private final EventoService eventoService;

    public EventoController(EventoService eventoService) {
        this.eventoService = eventoService;
    }

    @GetMapping
    @CrossOrigin(origins = "*")
    public ResponseEntity<List<EventoDTO>> listarTodos() {
        List<EventoDTO> eventos = eventoService.listarTodos();
        return ResponseEntity.ok(eventos);
    }

    @PostMapping
    @CrossOrigin(origins = "*")
    public ResponseEntity<EventoDTO> criar(@RequestBody EventoDTO eventoDTO) {
        EventoDTO eventoSalvo = eventoService.salvar(eventoDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(eventoSalvo);
    }
}