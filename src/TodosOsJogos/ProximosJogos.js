function jogos() {
    let jogos = [];

    jogos.push({ "mandante": "Botafogo", "visitante": "Fortaleza", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-12-21", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Cruzeiro", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-12-17", "estadio": "Mineirão" });
    jogos.push({ "mandante": "Corinthians", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-12-13", "estadio": "Neo Química Arena" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Grêmio", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-12-10", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Sport", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-12-06", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Vitória", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-12-03", "estadio": "Barradão" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Vasco", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-11-29", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Mirassol", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-11-22", "estadio": "José Maria de Campos Maia" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Santos", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-11-20", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Ceará", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-11-05", "estadio": "Castelão-CE" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Flamengo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-10-25", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Internacional", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-10-04", "estadio": "Beira-Rio", "horario": "18:30"  });
    jogos.push({ "mandante": "Botafogo", "visitante": "Bahia", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-10-01", "estadio": "Nilton Santos", "horario": "21:30" });
    jogos.push({ "mandante": "Fluminense", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-09-28", "estadio": "Maracanã", "horario": "16:00" });
    jogos.push({ "mandante": "Grêmio", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-09-24", "estadio": "Arena do Grêmio", "horario": "19:30" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Atlético-MG", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-09-20", "estadio": "Nilton Santos", "horario": "18:30" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Mirassol", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-09-17", "estadio": "Nilton Santos", "horario": "19:30"  });
    jogos.push({ "mandante": "São Paulo", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-09-14", "estadio": "Morumbi", "horario": "17:30" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Vasco", "golsMandante": "", "golsVisitante": "", "campeonato": "Copa do Brasil 2025", "data": "2025-09-11", "estadio": "Nilton Santos", "horario": "21:30" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Red Bull Bragantino", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-08-30", "estadio": "Nilton Santos", "horario": "18:30" });
    jogos.push({ "mandante": "Vasco", "visitante": "Botafogo", "golsMandante": 1, "golsVisitante": 1, "campeonato": "Copa do Brasil 2025", "data": "2025-08-27", "estadio": "São Januário", "horario": "21:30" });
    
    jogos.sort(function (a, b) {
        return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
    });

    return jogos;
}

export default jogos;
