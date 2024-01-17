window.addEventListener('DOMContentLoaded', () =>
{
	const lucro = document.querySelector('#lucro');
	const investimento = document.querySelector('#investimento');
	const retorno = document.querySelector('#retorno');
	const quantidadeDeUSD = document.querySelector('#quantidadeDeUSD');
	const precoDaCompra = document.querySelector('#precoDaCompra');
	const taxaDaCompra = document.querySelector('#taxaDaCompra');
	const precoDaVenda = document.querySelector('#precoDaVenda');
	const taxaBinance = document.querySelector('#taxaBinance');
	const inputs = document.querySelectorAll('input');



	const app = () =>
	{

		inputs.forEach(input => 
		{
			input.addEventListener('input', () =>
			{
				let inv = (
				    (quantidadeDeUSD.value * precoDaCompra.value) + 
				    ((quantidadeDeUSD.value * precoDaCompra.value) * (taxaDaCompra.value / 100))
				);

				investimento.innerHTML = 'Inv: ' + inv.toLocaleString('pt', {
													    style: 'decimal',
													    minimumFractionDigits: 2,
													    maximumFractionDigits: 2,
													}) + ' KZ';

				let ret = (
				    (quantidadeDeUSD.value - ((quantidadeDeUSD.value * taxaBinance.value / 100))) * precoDaVenda.value
				);


				retorno.innerHTML = 'Ret: ' + ret.toLocaleString('pt', {
													    style: 'decimal',
													    minimumFractionDigits: 2,
													    maximumFractionDigits: 2,
													}) + ' KZ';


				lucro.innerHTML = 'KZ ' + (ret - inv).toLocaleString('pt', {
													    style: 'decimal',
													    minimumFractionDigits: 2,
													    maximumFractionDigits: 2,
													});
				
			})
		})


		
	}

	setInterval(app, 100);
})