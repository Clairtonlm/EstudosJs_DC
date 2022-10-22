/* Função que marca o jogo*/
let gammer = "X"

function winner(){
    let elements = document.getElementById("tabuleiro"). children;
    if( elements[0].innerText === elements[1].innerTexts && 
        elements[1].innerText === elements[2].innerText && 
        elements[0].innerText.length !== 0
        ){
           
           elements[0].style="background-color: blue;";
           elements[1].style="background-color: blue;";
           elements[2].style="background-color: blue;";
            

        }
        let x = 1;

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