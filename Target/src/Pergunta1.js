/*1) Observe o trecho de código abaixo:
int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}
imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?*/

console.log("\n");

let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log("Questão 1)") ;
console.log("Resultado", SOMA) ;
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/ 
console.log("Questão 2)");

function pertenceAFibonacci(n) {
    if (n === 0) return true;
    let a = 0, b = 1;
    while (b < n) {
        [a, b] = [b, a + b];
    }
    return b === n;
}

// Usando o módulo readline para interagir com o usuário via terminal
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Informe um número para verificar se pertence à sequência de Fibonacci: ', numero => {
    const num = parseInt(numero, 10); // Convertendo a entrada do usuário para um número inteiro
    if (pertenceAFibonacci(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    }
    readline.close();


    console.log("\n");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____ */

    console.log("Questão 3)");
    console.log("Sequência a) 1, 3, 5, 7, ___");//Numeros impares consecutivos.
    const sequenciaA = [1, 3, 5, 7];
    const proximoA = sequenciaA[sequenciaA.length - 1] + 2;
    console.log(`a) O próximo elemento da sequência é: ${proximoA}`);

    console.log("Sequência b) 2, 4, 8, 16, 32, 64, ___");//Cada numero e o dobro do numero anterior.
    const sequenciaB = [2, 4, 8, 16, 32, 64];
    const proximoB = sequenciaB[sequenciaB.length - 1] * 2;
    console.log(`b) O próximo elemento da sequência é: ${proximoB}`);

    console.log("Sequência c) 0, 1, 4, 9, 16, 25, 36, ___");//Cada numero e o quadrado do seu indice na sequencia.
    const sequenciaC = [0, 1, 4, 9, 16, 25, 36];
    const proximoC = Math.pow(sequenciaC.length, 2);
    console.log(`c) O próximo elemento da sequência é: ${proximoC}`);

    console.log("Sequência d) 4, 16, 36, 64, ___");//Cada numero e o quadrado de um numero par consecutivo.
    const sequenciaD = [4, 16, 36, 64];
    const proximoD = Math.pow((sequenciaD.length + 1) * 2, 2);
    console.log(`d) O próximo elemento da sequência é: ${proximoD}`);

    console.log("Sequência e) 1, 1, 2, 3, 5, 8, ___");//Uma serie de Fibonacci
    const sequenciaE = [1, 1, 2, 3, 5, 8];
    const proximoE = sequenciaE[sequenciaE.length - 1] + sequenciaE[sequenciaE.length - 2];
    console.log(`e) O próximo elemento da sequência é: ${proximoE}`);

    console.log("Sequência f) 2, 10, 12, 16, 17, 18, 19, ___"); //Numeros que comecam com a letra D
    const proximoF = 200;
    console.log(`f) O próximo elemento da sequência é: ${proximoF}`);
    console.log("\n");
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, 
mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?*/

function descobrirInterruptores() {
    // Inicialmente, todas as lâmpadas estão apagadas
    let lampada1 = false;
    let lampada2 = false;
    let lampada3 = false;

    // Ligando o primeiro interruptor
    lampada1 = true;

    // Desligando o primeiro interruptor e ligando o segundo interruptor
    lampada1 = false;
    lampada2 = true;

    // Indo até a sala das lâmpadas
    if (lampada2) {
        // A lâmpada 2 está acesa, logo o interruptor 2 controla a lâmpada 2
        console.log("O interruptor 2 controla a lâmpada 2.");
        console.log("A lâmpada 1 está fria e a lâmpada 3 está apagada.");
    } else {
        // A lâmpada 2 está apagada, logo o interruptor 2 não controla a lâmpada 2
        console.log("O interruptor 2 não controla a lâmpada 2.");
    }

    // Se a lâmpada 1 está fria, então o interruptor 1 controla a lâmpada 1
    console.log("O interruptor 1 controla a lâmpada 1.");

    // Se a lâmpada 3 está apagada, então o interruptor 3 controla a lâmpada 3
    console.log("O interruptor 3 controla a lâmpada 3.");
}

// Executando a função para descobrir os interruptores
descobrirInterruptores();