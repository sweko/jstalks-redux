import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appValue: number = 10;

  title = "My JS Talks '18 app";

  valueChanged(value) {
    this.appValue = value;
  }

}
