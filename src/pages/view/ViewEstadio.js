  /* ESTATÍSTICAS */

  function getVitoriasEstadio(estadio) {
    var vitorias = 0;
    for (var a in jogos()) {
      if ((jogos()[a][6] === estadio)) {
        if (((jogos()[a][0] === props.meuTime) && (jogos()[a][2] > jogos()[a][3])) ||
          ((jogos()[a][1] === props.meuTime) && (jogos()[a][3] > jogos()[a][2]))) {
          vitorias += 1;
        }
      }
    }
    return vitorias;
  }

  function getEmpatesEstadio(estadio) {
    var empates = 0;
    for (var a in jogos()) {
      if ((jogos()[a][6] === estadio)) {
        if ((jogos()[a][0] === props.meuTime || jogos()[a][1] === props.meuTime) && jogos()[a][2] === jogos()[a][3]) {
          empates += 1;
        }
      }
    }
    return empates;
  }

  function getDerrotasEstadio(estadio) {
    var derrotas = 0;
    for (var a in jogos()) {
      if ((jogos()[a][6] === estadio)) {
        if ((jogos()[a][0] === props.meuTime && jogos()[a][2] < jogos()[a][3]) || (jogos()[a][1] === props.meuTime && jogos()[a][3] < jogos()[a][2])) {
          derrotas += 1;
        }
      }
    }
    return derrotas;
  }
