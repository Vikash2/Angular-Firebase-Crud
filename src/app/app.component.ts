import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employee: string;
  employeeName: string;
  employeeAddress: string;
  employeeAge: number;
  message: string;
  constructor() {}
}
