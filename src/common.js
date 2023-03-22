import Times from './Times';

const getTotalAdversario = (meuTime, adversario, jogos) => {
    var total = 0;
    var adversarioAtual = Times(adversario).nomeAtual;

    for (var a in jogos) {
        if (((jogos[a][0] === meuTime) && (Times(jogos[a][1]).nomeAtual === adversarioAtual)) ||
            ((jogos[a][1] === meuTime) && (Times(jogos[a][0]).nomeAtual === adversarioAtual))) {
            total += 1;
        }
    }

    return total;
}

const getTotalEstadio = (estadio, jogos) => {
    var total = 0;

    for (var a in jogos) {
        if (jogos[a][6] === estadio) {
            total += 1;
        }
    }

    return total;
}

const getTotalAno = (ano, jogos) => {
    var total = 0;

    for (var a in jogos) {
        const currentDate = new Date(jogos[a].data);
        if (ano.toString().includes(currentDate.getFullYear())) {
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

const commonFunctions = {
    getTotalAdversario,
    getTotalEstadio,
    getTotalAno,
    getVitorias,
    getEmpates,
    getDerrotas
}

export default commonFunctions;