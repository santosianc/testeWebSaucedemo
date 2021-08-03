#language: pt
@Login @End2End
Funcionalidade: Login

	Contexto:
		Dado que o usuario esteja na pagina principal do sistema
	
	@RealizarLogin @SmokeTest	
	Esquema do Cenario: Realizar Login com Sucesso
		Quando informar o campo Usarname como "<usuario>"
		E informar o campo Passworld como "<senha>"
		E clicar no botao Login
		Entao o sistema devera autorizar o login, exibindo a pagina Products.	
		Quando clicar no botao Add To Cart do produto Sauce Labs Backpack
		E clicar no produto com nome Sauce Labs Onesie
		Quando clicar no botao add to cart 
		E apertar no botao back to products
		Quando clicar no botao Remove do produto com nome Sauce Labs Backpack
		E clicar no botao carrinho 
		Quando clicar no botao continue checkout
		Quando informar o campo First Name como "<nome>"
		E informar o campo Last Name como "<sobrenome>"
		E informar o campo Zip/Postal Code como "<CEP>"
		E clicar no botao continue
		E clicar no botao finish
		Entao deve ser apresentada a mensagem de sucesso "<mensagemDeSucesso>" 


		
	Exemplos:
		|usuario			|senha			 |nome	|sobrenome|CEP		 | mensagemDeSucesso 																																			 |
		|standard_user|secret_sauce|Jamili|Suassuna |73040100| Your order has been dispatched, and will arrive just as fast as the pony can get there! |

	
	