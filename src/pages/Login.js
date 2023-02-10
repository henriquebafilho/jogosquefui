import React, { Component } from 'react';
import Cadastro from './Cadastro';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            email: '',
            senha: '',
            erro: '',
            usuarios: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({
            usuarios: this.props.conjuntoUsuarios
        })
        //console.log(this.props.conjuntoUsuarios);
    }

    buttonClick = async () => {
        this.setState({ isLogin: false });
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

    loginSubmit(email, senha) {
        let usuario = this.props.conjuntoUsuarios.getUsuarios().filter(user =>
            user.email === email && user.senha === senha
        );
        if (email === '' || senha === '' || usuario.length === 0) {
            this.setState({ erro: 'E-mail ou senha inválidos' })
        } else {
            //verificar se os dados estão corretos
            window.location.assign("/todosOsJogos");
        }
    }

    render() {
        const { email, senha, erro } = this.state
        return (
            <>
                {this.state.isLogin ? <div className="App-header" style={{ backgroundColor: '#030348' }}>
                    <h1 style={{ padding: '100px', color: 'white' }}>Jogos Que Fui</h1>
                    <input name='email' onChange={this.onChange} style={{ width: '400px', padding: '10px', margin: '20px' }} type="email" placeholder="Insira seu e-mail" />
                    <input name='senha' onChange={this.onChange} style={{ width: '400px', padding: '10px', margin: '20px' }} type="password" placeholder="Insira sua senha" />
                    <p style={{ fontSize: '20px', color: 'red' }}>{erro}</p>
                    <button onClick={() => { this.loginSubmit(email, senha) }} style={{ width: '250px', padding: '10px', margin: '20px', backgroundColor: '#09ab4c', color: 'white', borderRadius: '7px' }} type="submit">Entrar</button>
                    <button style={{ fontSize: '20px', borderStyle: 'none', backgroundColor: '#030348', color: 'white', margin: '10px', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => this.buttonClick()}>Não tem uma conta? Cadastre-se!</button>
                </div> : <Cadastro conjuntoUsuarios={this.state.usuarios} />}
            </>
        )
    }
}

export default Login;