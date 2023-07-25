import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      Hello Anup Mohan !!
    </p>
    <div class="container">
      <h1>Hello, this is my library using Bootstrap!</h1>
      <button class="btn btn-success">Click Me</button>
    </div>
  `,
  styleUrls: ['./my-lib.component.scss']
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
