import { Component, Input, OnInit } from '@angular/core';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title: string = "Task Tracker";
  showAddTask!: boolean;
  subscription!: Subscription;
  
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value));
  }

  @Input() text!: string;
  @Input() color!: string;

  ToggleLogTask() {
    this.uiService.toggleAddTask();
  }

  ngOnInit(): void {}
}
