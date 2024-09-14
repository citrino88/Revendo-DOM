/* *******  REVISÃO DOS DIAS ANTERIORES  *********

const titulo = document.querySelector('#tituloPrincipal');

titulo.textContent = 'Teste Dom';
titulo.style.backgroundColor = 'red';

titulo.addEventListener('dblclick', ()=> alert('teste') ); //dbl = double click
// mouseleave, quando sai 


 */

/* ----------------
do HTML: Nós de atributos
   ---------------- */

const titulo = document.querySelector('#titulo');
const resposta = document.querySelector('#respostaAtributo');

function pegarClasse() {
    resposta.textContent = titulo.getAttribute('class');
}

const btnClasse = document.querySelector('#pegarClasse'); // Encontrando o botão no DOM
btnClasse.addEventListener('click', pegarClasse); // Adicionando evento click