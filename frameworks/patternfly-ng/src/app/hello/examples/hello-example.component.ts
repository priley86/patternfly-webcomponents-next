import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-example',
  styles: [
    `
    .padding-top-15 {
      padding-top: 15px;
    }
    
    .padding-bottom-15 {
      padding-bottom: 15px;
    }
  `
  ],
  templateUrl: './hello-example.component.html'
})
export class HelloExampleComponent implements OnInit {
  name: string = 'Dan';

  constructor() {}

  ngOnInit(): void {}
}
