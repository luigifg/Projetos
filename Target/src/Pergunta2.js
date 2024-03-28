console.log("\n");
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

readline.question('Informe um número para verificar se pertence à sequência de Fibonacci: ', (numero) => {
    const num = parseInt(numero, 10); // Convertendo a entrada do usuário para um número inteiro
    if (pertenceAFibonacci(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    }
    readline.close();
});
