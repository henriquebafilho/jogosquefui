function jogos() {
    let jogos = [];

    jogos.push({ "mandante": "Vasco", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2026", "data": "2026-02-14", "estadio": "São Januário" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Fluminense", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2026", "data": "2026-02-07", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Bangu", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2026", "data": "2026-02-04", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Volta Redonda", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2026", "data": "2026-01-31", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Sampaio Corrêa-RJ", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2026", "data": "2026-01-24", "estadio": "Lourivaldão" });
    jogos.push({ "mandante": "Portuguesa-RJ", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2026", "data": "2026-01-21", "estadio": "Luso Brasileiro" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Fortaleza", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-12-07", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Sport", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-12-07", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Cruzeiro", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-12-03", "estadio": "Mineirão" });
    jogos.push({ "mandante": "Corinthians", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-11-30", "estadio": "Neo Química Arena" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Grêmio", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-11-23", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Vitória", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-11-09", "estadio": "Barradão", "horario": "16:00" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Vasco", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2025", "data": "2025-11-05", "estadio": "Nilton Santos", "horario": "19:30" });
    jogos.push({ "mandante": "Mirassol", "visitante": "Botafogo", "golsMandante": 0, "golsVisitante": 0, "campeonato": "Brasileirão 2025", "data": "2025-11-01", "estadio": "José Maria de Campos Maia", "horario": "18:00" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Santos", "golsMandante": 2, "golsVisitante": 2, "campeonato": "Brasileirão 2025", "data": "2025-10-26", "estadio": "Nilton Santos", "horario": "16:00" });
    jogos.push({ "mandante": "Ceará", "visitante": "Botafogo", "golsMandante": 0, "golsVisitante": 2, "campeonato": "Brasileirão 2025", "data": "2025-10-19", "estadio": "Castelão-CE", "horario": "18:30" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Flamengo", "golsMandante": 0, "golsVisitante": 3, "campeonato": "Brasileirão 2025", "data": "2025-10-15", "estadio": "Nilton Santos", "horario": "19:30" });
    
    jogos.sort(function (a, b) {
        return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
    });

    return jogos;
}

export default jogos;
