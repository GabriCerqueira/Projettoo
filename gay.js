
const fundo = document.getElementById("body");
let butaoo = document.getElementById("butao");
let validador = 0;




function cinza  (){
    fundo.style.backgroundColor = "purple";
        validador++;
};
function azul(){
    fundo.style.backgroundColor = "black";
    validador--;
    console.log(validador)

}
function mudarValidador(){
if(validador !== 1  ){
    cinza();

}
else{
    azul();
}
}

butaoo.addEventListener("click",azul) ;
butaoo.addEventListener("mouseover",mudarValidador) ;
console.log(validador)

    

