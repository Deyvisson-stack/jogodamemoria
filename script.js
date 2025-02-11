const container = document.querySelector('.container');
const buttonReset = document.querySelector('button');
let cards;
let firstCard = '';
let secondCard = '';

const Itens = [
    { name: 'html', imagem: 'imagens/html.png' },
    { name: 'css', imagem: 'imagens/css.png' },
    { name: 'java', imagem: 'imagens/java.png' },
    { name: 'github', imagem: 'imagens/github.png' },
    { name: 'photoshop', imagem: 'imagens/photoshop.png' },
    { name: 'react', imagem: 'imagens/react.png' },
];
buttonReset.addEventListener('click', () => location.reload())
function createCards() {
    let itensDuplicates = [...Itens, ...Itens];

    let imagens = itensDuplicates.sort(() => Math.random() - 0.5);

    imagens.map(({ name, imagem }) => {
        container.innerHTML += `<div class="card" data-card=${name}>
      <div class="back">?</div>
      <div class="front">
      <img src=${imagem} width="120px" height="120px"/>
      </div>
      </div>`
    });
};
createCards();

function turnCard() {
    let Card = document.querySelectorAll('.card');
    Card.forEach((cards) => {
        cards.addEventListener('click', () => {
            if (firstCard == '') {
                cards.classList.add('card-front');
                firstCard = cards;
            } else if (secondCard == '') {
                cards.classList.add('card-front');
                secondCard = cards;
                checkCard();
            }
        })
    });

}
turnCard();

function checkCard() {
    const PrimeiraCarta = firstCard.getAttribute('data-card');
    const SegundaCarta = secondCard.getAttribute('data-card');
    let mensagemElemento = document.getElementById('message');

    if (PrimeiraCarta == SegundaCarta) {
        firstCard = '';
        secondCard = '';
        mensagemElemento.innerText = '🧠 Memória de elefante!';

        setTimeout(() => {
            if (mensagemElemento.innerText === '🧠 Memória de elefante!') {
                mensagemElemento.innerText = ''
            }
        }, 2000);

    } else {
        setTimeout(() => {
            firstCard.classList.remove('card-front');
            secondCard.classList.remove('card-front');
            firstCard = '';
            secondCard = '';
            mensagemElemento.innerText = '😂 Quase… Só que não!'

            setTimeout(() => {
                if (mensagemElemento.innerText === '😂 Quase… Só que não!') {
                    mensagemElemento.innerText = '';
                }

            }, 2000)

        }, 500)
    }
};


