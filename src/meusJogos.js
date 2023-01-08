class meusJogos {
    meusJogosArray = [];

    getJogos(){
        return this.meusJogosArray;
    }

    adicionaJogo(x){
        this.meusJogosArray.push(x);
    }

    removeJogo(x){
        for(var a = 0; a < this.meusJogosArray.length; a++){
            if(this.meusJogosArray[a][5] === x[5]){
                this.meusJogosArray.splice(a, 1);
                return;
            }
        }
    }
}
export default meusJogos;