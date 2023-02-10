import React, { Component } from 'react';
import Usuario from '../Usuario';
import Login from './Login';

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCadastro: true,
            nome: '',
            sobrenome: '',
            time: '',
            emailCadastro: '',
            senha1: '',
            senha2: '',
            erroCadastro: '',
            sucessoCadastro: ''
        }
        this.onChangeCadastro = this.onChangeCadastro.bind(this);
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
    }

    buttonClick = async () => {
        this.setState({ isCadastro: false });
    }

    onChangeCadastro(e) {
        this.setState({ erroCadastro: '', sucessoCadastro: '' })
        if (e.target.name === "nome") {
            this.setState({ nome: e.target.value })
        }
        if (e.target.name === "sobrenome") {
            this.setState({ sobrenome: e.target.value })
        }
        if (e.target.name === "time") {
            this.setState({ time: e.target.value })
        }
        if (e.target.name === "emailCadastro") {
            this.setState({ emailCadastro: e.target.value })
        }
        if (e.target.name === "senha1") {
            this.setState({ senha1: e.target.value })
        }
        if (e.target.name === "senha2") {
            this.setState({ senha2: e.target.value })
        }
    }

    cadastroSubmit(nome, sobrenome, time, emailCadastro, senha1, senha2) {
        let usuario = this.props.conjuntoUsuarios.getUsuarios().filter(user =>
            user.email === emailCadastro
        );
        this.setState({ sucessoCadastro: '' });
        if (nome === '' || sobrenome === '' || time === '' || emailCadastro === '' || senha1 === '' || senha2 === '') {
            this.setState({ erroCadastro: 'Todos os campos devem ser preenchidos' });
        } else if (senha1 !== senha2) {
            this.setState({ erroCadastro: 'As senhas não são equivalentes' })
        } else if (usuario.length !== 0) {
            this.setState({ erroCadastro: 'E-mail ou username já cadastrado' })
        } else {
            let usuario = new Usuario(nome, sobrenome, time, emailCadastro, senha1);
            this.props.conjuntoUsuarios.adicionaUsuario(usuario);
            this.setState({ 
                nome: '',
                sobrenome: '',
                emailCadastro: '',
                senha1: '',
                senha2: '',
                sucessoCadastro: 'Cadastro realizado com sucesso!'
            });
        }
    }

    render() {
        const { nome, sobrenome, time, emailCadastro, senha1, senha2, erroCadastro, sucessoCadastro } = this.state
        return (
            <>
                {this.state.isCadastro ? <div className="App-header" style={{ backgroundColor: '#030348' }}>
                    <h1 style={{ paddingTop: '5%', paddingBottom: '2%', color: 'white' }}>Jogos Que Fui</h1>
                    <h3 style={{ padding: '10px', color: 'white' }}>Cadastre-se</h3>
                    <input name='nome' onChange={this.onChangeCadastro} style={{ width: '400px', padding: '10px', margin: '20px' }} type="text" placeholder="Nome" value={this.state.nome} required />
                    <input name='sobrenome' onChange={this.onChangeCadastro} style={{ width: '400px', padding: '10px', margin: '20px' }} type="text" placeholder="Sobrenome" value={this.state.sobrenome} required />
                    <select name="time" id="time" onChange={this.onChangeCadastro} style={{ width: '400px', padding: '10px', margin: '20px' }} value={this.state.time} required>
                        <option value="">Selecione seu time</option>
                        <option value="Botafogo">Botafogo</option>
                        <option value="Flamengo">Flamengo</option>
                        <option value="Fluminense">Fluminense</option>
                        <option value="Vasco">Vasco</option>
                    </select>
                    <input name='emailCadastro' onChange={this.onChangeCadastro} style={{ width: '400px', padding: '10px', margin: '20px' }} type="email" placeholder="Insira seu e-mail ou username" value={this.state.emailCadastro} required />
                    <input name='senha1' onChange={this.onChangeCadastro} style={{ width: '400px', padding: '10px', margin: '20px' }} type="password" placeholder="Insira sua senha" value={this.state.senha1} required />
                    <input name='senha2' onChange={this.onChangeCadastro} style={{ width: '400px', padding: '10px', margin: '20px' }} type="password" placeholder="Insira sua senha novamente" value={this.state.senha2} required />
                    <p style={{ fontSize: '20px', color: 'red' }}>{erroCadastro}</p>
                    <p style={{ fontSize: '20px', color: '#09ab4c' }}>{sucessoCadastro}</p>
                    <button onClick={() => { this.cadastroSubmit(nome, sobrenome, time, emailCadastro, senha1, senha2) }} style={{ width: '250px', padding: '10px', margin: '20px', backgroundColor: '#09ab4c', color: 'white', borderRadius: '7px' }} type="submit">Cadastrar</button>
                    <button style={{ fontSize: '20px', borderStyle: 'none', backgroundColor: '#030348', color: 'white', margin: '10px', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => this.buttonClick()}>Voltar</button>
                </div> : <Login conjuntoUsuarios={this.props.conjuntoUsuarios} />}
            </>
        )
    }
}

export default Cadastro;