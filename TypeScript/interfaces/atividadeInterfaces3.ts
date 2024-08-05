interface Task{
    title:string;
    completed?:boolean;
}

function taskStatus(task:Task){
    if(task.completed){
        return `Parabéns! Você passou`
    }
    else{
        return `Refazer a Atividade`
    }
}
const task1:Task = {title:`Task1`, completed:true}
const task2:|Task = {title:`Task2`}

console.log(taskStatus(task1))
console.log(taskStatus(task2))