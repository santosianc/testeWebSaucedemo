$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Usarname como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Passworld como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo a pagina Products.",
  "keyword": "Entao "
});
formatter.step({
  "line": 14,
  "name": "clicar no botao Add To Cart do produto Sauce Labs Backpack",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "clicar no produto com nome Sauce Labs Onesie",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao add to cart",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "apertar no botao back to products",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "clicar no botao Remove do produto com nome Sauce Labs Backpack",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clicar no botao carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "clicar no botao continue checkout",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "informar o campo First Name como \"\u003cnome\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "informar o campo Last Name como \"\u003csobrenome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "informar o campo Zip/Postal Code como \"\u003cCEP\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clicar no botao continue",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "clicar no botao finish",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "deve ser apresentada a mensagem de sucesso \"\u003cmensagemDeSucesso\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "login;realizar-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha",
        "nome",
        "sobrenome",
        "CEP",
        "mensagemDeSucesso"
      ],
      "line": 31,
      "id": "login;realizar-login-com-sucesso;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Jamili",
        "Suassuna",
        "73040100",
        "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
      ],
      "line": 32,
      "id": "login;realizar-login-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 2906812000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "SauceSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 1068694000,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Usarname como \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Passworld como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo a pagina Products.",
  "keyword": "Entao "
});
formatter.step({
  "line": 14,
  "name": "clicar no botao Add To Cart do produto Sauce Labs Backpack",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "clicar no produto com nome Sauce Labs Onesie",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao add to cart",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "apertar no botao back to products",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "clicar no botao Remove do produto com nome Sauce Labs Backpack",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "clicar no botao carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "clicar no botao continue checkout",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "informar o campo First Name como \"Jamili\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "informar o campo Last Name como \"Suassuna\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "informar o campo Zip/Postal Code como \"73040100\"",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clicar no botao continue",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "clicar no botao finish",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "deve ser apresentada a mensagem de sucesso \"Your order has been dispatched, and will arrive just as fast as the pony can get there!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 32
    }
  ],
  "location": "SauceSteps.informar_o_campo_Usarname_como(String)"
});
formatter.result({
  "duration": 778412000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "SauceSteps.informar_o_campo_Passworld_como(String)"
});
formatter.result({
  "duration": 252645000,
  "status": "passed"
});
formatter.match({
  "location": "SauceSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 245526300,
  "status": "passed"
});
formatter.match({
  "location": "SauceSteps.o_sistema_devera_autorizar_o_login_exibindo_a_pagina_Products()"
});
formatter.result({
  "duration": 402600000,
  "status": "passed"
});
formatter.match({
  "location": "SauceSteps.clicar_no_botao_Add_To_Cart_do_produto_Sauce_Labs_Backpack()"
});
formatter.result({
  "duration": 161264200,
  "status": "passed"
});
formatter.match({
  "location": "SauceSteps.clicar_no_produto_com_nome_Sauce_Labs_Onesie()"
});
formatter.result({
  "duration": 160047200,
  "status": "passed"
});
formatter.match({
  "location": "SauceSteps.clicar_no_botao_add_to_cart()"
});
formatter.result({
  "duration": 178769000,
  "status": "passed"
});
formatter.match({
  "location": "SauceSteps.apertar_no_botao_back_to_products()"
});
formatter.result({
  "duration": 148604800,
  "status": "passed"
});
formatter.match({
  "location": "SauceSteps.clicar_no_botao_Remove_do_produto_com_nome_Sauce_Labs_Backpack()"
});
formatter.result({
  "duration": 369815800,
  "status": "passed"
});
formatter.match({
  "location": "SauceSteps.clicar_no_botao_carrinho()"
});
formatter.result({
  "duration": 136702200,
  "status": "passed"
});
formatter.match({
  "location": "SauceSteps.clicar_no_botao_continue_checkout()"
});
formatter.result({
  "duration": 124454800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jamili",
      "offset": 34
    }
  ],
  "location": "SauceSteps.informar_o_campo_First_Name_como(String)"
});
formatter.result({
  "duration": 163088200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suassuna",
      "offset": 33
    }
  ],
  "location": "SauceSteps.informar_o_campo_Last_Name_como(String)"
});
formatter.result({
  "duration": 132018400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "73040100",
      "offset": 39
    }
  ],
  "location": "SauceSteps.informar_o_campo_Zip_Postal_Code_como(String)"
});
formatter.result({
  "duration": 185395400,
  "status": "passed"
});
formatter.match({
  "location": "SauceSteps.clicar_no_botao_continue()"
});
formatter.result({
  "duration": 183646300,
  "status": "passed"
});
formatter.match({
  "location": "SauceSteps.clicar_no_botao_finish()"
});
formatter.result({
  "duration": 170801000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been dispatched, and will arrive just as fast as the pony can get there!",
      "offset": 44
    }
  ],
  "location": "SauceSteps.deve_ser_apresentada_a_mensagem_de_sucesso(String)"
});
formatter.result({
  "duration": 111570000,
  "status": "passed"
});
formatter.after({
  "duration": 962264100,
  "status": "passed"
});
});