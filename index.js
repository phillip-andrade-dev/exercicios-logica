const prompt = require("prompt-sync")();

//Exercicio 1
//Escreva um programa que imprima "Olá, mundo!" na tela.
function olaMundo(){
    var mensagem = prompt("Digite uma mensagem: ");
    console.log(mensagem);
}

//Exercicio 2
//Crie um programa que solicite o nome do usuário e, em seguida, 
//imprima uma mensagem personalizada com o nome inserido.
function nome(){
    var nome = prompt("Digite seu nome: ");
    var sobrenome = prompt("Digite seu sobre nome: ");
    console.log(nome + " " + sobrenome + " Seja bem vindo!");
}

//Exercicio 3
//Escreva um programa que calcule a soma de dois números inteiros e exiba o resultado.
function soma(){
    var num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
    var num2 = parseInt(prompt("Digite o segundo numerointeiro : "));
    var total = num1 + num2;
    console.log("A soma dos dois numeros é: " + total);
}

//Exercicio 4
//Crie um programa que receba a idade de uma pessoa e informe so ela é maior ou menor de idade.
function idade(){
    var idade = parseInt(prompt("Digite sua idade: "));
    if(idade => 18){
        console.log("Sua idade é: " + idade + "e você é maior de idade");
    } else{
        console.log("Sua idade é: " + idade + "e você não maior de idade");
    }
}

//Exercicio 5
//Faça um programa que verifique se um número é par ou impar
function parImpar(){
    var numero = parseInt(prompt("Digite um numero: "));
    if(numero % 2 === 0){
        console.log("O numero " + numero + " digitado é par");
    }else{
        console.log("O numero " + numero + " digitado é impar");
    }
}

//Exercicio 6
//Escreva um programa que calcule a média de très números informados pelo usuário
function media3(){
    var num1 = parseInt(prompt("Digite o primeiro numero: "));
    var num2 = parseInt(prompt("Digite o segunto numero: "));
    var num3 = parseInt(prompt("Digite o terceiro numero: "));
    var total = num1 + num2 + num3;
    var media = total/3;

    console.log("A média dos três numeros digitados é: " + media);
}

//Exercicio 7
//Crie um programa que imprima os números de 1 a 10 em ordern crescente.
function imprimirNumeros(){
    for(var cont = 1; cont <= 10; cont ++){
        console.log(cont + "\n");
    }
}

//Exercicio 8
//Faça um programa que imprima os números pares de 1 a 20.
function imprimirNumerosPares(){
    for(var cont = 1; cont <= 20; cont ++){
        if(cont % 2 === 0){
            console.log(cont + " é par!")
        }
    }
}

//Exercicio 9
//Crie um programa que determine se um número é primo ou não.
function numeroPrimo(){
    var num = parseInt(prompt("Digite o numero inteiro: "));
    if(num === 2 || (!(num % 2 === 0) && num % num === 0)){
        console.log("O numero digitado: " + num + " é um numero primo!")
    }else{
        console.log("O numero digitado: " + num + " não é um numero primo!")
    }
}

//Exercicio 10
//Faça um programa que converta graus Celsius para Fahrenheit.
function convertCelsiusFahrenheit(){
    var temp = parseFloat(prompt("Digite uma temperatura em graus Celsius: "));
    const constante = parseFloat(1.8);
    var tempConvert = (temp * constante) + 32;
    console.log("A temperatura em Fahrenheit é: " + tempConvert);
}

//Exercicio 11
//Escreva um programa que receba uma lista de números e imprima apenas os números pares.
function listaNumerosPares(){
    var valor = prompt("Digite um numero inteiro, ou sair para encerrar: ");
    var listNum = [];
    while(entrada != "sair"){
        listNum.push.parseInt(valor);
    }
    const listPar = listNum.filter(par => par % 2 === 0);
    console.log("Os numero: " + listPar + " são par!");
}

//Exercicio 12
//Escreva um programa que receba uma lista de números e retorne o maior e o menor valor.
function maiorMenor(){
    var valor = prompt("Digite um numero inteiro, ou sair para encerrar: ");
    var listNum = [];
    while(entrada != "sair"){
        listNum.push.parseInt(valor);
        listNum.sort((a, b) => a - b);
    }
    var ultimoIndex = listNum.length;
    console.log("O menor numero é: " + listNum.indexOf(0));
    console.log("O maior numero é: " + listNum.indexOf(ultimoIndex));
}

//Exercicio 13
//Faça um programa que verifique se uma palavra é um palindromo 
//(se pode ser lide da mesma forma de trás para frente).
function palindromo(){
    console.log("Uma palavra palindroma pode-se ler, indiferentemente, da esquerda para a direita ou vice-versa");
    var palavra = [];
    palavra = prompt.toString("Digite uma palavra para verificar: ");
    var splitPalavra = palavra.split("");
    var revertPalavra = splitPalavra.reverse();
    const palavraInvertida = revertPalavra.join("");
    if(palavra.toString === palavraInvertida.toString){
        console.log("A palavra digitada é um palindromo");
    }else{
        console.log("A palavra digitada não é um palindromo");
    }
}

//Exercicio 14
//Crie um programa que inverta a ordem dos elementos em uma lista
function invertLista(){
    var lista = [];
    lista = promt.toString("Digite uma sequência de caracteres para ser escrito invertido");
    var splitLista = lista.split("");
    var revertLista = splitLista.reverse();
    const listaInvertida = revertLista.join("");
    console.log("Os caracteres invertidos fica: " + listaInvertida);
}
//Exercicio 15
//Faça um programa que simule um jogo de adivinhação, onde o computador escolhe um 
//número e o usuário tenta adivinhar
function jogoAdvinhacao(){
    let continuar = "S";
    while (continuar === "S") {
        const numero = prompt.parseInt("Digite um numero inteiro entre 1000 - 9999: ");
        console.log("O numero digitado foi: " + numero);
        const sorteio = Math.floor(Math.random() * 1000) - 9999;
        if (numero === sorteio) {
            console.log("Parabéns você acertou, o numero sorteado foi: " + sorteio);
            continuar = prompt.toString("Quer tentar novamente: S[sim] N[não]: ");
        } else {
            console.log("Que pena você errou, o numero sorteado foi: " + sorteio);
            continuar = prompt.toString("Quer tentar novamente: S[sim] N[não]: ");
        }
    }
}
