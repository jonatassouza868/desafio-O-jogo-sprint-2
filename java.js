let nome = document.getElementById('nome')

let trocar;
trocar = document.querySelector('.jogador')
trocar_nome = () => {
    trocar.innerHTML = ""
    trocar.innerHTML += "<p>" + nome.value + "</p>";
}


let input = document.getElementById('inputnumero')
let botao1 = document.getElementById('btncomecar')
let botao2 = document.getElementById('btnchutar')
let select_intervalo = document.getElementById('intervalo')
let tentativas = document.getElementById('tentativas')

let valor;

const dificuldade = () => {
    if (select_intervalo.value == 1) {
        valor = (Math.random() * 11).toFixed(0);
    }
    else if (select_intervalo.value == 2) {
        valor = (Math.random() * 51).toFixed(0);
    }
    else {
        valor = (Math.random() * 101).toFixed(0);
    }
    console.log(valor);
}
botao1.addEventListener('click', dificuldade)



let numero = document.getElementById('numero')
console.log(numero);
const resposta = () =>{
    if(input.value > valor){
        numero.innerHTML = 'O numero é menor'
    }
    else if(input.value < valor){
        numero.innerHTML = 'O numero é maior'
    }
    else{
        numero.innerHTML = 'Parabens você acertou!'
    }
    console.log(valor,'numero');
    console.log(input.value,'input');
}
botao2.addEventListener('click', resposta)