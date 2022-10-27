import Jogos from './jogos';
import Times from './Times';

const getTotalAdversario = (meuTime, adversario) => {
    var total = 0;
    var jogos = Jogos();
    var adversarioAtual = Times(adversario).nomeAtual;

    for (var a in jogos) {
        if (((jogos[a][0] === meuTime) && (Times(jogos[a][1]).nomeAtual === adversarioAtual)) ||
            ((jogos[a][1] === meuTime) && (Times(jogos[a][0]).nomeAtual === adversarioAtual))) {
            total += 1;
        }
    }

    return total;
}

const getTotalEstadio = (estadio) => {
    var total = 0;
    var jogos = Jogos();

    for (var a in jogos) {
        if (jogos[a][6] === estadio) {
            total += 1;
        }
    }

    return total;
}

const getTotalAno = (ano) => {
    var total = 0;
    var jogos = Jogos();

    for (var a in jogos) {
        const currentDate = new Date(jogos[a][5]);
        if (ano.toString().includes(currentDate.getFullYear())) {
            total += 1;
        }
    }

    return total;
}

const getVitorias = (meuTime, jogos) => {
    var vitorias = 0;

    for (var a in jogos) {
        if (((jogos[a][0] === meuTime) && (jogos[a][2] > jogos[a][3])) ||
            ((jogos[a][1] === meuTime) && (jogos[a][2] < jogos[a][3]))) {
            vitorias += 1;
        }
    }

    return vitorias;
}

const getEmpates = (meuTime, jogos) => {
    var empates = 0;

    for (var a in jogos) {
        if (jogos[a][2] === jogos[a][3] &&
            (meuTime === jogos[a][0] || meuTime === jogos[a][1])) {
            empates += 1;
        }
    }

    return empates;
}

const getDerrotas = (meuTime, jogos) => {
    var derrotas = 0;

    for (var a in jogos) {
        if (((jogos[a][0] === meuTime) && (jogos[a][2] < jogos[a][3])) ||
            ((jogos[a][1] === meuTime) && (jogos[a][2] > jogos[a][3]))) {
            derrotas += 1;
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