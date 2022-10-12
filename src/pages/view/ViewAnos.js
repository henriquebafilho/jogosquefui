/* ESTATÍSTICAS */

function getVitoriasAno(ano) {
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

function getEmpatesAno(ano) {
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

function getDerrotasAno(ano) {
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