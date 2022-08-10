function copiar(){
    const botao = document.querySelector('.botao-copiar');
    const resultado = document.querySelector('#valor').value;

    navigator.clipboard.writeText(resultado)
    botao.classList.add('clicado');
	botao.innerText = 'Copiado';
    
    setInterval(()=>{
        botao.classList.remove('clicado')
        botao.innerText = 'Copiar';
    }, 3000);
}
