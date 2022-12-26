import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/appInter.interface';
import { ServicesService } from '../../services/allServices.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: []
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  status: String[] = [];

  todoDate: Date = new Date; 
  booleanFinishDate: boolean = true;

  constructor(private todoServices: ServicesService) { 
  }

  ngOnInit(): void {
    this.todoServicesInyected();
  }
  
  todoServicesInyected(){
    this.todoServices.getTodo().subscribe((resp) =>{
        this.todos = resp;
        this.hardFinishTodo();
    })
  }

 todoStatus(i: number){
   ( this.todos[i].completed ) ? this.status[i] = 'Active': 
                                 this.status[i] = 'Finished'; 
   return this.status[i];
 }

  todoStatusChange(i: number){
      this.todos[i].completed = !this.todos[i].completed;
    ( this.todos[i].completed ) ? this.status[i] = 'Finished' : 
                                  this.status[i] = 'Active'; 
  }
  changeDate(i: number){
        this.booleanFinishDate =false;
       if( !this.todos[i].completed ){
             this.todos[i].finishTodo = new Date;
          }else{
            this.todos[i].finishTodo = new Date;
          }
    }
    hardFinishTodo(){
      
      this.todos.forEach(todo => {
        if( !todo.completed ){
          todo.finishTodo = new Date;
        }
      });
    }

  headerColor( status: boolean ){
    return (status) ? 'activedTodo' : 'finishedTodo'; 
  }
  
  icon( status: boolean ){
    return ( status ) ? 'pi pi-check-circle' : 'pi pi-times-circle';  
  }

  //revisar este bloque de codigo
  testDate(i: number){
    
    if(this.todos[i].finishTodo.toString.length === 0){
       this.todos[i].finishTodo = new Date;
    }
    return this.todos[i].finishTodo;
  }

}
