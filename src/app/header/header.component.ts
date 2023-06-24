import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() {}

  title: string = "Task Tracker";

  @Input() text!: string;
  @Input() color!: string;

  ToggleLogTask() {
    console.log("Demande de Login !");
  }

  ngOnInit(): void {}
}
