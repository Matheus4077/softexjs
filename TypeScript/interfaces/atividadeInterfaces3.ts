interface Task{
    title:string;
    completed?:boolean;
}

function taskStatus(task:Task){
    if(task.completed){
        return `${task.title}: Tarefa Concluida `
    }
        return `${task.title}: Tarefa não Concluida, refazer!`
}
const task1:Task = {title:`Task1`, completed:true}
const task2:|Task = {title:`Task2`}

console.log(taskStatus(task1))
console.log(taskStatus(task2))