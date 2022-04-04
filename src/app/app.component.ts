import { Component, VERSION } from '@angular/core';

let age: Number;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //primitive type: string, number, boolean
  //Complex type: array, object
  //Function Type
  age = 'asfsd';
  name = 'Angular ' + VERSION.major;
}
