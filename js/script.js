/* *******  REVISÃO DOS DIAS ANTERIORES  *********

const titulo = document.querySelector('#tituloPrincipal');

titulo.textContent = 'Teste Dom';
titulo.style.backgroundColor = 'red';

titulo.addEventListener('dblclick', ()=> alert('teste') ); //dbl = double click
// mouseleave, quando sai 


 */

/* ----------------
do HTML: Nós de atributos
    >> pegarClasse, usando evento com botão
   ---------------- */

const titulo = document.querySelector('#titulo');
const resposta = document.querySelector('#respostaAtributo');

function pegarClasse() {
    resposta.textContent = titulo.getAttribute('class');
}

const btnClasse = document.querySelector('#pegarClasse'); // Encontrando o botão no DOM
btnClasse.addEventListener('click', pegarClasse); // Adicionando evento click


/* >> verificarClasse, usando evento com botão
   ---------------- */

function verificar() {
    resposta.textContent = titulo.hasAttribute('class');
}  

const btnVerificar = document.querySelector('#verificarClasse');
btnVerificar.addEventListener('click', verificar);

/* >> trocarClasse, usando evento com botão
   ---------------- */

function trocar() {
    titulo.setAttribute('class', 'tituloFundoRosa');
} 

const btnTrocar = document.querySelector('#trocarClasse');
btnTrocar.addEventListener('click', trocar);
   
/* >> variarClasse, usando evento com botão
   ---------------- */   

function variar()   {
    
    titulo.classList.add('tituloVermelho');
}

const btnVariar = document.querySelector('#variarClasse');
btnVariar.addEventListener('click', variar);