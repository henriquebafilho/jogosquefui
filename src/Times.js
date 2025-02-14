function Times(time, data) {
      var nomeAtual, escudo, backgroundColor, letterColor;

      if (data != null) {
            var dataCortada = data.split("-");
            var ano = parseInt(dataCortada[0]);
      }

      switch (time) {
            case "ABC":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "ADN-Niterói":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Africa Sports":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#018310";
                  letterColor = "white";
                  break;
            case "África do Sul":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "#048439";
                  break;
            case "Água Santa":
                  nomeAtual = time;
                  escudo = "ÁguaSanta";
                  backgroundColor = "#153160";
                  letterColor = "white";
                  break;
            case "Ajax":
                  nomeAtual = time;
                  if (ano < 1991) {
                        escudo = "Ajax1991";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Al-Ahli":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00853f";
                  letterColor = "white";
                  break;
            case "Al-Ahly":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Al-Hilal":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0028F0";
                  letterColor = "white";
                  break;
            case "Alecrim-RN":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#01904e";
                  letterColor = "white";
                  break;
            case "Alegrense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "#fde900";
                  break;
            case "Alianza Lima":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#162545";
                  letterColor = "white";
                  break;
            case "Altos-PI":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#01904e";
                  letterColor = "white";
                  break;
            case "América de Cali":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "América-MEX":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fff200";
                  letterColor = "#343795";
                  break;
            case "América-MG":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "América-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "América de Três Rios":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "América-RN":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Americano":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Anapolina":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Andarahy":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Argélia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Argentina":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0d80bf";
                  letterColor = "white";
                  break;
            case "Aruba":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "#003a94";
                  break;
            case "Ascoli":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Atlante":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d9032c";
                  letterColor = "white";
                  break;
            case "Atlas":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Athletic Bilbao":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Atlético-PR": case "Athletico-PR":
                  nomeAtual = "Athletico-PR";
                  if (time === "Atlético-PR") {
                        if (ano <= 1969) {
                              escudo = "Atlético-PR1969";
                        } else if (ano >= 1970 && ano <= 1989) {
                              escudo = "Atlético-PR1989";
                        } else if (ano > 1989 && ano < 1997) {
                              escudo = "Atlético-PR1996";
                        } else {
                              escudo = "Atlético-PR";
                        }
                  } else if (time === "Athletico-PR") {
                        escudo = "Athletico-PR";
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Atlético Nacional":
                  nomeAtual = time;
                  escudo = "AtléticoNacional";
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Atlético de Madrid":
                  nomeAtual = time;
                  if (ano < 1970) {
                        escudo = "Atlético de Madrid1950";
                  } else if (ano >= 1970 && ano < 2016) {
                        escudo = "Atlético de Madrid1970";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Atlético-GO":
                  nomeAtual = time;
                  if (ano < 2020) {
                        escudo = "Atlético-GO2020"
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Atlético-MG":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Aparecidense":
                  nomeAtual = time;
                  if (ano < 2022) {
                        escudo = "Aparecidense2022";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#00005e";
                  letterColor = "#c8ad51";
                  break;
            case "Audax Rio":
                  nomeAtual = time;
                  escudo = "AudaxRio";
                  backgroundColor = "#003a94";
                  letterColor = "#f48221";
                  break;
            case "Audax-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Audax Italiano":
                  nomeAtual = time;
                  escudo = "AudaxItaliano";
                  backgroundColor = "green";
                  letterColor = "white";
                  break;
            case "Aurora":
                  nomeAtual = time;
                  escudo = "Aurora";
                  backgroundColor = "#4ebde5";
                  letterColor = "white";
                  break;
            case "Auto Esporte-PI":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#03953f";
                  letterColor = "white";
                  break;
            case "Auxerre":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#43a1d5";
                  letterColor = "white";
                  break;
            case "Avaí":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00468e";
                  letterColor = "white";
                  break;
            case "Bahia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0188d6";
                  letterColor = "white";
                  break;
            case "Banfield":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#03953f";
                  letterColor = "white";
                  break;
            case "Bangu":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Barra Mansa":
                  nomeAtual = time;
                  escudo = "BarraMansa";
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Barcelona":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#a20046";
                  letterColor = "#fde900";
                  break;
            case "Barcelona de Guayaquil":
                  nomeAtual = time;
                  escudo = "BarcelonadeGuayaquil";
                  backgroundColor = "#fde900";
                  letterColor = "#055daa";
                  break;
            case "Bayern de Munique":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Benfica":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Besiktas":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Blooming":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0d80bf";
                  letterColor = "white";
                  break;
            case "Boa Esporte":
                  nomeAtual = time;
                  escudo = "BoaEsporte";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Boavista": case "Barreira":
                  nomeAtual = "Boavista";
                  if (ano >= 2004 && ano <= 2024) {
                        escudo = "Boavista2004";
                  } else if (ano < 2004) {
                        escudo = "Barreira";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#00913c";
                  letterColor = "white";
                  break;
            case "Boca Juniors":
                  nomeAtual = time;
                  escudo = "BocaJuniors";
                  backgroundColor = "#003a94";
                  letterColor = "#fcb000";
                  break;
            case "Bonsucesso":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#1c4196";
                  letterColor = "white";
                  break;
            case "Borussia Monchengladbach":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Boston River":
                  nomeAtual = time;
                  escudo = "BostonRiver";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Botafogo":
                  nomeAtual = time;
                  if (ano < 1943) {
                        escudo = "Botafogo1942";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Botafogo-SP":
                  nomeAtual = time;
                  if (ano < 2021) {
                        escudo = "Botafogo-SP2021";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Botafogo-PB":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Bragantino": case "Red Bull Bragantino":
                  nomeAtual = "Red Bull Bragantino";
                  if (time === "Bragantino") {
                        escudo = "Bragantino";
                        backgroundColor = "white";
                        letterColor = "black";
                  } else if (time === "Red Bull Bragantino") {
                        escudo = "RedBullBragantino";
                        backgroundColor = "#d30a11";
                        letterColor = "white";
                  }
                  break;
            case "Brasil":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "#018036";
                  break;
            case "Brasil de Pelotas":
                  nomeAtual = time;
                  escudo = "BrasildePelotas";
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Brasília":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Brasiliense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fede00";
                  letterColor = "black";
                  break;
            case "Brusque":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "red";
                  break;
            case "Cabofriense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00913c";
                  letterColor = "white";
                  break;
            case "Cádiz":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fff200";
                  letterColor = "#003a94";
                  break;
            case "Caldense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#096943";
                  letterColor = "white";
                  break;
            case "Camarões":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "#fbd81b";
                  break;
            case "Campinense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Campo Grande-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Canto do Rio":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#101377";
                  letterColor = "white";
                  break;
            case "Capivariano":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Caracas":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Cardiff City":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Cardoso Moreira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Carioca FC":
                  nomeAtual = time;
                  if (ano < 1933) {
                        escudo = "Carioca FC1933";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Cattete FC":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#193D8B";
                  letterColor = "white";
                  break;
            case "Caxias":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#7B1138";
                  letterColor = "white";
                  break;
            case "Ceará":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Ceilândia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Celta de Vigo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#43a1d5";
                  letterColor = "white";
                  break;
            case "CENE":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fffc03";
                  letterColor = "black";
                  break;
            case "Cerezo Osaka":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#1d237b";
                  letterColor = "white";
                  break;
            case "Cerro Porteño":
                  nomeAtual = time;
                  escudo = "CerroPorteño";
                  backgroundColor = "#c40215";
                  letterColor = "#073756";
                  break;
            case "César Vallejo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d77000";
                  letterColor = "#0B254A";
                  break;
            case "CEUB":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#FFFF54";
                  letterColor = "#415DA6";
                  break;
            case "Chapecoense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00913c";
                  letterColor = "white";
                  break;
            case "Charleroi":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Charlton Athletic":
                  nomeAtual = time;
                  escudo = "CharltonAthletic";
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Chile":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Chivas Guadalajara":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Chur":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Cocotá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Colo-Colo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Colón":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Colorado":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Comercial-MS":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Comercial-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Confiança":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Confiança-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Congo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#059bd9";
                  letterColor = "white";
                  break;
            case "Coreia do Sul":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Coreia do Sul Sub-23":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Corinthians":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Corisabbá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Coritiba":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#006437";
                  letterColor = "white";
                  break;
            case "Corumbaense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Coruripe":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#006437";
                  letterColor = "white";
                  break;
            case "CRB":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Criciúma":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fdd116";
                  letterColor = "black";
                  break;
            case "Cruzeiro":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Crystal Palace":
                  nomeAtual = time;
                  escudo = "CrystalPalace";
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "CSA":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Cuba":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Cuiabá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#018036";
                  letterColor = "white";
                  break;
            case "Deportivo Cali":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Deportivo La Coruña":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Deportivo Lara":
                  nomeAtual = time;
                  escudo = "DeportivoLara";
                  backgroundColor = "#e30613";
                  letterColor = "white";
                  break;
            case "Deportivo Municipal":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#213480";
                  letterColor = "white";
                  break;
            case "Deportivo Quito":
                  nomeAtual = time;
                  escudo = "DeportivoQuito";
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Deportivo Tachira":
                  nomeAtual = time;
                  escudo = "DeportivoTachira";
                  backgroundColor = "#f2d902";
                  letterColor = "black";
                  break;
            case "Defensa y Justicia":
                  nomeAtual = time;
                  escudo = "DefensayJusticia";
                  backgroundColor = "#fde900";
                  letterColor = "#018036";
                  break;
            case "Defensor":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#784684";
                  letterColor = "white";
                  break;
            case "Defensor Lima":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#8b0015";
                  letterColor = "white";
                  break;
            case "Democrata":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Desportiva Ferroviária":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#5C1422";
                  letterColor = "white";
                  break;
            case "Dom Pedro":
                  nomeAtual = time;
                  escudo = "DomPedro";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Duque de Caxias":
                  nomeAtual = time;
                  escudo = "DuquedeCaxias";
                  backgroundColor = "#003a94";
                  letterColor = "#f48221";
                  break;
            case "Dynamo de Kiev":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00589d";
                  letterColor = "white";
                  break;
            case "Emelec":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Emirados Árabes Unidos":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Engenho de Dentro":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#02086B";
                  letterColor = "white";
                  break;
            case "Entrerriense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Equador":
                  nomeAtual = time;
                  if (ano < 2020) {
                        escudo = "Equador2020";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#fde900";
                  letterColor = "#13007c";
                  break;
            case "Estrela Vermelha":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Estudiantes":
                  nomeAtual = time;
                  if (ano < 2011) {
                        escudo = "Estudiantes2011";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Everton":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Everton de Viña del Mar":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0d386c";
                  letterColor = "#ebd927";
                  break;
            case "Fast Clube":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#000D69";
                  letterColor = "white";
                  break;
            case "Fenerbahçe":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffec00";
                  letterColor = "#153961";
                  break;
            case "Ferencváros":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Ferroviária":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#511a1d";
                  letterColor = "white";
                  break;
            case "Ferroviário":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Ferroviário-PR":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Figueirense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Finlândia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Flamengo":
                  nomeAtual = time;
                  if (ano < 2018) {
                        escudo = "Flamengo2018";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Floresta-CE":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#87c53f";
                  letterColor = "#036c3c";
                  break;
            case "Fluminense":
                  nomeAtual = time;
                  if (ano >= 1902 && ano < 1905) {
                        escudo = "Fluminense1902";
                        backgroundColor = "grey";
                  } else if (ano >= 1905 && ano < 1950) {
                        escudo = "Fluminense1905";
                        backgroundColor = "#9f022f";
                  } else if (ano >= 1950 && ano < 2002) {
                        escudo = "Fluminense1950";
                        backgroundColor = "#9f022f";
                  } else {
                        escudo = time;
                        backgroundColor = "#9f022f";
                  }
                  letterColor = "white";
                  break;
            case "Fluminense de Feira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Football and Athletic":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Fortaleza":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#11519b";
                  letterColor = "white";
                  break;
            case "Friburguense": case "Fluminense Nova Friburgo":
                  nomeAtual = "Friburguense";
                  if (ano < 1980) {
                        escudo = "Fluminense Nova Friburgo";
                        backgroundColor = "#20418e";
                  } else {
                        escudo = time;
                        backgroundColor = "#003a94";
                  }
                  letterColor = "white";
                  break;
            case "Galícia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Germânia-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#172562";
                  letterColor = "white";
                  break;
            case "Gama":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#026b4a";
                  letterColor = "white";
                  break;
            case "Goiânia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Goiás":
                  nomeAtual = time;
                  if (ano < 2019) {
                        escudo = "Goiás2019";
                  } else if (ano >= 2019 && ano <= 2020) {
                        escudo = "Goiás2020";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#006437";
                  letterColor = "white";
                  break;
            case "Goréenne":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Goytacaz":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Grêmio":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0d80bf";
                  letterColor = "black";
                  break;
            case "Grêmio Barueri": case "Grêmio Prudente": case "Grêmio Prudente (Barueri)":
                  nomeAtual = "Grêmio Prudente (Barueri)";
                  escudo = time;
                  backgroundColor = "#f6e815";
                  letterColor = "#003c6e";
                  break;
            case "Grêmio Maringá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Groningen":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Guarani":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Guarani-PAR":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "black";
                  break;
            case "Guiana Francesa":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fcdd08";
                  letterColor = "#057a2c";
                  break;
            case "Haddock Lobo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#795228";
                  letterColor = "white";
                  break;
            case "Hajduk Split":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Hellênico":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Hibernian":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#327341";
                  letterColor = "white";
                  break;
            case "Honduras":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#075798";
                  letterColor = "white";
                  break;
            case "Huelva":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Independiente":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Independiente Del Valle":
                  nomeAtual = time;
                  if (ano < 2019) {
                        escudo = "IndependienteDelValle2019";
                  } else {
                        escudo = "IndependienteDelValle";
                  }
                  backgroundColor = "#fb37b9";
                  letterColor = "white";
                  break;
            case "Independiente Medellín":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#252c61";
                  break;
            case "Independiente Santa Fé":
                  nomeAtual = time;
                  escudo = "IndependienteSantaFé";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Inter de Limeira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Inter Miami":
                  nomeAtual = time;
                  escudo = "InterMiami";
                  backgroundColor = "#F4B5CD";
                  letterColor = "black";
                  break;
            case "Internacional":
                  nomeAtual = time;
                  if (ano < 2009) {
                        escudo = "Internacional2009";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Internacional-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Ipatinga":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Iraque":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Itabaiana":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Itabuna":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0F0490";
                  letterColor = "white";
                  break;
            case "Itaperuna":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Ituano":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Jamaica":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#39b54a";
                  letterColor = "#fff200";
                  break;
            case "Japão":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Jeanne d'Arc":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "JEF United Ichihara":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffe400";
                  letterColor = "#006d2c";
                  break;
            case "Ji-Paraná":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#1b93d1";
                  letterColor = "white";
                  break;
            case "Joinville":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Jorge Wilstermann":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Juazeirense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffff00";
                  letterColor = "#d30a11";
                  break;
            case "Junior Barranquilla":
                  nomeAtual = time;
                  escudo = "JuniorBarranquilla";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Juventude":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Juventus":
                  nomeAtual = time;
                  if (ano < 2004) {
                        escudo = "Juventus1990";
                  } else if (ano >= 2004 && ano < 2017) {
                        escudo = "Juventus2004";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Juventus-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#6a023c";
                  letterColor = "white";
                  break;
            case "Kenitra":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#038b5d";
                  letterColor = "white";
                  break;
            case "Koln":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Kuwait":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Kuwait Sub-20":
                  nomeAtual = time;
                  escudo = "Kuwait";
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "KV Mechelen":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffe500";
                  letterColor = "#e32213";
                  break;
            case "LDU":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "#003a94";
                  break;
            case "Leeds United":
                  nomeAtual = time;
                  if (ano <= 1991) {
                        escudo = "LeedsUnited1991";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "white";
                  letterColor = "#003a94";
                  break;
            case "León":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "#fde900";
                  break;
            case "Lille":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Linense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Londrina":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#1b93d1";
                  letterColor = "white";
                  break;
            case "Luverdense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#8bc23d";
                  letterColor = "#426d33";
                  break;
            case "Macaé":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#41afeb";
                  letterColor = "white";
                  break;
            case "Maccabi Netanya":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#feea00";
                  letterColor = "black";
                  break;
            case "Madureira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "#13007c";
                  break;
            case "Magallanes":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#43a1d5";
                  letterColor = "white";
                  break;
            case "Málaga":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00489a";
                  letterColor = "white";
                  break;
            case "Mali":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#f7cd31";
                  letterColor = "#24884f";
                  break;
            case "Mangueira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Maranhão":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#11519b";
                  letterColor = "white";
                  break;
            case "Maricá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Marília":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#54a9d8";
                  letterColor = "white";
                  break;
            case "Martinica":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00a650";
                  letterColor = "white";
                  break;
            case "Mavilis":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Mesquita":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Metropol":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#2A6438";
                  letterColor = "white";
                  break;
            case "México":
                  nomeAtual = time;
                  if (ano < 2022) {
                        escudo = "México2022";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Milan":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Millonarios":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Minervén FC":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#18407D";
                  letterColor = "white";
                  break;
            case "Mirassol":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffec00";
                  letterColor = "#00722c";
                  break;
            case "Mixto":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Mogi Mirim":
                  nomeAtual = time;
                  escudo = "MogiMirim";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Moto Club":
                  nomeAtual = time;
                  escudo = "MotoClub";
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Monarcas Morelia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fae700";
                  letterColor = "#e22227";
                  break;
            case "Córdoba":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#016139";
                  letterColor = "white";
                  break;
            case "Monterrey":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0a2240";
                  letterColor = "white";
                  break;
            case "Montevideo Wanderers":
                  nomeAtual = time;
                  escudo = "MontevideoWanderers";
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Nacional-AM":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#19417E";
                  letterColor = "#F5D94D";
                  break;
            case "Nacional-PAR":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#163fb3";
                  letterColor = "white";
                  break;
            case "Nacional-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Nacional-URU":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#172b8c";
                  letterColor = "white";
                  break;
            case "Nancy":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Nantes":
                  nomeAtual = time;
                  if (ano <= 1993) {
                        escudo = "Nantes1993";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#ffdc00";
                  letterColor = "#00a558";
                  break;
            case "Napoli":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0099da";
                  letterColor = "white";
                  break;
            case "Náutico":
                  nomeAtual = time;
                  if (ano < 2008) {
                        escudo = "Náutico2008";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Newcastle":
                  nomeAtual = time;
                  if (ano < 1988) {
                        escudo = "Newcastle1988";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Noroeste":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Nottingham Forest":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Nova Cidade":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Nova Iguaçu":
                  nomeAtual = time;
                  escudo = "NovaIguaçu";
                  backgroundColor = "#d77000";
                  letterColor = "black";
                  break;
            case "Novorizontino":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fff500";
                  letterColor = "black";
                  break;
            case "Oeste":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Olaria":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Olimpia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Olympiacos":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Once Caldas":
                  nomeAtual = time;
                  escudo = "OnceCaldas";
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Operário-PR":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Operário-MS":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Operário-MT":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Orgryte IS":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#940c23";
                  letterColor = "white";
                  break;
            case "Oriente Petrolero":
                  nomeAtual = time;
                  escudo = "OrientePetrolero";
                  backgroundColor = "#007c3a";
                  letterColor = "white";
                  break;
            case "Pachuca":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#023866";
                  letterColor = "white";
                  break;
            case "Palmeiras":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Palmeiras-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#2354A0";
                  letterColor = "white";
                  break;
            case "Panamá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Panathinaikos":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Paraná":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Paris Saint-Germain":
                  nomeAtual = time;
                  if (ano < 1990) {
                        escudo = "Paris Saint-Germain1990";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#004170";
                  letterColor = "white";
                  break;
            case "Partizan":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Patronato":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Paulista":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Paulistano-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Paysandu":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0091cf";
                  letterColor = "white";
                  break;
            case "Paysandu-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0105BF";
                  letterColor = "white";
                  break;
            case "Peñarol":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fdca01";
                  letterColor = "black";
                  break;
            case "Peterborough United":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0067b4";
                  letterColor = "white";
                  break;
            case "Petro Atlético":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#f7e030";
                  letterColor = "#001d7e";
                  break;
            case "Petrolina":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#f5182e";
                  letterColor = "white";
                  break;
            case "Pinheiros-PR":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Plymouth Argyle":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#034537";
                  letterColor = "white";
                  break;
            case "Posco Atoms": case "Pohang Steelers":
                  nomeAtual = "Pohang Steelers";
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Ponte Preta":
                  nomeAtual = time;
                  escudo = "PontePreta";
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Porto":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Porto Alegre-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Portsmouth":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#041383";
                  letterColor = "white";
                  break;
            case "Portuguesa":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Portuguesa-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Progreso":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#fdd120";
                  break;
            case "Puebla":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#012851";
                  letterColor = "white";
                  break;
            case "Puntarenas":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ec6e00";
                  letterColor = "black";
                  break;
            case "Quissamã":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Racing":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#029cdc";
                  letterColor = "white";
                  break;
            case "Racing Club-CAR":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#30358d";
                  letterColor = "white";
                  break;
            case "Rangers":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0032a0";
                  letterColor = "white";
                  break;
            case "Real Garcilaso":
                  nomeAtual = time;
                  escudo = "RealGarcilaso";
                  backgroundColor = "#0197ee";
                  letterColor = "#fdf21c";
                  break;
            case "Red Bull Brasil":
                  nomeAtual = time;
                  escudo = "RedBullBrasil";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Reggina":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#841230";
                  letterColor = "white";
                  break;
            case "Remo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#161923";
                  letterColor = "white";
                  break;
            case "Resende":
                  nomeAtual = time;
                  if (ano >= 2020 || ano < 2024) {
                        escudo = "Resende2020";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Riachuelo-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#459A54";
                  letterColor = "white";
                  break;
            case "Rio Branco-AC":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Rio Branco-ES":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Rio Cricket":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#088a4e";
                  letterColor = "white";
                  break;
            case "Rio Negro-AM":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Rio Preto":
                  nomeAtual = time;
                  escudo = "RioPreto";
                  backgroundColor = "#00923f";
                  letterColor = "white";
                  break;
            case "River-PI":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "River-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "River Plate":
                  nomeAtual = time;
                  if (ano < 2020) {
                        escudo = "RiverPlate2022";
                  } else {
                        escudo = "RiverPlate";
                  }
                  backgroundColor = "white";
                  letterColor = "#d30a11";
                  break;
            case "River Plate-SE":
                  nomeAtual = time;
                  escudo = "RiverPlate-SE";
                  backgroundColor = "white";
                  letterColor = "#d30a11";
                  break;
            case "River Plate-URU":
                  nomeAtual = time;
                  escudo = "RiverPlate-URU";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Robinhood":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Roma":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#a61d37";
                  letterColor = "#f6821f";
                  break;
            case "Romênia":
                  nomeAtual = time;
                  if (ano < 2017) {
                        escudo = "Romênia2017";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#fde900";
                  letterColor = "#003a94";
                  break;
            case "Rosario Central":
                  nomeAtual = time;
                  escudo = "RosarioCentral";
                  backgroundColor = "#003a94";
                  letterColor = "#ffcc00";
                  break;
            case "Salernitana":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#831d1c";
                  letterColor = "#f7b617";
                  break;
            case "Sampaio Corrêa":
                  nomeAtual = time;
                  escudo = "SampaioCorrêa";
                  backgroundColor = "#fde900";
                  letterColor = "#048439";
                  break;
            case "Sampaio Corrêa-RJ":
                  nomeAtual = time;
                  escudo = "SampaioCorrêa-RJ";
                  backgroundColor = "#00479c";
                  letterColor = "#ffc413";
                  break;
            case "San José":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "San Lorenzo":
                  nomeAtual = time;
                  escudo = "SanLorenzo";
                  backgroundColor = "#c40215";
                  letterColor = "#0a2240";
                  break;
            case "Santa Cruz":
                  nomeAtual = time;
                  escudo = "SantaCruz";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Santiago Wanderers":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#137049";
                  letterColor = "white";
                  break;
            case "Santos":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Santo André":
                  nomeAtual = time;
                  escudo = "SantoAndré";
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "São Bernardo":
                  nomeAtual = time;
                  if (ano < 2020) {
                        escudo = "SãoBernardo2020";
                  } else {
                        escudo = "SãoBernardo";
                  }
                  backgroundColor = "#ffdd00";
                  letterColor = "black";
                  break;
            case "São Bento":
                  nomeAtual = time;
                  escudo = "SãoBento";
                  backgroundColor = "#0067ab";
                  letterColor = "white";
                  break;
            case "São Caetano":
                  nomeAtual = time;
                  escudo = "SãoCaetano";
                  backgroundColor = "#212568";
                  letterColor = "white";
                  break;
            case "São Cristóvão":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "#dd8aaf";
                  break;
            case "São José-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "São Paulo":
                  nomeAtual = time;
                  escudo = "SãoPaulo";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "São Raimundo-AM":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "São Raimundo-PA":
                  nomeAtual = time;
                  escudo = "SãoRaimundo-PA";
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "São Raimundo-RR":
                  nomeAtual = time;
                  escudo = "SãoRaimundo-RR";
                  backgroundColor = "#013fae";
                  letterColor = "white";
                  break;
            case "Saprissa":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#7b123d";
                  letterColor = "white";
                  break;
            case "SC Americano-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "SC Brasil":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Vietnã":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#fde900";
                  break;
            case "Seattle Sounders":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#2dc84d";
                  letterColor = "#0033a0";
                  break;
            case "Sergipe":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Serrano-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#123293";
                  letterColor = "white";
                  break;
            case "Servette":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#85142b";
                  letterColor = "white";
                  break;
            case "Sevilla":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Shandong Luneng":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ff6600";
                  letterColor = "white";
                  break;
            case "Shonan Bellmare": case "Hiratsuka Bellmare":
                  nomeAtual = "Shonan Bellmare";
                  escudo = time;
                  backgroundColor = "#65b721";
                  letterColor = "#0b408d";
                  break;
            case "Síria":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Sobradinho":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "yellow";
                  break;
            case "Sol de America":
                  nomeAtual = time;
                  escudo = "SoldeAmerica";
                  backgroundColor = "#075798";
                  letterColor = "white";
                  break;
            case "Spartak Trnava":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Sport":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Sporting":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#186e45";
                  letterColor = "white";
                  break;
            case "Sporting Cristal":
                  nomeAtual = time;
                  escudo = "SportingCristal";
                  backgroundColor = "#0d80bf";
                  letterColor = "white";
                  break;
            case "Sporting de Gijón":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Stabaek":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#002c5a";
                  letterColor = "white";
                  break;
            case "Stafa":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Syrio e Libanez":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Talleres":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#040d2d";
                  letterColor = "white";
                  break;
            case "Taubaté":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Tigres do Brasil":
                  nomeAtual = time;
                  escudo = "TigresdoBrasil";
                  backgroundColor = "#fde900";
                  letterColor = "#048439";
                  break;
            case "Tiradentes-PI":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#415DA6";
                  letterColor = "#fde900";
                  break;
            case "Tolima":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#871518";
                  letterColor = "#e6bc15";
                  break;
            case "Toluca":
                  nomeAtual = time;
                  if (ano < 2003) {
                        escudo = "Toluca2002";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Tombense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Transvaal":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#1e5e3c";
                  letterColor = "white";
                  break;
            case "Treze":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "The Strongest":
                  nomeAtual = time;
                  escudo = "TheStrongest";
                  backgroundColor = "#ffcc00";
                  letterColor = "black";
                  break;
            case "Tupi":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Ujpest":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#4D2E7A";
                  letterColor = "white";
                  break;
            case "UNAM Pumas":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#172344";
                  letterColor = "#C6AC64";
                  break;
            case "União da Madeira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffef02";
                  letterColor = "#3535a9";
                  break;
            case "União São João":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "União Soviética":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#fde900";
                  break;
            case "Unión":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Unión Española":
                  nomeAtual = time;
                  escudo = "UniónEspañola";
                  backgroundColor = "#d30a11";
                  letterColor = "yellow";
                  break;
            case "Unión La Calera":
                  nomeAtual = time;
                  escudo = "UniónLaCalera";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Universidad Autónoma":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#ffe700";
                  break;
            case "Universidad Católica":
                  nomeAtual = time;
                  escudo = "UniversidadCatólica";
                  backgroundColor = "#1958a8";
                  letterColor = "white";
                  break;
            case "Universidad de Chile":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#1f3c94";
                  letterColor = "white";
                  break;
            case "Universitario":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#8c1619";
                  letterColor = "#fefcf3";
                  break;
            case "Uruguai":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0d80bf";
                  letterColor = "black";
                  break;
            case "Uruguai Sub-20":
                  nomeAtual = time;
                  escudo = "Uruguai";
                  backgroundColor = "#0d80bf";
                  letterColor = "black";
                  break;
            case "Valencia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d77000";
                  letterColor = "white";
                  break;
            case "Vasco":
                  nomeAtual = time;
                  if (ano < 1920) {
                        escudo = "Vasco1903";
                  } else if (ano >= 1920 && ano < 1980) {
                        escudo = "Vasco1920";
                  } else if (ano >= 1980 && ano < 2021) {
                        escudo = "Vasco1980";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Vélez Sarsfield":
                  nomeAtual = time;
                  escudo = "VélezSarsfield";
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Veracruz":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#252160";
                  break;
            case "Viking":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#28016c";
                  letterColor = "white";
                  break;
            case "Vila Nova":
                  nomeAtual = time;
                  escudo = "VilaNova";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Villa Isabel":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Vitória":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Vitória de Guimarães":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Vitória-ES":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#002b7b";
                  letterColor = "white";
                  break;
            case "Volta Redonda":
                  nomeAtual = time;
                  escudo = "VoltaRedonda";
                  backgroundColor = "#fde900";
                  letterColor = "black";
                  break;
            case "Votuporanguense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Werder Bremen":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#009655";
                  letterColor = "white";
                  break;
            case "West Ham":
                  nomeAtual = time;
                  if (ano <= 1991) {
                        escudo = "WestHam1991";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#7c2c3b";
                  letterColor = "white";
                  break;
            case "XV de Piracicaba":
                  nomeAtual = time;
                  escudo = "XVdePiracicaba";
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Júbilo Iwata": case "Yamaha": case "Júbilo Iwata (Yamaha)":
                  nomeAtual = "Júbilo Iwata (Yamaha)";
                  escudo = time;
                  backgroundColor = "#659ad2";
                  letterColor = "white";
                  break;
            case "Young Boys":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffd100";
                  letterColor = "black";
                  break;
            case "Ypiranga":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fff100";
                  letterColor = "#00923e";
                  break;
            case "Costa do Marfim":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ec6e00";
                  letterColor = "#007155";
                  break;
            case "Costa Rica":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Costa Rica Sub-20":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            default:
                  nomeAtual = time;
                  escudo = "escudo";
                  backgroundColor = "grey";
                  letterColor = "white";
                  break;
      }
      return {
            nomeAtual: nomeAtual,
            escudo: escudo,
            backgroundColor: backgroundColor,
            letterColor: letterColor
      }
}

export default Times;