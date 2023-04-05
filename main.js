document.addEventListener("click" , showcolor );

document.getElementById("botao").addEventListener("click", exibenome);

document.getElementById("btn-soma").addEventListener("click" , soma);

document.getElementById("btn-divisao").addEventListener("click" , divisao);
function showcolor()
{
    document.body.style.backgroundColor = "red";
    
}
function exibenome()
{
    let usuario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerHTML = "Meu nome é:" + usuario;
    document.getElementById("nome").value = "";
}

function soma()
{
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML = parseFloat(numero1) + parseFloat(numero2);
}
function divisao()
{
    let numero3 = document.getElementById("num3").value;
    let numero4 = document.getElementById("num4").value;
    document.getElementById("resultado2").innerHTML = parseFloat(numero3) / parseFloat(numero4);
}