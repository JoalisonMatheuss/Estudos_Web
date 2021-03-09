//var nome = prompt("qual seu nome");

//document.write("esse teste");

/* Mudando elementos da DIV
function trocarDiv(nome){
    var area = document.getElementById("area");
    var texto = prompt("Qual o seu sobrenome ?");

    area.innerHTML = nome + " " +texto;
}


 Manipulando lista
function adicionarIngrediente() {
    var ing = document.getElementById("ingrediente").value;
    var listahtml = document.getElementById("lista").innerHTML; //conteudo atual

    listahtml = listahtml + "<li>"+ing+"</li>"; //adiciona mais

    document.getElementById("lista").innerHTML = listahtml; //e coloca na lista
}



function somar(){
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);
    
    var soma = campo1 + campo2;

    alert(soma);
}


var x = 0;
while(x < 10){
    document.write("Número: "+x+"<br/>")
    x++;
}

for(var y = 0; y < 10; y++){
    document.write("Numeros: "+y+"<br/>");
}

z = prompt("Digite um número");

switch(z) {
    case "0":
        alert("z é o 0");
        break;
    case "1":
        alert("z é 1");
        break;
    case "2":
        alert("x vai se 2");
        break;
    default:
        alert("Ninguem foi satisteito!");
        break;
}

*/

function verificar(){
    var n1 = document.getElementById("n1").innerHTML;
    var n2 = document.getElementById("n2").value;

    if (n1 == n2){
        alert("Você acertou o número");
    }
    else {
        alert ("Você errou!!");
    }

    resetar();
}

function resetar(){
    document.getElementById("n2").value = "";

    var r = Math.floor(Math.random() * 100);
    document.getElementById("n1").innerHTML = r;
}