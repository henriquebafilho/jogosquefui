class ConjuntoUsuarios {
    usuarios = [];
    usuarioAtual;

    getUsuarios() {
        return this.usuarios;
    }

    getUsuarioAtual() {
        return this.usuarioAtual;
    }

    setUsuarioAtual(usuario) {
        this.usuarioAtual = usuario;
        console.log(this.usuarioAtual);
    }

    adicionaUsuario(usuario) {
        this.usuarios.push(usuario);
    }
}
export default ConjuntoUsuarios;