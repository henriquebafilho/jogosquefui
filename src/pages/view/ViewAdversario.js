  /* getVitoriasAdversario(adversario) {
    var vitorias = 0;
    var jogos = this.state.jogos;

    for (var a in jogos) {
      if (((jogos[a][0] === this.props.meuTime) && (jogos[a][2] > jogos[a][3]))) {
        if (Times(jogos()[a][1]).nomeAtual === Times(adversario).nomeAtual) {
          vitorias += 1;
        }
      }
      if ((jogos[a][1] === this.props.meuTime) && (jogos[a][3] > jogos[a][2])) {
        if (Times(jogos()[a][0]).nomeAtual === Times(adversario).nomeAtual) {
          vitorias += 1;
        }
      }
    }
    return vitorias;
  } */

  /* getEmpatesAdversario = (adversario) => {
    var empates = 0;
    var jogos = this.state.jogos;

    for (var a in jogos) {
      if (((jogos[a][0] === this.props.meuTime) && (jogos[a][2] === jogos[a][3]))) {
        if (Times(jogos[a][1]).nomeAtual === Times(adversario).nomeAtual) {
          empates += 1;
        }
      }
      if ((jogos[a][1] === this.props.meuTime) && (jogos[a][3] === jogos[a][2])) {
        if (Times(jogos[a][0]).nomeAtual === Times(adversario).nomeAtual) {
          empates += 1;
        }
      }
    }
    return empates;
  } */

  /* getDerrotasAdversario = (adversario) => {
    var derrotas = 0;
    var jogos = this.state.jogos;

    for (var a in jogos) {
      if (((jogos[a][0] === this.props.meuTime) && (jogos[a][2] < jogos[a][3]))) {
        if (Times(jogos[a][1]).nomeAtual === Times(adversario).nomeAtual) {
          derrotas += 1;
        }
      }
      if ((jogos[a][1] === this.props.meuTime) && (jogos[a][3] < jogos[a][2])) {
        if (Times(jogos[a][0]).nomeAtual === Times(adversario).nomeAtual) {
          derrotas += 1;
        }
      }
    }
    return derrotas;
  } */