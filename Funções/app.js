const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}) 
function validar(numero){

    const floatValido = Number.parseFloat(numero);
    if(!floatValido){
        console.log("Número invalido");
    }
    return floatValido;
}
function operadores(operador){
    switch(operador){
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default:
            console.log("Operador invalido");
            return null;   
    }
}
readLine.question('Escolha um Número: ', (numero1) => {
    const numeroValidado1 = validar(numero1);
    if(numeroValidado1){
        readLine.question('Escolha outro Número: ', (numero2) => {
            const numeroValidado2 = validar(numero2);
            if(numeroValidado2){
                readLine.question('Escolha um operador: ', (operador) => {
                    const operadorValidado = operadores(operador);
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+': 
                                console.log(`Operador de Soma`);
                                console.log(`${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break; 
                            case '-':
                                console.log(`Operador de Subtração`);
                                console.log(`${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '*':
                                console.log(`Operador de Multiplicação`);
                                console.log(`${numeroValidado1} x ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '/':
                                console.log(`Operador de Divisão`);
                                console.log(`${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '%':
                                console.log(`Operador de Modulo`);
                                console.log(`${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                        }
                    }
                })
            }
        })
    }
})