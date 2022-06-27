const { Console } = require('console');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let leituraDeCampo;
readline.question('Digite um numero de 1 a 6: ', input => {
    leituraDeCampo = input;
    if(leituraDeCampo > 6){
        console.log("Burro");
    }
    else if(leituraDeCampo < 0){
        console.log("Burro");
    }
    else
    {
        console.log(`O seu número é: ${leituraDeCampo}`);
    }

});


