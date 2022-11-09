function jogos() {
    var jogos = [];

    

    jogos.sort(function (a, b) {
        return a[5] < b[5] ? -1 : a[5] > b[5] ? 1 : 0;
    });
    return jogos;
}
export default jogos;