package stepdefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.SaucePage;

public class SauceSteps {
	public static WebDriver driver;

	
	@Dado("^que o usuario esteja na pagina principal do sistema$")
	public void que_o_usuario_esteja_na_pagina_principal_do_sistema() throws Throwable {
		Hooks.abrirUrl("https://www.saucedemo.com/");
		driver = Hooks.getDriver();
	}
	
	@Dado("que usuario esteja logado$")
	public void que_usuario_esteja_logado() throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.preencherUsuario("standard_user");
		lp.preencherSenha("secret_sauce");
		lp.clicarBotaoLogin();
	}
	
		
	@Quando("^informar o campo Usarname como \"([^\"]*)\"$")
	public void informar_o_campo_Usarname_como(String arg1) throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.preencherUsuario(arg1);
	}

	@Quando("^informar o campo Passworld como \"([^\"]*)\"$")
	public void informar_o_campo_Passworld_como(String arg1) throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.preencherSenha(arg1);
	}

	@Quando("^clicar no botao Login$")
	public void clicar_no_botao_Login() throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.clicarBotaoLogin();
	}

	@Entao("^o sistema devera autorizar o login, exibindo a pagina Products\\.$")   //  DESCOBRIR COMO VALIDAR
	public void o_sistema_devera_autorizar_o_login_exibindo_a_pagina_Products() throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.validarProductPg();
	}
	
	
	//USERSTEPS
	
	@Quando("^clicar no botao Add To Cart do produto Sauce Labs Backpack$")
	public void clicar_no_botao_Add_To_Cart_do_produto_Sauce_Labs_Backpack() throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.clicarBotaoAddSauceLabsBackpack();

	}

//	@Quando("^selecionar no campo de filtro price Low to Hight$")
//	public void selecionar_no_campo_de_filtro_price_Low_to_Hight() throws Throwable {
//		LoginPage lp = new LoginPage(driver);
//		lp.filtrarProdutos(usuarioBusca); //conferir se ta certo esse parametro 
//
//	}

	@Quando("^clicar no produto com nome Sauce Labs Onesie$")
	public void clicar_no_produto_com_nome_Sauce_Labs_Onesie() throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.clicarNoProdutoSauceLabsOnesie();

	}

//	@Entao("^o sistema ira abrir a pagina do produto$")
//	public void o_sistema_ira_abrir_a_pagina_do_produto() throws Throwable {
//		UserPage up = new UserPage(Hooks.getDriver());
//		up.

//	}

	@Quando("^clicar no botao add to cart$")
	public void clicar_no_botao_add_to_cart() throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.clicarBotaoAddSauceLabsOnesie();

	}

	@Quando("^apertar no botao back to products$")
	public void apertar_no_botao_back_to_products() throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.clicarBotaoVoltarPgProduct();

	}

	

	@Quando("^clicar no botao Remove do produto com nome Sauce Labs Backpack$")
	public void clicar_no_botao_Remove_do_produto_com_nome_Sauce_Labs_Backpack() throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.clicarBotaoRemoverSauceLabsBackpack();

	}

	@Quando("^clicar no botao carrinho$")
	public void clicar_no_botao_carrinho() throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.clicarBotaoCart();

	}

	
	String firstName;
	String lastName;
	Double CEP;
	
	@Quando("^clicar no botao continue checkout$")
	public void clicar_no_botao_continue_checkout() throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.clicarBotaoCheckout();

	}

	@Quando("^informar o campo First Name como \"([^\"]*)\"$")
	public void informar_o_campo_First_Name_como(String firstName) throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.preencherFirstName(firstName);

	}

	@Quando("^informar o campo Last Name como \"([^\"]*)\"$")
	public void informar_o_campo_Last_Name_como(String lastName) throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.preencherLastName(lastName);

	}

	@Quando("^informar o campo Zip/Postal Code como \"([^\"]*)\"$")
	public void informar_o_campo_Zip_Postal_Code_como(String cep) throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.preencherCep(cep);

	}

	@Quando("^clicar no botao continue$")
	public void clicar_no_botao_continue() throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.clicarBotaoContinue();
	}

	
	@Quando("^clicar no botao finish$")
	public void clicar_no_botao_finish() throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.clicarBotaoFinish();
	}
	
	@Entao("^deve ser apresentada a mensagem de sucesso \"([^\"]*)\"$")
	public void deve_ser_apresentada_a_mensagem_de_sucesso(String mensagem) throws Throwable {
		SaucePage lp = new SaucePage(driver);
		lp.validarMensagemdeSucesso(mensagem);
	}

}

