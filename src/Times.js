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
            case "Água Santa":
                  nomeAtual = time;
                  escudo = "ÁguaSanta";
                  backgroundColor = "#153160";
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
            case "Altos-PI":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#01904e";
                  letterColor = "white";
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
            case "Atlético-PR": case "Athletico-PR":
                  nomeAtual = "Athletico-PR";
                  if (time === "Atlético-PR") {
                        escudo = "Atlético-PR";
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
                  if(ano < 2022){
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
            case "Barcelona de Guayaquil":
                  nomeAtual = time;
                  escudo = "BarcelonadeGuayaquil";
                  backgroundColor = "#fde900";
                  letterColor = "#055daa";
                  break;
            case "Benfica":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Boa Esporte":
                  nomeAtual = time;
                  escudo = "BoaEsporte";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Boavista":
                  nomeAtual = time;
                  escudo = time;
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
            case "Boston River":
                  nomeAtual = time;
                  escudo = "BostonRiver";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Botafogo":
                  nomeAtual = time;
                  if(ano < 1942){
                        escudo = "Botafogo1942";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Botafogo-SP":
                  nomeAtual = time;
                  if(ano < 2021){
                        escudo = "Botafogo-SP2021";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
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
            case "Caldense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#096943";
                  letterColor = "white";
                  break;
            case "Campinense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
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
            case "Cerro Porteño":
                  nomeAtual = time;
                  escudo = "CerroPorteño";
                  backgroundColor = "#c40215";
                  letterColor = "white";
                  break;
            case "Chapecoense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00913c";
                  letterColor = "white";
                  break;
            case "Charlton Athletic":
                  nomeAtual = time;
                  escudo = "CharltonAthletic";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Chile":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
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
                  letterColor = "black";
                  break;
            case "Confiança":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Corinthians":
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
            case "Cuiabá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#018036";
                  letterColor = "white";
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
            case "Democrata":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Deportivo Lara":
                  nomeAtual = time;
                  escudo = "DeportivoLara";
                  backgroundColor = "#e30613";
                  letterColor = "black";
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
            case "Emelec":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Estudiantes":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Ferroviária":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#511a1d";
                  letterColor = "white";
                  break;
            case "Figueirense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Flamengo":
                  nomeAtual = time;
                  if(ano < 2018){
                        escudo = "Flamengo2018";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#A80000";
                  letterColor = "white";
                  break;
            case "Floresta-CE":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#87c53f";
                  letterColor = "#036c3c";
                  break;
            case "Fluminense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#9f022f";
                  letterColor = "white";
                  break;
            case "Fortaleza":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#11519b";
                  letterColor = "white";
                  break;
            case "Friburguense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Goiás":
                  nomeAtual = time;
                  if(ano < 2019){
                        escudo = "Goiás2019";
                  } else if(ano >= 2019 && ano <= 2020){
                        escudo = "Goiás2020";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#006437";
                  letterColor = "white";
                  break;
            case "Grêmio":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0d80bf";
                  letterColor = "white";
                  break;
            case "Grêmio Barueri":
                  nomeAtual = time;
                  escudo = "GrêmioBarueri";
                  backgroundColor = "#f6e815";
                  letterColor = "#003c6e";
                  break;
            case "Guarani":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Honduras":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#075798";
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
                  if(ano < 2019){
                        escudo = "IndependienteDelValle2019";
                  } else {
                        escudo = "IndependienteDelValle";
                  }
                  backgroundColor = "#fb37b9";
                  letterColor = "white";
                  break;
            case "Independiente Santa Fé":
                  nomeAtual = time;
                  escudo = "IndependienteSantaFé";
                  backgroundColor = "#d30a11";
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
                  if(ano < 2009){
                        escudo = "Internacional2009";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Ituano":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
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
            case "LDU":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "#003a94";
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
            case "Madureira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "#13007c";
                  break;
            case "Mesquita":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Millonarios":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Mirassol":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffec00";
                  letterColor = "#00722c";
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
            case "Montevideo Wanderers":
                  nomeAtual = time;
                  escudo = "MontevideoWanderers";
                  backgroundColor = "white";
                  letterColor = "black";
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
            case "Náutico":
                  nomeAtual = time;
                  if(ano < 2008){
                        escudo = "Náutico2008";
                  } else {
                        escudo = time;
                  }
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
            case "Once Caldas":
                  nomeAtual = time;
                  escudo = "OnceCaldas";
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Operário":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Oriente Petrolero":
                  nomeAtual = time;
                  escudo = "OrientePetrolero";
                  backgroundColor = "#007c3a";
                  letterColor = "white";
                  break;
            case "Palmeiras":
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
            case "Paulista":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Paysandu":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0091cf";
                  letterColor = "white";
                  break;
            case "Peñarol":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fdca01";
                  letterColor = "black";
                  break;
            case "Petrolina":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#f5182e";
                  letterColor = "white";
                  break;
            case "Ponte Preta":
                  nomeAtual = time;
                  escudo = "PontePreta";
                  backgroundColor = "white";
                  letterColor = "black";
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
            case "Quissamã":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
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
            case "Remo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#161923";
                  letterColor = "white";
                  break;
            case "Resende":
                  nomeAtual = time;
                  if(ano < 2020){
                        escudo = "Resende2020";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Rio Preto":
                  nomeAtual = time;
                  escudo = "RioPreto";
                  backgroundColor = "#00923f";
                  letterColor = "white";
                  break;
            case "River Plate":
                  nomeAtual = time;
                  if(ano < 2020){
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
            case "Rosario Central":
                  nomeAtual = time;
                  escudo = "RosarioCentral";
                  backgroundColor = "#003a94";
                  letterColor = "#ffcc00";
                  break;
            case "Sampaio Corrêa":
                  nomeAtual = time;
                  escudo = "SampaioCorrêa";
                  backgroundColor = "#fde900";
                  letterColor = "#048439";
                  break;
            case "San Lorenzo":
                  nomeAtual = time;
                  escudo = "SanLorenzo";
                  backgroundColor = "#c40215";
                  letterColor = "white";
                  break;
            case "Santa Cruz":
                  nomeAtual = time;
                  escudo = "SantaCruz";
                  backgroundColor = "#d30a11";
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
                  if(ano < 2020){
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
            case "São Paulo":
                  nomeAtual = time;
                  escudo = "SãoPaulo";
                  backgroundColor = "#d30a11";
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
            case "Shandong Luneng":
                  nomeAtual = time;
                  escudo = "ShandongLuneng";
                  backgroundColor = "#ff6600";
                  letterColor = "white";
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
            case "Sport":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Sporting Cristal":
                  nomeAtual = time;
                  escudo = "SportingCristal";
                  backgroundColor = "#0d80bf";
                  letterColor = "white";
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
            case "Tolima":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#871518";
                  letterColor = "#e6bc15";
                  break;
            case "Tombense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
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
            case "Universidad Católica":
                  nomeAtual = time;
                  escudo = "UniversidadCatólica";
                  backgroundColor = "#1958a8";
                  letterColor = "white";
                  break;
            case "Uruguai":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0d80bf";
                  letterColor = "white";
                  break;
            case "Vasco":
                  nomeAtual = time;
                  if(ano < 2021){
                        escudo = "Vasco2021";
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
            case "Vila Nova":
                  nomeAtual = time;
                  escudo = "VilaNova";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Vitória":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
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
            case "XV de Piracicaba":
                  nomeAtual = time;
                  escudo = "XVdePiracicaba";
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            default:
                  nomeAtual = "time";
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