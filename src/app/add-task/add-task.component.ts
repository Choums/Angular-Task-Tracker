import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  date!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe( (value) => (this.showAddTask = value));
  }

  onSubmit() {
    if (!this.text) {
      alert("Task needed !");
      return ;
    }

    const newTask = {
      text:     this.text,
      date:     this.date,
      reminder: this.reminder
    }
    
      this.onAddTask.emit(newTask);

      this.text = '';
      this.date = '';
      this.reminder = false;
      // this.uiService.toggleAddTask();
  }
}
