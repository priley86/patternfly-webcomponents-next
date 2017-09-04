import { Component, Input } from '@angular/core';
import { HelloComponent } from '../hello.component';

@Component({
  templateUrl: './hello-example.component.html',
  styles: [
    `main {
      margin: 15px;
      max-width: 600;
      lineHeight: 1.4;
      fontFamily: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;
    }`
  ]
})
export class HelloExampleComponent extends HelloComponent {}
