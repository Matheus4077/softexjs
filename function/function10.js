function parOuImpar(numero){

    if(numero % 2 ==0){
        return `par`;
    }
    else{
        return`impar`
    }
}

console.log(parOuImpar(7))