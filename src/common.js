// Funções comuns para todas as telas (como getVitórias, empates e derrotas)
import Jogos from './jogos';

const getTotalJogos = (meuTime) => {
    return Jogos().length;
}

const getVitorias = (meuTime) => {
    var vitorias = 0;
    var jogos = Jogos();

    for (var a in jogos) {
        if (((jogos[a][0] === meuTime) && (jogos[a][2] > jogos[a][3])) ||
            ((jogos[a][1] === meuTime) && (jogos[a][2] < jogos[a][3]))) {
            vitorias += 1;
        }
    }

    return vitorias;
}

const getEmpates = (meuTime) => {
    var empates = 0;
    var jogos = Jogos();

    for (var a in jogos) {
        if (jogos[a][2] === jogos[a][3] &&
            (meuTime === jogos[a][0] || meuTime === jogos[a][1])) {
            empates += 1;
        }
    }

    return empates;
}

const getDerrotas = (meuTime) => {
    var derrotas = 0;
    var jogos = Jogos();

    for (var a in jogos) {
        if (((jogos[a][0] === meuTime) && (jogos[a][2] < jogos[a][3])) ||
            ((jogos[a][1] === meuTime) && (jogos[a][2] > jogos[a][3]))) {
            derrotas += 1;
        }
    }

    return derrotas;
}

export { getTotalJogos, getVitorias, getEmpates, getDerrotas };