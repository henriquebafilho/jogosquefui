function jogos() {
    let jogos = [];

    jogos.push({ "mandante": "Vasco", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2026", "data": "2026-02-14", "estadio": "São Januário" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Fluminense", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2026", "data": "2026-02-07", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Bangu", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2026", "data": "2026-02-04", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Volta Redonda", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2026", "data": "2026-01-31", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Sampaio Corrêa-RJ", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2026", "data": "2026-01-24", "estadio": "Lourivaldão" });
    jogos.push({ "mandante": "Portuguesa-RJ", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2026", "data": "2026-01-21", "estadio": "Luso Brasileiro" });
    
    jogos.sort(function (a, b) {
        return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
    });

    return jogos;
}

export default jogos;
