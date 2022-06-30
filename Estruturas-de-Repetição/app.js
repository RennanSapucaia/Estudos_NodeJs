const argumentos = (process.argv.slice(2));

console.log("---------------Iniciando FOR----------------");

for(let controladorFor = 0; controladorFor < argumentos.length; controladorFor++){
    console.log(`posição: ${controladorFor}, Valor lido = ${argumentos[controladorFor]}`);
}

console.log("------------------Iniciando WHILE----------------");

let loopWhile = 0;
while(loopWhile < argumentos.length){
    console.log(`posição: ${loopWhile}, Valor lido = ${argumentos[loopWhile]}`);
    loopWhile++;
}

console.log("------------------Iniciando DO WHILE----------------");

let controladorDoWhile = 0;
do{
    console.log(`posição: ${controladorDoWhile}, Valor lido = ${argumentos[controladorDoWhile]}`);
    controladorDoWhile++;
} while(controladorDoWhile < argumentos.length);

console.log("-----------------Iniciando FOR OF---------------")

let controladorForOf = 0;
for(const listaArgumentos of argumentos){
    console.log(`posição: ${controladorForOf}, Valor lido = ${argumentos[controladorForOf]}`);
    controladorForOf++;
}