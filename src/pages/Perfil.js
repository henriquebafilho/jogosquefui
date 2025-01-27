import React from 'react';
import Times from '../Times';
import Tabs from '../components/Tabs';

function Perfil(props) {
  const meuTime = props.meuTime;
  //let anoAtual = 0;
  let meusJogos = props.meusJogos;
  meusJogos.sort(function (a, b) {
    return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
  });

  return (
    <>
      <div className="App-header" style={{ backgroundColor: Times(props.meuTime).backgroundColor }}>
        <div style={{ margin: '20px' }}>
          <p style={{ display: 'inline', color: Times(props.meuTime).letterColor }}>
          {/* {props.conjuntoUsuarios.getUsuarioAtual().getNome().toUpperCase()} {props.conjuntoUsuarios.getUsuarioAtual().getSobrenome().toUpperCase()} */}
          Botafogo de Futebol e Regatas
          </p>
        </div>
          <img src={require('../escudos/' + Times(props.meuTime).escudo + '.png')} className="App-logo" alt={"Escudo do " + props.meuTime} style={{ verticalAlign: 'middle', width: '100px', height: '100px' }} />
        <br />
        {/* {meusJogos.length > 0 && <Estatisticas meuTime={props.meuTime} jogos={meusJogos} />} */}
        <Tabs meuTime={meuTime} meusJogos={meusJogos}/>
        {/*meusJogos.length > 0 ? meusJogos.reverse().map((index) => {
          let mostraAno = false;
          if (anoAtual !== index.data.split("-")[0]) {
            anoAtual = index.data.split("-")[0];
            mostraAno = true;
          }
          return <div key={index}>
            {mostraAno ? <h1 style={{ textAlign: 'center', color: Times(meuTime).letterColor, margin: '40px' }}>{anoAtual}</h1> : ""}
            <LinhaJogo meuTime={meuTime} jogo={index} meusJogos={props.meusJogos} />
          </div>
        }) : <div>
          <h1 style={{ color: Times(props.meuTime).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Você ainda não possui jogos cadastrados</h1>
          <h4 style={{ color: Times(props.meuTime).letterColor, textAlign: 'center' }}>Vá em "Jogos do {props.meuTime}" para selecionar os jogos que você já foi</h4>
      </div>*/}
      </div>
    </>
  )
}

export default Perfil;