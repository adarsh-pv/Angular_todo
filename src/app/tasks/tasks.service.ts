import { Injectable } from "@angular/core"
import { NewTaskData } from "./task/task.model"

@Injectable({providedIn: 'root'})
export class TaskService {
   private tasks =[
        {
          id:'t1',
          userId:'u1',
          title:'Master Angular',
          summary:'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate:'2024-Nov-16'
        },
        {
          id:'t2',
          userId:'u2',
          title:'Master Laravel',
          summary:'Learn all the basic and advanced features of Laravel & how to apply them.',
          dueDate:'2024-Dec-1'
        },
        {
          id:'t4',
          userId:'u1',
          title:'Master Laravel',
          summary:'Learn all the basic and advanced features of Laravel & how to apply them.',
          dueDate:'2024-Dec-1'
        },
        {
          id:'t3',
          userId:'u3',
          title:'Complete Project using Angular and Laravel',
          summary:'Practical experience in the Angular and Laravel',
          dueDate:'2025-Feb-1'
        }
      ]

      constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
      }
  
  getUserTasks(userId:string){
    return this.tasks.filter((task)=>task.userId === userId)
  }
  addTask(taskData:NewTaskData,userId:string){
    this.tasks.unshift({
        id:new Date().getTime().toString(),
        userId:userId,
        title:taskData.title,
        summary:taskData.summary,
        dueDate:taskData.date
      })
     this.saveTasks();
  }
  removeTask(id:string){
  this.tasks = this.tasks.filter((task)=>task.id !==id)
  this.saveTasks()

  }
  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }
}