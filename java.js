// nome do jogador
let nome = document.getElementById('nome')

let trocar;
trocar = document.querySelector('.jogador')
trocar_nome = () => {
    trocar.innerHTML = ""
    trocar.innerHTML += "<p>" + nome.value + "</p>";
}


let input = document.getElementById('inputnumero');
let botao1 = document.getElementById('btncomecar');
let botao2 = document.getElementById('btnchutar');
let select_intervalo = document.getElementById('intervalo');
let tentativas = document.getElementById('tentativas');
let chances = document.querySelector('.chances');
let tentativas1 = 3;

let valor;
// dificuldades
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


// numero de chances
let numero = document.getElementById('numero')
console.log(numero);
const resposta = () =>{

    tentativas1--

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

    if (tentativas1 >= 1) {
        chances.innerHTML = '<p>' + 'Você ainda tem ' + tentativas1 + ' tentativas!' + '</p>'
    }
    else{
        chances.innerHTML = '<p>' + 'Suas tentativas acabam! Por favor reinicie o jogo.' + '</p>'}
}
botao2.addEventListener('click', resposta)