const titulo = document.querySelector('#titulo');
const respostaAtributo = document.querySelector('#respostaAtributo');

function pegarClasse(){
    
    respostaAtributo.innerText= `${titulo.getAttribute('class')}`;
    
}

const btnClasse = document.querySelector('#pegarClasse');
btnClasse.addEventListener('click', pegarClasse);


function verificarClasse(){
        
    respostaAtributo.innerText= `${titulo.hasAttribute('class')}`;
    
}

const btnVerificar = document.querySelector('#verificarClasse');
btnVerificar.addEventListener('click', verificarClasse);

function trocarClasse(){
        
   titulo.setAttribute('class', 'tituloFundoRosa');
    
}

const btnTrocar = document.querySelector('#trocarClasse');
btnTrocar.addEventListener('click', trocarClasse);

function variarClasse(){
        
    //titulo.removeAttribute('class');
    titulo.classList.toggle('tituloVermelho');
 }
 
 const btnVariarAtributo = document.querySelector('#variarClasse');
 btnVariarAtributo.addEventListener('click', variarClasse);
 
 /* LAMPADA */ 

 var estado = 'apagada';

 function variar(){

    const lampada = document.querySelector('#lampada');
    const body = document.querySelector('body');
    
    if(estado == 'apagada'){

        lampada.setAttribute('src','../midia/img/acesa.png');
        estado='acesa';
        btnVariar.textContent = 'Apagar';
        body.classList.toggle('acesa');

    }else{

        lampada.setAttribute('src','../midia/img/apagada.png');
        estado = 'apagada';
        btnVariar.textContent = 'Acender';
        body.classList.toggle('acesa');
    }

 }

 const btnVariar = document.querySelector('#variar');
 btnVariar.addEventListener('click', variar);

 /* JOkENPO */

const tesoura = document.querySelector('#tesoura');
const papel = document.querySelector('#papel');
const pedra = document.querySelector('#pedra');
const resposta = document.querySelector('#respostaJokenpo');

var computador = Math.round(Math.random()*10);


function escolheuTesoura(){
    pedra.removeAttribute('class');
    papel.removeAttribute('class');

    computador = Math.round(Math.random()*10);
    
    if(computador <= 3){
        resposta.innerHTML='<img src="../midia/img/jokenpo/tesoura.png" width="50">';
        resposta.setAttribute('class', 'empate');
        tesoura.setAttribute('class', 'empate');
    } else if(computador <= 6){
        resposta.innerHTML='<img src="../midia/img/jokenpo/pedra.png" width="50">';
        resposta.setAttribute('class', 'ganhou');
        tesoura.setAttribute('class', 'perdeu');
    }else{ 
        resposta.innerHTML='<img src="../midia/img/jokenpo/papel.png" width="50">';
        resposta.setAttribute('class', 'perdeu');
        tesoura.setAttribute('class', 'ganhou');
    }

}

function escolheuPedra(){
    tesoura.removeAttribute('class');
    papel.removeAttribute('class');

    computador = Math.round(Math.random()*10);

    if(computador <= 3){
        resposta.innerHTML='<img src="../midia/img/jokenpo/tesoura.png" width="50">';
        resposta.setAttribute('class', 'perdeu');
        pedra.setAttribute('class', 'ganhou');
    } else if(computador <= 6){
        resposta.innerHTML='<img src="../midia/img/jokenpo/pedra.png" width="50">';
        resposta.setAttribute('class', 'empate');
        pedra.setAttribute('class', 'empate');
    }else{ 
        resposta.innerHTML='<img src="../midia/img/jokenpo/papel.png" width="50">';
        resposta.setAttribute('class', 'ganhou');
        pedra.setAttribute('class', 'perdeu');
    }

}

function escolheuPapel(){
    tesoura.removeAttribute('class');
    pedra.removeAttribute('class');

    computador = Math.round(Math.random()*10);

    if(computador <= 3){
        resposta.innerHTML='<img src="../midia/img/jokenpo/tesoura.png" width="50">';
        resposta.setAttribute('class', 'ganhou');
        papel.setAttribute('class', 'perdeu');
    } else if(computador <= 6){
        resposta.innerHTML='<img src="../midia/img/jokenpo/pedra.png" width="50">';
        resposta.setAttribute('class', 'perdeu');
        papel.setAttribute('class', 'ganhou');
    }else{ 
        resposta.innerHTML='<img src="../midia/img/jokenpo/papel.png" width="50">';
        resposta.setAttribute('class', 'empate');
        papel.setAttribute('class', 'empate');
    }

}


tesoura.addEventListener('click', escolheuTesoura);
pedra.addEventListener('click', escolheuPedra);
papel.addEventListener('click', escolheuPapel);