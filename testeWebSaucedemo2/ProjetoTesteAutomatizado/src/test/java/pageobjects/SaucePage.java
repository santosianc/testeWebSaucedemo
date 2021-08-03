package pageobjects;


import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class SaucePage extends MetodosUteis {
	
	protected WebDriver driver;
		
	public SaucePage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (how = How.ID, using = "user-name")
	private WebElement usuario;
	
	@FindBy (how = How.ID, using = "password")
	private WebElement senha;
	
	@FindBy (how = How.ID, using = "login-button")
	private WebElement btnLogin;
	
	@FindBy (how = How.XPATH, using = "//div[@id='header_container']/div[2]/span") 
	private WebElement productPg;
	
	@FindBy (how = How.ID, using = "add-to-cart-sauce-labs-backpack")
	private WebElement btnAddSauceLabsBackpack;

	@FindBy (how = How.XPATH, using = "//a[@id='item_2_title_link']/div")  
	private WebElement clicarSauceLabsOnesie;
		
	@FindBy (how = How.XPATH, using = "//div[@id='inventory_item_container']/div/div/div[2]/button") 
	private WebElement btnAddSauceLabsOnesie;
	
	@FindBy (how = How.XPATH, using = "//div[@id='header_container']/div[2]/div/button") 
	private WebElement btnVoltarPaginaProduct;
	
	@FindBy (how = How.ID, using = "remove-sauce-labs-backpack")
	private WebElement btnRemoverSauceLabsBackpack;
	
	@FindBy (how = How.ID, using = "shopping_cart_container")
	private WebElement btnCart;
	
	@FindBy (how = How.ID, using = "checkout")
	private WebElement btnCheckout;
	
	@FindBy (how = How.ID, using = "first-name")
	private WebElement campoFirstName;
	
	@FindBy (how = How.ID, using = "last-name")
	private WebElement campoLastName;
	
	@FindBy (how = How.ID, using = "postal-code")
	private WebElement campoCEP;
	
	@FindBy (how = How.ID, using = "finish")
	private WebElement btnFinish;
	
	@FindBy (how = How.ID, using = "continue")
	private WebElement btnContinue;
	
	@FindBy (how = How.XPATH, using = "//*[@id='checkout_complete_container']/div")  
	private WebElement mensagemDeSucesso;
	
	
	
	public void preencherUsuario(String nomeUsuario) {
		esperarElemento(usuario);
		usuario.sendKeys(nomeUsuario);
		
	}
	
	public void preencherSenha(String senhaUsuario) {
		esperarElemento(senha);
		senha.sendKeys(senhaUsuario);
		
	}
	
	public void clicarBotaoLogin() {
		esperarElemento(btnLogin);
		btnLogin.click();
	}
	
	public void validarProductPg() {    
		esperarElemento(productPg);
		assertTrue(productPg.isEnabled());
	}
	
	
	public void clicarBotaoAddSauceLabsBackpack() {
		esperarElemento(btnAddSauceLabsBackpack);
		btnAddSauceLabsBackpack.click();
	}
	
	public void clicarNoProdutoSauceLabsOnesie() {
		esperarElemento(clicarSauceLabsOnesie);
		clicarSauceLabsOnesie.click();
	}

	
	public void clicarBotaoAddSauceLabsOnesie() {
		esperarElemento(btnAddSauceLabsOnesie);
		btnAddSauceLabsOnesie.click();
	}
	
	public void clicarBotaoVoltarPgProduct() {
		esperarElemento(btnVoltarPaginaProduct);
		btnVoltarPaginaProduct.click();
	}
	
	public void clicarBotaoRemoverSauceLabsBackpack() {
		esperarElemento(btnRemoverSauceLabsBackpack);
		btnRemoverSauceLabsBackpack.click();
	}
	
	public void clicarBotaoCart() {
		esperarElemento(btnCart);
		btnCart.click();
	}

	public void clicarBotaoCheckout() {
		esperarElemento(btnCheckout);
		btnCheckout.click();
	}
	
	public void preencherFirstName(String firstName) {
		campoFirstName.sendKeys(firstName);

	}
	
	public void preencherLastName(String lastName) {
		campoLastName.sendKeys(lastName);
	}
	
	public void preencherCep(String CEP) {
		campoCEP.sendKeys(CEP);
	}
	
	public void clicarBotaoFinish() {
		esperarElemento(btnFinish);
		btnFinish.click();
	}
	
	public void clicarBotaoContinue() {
		esperarElemento(btnContinue);
		btnContinue.click();
	}
	
	public void validarMensagemdeSucesso(String mensagem) {
		esperarElemento(mensagemDeSucesso);
		System.out.println(mensagemDeSucesso.getText());
		assertEquals(mensagem, mensagemDeSucesso.getText());
	}


	
	
}	
