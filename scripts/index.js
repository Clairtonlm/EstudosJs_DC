/* Função que marca o jogo*/
let gammer = "X"
function winner(){

}
function mark(element){//mark é uma função

   if(element.innerText.length === 0){
    element.innerText= gammer;// innerTex é uma propriedade

    winner();

    if(gammer === "X") {
        gammer = "O";
    }else{
        gammer = "X";
    }

}
}