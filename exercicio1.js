// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
const calcButtonEl = document.querySelector('#calcular');
const constanteEL = document.querySelector('#constante');
const massa1El = document.querySelector('#massa1');
const massa2El = document.querySelector('#massa2');
const distanciaEL = document.querySelector('#distancia');
const resultadoEl = document.querySelector('#resultado');

calcButtonEl.addEventListener('click', calcGravitationalForce);

function calcGravitationalForce(){
    const constante = constanteEL.value;
    const massa1 = massa1El.value;
    const massa2 = massa2El.value;
    const distancia = distanciaEL.value;

    resultadoEl.value = (constante * massa1 * massa2)/(distancia ** 2); 
}