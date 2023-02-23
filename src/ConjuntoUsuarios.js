class ConjuntoUsuarios {
    usuarios = [];
    usuarioAtual = "";

    getUsuarios() {
        return this.usuarios;
    }

    getUsuarioAtual() {
        return this.usuarioAtual;
    }

    setUsuarioAtual(usuario) {
        this.usuarioAtual = usuario;
    }

    adicionaUsuario(usuario) {
        this.usuarios.push(usuario);
    }
}
export default ConjuntoUsuarios;