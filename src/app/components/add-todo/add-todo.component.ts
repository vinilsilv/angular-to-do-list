import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Input() isVisible: boolean = false;
  @Output() todoEvent = new EventEmitter();

  public inputTodo: string = 'Test Emit';

  constructor() { }

  ngOnInit(): void {
  }

  public sendNewTodo() {
    this.todoEvent.emit(this.inputTodo)
    this.isVisible = false;
  }

}
