const texto = document.querySelector('#texto');
const valor = document.querySelector('#valor');
const inicialDiv = document.querySelector('#div-inicial');
const divResultado = document.querySelector('#resultado');

function cripto(){
	inicialDiv.style.display='none';
	divResultado.style.display='block';

	var value = texto.value;
	var criptografado = value.replaceAll('e', 'enter')
	.replaceAll('i', 'imes')
	.replaceAll('a', 'ai')
	.replaceAll('o', 'ober')
	.replaceAll('u', 'ufat');
	valor.value = criptografado;
	
	var minusculas = criptografado.toLowerCase();

	if(criptografado == '' ){
		inicialDiv.style.display='block';
		divResultado.style.display='none';
	}else if (criptografado == minusculas){
		valor.value = criptografado;
	}else{
		valor.value = 'Apenas letras minúsculas e sem acento.';
	}
}