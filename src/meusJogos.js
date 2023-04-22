class meusJogos {
    meusJogosArray = [];

    getJogos() {
        return this.meusJogosArray;
    }

    adicionaJogo(x) {
        if (!this.meusJogosArray.includes(x)) {
            this.meusJogosArray.push(x);
        }
    }

    removeJogo(x) {
        for (let a = 0; a < this.meusJogosArray.length; a++) {
            if (this.meusJogosArray[a][0] === x[0] &&
                this.meusJogosArray[a][1] === x[1] &&
                this.meusJogosArray[a][2] === x[2] &&
                this.meusJogosArray[a][3] === x[3] &&
                this.meusJogosArray[a][4] === x[4] &&
                this.meusJogosArray[a][5] === x[5] &&
                this.meusJogosArray[a][6] === x[6]) {
                this.meusJogosArray.splice(a, 1);
                return;
            }
        }
    }
}
export default meusJogos;