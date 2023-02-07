import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            email: '',
            senha: '',
            erro: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    async componentDidMount() {
        this._isMounted = true;
        window.scrollTo(0, 0);
    }

    onChange(e) {
        this.setState({ erro: '' })
        if (e.target.name === "email") {
            this.setState({ email: e.target.value })
        }
        if (e.target.name === "senha") {
            this.setState({ senha: e.target.value })
        }
    }

    onClick(email, senha) {
        if (email === '' || senha === '') {
            this.setState({ erro: 'E-mail ou senha inválidos' })
        } else {
            window.location.assign("/todosOsJogos");
        }
    }

    render() {
        const { email, senha, erro } = this.state
        return (
            <div className="App-header" style={{ backgroundColor: '#030348' }}>
                <h1 style={{ padding: '100px', color: 'white' }}>Jogos Que Fui</h1>
                <input name='email' onChange={this.onChange} style={{ width: '400px', padding: '10px', margin: '20px' }} type="email" placeholder="Insira seu e-mail" />
                <input name='senha' onChange={this.onChange} style={{ width: '400px', padding: '10px', margin: '20px' }} type="password" placeholder="Insira sua senha" />
                <p style={{ fontSize: '20px', color: 'red' }}>{erro}</p>
                <button onClick={() => { this.onClick(email, senha) }} style={{ width: '250px', padding: '10px', margin: '20px', backgroundColor: '#09ab4c', color: 'white', borderRadius: '7px' }} type="submit">Entrar</button>
                <a style={{ fontSize: '20px', color: 'white', margin: '10px', textDecoration: 'underline' }} href="/cadastro">Não tem uma conta? Cadastre-se!</a>
            </div>
        )
    }
}

export default Login;