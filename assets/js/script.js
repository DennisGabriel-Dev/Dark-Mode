const botao = document.querySelector('#btn');
const area = document.querySelector('#area');
const texto = document.querySelector('#area h1');
function ativarTema(){ 
    area.classList.remove('tema-default');
    area.classList.add('tema-black');
    botao.textContent = 'DESATIVAR';
    texto.textContent = 'Dark Mode ON';
}

function desativarTema(){
    area.classList.remove('tema-black');
    area.classList.remove('tema-default');
    botao.textContent = 'ATIVAR';
    texto.textContent = 'Dark Mode OFF';
    }

function mudaTema(){
    if(area.classList.toggle('.tema-black')){
        ativarTema();
    
    }else{
        desativarTema();
    }
}
