/* let fruits = ['apple','banana','orange'];
console.log(fruits.indexOf('banana'));

let fruits2 = ['apple','banana','orange'];
console.log(fruits2.includes('banana'));

let numbers =[1,2,3,4];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);
//[1,4,9,16]

let numbers2 = [1,2,3,4];
let evenNumbers = numbers.filter(num => num % 2 === 0); 
console.log(evenNumbers);
//[2,4] */

const product = [
    {id: 1, nome: "Camisa"},
    {id: 2, nome: "Calça"},
    {id: 3, nome: "Sandálias"}

];

function findProductByID (id){

    const foundProduct = product.find((product) => product.id == id);

    if(!foundProduct){

        return `Produto não listado`
    }
    return foundProduct;
}

console.log(findProductByID(2))