function descripto(){
	inicialDiv.style.display='none';
	divResultado.style.display='block';

	var value = texto.value;
	var descriptografado = value.replaceAll('enter', 'e')
	.replaceAll('imes', 'i')
	.replaceAll('ai', 'a')
	.replaceAll('ober', 'o')
	.replaceAll('ufat', 'u');
	valor.value = descriptografado;

	var minusculas = descriptografado.toLowerCase();

	if(descriptografado == ''){
		inicialDiv.style.display='block';
		divResultado.style.display='none';
	}else if(descriptografado == minusculas){
		valor.value = descriptografado;
	}else{
		valor.value = 'Apenas letras minúsculas e sem acento.';
	}
}