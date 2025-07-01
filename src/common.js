import Times from './Times';
import BotafogoJogos from './TodosOsJogos/BotafogoJogos';

const jogos = BotafogoJogos().filter(jogo => jogo.golsMandante !== "" && jogo.golsVisitante !== "");

const getTotalAdversario = (time, adversario) => {
    var total = 0;
    var adversarioAtual = Times(adversario).nomeAtual;

    for (var a in jogos) {
        if (((jogos[a].mandante === time) && (Times(jogos[a].visitante).nomeAtual === adversarioAtual)) ||
            ((jogos[a].visitante === time) && (Times(jogos[a].mandante).nomeAtual === adversarioAtual))) {
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

const getTotalAno = (ano) => {
    var total = 0;

    for (var a in jogos) {
        const currentDateAno = jogos[a].data.split("-")[0];
        if (ano.toString().includes(currentDateAno)) {
            total += 1;
        }
    }

    return total;
}

const getJogosAno = (ano) => {
    var jogosAno = [];

    for (var i in jogos) {
        const anoAtual = jogos[i].data.split("-")[0];
        if (ano === anoAtual) {
            jogosAno.push(jogos[i]);
        }
    }

    return jogosAno;
}

const getVitorias = (time, jogos) => {
    var vitorias = 0;

    for (var a in jogos) {
        if (jogos[a].golsMandante === "WO" && jogos[a].mandante === time) {
            vitorias += 1;
        } else if (jogos[a].golsVisitante === "WO" && jogos[a].visitante === time) {
            vitorias += 1;
        } else {
            if (((jogos[a].mandante === time) && (jogos[a].golsMandante > jogos[a].golsVisitante)) ||
                ((jogos[a].visitante === time) && (jogos[a].golsMandante < jogos[a].golsVisitante))) {
                vitorias += 1;
            }
        }
    }

    return vitorias;
}

const getEmpates = (time, jogos) => {
    var empates = 0;

    for (var a in jogos) {
        if (jogos[a].golsMandante === jogos[a].golsVisitante &&
            (time === jogos[a].mandante || time === jogos[a].visitante)) {
            empates += 1;
        }
    }

    return empates;
}

const getDerrotas = (time, jogos) => {
    var derrotas = 0;

    for (var a in jogos) {
        if (jogos[a].golsMandante === "WO" && jogos[a].visitante === time) {
            derrotas += 1;
        } else if (jogos[a].golsVisitante === "WO" && jogos[a].mandante === time) {
            derrotas += 1;
        } else {
            if (((jogos[a].mandante === time) && (jogos[a].golsMandante < jogos[a].golsVisitante)) ||
                ((jogos[a].visitante === time) && (jogos[a].golsMandante > jogos[a].golsVisitante))) {
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
    getJogosAno,
    getVitorias,
    getEmpates,
    getDerrotas,
    textShadow
}

export default commonFunctions;