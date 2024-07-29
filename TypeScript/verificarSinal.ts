function verificarSinal(num: number):string{

    if (num > 0){
        return "Possitivo";
    }
    else if (num < 0){
        return "Negativo";
    }
    else {
        return "Zero";
    }
}

console.log(verificarSinal(1));