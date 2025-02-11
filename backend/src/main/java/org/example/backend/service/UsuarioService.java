package org.example.backend.service;

import org.example.backend.data.dto.UsuarioDTO;
import org.example.backend.data.entity.Usuario;
import org.example.backend.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;

    public UsuarioService (UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<UsuarioDTO> listarTodos() {
        return usuarioRepository.findAll()
                .stream()
                .map(usuario -> new UsuarioDTO(usuario.getNome(), usuario.getEmail(), usuario.getSenha()))
                .collect(Collectors.toList());
    }

    public Optional<UsuarioDTO> buscarPorEmail(String email) {
        return usuarioRepository.findByEmail(email)
                .map(usuario -> new UsuarioDTO(usuario.getNome(), usuario.getEmail(), usuario.getSenha()));
    }

    public UsuarioDTO validarLogin(String email, String senha) {
        Optional<UsuarioDTO> usuario = buscarPorEmail(email);
        if (usuario.isPresent() && usuario.get().senha().equals(senha)) {
            return usuario.get();
        }
        return null;
    }

    public UsuarioDTO salvar(UsuarioDTO usuarioDTO) {
        Usuario usuario = new Usuario(usuarioDTO.nome(), usuarioDTO.email(), usuarioDTO.senha());
        Usuario usuarioSalvo = usuarioRepository.save(usuario);
        return new UsuarioDTO(usuarioSalvo.getNome(), usuarioSalvo.getEmail(), null);
    }
}