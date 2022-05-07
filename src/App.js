import './App.css';
import Times from './Times';

function App() {
  var meuTime = "Botafogo";
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: Times(meuTime).backgroundColor}}>
        <img src={require('./escudos/'+Times(meuTime).escudo+'.png')} className="App-logo" alt={"Escudo do "+meuTime} />
        <p style={{color: Times(meuTime).letterColor}}>
          Eu sou {Times(meuTime).nomeAtual}
        </p>
        <details style={{color: Times(meuTime).letterColor}}>
          <summary style={{color: Times(meuTime).letterColor}}>
            Summary
          </summary>
          <p>
            Details
          </p>
        </details>
      </header>
    </div>
  );
}

export default App;
