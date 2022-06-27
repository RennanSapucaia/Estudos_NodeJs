const { stdin, stdout } = require('process');

const readLine = require('readline').createInterface({
    input: stdin,
    output: stdout
})

console.log("Esse código vai te responder se você pode ou não entrar na festa")
console.log("Responda as perguntas para ter o resultado!")

readLine.question('Qual é a sua idade?: ', idade => {
    if(idade < 18)
    {
        console.log("Você é menor de idade, não pode entrar")
    }
    else
    {
        readLine.question('Você foi convidado por alguem? (Sim/Não)', temConvite => {
            if(!(temConvite.toUpperCase() === "SIM"))
            {
                console.log('Você não foi convidado por ninguem')
            }
            else
            {
                readLine.question('Qual o seu nome ?: ', nome => {
                    switch(nome){
                        case 'Teus' :
                            console.log("Teus apenas");
                            break;

                        case 'Lucas' :
                            console.log("Não");
                            break;

                    }
                })
            }
        })
    }


    })