import React, { Component } from 'react';

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            nome: '',
            sobrenome: '',
            time: '',
            email: '',
            senha1: '',
            senha2: '',
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
        if (e.target.name === "nome") {
            this.setState({ nome: e.target.value })
        }
        if (e.target.name === "sobrenome") {
            this.setState({ sobrenome: e.target.value })
        }
        if (e.target.name === "time") {
            this.setState({ time: e.target.value })
        }
        if (e.target.name === "email") {
            this.setState({ email: e.target.value })
        }
        if (e.target.name === "senha1") {
            this.setState({ senha1: e.target.value })
        }
        if (e.target.name === "senha2") {
            this.setState({ senha2: e.target.value })
        }
    }

    onSubmit(nome, sobrenome, time, email, senha1, senha2) {
        // Adicionar verificação em caso de e-mail já cadastrado
        if (nome === '' || sobrenome === '' || time === '' || email === '' || senha1 === '' || senha2 === '') {
            this.setState({ erro: 'Todos os campos devem ser preenchidos' });
        } else if(senha1 !== senha2){
            this.setState({ erro: 'As senhas não são equivalentes' })
        } else {
            window.location.assign("/");
        }
    }

    render() {
        const { nome, sobrenome, time, email, senha1, senha2, erro } = this.state
        return (
            <div className="App-header" style={{ backgroundColor: '#030348' }}>
                <h1 style={{ paddingTop: '5%', paddingBottom: '2%', color: 'white' }}>Jogos Que Fui</h1>
                <h3 style={{ padding: '10px', color: 'white' }}>Cadastre-se</h3>
                <input name='nome' onChange={this.onChange} style={{ width: '400px', padding: '10px', margin: '20px' }} type="text" placeholder="Nome" required />
                <input name='sobrenome' onChange={this.onChange} style={{ width: '400px', padding: '10px', margin: '20px' }} type="text" placeholder="Sobrenome" required />
                <select name="time" id="time" onChange={this.onChange} style={{ width: '400px', padding: '10px', margin: '20px' }} required>
                    <option value="">Selecione seu time</option>
                    <option value="Botafogo">Botafogo</option>
                    <option value="Flamengo">Flamengo</option>
                    <option value="Fluminense">Fluminense</option>
                    <option value="Vasco">Vasco</option>
                </select>
                <input name='email' onChange={this.onChange} style={{ width: '400px', padding: '10px', margin: '20px' }} type="email" placeholder="Insira seu e-mail" required />
                <input name='senha1' onChange={this.onChange} style={{ width: '400px', padding: '10px', margin: '20px' }} type="password" placeholder="Insira sua senha" required />
                <input name='senha2' onChange={this.onChange} style={{ width: '400px', padding: '10px', margin: '20px' }} type="password" placeholder="Insira sua senha novamente" required />
                <p style={{ fontSize: '20px', color: 'red' }}>{erro}</p>
                <button onClick={() => { this.onSubmit(nome, sobrenome, time, email, senha1, senha2) }} style={{ width: '250px', padding: '10px', margin: '20px', backgroundColor: '#09ab4c', color: 'white', borderRadius: '7px' }} type="submit">Cadastrar</button>
                <a style={{ fontSize: '20px', color: 'white', margin: '10px', textDecoration: 'underline' }} href="/">Voltar</a>
            </div>
        )
    }
}

export default Cadastro;