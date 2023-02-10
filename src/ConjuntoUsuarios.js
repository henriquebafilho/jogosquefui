class ConjuntoUsuarios{
    usuarios = [];

    getUsuarios(){
        return this.usuarios;
    }

    adicionaUsuario(usuario){
        this.usuarios.push(usuario);
    }
}
export default ConjuntoUsuarios;