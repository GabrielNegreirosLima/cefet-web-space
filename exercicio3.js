// Faça o exercício dos PARÁGRAFOS aqui

let buttons = document.querySelectorAll('.botao-expandir-retrair');

buttons.forEach(function(buttonEl){
    buttonEl.addEventListener('click', function(e){
        let paragraphEl = e.currentTarget.parentNode;
        paragraphEl.classList.toggle('expandido');
    });
});