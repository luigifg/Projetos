console.log("\n");
console.log("Questão 4)");

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