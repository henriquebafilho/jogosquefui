import React from 'react';
import Times from '../Times';
import LinhaJogo from '../components/LinhaJogo';
import Estatisticas from '../components/Estatisticas';

function Perfil(props) {
  const meuTime = props.meuTime;
  let anoAtual = 0;
  let meusJogos = props.meusJogos.getJogos();
  meusJogos.sort(function (a, b) {
    return a[5] < b[5] ? -1 : a[5] > b[5] ? 1 : 0;
  });

  return (
    <>
      <div id="App-header-perfil" style={{ backgroundColor: Times(props.meuTime).backgroundColor, display: 'flex' }}>
        <div style={{ margin: '20px' }}>
          <img src={require('../escudos/' + Times(props.meuTime).escudo + '.png')} className="App-logo" alt={"Escudo do " + props.meuTime} style={{ verticalAlign: 'middle', width: '100px', height: '100px' }} />
          <p style={{ display: 'inline', color: Times(props.meuTime).letterColor }}>
            {props.conjuntoUsuarios.getUsuarioAtual().getNome().toUpperCase()} {props.conjuntoUsuarios.getUsuarioAtual().getSobrenome().toUpperCase()}
          </p>
        </div>
        <br />
        {meusJogos.length > 0 && <Estatisticas meuTime={props.meuTime} jogos={meusJogos} />}
        {meusJogos.length > 0 ? meusJogos.reverse().map((index) => {
          let mostraAno = false;
          if (anoAtual !== index[5].split("-")[0]) {
            anoAtual = index[5].split("-")[0];
            mostraAno = true;
          }
          return <div key={index}>
            {mostraAno ? <h1 style={{ textAlign: 'center', color: Times(meuTime).letterColor, margin: '40px' }}>{anoAtual}</h1> : ""}
            <LinhaJogo meuTime={meuTime} jogo={index} meusJogos={props.meusJogos} />
          </div>
        }) : <div>
          <h1 style={{ color: Times(props.meuTime).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Você ainda não possui jogos cadastrados</h1>
          <h4 style={{ color: Times(props.meuTime).letterColor, textAlign: 'center' }}>Vá em "Jogos do {props.meuTime}" para selecionar os jogos que você já foi</h4>
        </div>}
      </div>
    </>
  )
}

export default Perfil;