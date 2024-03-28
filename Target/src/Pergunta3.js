console.log("\n");
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

