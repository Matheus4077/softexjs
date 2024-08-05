interface Rectangle {
    width:number;
    heigth:number;
}

function getArea(rectangle:Rectangle){
    return `A aréa do seu retangulo tem ${rectangle.width * rectangle.heigth}`;
}

const retangulo:Rectangle = {width:20, heigth:20}

console.log(getArea(retangulo))