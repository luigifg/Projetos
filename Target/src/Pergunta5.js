console.log("\n");
console.log("Questão 5)");

// String a ser invertida
const string = "Bem vindo!";

// Função para inverter a string
function inverterString(str) {
    let inverte = '';
    for (let i = str.length - 1; i >= 0; i--) {
        inverte += str[i];
    }
    return inverte;
}

// Inverte a string e imprime o resultado
const invertedString = inverterString(string);
console.log("\n");
console.log(`String original: ${string}`);
console.log(`String invertida: ${invertedString}`);
console.log("\n");