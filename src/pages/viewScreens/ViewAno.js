import React, { Component } from 'react';
import Times from '../../Times';
import Estatisticas from '../../components/Estatisticas';

class Anos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meuTime: props.meuTime,
            //jogos: props.jogos(),
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            anos: [],
            isLoading: false
        }
    }

    async componentDidMount() {
        this._isMounted = true;
        this.setState({ isLoading: true })
        this.setState({ isLoading: false })
    }

    /*  getVitoriasAno = async () => {
         var vitorias = 0;
         for (var a in jogos()) {
             var dataCortada = jogos()[a][5].split("-");
             if ((dataCortada[0].toString() === ano.toString()) && ano !== null) {
                 if (((jogos()[a][0] === props.meuTime) && (jogos()[a][2] > jogos()[a][3])) ||
                     ((jogos()[a][1] === props.meuTime) && (jogos()[a][3] > jogos()[a][2]))) {
                     vitorias += 1;
                 }
             }
         }
         return vitorias;
     }
 
     getEmpatesAno = async () => {
         var empates = 0;
         for (var a in jogos()) {
             var dataCortada = jogos()[a][5].split("-");
             if (dataCortada[0].toString() === ano.toString()) {
                 if ((jogos()[a][0] === props.meuTime || jogos()[a][1] === props.meuTime) && jogos()[a][2] === jogos()[a][3]) {
                     empates += 1;
                 }
             }
         }
         return empates;
     }
 
     getDerrotasAno = async () => {
         var derrotas = 0;
         for (var a in jogos()) {
             var dataCortada = jogos()[a][5].split("-");
             if (dataCortada[0].toString() === ano.toString()) {
                 if ((jogos()[a][0] === props.meuTime && jogos()[a][2] < jogos()[a][3]) || (jogos()[a][1] === props.meuTime && jogos()[a][3] < jogos()[a][2])) {
                     derrotas += 1;
                 }
             }
         }
         return derrotas;
     }
  */
    render() {
        var ano = this.props.ano;
        return (
            <div className="viewAno" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor }}>
                <h1>ViewAno - 2022</h1> {/* Ano escolhido */}
                {/* Estatísticas */}
            </div>
        )
    }
}

export default Anos;