import Times from './Times';

const getTotalAdversario = (meuTime, adversario, jogos) => {
    var total = 0;
    var adversarioAtual = Times(adversario).nomeAtual;

    for (var a in jogos) {
        if (((jogos[a].mandante === meuTime) && (Times(jogos[a].visitante).nomeAtual === adversarioAtual)) ||
            ((jogos[a].visitante === meuTime) && (Times(jogos[a].mandante).nomeAtual === adversarioAtual))) {
            total += 1;
        }
    }

    return total;
}

const getTotalEstadio = (estadio, jogos) => {
    var total = 0;

    for (var a in jogos) {
        if (jogos[a].estadio === estadio) {
            total += 1;
        }
    }

    return total;
}

const getTotalAno = (ano, jogos) => {
    var total = 0;

    for (var a in jogos) {
        const currentDateAno = jogos[a].data.split("-")[0];
        if (ano.toString().includes(currentDateAno)) {
            total += 1;
        }
    }

    return total;
}

const getVitorias = (meuTime, jogos) => {
    var vitorias = 0;

    for (var a in jogos) {
        if (jogos[a].golsMandante === "WO" && jogos[a].mandante === meuTime) {
            vitorias += 1;
        } else if (jogos[a].golsVisitante === "WO" && jogos[a].visitante === meuTime) {
            vitorias += 1;
        } else {
            if (((jogos[a].mandante === meuTime) && (jogos[a].golsMandante > jogos[a].golsVisitante)) ||
                ((jogos[a].visitante === meuTime) && (jogos[a].golsMandante < jogos[a].golsVisitante))) {
                vitorias += 1;
            }
        }
    }

    return vitorias;
}

const getEmpates = (meuTime, jogos) => {
    var empates = 0;

    for (var a in jogos) {
        if (jogos[a].golsMandante === jogos[a].golsVisitante &&
            (meuTime === jogos[a].mandante || meuTime === jogos[a].visitante)) {
            empates += 1;
        }
    }

    return empates;
}

const getDerrotas = (meuTime, jogos) => {
    var derrotas = 0;

    for (var a in jogos) {
        if (jogos[a].golsMandante === "WO" && jogos[a].visitante === meuTime) {
            derrotas += 1;
        } else if (jogos[a].golsVisitante === "WO" && jogos[a].mandante === meuTime) {
            derrotas += 1;
        } else {
            if (((jogos[a].mandante === meuTime) && (jogos[a].golsMandante < jogos[a].golsVisitante)) ||
                ((jogos[a].visitante === meuTime) && (jogos[a].golsMandante > jogos[a].golsVisitante))) {
                derrotas += 1;
            }
        }
    }

    return derrotas;
}

const textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";

const commonFunctions = {
    getTotalAdversario,
    getTotalEstadio,
    getTotalAno,
    getVitorias,
    getEmpates,
    getDerrotas,
    textShadow
}

export default commonFunctions;