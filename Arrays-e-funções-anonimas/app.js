try{
    const listaDeProdutos = [
        "Café",
        "Água",
        "Biscoito",
        "Manteiga",
        "Requeijão",
        "Refrigerante",
        "Pão",
        "Bala",
        "Sabonete",
    ]; 
    const listaDeArgumentos = process.argv.slice(2);
    const listaDeProdutosDisponiveis =  listaDeProdutos.filter(produto =>{
        return listaDeArgumentos.find(argumentos => argumentos === produto);
    })
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Temos esse Produto: ${produto}`));
       
    const listaDeProdutosIndisponiveis = listaDeArgumentos.filter(argumentos =>{
        return !listaDeProdutos.find(produto => produto === argumentos); 
    })  
    listaDeProdutosIndisponiveis.forEach(argumentos => console.log(`Não temos esse Produto: ${argumentos}`));
    listaDeProdutos.sort();
    listaDeProdutos.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`));
}catch(e){
    console.log("Não foi possivel executar o pedido de compra");
}
