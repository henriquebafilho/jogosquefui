import MeusJogos from "./MeusJogos";

class Usuario {
    constructor(nome, sobrenome, meuTime, email, senha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.meuTime = meuTime;
        this.email = email;
        this.senha = senha;
        this.meusJogos = new MeusJogos();
    }

    getNome() {
        return this.nome;
    }

    getSobrenome() {
        return this.sobrenome;
    }

    getMeuTime() {
        return this.meuTime;
    }

    getEmail() {
        return this.email;
    }

    getSenha() {
        return this.senha;
    }

    getMeusJogos() {
        return this.meusJogos.getJogos();
    }
}
export default Usuario;