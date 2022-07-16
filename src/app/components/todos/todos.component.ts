import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faCircleCheck,
  faCirclePlus,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { TodoModel } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  inputTodo: string = '';

  faDelete = faCircleXmark;
  faToDo = faCircle;
  faDone = faCircleCheck;
  faAdd = faCirclePlus;

  showAdd: boolean = false;

  public todos: Array<TodoModel> = [
    {
      content: 'First todo',
      completed: false,
    },
    {
      content: 'Second todo',
      completed: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    });
  }

  public deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  public addTodo(newTodo: string) {
    this.showAdd = false;

    if (newTodo == '') {
      return;
    }

    this.todos.push({
      content: newTodo,
      completed: false,
    });
  }

  public newTodo() {
    this.showAdd = true;
  }
}
