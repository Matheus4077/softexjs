// isso é uma API, a interface começa com letra MAISCULA
interface Produto {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
};
/*a interface é um contrato com o objeto, ela define oq vc tem que adicionar no objeto é obrigatorio,
 se quiser que as informaçoes da interface seja opcional, colocar uma "?" EX: id?: numer;
*/
const produtos:Produto[] =[
    { 
     id:1,
     nome:"Produto1", 
     preco:100, 
     categoria:"Categoria1"
    },
    {
     id:2,
     nome:"Produto2",
     preco:200,
     categoria:"Categoria2"},

];

function addProduto(produto: Produto): Produto {
  produtos.push(produto)
  return produto;
};

const novoProduto = {
    id:3,
    nome:"Produto3",
    preco:300,
    categoria:"Categoria3"
};

// Chamando a function esta adicionando a variavel "novoProduto" na "function" e empurrando em "produtos"
addProduto(novoProduto);

addProduto({id:4, nome:"Produtos4", preco: 400, categoria: "Categoria4"})

console.log(produtos);
