function calculaAbastecimento(){
	var capacidadeTanque = parseFloat(document.getElementById('capacidadeTanque').value);
	var consumoMedio = parseFloat(document.getElementById('consumoMedio').value);
	var distancia = parseFloat(document.getElementById('distancia').value);

	var qtdeComb = distancia/consumoMedio;
	var abastecimento = Math.ceil(qtdeComb/capacidadeTanque); 
	// Math.ceil arredonda para o próximo número inteiro já o Math.round arredonda para o número mais próximo
	//Ex Math.ceil(4.2)=5 / Math.round(4.2)=4
	
	document.getElementById('resultado').innerHTML = `<hr>
		<p><strong>Distância Percorrida      : ${distancia} km<br>
		<p>Litros Combustível        : ${qtdeComb.toFixed(2)} l<br>
		<p>Abastecimentos Necessários: ${abastecimento}</strong><br><hr>
		`;
}