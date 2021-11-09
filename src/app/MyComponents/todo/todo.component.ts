import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    this.todoDelete.emit(todo)
    console.log('todo', todo)
  }
}
