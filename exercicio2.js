// Faça o exercício da GALERIA DE IMAGENS aqui

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/osiris';
const imagens = [
    {
      arquivo: 'modelo-artistico-da-sonda.webp',
      descricao: 'Imagem em 3D mostrando a sonda tocando um asteróide. ' +
        'A sonda tem forma de caixa com dois painéis solares em suas ' +
        'laterais e, na parte de baixo, um pequeno braço sai e encosta ' +
        'no asteróide'
    },
    {
      arquivo: 'lancamento-atlas-v-em-2017.webp',
      descricao: 'Foto de foguete na vertical no momento de seu ' +
        'lançamento. Ele possui bandeiras da NASA, dos EUA e da empresa ' +
        'ULA e está com o motor sendo ligado, saindo fogo e fumaça'
    },
    {
      arquivo: 'distanciamento-da-sonda-da-terra.webp',
      descricao: 'Foto do espaço quase toda preta mostrando a Terra bem ' +
        'pequena no canto esquerdo e, no canto direito, a lua ainda menor'
    },
    {
      arquivo: 'aproximacao-da-sonda-ao-bennu-em-2018.webp',
      descricao: 'Foto do espaço mostrando o asteróide Bennu que tem ' +
        'a forma de um paralelepípedo com base losangular aproximadamente ' +
        'e a superfície acinzentada'
    },
    {
      arquivo: 'local-de-pouso.webp',
      descricao: 'Foto do local de pouso da sonda Osiris-Rex no ' +
        'asteróide Bennu mostrando uma pequena clareira em um ' +
        'terreno bem acidentado, com muitas pedras. No centro há ' +
        'um desenho no formato da sonda'
    },
    {
      arquivo: 'touch-and-go-e-detritos-suspensos-em-2020.webp',
      descricao: 'Foto do asteróide Bennu com vários regolitos (pedras) ' +
        'sendo suspensos após a sonda ter encostado para coletar amostras ' +
        'da sua superfície'
    },
    {
      arquivo: 'sonda-distanciando-e-voltando-para-terra.webp',
      descricao: 'Foto do asteróide Bennu com ele retratado em ' +
        'menos da metade e com baixa iluminação, mostrando sua superfície ' +
        'acinzentada'
    }
  ];

let actualImage = 0;

const anteriorEl = document.querySelector('#anterior');
const proximoEl = document.querySelector('#proximo');
const slideEl = document.querySelector('#slide');

proximoEl.addEventListener('click', next);
anteriorEl.addEventListener('click', previous);

function next(){
  const decision = (actualImage+1)%imagens.length === 0;

  slideEl.src = decision ? 
                servidorDasImagens + '/' + imagens[0].arquivo :
                servidorDasImagens + '/' + imagens[actualImage+1].arquivo;
  slideEl.alt = decision ? imagens[0].descricao : imagens[actualImage+1].descricao;
  decision ? actualImage = 0 : actualImage++;
}

function previous(){
  const decision = actualImage === 0;

  slideEl.src = decision ? 
                servidorDasImagens + '/' + imagens[imagens.length-1].arquivo :
                servidorDasImagens + '/' + imagens[actualImage-1].arquivo;
  slideEl.alt = decision ? imagens[imagens.length-1].descricao : imagens[actualImage-1].descricao;
  decision ? actualImage = 6 : actualImage--;
}