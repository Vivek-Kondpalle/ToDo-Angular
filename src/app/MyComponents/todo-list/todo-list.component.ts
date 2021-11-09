import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  localItem: string
  todos: Todo[];

  constructor() {
    this.localItem = localStorage.getItem("todos")
    if(this.localItem === null){
      this.todos = []
    } else {
      this.todos = JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
  }

  deleteTodofromList(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  addTodoToList(todo: Todo){
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
